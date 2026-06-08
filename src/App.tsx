function App() {
  return (
    <main className="page">
      <img
        src="/encounter-banner.jpg"
        alt="Encounter June 12th and 13th"
        className="banner"
      />

      <section className="streamSection">
        <h1>Encounter Live</h1>

        <div className="placeholder">
          RESI livestream will be available here.
        </div>

        {/* Later replace placeholder with RESI iframe */}
        {/*
        <iframe
          src="RESI_EMBED_LINK_HERE"
          title="Encounter Live Stream"
          allowFullScreen
        />
        */}
      </section>
    </main>
  );
}

export default App;