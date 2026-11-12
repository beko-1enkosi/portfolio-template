import { useEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCheck,
  Code2,
  MonitorUp,
  PencilRuler,
  RefreshCw,
  SearchCheck,
  Wrench,
} from "lucide-react";

const stages = [
  { title: "requirements", subtitle: "what needs solving?", detail: "Listen first. Understand the people, the problem and what success looks like.", Icon: SearchCheck, x: 145, y: 510 },
  { title: "design", subtitle: "sketch the possibilities.", detail: "Plan the structure, the interactions and the paths through the product.", Icon: PencilRuler, x: 240, y: 390 },
  { title: "development", subtitle: "let's make it real.", detail: "Build useful features, connect systems and bring the idea to life.", Icon: Code2, x: 335, y: 530 },
  { title: "testing", subtitle: "break it. fix it. learn.", detail: "Test behaviour, catch the edge cases and improve what isn't working.", Icon: CheckCheck, x: 430, y: 400 },
  { title: "deployment", subtitle: "out into the world.", detail: "Ship it, check it works and make it available to the people it's for.", Icon: MonitorUp, x: 525, y: 505 },
  { title: "maintenance", subtitle: "keep making it better.", detail: "Maintain, listen, learn and iterate after the first release.", Icon: Wrench, x: 620, y: 420 },
] as const;

const people = [
  { label: "communication", x: 666, y: 24, angle: -5 },
  { label: "teamwork", x: 687, y: 72, angle: 6 },
  { label: "problem-solving", x: 708, y: 22, angle: -7 },
  { label: "analytical thinking", x: 731, y: 73, angle: 5 },
  { label: "adaptability", x: 747, y: 29, angle: -6 },
  { label: "peer mentoring", x: 759, y: 68, angle: 4 },
] as const;

const otherPeopleSkills = [
  "accountability",
  "attention to detail",
  "time management",
  "continuous learning",
] as const;

/* Our About thread's visual language, made as one connected, gently looping ink path. */
const points = [
  [0, 570], [500, 450], [1450, 510], [2400, 390], [3350, 530],
  [4300, 400], [5250, 505], [6200, 420], [7050, 490], [7950, 440], [8500, 510],
] as const;

const threadPath = points.reduce((path, point, index) => {
  if (index === 0) return "M" + point[0] + " " + point[1];
  const previous = points[index - 1]!;
  const midpoint = (previous[0] + point[0]) / 2;
  const drift = index % 2 === 0 ? 170 : -170;
  return path + " C" + midpoint + " " + (previous[1] + drift) +
    " " + midpoint + " " + (point[1] - drift) + " " + point[0] + " " + point[1];
}, "");

