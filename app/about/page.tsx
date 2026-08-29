import { Metadata } from "next";
import {
  BiEnvelope,
  BiLinkExternal,
  BiSolidDownload,
} from "react-icons/bi";
import { Slide } from "../animation/Slide";
import RefLink from "../components/shared/RefLink";
import Usage from "../components/pages/Usage";

export const metadata: Metadata = {
  title: "About | Siddharth Puhan",
  metadataBase: new URL("https://siddpuhan.vercel.app/about"),
  description:
    "Learn more about Siddharth's skills, experience and technical background",
  openGraph: {
    title: "About | Siddharth Puhan",
    url: "https://siddpuhan.vercel.app/about",
    description:
      "Learn more about Siddharth's skills, experience and technical background",
    images: "/images/og.png",
  },
};

export default function About() {
  return (
    <main className="relative lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6">
      <div>
        {/* Section 1: Introduction + Photo + Resume + Email */}
        <section className="relative grid lg:grid-cols-custom grid-cols-1 gap-x-6 justify-items-center">
          <div className="order-2 lg:order-none">
            <Slide>
              <h1 className="font-incognito font-semibold tracking-tight sm:text-5xl text-3xl lg:leading-tight basis-1/2 mb-8">
                I&apos;m Siddharth Puhan. I build practical web applications
                and AI-powered products.
              </h1>

              <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
                <p className="mt-2 mb-6">
                  I am a Computer Science Engineering student and full-stack
                  developer interested in building practical web applications
                  and AI-powered products.
                </p>
                <p className="mt-2 mb-6">
                  I work across frontend, backend, databases, APIs, and AI
                  integrations, and I enjoy turning ideas into useful products.
                </p>
                <p className="mt-2 mb-6">
                  <strong className="font-bold dark:text-zinc-300 text-zinc-700">
                    Education:
                  </strong>{" "}
                  B.Tech Computer Science Engineering, Amity University Madhya
                  Pradesh
                </p>
                <p className="mt-2 mb-6">
                  <strong className="font-bold dark:text-zinc-300 text-zinc-700">
                    Minor:
                  </strong>{" "}
                  Cyber Security
                </p>
                <p className="mt-2 mb-6">
                  <strong className="font-bold dark:text-zinc-300 text-zinc-700">
                    CGPA:
                  </strong>{" "}
                  8.49 / 10
                </p>
                <p className="mt-2 mb-6">
                  Expected graduation: June 2028
                </p>
              </div>
            </Slide>
          </div>

          <aside className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12">
            <Slide delay={0.1}>
              <div className="sticky top-10">
                {/*
                  Profile image placeholder.
                  When the image is available, place it at: public/images/profile/siddharth.jpg
                  and replace this div with:
                    <Image
                      src="/images/profile/siddharth.jpg"
                      width={400}
                      height={400}
                      quality={100}
                      alt="Siddharth Puhan"
                      className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top"
                      priority
                    />
                */}
                <div className="h-96 w-[400px] bg-zinc-500 mb-4 rounded-2xl flex items-center justify-center text-zinc-300 text-sm">
                  Profile Photo
                </div>

                <div className="flex flex-col text-center gap-y-4">
                  <div className="flex items-center gap-x-3">
                    {/* TODO: Update resume URL when a resume link/file is available */}
                    <RefLink
                      href="#"
                      className="flex items-center justify-center text-center gap-x-2 basis-[90%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-2 text-lg font-incognito font-semibold"
                    >
                      View Résumé <BiLinkExternal className="text-base" />
                    </RefLink>
                    <a
                      href="#"
                      className="flex items-center justify-center text-center dark:text-primary-color text-secondary-color hover:underline basis-[10%] dark:bg-primary-bg bg-zinc-100 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 rounded-md py-3 text-lg"
                      title="Download Resume"
                    >
                      <BiSolidDownload
                        className="text-lg"
                        aria-label="Download Resume"
                      />
                    </a>
                  </div>

                  {/* TODO: Replace with Siddharth's actual portfolio email */}
                  <a
                    href="mailto:TODO"
                    className="flex items-center gap-x-2 hover:text-primary-color"
                  >
                    <BiEnvelope className="text-lg" />
                    TODO: Add email
                  </a>
                </div>
              </div>
            </Slide>
          </aside>
        </section>

        {/* Section 2: Achievements */}
        <Slide delay={0.14}>
          <section className="max-w-2xl mt-32">
            <div className="mb-8">
              <h2 className="text-4xl mb-4 font-bold tracking-tight">
                Achievements
              </h2>
            </div>

            <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
              <h3 className="font-incognito font-semibold tracking-tight text-2xl mt-6 mb-2">
                AceHack 4.0
              </h3>
              <p className="mt-2 mb-6">
                Track Winner — Best Use of Auth0
              </p>

              <h3 className="font-incognito font-semibold tracking-tight text-2xl mt-6 mb-2">
                Smart India Hackathon
              </h3>
              <p className="mt-2 mb-6">University Internal Round</p>
            </div>

            {/* Achievement image placeholders — add images at public/images/achievements/ */}
            <div className="mt-8 space-y-4">
              {/*
                When images are available, place them at:
                  public/images/achievements/acehack-4.jpg
                  public/images/achievements/sih.jpg
                and replace each placeholder div below with:
                  <Image src="/images/achievements/acehack-4.jpg" width={800} height={450}
                         alt="AceHack 4.0" className="rounded-lg object-cover w-full" />
              */}
              <div className="h-64 w-full bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 text-sm">
                {/* /images/achievements/acehack-4.jpg */}
                AceHack 4.0 Image
              </div>
              <div className="h-64 w-full bg-zinc-200 dark:bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 text-sm">
                {/* /images/achievements/sih.jpg */}
                Smart India Hackathon Image
              </div>
            </div>
          </section>
        </Slide>

        {/* Section 3: Management Skills */}
        <Slide delay={0.17}>
          <section className="max-w-2xl mt-32">
            <div className="mb-8">
              <h2 className="text-4xl mb-4 font-bold tracking-tight">
                Management Skills
              </h2>
            </div>

            <div className="dark:text-zinc-400 text-zinc-600 leading-relaxed">
              <h3 className="font-incognito font-semibold tracking-tight text-2xl mt-6 mb-2">
                Club Management
              </h3>
              <p className="mt-2 mb-6">
                Organized technical events and hackathons in college.
              </p>

              <h3 className="font-incognito font-semibold tracking-tight text-2xl mt-6 mb-2">
                Technical Leadership
              </h3>
              <p className="mt-2 mb-6">
                Took the lead as a Technical Coordinator and contributed to
                multiple technical projects for the club.
              </p>

              <h3 className="font-incognito font-semibold tracking-tight text-2xl mt-6 mb-2">
                Team Mentoring
              </h3>
              <p className="mt-2 mb-6">
                Mentored junior team members and helped them improve their
                technical skills.
              </p>

              <h3 className="font-incognito font-semibold tracking-tight text-2xl mt-6 mb-2">
                Team Coordination
              </h3>
              <p className="mt-2 mb-6">
                Worked with and coordinated a ~20-member technical team.
              </p>
            </div>
          </section>
        </Slide>

        {/* Section 4: Technologies + Tools + Platform */}
        <Slide delay={0.2}>
          <Usage />
        </Slide>
      </div>
    </main>
  );
}
