import { ArrowRight, BookOpen, ExternalLink, Mic } from 'lucide-react';
import talksImage from '../assets/images/JFR_2464.webp';
import clubeImage from '../assets/images/JFR_2689.webp';

export function Services() {
  return (
    <section
      id="servicos"
      className="py-12 px-6 md:px-12 bg-summer-sand scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-20 text-center reveal">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl text-monstera">
            Além da clínica.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Clube */}
          <div className="relative group overflow-hidden rounded-4xl sm:rounded-[3rem] h-112 sm:h-128 reveal shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-monstera/75 z-10 transition-colors duration-500 ease-in-out group-hover:bg-monstera/80" />
            <img
              src={clubeImage}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              alt="Clube de Psicologia da Moda"
              loading="lazy"
            />
            <div className="relative z-20 p-8 sm:p-12 h-full flex flex-col justify-center items-center text-center text-summer-sand">
              <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-ginkgo mb-4 sm:mb-6" />
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
                Clube de Psicologia <br />{' '}
                <span className="italic font-normal text-ginkgo">da Moda.</span>
              </h3>
              <a
                href="https://www.psicologiadamoda.club"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ginkgo text-monstera px-9 py-3.5 rounded-sm text-sm font-bold uppercase tracking-[0.18em] hover:bg-lambs-ear hover:text-summer-sand transition-all duration-500 ease-in-out"
              >
                Conhecer o Clube <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          {/* Palestras */}
          <div className="relative group overflow-hidden rounded-4xl sm:rounded-[3rem] h-112 sm:h-128 reveal shadow-2xl cursor-pointer">
            <div className="absolute inset-0 bg-monstera/70 z-10 transition-colors duration-500 ease-in-out group-hover:bg-monstera/75" />
            <img
              src={talksImage}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              alt="Palestras e Talks"
              loading="lazy"
            />
            <div className="relative z-20 p-8 sm:p-12 h-full flex flex-col justify-center items-center text-center text-summer-sand">
              <Mic className="w-10 h-10 sm:w-12 sm:h-12 text-ginkgo mb-4 sm:mb-6" />
              <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
                Palestras & <br />{' '}
                <span className="italic font-normal text-ginkgo">Talks.</span>
              </h3>
              <a
                href="https://wa.me/5531972348221?text=Oi%20D%C3%A9bora%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ginkgo text-monstera px-9 py-3.5 rounded-sm text-sm font-bold uppercase tracking-[0.18em] hover:bg-lambs-ear hover:text-summer-sand transition-all duration-500 ease-in-out"
              >
                Solicitar Proposta <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