function MobileJourney() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 pb-20 pt-20 sm:px-8 md:hidden motion-reduce:block">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#704582]">
        02 / the thinking
      </p>
      <h2 id="thinking-mobile-heading" className="mt-5 font-serif text-5xl leading-[1.04] sm:text-6xl">
        tools are only <em className="text-[#704582]">half the story.</em>
      </h2>
      <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">
        My approach to software development: follow a thoughtful process, keep
        learning, and remember the people on the other side of the screen.
      </p>

      <div className="relative mt-12 border-l-2 border-[#30272F] pl-6 sm:pl-9">
        {stages.map((stage, index) => {
          const Icon = stage.Icon;
          return (
            <article key={stage.title} className="relative mb-10 last:mb-0">
              <span aria-hidden="true" className="absolute -left-[34px] top-4 h-4 w-4 rounded-full border-[3px] border-[#704582] bg-background sm:-left-[46px]" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#704582]">
                {String(index + 1).padStart(2, "0")} / SDLC
              </p>
              <div className="mt-3 rounded-xl border border-[#DDD4DD] bg-[#F6F3F4] p-5">
                <Icon aria-hidden="true" className="mb-4 h-7 w-7 text-[#704582]" />
                <h3 className="font-serif text-3xl">{stage.title}</h3>
                <p className="mt-2 font-hand text-xl text-[#704582]">{stage.subtitle}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {stage.detail}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-10 flex items-start gap-4 rounded-xl border border-[#DCCFDF] p-5">
        <RefreshCw aria-hidden="true" className="mt-1 h-6 w-6 shrink-0 text-[#704582]" />
        <div>
          <h3 className="font-serif text-2xl">the Agile mindset.</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Collaborate, build in iterations, welcome feedback, and keep improving.
            Agile informs the whole journey, not just one step.
          </p>
        </div>
      </div>

      <div className="mt-24 border-t border-border pt-12">
        <p className="text-xs uppercase tracking-[0.2em] text-[#704582]">
          03 / the human side
        </p>
        <h2 className="mt-4 font-serif text-4xl leading-tight">
          good work takes <em className="text-[#704582]">good people skills.</em>
        </h2>
        <p className="mt-4 text-muted-foreground">
          The curiosity, care and collaboration that make building together worthwhile.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {[...people.map((skill) => skill.label), ...otherPeopleSkills].map((skill) => (
            <span key={skill} className="rounded-full border border-[#DCCFDF] px-4 py-2 text-sm text-[#704582]">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-24 border-t border-border pt-12">
        <p className="font-hand text-xl text-[#704582]">enough about how I build.</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
          let's talk about what <em className="text-[#704582]">we could build together.</em>
        </h2>
        <a href="#hi" className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#704582] px-6 py-3 text-sm font-medium text-white">
          let's talk <ArrowDownRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

export default function ThinkingJourney() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const inkRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const ink = inkRef.current;
    if (!section || !track || !ink) return;

    let frame = 0;
    let alive = true;
    const update = () => {
      if (!alive) return;
      const viewportHeight = window.innerHeight;
      const distance = Math.max(section.offsetHeight - viewportHeight, 1);
      const target = Math.max(0, Math.min(1, (window.scrollY - section.offsetTop) / distance));
      track.style.transform = "translate3d(-" + (target * 750) + "vw, 0, 0)";
      ink.style.strokeDashoffset = String(1 - Math.min(1, target * 1.04));
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => {
      alive = false;
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} id="thinking" className="relative bg-background md:h-[850vh] motion-reduce:h-auto">
      {/* Sticky scene: desktop horizontal scroll, exactly as the About journey. */}
      <div className="sticky top-0 hidden h-screen overflow-hidden md:block motion-reduce:hidden">
        <div
          ref={trackRef}
          className="relative h-full will-change-transform"
          style={{ width: "850vw" }}
        >
          <svg
            viewBox="0 0 8500 900"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <path d={threadPath} fill="none" stroke="#D8D2D8" strokeWidth="3.5" vectorEffect="non-scaling-stroke" />
            <path
              ref={inkRef}
              d={threadPath}
              pathLength={1}
              style={{ strokeDasharray: 1, strokeDashoffset: 1 }}
              fill="none"
              stroke="#201B21"
              strokeLinecap="round"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
            />
            {stages.map((stage) => (
              <circle
                key={stage.title}
                cx={stage.x * 10}
                cy={stage.y}
                r="12"
                fill="#704582"
                stroke="#F9F7F6"
                strokeWidth="5"
              />
            ))}
          </svg>

          {/* Opening frame, with an About-style large editorial statement. */}
          <div className="absolute left-[50vw] top-[28%] w-[72vw] max-w-[900px] -translate-x-1/2 text-center">
            <p className="text-sm tracking-[0.18em] text-[#704582]">02 / THE THINKING</p>
            <h2 className="mt-6 font-serif text-[clamp(3rem,5vw,6rem)] leading-[1.02]">
              tools are only <em className="text-[#704582]">half the story.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
              I have a process for turning questions into things that work.
              Follow the thread.
            </p>
            <p className="mt-6 font-hand text-xl text-[#704582]">scroll to keep exploring →</p>
          </div>

          {stages.map((stage, index) => {
            const Icon = stage.Icon;
            const above = index % 2 === 0;
            return (
              <div
                key={stage.title}
                className="absolute w-[62vw] max-w-[690px] -translate-x-1/2"
                style={{
                  left: stage.x + "vw",
                  top: above ? "12%" : "57%",
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EEE7F1] text-[#704582]">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <span className="text-xs uppercase tracking-[0.19em] text-[#704582]">
                    {String(index + 1).padStart(2, "0")} / SDLC
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-[clamp(3rem,4.3vw,5rem)] leading-none">
                  {stage.title}<span className="text-[#704582]">.</span>
                </h3>
                <p className="mt-3 font-hand text-2xl text-[#704582]">{stage.subtitle}</p>
                <p className="mt-3 max-w-md text-lg leading-relaxed text-muted-foreground">
                  {stage.detail}
                </p>
              </div>
            );
          })}

          {/* Agile belongs to the whole process, not just one numbered step. */}
          <div className="absolute left-[570vw] top-[12%] w-[56vw] max-w-lg -translate-x-1/2 rounded-2xl border border-[#DCCFDF] bg-background/90 p-6 shadow-[0_14px_40px_rgba(46,25,55,0.07)]">
            <RefreshCw aria-hidden="true" className="h-6 w-6 text-[#704582]" />
            <h3 className="mt-3 font-serif text-3xl">the Agile mindset.</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Collaborate, build in iterations, welcome feedback, and keep improving.
              Agile shapes how I work through each stage.
            </p>
          </div>

          {/* The thread continues into the human side, just like the About scenes. */}
          <div className="absolute left-[702vw] top-[34%] w-[72vw] max-w-3xl -translate-x-1/2 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-[#704582]">03 / THE HUMAN SIDE</p>
            <h2 className="mt-4 font-serif text-[clamp(3rem,5vw,5.7rem)] leading-[1.04]">
              good work takes <em className="text-[#704582]">good people skills.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-lg leading-relaxed text-muted-foreground">
              The curiosity, care, and collaboration that make building together worthwhile.
            </p>
          </div>

          {people.map((skill) => (
            <span
              key={skill.label}
              className="absolute rounded-full border border-[#D5C6DB] bg-background/90 px-5 py-3 font-hand text-xl text-[#704582] shadow-sm"
              style={{
                left: skill.x + "vw",
                top: skill.y + "%",
                transform: "translateX(-50%) rotate(" + skill.angle + "deg)",
              }}
            >
              {skill.label}
            </span>
          ))}

          <div className="absolute left-[725vw] top-[83%] flex w-[58vw] max-w-3xl -translate-x-1/2 flex-wrap justify-center gap-2">
            {otherPeopleSkills.map((skill) => (
              <span key={skill} className="rounded-full border border-[#DCCFDF] bg-background px-4 py-2 text-sm text-[#704582]">
                {skill}
              </span>
            ))}
          </div>

          {/* A final About-style sentence draws visitors toward the existing contact scene. */}
          <div className="absolute left-[797vw] top-[26%] w-[78vw] max-w-[1000px] -translate-x-1/2 text-center">
            <p className="font-hand text-2xl text-[#704582]">enough about how I build.</p>
            <h2 className="mt-5 font-serif text-[clamp(3.3rem,5.4vw,6.8rem)] leading-[1.05]">
              let's talk about what <em className="text-[#704582]">we could build together.</em>
            </h2>
            <a
              href="#hi"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#704582] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#5C3268]"
              data-cursor="say hello?"
            >
              let's talk
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <MobileJourney />
    </section>
  );
}
