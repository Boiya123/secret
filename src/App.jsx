import { useEffect, useRef, useState } from 'react'
import liliesBouquet from './assets/lilies-bouquet.jpg'
import './App.css'

function App() {
  const audioSrc = `${import.meta.env.BASE_URL}soft-spot.mp3`
  const [isOpen, setIsOpen] = useState(false)
  const [musicReady, setMusicReady] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.play().catch(() => {})
  }, [])

  return (
    <div className="page">
      <div className="background-gif" aria-hidden="true" />
      <div className="scene">
        <header className="hero">
          <p className="eyebrow">A small missive</p>
          <h1>Happy Valentine&apos;s, Pauline!</h1>
          <p className="subhead">A small letter of affection.</p>
        </header>

        {!isOpen && (
          <section className="card envelope">
            <div className="seal" aria-hidden="true" />
            <p className="letter-body">A sealed letter waits for you.</p>
            {!musicReady ? (
              <button
                className="btn ghost"
                onClick={() => {
                  audioRef.current?.play().catch(() => {})
                  setMusicReady(true)
                }}
              >
                Play music
              </button>
            ) : (
              <button className="btn primary" onClick={() => setIsOpen(true)}>
                Open the letter
              </button>
            )}
          </section>
        )}

        {isOpen && (
          <section className="card letter">
            <div className="blossom-overlay" aria-hidden="true" />
            <div className="letter-ornament" aria-hidden="true" />
            <p className="letter-body">
              Here is my small way of still expressing my feelings for you, they ain&apos;t
              the real ones but I still gotta make some effort. Goodluck ulet sa studies,
              and hope ur doing good as always.
            </p>
            <p className="letter-body">
              Best wishes to you
            </p>
            <p className="letter-sign">— Dion</p>
            <div className="bouquet">
              <div className="bouquet-wrap">
                <div className="bouquet-sparkles" aria-hidden="true">
                  <span className="sparkle" />
                  <span className="sparkle" />
                  <span className="sparkle" />
                  <span className="sparkle" />
                </div>
                <img
                  className="bouquet-image"
                  src={liliesBouquet}
                  alt="Bouquet of lilies"
                  loading="lazy"
                />
              </div>
              <p className="bouquet-caption">A bouquet of lilies, for you.</p>
            </div>
          </section>
        )}
      </div>
      <footer className="footer" aria-hidden="true">
        <div className="footer-gif" />
      </footer>
      <audio ref={audioRef} src={audioSrc} preload="auto" />
    </div>
  )
}

export default App
