"use client";
import { useState, useEffect } from "react";
import GetChatGPTText from "../api/chatgpt/chatgpt";
import { FaLock } from "react-icons/fa";

export default function ChatEntry({
  raceText,
  setRaceText,
  lockChat,
  setLockChat,
}: {
  raceText: string;
  setRaceText: (text: string) => void;
  lockChat: boolean;
  setLockChat: (lock: boolean) => void;
}) {
  const [value, setValue] = useState("");
  console.log("lockChat value:", lockChat);

  useEffect(() => {
    if (raceText) {
      try {
        console.log(JSON.parse(raceText));
      } catch {
        console.log(raceText);
      }
    }
  }, [raceText]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const data = await GetChatGPTText(value);
      setRaceText(data);
      setLockChat(true);
      setValue(""); // Reset input value
      console.log("enter pressed");
    }
  };

  return (
    <>
      {!lockChat ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask a topic..."
          className="border-2 rounded-xl px-4 py-2 w-2/5 focus:outline-none focus:scale-105 focus:text-1xl ease-in-out duration-300"
        />
      ) : (
        <div className="border-2 rounded-xl px-4 py-2 w-2/5 bg-green-200 text-gray-500">
          <FaLock />
        </div>
      )}
    </>
  );
}
