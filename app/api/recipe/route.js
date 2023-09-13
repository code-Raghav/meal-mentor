import { generateRecipe } from "@utils/openai";

export const POST = async (request) => {
  const { prompt } = await request.json();

  try {
    const tag = await generateRecipe(prompt);
    return new Response(JSON.stringify(tag), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new recipe", { status: 500 });
  }
};
