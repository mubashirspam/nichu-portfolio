const Service: React.FC = () => {
  const services = [
    {
      title: "Performance Marketing",
      description:
        "Smart ad strategies that turn ₹5 lakhs into ₹10.48 crores. No fluff, just results.",
      features: [
        "ROI-focused campaigns",
        "Data-driven decisions",
        "Conversion optimization",
      ],
    },
    {
      title: "Social Media Strategy",
      description:
        "Build powerful online identities that make algorithms work for you, not against you.",
      features: [
        "Content strategy",
        "Personal branding",
        "Community building",
        "Brand positioning",
      ],
    },
    {
      title: "1-to-1 Mentoring",
      description:
        "Personalized guidance to help you apply these strategies to your own brand or business.",
      features: [
        "Custom action plans",
        "Direct feedback on your work",
        "Ongoing support to fast-track your growth",
      ],
    },
    {
      title: "Digital Skills Training",
      description:
        "I dream of teaching 1 lakh people—turning them into confident creators and helping them build powerful brands",
      features: [
        "Practical workshops",
        "Real-world projects",
        "Career guidance",
        "Personal branding",
      ],
    },
    {
      title: "Start-up Scaling",
      description:
        "I've built and scaled 3 startups of my own, gaining hands-on experience in turning ideas from a laptop into profit-making machines.",
      features: ["Growth frameworks", "Team building", "Process optimization"],
    },
    {
      title: "SEO & Web Designing",
      description:
        "Get discovered online and create websites that convert visitors into customers.",
      features: [
        "SEO strategies that boost rankings",
        "User-focused web design",
        "Website optimization for growth",
      ],
    },
  ];
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What I <span className="text-purple-400">Offer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Creative campaigns that convert. Just real strategies that deliver
            measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
