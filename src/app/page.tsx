import Image from "next/image";
import Terminal from "@/components/terminal";
import MainTitle from "@/components/title";

export default function Home() {
  return (
    <main>
      <div>
        <MainTitle></MainTitle>
        <Terminal/>
      </div>
    </main>
  );
}
