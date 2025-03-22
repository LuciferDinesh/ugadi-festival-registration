
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, School, Trophy, Flower, Sun, PartyPopper, Wind, Coffee, Leaf, Sparkles, Palmtree } from 'lucide-react';
import Hero from '@/components/Hero';
import RegistrationForm from '@/components/RegistrationForm';
import UgadiElements from '@/components/UgadiElements';

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen traditional-bg">
      {/* Traditional toran decoration at the top */}
      <div className="toran w-full h-4 bg-orange-50"></div>
      
      {/* Hero Section */}
      <Hero onRegisterClick={scrollToForm} />
      
      {/* Floating Ugadi Elements */}
      <UgadiElements />
      
      {/* Ugadi Banner with enhanced animations */}
      <section className="py-12 relative overflow-hidden kolam-pattern">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-100/90 to-yellow-200/90"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gradient-ugadi inline-block mb-3">
              శుభ ఉగాది
            </h2>
            <p className="text-orange-800 text-xl">Happy Telugu New Year</p>
          </motion.div>
          
          <div className="relative">
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-10 -left-10 text-yellow-600 hidden md:block"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Leaf className="w-16 h-16 opacity-30" />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-10 -right-10 text-orange-500 hidden md:block"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <Palmtree className="w-16 h-16 opacity-30" />
            </motion.div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
              {/* Traditional symbols column */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="leaf-decoration glass p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-orange-800 mb-4">Traditional Symbols</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-yellow-100 text-orange-600 mb-2">
                      <Leaf className="w-8 h-8" />
                    </div>
                    <p className="text-orange-700 font-medium">Mango Leaves</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-yellow-100 text-orange-600 mb-2">
                      <Coffee className="w-8 h-8" />
                    </div>
                    <p className="text-orange-700 font-medium">Ugadi Pachadi</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-yellow-100 text-orange-600 mb-2">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <p className="text-orange-700 font-medium">Rangoli</p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-yellow-100 text-orange-600 mb-2">
                      <Wind className="w-8 h-8" />
                    </div>
                    <p className="text-orange-700 font-medium">New Beginnings</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Ugadi Pachadi column */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="leaf-decoration glass p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-orange-800 mb-4">Ugadi Pachadi</h3>
                <p className="text-orange-700 mb-4">The six tastes of life symbolizing:</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="ugadi-sweet p-2 rounded-lg text-center text-sm font-medium text-yellow-800">
                    Sweet (Jaggery) - Happiness
                  </div>
                  <div className="ugadi-sour p-2 rounded-lg text-center text-sm font-medium text-green-800">
                    Sour (Tamarind) - Surprises
                  </div>
                  <div className="ugadi-salt p-2 rounded-lg text-center text-sm font-medium text-gray-800">
                    Salt - Interest
                  </div>
                  <div className="ugadi-bitter p-2 rounded-lg text-center text-sm font-medium text-yellow-900">
                    Bitter (Neem) - Difficulties
                  </div>
                  <div className="ugadi-spicy p-2 rounded-lg text-center text-sm font-medium text-red-800">
                    Spicy (Pepper) - Challenges
                  </div>
                  <div className="ugadi-astringent p-2 rounded-lg text-center text-sm font-medium text-orange-800">
                    Astringent (Unripe Mango) - Fear
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Kolam/Rangoli pattern decorations */}
        <div className="absolute bottom-0 left-0 w-24 h-24 md:w-40 md:h-40">
          <motion.div 
            className="w-full h-full rounded-full border-2 border-orange-300 opacity-30"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="absolute top-0 right-0 w-24 h-24 md:w-40 md:h-40">
          <motion.div 
            className="w-full h-full rounded-full border-2 border-orange-300 opacity-30"
            animate={{ scale: [1, 1.1, 1], rotate: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </div>
      </section>
      
      {/* Event Info Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-border"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/95 to-white/95"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <span className="inline-block text-festival-blue font-medium mb-2">Celebrate With Us</span>
            <h2 className="text-3xl font-bold mb-4">Ugadi Festival Celebration</h2>
            <p className="text-gray-600">
              Ugadi marks the beginning of the Hindu lunar calendar and is celebrated with great enthusiasm. 
              Join us for a day filled with traditional competitions, cultural performances, and festivity.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <CalendarDays className="w-8 h-8 text-festival-blue" />,
                title: "Event Date",
                description: "April 9, 2024 starting at 10:00 AM"
              },
              {
                icon: <MapPin className="w-8 h-8 text-festival-red" />,
                title: "Location",
                description: "College Auditorium, Sir C.R. Reddy Campus"
              },
              {
                icon: <School className="w-8 h-8 text-festival-green" />,
                title: "Organized By",
                description: "Department of MBA, Sir C.R. Reddy College of Engineering"
              },
              {
                icon: <Trophy className="w-8 h-8 text-festival-yellow" />,
                title: "Competitions",
                description: "Rangoli for female students, Tug of War for male students"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-xl flex flex-col items-center text-center card-hover"
              >
                <motion.div 
                  className="mb-4 rounded-full bg-white p-4 shadow-sm"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Traditional Ugadi Section - enhanced with animations */}
      <section className="py-12 bg-gradient-to-r from-yellow-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 kolam-pattern opacity-10"></div>
        
        {/* Animated decorative elements */}
        <motion.div 
          className="absolute top-10 left-10 text-orange-500 opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-40 h-40 border-4 border-dashed rounded-full"></div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 right-10 text-yellow-500 opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-60 h-60 border-4 border-dashed rounded-full"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-orange-800 mb-3"
            >
              Traditional Ugadi Celebration
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-20 h-1 bg-orange-500 mx-auto mb-4"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-orange-700 max-w-2xl mx-auto"
            >
              Experience the rich traditions of Ugadi, from the symbolism of the six tastes in Ugadi Pachadi 
              to the decorative Rangoli patterns and mango leaf adorned homes.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Ugadi Pachadi",
                description: "A special mixture of six tastes symbolizing the different emotions of life",
                color: "from-yellow-400 to-yellow-300",
                icon: <Coffee className="w-6 h-6" />
              },
              {
                title: "Mango Leaves",
                description: "Homes are decorated with mango leaves symbolizing prosperity",
                color: "from-green-500 to-green-400",
                icon: <Leaf className="w-6 h-6" />
              },
              {
                title: "New Clothes",
                description: "People wear new clothes and exchange gifts to welcome the new year",
                color: "from-orange-500 to-orange-400",
                icon: <PartyPopper className="w-6 h-6" />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <div className={`h-3 bg-gradient-to-r ${item.color}`}></div>
                <div className="p-6 bg-white">
                  <div className="flex items-center mb-3">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${item.color} text-white mr-3`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional traditional elements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 glass p-6 rounded-xl max-w-3xl mx-auto"
          >
            <h3 className="text-xl font-bold text-center text-orange-800 mb-4">Ugadi Customs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Sun className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-orange-800">Early Morning Ritual</h4>
                  <p className="text-sm text-gray-600">Traditional oil bath before sunrise</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Flower className="w-5 h-5 text-pink-500" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-orange-800">Temple Visits</h4>
                  <p className="text-sm text-gray-600">Prayers for prosperity in the new year</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-orange-800">Panchanga Sravanam</h4>
                  <p className="text-sm text-gray-600">Listening to the yearly forecast</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <PartyPopper className="w-5 h-5 text-red-500" />
                </div>
                <div className="ml-3">
                  <h4 className="font-medium text-orange-800">Festive Meals</h4>
                  <p className="text-sm text-gray-600">Special dishes shared with family</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Registration Form Section */}
      <section ref={formRef} className="py-16 ugadi-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RegistrationForm />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Ugadi Festival 2024</h3>
              <p className="text-gray-400 text-sm">Sir C.R. Reddy College of Engineering</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-all">Contact</a>
              <a href="#" className="text-gray-300 hover:text-white transition-all">Terms</a>
              <a href="#" className="text-gray-300 hover:text-white transition-all">Privacy</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2024 Department of MBA, Sir C.R. Reddy College of Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
