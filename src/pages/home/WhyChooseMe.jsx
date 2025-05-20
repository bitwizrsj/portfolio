import { motion } from 'framer-motion';
import { Code2, Rocket, Users2, Zap } from 'lucide-react';

export default function WhyChooseMe() {
  const features = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Clean & Modern Code",
      description: "I write maintainable, scalable code following best practices and industry standards."
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality or attention to detail."
    },
    {
      icon: <Users2 className="w-6 h-6" />,
      title: "Client-Focused",
      description: "Your success is my priority. I ensure clear communication and exceed expectations."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance First",
      description: "I build lightning-fast applications optimized for the best user experience."
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h3 className="text-2xl font-normal tracking-widest text-gray-300 uppercase">Why Choose Me</h3>
          <div className="w-full h-px bg-gray-700 mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300"
            >
              <div className="mb-4 text-blue-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}