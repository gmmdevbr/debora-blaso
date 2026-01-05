import { ArrowRight } from 'lucide-react';
import heroImage from '../assets/images/JFR_2516.webp';

export function Hero() {
  return (
    <section className="hero-section relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Desktop only with overlay */}
      <div className="hero-background" />

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-summer-sand/98 via-summer-sand/95 to-summer-sand/60 lg:from-summer-sand/95 lg:via-summer-sand/85 lg:to-transparent z-0" />

      {/* Subtle decorative blob */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-ginkgo/10 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4 hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-24 lg:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Content - Left side on desktop, centered on mobile */}
          <div className="lg:col-span-7 reveal">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-px bg-ginkgo" />
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-lambs-ear">
                Psicologia Clínica & Imagem Corporal
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight mb-10 text-monstera">
              Traduzindo complexidades em caminhos possíveis
            </h1>

            <p className="text-lg lg:text-xl max-w-lg text-muted mb-12 leading-relaxed pl-6 border-l-2 border-ginkgo">
              Dê um passo em direção a uma vida com mais sentido, olhando para si
              com presença e cuidado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#sobre"
                className="inline-flex items-center justify-center h-14 px-10 bg-monstera text-white text-xs font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-walnut hover:shadow-walnut/50 transition-all duration-300 group"
              >
                Conhecer a Profissional{' '}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Mobile Image - Shows below content on mobile, hidden on desktop */}
          <div className="lg:hidden w-full max-w-md mx-auto reveal delay-200">
            <div className="relative h-[50vh] group">
              <div className="absolute inset-0 bg-ginkgo/20 mask-organic translate-x-3 translate-y-3" />
              <img
                src={heroImage}
                alt="Débora Blaso Psicóloga"
                className="w-full h-full object-cover mask-organic relative z-10 group-hover:scale-105 transition-transform duration-700"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
