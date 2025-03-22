
import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, CalendarClock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Success = () => {
  const location = useLocation();
  const { name, event } = location.state || { name: 'Student', event: 'the event' };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass rounded-xl p-8 md:p-12 max-w-lg w-full text-center shadow-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="w-10 h-10 text-festival-green" />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="text-3xl font-bold mb-2"
        >
          Registration Successful!
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-gray-600 mb-6"
        >
          Thank you, <span className="font-semibold">{name}</span>! Your registration for <span className="font-semibold">{event}</span> has been confirmed.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="bg-blue-50 rounded-lg p-4 mb-6 flex items-center justify-center"
        >
          <CalendarClock className="w-5 h-5 text-festival-blue mr-2" />
          <span className="text-gray-700">Event starts at 10:00 AM on April 9, 2024</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <Link to="/">
            <Button className="bg-festival-blue hover:bg-blue-600 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Success;
