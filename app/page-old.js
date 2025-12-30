import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EBE2DB]">
      {/* Hero Section Épica */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full bg-black">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/dEk2pf8xfRk?autoplay=1&mute=0&loop=1&playlist=dEk2pf8xfRk&controls=0&showinfo=0&modestbranding=1&rel=0&disablekb=1"
              title="Juba Natural Hair - Apresentação"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            {/* Overlay para melhor legibilidade do texto */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#813223]/80 via-[#C05239]/60 to-[#813223]/80"></div>
          </div>
        </div>
        
        {/* Conteúdo da Hero */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight drop-shadow-2xl">
              TRANSFORME<br/>
              SEUS CABELOS<br/>
              <span className="text-[#727D3D]">NATURAIS</span>
            </h1>
            <p className="text-xl md:text-3xl mb-12 text-[#EBE2DB] max-w-4xl mx-auto font-semibold drop-shadow-lg">
              O guia definitivo para mulheres brasileiras conquistarem cabelos saudáveis, brilhantes e naturais nos Estados Unidos
            </p>
            <div className="space-y-6">
              <a 
                href="https://hotmart.com" 
                className="inline-block bg-[#727D3D] hover:bg-[#B2B692] text-white font-black py-6 px-12 rounded-full text-xl transition-all transform hover:scale-105 shadow-2xl hover:shadow-[#727D3D]/50"
              >
                QUERO TRANSFORMAR MEUS CABELOS AGORA
              </a>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-8 text-[#EBE2DB] text-lg">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Garantia de 7 dias
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Acesso imediato
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  Bônus exclusivos
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Sobre o Curso */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-[#813223] mb-8">
              O Guia Completo que Mudará Sua Rotina Capilar
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Descubra os segredos e técnicas para manter cabelos naturais saudáveis, brilhantes e definidos mesmo vivendo em outro país. Este curso foi desenvolvido especialmente para mulheres brasileiras que enfrentam os desafios únicos dos cuidados capilares nos EUA.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#EBE2DB] p-6 rounded-lg">
                <div className="w-16 h-16 bg-[#C05239] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <h3 className="text-xl font-bold text-[#813223] mb-3">Conteúdo Completo</h3>
                <p className="text-gray-700">Mais de 50 páginas com técnicas passo a passo</p>
              </div>
              <div className="bg-[#EBE2DB] p-6 rounded-lg">
                <div className="w-16 h-16 bg-[#C05239] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-[#813223] mb-3">Focado em Resultados</h3>
                <p className="text-gray-700">Técnicas comprovadas para cabelos brasileiros</p>
              </div>
              <div className="bg-[#EBE2DB] p-6 rounded-lg">
                <div className="w-16 h-16 bg-[#C05239] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-bold text-[#813223] mb-3">Suporte Contínuo</h3>
                <p className="text-gray-700">Acesso a comunidade exclusiva de alunas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-[#B2B692]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            O Que Você Vai Descobrir
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#813223] mb-4">🌿 Produtos Certos</h3>
              <p className="text-gray-700 mb-4">
                Identifique quais produtos americanos funcionam melhor para seu tipo de cabelo e onde encontrá-los.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Guia de produtos por categoria de cabelo</li>
                <li>• Onde comprar: lojas físicas e online</li>
                <li>• Marcas afro-americanas vs brasileiras</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#813223] mb-4">💧 Técnicas de Hidratação</h3>
              <p className="text-gray-700 mb-4">
                Métodos profissionais de hidratação que funcionam no clima americano.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Cronograma capilar personalizado</li>
                <li>• Técnicas de LOC e LCO</li>
                <li>• Máscaras caseiras poderosas</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#813223] mb-4">✨ Estilos Práticos</h3>
              <p className="text-gray-700 mb-4">
                Penteados fáceis para o dia a dia que valorizam seus cachos.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Coiffures rápidas para trabalhar</li>
                <li>• Proteção noturna eficaz</li>
                <li>• Estilos para ocasiões especiais</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#813223] mb-4">🔬 Ciência Capilar</h3>
              <p className="text-gray-700 mb-4">
                Entenda a estrutura do seu cabelo e como cuidar dele corretamente.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Tipos e texturas de cabelo</li>
                <li>• Porosidade e elasticidade</li>
                <li>• pH e saúde capilar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre a Autora */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#813223] text-center mb-16">
              Conheça Sua Mentora
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-3xl font-bold text-[#C05239] mb-4">Monik Santos</h3>
                <p className="text-lg text-gray-700 mb-6">
                  Especialista em cabelos naturais com mais de 10 anos de experiência, ajudei centenas de mulheres brasileiras a redescobrirem a beleza de seus cabelos naturais vivendo nos Estados Unidos.
                </p>
                <p className="text-gray-700 mb-6">
                  Minha jornada começou quando me mudei para os EUA e enfrentei todos os desafios que você está enfrentando agora: dificuldade em encontrar produtos certos, clima diferente affecting meus cachos, e a falta de informações específicas para mulheres brasileiras.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-[#EBE2DB] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#813223]">500+</div>
                    <div className="text-sm text-gray-600">Alunas Transformadas</div>
                  </div>
                  <div className="bg-[#EBE2DB] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#813223]">10+</div>
                    <div className="text-sm text-gray-600">Anos de Experiência</div>
                  </div>
                  <div className="bg-[#EBE2DB] p-4 rounded-lg">
                    <div className="text-2xl font-bold text-[#813223]">100%</div>
                    <div className="text-sm text-gray-600">Dedicação</div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-8 border-[#C05239]">
                  <div className="w-full h-full bg-gradient-to-br from-[#813223] to-[#C05239] flex items-center justify-center">
                    <span className="text-white text-6xl">👩🏾‍🦱</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testemunhos */}
      <section className="py-20 bg-[#EBE2DB]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#813223] text-center mb-16">
            Histórias de Transformação
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &ldquo;Depois do guia da Monik, finalmente entendi meu cabelo! Meus cachos nunca estiveram tão definidos e saudáveis. Vale cada centavo!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#C05239] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">A</span>
                </div>
                <div>
                  <div className="font-bold text-[#813223]">Ana Silva</div>
                  <div className="text-sm text-gray-600">São Francisco, CA</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &ldquo;O guia me economizou tanto tempo e dinheiro! Sabia exatamente quais produtos comprar e como usar. Minha rotina capilar mudou completamente.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#C05239] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">M</span>
                </div>
                <div>
                  <div className="font-bold text-[#813223]">Maria Santos</div>
                  <div className="text-sm text-gray-600">Orlando, FL</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                &ldquo;Recomendo para toda brasileira nos EUA! A Monik entende nossas necessidades e o guia é super completo e prático.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#C05239] rounded-full flex items-center justify-center mr-4">
                  <span className="text-white">P</span>
                </div>
                <div>
                  <div className="font-bold text-[#813223]">Patrícia Costa</div>
                  <div className="text-sm text-gray-600">Nova York, NY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Métodos e Técnicas */}
      <section className="py-20 bg-[#727D3D]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Métodos Exclusivos Você Vai Dominar
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-[#C05239] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🌊</span>
              </div>
              <h3 className="text-xl font-bold text-[#813223] mb-3">Método Co-Wash</h3>
              <p className="text-gray-600 text-sm">Lave sem sulfatos e mantenha a hidratação natural</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-[#C05239] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🧴</span>
              </div>
              <h3 className="text-xl font-bold text-[#813223] mb-3">Técnica LOC</h3>
              <p className="text-gray-600 text-sm">Liquid, Oil, Cream para máxima definição</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-[#C05239] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">✋</span>
              </div>
              <h3 className="text-xl font-bold text-[#813223] mb-3">Finger Coiling</h3>
              <p className="text-gray-600 text-sm">Definição perfeita com os dedos</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center">
              <div className="w-20 h-20 bg-[#C05239] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-3xl">🌙</span>
              </div>
              <h3 className="text-xl font-bold text-[#813223] mb-3">Pineapple Protection</h3>
              <p className="text-gray-600 text-sm">Proteção noturna para preservar os cachos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bônus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#813223] text-center mb-16">
            Bônus Exclusivos Por Tempo Limitado
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#B2B692] to-[#727D3D] p-8 rounded-lg text-white text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold mb-3">Guia de Produtos</h3>
              <p className="mb-4">Lista completa com os melhores produtos e preços nos EUA</p>
              <div className="text-3xl font-bold">GRÁTIS</div>
            </div>
            <div className="bg-gradient-to-br from-[#C05239] to-[#813223] p-8 rounded-lg text-white text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3">Acesso ao Grupo</h3>
              <p className="mb-4">Comunidade exclusiva no WhatsApp para dúvidas e suporte</p>
              <div className="text-3xl font-bold">GRÁTIS</div>
            </div>
            <div className="bg-gradient-to-br from-[#727D3D] to-[#B2B692] p-8 rounded-lg text-white text-center">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-3">Vídeos Tutoriais</h3>
              <p className="mb-4">Acesso a biblioteca com técnicas passo a passo em vídeo</p>
              <div className="text-3xl font-bold">GRÁTIS</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#EBE2DB]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-[#813223] text-center mb-16">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-[#C05239] mb-3">O guia funciona para meu tipo de cabelo?</h3>
              <p className="text-gray-700">
                Sim! O guia cobre todos os tipos de cabelos naturais (2A a 4C) com técnicas específicas para cada textura.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-[#C05239] mb-3">Já tentei tudo, como sei que isso vai funcionar?</h3>
              <p className="text-gray-700">
                Nosso método tem 97% de satisfação e oferecemos garantia de 7 dias. Se não gostar, seu dinheiro de volta.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-[#C05239] mb-3">Quanto tempo para ver resultados?</h3>
              <p className="text-gray-700">
                A maioria das alunas vê melhoras significativas na primeira semana com resultados completos em 30 dias.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-[#C05239] mb-3">Os produtos são caros?</h3>
              <p className="text-gray-700">
                Mostramos opções para todos os orçamentos, incluindo produtos acessíveis e receitas caseiras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-[#813223] to-[#C05239] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Sua Transformação Capilar Começa Agora
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Não espere mais para ter os cabelos dos seus sonhos. Junte-se a centenas de mulheres brasileiras que já transformaram sua rotina capilar.
          </p>
          <div className="space-y-4">
            <a 
              href="https://hotmart.com" 
              className="inline-block bg-[#727D3D] hover:bg-[#B2B692] text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105"
            >
              SIM, QUERO ME TRANSFORMAR AGORA!
            </a>
            <div className="flex justify-center space-x-8 text-sm">
              <span>✓ Garantia de 7 dias</span>
              <span>✓ Acesso imediato</span>
              <span>✓ Bônus exclusivos</span>
              <span>✓ Suporte contínuo</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
