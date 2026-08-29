import type { ProfileType, JobType, ProjectType, PostType, HeroeType } from "@/types";

// Simple PortableText block for fallback content
const textBlock = (text: string, key: string = "fb1") => ({
  _type: "block" as const,
  _key: key,
  style: "normal" as const,
  children: [{ _type: "span" as const, _key: `${key}-s1`, text }],
  markDefs: [],
});

export const fallbackProfile: ProfileType = {
  _id: "fallback-profile",
  fullName: "Your Name",
  headline: "Software Developer & Technical Writer",
  profileImage: {
    image: "",
    lqip: "",
    alt: "Profile photo",
  },
  shortBio:
    "A passionate developer who loves building solutions and contributing to open source communities.",
  email: "hello@example.com",
  fullBio: [
    textBlock("Your detailed bio will go here. Add your personal story, background, and what drives you as a developer."),
  ],
  location: "Earth",
  resumeURL: "",
  og: "",
  usage: [
    textBlock("Tools and technologies info will appear here.", "usage1"),
  ],
};

export const fallbackJobs: JobType[] = [
  {
    _id: "fallback-job-1",
    name: "Acme Corp",
    jobTitle: "Software Engineer",
    logo: "",
    url: "https://example.com",
    description: "Building amazing products and solving complex problems.",
    startDate: "2023-01-01",
    endDate: "",
  },
];

export const fallbackProjects: ProjectType[] = [
  {
    _id: "fallback-project-1",
    name: "My Awesome Project",
    slug: "my-awesome-project",
    tagline: "A brief description of what this project does",
    projectUrl: "https://example.com",
    repository: "https://github.com/example/project",
    logo: "",
    coverImage: {
      image: "",
      alt: "Project screenshot",
      lqip: "",
    },
    description: [
      textBlock("Project description goes here.", "proj-desc1"),
    ],
  },
];

export const fallbackPosts: PostType[] = [];

export const fallbackHeroes: HeroeType[] = [
  {
    _id: "fallback-hero-1",
    _createdAt: "2023-01-01T00:00:00Z",
    name: "Sample Hero",
    url: "https://example.com",
    met: false,
  },
];
