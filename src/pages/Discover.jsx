import { useEffect, useState } from "react";
import SongCard from "../components/SongCard";
import Sidebar from "../components/Sidebar";
import { getSongs } from "../services/api";

function Discover({ dark }) {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSongs().then((data) => {
      setSongs(data);
      setFilteredSongs(data);
      setLoading(false);
    });
  }, []);

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);

    if (genre === "All") {
      setFilteredSongs(songs);
    } else {
      setFilteredSongs(
        songs.filter(
          (song) => song.genre.toLowerCase() === genre.toLowerCase()
        )
      );
    }
  };

  if (loading) return <h2 style={{ padding: "20px" }}>Loading...</h2>;

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100vw",
        background: dark
          ? "linear-gradient(#121212, #1c1c1c)"
          : "linear-gradient(#ffffff, #f2f2f2)",
        color: dark ? "#fff" : "#000",
      }}
    >
      {/* Sidebar */}
      <Sidebar onSelectGenre={handleGenreSelect} dark={dark} />

      {/* Main Content */}
      <div style={{ flex: 1, padding: "20px" }}>
        {/* ✅ DYNAMIC HEADING */}
        <h1 style={{ marginBottom: "20px" }}>
          {selectedGenre === "All"
            ? "All Songs"
            : `${selectedGenre} Songs`}
        </h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {filteredSongs.map((song) => (
            <SongCard
              key={song.id}
              title={song.title}
              artist={song.artist}
              image={song.image}
              dark={dark}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;