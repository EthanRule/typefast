"use client";
import { useState } from "react";
import GetChatGPTText from "../api/chatgpt/chatgpt";

export default function ChatEntry() {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      await GetChatGPTText(value);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder="Custom test..."
      className="border-2 rounded-xl px-4 py-2 w-2/5 focus:outline-none focus:scale-105 focus:text-1xl ease-in-out duration-300"
    />
  );
}
