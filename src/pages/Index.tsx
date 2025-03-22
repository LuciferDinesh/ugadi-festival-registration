
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, School, Trophy } from 'lucide-react';
import Hero from '@/components/Hero';
import RegistrationForm from '@/components/RegistrationForm';

const Index = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero onRegisterClick={scrollToForm} />
      
      {/* Event Info Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50 -z-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="mb-4 rounded-full bg-white p-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Registration Form Section */}
      <section ref={formRef} className="py-16 bg-gray-50">
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
