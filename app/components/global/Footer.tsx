"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Exclude global footer on /contact route (contact page uses its dedicated ContactFooter)
  if (pathname === "/contact") {
    return null;
  }

  return (
    <footer className="w-full mt-32 overflow-hidden relative select-none border-none dark:bg-zinc-900 bg-white">
      {/* Background/Overlay Wordmark Container */}
      <div className="w-full relative px-4 sm:px-8 pt-4 pb-0 overflow-hidden flex flex-col justify-end min-h-[200px] sm:min-h-[260px] md:min-h-[320px] lg:min-h-[380px] max-h-[400px]">
        {/* Right Upper Region: Editorial Quote */}
        <div className="absolute top-4 right-6 sm:right-10 z-10 flex flex-col items-end text-right max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg">
          <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl dark:text-zinc-300 text-zinc-700 leading-relaxed italic">
            &ldquo;People always tell you, &lsquo;Be humble. Be humble.&rsquo;
            <br />
            When was the last time someone told you to be amazing?
            <br />
            <span className="font-bold dark:text-white text-zinc-900 not-italic">
              Be great!
            </span>
            &rdquo;
          </p>
        </div>

        {/* Massive Edge-to-Edge "Puhan" Wordmark */}
        <div className="w-full flex items-baseline justify-start whitespace-nowrap overflow-hidden -mb-4 sm:-mb-8 md:-mb-12">
          <h1 className="font-incognito font-black tracking-tighter text-[23vw] sm:text-[22vw] md:text-[21vw] lg:text-[20vw] leading-[0.75] dark:text-white text-zinc-900 w-full block text-left">
            Puhan
          </h1>
        </div>

        {/* Bottom Right: Copyright Notice */}
        <div className="absolute bottom-2 right-6 sm:right-10 z-20">
          <span className="font-mono text-xs sm:text-sm text-zinc-500 font-medium">
            &copy; {new Date().getFullYear()} Siddharth Puhan
          </span>
        </div>
      </div>
    </footer>
  );
}
