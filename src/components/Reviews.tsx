import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  initial: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ana Carolina M.',
    role: 'Designer de Moda',
    content:
      'A terapia me ajudou a entender padrões que eu repetia há anos. Hoje consigo fazer escolhas mais alinhadas com quem eu realmente sou. Gratidão imensa por todo acolhimento e profissionalismo.',
    initial: 'A',
  },
  {
    id: 2,
    name: 'Juliana S.',
    role: 'Empresária',
    content:
      'Débora tem uma escuta sensível e ao mesmo tempo direcionada. Ela me ajudou a ressignificar momentos difíceis e a criar estratégias práticas para lidar com a ansiedade no dia a dia.',
    initial: 'J',
  },
  {
    id: 3,
    name: 'Mariana P.',
    role: 'Arquiteta',
    content:
      'O trabalho com a ACT transformou minha relação com os pensamentos. Aprendi a observá-los sem me deixar dominar. Recomendo de olhos fechados!',
    initial: 'M',
  },
  {
    id: 4,
    name: 'Beatriz R.',
    role: 'Jornalista',
    content:
      'Finalmente encontrei um espaço seguro para falar sobre tudo. A abordagem é humanizada e baseada em evidências, exatamente o que eu procurava. Minha vida mudou depois que comecei a terapia.',
    initial: 'B',
  },
  {
    id: 5,
    name: 'Camila F.',
    role: 'Professora',
    content:
      'A terapia me deu ferramentas concretas para lidar com situações que antes me paralisavam. Hoje me sinto mais confiante e no controle da minha vida.',
    initial: 'C',
  },
  {
    id: 6,
    name: 'Larissa T.',
    role: 'Psicóloga',
    content:
      'Como colega de profissão, admiro muito o trabalho da Débora. Ela une teoria de ponta com uma prática genuinamente acolhedora. É inspirador ver o cuidado com cada detalhe do processo terapêutico.',
    initial: 'L',
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      className="py-32 px-6 md:px-12 bg-summer-sand scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20 reveal">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-walnut block mb-6 opacity-70">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl mb-6 leading-none text-monstera">
            O que dizem sobre o processo
          </h2>
          <p className="text-base sm:text-lg opacity-80 leading-relaxed text-monstera max-w-3xl mx-auto">
            Cada trajetória é única, mas todas compartilham a busca por
            transformação genuína.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="reveal bg-white/40 border-2 border-monstera/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-monstera/30 hover:bg-white/60 transition-all duration-500 group"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-walnut to-lambs-ear flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <span className="text-white font-display text-xl sm:text-2xl">
                    {testimonial.initial}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg sm:text-xl text-monstera mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs uppercase tracking-wider text-walnut opacity-70">
                    {testimonial.role}
                  </p>
                </div>
                <Quote className="w-8 h-8 text-ginkgo/30 flex-shrink-0" />
              </div>
              <p className="text-monstera leading-relaxed opacity-90 text-[15px]">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
