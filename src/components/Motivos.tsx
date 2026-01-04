import { Eye, Fingerprint, Hourglass, Plus, Sprout } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

interface CardData {
  icon: typeof Eye;
  title: string;
  backTitle: string;
  backText: string;
}

const cards: CardData[] = [
  {
    icon: Eye,
    title: 'Corpo, aparência & autoestima',
    backTitle: 'Autoestima',
    backText:
      'Dificuldade de reconhecer qualidades, sensação de inadequação constante.',
  },
  {
    icon: Fingerprint,
    title: 'Expressão de Identidade',
    backTitle: 'Identidade',
    backText:
      'Relação conflituosa com o espelho. Quando a roupa atua como barreira.',
  },
  {
    icon: Hourglass,
    title: 'Futuro & Planejamento',
    backTitle: 'Futuro',
    backText:
      'Organização das finanças e da aposentadoria com segurança emocional.',
  },
  {
    icon: Sprout,
    title: 'Bem-estar & Presença',
    backTitle: 'Bem-estar',
    backText: 'Encontrar o seu ritmo em um jeito prático e acolhedor de viver.',
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
      className={cn('flip-card h-100', isFlipped && 'flipped')}
      onClick={handleFlip}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Card: ${card.title} - Click to flip`}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front bg-white text-monstera border border-white/10 p-10 flex flex-col justify-between shadow-lg">
          <div className="w-14 h-14 bg-summer-sand rounded-full flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-walnut" />
          </div>
          <h3 className="font-display text-3xl leading-tight">
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
          <div className="mt-auto pt-8 border-t border-monstera/10 w-full flex justify-between items-center opacity-50">
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold">
              Ver Detalhes
            </span>
            <Plus className="w-4 h-4" />
          </div>
        </div>
        <div className="flip-card-back bg-walnut text-white p-10 flex flex-col justify-center text-center">
          <h4 className="font-display text-2xl mb-4 italic">
            {card.backTitle}
          </h4>
          <p className="text-base leading-relaxed font-sans">{card.backText}</p>
        </div>
      </div>
    </div>
  );
}

export function Motivos() {
  return (
    <section
      id="motivos"
      className="py-32 px-6 md:px-12 bg-monstera text-summer-sand scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 reveal">
          <h2 className="font-display text-4xl lg:text-6xl tracking-tighter mb-6 leading-tight">
            Cada pessoa tem um motivo <br />
            para fazer terapia.{' '}
            <span className="text-ginkgo italic font-script">
              Qual é o seu?
            </span>
          </h2>
          <p className="text-[10px] uppercase tracking-[0.25em] font-bold opacity-60">
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
