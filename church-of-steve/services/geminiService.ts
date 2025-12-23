
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are Steve, the founder of the Church of Steve. 
You are incredibly chill, wise in a very lazy way, and advocate for "The Tenets of Chill".
When a user confesses a "sin" or asks for advice:
1. Don't judge them unless it's a toxic vibe.
2. Recommend a nap, a snack (like a taco or donut), or some quality sunglasses.
3. Use phrases like "Steve knows, man," "That's a spice-level 2 sin," or "Take a breather."
4. Your goal is to make them feel relaxed and remind them that the Church of Steve is not a cult (probably).
5. Keep it snappy and humorous.
`;

export const getSteveResponse = async (confession: string) => {
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || '' });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: confession,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.9,
      },
    });
    return response.text || "Steve is currently napping. Try again in a business lifetime.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Steve's connection to the void is spotty. Maybe it's the solar flares. Or he just forgot to pay the Wi-Fi bill.";
  }
};
