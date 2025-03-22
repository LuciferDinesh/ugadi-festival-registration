
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarClock, MapPin, UserPlus } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 md:py-20 lg:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-blue-50 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-festival-yellow/10 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-festival-green/10 rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-flex items-center px-3 py-1 text-sm font-medium text-festival-blue bg-blue-50 rounded-full">
              <span className="mr-1.5">•</span> MBA Department Event
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 tracking-tight mb-4"
          >
            <span className="relative inline-block mr-3">
              Ugadi
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-festival-yellow/30 -z-10 transform -rotate-1"></span>
            </span>
            Festival 2024
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-lg md:text-xl text-gray-600 mb-6 leading-relaxed"
          >
            Join us in celebrating the Telugu New Year with exciting competitions for students at Sir C.R. Reddy College of Engineering
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="flex items-center text-gray-700">
              <CalendarClock className="w-5 h-5 mr-2 text-festival-blue" />
              <span>April 9, 2024</span>
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin className="w-5 h-5 mr-2 text-festival-red" />
              <span>College Auditorium</span>
            </div>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20, 
              delay: 0.4 
            }}
            onClick={onRegisterClick}
            className="flex items-center justify-center px-6 py-3 bg-festival-blue text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Register Now
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
