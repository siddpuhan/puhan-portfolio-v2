import Image from "next/image";
import { Metadata } from "next";
import { Slide } from "../animation/Slide";
import PageHeading from "../components/shared/PageHeading";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

export const metadata: Metadata = {
  title: "Projects | Siddharth Puhan",
  metadataBase: new URL("https://siddpuhan.vercel.app/projects"),
  description: "Explore projects built by Siddharth Puhan",
  openGraph: {
    title: "Projects | Siddharth Puhan",
    url: "https://siddpuhan.vercel.app/projects",
    description: "Explore projects built by Siddharth Puhan",
    images: "/images/og.png",
  },
};

type ProjectItem = {
  name: string;
  tagline: string;
  logo: string | null;
  screenshot: string;
  github: string;
  live: string;
};

const projects: ProjectItem[] = [
  {
    name: "ThinkRoom AI",
    tagline:
      "AI-powered collaborative classroom platform for real-time learning, coding, and interaction.",
    logo: null,
    screenshot: "/images/projects/thinkroom-ai.jpg",
    github: "#TODO",
    live: "#TODO",
  },
  {
    name: "PhishGuard",
    tagline:
      "Security-focused application designed to detect and help protect users from phishing threats.",
    logo: null,
    screenshot: "/images/projects/phishguard.jpg",
    github: "#TODO",
    live: "#TODO",
  },
  {
    name: "Kropify",
    tagline:
      "An AI-powered solution built for a hackathon and selected in the Smart India Hackathon University Internal Round.",
    logo: null,
    screenshot: "/images/projects/kropify.jpg",
    github: "#TODO",
    live: "#TODO",
  },
  {
    name: "PulseTrace",
    tagline:
      "A notification processing backend with an asynchronous queue-based delivery pipeline, immutable event timeline, replay system, and a React monitoring dashboard.",
    logo: null,
    screenshot: "/images/projects/pulsetrace.jpg",
    github: "#TODO",
    live: "#TODO",
  },
];

export default function Projects() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Projects"
        description="I've built a range of projects across full-stack development, AI, security, and backend systems. These are the projects I'm most proud of."
      />

      <Slide delay={0.1}>
        <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
          {projects.map((project) => (
            <div
              key={project.name}
              className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg"
            >
              {project.logo ? (
                <Image
                  src={project.logo}
                  width={60}
                  height={60}
                  alt={project.name}
                  className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2"
                />
              ) : (
                <div className="dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-2 rounded-lg text-3xl">
                  🪴
                </div>
              )}
              <div>
                <h2 className="text-lg tracking-wide mb-1">{project.name}</h2>
                <div className="text-sm dark:text-zinc-400 text-zinc-600">
                  {project.tagline}
                </div>
                <div className="flex items-center gap-x-3 mt-2">
                  {project.github !== "#TODO" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-1 text-sm dark:text-zinc-400 text-zinc-600 hover:dark:text-zinc-300 hover:text-zinc-500 transition-colors"
                    >
                      <BiLogoGithub className="text-base" aria-hidden="true" />
                      GitHub
                    </a>
                  ) : (
                    <span className="flex items-center gap-x-1 text-sm dark:text-zinc-500 text-zinc-400 cursor-not-allowed">
                      <BiLogoGithub className="text-base" aria-hidden="true" />
                      GitHub (TODO)
                    </span>
                  )}
                  {project.live !== "#TODO" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-1 text-sm dark:text-zinc-400 text-zinc-600 hover:dark:text-zinc-300 hover:text-zinc-500 transition-colors"
                    >
                      <BiLinkExternal
                        className="text-base"
                        aria-hidden="true"
                      />
                      Live
                    </a>
                  ) : (
                    <span className="flex items-center gap-x-1 text-sm dark:text-zinc-500 text-zinc-400 cursor-not-allowed">
                      <BiLinkExternal
                        className="text-base"
                        aria-hidden="true"
                      />
                      Live (TODO)
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </section>
      </Slide>
    </main>
  );
}
