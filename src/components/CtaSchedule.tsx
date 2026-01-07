import { CheckCircle, MessageCircle } from 'lucide-react';

export function CtaSchedule() {
  return (
    <section className="py-16 px-6 md:px-12 bg-monstera text-summer-sand">
      <div className="max-w-4xl mx-auto text-center reveal">
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center h-14 sm:h-16 px-8 sm:px-12 bg-ginkgo text-monstera text-xs sm:text-sm font-bold uppercase tracking-[0.2em] shadow-2xl hover:bg-ginkgo/90 transition-all duration-300 rounded-sm"
        >
          <MessageCircle className="w-5 h-5 mr-3" /> Quero agendar minha primeira sessão
        </a>
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 bg-summer-sand/10 rounded-xl sm:rounded-2xl border border-summer-sand/20 flex gap-3 sm:gap-4 items-start max-w-2xl mx-auto">
          <div className="bg-ginkgo p-2 rounded-full shrink-0">
            <CheckCircle className="w-4 h-4 text-monstera" />
          </div>
          <div className="text-left">
            <h4 className="font-bold text-summer-sand text-sm uppercase tracking-wide mb-1">
              Nota sobre Convênios
            </h4>
            <p className="text-sm text-summer-sand/80 leading-relaxed">
              Meus atendimentos são somente particulares, mas emito nota fiscal que pode ser utilizada para solicitação de reembolso, caso seu convênio realize. Se tiver dúvidas de como funciona o processo de reembolso, basta entrar em contato com a sua operadora de plano de saúde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
