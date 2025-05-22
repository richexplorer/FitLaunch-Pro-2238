import React from 'react';
import { FiActivity, FiVideo, FiHeart, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <FiActivity className="h-6 w-6" />,
    title: "Personalized Workouts",
    description: "Custom fitness plans tailored to your goals and fitness level"
  },
  {
    icon: <FiVideo className="h-6 w-6" />,
    title: "HD Video Tutorials",
    description: "Access to premium workout videos with expert instruction"
  },
  {
    icon: <FiHeart className="h-6 w-6" />,
    title: "Health Tracking",
    description: "Monitor your progress with advanced health metrics"
  },
  {
    icon: <FiUsers className="h-6 w-6" />,
    title: "Community Support",
    description: "Join a community of like-minded fitness enthusiasts"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-dark mb-4">Why Choose FitLife?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals in one place
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;