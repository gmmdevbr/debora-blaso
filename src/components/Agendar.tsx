import { MessageCircle } from 'lucide-react';

export function Agendar() {
  return (
    <section className="py-20 sm:py-24 px-6 bg-summer-sand text-center border-y-2 border-monstera/10">
      <div className="max-w-4xl mx-auto reveal">
        <h2 className="font-display text-3xl sm:text-4xl mb-6 sm:mb-8 text-monstera">
          Pronta para iniciar sua jornada?
        </h2>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-14 sm:h-16 px-8 sm:px-12 bg-monstera text-summer-sand text-xs sm:text-sm font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-walnut hover:shadow-walnut/50 transition-all duration-300 rounded-sm"
        >
          <MessageCircle className="w-5 h-5 mr-3" /> Agendar Sessão Agora
        </a>
        <p className="mt-6 text-xs font-bold uppercase tracking-widest opacity-60 text-monstera">
          Resposta em até 24 horas úteis
        </p>
      </div>
    </section>
  );
}
