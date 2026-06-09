import { Routes, Route, Navigate } from "react-router-dom";

function EncounterLive() {
  return (
    <main className="page">
      <div className="bannerContainer">
    <img
      src="/encounter-banner.jpg"
      alt="Encounter June 12th and 13th"
      className="banner"
    />
  </div>

      <section className="streamSection">
        <h1>Encounter Live</h1>

        <div
  style={{
    position: "relative",
    overflow: "hidden",
    paddingTop: "56.25%",
    borderRadius: "16px",
  }}
>
  <iframe
    title="Encounter Live Stream"
    src="https://control.resi.io/webplayer/video.html?id=a9ec4572-3a6d-47d2-8bb9-bff2dfb3ce52"
    allow="autoplay; fullscreen"
    allowFullScreen
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "none",
    }}
  />
</div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<EncounterLive />} />
      <Route path="/live" element={<EncounterLive />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}