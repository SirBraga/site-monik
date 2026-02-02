"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'hsl(36 33% 96%)' }}
    >
      <motion.div 
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="text-8xl font-bold mb-4"
          style={{ color: 'hsl(15 56% 49%)' }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          404
        </motion.div>
        
        <h1 
          className="text-2xl font-semibold mb-4"
          style={{ color: 'hsl(15 70% 32%)' }}
        >
          Página não encontrada
        </h1>
        
        <p 
          className="mb-8"
          style={{ color: 'hsl(15 30% 45%)' }}
        >
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        
        <Link 
          href="/guia"
          className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold transition-all duration-300"
          style={{ 
            background: 'linear-gradient(135deg, hsl(15 56% 49%) 0%, hsl(15 70% 32%) 100%)',
            color: 'white',
            boxShadow: '0 4px 16px -2px hsl(15 56% 49% / 0.4)'
          }}
        >
          Ir para o Guia
        </Link>
      </motion.div>
    </div>
  );
}
