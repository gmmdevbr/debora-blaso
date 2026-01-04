# Design System & Tokens

Este documento contém a "verdade absoluta" sobre o visual do projeto.

## 1. Tipografia (Google Fonts)

Importar no CSS: `Bodoni Moda`, `Roboto Condensed`, `Pinyon Script`.

| **Uso** | **Família** | **Classes Tailwind** |
| --- | --- | --- |
| **Títulos / Display** | `Bodoni Moda` (Serif) | `font-display` |
| **Corpo / UI** | `Roboto Condensed` (Sans) | `font-sans` |
| **Acentos / Detalhes** | `Pinyon Script` (Cursive) | `font-script` |

## 2. Paleta de Cores (CSS Variables)

Use nomes semânticos do Shadcn, mapeados para as cores da marca.

- **Background (Summer Sand):** `#E6E4D9` -> `hsl(48 20% 88%)`
- **Primary / Foreground (Monstera):** `#2E3628` -> `hsl(100 13% 18%)`
- **Accent (Walnut):** `#A27F67` -> `hsl(24 28% 52%)`
- **Highlight (Ginkgo):** `#D1D4B0` -> `hsl(73 28% 76%)`
- **Secondary (Lamb's Ear):** `#506751` -> `hsl(100 13% 35%)`

## 3. Texturas e Formas

- **Noise Texture:** Deve ser aplicado um overlay fixo de ruído (SVG filter) em todo o site com `opacity-40` e `mix-blend-multiply`.
- **Organic Masks:** Imagens (Hero e Bio) devem usar máscaras SVG orgânicas (blob shapes) para fugir do quadrado tradicional.

## 4. Componentes Chave

- **Flip Cards (Seção Motivos):** Cards que giram 180 graus no eixo Y ao clicar (desktop e mobile).
    - *Frente:* Ícone + Título + CTA "Ver Detalhes".
    - *Verso:* Fundo Primary + Texto explicativo + Ícone de destaque.
- **Navbar:** Transparente no topo, Glassmorphism (`backdrop-blur`) ao rolar.
- **Reveal Animation:** Elementos devem surgir de baixo para cima (`translateY`) com `opacity` ao entrar na viewport.

## 5. Layout Editorial

- Uso agressivo de **espaço em branco** (Padding Y de 32 a 40 unidades do Tailwind).
- Tipografia gigante (6xl a 9xl) para slogans.
- Sobreposição de elementos (Texto sobre imagem, Imagem sobre formas).
