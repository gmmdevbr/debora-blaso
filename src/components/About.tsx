import { Award, Globe, GraduationCap } from 'lucide-react';

export function About() {
  const formations = [
    { icon: GraduationCap, text: 'Psicologia - PUC Minas' },
    { icon: Globe, text: 'Mestrado Psicologia da Saúde - Inglaterra' },
    { icon: Award, text: 'Pós-Grad. Terapias Contextuais - Unifil' },
  ];

  const values = ['Beleza', 'Independência', 'Lealdade', 'Conexão'];

  return (
    <section
      id="sobre"
      className="py-32 px-6 md:px-12 bg-white/40 backdrop-blur-sm scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div className="order-2 lg:order-1 reveal">
          <h2 className="font-display text-5xl lg:text-7xl tracking-tighter leading-none mb-10 text-monstera">
            Quem é <br />{' '}
            <span className="italic text-walnut font-script text-6xl lg:text-7xl">
              Débora Blaso?
            </span>
          </h2>
          <div className="space-y-6 text-lg text-muted leading-relaxed text-justify lg:text-left font-sans">
            <p>
              Meu trabalho é voltado para mulheres que estão oficialmente
              cansadas de tentar dar conta de tudo — carreira, aparência,
              expectativas, relacionamentos e ainda parecerem "bem resolvidas".
            </p>
            <p>
              Com <strong>12 anos de experiência</strong> como psicóloga,
              ofereço um atendimento psicológico baseado em evidências que
              enxerga você por inteiro: mente, corpo, identidade e
              comportamento.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-walnut block mb-6 border-b border-monstera/10 pb-2">
                Formações & Certificações
              </span>
              <ul className="space-y-4">
                {formations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={index}
                      className="flex items-center gap-4 text-monstera font-bold text-sm"
                    >
                      <Icon className="w-5 h-5 text-walnut shrink-0" />
                      {item.text}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-walnut block mb-6 border-b border-monstera/10 pb-2">
                Valores Pessoais
              </span>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-walnut" />
                    <span className="text-sm font-bold text-monstera">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative w-full aspect-[4/5] lg:h-[800px] reveal delay-200 lg:sticky lg:top-32">
          <div className="absolute inset-0 bg-walnut/20 mask-organic -scale-x-100 -translate-x-6 -translate-y-6" />
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
            alt="Débora Blaso Retrato"
            className="w-full h-full object-cover mask-organic -scale-x-100 relative z-10 shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
