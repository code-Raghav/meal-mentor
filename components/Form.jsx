import React from "react";
import Link from "next/link";

const Form = ({ type, setPost, post, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing recipes with the world, and let your
        imagination run wild with any AI powered platform
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Recipe
          </span>
          <input
            value={post?.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your recipe name here..."
            required
            className="form_input"
          />
          <textarea
            value={post?.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="Write your recipe here...(Leave empty if you want AI to automatically generate the recipe)"
            className="form_textarea"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>
          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm rounded-full bg-primary-orange text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
