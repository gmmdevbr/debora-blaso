import { MessageCircle } from 'lucide-react';

export function Agendar() {
  return (
    <section className="py-24 px-6 bg-ginkgo text-monstera text-center">
      <div className="max-w-4xl mx-auto reveal">
        <h2 className="font-display text-4xl mb-8">
          Pronta para iniciar sua jornada?
        </h2>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-16 px-12 bg-monstera text-white text-sm font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-monstera/90 transition-all rounded-sm"
        >
          <MessageCircle className="w-5 h-5 mr-3" /> Agendar Sessão Agora
        </a>
        <p className="mt-6 text-xs font-bold uppercase tracking-widest opacity-60">
          Resposta em até 24 horas úteis
        </p>
      </div>
    </section>
  );
}
