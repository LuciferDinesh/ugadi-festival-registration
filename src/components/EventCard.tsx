
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export interface EventType {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  imageUrl: string;
  googleFormLink: string;
}

interface EventCardProps {
  event: EventType;
  onRegisterClick: (event: EventType) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onRegisterClick }) => {
  const cardClasses = "relative flex flex-col p-6 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer card-hover glass border border-white/30 hover:border-festival-pink/50";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className={cardClasses}
    >
      <div className="mb-4 h-40 w-full overflow-hidden rounded-lg">
        <img 
          src={event.imageUrl} 
          alt={event.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
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
