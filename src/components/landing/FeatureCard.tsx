interface FeatureCardProps {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  imageSrc?: string;
}

export default function FeatureCard({
  title = "Feature Title",
  description = "Feature description goes here",
  icon = null,
  imageSrc,
}: FeatureCardProps) {
  return (
    <div className="group p-8 bg-white rounded-xl border hover:border-[#1a365d] transition-all duration-300 hover:shadow-lg">
      <div className="space-y-4">
        {imageSrc && (
          <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        {icon && (
          <div className="mb-4 text-[#1a365d] group-hover:text-[#c4a708] transition-colors duration-300">
            {icon}
          </div>
        )}
        <h3 className="text-xl font-semibold text-[#1a365d] group-hover:text-[#1a365d] mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
