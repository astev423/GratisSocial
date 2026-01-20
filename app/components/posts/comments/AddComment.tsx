"use client";

import { type Dispatch, type SetStateAction, useState } from "react";
import { createComment } from "@/lib/client/utils";

type AddCommentProps = {
  postId: string;
  refetch: Dispatch<SetStateAction<number>>;
  setRefresh: Dispatch<SetStateAction<number>>;
};

export default function AddComment({ postId, refetch, setRefresh }: AddCommentProps) {
  const [inputText, setInputText] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inputText == "") {
      console.error("Comments can't be empty");
      return;
    }
    const res = await createComment(inputText, postId);
    if (!res) {
      console.error("Failed to make comment!");
      return;
    }

    setInputText("");
    refetch((i) => i + 1);
    setRefresh((i) => i + 1);
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="border-2 rounded-xl p-1 w-[10vw]"
          type="text"
          placeholder="Add comment"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>
      </form>
    </div>
  );
}
