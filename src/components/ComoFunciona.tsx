import { CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Escolha o Formato',
    description:
      'Os atendimentos têm duração de 50 minutos e podem ser realizados online, via Google Meet, ou presencialmente em Belo Horizonte/MG. Endereço Presencial: Rua dos Tupis, 38, sala 2103, Centro - BH. Em frente ao Parque Municipal e ao lado do antigo Othon Palace Hotel.',
  },
  {
    number: '02',
    title: 'Agende uma primeira sessão',
    description:
      'A primeira sessão tem como objetivo compreender sua demanda, esclarecer dúvidas e avaliar, juntos, se a psicoterapia é o caminho mais adequado para este momento da sua vida. Entre em contato pelo WhatsApp para verificar disponibilidade de agenda.',
  },
  {
    number: '03',
    title: 'Encontramos o seu Ritmo',
    description:
      'Caso optemos por seguir com o processo, definiremos a frequência e construiremos um plano terapêutico personalizado, respeitando suas necessidades e objetivos.',
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
              className="p-10 border-2 border-monstera/15 hover:border-walnut/40 hover:bg-walnut/5 transition-all duration-300 reveal bg-summer-sand/80 rounded-[2.5rem] shadow-sm"
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
        <div className="mt-16 p-6 bg-lambs-ear/10 rounded-2xl border-2 border-lambs-ear/20 flex gap-4 items-start max-w-2xl mx-auto reveal">
          <div className="bg-lambs-ear p-2 rounded-full shrink-0">
            <CheckCircle className="w-4 h-4 text-summer-sand" />
          </div>
          <div>
            <h4 className="font-bold text-monstera text-sm uppercase tracking-wide mb-1">
              Nota sobre Convênios
            </h4>
            <p className="text-sm text-monstera/80 leading-relaxed">
              Meus atendimentos são somente particulares, mas emito nota fiscal que pode ser utilizada para solicitação de reembolso, caso seu convênio realize. Se tiver dúvidas de como funciona o processo de reembolso, basta entrar em contato com a sua operadora de plano de saúde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
