import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Recipe Name is required."],
  },
  tag: {
    type: String,
    required: [true, "Recipe is required."],
  },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;

/*1.) Take one cup of oats, a scoop of your favorite whey protein, a two tablespoons of peanut butter.
2.) Now add honey according to how sweetened your whey is.
3.) Finally add a splash of milk and mix. Add more milk whenever required.
4.) Refrigerate overnight and you are done!   */
