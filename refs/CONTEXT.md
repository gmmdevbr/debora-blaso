Aqui está o Pacote de Contexto Completo.

Para iniciar a nova conversa no Gemini Pro (ou qualquer outra IA), copie e cole o texto abaixo. Ele resume todo o conhecimento adquirido, as regras de design definidas, a arquitetura técnica escolhida (Tailwind v4) e a estrutura de conteúdo final.

📋 Contexto do Projeto: Website Débora Blaso
1. Objetivo do Projeto: Criar um website profissional para Débora Blaso, psicóloga clínica que une psicologia e moda. O site deve ser um funil de alta conversão, transmitindo autoridade científica e sofisticação estética ("Editorial High-End"), totalmente otimizado para SEO.

2. Stack Tecnológica Obrigatória:

Framework: React 19 (via Vite).

Estilização: Tailwind CSS v4 (Arquitetura CSS-First, sem tailwind.config.js legado).

Componentes: shadcn/ui (Adaptado manualmente).

Ícones: Lucide React.

3. Identidade Visual (Baseado no Guidebook "O Cérebro 2025"):

Tipografia:

Títulos: Bodoni Moda (Serif, elegante).

Corpo: Roboto Condensed (Sans, técnico).

Detalhes: Pinyon Script (Cursive, assinatura).

Paleta de Cores (Tokens):

--primary: #2E3628 (Verde Monstera - Texto/Fundo Escuro).

--background: #E6E4D9 (Summer Sand - Areia).

--accent: #A27F67 (Walnut - Terracota).

--highlight: #D1D4B0 (Ginkgo - Bege Esverdeado).

Estética:

Textura de ruído (Noise Overlay) em todo o site.

Máscaras orgânicas (Blobs) nas imagens.

Flip Cards 3D para interatividade.

4. Estrutura de Conteúdo (11 Seções - SEO & Conversão):

Header: Logo, Menu, CTA "Agendar".

Hero: Slogan ("Psicologia que veste..."), CTA, Foto com máscara orgânica.

Sobre Mim: Autoridade (Formações: UFSC, Genebra, ANBIMA), Valores pessoais.

Motivos: Flip Cards interativos (Dor vs. Solução).

Como Funciona: Passo a passo (1, 2, 3) + Disclaimer (Não aceita convênio, só reembolso).

Abordagem: Metodologia técnica (FAP/ACT) em fundo escuro.

Agendar (Highlight): Faixa de destaque com botão WhatsApp.

Outros Serviços: Grid 50/50 (O Clube vs. Palestras).

Conecte-se: Grid simulando feed do Instagram.

Fale Comigo: Tira-dúvidas final.

Footer: Minimalista com CRP e Copyright.

📂 Arquivos de Instrução (Copie isso para o Agente)
Abaixo estão os arquivos .md consolidados que definem as regras para a IA programar:

AGENTS.md (Persona)
Markdown

# AGENTS.md
## 🤖 Perfil
Engenheiro Frontend Sênior especializado em SEO Técnico e Design Editorial.
## 🎯 Missão
Recriar o site "Débora Blaso" com fidelidade visual absoluta (Pixel Perfect) e arquitetura moderna (Tailwind v4).
## 🧠 Regras
1. Tailwind v4 First: Configuração via CSS Variables no `index.css`.
2. SEO Semântico: Uso rigoroso de tags HTML5.
3. Performance: Lazy loading em imagens, código limpo.
DESIGN.md (Tokens Visuais)
Markdown

# DESIGN.md
## Tipografia
Display: Bodoni Moda | Body: Roboto Condensed | Script: Pinyon Script
## Cores (:root)
--background: #E6E4D9 | --primary: #2E3628 | --accent: #A27F67 | --highlight: #D1D4B0
## UI Utils
.bg-noise (SVG Noise) | .mask-organic (SVG Blob) | .flip-card (3D Transform)
INSTRUCTIONS.md (Roteiro de Código)
Markdown

# INSTRUÇÕES TÉCNICAS
1. Setup: Vite + React + Tailwind v4.
2. CSS (`src/index.css`): Defina `@theme` e variáveis `:root` aqui. Não use config JS.
3. Componentes: Crie `Button` e `Card` baseados no shadcn/ui.
4. App.jsx: Implemente as 11 seções na ordem exata definida no contexto.
5. Interatividade:
   - Menu Mobile deve ser um overlay que fecha ao clicar.
   - Flip Cards devem virar com `onClick` (mobile friendly).
   - Use `IntersectionObserver` para animação de "Reveal" ao rolar.

