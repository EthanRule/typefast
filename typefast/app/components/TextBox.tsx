"use client";
import { useState, useRef } from "react";

export default function TextBox({
  raceText,
  lockChat,
  setLockChat,
}: {
  raceText: string;
  lockChat: boolean;
  setLockChat: (lock: boolean) => void;
}) {
  const [userText, setUserText] = useState("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key.length === 1 && !event.ctrlKey && !event.metaKey) {
      setUserText((prev) => prev + event.key);
    } else if (event.key === "Backspace") {
      setUserText((prev) => prev.slice(0, -1));
    }
  };

  return (
    <div
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="border-2 text-3xl rounded-xl px-4 py-2 w-3/5 my-4 h-[50vh] overflow-auto outline-none"
      style={{ cursor: "text" }}
    >
      {raceText}
      <div className="mt-4 text-yellow-400">{userText}</div>
    </div>
  );
}
