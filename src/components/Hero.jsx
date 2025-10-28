import Spline from '@splinetool/react-spline';

function SocialSidebar() {
  return (
    <div className="absolute left-2 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 select-none">
      <span className="text-xs tracking-[0.3em] text-white/60 rotate-180 [writing-mode:vertical-rl]">TWITTER</span>
      <span className="text-xs tracking-[0.3em] text-white/60 rotate-180 [writing-mode:vertical-rl]">LINKEDIN</span>
      <span className="text-xs tracking-[0.3em] text-white/60 rotate-180 [writing-mode:vertical-rl]">DRIBBBLE</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background grainy gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_70%_30%,rgba(88,28,135,0.25),transparent),radial-gradient(1000px_500px_at_90%_70%,rgba(37,99,235,0.25),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-6 pb-16">
        {/* Left column content */}
        <div className="relative z-10">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl leading-tight font-serif">
            Launch Your Business Website in 48 Hours — Built by AI, Perfected by Humans
          </h1>
          <p className="mt-6 text-white/80 text-base sm:text-lg font-sans max-w-xl">
            Done-for-you website design for small businesses. Get your site live, hosted, and optimized — for one flat price.
          </p>

          <div className="mt-8">
            <a
              href="#get-started"
              className="inline-block rounded-xl p-[2px] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-500"
            >
              <span className="block rounded-[10px] bg-[#0b0b0f]/80 px-6 py-3 text-white font-medium font-sans tracking-wide">
                ✅ Get My Website Started Now
              </span>
            </a>
          </div>
        </div>

        {/* Right column - 3D Scene */}
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px]">
          <Spline
            scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Subtle gradient gloss at bottom */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent" />
        </div>
      </div>

      <SocialSidebar />
    </section>
  );
}
