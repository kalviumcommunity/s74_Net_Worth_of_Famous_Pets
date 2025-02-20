import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="container">
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Net Worth of Famous Pets
      </motion.h1>
      <motion.p
        className="description"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Discover the incredible fortunes of the world's most famous pets. From Instagram stars to Hollywood icons, see how these animals have built their wealth!
      </motion.p>
      <motion.div
        className="grid-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {["Richie the Cat", "Buddy the Dog", "Lola the Parrot"].map((pet, index) => (
          <div key={index} className="card">
            <h2 className="card-title">{pet}</h2>
            <p className="card-text">Click to explore their net worth!</p>
            <button className="button">View Details</button>
            <button className="button">Contact Owner</button>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Inline CSS styles
const styles = `
.container {
  min-height: 100vh;
  background-color: #1a202c;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.25rem;
  color: #a0aec0;
  max-width: 40rem;
  margin-bottom: 2rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 60rem;
}

.card {
  background-color: #2d3748;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.card-text {
  color: #cbd5e0;
  margin-bottom: 1rem;
}

.button {
  padding: 0.5rem 1rem;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
}

.button:hover {
  background-color: #3182ce;
}
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
