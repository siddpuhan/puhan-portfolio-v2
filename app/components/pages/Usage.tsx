import Link from "next/link";
import RefLink from "../shared/RefLink";
import Favicon from "../../utils/favicon";

export default function Usage() {
  return (
    <section className="max-w-2xl">
      {/* Technologies */}
      <div className="mb-8">
        <h2 className="text-4xl mb-4 font-bold tracking-tight">Technologies</h2>
        <p className="dark:text-zinc-400 text-zinc-600 max-w-xl">
          Technologies, tools and platforms I work with.
        </p>
      </div>

      {/* Core / Programming */}
      <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-5 before:text-2xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-2xl mt-6 mb-2">
        <Link href="#core--programming">Core / Programming</Link>
      </h3>
      <ul className="list-none mt-2 ml-2 dark:text-zinc-400 text-zinc-600">
        <li className="mb-4">
          <RefLink
            href="https://cplusplus.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://cplusplus.com/" alt="C++" />
            C++ - Programming Language
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://www.python.org/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://www.python.org/" alt="Python" />
            Python - Programming Language
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://www.javascript.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://www.javascript.com/" alt="JavaScript" />
            JavaScript - Programming Language
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://www.typescriptlang.org/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon
              domain="https://www.typescriptlang.org/"
              alt="TypeScript"
            />
            TypeScript - Programming Language
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://www.w3schools.com/sql/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://www.w3schools.com/sql/" alt="SQL" />
            SQL - Query Language
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://html.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://html.com/" alt="HTML" />
            HTML - Markup Language
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://www.w3.org/Style/CSS/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://www.w3.org/Style/CSS/" alt="CSS" />
            CSS - Styling Language
          </RefLink>
        </li>
      </ul>

      {/* Frontend */}
      <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-5 before:text-2xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-2xl mt-6 mb-2">
        <Link href="#frontend">Frontend</Link>
      </h3>
      <ul className="list-none mt-2 ml-2 dark:text-zinc-400 text-zinc-600">
        <li className="mb-4">
          <RefLink
            href="https://react.dev/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://react.dev/" alt="React" />
            React - UI Library
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://nextjs.org/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://nextjs.org/" alt="Next.js" />
            Next.js - React Framework
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://tailwindcss.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://tailwindcss.com/" alt="Tailwind CSS" />
            Tailwind CSS - Styling Library
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://www.framer.com/motion/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://www.framer.com/motion/" alt="Framer Motion" />
            Framer Motion - Animation Library
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://github.com/pmndrs/zustand"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://github.com/pmndrs/zustand" alt="Zustand" />
            Zustand - State Management
          </RefLink>
        </li>
      </ul>

      {/* Backend */}
      <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-5 before:text-2xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-2xl mt-6 mb-2">
        <Link href="#backend">Backend</Link>
      </h3>
      <ul className="list-none mt-2 ml-2 dark:text-zinc-400 text-zinc-600">
        <li className="mb-4">
          <RefLink
            href="https://nodejs.org/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://nodejs.org/" alt="Node.js" />
            Node.js - Backend Runtime
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://expressjs.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://expressjs.com/" alt="Express.js" />
            Express.js - Backend Framework
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://restfulapi.net/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://restfulapi.net/" alt="REST APIs" />
            REST APIs - API Architecture
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://socket.io/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://socket.io/" alt="Socket.IO" />
            Socket.IO - Real-time Communication
          </RefLink>
        </li>
      </ul>

      {/* Database */}
      <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-5 before:text-2xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-2xl mt-6 mb-2">
        <Link href="#database">Database</Link>
      </h3>
      <ul className="list-none mt-2 ml-2 dark:text-zinc-400 text-zinc-600">
        <li className="mb-4">
          <RefLink
            href="https://www.postgresql.org/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://www.postgresql.org/" alt="PostgreSQL" />
            PostgreSQL - Database
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://supabase.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://supabase.com/" alt="Supabase" />
            Supabase - Backend Platform / Database
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://www.mysql.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://www.mysql.com/" alt="MySQL" />
            MySQL - Database
          </RefLink>
        </li>
      </ul>

      {/* AI / Machine Learning */}
      <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-5 before:text-2xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-2xl mt-6 mb-2">
        <Link href="#ai--machine-learning">AI / Machine Learning</Link>
      </h3>
      <ul className="list-none mt-2 ml-2 dark:text-zinc-400 text-zinc-600">
        <li className="mb-4">
          <RefLink
            href="https://groq.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://groq.com/" alt="Groq" />
            Groq - AI Inference
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://gemini.google.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://gemini.google.com/" alt="Gemini" />
            Gemini - AI / LLM
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://github.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://github.com/" alt="LLM Integration" />
            LLM Integration - AI Application Development
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://www.promptingguide.ai/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon
              domain="https://www.promptingguide.ai/"
              alt="Prompt Engineering"
            />
            Prompt Engineering - AI Development
          </RefLink>
        </li>
      </ul>

      {/* Containers / DevOps */}
      <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-5 before:text-2xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-2xl mt-6 mb-2">
        <Link href="#containers--devops">Containers / DevOps</Link>
      </h3>
      <ul className="list-none mt-2 ml-2 dark:text-zinc-400 text-zinc-600">
        <li className="mb-4">
          <RefLink
            href="https://www.docker.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://www.docker.com/" alt="Docker" />
            Docker - Containerization
          </RefLink>
        </li>
      </ul>

      {/* Tools */}
      <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-5 before:text-2xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-2xl mt-6 mb-2">
        <Link href="#tools">Tools</Link>
      </h3>
      <ul className="list-none mt-2 ml-2 dark:text-zinc-400 text-zinc-600">
        <li className="mb-4">
          <RefLink
            href="https://code.visualstudio.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon
              domain="https://code.visualstudio.com/"
              alt="Visual Studio Code"
            />
            Visual Studio Code - Text Editor
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://www.postman.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://www.postman.com/" alt="Postman" />
            Postman - API Testing
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://www.figma.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://www.figma.com/" alt="Figma" />
            Figma - Design Tool
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://gitforwindows.org/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://gitforwindows.org/" alt="Git Bash" />
            Git Bash - Git Terminal
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://www.notion.so/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://www.notion.so/" alt="Notion" />
            Notion - Note Taking and Organization
          </RefLink>
        </li>
      </ul>

      {/* Platform */}
      <h3 className="font-incognito before:content-['#'] before:hidden hover:before:inline before:absolute before:-left-5 before:text-2xl before:top-1/2 before:-translate-y-1/2 before:opacity-80 dark:before:text-zinc-500 before:text-zinc-400 relative inline-block font-semibold tracking-tight text-2xl mt-6 mb-2">
        <Link href="#platform">Platform</Link>
      </h3>
      <ul className="list-none mt-2 ml-2 dark:text-zinc-400 text-zinc-600">
        <li className="mb-4">
          <RefLink
            href="https://github.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://github.com/" alt="GitHub" />
            GitHub - Version Control / Hosting
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://vercel.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://vercel.com/" alt="Vercel" />
            Vercel - Hosting
          </RefLink>
        </li>
        <li className="mb-4">
          <RefLink
            href="https://render.com/"
            className="font-medium inline-flex items-center justify-start gap-x-1 dark:text-blue-400 text-blue-500 underline"
          >
            <Favicon domain="https://render.com/" alt="Render" />
            Render - Deployment / Hosting
          </RefLink>
        </li>
      </ul>
    </section>
  );
}
