import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useNavbarScroll } from '../hooks/useNavbarScroll';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useNavbarScroll();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        id="main-header"
        className={cn(
          'fixed w-full z-50 transition-all duration-300 top-0 left-0',
          isScrolled ? 'nav-scrolled' : 'py-8',
          'px-6 md:px-12'
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a href="#" className="flex flex-col group z-50">
            <span className="font-display text-2xl font-bold tracking-tight text-monstera">
              DÉBORA BLASO
            </span>
            <span className="text-[9px] uppercase tracking-[0.25em] font-bold opacity-60">
              Psychology & Fashion
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-monstera">
            <a
              href="#sobre"
              className="hover:text-walnut transition-colors relative py-1 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-walnut after:transition-all"
            >
              Sobre
            </a>
            <a
              href="#motivos"
              className="hover:text-walnut transition-colors relative py-1 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-walnut after:transition-all"
            >
              Motivos
            </a>
            <a
              href="#como-funciona"
              className="hover:text-walnut transition-colors relative py-1 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-walnut after:transition-all"
            >
              Como Funciona
            </a>
            <a
              href="#servicos"
              className="hover:text-walnut transition-colors relative py-1 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-walnut after:transition-all"
            >
              O Clube
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-monstera text-summer-sand px-6 py-2 rounded-sm hover:bg-walnut hover:text-white transition-all shadow-lg"
            >
              Agendar
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden z-50 text-monstera p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-summer-sand/98 z-40 transition-transform duration-500 flex flex-col justify-center items-center gap-8',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col gap-8 text-center text-3xl font-display text-monstera">
          <a href="#sobre" className="hover:text-walnut mobile-link" onClick={closeMenu}>
            Sobre
          </a>
          <a href="#motivos" className="hover:text-walnut mobile-link" onClick={closeMenu}>
            Motivos
          </a>
          <a
            href="#como-funciona"
            className="hover:text-walnut mobile-link"
            onClick={closeMenu}
          >
            Como Funciona
          </a>
          <a href="#servicos" className="hover:text-walnut mobile-link" onClick={closeMenu}>
            O Clube
          </a>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans uppercase tracking-widest bg-monstera text-ginkgo px-10 py-4 mt-4 shadow-xl"
          >
            Agendar WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
