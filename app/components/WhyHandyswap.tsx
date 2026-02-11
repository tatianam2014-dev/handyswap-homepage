export default function WhyHandyswap() {
  const features = [
    {
      title: "Transparent Pricing",
      description: "No hidden fees or surprises."
    },
    {
      title: "Tested Quality",
      description: "Every device is quality-checked."
    },
    {
      title: "German Customer Support",
      description: "Fast and reliable help."
    },
    {
      title: "Easy Returns",
      description: "30-day return policy."
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
          Why buy from Handyswap?
        </h2>
        
        <div className="grid grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
