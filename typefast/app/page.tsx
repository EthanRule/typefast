"use client";
import Image from "next/image";
import { useState } from "react";
import ChatEntry from "./components/ChatEntry";
import TextBox from "./components/TextBox";

export default function Home() {
  const [raceText, setRaceText] = useState("");
  const [lockChat, setLockChat] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <TextBox
        raceText={raceText}
        lockChat={lockChat}
        setLockChat={setLockChat}
      />
      <ChatEntry
        raceText={raceText}
        setRaceText={setRaceText}
        lockChat={lockChat}
        setLockChat={setLockChat}
      />
    </div>
  );
}
