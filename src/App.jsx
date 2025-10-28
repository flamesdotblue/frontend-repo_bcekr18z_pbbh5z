import Header from './components/Header';
import Hero from './components/Hero';
import CredibilityBar from './components/CredibilityBar';
import StatsAndBanner from './components/StatsAndBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f]">
      <Header />
      <main>
        <Hero />
        <CredibilityBar />
        <StatsAndBanner />
      </main>
    </div>
  );
}
