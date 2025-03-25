
import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Paintbrush, Utensils, Calendar, CheckCircle2 } from 'lucide-react';

export interface EventType {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  icon: 'braid' | 'mehandi' | 'anthakshari' | 'food' | 'rangoli';
  googleFormLink: string;
}

interface EventCardProps {
  event: EventType;
  onRegisterClick: (event: EventType) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onRegisterClick }) => {
  const cardClasses = "relative flex flex-col p-6 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer card-hover glass border border-white/30 hover:border-festival-pink/50";

  const getEventIcon = () => {
    switch(event.icon) {
      case 'braid':
        return <Scissors className="w-10 h-10" />;
      case 'mehandi':
        return <Paintbrush className="w-10 h-10" />;
      case 'anthakshari':
        return <CheckCircle2 className="w-10 h-10" />;
      case 'food':
        return <Utensils className="w-10 h-10" />;
      case 'rangoli':
        return <Paintbrush className="w-10 h-10" />;
      default:
        return <Calendar className="w-10 h-10" />;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className={cardClasses}
    >
      <div className="mb-4 text-3xl text-festival-pink">
        {getEventIcon()}
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
      
      <p className="text-gray-600 text-sm mb-3">{event.description}</p>
      
      <div className="mt-auto space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{event.date} at {event.time}</span>
        </div>
        
        <button 
          onClick={() => onRegisterClick(event)}
          className="w-full mt-4 py-2 px-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-md hover:from-pink-600 hover:to-orange-500 transition-all"
        >
          Register Now
        </button>
      </div>
    </motion.div>
  );
};

export default EventCard;
