import Spline from '@splinetool/react-spline';

function SocialSidebar() {
  return (
    <div className="absolute left-2 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center gap-6 select-none z-20">
      <span className="text-xs tracking-[0.3em] text-white/60 rotate-180 [writing-mode:vertical-rl]">TWITTER</span>
      <span className="text-xs tracking-[0.3em] text-white/60 rotate-180 [writing-mode:vertical-rl]">LINKEDIN</span>
      <span className="text-xs tracking-[0.3em] text-white/60 rotate-180 [writing-mode:vertical-rl]">DRIBBBLE</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden">
      {/* Spline as full-width cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft vignette + color wash overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_30%,rgba(147,51,234,0.22),transparent),radial-gradient(900px_500px_at_80%_70%,rgba(37,99,235,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),transparent_30%,transparent_70%,rgba(0,0,0,0.8))]" />

      {/* Content overlay */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-24">
          <div className="max-w-3xl">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl leading-tight font-serif">
              Launch Your Business Website in 48 Hours — Built by AI, Perfected by Humans
            </h1>
            <p className="mt-6 text-white/85 text-base sm:text-lg font-sans max-w-2xl">
              Done-for-you website design for small businesses. Get your site live, hosted, and optimized — for one flat price.
            </p>

            <div className="mt-8">
              <a
                href="#get-started"
                className="inline-block rounded-xl p-[2px] bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-500"
              >
                <span className="block rounded-[10px] bg-black/60 backdrop-blur-sm px-6 py-3 text-white font-medium font-sans tracking-wide">
                  ✅ Get My Website Started Now
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <SocialSidebar />
    </section>
  );
}
