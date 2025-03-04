import { Shield, Award, BadgeCheck } from "lucide-react";

export default function TrustIndicators() {
  // Placeholder bank logos - replace with actual partner logos when available
  const partnerBanks = [
    {
      name: "Bank Space 1",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=bank1",
    },
    {
      name: "Bank Space 2",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=bank2",
    },
    {
      name: "Bank Space 3",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=bank3",
    },
    {
      name: "Bank Space 4",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=bank4",
    },
    {
      name: "Bank Space 5",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=bank5",
    },
    {
      name: "Bank Space 6",
      logo: "https://api.dicebear.com/7.x/shapes/svg?seed=bank6",
    },
  ];

  const certifications = [
    {
      title: "Security Certified",
      description: "ISO 27001 Certified",
      icon: <Shield className="w-12 h-12 mb-4 text-[#1a365d]" />,
      bgImage:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3",
    },
    {
      title: "Data Privacy",
      description: "GDPR Compliant",
      icon: <BadgeCheck className="w-12 h-12 mb-4 text-[#1a365d]" />,
      bgImage:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3",
    },
    {
      title: "Industry Recognition",
      description: "Award-winning Platform",
      icon: <Award className="w-12 h-12 mb-4 text-[#1a365d]" />,
      bgImage:
        "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Trust Indicators */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Join the growing network of financial institutions leveraging our
            platform
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 opacity-10 transition-opacity group-hover:opacity-20">
                  <img
                    src={cert.bgImage}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative p-8 text-center">
                  {cert.icon}
                  <h3 className="text-xl font-semibold text-[#1a365d] mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Banks Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-[#1a365d] mb-8">
            Our Banking Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
            {partnerBanks.map((bank, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={bank.logo}
                  alt={bank.name}
                  className="w-full h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-8">
            * Partner bank logos will be updated as they join our platform
          </p>
        </div>
      </div>
    </section>
  );
}
