
import React from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Calendar, Info } from 'lucide-react';
import EventCard, { EventType } from './EventCard';
import { eventsList, redirectToGoogleForm } from '@/utils/formSubmission';

const EventsSection: React.FC = () => {
  // Group events by date for better organization
  const eventsByDate = eventsList.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event as EventType);
    return acc;
  }, {} as Record<string, EventType[]>);

  const handleEventRegistration = (event: EventType) => {
    toast.info(`Redirecting to registration for ${event.name}`, {
      description: `You will be redirected to Google Forms to register for this event.`
    });
    
    redirectToGoogleForm(event.googleFormLink);
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="inline-block text-festival-pink font-medium mb-2">Ugadi Competitions</span>
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-gray-600">
            Join us for these exciting competitions organized by the MBA department.
            Register now to showcase your talents and win exciting prizes!
          </p>
          
          <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start">
              <Info className="w-5 h-5 text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
              <p className="text-sm text-amber-700 text-left">
                These events are exclusively for female students. Click on "Register Now" to be redirected 
                to the Google Forms registration page for each event.
              </p>
            </div>
          </div>
        </motion.div>

        {Object.keys(eventsByDate).sort().map((date, dateIndex) => (
          <div key={date} className="mb-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dateIndex * 0.1 }}
              className="flex items-center mb-6"
            >
              <Calendar className="w-6 h-6 text-festival-pink mr-2" />
              <h3 className="text-xl font-semibold">Events on {date}</h3>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventsByDate[date].map((event, eventIndex) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1 + (eventIndex * 0.1) 
                  }}
                >
                  <EventCard 
                    event={event} 
                    onRegisterClick={handleEventRegistration} 
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
