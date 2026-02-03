# Firebase React Notes App

A ReactJS web application integrated with Firebase services including Authentication, Firestore CRUD operations, Realtime Database, and Cloud Messaging.

## Features

- Google Sign-In using Firebase Authentication  
- User session management  
- Create, Read, Update, and Delete notes using Cloud Firestore  
- Real-time data updates using Firebase Realtime Database  
- Web push notification support using Firebase Cloud Messaging  
- Responsive and modern UI design  

## Tech Stack

- ReactJS (Functional Components and Hooks)  
- Firebase v9 Modular SDK  
  - Authentication  
  - Cloud Firestore  
  - Realtime Database  
  - Cloud Messaging  
- JavaScript (ES6+)  
- CSS3  

## Project Structure

first-app/
│
├── public/
│   └── firebase-messaging-sw.js
│
├── src/
│   ├── components/
│   │   ├── Auth.js
│   │   ├── Notes.js
│   │   └── Realtime.js
│   │
│   ├── firebase.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── package.json
└── README.md

## Setup Instructions

1. Clone the repository

git clone <repository-link>  
cd first-app  

2. Install dependencies

npm install  

3. Configure Firebase

Create a `.env` file in the root directory and add:

REACT_APP_FIREBASE_API_KEY=your_key  
REACT_APP_FIREBASE_AUTH_DOMAIN=your_domain  
REACT_APP_FIREBASE_PROJECT_ID=your_project_id  
REACT_APP_FIREBASE_STORAGE_BUCKET=your_bucket  
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id  
REACT_APP_FIREBASE_APP_ID=your_app_id  

Ensure `.env` is included in `.gitignore`.

4. Start the development server

npm start  

The app will run at:

http://localhost:3000

## Firebase Security

Firestore rules should restrict access to authenticated users:

allow read, write: if request.auth != null;

## Author

Developed as a React and Firebase integration project demonstrating authentication, database management, real-time features, and push notifications.
