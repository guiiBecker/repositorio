"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const router = useRouter();

  const handleCommand = (command: string) => {
    if (!command.trim()) return;
    
    let response;
    switch (command.toLowerCase()) {
      case "help":
        response = "Comandos disponíveis: help, about, clear, menu";
        break;
      case "about":
        response = "Este é um terminal de pesquisa estilo macOS.";
        break;
      case "clear":
        setOutput([]);
        setInput("");
        return;
      case "menu":
        response = "Opções do menu: home, about, contact, services";
        break;
      case "home":
        router.push("/");
        return;
      case "about":
        router.push("/about");
        return;
      case "contact":
        router.push("/contatos");
        return;
      case "services":
        router.push("/services");
        return;
      default:
        response = `Comando não reconhecido: ${command}`;
    }

    setOutput((prev) => [...prev, `$ ${command}`, response]);
    setInput("");
  };

  return (
    <div className="flex justify-center items-center py-9">
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