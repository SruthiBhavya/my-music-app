import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setActiveSong } from "../redux/playerSlice";

function SongCard({ id, title, artist, image, dark }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(setActiveSong({ id, title, artist, image }));
  };

  const cardBg = dark ? "#1f1f1f" : "#f8f8f8";
  const textColor = dark ? "#fff" : "#000";
  const artistColor = dark ? "#bbb" : "#555";
  const buttonColor = "#3a9d3a"; // muted green

  return (
    <div
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        width: "200px",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        display: "flex",
        flexDirection: "column",
        backgroundColor: cardBg,
        color: textColor,
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        onClick={() => navigate(`/song/${id}`)}
      />
      <div style={{ padding: "10px", flex: 1 }}>
        <h3 style={{ margin: "5px 0", fontSize: "16px" }}>{title}</h3>
        <p style={{ margin: 0, color: artistColor }}>{artist}</p>
      </div>
      <button
        onClick={handlePlay}
        style={{
          border: "none",
          backgroundColor: buttonColor,
          color: "#fff",
          padding: "8px",
          width: "100%",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Play
      </button>
    </div>
  );
}

export default SongCard;