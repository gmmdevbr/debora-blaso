import { ArrowDown, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-ginkgo/20 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 z-10 reveal">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-walnut" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-walnut">
              Psicologia Clínica & Imagem
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-[6.5rem] leading-[0.9] tracking-tight mb-10 text-monstera">
            PSICOLOGIA <br />
            <span className="font-script font-normal text-5xl lg:text-7xl text-walnut block -mt-2 mb-2">
              que veste,
            </span>
            MODA <br />
            <span className="font-script font-normal text-5xl lg:text-7xl text-walnut block -mt-2">
              que liberta.
            </span>
          </h1>

          <p className="text-lg lg:text-xl max-w-lg text-muted mb-12 leading-relaxed pl-6 border-l-2 border-ginkgo">
            Um mergulho na beleza que nasce de dentro. Traduzindo complexidades
            em caminhos possíveis através da imagem.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#sobre"
              className="inline-flex items-center justify-center h-14 px-10 bg-monstera text-white text-xs font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-walnut transition-all group"
            >
              Conhecer a Profissional{' '}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 relative h-[60vh] lg:h-[80vh] reveal delay-200">
          <div className="w-full h-full relative group">
            <div className="absolute inset-0 bg-ginkgo/20 mask-organic translate-x-4 translate-y-4" />
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
              alt="Débora Blaso Psicóloga"
              className="w-full h-full object-cover mask-organic relative z-10 grayscale-[10%] group-hover:grayscale-0 transition-all duration-1000"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce p-4 text-monstera hover:text-walnut transition-colors"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
