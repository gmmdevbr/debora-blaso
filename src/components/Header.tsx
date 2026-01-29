import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavbarScroll } from '../hooks/useNavbarScroll';
import { cn } from '../lib/utils';

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
          <a href="#" className="group z-50 flex items-center mr-4 md:mr-6 lg:mr-8">
            <img src="/logo-horizontal.svg" alt="Débora Blaso" className="h-14 sm:h-16 lg:h-20 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-baseline gap-9 text-sm font-bold uppercase tracking-[0.16em] text-monstera pb-8">
            <a
              href="#sobre"
              className="hover:text-lambs-ear transition-colors relative py-1 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-lambs-ear after:transition-all"
            >
              Sobre
            </a>
            <a
              href="#motivos"
              className="hover:text-lambs-ear transition-colors relative py-1 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-lambs-ear after:transition-all"
            >
              Motivos
            </a>
            <a
              href="#como-funciona"
              className="hover:text-lambs-ear transition-colors relative py-1 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-lambs-ear after:transition-all"
            >
              Como Funciona
            </a>
            <a
              href="#abordagem"
              className="hover:text-lambs-ear transition-colors relative py-1 hover:after:w-full after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-lambs-ear after:transition-all"
            >
              Abordagem
            </a>
            <a
              href="https://wa.me/5531972348221?text=Oi%20D%C3%A9bora%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-monstera text-summer-sand px-6 py-3 rounded-sm hover:bg-lambs-ear hover:text-white transition-all shadow-lg text-sm tracking-[0.14em]"
            >
              Agendar
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={toggleMenu}
            className="lg:hidden z-50 text-monstera p-2 pb-9"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-8 h-8" />
            ) : (
              <Menu className="w-8 h-8" />
            )}
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
          <a
            href="#sobre"
            onClick={closeMenu}
            className="hover:text-walnut transition-colors"
          >
            Sobre
          </a>
          <a
            href="#motivos"
            onClick={closeMenu}
            className="hover:text-walnut transition-colors"
          >
            Motivos
          </a>
          <a
            href="#como-funciona"
            onClick={closeMenu}
            className="hover:text-walnut transition-colors"
          >
            Como Funciona
          </a>
          <a
            href="#servicos"
            onClick={closeMenu}
            className="hover:text-walnut transition-colors"
          >
            O Clube
          </a>
          <a
            href="https://wa.me/5531972348221?text=Oi%20D%C3%A9bora%2C%20vim%20pelo%20seu%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20seu%20trabalho"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="text-base font-sans uppercase tracking-[0.18em] bg-monstera text-ginkgo px-12 py-5 mt-4 shadow-xl rounded-sm"
          >
            Agendar WhatsApp
          </a>
        </nav>
      </div>
    </>
  );
}
