
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
  multipleEvents?: boolean;
  allEventNames?: string[];
}

// This is a helper function to handle the form submission to Google Sheets
export const submitToGoogleSheets = async (data: RegistrationFormData): Promise<boolean> => {
  try {
    console.log('Submitting registration data:', data);
    
    // Replace with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';
    
    // Simulate API call in development - in production, uncomment the fetch code below
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // In production, uncomment the code below and replace the URL with your deployed Google Apps Script Web App URL
    /*
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit form');
    }
    
    const result = await response.json();
    return result.success;
    */
    
    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};

// Instructions for setting up Google Sheets integration:
/*
1. Create a Google Sheet with columns matching your form fields
   (name, email, phone, studentId, department, year, gender, eventId, eventName, multipleEvents)
2. Open the Script Editor (Extensions > Apps Script)
3. Paste the following code in the Script Editor:

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // Add timestamp
  var timestamp = new Date();
  
  // Append row to sheet with all form fields
  sheet.appendRow([
    timestamp,
    data.name,
    data.email,
    data.phone,
    data.studentId,
    data.department,
    data.year,
    data.gender,
    data.eventId,
    data.eventName,
    data.multipleEvents ? "Yes" : "No"
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

4. Deploy as a web app:
   - Click Deploy > New deployment
   - Select type: Web app
   - Set "Who has access" to "Anyone"
   - Deploy and copy the web app URL
5. Replace 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL' in this file with that URL
*/
