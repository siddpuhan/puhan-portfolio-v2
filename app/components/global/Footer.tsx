export default function Footer() {
  return (
    <footer className="w-full mt-32 overflow-hidden relative select-none border-none dark:bg-zinc-900 bg-white">
      {/* Background/Overlay Wordmark Container */}
      <div className="w-full relative px-2 sm:px-6 pt-2 pb-0 overflow-hidden flex flex-col justify-end min-h-[160px] sm:min-h-[220px] md:min-h-[280px] lg:min-h-[340px] max-h-[360px]">
        {/* Top Accent: Small Copyright Notice at top right */}
        <div className="absolute top-4 right-6 sm:right-10 z-10 flex items-center gap-x-2">
          <span className="font-mono text-xs sm:text-sm text-zinc-500 font-medium">
            &copy; {new Date().getFullYear()} Siddharth Puhan
          </span>
        </div>

        {/* Massive Edge-to-Edge "Puhan" Wordmark */}
        <div className="w-full flex items-baseline justify-start whitespace-nowrap overflow-hidden -mb-4 sm:-mb-8 md:-mb-12">
          <h1 className="font-incognito font-black tracking-tighter text-[23vw] sm:text-[22vw] md:text-[21vw] lg:text-[20vw] leading-[0.75] dark:text-white text-zinc-900 w-full block text-left">
            Puhan
          </h1>
        </div>
      </div>
    </footer>
  );
}
