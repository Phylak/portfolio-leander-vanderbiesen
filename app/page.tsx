import Navigation from '@/components/sections/Navigation';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Github from '@/components/sections/Github';
import AISection from '@/components/sections/AI';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { Suspense } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { getContributionsByYear } from './actions/github';

export default async function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Suspense fallback={<div>Loading GitHub Contributions...</div>}>
          <GithubWrapper />
        </Suspense>
        <AISection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

async function GithubWrapper() {
  const data = await getContributionsByYear(new Date().getFullYear());

  if (!data) {
    return (
      <div className="container-narrow">
        <SectionHeading count="04" title="Github Activity" />
        <p>Error loading GitHub contributions.</p>
      </div>
    );
  }

  return (
    <Github
      userContributionsCollection={data.data.user.contributionsCollection}
    />
  );
}
