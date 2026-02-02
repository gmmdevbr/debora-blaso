export function Abordagem() {
  return (
    <section
      id="abordagem"
      className="py-12 px-6 md:px-12 bg-summer-sand scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div className="reveal">
          <span className="text-xs uppercase tracking-[0.22em] font-bold text-lambs-ear block mb-6 opacity-70">
            Minha Abordagem
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl mb-4 sm:mb-6 leading-none text-monstera">
            Base científica. <br className="hidden sm:block" />
            <span className="italic text-walnut font-script">
              Sensibilidade humana.
            </span>
          </h2>
          <p className="text-xl opacity-80 leading-relaxed mb-8 text-monstera">
            Atuo com base na Psicologia Cognitivo-Comportamental (TCC), com
            especialização em Terapias Contextuais. Minha prática integra a
            Terapia Analítica Funcional (FAP) e a Terapia de Aceitação e
            Compromisso (ACT) — abordagens contemporâneas que ajudam a entender
            e transformar padrões de comportamento que causam sofrimento.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-lambs-ear/10 border-2 border-lambs-ear/30 text-monstera p-6 sm:p-8 rounded-4xl sm:rounded-[2.5rem] hover:bg-lambs-ear/20 hover:border-lambs-ear/50 transition-all duration-300">
            <h3 className="font-display text-3xl mb-2 text-lambs-ear">ACT</h3>
            <p className="text-base opacity-80 font-sans leading-relaxed">
              A ACT é particularmente útil para dificuldades intrapessoais.
              Como, por exemplo, lidar com emoções e pensamentos desagradáveis e
              agir conforme seus valores pessoais.
            </p>
          </div>
          <div className="bg-walnut/10 border-2 border-walnut/30 text-monstera p-6 sm:p-8 rounded-4xl sm:rounded-[2.5rem] hover:bg-walnut/20 hover:border-walnut/50 transition-all duration-300">
            <h3 className="font-display text-3xl mb-2 text-walnut">FAP</h3>
            <p className="text-base opacity-80 font-sans leading-relaxed">
              A FAP é particularmente útil para dificuldades interpessoais.
              Como, por exemplo, dificuldades em estabelecer relações íntimas e
              conexões autênticas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
