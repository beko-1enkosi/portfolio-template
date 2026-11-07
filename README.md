# Bekolenkosi. — a curious developer's portfolio

A personal portfolio for **Thobeka Nkosi**, bringing together software engineering, life sciences, creative experimentation, and the things that keep me curious.

The site follows a hand-drawn thread through my story, selected projects, milestones, and a little about the person behind the code. It is designed as a horizontal, animated experience on desktop and a vertically told story on mobile.

## Explore

- **About:** A playful visual story of my path from Biochemistry and Physiology to software engineering.
- **Projects:** Selected work across data, Java, microservices, and health technology.
- **Milestones:** Certificates, hackathon achievements, and events where I showed up to learn.
- **Let's talk:** Contact links, a downloadable CV, and one small fun fact.

## Selected projects

| Project | What it explores | Repository |
| --- | --- | --- |
| **AirAtlas** | Environmental observations, data transformation and an interactive air-quality platform | [AirAtlas](https://github.com/beko-1enkosi/airatlas) |
| **Robot Worlds** | Java, OOP, networking, threads and multiplayer simulation | [Robot Worlds](https://github.com/beko-1enkosi/robot-world) |
| **HealthSafe** | Java microservices, REST, ActiveMQ, Docker Compose and Kubernetes | [HealthSafe](https://github.com/beko-1enkosi/sin-000-healthsafe) |
| **BeyondPink & Brea** | Breast-health education, support, accessibility and inclusive design | [BeyondPink & Brea](https://github.com/beko-1enkosi/beyond-pink) |

**Note:** HealthSafe's portfolio cover is a conceptual illustration of a proposed operations dashboard, not a screenshot of a deployed frontend. The completed system showcased in its repository is the backend and local infrastructure.

## Tech stack

- **Framework:** TanStack Start, TanStack Router, React, TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Custom SVG paths, CSS transitions and `requestAnimationFrame`
- **Build tooling:** Vite, Nitro
- **Icons:** Lucide and React Icons

## Run locally

**Requirements:** A recent version of Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:3000`).

For a production build:

```bash
npm run build
```

## Project structure

```text
public/
  cv/                  # Downloadable CV
  bekolenkosi-favicon.svg
src/
  assets/bekolenkosi/  # Custom portfolio imagery
  components/          # Reusable components and milestones
  routes/              # Portfolio pages and root document
  lib/                 # Metadata and utilities
```

## Accessibility and responsiveness

The portfolio provides a separately composed mobile narrative rather than just shrinking the desktop layout. Images have descriptive alternative text, interactive elements have labels, and the navigation adapts for smaller screens.

## Inspiration, attribution and licensing

This portfolio is an **adaptation of the open-source [portfolio-template by Nidhi Prajapati (SomehowLiving)](https://github.com/SomehowLiving/portfolio-template)**. The original project provided the foundation for the interactive thread narrative, cursor interactions and page structure. I adapted and extended it with my own personal story, projects, milestone galleries, visual assets, styling and contact details.

Many thanks to Nidhi for making the source available. The original repository is MIT licensed; its license and attribution should be retained where applicable. **Source-code licensing does not automatically grant rights to reuse original personal photos, writing, artwork or project screenshots.** Any such assets should be replaced with my own or used only with permission.

## Contact

- [Email](mailto:t2bnkosi@gmail.com)
- [GitHub](https://github.com/beko-1enkosi)
- [LinkedIn](https://www.linkedin.com/in/thobeka-nkosi-217640293)
- [Instagram](https://www.instagram.com/bekolenkosi_/)
- [Discord](https://discord.com/users/1419406774834036756)
- [X](https://x.com/bekolenkosi_)

---

Made with curiosity. © 2026 Thobeka Nkosi for original content and custom assets.
