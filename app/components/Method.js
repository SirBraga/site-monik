'use client';

import { motion } from 'framer-motion';
import { Search, Wand2, Palette, Check, ArrowRight } from 'lucide-react';
import { methodSteps } from '../data';

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
    transition: { staggerChildren: 0.15 },
  },
};

const icons = [Search, Wand2, Palette];

export const Method = () => {
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
            Mapa do Método
          </motion.p>
          <motion.h2 variants={fadeInUp} className="heading-section mt-4 text-balance">
            Diagnóstico, ritual e styling<br className="hidden sm:block" /> sem adivinhação
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body mx-auto mt-6 max-w-2xl text-balance">
            Você não está fazendo nada de errado. Só não teve as informações certas. 
            O guia traduz ciência capilar com sensibilidade brasileira.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {methodSteps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="card-base card-hover group relative overflow-hidden shadow-soft hover:shadow-medium"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[hsl(var(--paprika)/0.05)] transition-transform group-hover:scale-150" />
                
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-cta">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <span className="text-subtle text-xs">Passo {i + 1}</span>
                  <h3 className="heading-card mt-2">{step.title}</h3>
                  <p className="text-body mt-3 text-sm">{step.description}</p>
                  
                  <div className="divider my-6" />
                  
                  <ul className="space-y-3">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[hsl(var(--olive)/0.1)]">
                          <Check className="h-3 w-3 text-[hsl(var(--olive))]" />
                        </div>
                        <span className="text-sm text-[hsl(var(--muted-foreground))]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
