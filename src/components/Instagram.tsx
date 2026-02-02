import { ExternalLink, Instagram as InstagramIcon } from 'lucide-react';
import { InstagramEmbed } from 'react-social-media-embed';

const POST_URLS = [
  'https://www.instagram.com/p/DTgSKLlEmjg/',
  'https://www.instagram.com/p/DRxuT_wDv-H/',
  'https://www.instagram.com/p/DTQ0YIIkvgG/',
  'https://www.instagram.com/p/DTOdE1rDvsh/',
];

export function InstagramConnect() {
  return (
    <section className="py-12 px-6 md:px-12 bg-summer-sand overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 reveal text-center md:text-left">
          <div>
            <h2 className="font-display text-4xl lg:text-5xl text-monstera mb-3">
              Conecte-se comigo
            </h2>
            <p className="text-lg text-muted max-w-md mb-2 md:mb-3">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal delay-200">
          {POST_URLS.map((url, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden border-2 border-monstera/10 hover:border-lambs-ear/40 transition-all duration-500 ease-in-out hover:shadow-xl"
            >
              <div className="instagram-embed-wrapper instagram-crop">
                <InstagramEmbed url={url} width="100%" />
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 z-10 bg-summer-sand/95 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out hover:bg-lambs-ear"
              >
                <ExternalLink className="w-4 h-4 text-monstera" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
