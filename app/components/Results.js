'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, MapPin, Star, TrendingUp, X } from 'lucide-react';
import { testimonials } from '../data';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

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
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(null);

  const autoplay = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 1 },
    [autoplay.current]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  const goTo = (next) => {
    if (!emblaApi) return;
    emblaApi.scrollTo(next);
  };

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
            História de transformação nos EUA
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-body mx-auto mt-6 max-w-2xl text-balance">
            Mulheres brasileiras que hoje dominam seus cachos em qualquer estação 
            graças ao guia Juba Natural Hair.
          </motion.p>
        </motion.div>

        {/* Carrossel com autoplay (mobile e desktop) */}
        <div className="mt-16">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((item, i) => (
                <div
                  key={`${item.name}-${i}`}
                  className="relative w-full shrink-0 basis-full sm:basis-2/3 lg:basis-1/3 overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-shadow"
                >
                  <button
                    className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-cta shadow-md"
                    onClick={() => setOpen(item)}
                    aria-label="Abrir depoimento"
                  >
                    <Quote className="h-4 w-4 text-white" />
                  </button>

                  <div className="relative aspect-4/3 overflow-hidden">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={`Foto de ${item.name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 400px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-cta text-white text-3xl font-bold">
                        {item.name.charAt(0)}
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-all ${
                  i === index ? 'bg-[hsl(var(--paprika))] w-6' : 'bg-[hsl(var(--muted-foreground)/0.3)]'
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>
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
            Quero garantir meu acesso
            <Quote className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-strong"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
              >
                <button
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[hsl(var(--cream))] text-[hsl(var(--espresso))] shadow"
                  onClick={() => setOpen(null)}
                  aria-label="Fechar"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className="grid gap-6 p-6 lg:grid-cols-2 lg:items-center">
                  <div className="relative aspect-square overflow-hidden rounded-xl">
                    {open.image && (
                      <Image
                        src={open.image}
                        alt={`Foto de ${open.name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-cta text-lg font-bold text-white">
                        {open.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-[hsl(var(--espresso))]">{open.name}</p>
                        <div className="flex items-center gap-1.5 text-sm text-[hsl(var(--muted-foreground))]">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{open.city}</span>
                        </div>
                      </div>
                    </div>
                    <div className="my-4 flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[hsl(var(--paprika))] text-[hsl(var(--paprika))]" />
                      ))}
                    </div>
                    <p className="text-sm text-[hsl(var(--espresso))] leading-relaxed">{open.quote}</p>
                    <div className="mt-4 flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--olive)/0.1)]">
                        <TrendingUp className="h-4 w-4 text-[hsl(var(--olive))]" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[hsl(var(--olive))]">
                          Resultado
                        </p>
                        <p className="mt-1 text-sm font-medium text-[hsl(var(--espresso))]">
                          {open.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
