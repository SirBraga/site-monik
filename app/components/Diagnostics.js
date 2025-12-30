'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CircleDot, Lightbulb } from 'lucide-react';

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

const diagnosticPoints = [
  {
    title: 'Espessura do Fio',
    question: 'Pegue um fio e esfregue entre os dedos. O que você sente?',
    options: ['Mal sinto o fio (Fino)', 'Sinto levemente, firme (Médio)', 'Sinto bem, é áspero (Grosso)'],
  },
  {
    title: 'Porosidade',
    question: 'Como seu cabelo reage à água e produtos?',
    options: ['Seca muito rápido', 'Embora com facilidade', 'Produtos não definem'],
  },
  {
    title: 'Couro Cabeludo',
    question: 'Qual a característica principal da sua raiz?',
    options: ['Brilho excessivo (Oleoso)', 'Coceira e descamação (Seco)', 'Equilibrada (Normal)'],
  },
];

export const Diagnostics = () => {
  return (
    <section className="section-spacing bg-gradient-section">
      <div className="container-section">
        <motion.div
          className="text-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p variants={fadeInUp} className="text-subtle">
            Diagnóstico Rápido
          </motion.p>
          <motion.h2 variants={fadeInUp} className="heading-section mt-4 text-balance">
            Faça seu Diagnóstico Capilar em Casa
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body mx-auto mt-6 max-w-2xl text-balance">
            Responda às perguntas abaixo para montar seu perfil capilar e entender o que seu cabelo realmente precisa.
          </motion.p>
        </motion.div>

        <motion.div 
          className="mt-16 grid gap-12 lg:grid-cols-2 lg:items-start"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            {diagnosticPoints.map((point, i) => (
              <div key={point.title} className="card-base shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-cta text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="heading-card text-lg">{point.title}</h3>
                </div>
                <p className="text-body mt-3 text-sm">{point.question}</p>
                <div className="mt-4 space-y-2">
                  {point.options.map(option => (
                    <div 
                      key={option} 
                      className="flex items-center gap-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--cream))] p-3 transition-colors hover:border-[hsl(var(--paprika)/0.3)] hover:bg-[hsl(var(--paprika)/0.05)]"
                    >
                      <CircleDot className="h-4 w-4 text-[hsl(var(--paprika))]" />
                      <span className="text-sm text-[hsl(var(--muted-foreground))]">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="card-base shadow-soft">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-cta text-sm font-bold text-white">
                  4
                </span>
                <h3 className="heading-card text-lg">Qual a sua curvatura?</h3>
              </div>
              <div className="relative mt-6 overflow-hidden rounded-xl">
                <Image 
                  src="/images/curl_types.png"
                  alt="Tabela de curvatura de cabelo, de 2A a 4C"
                  width={1019}
                  height={1280}
                  className="w-full h-auto"
                  priority={false}
                />
              </div>
            </div>
            
            <div className="card-base border-[hsl(var(--olive)/0.3)] bg-[hsl(var(--olive)/0.05)] shadow-soft">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[hsl(var(--olive)/0.15)]">
                  <Lightbulb className="h-5 w-5 text-[hsl(var(--olive))]" />
                </div>
                <div>
                  <p className="font-semibold text-[hsl(var(--espresso))]">Dica importante</p>
                  <p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">
                    Guarde essas informações para escolher os produtos ideais para você dentro do guia!
                  </p>
                </div>
              </div>
            </div>
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
            Quero Meu Diagnóstico
            <CircleDot className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
