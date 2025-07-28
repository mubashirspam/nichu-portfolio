import { Quote, Star } from "lucide-react";

const Testmonials: React.FC = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "TechStart Solutions",
      role: "Founder & CEO",
      content:
        "Nizamudheen transformed our digital presence completely. Our revenue grew from ₹12 lakhs to ₹45 lakhs in just 6 months. His strategies are pure gold!",
      rating: 5,
    },
    {
      name: "Priya Menon",
      company: "Kerala Spices Export",
      role: "Marketing Director",
      content:
        "Working with Nizam was a game-changer. He helped us reach global markets through social media. Our export orders increased by 300%!",
      rating: 5,
    },
    {
      name: "Arjun Das",
      company: "Fitness First Kochi",
      role: "Business Owner",
      content:
        "From 200 followers to 50K in 8 months! Nizam's content strategy and ad campaigns brought us 500+ new members. Incredible ROI!",
      rating: 5,
    },
    {
      name: "Sneha Krishnan",
      company: "Freelance Designer",
      role: "Creative Professional",
      content:
        "His mentorship program changed my career. Learned practical skills that got me 5-figure clients within 3 months. Best investment ever!",
      rating: 5,
    },
  ];
  return (
    <section id="testimonials" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Clients <span className="text-purple-400">Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from real people who&apos;ve experienced the
            transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Quote className="text-purple-400 mr-3" size={24} />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="text-yellow-400 fill-current"
                      size={16}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-purple-300 text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testmonials;
