import { Button } from "@/components/ui/button";
import NewsletterDialog from "./NewsletterDialog";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[800px] flex items-center bg-[#0c2d5b]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.15",
        }}
      />
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-white">Revolutionary</span>{" "}
            <span className="text-[#c4a708]">Cross-Border</span>{" "}
            <span className="text-white">Lending Marketplace</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Seamlessly connects financial institutions and corporates across
            regions through a
            <span className="text-[#c4a708]">
              {" "}
              secure, streamlined ecosystem
            </span>
          </p>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between lenders in developed markets and borrowers
            in emerging economies—eliminating inefficiencies, reducing
            intermediaries, and expanding access to capital.
          </p>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover new opportunities, accelerate cross-border financing, and
            fuel global growth.
          </p>
          <div className="flex gap-4 justify-center">
            <NewsletterDialog />
            {/*<Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#1a365d] text-lg px-8"
            >
              Learn More
            </Button>*/}
          </div>
          {/* Floating elements */}
          {/*<div className="mt-16 grid grid-cols-3 gap-8 text-center">*/}
          <div className="mt-16 text-4xl font-bold text-center bg-white/10 backdrop-blur-sm rounded-lg inline-block mx-auto px-8 py-4">
            {/*<div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-4xl font-bold mb-2 text-[#c4a708]">$2B+</h3>
              <p className="text-blue-100">Loans Facilitated</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-4xl font-bold mb-2 text-[#c4a708]">50+</h3>
              <p className="text-blue-100">Countries Served</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-4xl font-bold mb-2 text-[#c4a708]">1000+</h3>
              <p className="text-blue-100">Banking Partners</p>
            </div>*/}
            Launching Soon...
          </div>
        </div>
      </div>
    </section>
  );
}
