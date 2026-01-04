import { ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white border-t border-monstera/5">
      <div className="max-w-3xl mx-auto text-center reveal">
        <h2 className="font-display text-5xl lg:text-6xl text-monstera mb-6">Fale Comigo</h2>
        <p className="text-lg text-muted mb-10 leading-relaxed">
          Dúvidas sobre como a terapia funciona ou se este é o momento certo? Estou aqui para
          esclarecer.
        </p>
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-2xl font-display text-walnut hover:text-monstera transition-colors border-b-2 border-walnut hover:border-monstera pb-1"
        >
          Iniciar conversa no WhatsApp <ArrowUpRight className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
