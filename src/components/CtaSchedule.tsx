import { MessageCircle } from 'lucide-react';

export function CtaSchedule() {
  return (
    <section className="py-20 sm:py-24 px-6 md:px-12 bg-monstera text-summer-sand">
      <div className="max-w-4xl mx-auto text-center reveal">
        {/* <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mb-8 sm:mb-10 text-summer-sand">
          Pronta para iniciar sua jornada?
        </h2> */}
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-16 sm:h-20 px-10 sm:px-16 bg-ginkgo text-monstera text-sm sm:text-base font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-ginkgo/90 hover:scale-105 transition-all duration-300 rounded-sm"
        >
          <MessageCircle className="w-6 h-6 mr-3" /> Quero agendar minha
          primeira sessão
        </a>
      </div>
    </section>
  );
}
