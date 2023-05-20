"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

import Form from "@components/Form";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {};
  return (
    <Form
      type="Create"
      setPost={setPost}
      post={post}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
