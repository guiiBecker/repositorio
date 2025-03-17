"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu ao clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className=" p-4 flex items-center justify-between">
      {/* Botão do Menu */}
      <button
        className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Espaço flexível para empurrar o título para a direita */}
      <div className="flex-1"></div>

      {/* Título como link */}
      <a href="#" className="text-lg font-bold hover:underline">Contact me</a>

      {/* Menu deslizante */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            ref={menuRef}
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-12 left-4 w-48 bg-white shadow-lg p-4 rounded-lg"
          >
            <ul className="space-y-2">
              <li>
                <a href="#" className="block p-2 hover:bg-gray-200 rounded">Home</a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-gray-200 rounded">Sobre</a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-gray-200 rounded">Serviços</a>
              </li>
              <li>
                <a href="#" className="block p-2 hover:bg-gray-200 rounded">Contato</a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}