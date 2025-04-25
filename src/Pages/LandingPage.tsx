import { CodeExamplesSection } from '@/components/Home/CodeExample';
import { CTASection } from '@/components/Home/CTASection';
import { DemoSection } from '@/components/Home/DemoSection';
import { FeaturesSection } from '@/components/Home/Features';
import { Footer } from '@/components/Home/Footer';
import { Header } from '@/components/Home/Header';
import HeroSection from '@/components/Home/HeroSection';
import { HowToUseSection } from '@/components/Home/HowToUseSection';

export const LandingPage = () => {
  return (
    <main className="grid">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <CodeExamplesSection />
      <HowToUseSection />
      <CTASection />
      <Footer />
    </main>
  );
};
