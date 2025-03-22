
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { toast } from 'sonner';
import { CalendarIcon, CheckCircle2, Loader2, Flower, PartyPopper } from 'lucide-react';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import EventCard, { EventType } from './EventCard';
import { submitToGoogleSheets, RegistrationFormData } from '@/utils/formSubmission';

const events: EventType[] = [
  {
    id: 'tug-of-war',
    name: 'Tug of War',
    description: 'A team sport that pits two teams against each other in a test of strength.',
    forGender: 'male',
    icon: 'tug-of-war',
  },
  {
    id: 'rangoli',
    name: 'Rangoli Competition',
    description: 'Showcase your artistic skills with traditional colorful designs.',
    forGender: 'female',
    icon: 'rangoli',
  },
];

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  studentId: z.string().min(3, { message: 'Student ID is required.' }),
  department: z.string().min(1, { message: 'Please select your department.' }),
  year: z.string().min(1, { message: 'Please select your year of study.' }),
  gender: z.enum(['male', 'female'], { required_error: 'Please select your gender.' }),
  eventId: z.string().min(1, { message: 'Please select an event.' }),
});

type FormValues = z.infer<typeof formSchema>;

const RegistrationForm: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      studentId: '',
      department: '',
      year: '',
      gender: undefined,
      eventId: '',
    },
  });
  
  const gender = form.watch('gender');
  const selectedEventId = form.watch('eventId');
  
  // Filter events based on selected gender
  const filteredEvents = gender ? events.filter(event => event.forGender === gender) : [];
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const selectedEvent = events.find(e => e.id === data.eventId);
      
      if (!selectedEvent) {
        toast.error('Please select an event');
        setIsSubmitting(false);
        return;
      }
      
      const formData: RegistrationFormData = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        studentId: data.studentId,
        department: data.department,
        year: data.year,
        gender: data.gender,
        eventId: data.eventId,
        eventName: selectedEvent.name,
      };
      
      const success = await submitToGoogleSheets(formData);
      
      if (success) {
        toast.success('Registration successful!', {
          description: 'Your registration has been submitted.'
        });
        navigate('/success', { state: { name: data.name, event: selectedEvent.name } });
      } else {
        toast.error('Registration failed', {
          description: 'There was an error submitting your registration. Please try again.'
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Something went wrong', {
        description: 'There was an unexpected error. Please try again later.'
      });
      setIsSubmitting(false);
    }
  };

  // When gender changes, clear the selected event
  React.useEffect(() => {
    form.setValue('eventId', '');
  }, [gender, form]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass rounded-xl p-6 md:p-8 shadow-lg relative overflow-hidden"
      >
        {/* Decorative elements */}
        <motion.div 
          initial={{ x: -50, y: -50, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.07 }}
          transition={{ duration: 0.7 }}
          className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-orange-500"
        />
        
        <motion.div 
          initial={{ x: 50, y: 50, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 0.05 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-yellow-400"
        />
        
        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-yellow-300 flex items-center justify-center shadow-lg"
            >
              <PartyPopper className="w-8 h-8 text-white" />
            </motion.div>
          </div>
          
          <h2 className="text-2xl font-bold mb-6 text-center">Register for Ugadi Festival Event</h2>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold flex items-center">
                      <Flower className="w-5 h-5 mr-2 text-orange-500" />
                      Personal Information
                    </h3>
                  </motion.div>
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            className="input-style" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="your.email@example.com" 
                            className="input-style" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your phone number" 
                            className="input-style" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="input-style">
                              <SelectValue placeholder="Select your gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                {/* Academic Information */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <h3 className="text-lg font-semibold flex items-center">
                      <PartyPopper className="w-5 h-5 mr-2 text-yellow-500" />
                      Academic Information
                    </h3>
                  </motion.div>
                  
                  <FormField
                    control={form.control}
                    name="studentId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student ID</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your student ID" 
                            className="input-style" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Department</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="input-style">
                              <SelectValue placeholder="Select your department" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="CSE">Computer Science</SelectItem>
                            <SelectItem value="ECE">Electronics & Communication</SelectItem>
                            <SelectItem value="EEE">Electrical & Electronics</SelectItem>
                            <SelectItem value="MECH">Mechanical</SelectItem>
                            <SelectItem value="CIVIL">Civil</SelectItem>
                            <SelectItem value="IT">Information Technology</SelectItem>
                            <SelectItem value="MBA">MBA</SelectItem>
                            <SelectItem value="OTHER">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="year"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Year of Study</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="input-style">
                              <SelectValue placeholder="Select your year" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1st Year</SelectItem>
                            <SelectItem value="2">2nd Year</SelectItem>
                            <SelectItem value="3">3rd Year</SelectItem>
                            <SelectItem value="4">4th Year</SelectItem>
                            <SelectItem value="pg1">PG 1st Year</SelectItem>
                            <SelectItem value="pg2">PG 2nd Year</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              {/* Event Selection Section */}
              <AnimatePresence mode="wait">
                {gender && (
                  <motion.div
                    key="event-selection"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <CalendarIcon className="w-5 h-5 mr-2 text-green-500" />
                      Select Your Event
                    </h3>
                    
                    <FormField
                      control={form.control}
                      name="eventId"
                      render={() => (
                        <FormItem>
                          <div className="grid grid-cols-1 gap-4">
                            {filteredEvents.length > 0 ? (
                              filteredEvents.map((event) => (
                                <EventCard
                                  key={event.id}
                                  event={event}
                                  isSelected={selectedEventId === event.id}
                                  onSelect={() => form.setValue('eventId', event.id)}
                                />
                              ))
                            ) : (
                              <p className="text-center text-gray-500 italic py-4">
                                No events available for the selected gender.
                              </p>
                            )}
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center pt-4"
              >
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-6 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-lg shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/30 transition-all"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" />
                      Complete Registration
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </Form>
        </div>
      </motion.div>
    </div>
  );
};

export default RegistrationForm;
