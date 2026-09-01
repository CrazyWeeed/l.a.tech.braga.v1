import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValue, animate as fmAnimate } from "framer-motion";
import { Reveal } from "./Reveal";
import { LaserStars } from "./LaserStars";

// Distância mínima (px) ou velocidade para o arrasto trocar de avaliação.
const DRAG_THRESHOLD = 90;
const DRAG_VELOCITY_THRESHOLD = 500;
// Quanto o cartão pode deslocar-se ao arrastar antes de "prender" no limite.
const DRAG_LIMIT = 140;

const testimonials = [
  {
    name: "Maria Tereza Farias Ferreira",
    when: "há um mês",
    text: "Muito bom atendimento do Luís Albuquerque. Com a sua calma no tratamento dos dados e a sua competência informática ela deixa o cliente completamente satisfeito. O seu contato guardei no meu WhatsApp para uma próxima vez!",
  },
  {
    name: "Flávia",
    when: "há 2 semanas",
    text: "Serviço excelente, profissional, pessoa confiável, gentil e prestativa, muito solícito e disposto a atender às suas necessidades técnicas e logísticas. Apesar de ser fim de semana, ele consertou imediatamente o meu laptop que estava inoperante há 5 dias devido a danos causados por água, quando nem mesmo o LED funcionava. Só tenho gratidão pelo serviço e pela paciência em consertá-lo, dando o seu melhor para que tudo desse certo. Obrigado!",
  },
  {
    name: "Larissa Pilz",
    when: "há 2 meses",
    text: "Luiz é um excelente profissional. Atendeu-me de forma rápida. Identificou o problema do meu laptop, pesquisou a peça, fez a troca e agora tudo funciona perfeitamente. Em 3 dias estava tudo resolvido. Recomendo muito os serviços dele.",
  },
  {
    name: "Cátia Ferreira",
    when: "há 5 meses",
    text: "Ótimo trabalho. Rápido e eficiente. O meu computador finalmente voltou ao seu funcionamento normal após passar pelas mãos de vários outros técnicos com tentativas falhadas. Muito obrigada Luiz Tech pelo excelente trabalho.",
  },
  {
    name: "Ruud van Bochoven",
    when: "há um mês",
    text: "Ajudou perfeitamente! A impressora não estava a funcionar e eu não conseguia consertá-la sozinho; após a intervenção do Luiz, todos os problemas foram resolvidos! Se tiver outra dúvida no futuro, entro em contacto com ele novamente imediatamente. Obrigado!",
  },
  {
    name: "Yan Torres",
    when: "há 5 meses",
    text: "Honesto e trabalha bem, arranjou a troca da bateria do computador e deu vida à impressora que estava parada em casa.",
  },
  {
    name: "Paulo Henrique Maurinho",
    when: "há 5 meses",
    text: "Muito bom! O meu PC estava maluco e agora está como novo 🙌🏾",
  },
];

export function ProvaSocial() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // Posição horizontal do cartão enquanto é arrastado (rato ou dedo).
  const dragX = useMotionValue(0);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused]);

  const current = testimonials[index]!;

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    const passedThreshold =
      Math.abs(info.offset.x) > DRAG_THRESHOLD ||
      Math.abs(info.velocity.x) > DRAG_VELOCITY_THRESHOLD;

    if (passedThreshold) {
      const direction = info.offset.x < 0 ? 1 : -1;
      setIndex((current) => (current + direction + testimonials.length) % testimonials.length);
      dragX.set(0);
    } else {
      // Não passou o limiar: volta suavemente à posição original.
      fmAnimate(dragX, 0, { type: "spring", stiffness: 420, damping: 34 });
    }
    setPaused(false);
  };

  return (
    <section
      id="avaliacoes"
      className="carbon-weave depth-dark relative section-anchor bg-obsidian py-20 md:py-24"
    >
      <div className="section-seam" aria-hidden />
      <div className="relative z-[2] mx-auto max-w-[92rem] px-6 md:px-12">
        <Reveal>
          <p className="eyebrow text-ignition">Avaliações</p>
          <h2 className="font-display mt-6 max-w-2xl text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.015em] uppercase">
            Confiam no trabalho.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="mt-14 grid gap-10 md:mt-16 lg:grid-cols-12 lg:items-center lg:gap-16"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
          >
            {/* Esquerda — selo fixo, não muda, agora maior */}
            <div className="lg:col-span-4">
              <LaserStars />
              <p className="font-display mt-5 text-[2rem] leading-[1.05] font-bold uppercase tracking-[-0.01em] sm:text-[2.35rem]">
                5 estrelas
                <span className="block text-ignition">no Google.</span>
              </p>
              <a
                href="https://www.google.com/maps/search/L.A.+Tech+Braga"
                target="_blank"
                rel="noreferrer"
                className="link-quiet mt-6 inline-block text-[1rem] text-ignition"
              >
                Ver avaliações no Google Maps →
              </a>
            </div>

            {/* Direita — avaliação arrastável (rato ou dedo), com fade só nas bordas */}
            <div
              className="relative min-h-[16rem] overflow-hidden lg:col-span-8 lg:min-h-[13rem]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.article
                  key={current.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  drag="x"
                  dragElastic={0.18}
                  dragConstraints={{ left: -DRAG_LIMIT, right: DRAG_LIMIT }}
                  dragMomentum={false}
                  onDragStart={() => setPaused(true)}
                  onDragEnd={handleDragEnd}
                  style={{ x: dragX, touchAction: "pan-y" }}
                  aria-live="polite"
                  className="card-pad cursor-grab select-none border border-border bg-steel/50 shadow-soft active:cursor-grabbing"
                >
                  <blockquote className="text-[1rem] leading-[1.9] text-foreground/85">
                    “{current.text}”
                  </blockquote>
                  <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                    <p className="font-display text-[0.9rem] font-bold uppercase tracking-[0.04em] text-foreground">
                      {current.name}
                    </p>
                    <p className="text-[0.72rem] uppercase tracking-[0.08em] text-muted-foreground">
                      {current.when}
                    </p>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
