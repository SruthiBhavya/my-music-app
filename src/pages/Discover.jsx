import { useEffect, useState } from "react";
import SongCard from "../components/SongCard";
import Sidebar from "../components/Sidebar";
import { getSongs } from "../services/api";
import usePlayerStore from "../store/usePlayerStore";

function Discover() {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

  const { currentGenre, setGenre } = usePlayerStore();

  useEffect(() => {
    getSongs().then((data) => {
      setSongs(data);
    });
  }, []);

  useEffect(() => {
    if (currentGenre === "All") {
      setFilteredSongs(songs);
    } else {
      setFilteredSongs(
        songs.filter(
          (song) =>
            song.genre.toLowerCase() === currentGenre.toLowerCase()
        )
      );
    }
  }, [songs, currentGenre]);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar onSelectGenre={setGenre} />

      <div style={{ flex: 1, padding: "20px" }}>
        <h1 style={{ marginBottom: "20px" }}>
          {currentGenre} Songs
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredSongs.map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Discover;