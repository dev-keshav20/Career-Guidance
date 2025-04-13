import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc
} from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB4E-_YbaCdU8eHwsx67g-hpCg9sGv8RRc",
  authDomain: "career-guidance-5fee9.firebaseapp.com",
  projectId: "career-guidance-5fee9",
  storageBucket: "career-guidance-5fee9.appspot.com",
  messagingSenderId: "858545216095",
  appId: "1:858545216095:web:c6d5c8f11eec31535cd9ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Load careers
async function loadCareers() {
  const careerList = document.getElementById("career-list");
  careerList.innerHTML = "<p>Loading careers...</p>";
  try {
    const querySnapshot = await getDocs(collection(db, "careers"));
    careerList.innerHTML = "";
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const card = document.createElement("div");
      card.className = "career-card";
      card.innerHTML = `
        <img src="${data.image}" alt="${data.title}" />
        <h3>${data.title}</h3>
        <p><strong>Scope:</strong> ${data.scope}</p>
        <p><strong>Eligibility:</strong> ${data.eligibility}</p>
        <p>${data.description}</p>
      `;
      careerList.appendChild(card);
    });
  } catch (err) {
    careerList.innerHTML = "<p>Error loading data</p>";
    console.error(err);
  }
}

// Add Career to Firebase
async function addCareer(title, scope, eligibility, description, image, resources) {
  try {
    await addDoc(collection(db, "careers"), {
      title,
      scope,
      eligibility,
      description,
      image,
      resources
    });
    alert("Career Added Successfully ✅");
    loadCareers();
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("Something went wrong ❌");
  }
}

// Form submit
document.addEventListener("DOMContentLoaded", () => {
  loadCareers();

  const form = document.getElementById("careerForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const scope = document.getElementById("scope").value;
    const eligibility = document.getElementById("eligibility").value;
    const image = document.getElementById("image").value;
    const description = document.getElementById("description").value;

    // Example of resources array
    const resources = [
      "https://nptel.ac.in",
      "https://freecodecamp.org",
      "https://coursera.org/courses/computer-science"
    ];

    // Add the career to Firestore
    addCareer(title, scope, eligibility, description, image, resources);
    form.reset();
  });
});
