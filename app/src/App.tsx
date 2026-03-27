import { Navigation } from '@/components/Navigation';
import { PageOverlay } from '@/components/PageOverlay';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Services } from '@/sections/Services';
import { LegalKitsSection } from '@/components/LegalKitsSection';
import { BrandValuesSection } from '@/components/BrandValuesSection';
import { ContactForm } from '@/components/ContactForm';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { usePageLoad } from '@/hooks/usePageLoad';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const { showOverlay } = usePageLoad(120);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Load Overlay */}
      <PageOverlay isVisible={showOverlay} />
      <Analytics />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
        <LegalKitsSection />
        <BrandValuesSection />
        <ContactForm />
        <CTA />
      </main>
      
      {/* Footer */}
      <Footer />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
