import {
  Code2, Database, GitBranch, Layers3, Server, Terminal,
} from "lucide-react";
import { FaJava } from "react-icons/fa";
import {
  SiApacheairflow, SiDocker, SiFastapi, SiGit, SiGithub,
  SiJavascript, SiKubernetes, SiPostgresql, SiPython,
  SiReact, SiTypescript,
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


/** Six groups, one clean chapter between Milestones and Let's Talk. */
export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="tech-stack-heading"
      className="relative isolate scroll-mt-20 overflow-hidden border-t border-[#36203E] px-5 pb-24 pt-28 text-white sm:px-8 sm:pb-28 md:pt-32"
      style={{
        background:
          "linear-gradient(130deg, #21122D 0%, #392044 40%, #5D3671 74%, #704582 100%)",
      }}
    >
      {/* The cropped editorial title echoes PROJECTS and MILESTONES. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden">
        <p className="translate-y-[-32%] whitespace-nowrap text-[18vw] font-semibold leading-none text-white/[0.075]">
          TECH STACK
        </p>
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-48 top-8 h-[30rem] w-[30rem] rounded-full bg-[#A77FC0]/15 blur-[110px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-44 bottom-[-15rem] h-[30rem] w-[30rem] rounded-full bg-[#120A1A]/40 blur-[110px]" />

      <div className="relative mx-auto max-w-[1480px]">
        <header className="mb-10 md:mb-14">
          <p className="text-xs font-medium uppercase tracking-[0.23em] text-[#DDC2EC]">
            01 / tech stack
          </p>
          <h2 id="tech-stack-heading" className="mt-4 max-w-3xl font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            the tools I <em className="text-[#DBB7E9]">build with.</em>
          </h2>
        </header>

        {/* On desktop: three across, two down. Tablet: two; phone: one. */}
        <div className="grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {groups.map((group) => {
            const CategoryIcon = group.Icon;
            return (
              <article
                key={group.title}
                className="group relative z-0 flex h-full min-w-0 flex-col rounded-2xl border border-white/35 bg-[#EEECEF] p-5 text-[#271B2C] shadow-[0_18px_45px_rgba(17,6,25,0.11)] transition-[transform,box-shadow,border-color,background-color] duration-300 ease-out hover:z-10 hover:-translate-y-2 hover:scale-[1.025] hover:border-[#D7B1E4] hover:bg-[#F7F3F9] hover:shadow-[0_28px_65px_rgba(17,6,25,0.36)] motion-reduce:transform-none sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#704582]">
                    {group.number} / stack
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-[#704582] transition-[transform,background-color] duration-300 group-hover:rotate-12 group-hover:bg-[#E5D6EA] motion-reduce:transform-none">
                    <CategoryIcon aria-hidden="true" className="h-4 w-4" />
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-2xl leading-tight lg:text-[1.85rem]">
                  {group.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-[#665D67]">{group.note}</p>

                <div
                  aria-label={group.title + " technology logos"}
                  className="mt-6 flex min-h-11 flex-wrap items-center gap-2"
                >
                  {group.logos.map((logo) => {
                    const Logo = logo.Icon;
                    return (
                      <span
                        key={logo.name}
                        title={logo.name}
                        aria-label={logo.name}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#DDD6E0] bg-white shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-3 motion-reduce:transform-none"
                      >
                        <Logo aria-hidden="true" className="h-6 w-6" style={{ color: logo.color }} />
                      </span>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#D2C5D7] bg-white/70 px-3 py-1.5 text-xs font-medium leading-tight text-[#684276]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
