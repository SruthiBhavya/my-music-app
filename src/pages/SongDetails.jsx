import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function SongDetails({ dark }) {
  const { id } = useParams();
  const { activeSong } = useSelector((state) => state.player);

  if (!activeSong) {
    return (
      <div
        style={{
          minHeight: "100vh",
          padding: "20px",
          backgroundColor: dark ? "#121212" : "#fff",
          color: dark ? "#fff" : "#000",
        }}
      >
        <p>No song selected. Go back and click a song!</p>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: dark ? "#121212" : "#fff",
        color: dark ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Song Details</h1>
      <img
        src={activeSong.image}
        alt={activeSong.title}
        style={{ width: "300px", borderRadius: "12px", margin: "20px 0" }}
      />
      <h2>{activeSong.title}</h2>
      <p>{activeSong.artist}</p>
    </div>
  );
}

export default SongDetails;