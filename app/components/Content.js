'use client';

import { motion } from 'framer-motion';
import { Clock, PlayCircle, BookOpen } from 'lucide-react';
import { modules } from '../data';

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
  const totalTime = modules.reduce((acc, m) => {
    const match = m.length.match(/(\d+)h?(\d*)/);
    if (match) {
      const hours = match[1] ? parseInt(match[1]) : 0;
      const mins = match[2] ? parseInt(match[2]) : 0;
      return acc + hours * 60 + mins;
    }
    return acc;
  }, 0);
  
  const hours = Math.floor(totalTime / 60);
  const mins = totalTime % 60;

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
            Arquitetura pensada para<br className="hidden sm:block" /> 90 dias de evolução
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
          <div className="badge badge-primary">
            <Clock className="h-3.5 w-3.5" />
            +{hours}h de conteúdo
          </div>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {modules.map((module, i) => {
            const [chapter, title] = module.title.split('•').map(s => s.trim());
            return (
              <motion.div
                key={module.title}
                variants={fadeInUp}
                className="group card-base card-hover flex items-start gap-4 shadow-soft hover:shadow-medium"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-cta text-white transition-transform group-hover:scale-110">
                  <PlayCircle className="h-5 w-5" />
                </div>
                <div className="flex-grow">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-[hsl(var(--paprika))]">
                      {chapter}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-[hsl(var(--muted-foreground))]">
                      <Clock className="h-3 w-3" />
                      <span>{module.length}</span>
                    </div>
                  </div>
                  <h3 className="mt-1 font-semibold text-[hsl(var(--espresso))]">{title}</h3>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">{module.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
