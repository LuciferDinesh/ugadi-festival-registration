
// A utility file to handle registration for events

export interface EventRegistration {
  eventId: string;
  eventName: string;
  date: string;
  time: string;
  googleFormLink: string;
}

// List of all events based on the circular
export const eventsList = [
  {
    id: 'braid',
    name: 'Braid (Hairstyle)',
    description: 'Show your hairstyling skills with creative and beautiful braids.',
    date: '26-03-2025',
    time: '2:00 pm',
    icon: 'braid',
    googleFormLink: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID_FOR_BRAID/viewform'
  },
  {
    id: 'mehandi',
    name: 'Mehandi',
    description: 'Create stunning henna designs showcasing traditional art.',
    date: '26-03-2025',
    time: '3:00 pm',
    icon: 'mehandi',
    googleFormLink: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID_FOR_MEHANDI/viewform'
  },
  {
    id: 'anthakshari',
    name: 'Anthakshari',
    description: 'Musical competition based on songs and lyrics.',
    date: '27-03-2025',
    time: '2:00 pm',
    icon: 'anthakshari',
    googleFormLink: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID_FOR_ANTHAKSHARI/viewform'
  },
  {
    id: 'food',
    name: 'Traditional Food Competition',
    description: 'Prepare and present your best traditional dishes.',
    date: '28-03-2025',
    time: '10:00 am',
    icon: 'food',
    googleFormLink: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID_FOR_FOOD/viewform'
  },
  {
    id: 'rangoli',
    name: 'Rangoli',
    description: 'Showcase your artistic skills with traditional colorful designs.',
    date: '28-03-2025',
    time: '2:00 pm',
    icon: 'rangoli',
    googleFormLink: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID_FOR_RANGOLI/viewform'
  }
];

// Function to redirect to Google Form
export const redirectToGoogleForm = (googleFormLink: string): void => {
  window.open(googleFormLink, '_blank');
};

// Function to get event by ID
export const getEventById = (eventId: string) => {
  return eventsList.find(event => event.id === eventId);
};
