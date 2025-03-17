"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 flex items-center justify-between">
      {/* Botão do Menu */}
      <button
        className="p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Logo ou título */}
      <h1 className="text-lg font-bold">Meu Site</h1>

      {/* Espaço para algum conteúdo no lado direito */}
      <div></div>

      {/* Menu deslizante */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 left-0 h-screen w-60 bg-white text-black shadow-lg p-4"
          >
            <ul className="space-y-4">
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
