
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import introKubernetes from "@/assets/bekolenkosi/milestones/certificates/introduction-to-kubernetes.png";
import introLinux from "@/assets/bekolenkosi/milestones/certificates/introduction-to-linux.png";
import kcna from "@/assets/bekolenkosi/milestones/certificates/kcna.png";
import kubernetesEssentials from "@/assets/bekolenkosi/milestones/certificates/kubernetes-essentials.png";
import scientificPython from "@/assets/bekolenkosi/milestones/certificates/scientific-computing-python.png";
import genAI from "@/assets/bekolenkosi/milestones/certificates/wethinkcode-genai.png";
import fullStack from "@/assets/bekolenkosi/milestones/certificates/full-stack-development.png";

import cisco01 from "@/assets/bekolenkosi/milestones/little-victories/cisco-shebuild-01.jpeg";
import cisco02 from "@/assets/bekolenkosi/milestones/little-victories/cisco-shebuild-02.jpeg";
import monkey01 from "@/assets/bekolenkosi/milestones/little-victories/monkey-river-momentum-01.jpeg";
import monkey02 from "@/assets/bekolenkosi/milestones/little-victories/monkey-river-momentum-02.jpeg";
import monkey03 from "@/assets/bekolenkosi/milestones/little-victories/monkey-river-momentum-03.jpeg";
import mukuru01 from "@/assets/bekolenkosi/milestones/little-victories/mukuru-shehacks-01.jpeg";

import canvathon from "@/assets/bekolenkosi/milestones/showing-up/canvathon.png";
import entelect from "@/assets/bekolenkosi/milestones/showing-up/entelect.png";
import girlcode from "@/assets/bekolenkosi/milestones/showing-up/girlcode-participation.png";
import jamboree from "@/assets/bekolenkosi/milestones/showing-up/hmw-jamboree.png";
import monkeyParticipation from "@/assets/bekolenkosi/milestones/showing-up/monkey-river-participation.jpeg";
import upOpenDay from "@/assets/bekolenkosi/milestones/showing-up/up-open-day.png";
import zindi from "@/assets/bekolenkosi/milestones/showing-up/zindi-google-challenge.jpeg";

type MilestoneItem = {
  title: string;
  description: string;
  images: string[];
  award?: string;
  tags?: string[];
  repo?: string;
};

type MilestoneCategory = {
  label: string;
  heading: string;
  description: string;
  items: MilestoneItem[];
};

