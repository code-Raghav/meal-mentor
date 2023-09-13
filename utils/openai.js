const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

export async function generateRecipe(title) {
  try {
    const prompt = `Generate a recipe for ${title}:
      - Instructions:
      `;
    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 100,
    });
    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
