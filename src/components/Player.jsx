function Player({ dark }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100vw",
        height: "80px",
        backgroundColor: dark ? "#181818" : "#ffffff",
        borderTop: dark ? "1px solid #333" : "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#3fa34d",
          color: "white",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
        }}
      >
        ▶ Play
      </button>
    </div>
  );
}

export default Player;