export function Footer() {
  return (
    <footer className="bg-summer-sand text-monstera py-12 sm:py-16 px-6 md:px-12 border-t-2 border-monstera/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 text-center md:text-left">
        <div>
          <img src="/logo.svg" alt="Débora Blaso" className="h-7 sm:h-8 w-auto mb-2 sm:mb-3 mx-auto md:mx-0" />
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 block mt-2">
            CRP 12/XXXXX • Psicologia & Imagem
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-[11px] font-bold uppercase tracking-[0.2em] opacity-70">
          <a href="#sobre" className="hover:text-walnut transition-colors">
            Sobre
          </a>
          <a href="#servicos" className="hover:text-walnut transition-colors">
            Serviços
          </a>
          <a
            href="https://instagram.com/debora.blaso"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-walnut transition-colors"
          >
            Instagram
          </a>
        </div>
        <div className="text-[10px] uppercase tracking-[0.2em] opacity-40 flex flex-col gap-2">
          <span>© 2025 Todos os direitos reservados.</span>
          <span className="opacity-60">Feito por: <a href="https://gmartins.dev" target="_blank" rel="noopener noreferrer" className="hover:text-walnut transition-colors">gmartins.dev</a></span>
        </div>
      </div>
    </footer>
  );
}
