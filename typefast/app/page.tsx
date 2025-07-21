import Image from "next/image";
import ChatEntry from "./components/ChatEntry";

export default function Home() {
  return (
    <div className="flex justify-center">
      <ChatEntry />
    </div>
  );
}
