"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>(["Type 'help' for a list of commands."]);
  const [helpUsed, setHelpUsed] = useState(false);
  const router = useRouter();

  const handleCommand = (command: string) => {
    if (!command.trim()) return;
    
    let response;
    switch (command.toLowerCase()) {
      case "help":
        response = "Available commands: help, whoami, contactme, programming, linkedin, github, clear";
        setHelpUsed(true);
        break;
      case "whoami":
        response = "Hello, i am Guilherme, a fullstack developer with specializing in NestJS, React and more.";
        break;
      case "programming":
        response = "TypeScript, JavaScript";
        break;
      case "clear":
        setOutput(["Type 'help' for a list of commands."]);
        setHelpUsed(false);
        setInput("");
        return;
      case "contactme":
        window.location.href = "mailto:guilhermegbecker@gmail.com";
        return;
      case "linkedin":
        window.open("https://www.linkedin.com/in/guilherme-gottschefski-becker/", "_blank");
        return;
      case "github":
        window.open("https://github.com/guiiBecker", "_blank");
        return;      
      case "projects":
        window.open("/projects");
        return;
      default:
        response = `Comando não reconhecido: ${command}`;
    }

    setOutput((prev) => helpUsed ? [...prev, `$ ${command}`, response] : [...prev.slice(1), `$ ${command}`, response]);
    setInput("");
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="w-full max-w-4xl bg-black text-green-400 p-6 rounded-lg shadow-lg font-mono border border-gray-700">
        <div className="h-80 overflow-y-auto mb-2 p-2">
          {output.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="flex p-2">
          <span className="mr-2">$</span>
          <input
            type="text"
            className="bg-black text-green-400 outline-none flex-1"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleCommand(input);
                setInput("");
              }
            }}
            autoFocus
          />
        </div>
      </div>
    </div>
  );
}
