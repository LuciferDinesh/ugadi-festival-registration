
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarClock, MapPin, UserPlus, Flower, Sparkles } from 'lucide-react';

interface HeroProps {
  onRegisterClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onRegisterClick }) => {
  return (
    <section className="relative overflow-hidden pt-16 pb-8 md:py-20 lg:py-28">
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-border -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 to-blue-50/95 -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-festival-yellow/10 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-festival-green/10 rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3"></div>

      {/* Animated mango leaves */}
      <div className="absolute top-10 left-10 opacity-20 hidden md:block">
        <motion.div
          animate={{ 
            y: [0, -5, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Flower className="w-16 h-16 text-green-600" />
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 right-10 opacity-20 hidden md:block">
        <motion.div
          animate={{ 
            y: [0, -7, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        >
          <Flower className="w-16 h-16 text-green-600" />
        </motion.div>
      </div>

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
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative mb-4"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              <span className="relative inline-block mr-3">
                <span className="text-gradient-ugadi">Ugadi</span>
                <motion.span 
                  className="absolute -bottom-2 left-0 right-0 h-3 bg-festival-yellow/30 -z-10"
                  animate={{ rotate: [-1, 1, -1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                ></motion.span>
              </span>
              <span className="text-gray-900">Festival 2024</span>
            </h1>
            
            {/* Decorative sparkles */}
            <motion.div
              className="absolute -top-4 -left-6 text-yellow-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-2 -right-6 text-yellow-500"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              className="absolute -left-10 top-0 opacity-30 hidden md:block"
              animate={{ y: [0, -5, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Flower className="w-6 h-6 text-orange-500" />
            </motion.div>
            
            <motion.div 
              className="absolute -right-10 top-0 opacity-30 hidden md:block"
              animate={{ y: [0, -5, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <Flower className="w-6 h-6 text-orange-500" />
            </motion.div>
            
            <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              Join us in celebrating the Telugu New Year with exciting competitions for students at Sir C.R. Reddy College of Engineering
            </p>
          </motion.div>
          
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
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.98 }}
            onClick={onRegisterClick}
            className="flex items-center justify-center px-6 py-3 bg-festival-blue text-white font-medium rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Register Now
          </motion.button>
          
          {/* Traditional toran decoration at bottom */}
          <div className="w-full max-w-md h-10 mt-10 relative">
            <motion.div 
              className="absolute inset-x-0 top-0 h-5"
              style={{
                backgroundImage: "radial-gradient(circle at 10px -5px, transparent 12px, #f97316 13px, #f97316 14px, transparent 15px)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 -10px"
              }}
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
