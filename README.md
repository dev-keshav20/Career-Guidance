🎯 Career Guidance Website
A web-based platform built to help students and job aspirants get proper guidance on what to study and where to study, based on their education background or dream job. 🔍

🚀 Features
🔎 Search by education level or dream profession

📚 Shows detailed description, eligibility, scope, and resources

📥 Data stored and fetched using Firebase Firestore

🖼 Profession cards with image, title, and quick info

📖 Clicking a card opens full detailed view with learning resources

🔐 Secure and real-time Firebase backend

🛠️ Tech Stack
HTML

CSS

JavaScript

Firebase (Firestore)

📁 Folder Structure
pgsql
Copy
Edit
career-guidance/
├── index.html         --> Main UI and form
├── style.css          --> Styling for the website
├── app.js          -->  DOM logic
├── firebase.js          --> Firebase 
├── README.md          --> Project info
⚙️ How to Use
Clone the repository or download the code.

Go to Firebase Console and create a new project.

Enable Firestore Database and copy your Firebase config.

Replace the config in script.js with your own.

Run index.html in your browser.

📌 Firebase Config Example
js
Copy
Edit
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};
🧠 Sample Fields Stored in Firebase
js
Copy
Edit
{
  title: "Software Engineer",
  description: "Software engineers develop applications and systems...",
  eligibility: "Bachelor's in CS or IT",
  scope: "Product-based companies, startups, MNCs",
  resources: "FreeCodeCamp, GeeksForGeeks, LeetCode",
  imageUrl: "https://example.com/software-engineer.png"
}
👨‍💻 Made with ❤️ by Keshav Tanwar









