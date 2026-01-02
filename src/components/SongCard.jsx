import usePlayerStore from "../store/usePlayerStore";

function SongCard({ song }) {
  const {
    currentSongId,
    isPlaying,
    playSong,
    pauseSong,
    theme,
  } = usePlayerStore();

  const isCurrent = currentSongId === song.id && isPlaying;

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#1e293b" : "#ffffff",
        borderRadius: "12px",
        padding: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <img
        src={song.image}
        alt={song.title}
        style={{
          width: "100%",
          height: "160px",
          objectFit: "cover",
          borderRadius: "8px",
        }}
      />

      <h3 style={{ margin: "10px 0", color: theme === "dark" ? "#fff" : "#000" }}>
        {song.title}
      </h3>

      <p style={{ color: "#94a3b8" }}>{song.artist}</p>

      <button
        onClick={() =>
          isCurrent ? pauseSong() : playSong(song.id)
        }
        style={{
          marginTop: "10px",
          width: "100%",
          backgroundColor: "#6366f1",
          color: "#fff",
        }}
      >
        {isCurrent ? "⏸ Pause" : "▶ Play"}
      </button>
    </div>
  );
}

export default SongCard;