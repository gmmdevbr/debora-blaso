import { MessageCircle } from 'lucide-react';

export function Agendar() {
  return (
    <section className="py-20 sm:py-24 px-6 bg-monstera text-center border-y-2 border-monstera/20">
      <div className="max-w-4xl mx-auto reveal">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8 text-summer-sand">
          Pronta para iniciar sua jornada?
        </h2>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-14 sm:h-16 px-8 sm:px-12 bg-ginkgo text-monstera text-xs sm:text-sm font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-ginkgo/90 transition-all duration-300 rounded-sm"
        >
          <MessageCircle className="w-5 h-5 mr-3" /> Agendar Sessão
        </a>
      </div>
    </section>
  );
}
