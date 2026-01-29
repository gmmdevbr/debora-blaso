import {
  Award,
  BookOpen,
  Globe,
  GraduationCap,
  Heart,
  Users,
} from 'lucide-react';
import aboutImage from '../assets/images/JFR_2139.webp';

export function About() {
  const formations = [
    { icon: GraduationCap, text: 'Graduação em Psicologia – PUC Minas (CRP 04/39485)' },
    {
      icon: Award,
      text: 'Pós-Graduação em Terapias Comportamentais Contextuais – Unifil',
    },
    {
      icon: Globe,
      text: 'Mestrado em Psicologia da Saúde – University of the West of England (Inglaterra)',
    },
    {
      icon: BookOpen,
      text: 'Aprimoramento em Distorção de Imagem Corporal - AMBULIM-IPq–HC-FMUSP',
    },
    {
      icon: Heart,
      text: 'Capacitação em Relacionamentos Abusivos – Instituto Não Era Amor',
    },
    {
      icon: Users,
      text: 'Formação em Coaching Psychology (Orientação Profissional) – Academia do Psicólogo',
    },
  ];

  const values = [
    'Beleza',
    'Independência',
    'Lealdade',
    'Conexão',
    'Segurança',
    'Reciprocidade',
    'Autocuidado',
    'Responsabilidade',
  ];

  return (
    <section
      id="sobre"
      className="py-12 px-6 md:px-12 bg-summer-sand scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="order-2 lg:order-1 reveal">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl tracking-tighter leading-none mb-8 sm:mb-10 text-monstera">
            Quem é <br />{' '}
            <span className="italic text-walnut font-script text-5xl sm:text-6xl lg:text-7xl">
              Débora Blaso?
            </span>
          </h2>
          <div className="space-y-5 sm:space-y-6 text-lg sm:text-xl text-muted leading-relaxed text-left font-sans">
            <p>
              Meu trabalho é voltado para mulheres que estão oficialmente
              cansadas de tentar dar conta de tudo — carreira, aparência,
              expectativas, relacionamentos e ainda parecerem "bem resolvidas".
              Para quem quer entender processos, não rótulos; conseguir traduzir
              o que sente; e construir uma vida que faça sentido ser vivida, não
              apenas performada.
            </p>
            <p>
              Com <strong>12 anos de experiência</strong> como psicóloga,
              ofereço um atendimento psicológico baseado em evidências que
              enxerga você por inteiro: mente, corpo, identidade e
              comportamento. Trabalho para substituir confusão por clareza,
              culpa por compreensão, rigidez por flexibilidade e padrões
              impossíveis por humanidade.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            <div>
              <span className="text-xs uppercase tracking-[0.22em] font-bold text-lambs-ear block mb-6 border-b border-monstera/10 pb-2">
                Formações & Certificações
              </span>
              <ul className="space-y-3">
                {formations.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-monstera text-sm sm:text-base leading-relaxed"
                    >
                      <Icon className="w-4 h-4 text-lambs-ear shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.22em] font-bold text-lambs-ear block mb-6 border-b border-monstera/10 pb-2">
                Valores Pessoais
              </span>
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-lambs-ear" />
                    <span className="text-base font-bold text-monstera">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative w-full aspect-square reveal delay-200 lg:sticky lg:top-24">
          <div className="absolute inset-0 bg-walnut/20 mask-organic -scale-x-100 -translate-x-6 -translate-y-6" />
          <img
            src={aboutImage}
            alt="Débora Blaso Retrato"
            className="w-full h-full object-cover mask-organic -scale-x-100 relative z-10 shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
