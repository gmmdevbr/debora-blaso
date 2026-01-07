import { Instagram as InstagramIcon } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&q=80',
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=400&q=80',
];

export function InstagramConnect() {
  return (
    <section className="py-8 px-6 md:px-12 bg-summer-sand overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 reveal text-center md:text-left">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl text-monstera mb-3">
              Conecte-se comigo
            </h2>
            <p className="text-muted max-w-md mb-2 md:mb-3">
              Insights diários sobre comportamento, estilo e vida real.
            </p>
            <a
              href="https://instagram.com/debora.blaso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lambs-ear hover:underline flex items-center justify-center md:justify-start gap-2 font-bold tracking-wide"
            >
              <InstagramIcon className="w-4 h-4" /> @debora.blaso
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 reveal delay-200">
          {images.map((src, index) => (
            <div
              key={index}
              className="aspect-square bg-summer-sand/50 rounded-xl overflow-hidden group relative cursor-pointer hover:shadow-2xl border border-monstera/10 hover:border-walnut/30 transition-all duration-300"
            >
              <img
                src={src}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
