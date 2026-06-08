import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { courseRegistry } from "@/lib/courses/course-registry";

export async function POST(req: Request) {
  try {
    const { messages, course } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages format" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Gemini API Key not configured" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Normalize course parameter to slug format
    let slug = course;
    if (slug === "chemistry") slug = "ap-chemistry";
    if (slug === "biology") slug = "ap-biology";

    const courseData = courseRegistry[slug];
    if (!courseData) {
      return NextResponse.json({ error: `Invalid course type: ${course}` }, { status: 400 });
    }

    const curriculumData = JSON.stringify(courseData.units);

    const systemInstruction = `You are an elite ${courseData.name} tutor for the 'AP Lab' platform.
    
CRITICAL RULES:
1. Your sole purpose is to help students understand the concepts strictly based on the provided AP Lab Curriculum Data below.
2. Do NOT hallucinate or bring in outside information that isn't covered in the curriculum data.
3. Keep your answers clear, supportive, and concise. Use markdown formatting to make answers readable.
4. If a user asks something completely unrelated to the curriculum or course, politely steer them back.
    
CURRICULUM DATA:
${curriculumData}
`;

    // Map messages to the format expected by GoogleGenAI
    const contents = messages.map((msg: any) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents,
      config: {
        systemInstruction,
        temperature: 0.3,
      }
    });

    return NextResponse.json({ text: response.text });

  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: error.message || "Failed to generate response." }, { status: 500 });
  }
}
