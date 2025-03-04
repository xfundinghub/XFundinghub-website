import Header from "./landing/Header";
import HeroSection from "./landing/HeroSection";
import FeaturesGrid from "./landing/FeaturesGrid";
import BenefitsSection from "./landing/BenefitsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <section id="features" className="py-20">
          <FeaturesGrid />
        </section>
        <section id="benefits">
          <BenefitsSection />
        </section>
        {/* Trust indicators section temporarily hidden
        <section id="trust">
          <TrustIndicators />
        </section>
        */}
      </main>
      {/* Footer temporarily hidden
      <Footer />
      */}
    </div>
  );
}
