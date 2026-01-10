import { ArrowUpRight } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-16 px-6 md:px-12 bg-summer-sand">
      <div className="max-w-3xl mx-auto text-center reveal">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-monstera mb-6">
          Tem dúvidas?
          <br />
          Fale comigo no WhatsApp!
        </h2>
        <p className="text-lg sm:text-xl text-muted mb-8 sm:mb-10 leading-relaxed">
          Dúvidas sobre como a terapia funciona ou se este é o momento certo?
          Estou aqui para esclarecer.
        </p>
        <a
          href="https://wa.me/5531972348221?text=Oi%20D%C3%A9bora%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-display text-lambs-ear hover:text-monstera transition-colors border-b-2 border-lambs-ear hover:border-monstera pb-1"
        >
          Iniciar conversa no WhatsApp{' '}
          <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>
    </section>
  );
}