const categories: MilestoneCategory[] = [
  {
    label: "certificates",
    heading: "always a student.",
    description:
      "Learning doesn't stop when the class ends. A few things I've picked up along the way.",
    items: [
      {
        title: "Kubernetes and Cloud Native Associate",
        description: "The Linux Foundation · KCNA",
        images: [kcna],
      },
      {
        title: "Generative AI for Software Engineers",
        description: "WeThinkCode_",
        images: [genAI],
      },
      {
        title: "Scientific Computing with Python",
        description: "freeCodeCamp",
        images: [scientificPython],
      },
      {
        title: "Full Stack Development",
        description: "FNB APP Academy",
        images: [fullStack],
      },
      {
        title: "Introduction to Linux",
        description: "The Linux Foundation",
        images: [introLinux],
      },
      {
        title: "Introduction to Kubernetes",
        description: "The Linux Foundation",
        images: [introKubernetes],
      },
      {
        title: "Kubernetes and Cloud Native Essentials",
        description: "The Linux Foundation",
        images: [kubernetesEssentials],
      },
    ],
  },
  {
    label: "little victories",
    heading: "a few proud moments.",
    description:
      "Some late nights, good teammates, big ideas, and moments worth remembering.",
    items: [
      {
        title: "Monkey & River × Momentum",
        award: "3rd Place · Msizi",
        description:
          "Built Msizi, a secure AI-powered life insurance companion helping policyholders, beneficiaries, and staff navigate insurance services.",
        images: [monkey01, monkey02, monkey03],
        tags: ["AI", "Momentum AI Gateway", "Next.js", "FastAPI", "PostgreSQL", "RAG"],
        repo: "https://github.com/Baraka-kileo/origin",
      },
      {
        title: "Cisco × WeThinkCode_ SheBuild",
        award: "3rd Place · Thuso",
        description:
          "Built Thuso, a job safety platform helping job seekers verify opportunities, recognise recruitment scams, and prepare for safer interviews.",
        images: [cisco01, cisco02],
        tags: ["React", "Python", "Cisco API", "Location Services", "Job Safety"],
        repo: "https://github.com/beko-1enkosi/thuso",
      },
      {
        title: "Mukuru × WeThinkCode_ SheHacks",
        award: "3rd Place · KingaPesa",
        description:
          "Built KingaPesa, a multilingual cross-border family support prototype with transparent money transfers, low-connectivity features, and safer recipient access.",
        images: [mukuru01],
        tags: ["FinTech", "React", "FastAPI", "SQLite", "Multilingual", "Low Connectivity"],
        repo: "https://github.com/beko-1enkosi/kinga-pesa",
      },
    ],
  },
  {
    label: "showing up",
    heading: "curiosity took me places.",
    description:
      "Not every experience comes with a podium. Sometimes showing up, learning, and trying something new is the win.",
    items: [
      {
        title: "Canvathon Africa 2026",
        description:
            "As part of a team of three, I helped rebrand Upthink Digital by creating a brand kit, promotional flyer, and website landing page. Coming from software development, this challenge pushed me to explore branding, typography, colour, and user experience. We didn't win, but I walked away with new skills, a greater appreciation for design, and even more curiosity.",
        images: [canvathon],
        tags: [
            "Brand Identity",
            "UI/UX Design",
            "Typography",
            "Web Design",
            "Teamwork",
            "Creativity",
        ],
      },
      {
        title: "Entelect Hack<IT> Community Hackathon 2026",
        description:
            "In this five-hour solo coding challenge, I used Python to manage four simulated gardens on the fictional planet Photospheria, deciding what to plant, where, and when to keep different species alive. After analysing the simulation logs, I discovered that oak trees were outcompeting other plants. By planting roses earlier and delaying the oaks, I nearly tripled my Level 2 score. I finished 76th overall with a combined score of 956,796,064, taking away valuable lessons in root cause analysis, debugging, and experimentation.",
        images: [entelect],
        tags: [
            "Python",
            "Root Cause Analysis",
            "Simulation",
            "Debugging",
            "Problem Solving",
            "Strategy",
        ],
      },
      {
        title: "GirlCode Hackathon 2026",
        description:
            "During the GirlCode Johannesburg Hackathon, my team and I built and presented FibreFit, a platform helping South Africans explore fibre options, compare packages, report connectivity issues, and make smarter decisions about switching providers. It was an exciting weekend of coding, problem-solving, and collaboration. Beyond the technical experience, I loved connecting with other women in tech, exchanging ideas, and seeing what we could build together under pressure.",
        images: [girlcode],
        tags: [
            "React",
            "FastAPI",
            "Python",
            "AI",
            "Teamwork",
            "Problem Solving",
        ],
      },
      {
        title: "HMW DNA Extraction Jamboree 2026",
        description:
            "I participated in the High Molecular Weight (HMW) DNA Extraction Jamboree at the University of Pretoria Genomics Laboratory, where I gained hands-on experience with plant nuclei isolation and DNA extraction using QIAGEN and Thermo Fisher Scientific kits. It was my first time working with magnetic bead-based DNA extraction. Although my sample didn't produce the results I'd hoped for, the experience taught me the value of troubleshooting, patience, and understanding why experiments don't always go as planned.",
        images: [jamboree],
        tags: [
            "Molecular Biology",
            "DNA Extraction",
            "Plant Nuclei Isolation",
            "Magnetic Beads",
            "Lab Techniques",
            "Troubleshooting",
        ],
      },
      {
        title: "Monkey & River × Momentum Hackathon 2026",
        description:
            "Participating in the Monkey & River × Momentum Hackathon was an opportunity to collaborate with talented developers, explore AI in the insurance industry, and turn an idea into a working prototype under pressure. Beyond our third-place finish, I gained valuable experience in teamwork, problem-solving, and building with real industry challenges in mind. It reminded me how much I enjoy learning from others and creating something meaningful together.",
        images: [monkeyParticipation],
        tags: [
            "AI",
            "FinTech",
            "Teamwork",
            "Problem Solving",
            "Collaboration",
            "Innovation",
        ],
      },
      {
        title: "NGS Open Day 2026 | University of Pretoria",
        description:
            "I attended the Next Generation Sequencing (NGS) Open Day at the University of Pretoria, where researchers and industry experts shared advances in genomics, sequencing technologies, and bioinformatics. With my background in Life Sciences and growing experience in software engineering, I was especially interested in how computational tools help us understand biological data. The experience strengthened my interest in combining biology and technology, particularly in genomics and computational research.",
        images: [upOpenDay],
        tags: [
            "Genomics",
            "Bioinformatics",
            "NGS",
            "Computational Biology",
            "Research",
            "Life Sciences",
        ],
      },
      {
        title: "Google Johannesburg Data Challenge | Zindi",
        description:
            "I participated in the Google Johannesburg Data Challenge, hosted on Zindi, which focused on identifying service delivery inequalities across Gauteng. The challenge explored how machine learning and household survey data could help predict gaps in essential services such as water, sanitation, electricity, and refuse removal. It was an opportunity to explore how data science can go beyond predictions to support real-world decision-making, identify underserved communities, and help direct resources where they are needed most.",
        images: [zindi],
        tags: [
            "Data Science",
            "Machine Learning",
            "Predictive Modelling",
            "Social Impact",
            "Service Delivery",
            "Data Analysis",
        ],
      },
    ],
  },
];

