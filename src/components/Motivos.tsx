import {
  AlertCircle,
  Briefcase,
  Heart,
  Layers,
  Plus,
  ShoppingBag,
  User,
  Users,
  Zap,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

interface CardData {
  icon: typeof AlertCircle;
  title: string;
  backText: string;
}

const cards: CardData[] = [
  {
    icon: Zap,
    title: 'Pressões externas e desempenho',
    backText:
      'Viver tentando equilibrar vida pessoal, carreira, aparência e expectativas sociais. Pressão do trabalho, medo constante de julgamento e sensação de precisar performar competência, estabilidade e "boa aparência" o tempo todo — no trabalho, nas relações e até no próprio corpo. Ansiedade e autocobrança em situações de avaliação (entrevistas, apresentações, reuniões, feedbacks).',
  },
  {
    icon: Briefcase,
    title: 'Identidade, transições de vida e carreira',
    backText:
      'Bloqueios e sensação de estagnação ("não sei para onde ir", medo de mudar e de ficar onde está). Dificuldade de se ver em cargos maiores e paralisia diante de decisões pessoais e profissionais. Questionamentos de identidade após mudanças de vida, como maternidade, separações, luto, mudança de cidade/país, troca de carreira ou novos ciclos: "quem sou eu agora?"',
  },
  {
    icon: User,
    title: 'Corpo, aparência e autoestima',
    backText:
      'Relação conflituosa com o corpo e com a própria aparência. Problemas de autoestima: dificuldade de reconhecer qualidades, sensação de inadequação constante, busca de aprovação externa como bússola.',
  },
  {
    icon: ShoppingBag,
    title: 'Consumo, regulação emocional e imagem pessoal',
    backText:
      'Relação complicada com o consumo: compras impulsivas para regular emoção. Culpa após comprar. Uso do vestir para "camuflar" inseguranças ou desempenhar papéis sociais.',
  },
  {
    icon: AlertCircle,
    title: 'Exigência, autocrítica e síndrome da impostora',
    backText:
      'Exigência interna exagerada, perfeccionismo e autocrítica intensa. Sensação de "não sou boa o suficiente", atribuir conquistas à sorte, dificuldade em celebrar conquistas, medo de ser "descoberta como uma fraude". Comparação constante com outras pessoas.',
  },
  {
    icon: Layers,
    title: 'Sobrecarga e dificuldade com limites',
    backText:
      'Sobrecarga emocional e física (jornadas duplas/triplas: casa, família, trabalho). Dificuldade de descansar sem culpa e sensação de estar sempre atrás. Dificuldade de se posicionar, dizer não e colocar limites. Medo de parecer "difícil", "mandona" ou "chata"; assumir tarefas que não deveria; aceitar sobrecargas por medo de conflito.',
  },
  {
    icon: Heart,
    title: 'Relações afetivas e impacto emocional',
    backText:
      'Repetição de padrões nocivos em relacionamentos. Dificuldade de expressar necessidades e estabelecer limites. Medo de abandono ou rejeição. Relações que afetam a autoestima e a relação com o corpo.',
  },
  {
    icon: Users,
    title: 'Dores existenciais contemporâneas',
    backText:
      'Sensação de estagnação ou vazio. Conflito entre autonomia e expectativas externas. Dificuldade em lidar com incertezas. Pressão constante para "ser feliz", performar e corresponder.',
  },
];

function FlipCard({ card }: { card: CardData }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = card.icon;

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleFlip();
    }
  };

  return (
    <div
      className={cn('flip-card h-auto min-h-100', isFlipped && 'flipped')}
      onClick={handleFlip}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Card: ${card.title} - Click to flip`}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front bg-summer-sand text-monstera border border-monstera/10 p-6 sm:p-8 lg:p-10 flex flex-col justify-center items-center shadow-lg min-h-100 text-center sm:text-left sm:items-start sm:justify-between gap-4 sm:gap-0">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-lambs-ear rounded-full flex items-center justify-center">
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-summer-sand" />
          </div>
          <h3 className="font-display text-2xl sm:text-3xl leading-tight flex-grow sm:flex-grow-0 flex items-center justify-center sm:justify-start sm:items-start sm:pt-4">
            {card.title.split('&').map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={part}>
                  {part.trim()}&<br />
                </span>
              ) : (
                part.trim()
              )
            )}
          </h3>
          <div className="pt-6 sm:pt-8 border-t border-monstera/10 w-full flex justify-center sm:justify-between items-center opacity-50 gap-2 sm:mt-auto">
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold">
              Ver Detalhes
            </span>
            <Plus className="w-4 h-4" />
          </div>
        </div>
        <div className="flip-card-back bg-monstera text-summer-sand p-8 flex flex-col justify-start min-h-100 overflow-y-auto">
          <ul className="space-y-2.5">
            {card.backText.split('. ').filter(text => text.trim()).map((point, idx) => (
              <li key={idx} className="flex gap-3 items-start">
                <span className="text-walnut mt-0.5 shrink-0 text-base">•</span>
                <span className="text-xs leading-relaxed font-sans text-left">
                  {point.trim()}{point.endsWith('.') ? '' : '.'}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function Motivos() {
  return (
    <section
      id="motivos"
      className="py-8 px-6 md:px-12 bg-summer-sand scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 sm:mb-20 reveal">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-6xl tracking-tighter mb-6 leading-tight text-monstera">
            Cada pessoa tem um motivo <br className="hidden sm:block" />
            para fazer terapia.{' '}
            <span className="text-walnut italic font-script">
              Qual é o seu?
            </span>
          </h2>
          <p className="text-[10px] uppercase tracking-[0.25em] font-bold opacity-60 text-monstera">
            Toque nos cards para revelar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <FlipCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
