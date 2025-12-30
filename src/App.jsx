import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Discover from "./pages/Discover";
import SongDetails from "./pages/SongDetails";

function App() {
  const [dark, setDark] = useState(false);

  const toggleBg = dark ? "#3a6fa0" : "#5a8fd0"; // soft blue

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: dark ? "#121212" : "#ffffff",
        color: dark ? "#ffffff" : "#000000",
      }}
    >
      <button
        onClick={() => setDark(!dark)}
        style={{
          margin: "10px",
          padding: "5px 10px",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: toggleBg,
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>

      <Routes>
        <Route path="/" element={<Discover dark={dark} />} />
        <Route path="/song/:id" element={<SongDetails dark={dark} />} />
      </Routes>
    </div>
  );
}

export default App;