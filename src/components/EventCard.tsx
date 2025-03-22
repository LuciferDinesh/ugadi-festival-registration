
import React from 'react';
import { motion } from 'framer-motion';
import { Users, PaintBucket } from 'lucide-react';

export interface EventType {
  id: string;
  name: string;
  description: string;
  forGender: 'male' | 'female' | 'both';
  icon: 'tug-of-war' | 'rangoli';
}

interface EventCardProps {
  event: EventType;
  isSelected: boolean;
  onSelect: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, isSelected, onSelect }) => {
  const cardClasses = `relative flex flex-col p-6 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer card-hover ${
    isSelected
      ? 'glass border-2 border-festival-blue shadow-lg shadow-blue-500/20'
      : 'glass border border-white/30 hover:border-festival-blue/50'
  }`;

  const getIconColor = () => {
    if (event.forGender === 'male') return 'text-festival-blue';
    if (event.forGender === 'female') return 'text-festival-red';
    return 'text-festival-green'; // For 'both' gender
  };
  
  const iconColor = getIconColor();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className={cardClasses}
      onClick={onSelect}
    >
      {isSelected && (
        <div className="absolute top-3 right-3 w-3 h-3 bg-festival-blue rounded-full">
          <span className="absolute inset-0 rounded-full animate-ping bg-festival-blue/70"></span>
        </div>
      )}

      <div className={`mb-4 text-3xl ${iconColor}`}>
        {event.icon === 'tug-of-war' ? (
          <Users className="w-10 h-10" />
        ) : (
          <PaintBucket className="w-10 h-10" />
        )}
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{event.name}</h3>
      
      <p className="text-gray-600 text-sm mb-3">{event.description}</p>
      
      <div className="mt-auto">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
          event.forGender === 'male' 
            ? 'bg-blue-100 text-blue-800' 
            : event.forGender === 'female'
              ? 'bg-red-100 text-red-800'
              : 'bg-green-100 text-green-800'  // For 'both' gender
        }`}>
          For {event.forGender === 'male' ? 'Males' : event.forGender === 'female' ? 'Females' : 'All Students'}
        </span>
      </div>
    </motion.div>
  );
};

export default EventCard;
