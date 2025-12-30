'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Droplets, Dumbbell, Sparkles, Check, Calendar } from 'lucide-react';
import { routinePillars, routineBenefits } from '../data';

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

export const Routine = () => {
  const pillarIcons = [Droplets, Dumbbell, Sparkles];
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
            Cronograma Capilar
          </motion.p>
          <motion.h2 variants={fadeInUp} className="heading-section mt-4 text-balance">
            A Rotina que Traz Resultados
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body mx-auto mt-6 max-w-2xl text-balance">
            O segredo não é mágica, é constância. Entenda os três pilares do cronograma capilar 
            e veja os resultados que você pode esperar em 30 dias.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 md:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {routinePillars.map((pillar, i) => {
            const Icon = pillarIcons[i];
            return (
              <motion.div
                key={pillar.title}
                variants={fadeInUp}
                className="group relative flex aspect-3/4 flex-col justify-end overflow-hidden rounded-2xl p-6 text-white shadow-lg transition-all hover:shadow-xl"
              >
                <Image 
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
                <div className="relative z-10">
                  <Icon className="mb-3 h-8 w-8 text-white/80" />
                  <h3 className="text-2xl font-bold">{pillar.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{pillar.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeInUp} className="card-base shadow-medium max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-cta">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-subtle text-xs">Em 30 dias</p>
                <h3 className="heading-card">Resultados Esperados</h3>
              </div>
            </div>
            
            <div className="grid gap-2 sm:grid-cols-2">
              {routineBenefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <Check className="h-4 w-4 flex-shrink-0 text-[hsl(var(--olive))]" />
                  <span className="text-sm text-[hsl(var(--espresso))]">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp} 
            className="mt-6 mx-auto max-w-2xl flex items-center gap-3 rounded-xl bg-amber-50 border border-amber-200/50 px-4 py-3"
          >
            <Sparkles className="h-5 w-5 flex-shrink-0 text-amber-500" />
            <p className="text-sm text-amber-800">
              <strong>Dica:</strong> Use produtos específicos (nutrição, reconstrução, umectação). Nunca óleos de cozinha!
            </p>
          </motion.div>
        </motion.div>

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
            Quero os Resultados em 30 Dias
            <Calendar className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
