import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold text-dark mb-6"
        >
          Transform Your Body,<br />
          <span className="text-primary">Transform Your Life</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Join thousands achieving their fitness goals with personalized workouts and expert guidance
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
            Start Free Trial
          </button>
          <button className="border-2 border-primary text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-primary/5 transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;