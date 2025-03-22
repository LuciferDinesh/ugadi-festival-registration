
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, School, Trophy, Flower, Sun, PartyPopper } from 'lucide-react';
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
      
      {/* Ugadi Banner */}
      <section className="py-8 bg-gradient-to-r from-yellow-100 to-yellow-200 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-10 left-10 text-yellow-600"
          >
            <Flower className="w-12 h-12" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            className="absolute top-5 right-20 text-orange-500"
          >
            <Sun className="w-10 h-10" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.7, repeat: Infinity, repeatType: "reverse", delay: 0.7 }}
            className="absolute bottom-5 left-32 text-green-600"
          >
            <Flower className="w-8 h-8" />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3, repeat: Infinity, repeatType: "reverse", delay: 0.2 }}
            className="absolute bottom-8 right-16 text-red-500"
          >
            <PartyPopper className="w-9 h-9" />
          </motion.div>
          
          <motion.h2 
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-orange-800"
          >
            Celebrating New Beginnings
          </motion.h2>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-2 text-lg text-orange-700"
          >
            Ugadi marks the beginning of the Telugu New Year with festivity, food, and new hopes
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { icon: <Flower className="w-6 h-6" />, label: "Decorative Rangoli" },
              { icon: <Sun className="w-6 h-6" />, label: "New Beginnings" },
              { icon: <PartyPopper className="w-6 h-6" />, label: "Celebrations" },
              { icon: <CalendarDays className="w-6 h-6" />, label: "Telugu New Year" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="p-3 bg-white rounded-full shadow-md mb-2 text-orange-600">
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-orange-800">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute -right-28 -top-28 w-56 h-56 rounded-full border-8 border-dashed border-yellow-400 opacity-20"
        />
        <motion.div 
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -left-28 -bottom-28 w-56 h-56 rounded-full border-8 border-dashed border-orange-400 opacity-20"
        />
      </section>
      
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
      
      {/* Traditional Ugadi Section */}
      <section className="py-12 bg-gradient-to-r from-yellow-50 to-orange-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
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
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Ugadi Pachadi",
                description: "A special mixture of six tastes symbolizing the different emotions of life",
                color: "from-yellow-400 to-yellow-300"
              },
              {
                title: "Mango Leaves",
                description: "Homes are decorated with mango leaves symbolizing prosperity",
                color: "from-green-500 to-green-400"
              },
              {
                title: "New Clothes",
                description: "People wear new clothes and exchange gifts to welcome the new year",
                color: "from-orange-500 to-orange-400"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-lg overflow-hidden shadow-md"
              >
                <div className={`h-3 bg-gradient-to-r ${item.color}`}></div>
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="w-full h-full border-8 border-orange-500 rounded-full"
          />
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
