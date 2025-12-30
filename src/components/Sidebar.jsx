function Sidebar({ onSelectGenre, dark }) {
  const genres = ["All", "Pop", "Rock", "Hip-Hop", "Electronic"];

  const sidebarBg = dark ? "#1c1c1c" : "#f8f8f8";
  const itemBg = dark ? "#2a2a2a" : "#eaeaea";
  const itemHoverBg = dark ? "#333" : "#d4d4d4";

  return (
    <div
      style={{
        width: "220px",
        padding: "20px",
        minHeight: "100vh",
        backgroundColor: sidebarBg,
        borderRight: dark ? "1px solid #333" : "1px solid #ddd",
      }}
    >
      <h3 style={{ marginBottom: "20px" }}>Genres</h3>
      {genres.map((genre) => (
        <p
          key={genre}
          onClick={() => onSelectGenre(genre)}
          style={{
            cursor: "pointer",
            margin: "10px 0",
            padding: "5px 10px",
            borderRadius: "8px",
            transition: "0.2s",
            backgroundColor: itemBg,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = itemHoverBg;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = itemBg;
          }}
        >
          {genre}
        </p>
      ))}
    </div>
  );
}

export default Sidebar;
