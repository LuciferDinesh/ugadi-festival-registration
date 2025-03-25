
import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, School, Flower, Sparkles, Palmtree, Leaf, Wind, Coffee, PartyPopper } from 'lucide-react';
import Hero from '@/components/Hero';
import UgadiElements from '@/components/UgadiElements';
import EventsSection from '@/components/EventsSection';

const Index = () => {
  return (
    <div className="min-h-screen traditional-bg">
      {/* Traditional toran decoration at the top */}
      <div className="toran w-full h-4 bg-orange-50"></div>
      
      {/* Hero Section */}
      <Hero onRegisterClick={() => {
        const eventsSection = document.getElementById('events-section');
        if (eventsSection) {
          eventsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }} />
      
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
          
          {/* Circular content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass p-6 rounded-xl shadow-lg max-w-2xl mx-auto"
          >
            <h3 className="text-xl font-bold text-orange-800 mb-4">CIRCULAR</h3>
            <p className="text-gray-700 mb-4">
              Ref: SCRRCOE/MBA/ Notice/24-25 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dt.24-03-2025
            </p>
            <div className="text-left mb-6">
              <p className="mb-4">
                Dear students, We would like to inform you that the MBA department is organizing the
                following competitions at FED & MBA Block on the occasion of Ugadi-2025.
              </p>
              <p className="font-semibold">
                We invite all the female students to participate in these competitions and make it grand success.
              </p>
            </div>
            <p className="text-right">Thank you.</p>
            <p className="text-right mt-2">HOD, MBA</p>
          </motion.div>
          
          <div className="relative mt-12">
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
            <span className="inline-block text-festival-pink font-medium mb-2">Celebrate With Us</span>
            <h2 className="text-3xl font-bold mb-4">Ugadi Festival Celebration</h2>
            <p className="text-gray-600">
              Ugadi marks the beginning of the Hindu lunar calendar and is celebrated with great enthusiasm. 
              Join us for exciting competitions specially organized for female students.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <CalendarDays className="w-8 h-8 text-festival-pink" />,
                title: "Event Dates",
                description: "March 26-28, 2025"
              },
              {
                icon: <MapPin className="w-8 h-8 text-festival-red" />,
                title: "Location",
                description: "FED & MBA Block, Sir C.R. Reddy Campus"
              },
              {
                icon: <School className="w-8 h-8 text-festival-green" />,
                title: "Organized By",
                description: "Department of MBA, Sir C.R. Reddy College of Engineering"
              },
              {
                icon: <PartyPopper className="w-8 h-8 text-festival-yellow" />,
                title: "Participants",
                description: "Exclusively for female students"
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
      
      {/* Events Section */}
      <div id="events-section">
        <EventsSection />
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Ugadi Festival 2025</h3>
              <p className="text-gray-400 text-sm">Sir C.R. Reddy College of Engineering</p>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-all">Contact</a>
              <a href="#" className="text-gray-300 hover:text-white transition-all">Terms</a>
              <a href="#" className="text-gray-300 hover:text-white transition-all">Privacy</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>© 2025 Department of MBA, Sir C.R. Reddy College of Engineering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
