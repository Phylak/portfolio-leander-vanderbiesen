import Navigation from '@/components/sections/Navigation';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Github from '@/components/sections/Github';
import AISection from '@/components/sections/AI';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Github />
        <AISection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
