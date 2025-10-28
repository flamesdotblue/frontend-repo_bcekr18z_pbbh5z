export default function CredibilityBar() {
  const items = [
    'BUILT FOR STARTUPS',
    '48-HOUR LAUNCH GUARANTEE',
    'AI-POWERED DESIGN',
    'SECURE HOSTING INCLUDED',
  ];

  // Create a long, duplicated sequence for seamless looping
  const sequence = Array.from({ length: 6 }, () => items).flat();

  return (
    <div className="relative w-full overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      <div className="bg-[#121216]">
        <div className="flex whitespace-nowrap py-4">
          <div className="animate-marquee inline-flex items-center gap-6 text-white font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase">
            {sequence.map((text, idx) => (
              <div key={idx} className="inline-flex items-center gap-6">
                <span>{text}</span>
                <span className="text-blue-400">✦</span>
              </div>
            ))}
          </div>
          {/* duplicate stream to ensure seamless loop */}
          <div className="animate-marquee2 inline-flex items-center gap-6 text-white font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase" aria-hidden>
            {sequence.map((text, idx) => (
              <div key={idx} className="inline-flex items-center gap-6">
                <span>{text}</span>
                <span className="text-purple-400">✦</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; padding-right: 24px; }
        .animate-marquee2 { animation: marquee 30s linear infinite; animation-delay: 15s; padding-right: 24px; }
      `}
      </style>
    </div>
  );
}
