import {
  FileText,
  Shield,
  Activity,
  BarChart3,
  Globe2,
  Lock,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

export default function FeaturesGrid() {
  const features = [
    {
      title: "Global Lending Network",
      description:
        "Access our vast network of verified lenders and borrowers across multiple jurisdictions",
      icon: <Globe2 className="w-12 h-12" />,
      imageSrc:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Smart Document Management",
      description:
        "AI-powered system to automatically process, verify, and manage lending documentation",
      icon: <FileText className="w-12 h-12" />,
      imageSrc:
        "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Advanced Analytics",
      description:
        "Real-time insights and predictive analytics to make informed lending decisions",
      icon: <BarChart3 className="w-12 h-12" />,
      imageSrc:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Secure Infrastructure",
      description:
        "Bank-grade security with end-to-end encryption and regulatory compliance",
      icon: <Lock className="w-12 h-12" />,
      imageSrc:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Digital Contracts",
      description:
        "Streamlined contract creation and management with digital signatures",
      icon: <Shield className="w-12 h-12" />,
      imageSrc:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Performance Monitoring",
      description:
        "Track and analyze lending activities and portfolio performance in real-time",
      icon: <Activity className="w-12 h-12" />,
      imageSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
          Powerful Features for Modern Lending
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our comprehensive suite of tools empowers financial institutions to
          streamline their lending operations
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
