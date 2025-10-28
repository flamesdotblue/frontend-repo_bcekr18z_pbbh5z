import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-white/90 tracking-wide lowercase font-sans text-lg">zifma</div>
        <button
          aria-label="Open menu"
          className="text-white/80 hover:text-white transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}
