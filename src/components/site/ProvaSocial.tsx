import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate as fmAnimate } from "framer-motion";
import { Reveal } from "./Reveal";
import { LaserStars } from "./LaserStars";

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

// Clones nas pontas do trilho para permitir loop infinito e suave (sem "salto" visível).
const loop = [testimonials[testimonials.length - 1]!, ...testimonials, testimonials[0]!];

const DRAG_THRESHOLD = 90;
const DRAG_VELOCITY_THRESHOLD = 500;

export function ProvaSocial() {
  const [index, setIndex] = useState(1); // 1 = primeira avaliação "real" (0 é o clone da última)
  const [paused, setPaused] = useState(false);
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);

  // Mede a largura real do cartão e mantém o trilho alinhado ao redimensionar.
  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.offsetWidth;
      setWidth(w);
      x.set(-index * w);
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Move o trilho até nextIndex. Ao aterrar num clone das pontas, "teleporta"
  // sem animação para a posição real equivalente — o loop fica invisível.
  const goTo = (nextIndex: number) => {
    if (!width) {
      setIndex(nextIndex);
      return;
    }
    fmAnimate(x, -nextIndex * width, {
      type: "spring",
      stiffness: 320,
      damping: 34,
      onComplete: () => {
        if (nextIndex === loop.length - 1) {
          x.set(-1 * width);
          setIndex(1);
        } else if (nextIndex === 0) {
          x.set(-(loop.length - 2) * width);
          setIndex(loop.length - 2);
        }
      },
    });
    setIndex(nextIndex);
  };

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      goTo(index + 1);
    }, 5500);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, index, width]);

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } },
  ) => {
    const passedThreshold =
      Math.abs(info.offset.x) > DRAG_THRESHOLD ||
      Math.abs(info.velocity.x) > DRAG_VELOCITY_THRESHOLD;

    if (passedThreshold) {
      goTo(index + (info.offset.x < 0 ? 1 : -1));
    } else {
      goTo(index);
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
            {/* Esquerda — selo fixo, não muda */}
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

            {/* Direita — trilho de avaliações; entram e saem pelo "portal" nas bordas */}
            <div
              ref={containerRef}
              className="relative min-h-[16rem] overflow-hidden lg:col-span-8 lg:min-h-[13rem]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
              }}
            >
              <motion.div
                className="flex h-full cursor-grab select-none active:cursor-grabbing"
                drag="x"
                dragElastic={0.1}
                dragMomentum={false}
                dragConstraints={{ left: -(index + 1) * width, right: -(index - 1) * width }}
                onDragStart={() => setPaused(true)}
                onDragEnd={handleDragEnd}
                style={{ x, touchAction: "pan-y" }}
              >
                {loop.map((t, i) => (
                  <article
                    key={`${t.name}-${i}`}
                    aria-hidden={i !== index}
                    className="card-pad w-full flex-none border border-border bg-steel/50 shadow-soft"
                    style={{ width: width || "100%" }}
                  >
                    <blockquote className="text-[1rem] leading-[1.9] text-foreground/85">
                      “{t.text}”
                    </blockquote>
                    <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
                      <p className="font-display text-[0.9rem] font-bold uppercase tracking-[0.04em] text-foreground">
                        {t.name}
                      </p>
                      <p className="text-[0.72rem] uppercase tracking-[0.08em] text-muted-foreground">
                        {t.when}
                      </p>
                    </div>
                  </article>
                ))}
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
