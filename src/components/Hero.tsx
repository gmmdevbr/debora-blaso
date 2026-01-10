import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="hero-section relative min-h-screen flex items-end lg:items-center overflow-hidden">
      {/* Background Image - Desktop only with overlay */}
      <div className="hero-background" />

      {/* Gradient Overlay for readability - adjusted for mobile */}
      <div className="absolute inset-0 bg-linear-to-b from-summer-sand/30 via-summer-sand/75 to-summer-sand/98 lg:bg-linear-to-r lg:from-summer-sand/95 lg:via-summer-sand/85 lg:to-transparent z-0" />

      {/* Subtle decorative blob */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-ginkgo/10 rounded-full blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4 hidden lg:block" />

      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 py-12 pb-20 lg:py-32 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          {/* Content - Centered with background image on all devices */}
          <div className="lg:col-span-7 reveal">
            <h1 className="font-display text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] sm:leading-[0.95] tracking-tight mb-8 sm:mb-10 text-monstera">
              Traduzindo complexidades em caminhos possíveis
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl max-w-xl text-muted mb-10 sm:mb-12 leading-relaxed pl-5 sm:pl-6 border-l-2 border-ginkgo">
              Dê um passo em direção a uma vida com mais sentido, olhando para
              si com presença e cuidado.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#sobre"
                className="inline-flex items-center justify-center h-14 sm:h-14 px-10 sm:px-12 bg-monstera text-white text-sm sm:text-base font-bold uppercase tracking-[0.16em] shadow-2xl hover:bg-lambs-ear hover:shadow-lambs-ear/50 transition-all duration-300 group rounded-sm"
              >
                Conhecer a Profissional{' '}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
