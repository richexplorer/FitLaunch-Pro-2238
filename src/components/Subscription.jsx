import React from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';

const plans = [
  {
    name: "Basic",
    price: "29",
    period: "month",
    features: [
      "Personalized workout plan",
      "100+ video tutorials",
      "Progress tracking",
      "Basic nutrition guide"
    ],
    highlighted: false
  },
  {
    name: "Pro",
    price: "49",
    period: "month",
    features: [
      "Everything in Basic",
      "Live coaching sessions",
      "Advanced nutrition planning",
      "Priority support",
      "Community access"
    ],
    highlighted: true
  },
  {
    name: "Elite",
    price: "79",
    period: "month",
    features: [
      "Everything in Pro",
      "1-on-1 coaching",
      "Customized meal plans",
      "Premium workshops",
      "Personal training sessions"
    ],
    highlighted: false
  }
];

const Subscription = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-dark mb-4"
          >
            Choose Your Plan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Select the perfect plan for your fitness journey
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl p-8 ${
                plan.highlighted 
                  ? 'bg-primary text-white shadow-xl scale-105' 
                  : 'bg-gray-50 text-gray-900'
              }`}
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="ml-2 text-sm opacity-80">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <FiCheck className={`h-5 w-5 mr-3 ${
                      plan.highlighted ? 'text-white' : 'text-primary'
                    }`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full text-sm font-semibold transition-colors ${
                plan.highlighted
                  ? 'bg-white text-primary hover:bg-gray-100'
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subscription;