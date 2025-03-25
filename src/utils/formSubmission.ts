
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
    imageUrl: '/images/braid.jpg', // You'll need to add these images to your public/images folder
    googleFormLink: 'GOOGLE_FORM_LINK_FOR_BRAID' // Replace this with your actual Google Form link
  },
  {
    id: 'mehandi',
    name: 'Mehandi',
    description: 'Create stunning henna designs showcasing traditional art.',
    date: '26-03-2025',
    time: '3:00 pm',
    imageUrl: '/images/mehandi.jpg',
    googleFormLink: 'GOOGLE_FORM_LINK_FOR_MEHANDI' // Replace this with your actual Google Form link
  },
  {
    id: 'anthakshari',
    name: 'Anthakshari',
    description: 'Musical competition based on songs and lyrics.',
    date: '27-03-2025',
    time: '2:00 pm',
    imageUrl: '/images/anthakshari.jpg',
    googleFormLink: 'GOOGLE_FORM_LINK_FOR_ANTHAKSHARI' // Replace this with your actual Google Form link
  },
  {
    id: 'food',
    name: 'Traditional Food Competition',
    description: 'Prepare and present your best traditional dishes.',
    date: '28-03-2025',
    time: '10:00 am',
    imageUrl: '/images/food.jpg',
    googleFormLink: 'GOOGLE_FORM_LINK_FOR_FOOD' // Replace this with your actual Google Form link
  },
  {
    id: 'rangoli',
    name: 'Rangoli',
    description: 'Showcase your artistic skills with traditional colorful designs.',
    date: '28-03-2025',
    time: '2:00 pm',
    imageUrl: '/images/rangoli.jpg',
    googleFormLink: 'GOOGLE_FORM_LINK_FOR_RANGOLI' // Replace this with your actual Google Form link
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
