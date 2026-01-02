import Discover from "./pages/Discover";
import usePlayerStore from "./store/usePlayerStore";

function App() {
  const { theme, toggleTheme } = usePlayerStore();

  const appStyle = {
    minHeight: "100vh",
    width: "100%",
    background:
      theme === "dark"
        ? "linear-gradient(to bottom, #0f172a, #020617)"
        : "linear-gradient(to bottom, #ffffff, #f1f5f9)",
    color: theme === "dark" ? "#ffffff" : "#0f172a",
  };

  return (
    <div style={appStyle}>
      {/* Theme Toggle */}
      <div style={{ padding: "16px", textAlign: "right" }}>
        <button
          onClick={toggleTheme}
          style={{
            backgroundColor: theme === "dark" ? "#334155" : "#e2e8f0",
            color: theme === "dark" ? "#fff" : "#000",
          }}
        >
          {theme === "dark" ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>

      <Discover />
    </div>
  );
}

export default App;