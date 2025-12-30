'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Shield, Clock, Sparkles } from 'lucide-react';

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

export const FinalCTA = () => {
  const benefits = [
    'Guia completo + planilhas interativas',
    'Biblioteca em vídeo 4K atualizada',
    'Comunidade privada e hotline com Monik',
    'Atualizações constantes + bônus futuros',
  ];

  return (
    <section className="section-spacing bg-gradient-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.03]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-[hsl(var(--paprika)/0.1)] blur-3xl" />
      
      <div className="container-section relative z-10">
        <motion.div
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp} className="text-white">
            <p className="text-subtle !text-[hsl(var(--sage))]">
              Sua transformação começa agora
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl leading-tight">
              A próxima lavagem pode ser a melhor da sua vida
            </h2>
            <p className="mt-6 text-lg text-[hsl(var(--linen)/0.8)]">
              Garanta acesso imediato ao guia, bônus, comunidade e acompanhamento 
              direto da Monik. Método completo por um valor especial.
            </p>
            
            <div className="mt-8 space-y-3">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[hsl(var(--paprika)/0.2)]">
                    <Check className="h-3.5 w-3.5 text-[hsl(var(--paprika))]" />
                  </div>
                  <span className="text-[hsl(var(--linen)/0.9)]">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[hsl(var(--paprika)/0.4)] to-[hsl(var(--sage)/0.2)] blur-2xl" />
            
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[hsl(var(--paprika)/0.2)] blur-3xl" />
              
              <div className="relative text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(var(--paprika)/0.2)] px-4 py-1.5 text-sm font-semibold text-white">
                  <Sparkles className="h-4 w-4" />
                  Oferta Especial
                </div>
                
                <div className="mt-6">
                  <span className="text-sm text-white/60 line-through">de $197</span>
                  <div className="mt-1 flex items-baseline justify-center gap-1">
                    <span className="text-2xl font-semibold text-white/80">$</span>
                    <span className="text-7xl font-black tracking-tight text-white">97</span>
                  </div>
                  <p className="mt-2 text-white/70">
                    ou <span className="font-semibold text-white">12x de $9,70</span>
                  </p>
                </div>

                <a
                  href="https://pay.hotmart.com/W99081498V?checkoutMode=10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-white py-4 text-base font-bold text-[hsl(var(--espresso))] transition-all hover:scale-[1.02] hover:shadow-lg"
                >
                  Quero o método completo
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="flex items-center justify-center gap-2 rounded-xl bg-white/5 p-3">
                    <Shield className="h-4 w-4 text-[hsl(var(--sage))]" />
                    <div className="text-left">
                      <p className="text-xs font-semibold text-white">7 dias</p>
                      <p className="text-xs text-white/60">Garantia</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 rounded-xl bg-white/5 p-3">
                    <Clock className="h-4 w-4 text-[hsl(var(--sage))]" />
                    <div className="text-left">
                      <p className="text-xs font-semibold text-white">Vitalício</p>
                      <p className="text-xs text-white/60">Acesso</p>
                    </div>
                  </div>
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
          className="mt-16 text-center"
        >
          <p className="text-sm text-white/50">
            Pagamento 100% seguro processado pela Hotmart. 
            Acesso imediato após confirmação.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
