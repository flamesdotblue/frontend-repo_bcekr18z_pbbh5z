export default function StatsAndBanner() {
  const stats = [
    { label: 'Websites Launched', value: '1,200+' },
    { label: 'Businesses Served', value: '800+' },
    { label: 'Avg. Delivery', value: '48 hrs' },
  ];

  return (
    <section className="w-full">
      {/* Separator line */}
      <div className="h-px w-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-blue-500 opacity-70" />

      {/* Metrics */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">{s.value}</div>
              <div className="mt-2 text-white/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom banner */}
      <div className="w-full bg-gradient-to-r from-purple-700 via-fuchsia-600 to-blue-600 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center text-white font-semibold tracking-[0.2em] uppercase">
            BUILD YOUR ONLINE PRESENCE ✦ YOUR BUSINESS, ONLINE, FAST
          </div>
        </div>
      </div>
    </section>
  );
}
