import { ExternalLink, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  content: string;
  initial: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Natália Romão',
    content:
      'A Débora é uma profissional incrível, extremamente capacitada e atenciosa. Sou muito grata e feliz pelos atendimentos que tive com ela, pois teve um impacto muito positivo na minha vida! Recomendo de olhos fechados!!',
    initial: 'N',
    rating: 5,
  },
  {
    id: 2,
    name: 'Thauane Joviano',
    content:
      'A Débora é simplesmente maravilhosa! Com ela eu aprendi não só a importância da terapia como entendi mais sobre mim, sobre meu diagnóstico, ela é fera!',
    initial: 'T',
    rating: 5,
  },
  {
    id: 3,
    name: 'Marcela Borges',
    content:
      'Processo incrível, os resultados são sustentáveis pois são conectados a valores pessoais, considerando a nossa individualidade. No meu caso foi aliado com Coach de carreira, também pela Debora Blaso, o que enriqueceu demais a construção da postura que o novo cargo recebido demandava. Investimento para a vida, recomendo!',
    initial: 'M',
    rating: 5,
  },
  {
    id: 4,
    name: 'Amanda Cruz',
    content:
      'Tive muita sorte de encontrar a Débora como a minha primeira psicóloga. A terapia me ajudou tanto nos últimos anos, sempre com muito profissionalismo e humanidade. Recomendo 100% como profissional.',
    initial: 'A',
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section
      id="reviews"
      className="py-12 px-6 md:px-12 bg-summer-sand scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 reveal">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-lambs-ear block mb-6 opacity-70">
            Depoimentos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl mb-6 leading-none text-monstera">
            O que dizem sobre o processo
          </h2>
          <p className="text-lg sm:text-xl opacity-80 leading-relaxed text-monstera max-w-3xl mx-auto">
            Cada trajetória é única, mas todas compartilham a busca por
            transformação genuína.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="reveal bg-lambs-ear/10 border-2 border-lambs-ear/30 p-8 rounded-2xl hover:bg-lambs-ear/20 hover:border-lambs-ear/50 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="font-bold text-monstera text-lg sm:text-xl mb-1">
                  {testimonial.name}
                </h3>
                <div className="flex text-walnut">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-monstera/90 leading-relaxed text-base lg:text-lg">
                {testimonial.content}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center reveal">
          <a
            href="https://www.google.com/search?q=debora+blaso+psicologa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-lambs-ear/10 border-2 border-lambs-ear/30 rounded-full text-monstera font-medium hover:bg-lambs-ear hover:text-white transition-all duration-300 group shadow-sm hover:shadow-lg cursor-pointer"
          >
            <span>Ver todas as avaliações no Google</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
