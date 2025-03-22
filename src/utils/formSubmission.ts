
export interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  studentId: string;
  department: string;
  year: string;
  gender: 'male' | 'female';
  eventId: string;
  eventName: string;
}

// This is a helper function to handle the form submission to Google Sheets
export const submitToGoogleSheets = async (data: RegistrationFormData): Promise<boolean> => {
  try {
    // In a production app, you would set up a Google Sheets API integration
    // For now, we'll simulate a successful submission
    console.log('Submitting registration data:', data);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // This is where you would make the actual API call to Google Sheets
    // For example, using a pre-deployed Google Apps Script Web App URL:
    // const response = await fetch('YOUR_GOOGLE_SCRIPT_WEB_APP_URL', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // });
    // const result = await response.json();
    // return result.success;
    
    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};
