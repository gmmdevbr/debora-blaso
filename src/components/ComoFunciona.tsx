import { CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Escolha o Formato',
    description:
      'Atendimento Online (Global) ou Presencial em Belo Horizonte/MG.',
  },
  {
    number: '02',
    title: 'Agende sua Sessão',
    description:
      'Entre em contato pelo WhatsApp para verificar disponibilidade.',
  },
  {
    number: '03',
    title: 'Seu Ritmo',
    description:
      'Definimos a frequência e o plano terapêutico ideal para sua necessidade.',
  },
];

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="py-32 px-6 md:px-12 bg-summer-sand scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 reveal">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-walnut block mb-4">
            Passo a Passo
          </span>
          <h2 className="font-display text-5xl lg:text-7xl text-monstera">
            Como funciona?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-10 border border-monstera/10 hover:border-walnut/50 transition-colors reveal bg-white rounded-[2.5rem]"
            >
              <span className="font-display text-6xl text-walnut/20 mb-6 block">
                {step.number}
              </span>
              <h3 className="font-display text-2xl text-monstera mb-4">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 p-6 bg-walnut/10 rounded-2xl border border-walnut/20 flex gap-4 items-start max-w-2xl mx-auto reveal">
          <div className="bg-walnut p-2 rounded-full shrink-0">
            <CheckCircle className="w-4 h-4 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-monstera text-sm uppercase tracking-wide mb-1">
              Nota sobre Convênios
            </h4>
            <p className="text-sm text-monstera/80 leading-relaxed">
              Atendimentos particulares. Não aceitamos convênios diretamente,
              mas fornecemos recibo para solicitação de reembolso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
