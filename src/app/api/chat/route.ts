import { NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";
import { courseRegistry } from "@/lib/courses/course-registry";

export async function POST(req: Request) {
  try {
    const { messages, message, course } = await req.json();

    let chatMessages = messages;
    if (!chatMessages && message) {
      chatMessages = [{ role: 'user', content: message }];
    }

    if (!chatMessages || !Array.isArray(chatMessages)) {
      return NextResponse.json({ error: "Invalid messages/message format" }, { status: 400 });
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "Gemini API Key not configured" }, { status: 500 });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Build system instruction
    let systemInstruction = "You are an elite, supportive AI assistant for the AP Lab educational platform. " +
                            "Help students understand AP curriculum topics clearly and concisely using Markdown.";

    if (course) {
      let slug = course;
      if (slug === "chemistry") slug = "ap-chemistry";
      if (slug === "biology") slug = "ap-biology";

      const courseData = courseRegistry[slug];
      if (courseData) {
        const curriculumData = JSON.stringify(courseData.units);
        systemInstruction = `You are an elite ${courseData.name} tutor for the 'AP Lab' educational platform.
        
CRITICAL RULES:
1. Your sole purpose is to help students understand the concepts strictly based on the provided AP Lab Curriculum Data below.
2. Do NOT hallucinate or bring in outside information that isn't covered in the curriculum data.
3. Keep your answers clear, supportive, and concise. Use markdown formatting to make answers readable.
4. If a user asks something completely unrelated to the curriculum or course, politely steer them back.
    
CURRICULUM DATA:
${curriculumData}
`;
      }
    }

    // Map messages to the format expected by GoogleGenAI
    const contents = chatMessages.map((msg: any) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
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
