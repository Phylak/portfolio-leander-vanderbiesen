import Navigation from '@/components/sections/Navigation';
import About from '@/components/sections/About';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <About />
    </div>
  );
}
