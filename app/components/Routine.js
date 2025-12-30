'use client';

import { motion } from 'framer-motion';
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

const pillarIcons = [Droplets, Dumbbell, Sparkles];

export const Routine = () => {
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
                className="card-base card-hover text-center shadow-soft hover:shadow-medium"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-cta">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="heading-card">{pillar.title}</h3>
                <p className="text-body mt-3 text-sm">{pillar.description}</p>
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
      </div>
    </section>
  );
};
