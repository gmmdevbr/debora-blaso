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
      className="py-8 px-6 md:px-12 bg-summer-sand scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-20 reveal">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-lambs-ear block mb-4">
            Passo a Passo
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-monstera">
            Como funciona?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 lg:p-10 border-2 border-monstera/15 bg-monstera/5 transition-all duration-300 reveal rounded-4xl sm:rounded-[2.5rem] shadow-sm"
            >
              <span className="font-display text-5xl sm:text-6xl text-lambs-ear/40 mb-4 sm:mb-6 block">
                {step.number}
              </span>
              <h3 className="font-display text-xl sm:text-2xl text-monstera mb-3 sm:mb-4">
                {step.title}
              </h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
