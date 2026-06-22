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

    const clientKey = req.headers.get("x-gemini-key");
    const apiKey = (clientKey && clientKey !== "null" && clientKey !== "undefined" && clientKey.trim() !== "")
      ? clientKey.trim()
      : process.env.GEMINI_API_KEY;

    if (!apiKey || apiKey === "your_gemini_api_key_here") {
      // Sandbox fallback mode when key is not configured
      let responseText = "### 📚 Sandbox Tutor Mode\n\nI am currently in sandbox demo mode because the Gemini API Key is not configured. To enable live AI responses, please add your API key in the tutor settings.\n\nHere is information from the curriculum:";
      if (course) {
        let slug = course;
        if (slug === "chemistry") slug = "ap-chemistry";
        if (slug === "biology") slug = "ap-biology";

        const courseData = courseRegistry[slug];
        if (courseData && courseData.units) {
          const allTopics = courseData.units.flatMap(u => u.topics || []);
          const lastUserMessage = chatMessages.filter((msg: any) => msg.role === "user").pop();
          const userQuery = lastUserMessage ? lastUserMessage.content.toLowerCase() : "";
          
          const matchedTopic = allTopics.find(t => 
            userQuery.includes(t.title.toLowerCase()) || 
            t.title.toLowerCase().includes(userQuery) ||
            (t.article && t.article.toLowerCase().includes(userQuery))
          );
          
          if (matchedTopic) {
            responseText = `### 📚 Sandbox Tutor Mode: ${matchedTopic.title}\n\nHere is a summary of this concept from the curriculum:\n\n${matchedTopic.article || "No detailed notes available."}\n\n*Note: To chat dynamically with the live AI, please configure your Gemini API Key in the settings gear.*`;
          } else {
            responseText = `### 📚 Sandbox Tutor Mode\n\nI am currently operating in sandbox mode using the curriculum database. Here are the units covered in this course:\n\n${courseData.units.map(u => `- **Unit ${u.id}:** ${u.title}`).join("\n")}\n\n*To unlock full interactive chat with the AI Tutor, please click the settings gear (⚙️) in the top-right and add your Gemini API Key.*`;
          }
        }
      }
      return NextResponse.json({ text: responseText });
    }

    const ai = new GoogleGenAI({ apiKey });

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
