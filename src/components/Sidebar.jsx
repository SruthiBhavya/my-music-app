import usePlayerStore from "../store/usePlayerStore";

function Sidebar({ onSelectGenre }) {
  const { currentGenre, theme } = usePlayerStore();

  const genres = ["All", "Pop", "Rock", "Hip-Hop", "Electronic"];

  return (
    <div
      style={{
        width: "220px",
        padding: "20px",
        backgroundColor:
          theme === "dark" ? "#020617" : "#f8fafc",
      }}
    >
      <h3 style={{ marginBottom: "12px" }}>Genres</h3>

      {genres.map((genre) => (
        <p
          key={genre}
          onClick={() => onSelectGenre(genre)}
          style={{
            cursor: "pointer",
            padding: "8px",
            borderRadius: "6px",
            marginBottom: "6px",
            backgroundColor:
              genre === currentGenre
                ? "#6366f1"
                : "transparent",
            color:
              genre === currentGenre
                ? "#fff"
                : theme === "dark"
                ? "#cbd5f5"
                : "#0f172a",
          }}
        >
          {genre}
        </p>
      ))}
    </div>
  );
}

export default Sidebar;