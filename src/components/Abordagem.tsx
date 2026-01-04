export function Abordagem() {
  return (
    <section
      id="abordagem"
      className="py-32 px-6 md:px-12 bg-monstera text-ginkgo scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="reveal">
          <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-ginkgo block mb-6 opacity-60">
            Metodologia
          </span>
          <h2 className="font-display text-5xl lg:text-7xl mb-8 leading-none text-white">
            Minha Abordagem
          </h2>
          <p className="opacity-80 leading-relaxed mb-2 text-white font-display italic text-2xl">
            Base científica. Sensibilidade humana.
          </p>
          <p className="text-lg opacity-80 leading-relaxed mb-10 text-white">
            Atuo com base na Psicologia Cognitivo-Comportamental (TCC), com
            especialização em Terapias Contextuais. Minha prática integra a
            Terapia Analítica Funcional (FAP) e a Terapia de Aceitação e
            Compromisso (ACT) — abordagens contemporâneas que ajudam a entender
            e transformar padrões de comportamento que causam sofrimento.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white/5 border border-white/10 text-white p-8 rounded-[2.5rem]">
            <h3 className="font-display text-3xl mb-2 text-walnut">ACT</h3>
            <p className="text-sm opacity-70 font-sans">
              A ACT é particularmente útil para dificuldades intrapessoais.
              Como, por exemplo, lidar com emoções e pensamentos desagradáveis e
              agir conforme seus valores pessoais.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 text-white p-8 rounded-[2.5rem]">
            <h3 className="font-display text-3xl mb-2 text-ginkgo">FAP</h3>
            <p className="text-sm opacity-70 font-sans">
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
