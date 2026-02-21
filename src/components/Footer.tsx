export function Footer() {
  return (
    <footer className="bg-monstera text-summer-sand py-12 px-6 md:px-12 border-t-2 border-summer-sand/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-center md:text-left">
        <div className="text-center md:text-left">
          <img
            src="/logo-horizontal.svg"
            alt="Débora Blaso"
            className="h-10 sm:h-12 w-auto mb-2 sm:mb-3 mx-auto md:mx-0 brightness-0 invert"
          />
          <span className="text-xs lg:text-[10px] uppercase tracking-[0.18em] lg:tracking-[0.2em] opacity-60 block mt-2 text-center">
            CRP 04/39485
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm lg:text-[11px] font-bold uppercase tracking-[0.16em] lg:tracking-[0.2em] opacity-70">
          <a href="#sobre" className="hover:text-ginkgo transition-colors">
            Sobre
          </a>
          <a href="#motivos" className="hover:text-ginkgo transition-colors">
            Motivos
          </a>
          <a
            href="#como-funciona"
            className="hover:text-ginkgo transition-colors"
          >
            Como Funciona
          </a>
          <a href="#abordagem" className="hover:text-ginkgo transition-colors">
            Abordagem
          </a>
          <a
            href="https://wa.me/5531972348221?text=Oi%20D%C3%A9bora%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ginkgo transition-colors"
          >
            Agendar
          </a>
        </div>
        <div className="text-xs lg:text-[10px] uppercase tracking-[0.18em] lg:tracking-[0.2em] opacity-60 flex flex-col gap-2 text-center md:text-left">
          <span>© 2026 Todos os direitos reservados.</span>
          <span>
            Feito por:{' '}
            <a
              href="https://gmartins.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ginkgo transition-colors"
            >
              gmartins.dev
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