export default function Milestones() {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);
  const [photoIndex, setPhotoIndex] = useState(0);

  const category = categories[categoryIndex]!;
  const item = category.items[itemIndex]!;

  const changeCategory = (index: number) => {
    setCategoryIndex(index);
    setItemIndex(0);
    setPhotoIndex(0);
  };

  const changeItem = (direction: number) => {
    setItemIndex((current) =>
      (current + direction + category.items.length) %
      category.items.length
    );
    setPhotoIndex(0);
  };

  return (
    <section
      id="milestones"
      className="relative min-h-screen overflow-hidden border-t border-border bg-background px-5 pb-28 pt-28 sm:px-8"
    >
      {/* Giant background heading */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 overflow-hidden"
      >
        <p className="translate-y-[-38%] whitespace-nowrap text-[19vw] font-semibold leading-none text-muted">
        MILESTONES
        </p>
      </div>

      <div className="relative mx-auto grid max-w-[1500px] gap-12 pt-[10vw] lg:grid-cols-[minmax(280px,0.65fr)_minmax(0,1.35fr)] lg:gap-16">

        {/* Left: sticky navigation */}
        <aside className="h-fit lg:sticky lg:top-28">
          <p className="text-sm tracking-[0.15em] text-[#704582]">
            moments along the way / 2025–2026
          </p>

          <h2 className="mt-4 font-serif text-5xl leading-none sm:text-6xl">
            the little things
            <br />
            <em className="text-[#704582]">add up.</em>
          </h2>

          <p className="mt-7 max-w-sm leading-relaxed text-muted-foreground">
            A collection of lessons, experiences, and proud moments
            that shaped my journey.
          </p>

          <p className="mb-4 mt-10 text-sm">explore the moments</p>

          <div
            role="tablist"
            aria-label="Milestone categories"
            className="flex flex-wrap gap-3 lg:flex-col lg:items-start"
          >
            {categories.map((group, index) => {
              const active = categoryIndex === index;

              return (
                <button
                  key={group.label}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="milestone-gallery"
                  onClick={() => changeCategory(index)}
                  className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "border-[#704582] bg-[#704582] text-white"
                      : "border-[#DCCFDF] text-[#704582] hover:border-[#704582] hover:bg-[#704582]/5"
                  }`}
                >
                  {group.label}
                </button>
              );
            })}
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            {String(category.items.length).padStart(2, "0")} moments to explore
          </p>
        </aside>

        {/* Right: gallery */}
        <div
          id="milestone-gallery"
          role="tabpanel"
          aria-live="polite"
          className="min-w-0"
        >
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-[#704582]">
              {category.label}
            </p>

            <h3 className="mt-3 font-serif text-4xl sm:text-5xl">
              {category.heading}
            </h3>

            <p className="mt-3 max-w-lg leading-relaxed text-muted-foreground">
              {category.description}
            </p>
          </div>

          {/* Main image */}
          <div className="relative flex h-[22rem] items-center justify-center overflow-hidden border border-border bg-[#F5F2F0] sm:h-[30rem] lg:h-[34rem]">
            <img
              key={`${categoryIndex}-${itemIndex}-${photoIndex}`}
              src={item.images[photoIndex]}
              alt={`${item.title}, image ${photoIndex + 1}`}
              className="h-full w-full animate-[fadeIn_0.4s_ease-out] object-contain"
            />
          </div>

          {/* Photo thumbnails when an event has multiple images */}
          {item.images.length > 1 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {item.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  aria-label={`View photo ${index + 1} of ${item.title}`}
                  aria-pressed={photoIndex === index}
                  onClick={() => setPhotoIndex(index)}
                  className={`h-16 w-20 overflow-hidden rounded-md border-2 transition-all ${
                    photoIndex === index
                      ? "border-[#704582]"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Item details and navigation */}
          <div className="mt-6 flex flex-wrap items-start justify-between gap-5">
            <div className="min-w-0 flex-1">
              <p className="text-xs uppercase tracking-[0.14em] text-[#704582]">
                {String(itemIndex + 1).padStart(2, "0")} /{" "}
                {String(category.items.length).padStart(2, "0")}
              </p>

              <h4 className="mt-2 font-serif text-3xl sm:text-4xl">
                {item.title}
              </h4>

              {item.award && (
                <p className="mt-2 text-sm font-medium text-[#704582]">
                  {item.award}
                </p>
              )}

              <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">
                {item.description}
              </p>

              {item.tags && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#DCCFDF] px-3 py-1.5 text-xs font-medium text-[#704582]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
              )}

            {category.label === "showing up" &&
            item.title.includes("GirlCode") && (
                <a
                href="https://github.com/beko-1enkosi/fibrefit"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#704582] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5C3268]"
                >
                view what we built ↗
                </a>
            )}


              {item.repo && (
                <a
                  href={item.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#704582] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#5C3268]"
                >
                  view what we built
                  <ArrowRight aria-hidden="true" className="h-4 w-4 -rotate-45" />
                </a>
              )}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => changeItem(-1)}
                aria-label="Previous milestone"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#DCCFDF] text-[#704582] transition-colors hover:bg-[#704582] hover:text-white"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>

              <button
                type="button"
                onClick={() => changeItem(1)}
                aria-label="Next milestone"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-[#704582] text-white transition-colors hover:bg-[#5C3268]"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="mt-8 flex flex-wrap gap-2">
            {category.items.map((entry, index) => (
              <button
                key={entry.title}
                type="button"
                aria-label={`View ${entry.title}`}
                aria-current={itemIndex === index ? "true" : undefined}
                onClick={() => {
                  setItemIndex(index);
                  setPhotoIndex(0);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  itemIndex === index
                    ? "w-9 bg-[#704582]"
                    : "w-2 bg-[#DCCFDF] hover:bg-[#704582]/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
