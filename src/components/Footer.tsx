export function Footer() {
  return (
    <footer className="bg-monstera text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        <div>
          <span className="font-display text-2xl font-bold tracking-tight block">
            DÉBORA BLASO
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 block mt-2">
            CRP 12/XXXXX • Psicologia & Imagem
          </span>
        </div>
        <div className="flex gap-8 text-[11px] font-bold uppercase tracking-[0.2em] opacity-80">
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
        <div className="text-[10px] uppercase tracking-[0.2em] opacity-40">
          © 2025 Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
