import { Sparkles, Mic, ExternalLink, ArrowRight } from 'lucide-react';

export function Services() {
  return (
    <section id="servicos" className="py-32 px-6 md:px-12 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center reveal">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-walnut block mb-4">
            Expansão
          </span>
          <h2 className="font-display text-5xl lg:text-7xl text-monstera">Além da clínica.</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:h-150">
          {/* Clube */}
          <div className="relative group overflow-hidden rounded-[3rem] h-125 lg:h-full reveal shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-monstera/90 z-10 transition-colors group-hover:bg-monstera/95" />
            <img
              src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
              alt="Clube de Psicologia da Moda"
              loading="lazy"
            />
            <div className="relative z-20 p-12 h-full flex flex-col justify-center items-center text-center text-summer-sand">
              <Sparkles className="w-12 h-12 text-ginkgo mb-6" />
              <h3 className="font-display text-5xl lg:text-6xl mb-6">
                Clube de Psicologia <br />{' '}
                <span className="italic font-normal text-walnut">da Moda.</span>
              </h3>
              <a
                href="https://psicologiadamoda.club"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ginkgo text-monstera px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-all"
              >
                Conhecer o Clube <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          {/* Palestras */}
          <div className="relative group overflow-hidden rounded-[3rem] h-125 lg:h-full reveal shadow-2xl cursor-pointer bg-walnut/5 border border-walnut/20">
            <div className="relative z-20 p-12 h-full flex flex-col justify-center items-center text-center text-monstera">
              <Mic className="w-12 h-12 text-walnut mb-6" />
              <h3 className="font-display text-5xl lg:text-6xl mb-6">
                Palestras & <br />{' '}
                <span className="italic font-normal text-walnut">Talks.</span>
              </h3>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-monstera px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-monstera hover:text-white transition-all"
              >
                Solicitar Proposta <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
