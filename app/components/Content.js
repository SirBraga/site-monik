'use client';

import { motion } from 'framer-motion';
import { Clock, BookOpen } from 'lucide-react';
import { FaSearch, FaHandSparkles, FaPlayCircle, FaShoppingBag, FaListUl, FaSun, FaCut } from 'react-icons/fa';
import { BsBrush, BsHairbrush } from 'react-icons/bs';
import { modules } from '../data';
import { GiComb } from "react-icons/gi";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

export const Content = () => {
  return (
    <section className="section-spacing bg-[hsl(var(--cream))]">
      <div className="container-section">
        <motion.div
          className="text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeInUp} className="text-subtle">
            Conteúdo do Guia
          </motion.p>
          <motion.h2 variants={fadeInUp} className="heading-section mt-4 text-balance">
            Cronograma pensado para<br className="hidden sm:block" /> 90 dias de evolução
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body mx-auto mt-6 max-w-2xl text-balance">
            Cada módulo foi desenhado para você avançar de forma progressiva e consistente.
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-6"
        >
          <div className="badge badge-secondary">
            <BookOpen className="h-3.5 w-3.5" />
            {modules.length} Capítulos
          </div>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {modules.map((module, i) => {
            const [chapter, title] = module.title.split('•').map(s => s.trim());
            
            // Map icons to themes
            const getIcon = (title) => {
              if (title.includes('Introdução')) return FaSearch;
              if (title.includes('Lavagem')) return FaHandSparkles;
              if (title.includes('Finalização')) return GiComb;
              if (title.includes('Produtos')) return FaShoppingBag;
              if (title.includes('Lista')) return FaListUl;
              if (title.includes('Day After')) return FaSun;
              return BookOpen;
            };
            
            const Icon = getIcon(title);
            
            return (
              <motion.div
                key={module.title}
                variants={fadeInUp}
                className="group relative overflow-hidden rounded-2xl bg-white border border-[hsl(var(--border))] shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-cta" />
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[hsl(var(--paprika)/0.05)] to-transparent rounded-bl-full" />
                
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[hsl(var(--paprika))] to-[hsl(var(--espresso))] text-white shadow-md transition-transform group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="inline-flex items-center justify-center h-6 px-2.5 rounded-full bg-[hsl(var(--paprika)/0.1)] text-xs font-bold text-[hsl(var(--paprika))] uppercase tracking-wider">
                      {chapter.replace('Capítulo ', 'Cap ')}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[hsl(var(--espresso))] mb-2 leading-tight">
                    {title}
                  </h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {module.detail}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-12 flex justify-center"
      >
        <a
          href="#oferta"
          className="btn-primary group"
        >
          Quero Acessar Todo o Conteúdo
          <BookOpen className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </motion.div>
    </section>
  );
};
