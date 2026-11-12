import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  CheckCheck,
  Code2,
  Database,
  GitBranch,
  Layers3,
  RefreshCw,
  Server,
  Terminal,
  Workflow,
} from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiApacheairflow,
  SiDocker,
  SiFastapi,
  SiGit,
  SiGithub,
  SiJavascript,
  SiKubernetes,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const groups = [
  {
    number: "01",
    title: "languages",
    note: "where the ideas begin",
    Icon: Code2,
    logos: [
      { name: "Java", Icon: FaJava, color: "#E76F00" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#B59A00" },
    ],
    skills: ["Java 21", "Python", "SQL", "TypeScript", "JavaScript", "Bash"],
  },
  {
    number: "02",
    title: "backend & architecture",
    note: "the systems behind the screen",
    Icon: Server,
    logos: [
      { name: "Java", Icon: FaJava, color: "#E76F00" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
    ],
    skills: [
      "REST APIs",
      "Java Sockets",
      "Multithreading",
      "Microservices",
      "Apache ActiveMQ / JMS",
      "Maven",
      "JUnit 5",
      "Jackson / JSON",
    ],
  },
  {
    number: "03",
    title: "web & experiences",
    note: "where people meet the product",
    Icon: Layers3,
    logos: [
      { name: "React", Icon: SiReact, color: "#149ECA" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
    ],
    skills: [
      "React",
      "FastAPI",
      "Flask",
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility",
      "Leaflet",
    ],
  },
  {
    number: "04",
    title: "data & databases",
    note: "finding the signal in the noise",
    Icon: Database,
    logos: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
      { name: "Apache Airflow", Icon: SiApacheairflow, color: "#027EE6" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
    ],
    skills: [
      "PostgreSQL",
      "SQLite",
      "Supabase",
      "ETL / ELT",
      "Apache Airflow",
      "dbt",
      "pandas",
      "DuckDB",
      "PyArrow / Parquet",
      "Data Quality",
    ],
  },
  {
    number: "05",
    title: "cloud & delivery",
    note: "getting it out into the world",
    Icon: GitBranch,
    logos: [
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "#326CE5" },
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#24292F" },
    ],
    skills: [
      "AWS / AWS Amplify",
      "Docker",
      "Kubernetes",
      "Git / GitHub",
      "GitHub Actions",
      "CI / CD",
      "Vercel",
      "Linux",
    ],
  },
  {
    number: "06",
    title: "testing & toolkit",
    note: "making the details count",
    Icon: Terminal,
    logos: [
      { name: "GitHub", Icon: SiGithub, color: "#24292F" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
    ],
    skills: [
      "Unit Testing",
      "Integration Testing",
      "pytest",
      "Debugging",
      "VS Code",
      "IntelliJ IDEA",
      "Kiro IDE",
    ],
  },
];

const lifecycle = [
  {
    title: "requirements",
    detail: "understand the problem",
  },
  {
    title: "design",
    detail: "map out the solution",
  },
  {
    title: "development",
    detail: "bring the idea to life",
  },
  {
    title: "testing",
    detail: "find and fix the gaps",
  },
  {
    title: "deployment",
    detail: "share it with the world",
  },
  {
    title: "maintenance",
    detail: "listen, learn and improve",
  },
];

const peopleSkills = [
  "problem-solving",
  "analytical thinking",
  "teamwork",
  "communication",
  "adaptability",
  "accountability",
  "attention to detail",
  "time management",
  "continuous learning",
  "peer mentoring",
];

export default function Skills() {
  const thinkingRef = useRef<HTMLDivElement | null>(null);
  const [journeyVisible, setJourneyVisible] = useState(false);

  useEffect(() => {
    const node = thinkingRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setJourneyVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setJourneyVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen overflow-hidden border-t border-border bg-background px-5 pb-28 pt-28 sm:px-8"
    >
      {/* A large cropped headline to keep the visual rhythm of Projects and Milestones. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden">
        <p className="translate-y-[-38%] whitespace-nowrap text-[19vw] font-semibold leading-none text-muted">
          SKILLS & STACK
        </p>
      </div>

      <div className="relative mx-auto grid max-w-[1500px] gap-16 pt-[18vw] lg:grid-cols-[minmax(280px,0.65fr)_minmax(0,1.35fr)]">
        <aside className="h-fit lg:sticky lg:top-28">
          <p className="text-sm tracking-[0.15em] text-[#704582]">
            a toolkit & a way of thinking
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">
            the tools.
            <br />
            <em className="text-[#704582]">the thinking.</em>
          </h2>

          <p className="mt-7 max-w-sm leading-relaxed text-muted-foreground">
            A little look at what I build with, and how I bring ideas to life.
            Because writing code is only part of the story.
          </p>

          <div className="mt-10 flex items-center gap-3 text-sm text-[#704582]">
            <span className="font-hand text-lg">build. test. learn. repeat.</span>
            <ArrowUpRight aria-hidden="true" className="h-5 w-5 -rotate-12" />
          </div>
        </aside>

        <div className="min-w-0">
          <header className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#704582]">01 / the tools</p>
            <h3 className="mt-3 font-serif text-4xl sm:text-5xl">things I work with.</h3>
            <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
              From Java and backend services to interactive web experiences, data pipelines
              and shipping applications.
            </p>
          </header>

          <div className="grid gap-4 sm:grid-cols-2">
            {groups.map((group) => {
              const GroupIcon = group.Icon;
              return (
                <article
                  key={group.title}
                  className="group flex min-w-0 flex-col rounded-2xl border border-[#DED5DF] bg-[#F9F7F6] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#704582]/60 hover:shadow-[0_12px_30px_rgba(112,69,130,0.09)] sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.14em] text-[#704582]">{group.number} / stack</span>
                    <GroupIcon aria-hidden="true" className="h-5 w-5 text-[#704582]" />
                  </div>

                  <h4 className="mt-4 font-serif text-2xl leading-tight sm:text-3xl">{group.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{group.note}</p>

                  <div className="mt-6 flex min-h-12 flex-wrap items-center gap-2" aria-label={group.title + " technology logos"}>
                    {group.logos.map((logo) => {
                      const Logo = logo.Icon;
                      return (
                        <span
                          key={logo.name}
                          title={logo.name}
                          aria-label={logo.name}
                          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#E6E0E8] bg-white transition-transform duration-300 group-hover:-rotate-2"
                        >
                          <Logo aria-hidden="true" className="h-6 w-6" style={{ color: logo.color }} />
                        </span>
                      );
                    })}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#DED1E2] bg-background px-3 py-1.5 text-xs font-medium text-[#704582]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-24" ref={thinkingRef}>
            <p className="text-xs uppercase tracking-[0.2em] text-[#704582]">02 / the thinking</p>
            <h3 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              tools are only <em className="text-[#704582]">half the story.</em>
            </h3>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              The Software Development Life Cycle helps me take an idea from
              the first question to a product people can actually use.
            </p>

            <div className="mt-9 rounded-2xl border border-[#DED5DF] bg-[#F9F7F6] px-5 py-7 sm:px-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="font-serif text-2xl">from idea to iteration.</p>
                <span className="rounded-full border border-[#DCCFDF] px-3 py-1 text-xs font-medium text-[#704582]">
                  SDLC
                </span>
              </div>

              {/* The hand-drawn line connects the six stages at desktop widths. */}
              <svg
                viewBox="0 0 960 90"
                preserveAspectRatio="none"
                className="mt-7 hidden h-20 w-full lg:block"
                aria-hidden="true"
              >
                <path
                  d="M80 45 C130 -12 190 102 240 45 S350 -12 400 45 S510 102 560 45 S670 -12 720 45 S830 102 880 45"
                  fill="none"
                  stroke="#DCCFDF"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M80 45 C130 -12 190 102 240 45 S350 -12 400 45 S510 102 560 45 S670 -12 720 45 S830 102 880 45"
                  fill="none"
                  stroke="#252025"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength={1}
                  className="transition-[stroke-dashoffset] duration-[1800ms] ease-out motion-reduce:transition-none"
                  style={{ strokeDasharray: 1, strokeDashoffset: journeyVisible ? 0 : 1 }}
                />
                {[80, 240, 400, 560, 720, 880].map((x, index) => (
                  <circle key={x} cx={x} cy="45" r="8" fill={journeyVisible ? "#704582" : "#F9F7F6"} stroke="#704582" strokeWidth="3">
                    <title>{lifecycle[index]!.title}</title>
                  </circle>
                ))}
              </svg>

              <ol className="relative mt-6 grid gap-3 sm:grid-cols-2 lg:mt-3 lg:grid-cols-6">
                {lifecycle.map((step, index) => (
                  <li
                    key={step.title}
                    className={
                      "relative rounded-xl border border-[#E8E2E8] bg-white p-3 transition-[opacity,transform] duration-700 motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 " +
                      (journeyVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0")
                    }
                    style={{ transitionDelay: String(index * 100) + "ms" }}
                  >
                    <span className="text-xs font-semibold tracking-wide text-[#704582]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 text-sm font-semibold capitalize">{step.title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.detail}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-5 flex items-start gap-4 rounded-2xl border border-[#DCCFDF] p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#704582] text-white">
                <RefreshCw aria-hidden="true" className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-serif text-2xl">the Agile mindset.</h4>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  Collaborate, build in iterations, welcome feedback, and keep improving.
                  Agile practices shape how I work through the lifecycle, rather than being
                  another step at the end.
                </p>
              </div>
            </div>

            <div className="mt-16">
              <div className="flex items-center gap-3 text-[#704582]">
                <BrainCircuit aria-hidden="true" className="h-5 w-5" />
                <p className="text-xs uppercase tracking-[0.2em]">03 / the human side</p>
              </div>
              <h3 className="mt-3 font-serif text-3xl sm:text-4xl">
                good work takes <em className="text-[#704582]">good people skills.</em>
              </h3>
              <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
                The curiosity, care and communication that turn individual contributions
                into something meaningful together.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {peopleSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#DCCFDF] px-4 py-2 text-sm font-medium text-[#704582] transition-colors duration-200 hover:bg-[#704582] hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <Workflow aria-hidden="true" className="h-4 w-4 text-[#704582]" />
                  work with a process
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCheck aria-hidden="true" className="h-4 w-4 text-[#704582]" />
                  test what I build
                </span>
                <span className="inline-flex items-center gap-2">
                  <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-[#704582]" />
                  keep learning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
