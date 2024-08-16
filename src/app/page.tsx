import Image from "next/image";
import { Navbar } from "./_components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="bg-purple-200 h-full">Hello</div>
    </div>
  );
}
