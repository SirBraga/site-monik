'use client';

import { motion } from 'framer-motion';
import { Quote, MapPin, Star, TrendingUp } from 'lucide-react';
import { testimonials } from '../data';

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

export const Results = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--cream))] via-[hsl(var(--linen)/0.5)] to-[hsl(var(--cream))]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[hsl(var(--paprika)/0.05)] blur-3xl" />
      
      <div className="container-section relative z-10">
        <motion.div
          className="text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeInUp} className="text-subtle">
            Resultados Reais
          </motion.p>
          <motion.h2 variants={fadeInUp} className="heading-section mt-4 text-balance">
            Histórias de transformação fora do Brasil
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body mx-auto mt-6 max-w-2xl text-balance">
            Mulheres brasileiras que hoje dominam seus cachos em qualquer estação 
            graças ao método Juba Natural Hair.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-6 lg:grid-cols-3"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {testimonials.map((story, i) => (
            <motion.div
              key={story.name}
              variants={fadeInUp}
              className="card-base card-hover relative flex flex-col shadow-soft hover:shadow-medium"
            >
              <div className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-cta shadow-md">
                <Quote className="h-4 w-4 text-white" />
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-cta text-xl font-bold text-white">
                  {story.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[hsl(var(--espresso))]">{story.name}</p>
                  <div className="flex items-center gap-1.5 text-sm text-[hsl(var(--muted-foreground))]">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{story.city}</span>
                  </div>
                </div>
              </div>
              
              <div className="my-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[hsl(var(--paprika))] text-[hsl(var(--paprika))]" />
                ))}
              </div>
              
              <blockquote className="text-body flex-grow text-sm italic">
                {story.quote}
              </blockquote>
              
              <div className="divider my-6" />
              
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--olive)/0.1)]">
                  <TrendingUp className="h-4 w-4 text-[hsl(var(--olive))]" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[hsl(var(--olive))]">
                    Resultado
                  </p>
                  <p className="mt-1 text-sm font-medium text-[hsl(var(--espresso))]">
                    {story.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        
      </div>
    </section>
  );
};
