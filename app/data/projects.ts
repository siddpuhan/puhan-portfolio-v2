export type ProjectItem = {
  name: string;
  description: string;
  image: string;
  githubUrl: string;
  liveUrl: string;
};

export const projects: ProjectItem[] = [
  {
    name: "ThinkRoom AI",
    description:
      "AI-powered collaborative classroom platform for real-time learning, coding, and interaction.",
    image: "/images/projects/thinkroom-ai.png",
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "PhishGuard",
    description:
      "Security-focused application designed to detect and help protect users from phishing threats.",
    image: "/images/projects/phishguard.png",
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "Kropify",
    description:
      "An AI-powered solution built for a hackathon and selected in the Smart India Hackathon University Internal Round.",
    image: "/images/projects/kropify.png",
    githubUrl: "",
    liveUrl: "",
  },
  {
    name: "PulseTrace",
    description:
      "A notification processing backend with an asynchronous queue-based delivery pipeline, immutable event timeline, replay system, and a React monitoring dashboard.",
    image: "/images/projects/pulsetrace.png",
    githubUrl: "",
    liveUrl: "",
  },
];
