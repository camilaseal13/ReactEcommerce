import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.jsx";

const firebaseConfig = {
  apiKey: "AIzaSyAlrwyKJE9_6pdA8pN5FpghAzpet2nPvkY",
  authDomain: "reactecommerce-8499b.firebaseapp.com",
  projectId: "reactecommerce-8499b",
  storageBucket: "reactecommerce-8499b.firebasestorage.app",
  messagingSenderId: "237982635506",
  appId: "1:237982635506:web:88c113ccf77aaddf2cc76b",
};

initializeApp(firebaseConfig);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
