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

        <div className="placeholder">
          RESI livestream will be available here.
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