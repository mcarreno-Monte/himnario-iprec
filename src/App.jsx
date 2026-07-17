import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom'
import { parseLyricsLine } from './chordParser'
import { Search, ArrowLeft, Plus, Minus, Eye, EyeOff, Home, Heart, Star, Settings } from 'lucide-react'
import { SONGS } from './songsData'

const CATEGORY_OPTIONS = [
  'General',
  'Devocional',
  'Predicación',
  'Congregacional',
  'Fúnebre',
  'Coritos'
]
const DEFAULT_SETTINGS = {
  fontSize: 1.1,
  chordSize: 0.95,
  keepAwake: false,
  theme: 'dark',
  chordNotation: 'spanish'
}
const DEVELOPER_NAME = 'Pr. Marcos Carreño M.'
const CONTACT_EMAIL = 'marcos.carreno.m@gmail.com'
const APP_VERSION = '1.1'
function useFavorites() {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('iprec_favorites')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('iprec_favorites', JSON.stringify(favorites))
  }, [favorites])

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    )
  }

  return [favorites, toggleFavorite]
}

function useAppSettings() {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('iprec_settings')
      return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS
    } catch {
      return DEFAULT_SETTINGS
    }
  })

  useEffect(() => {
    localStorage.setItem('iprec_settings', JSON.stringify(settings))
  }, [settings])

  const updateSettings = (changes) => {
    setSettings(prev => ({
      ...prev,
      ...changes
    }))
  }

  return [settings, updateSettings]
}

function BottomNav() {
  const location = useLocation()

  if (location.pathname.includes('/song/')) return null

  return (
    <div className="bottom-nav">
      <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
        <Home size={24} />
        <span>Inicio</span>
      </Link>

      <Link to="/favoritos" className={`nav-item ${location.pathname === '/favoritos' ? 'active' : ''}`}>
        <Heart size={24} />
        <span>Favoritos</span>
      </Link>

      <Link to="/especiales" className={`nav-item ${location.pathname === '/especiales' ? 'active' : ''}`}>
        <Star size={24} />
        <span>Especiales</span>
      </Link>

      <Link to="/ajustes" className={`nav-item ${location.pathname === '/ajustes' ? 'active' : ''}`}>
        <Settings size={24} />
        <span>Ajustes</span>
      </Link>
    </div>
  )
}

function SongList({ title, filterType, favoritesList }) {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todas')

  const songsForSection = SONGS.filter(song => {
    if (filterType === 'all' && song.isSpecial) {
      return false
    }

    if (filterType === 'favorites' && (!favoritesList || !favoritesList.includes(song.id))) {
      return false
    }

    if (filterType === 'specials' && !song.isSpecial) {
      return false
    }

    return true
  })

  const availableCategories = CATEGORY_OPTIONS.filter(cat =>
    songsForSection.some(song => song.category === cat)
  )

  const categories = ['Todas', ...availableCategories]

const filteredSongs = songsForSection
  .filter(song => {
    if (category !== 'Todas' && song.category !== category) {
      return false
    }

    const searchTerm = search.toLowerCase()
    const matchTitle = song.title.toLowerCase().includes(searchTerm)
    const matchNumber = song.number ? song.number.toString().includes(searchTerm) : false

    return matchTitle || matchNumber
  })
  .sort((a, b) => {
    const numberA = Number(a.number || a.id)
    const numberB = Number(b.number || b.id)

    return numberA - numberB
  })

  return (
    <>
      <div className="header">
        <h1>{title}</h1>

        <select
          className="filter-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="main-content">
        <div className="search-container">
          <Search
            style={{
              position: 'absolute',
              left: '32px',
              marginTop: '14px',
              color: 'var(--text-secondary)'
            }}
            size={20}
          />

          <input
            type="text"
            className="search-input"
            placeholder="Buscar por título o número..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="song-list">
          {filteredSongs.map(song => (
            <Link to={`/song/${song.id}`} key={song.id} className="song-item">
              <div className="song-number">{song.number || song.id}</div>

              <div className="song-details">
                <h2>{song.title}</h2>

                <p>
                  <span>{song.artist}</span>
                  {song.category && <span className="category-badge">{song.category}</span>}
                  {song.key && <span className="category-badge">Tono: {song.key}</span>}
                </p>
              </div>
            </Link>
          ))}

          {filteredSongs.length === 0 && (
            <p
              style={{
                textAlign: 'center',
                color: 'var(--text-secondary)',
                marginTop: '2rem'
              }}
            >
              No se encontraron alabanzas
            </p>
          )}
        </div>
      </div>
    </>
  )
}
function SongViewer({ favorites, toggleFavorite, settings }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const songId = parseInt(id)
  const song = SONGS.find(s => s.id === songId)

  const [transpose, setTranspose] = useState(0)
  const [showChords, setShowChords] = useState(false)
  const fontSize = settings?.fontSize || DEFAULT_SETTINGS.fontSize
  const chordSize = settings?.chordSize || DEFAULT_SETTINGS.chordSize
  const keepAwake = settings?.keepAwake || false
  const chordNotation = settings?.chordNotation || 'spanish'

  useEffect(() => {
    let wakeLock = null

    const requestWakeLock = async () => {
      try {
        if (keepAwake && 'wakeLock' in navigator) {
          wakeLock = await navigator.wakeLock.request('screen')
        }
      } catch (error) {
        console.log('Wake Lock no disponible:', error)
      }
    }

    requestWakeLock()

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        requestWakeLock()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)

      if (wakeLock) {
        wakeLock.release().catch(() => {})
      }
    }
  }, [keepAwake])

  if (!song) {
    return <div className="main-content">Canción no encontrada</div>
  }

  const isFavorite = favorites.includes(songId)

  const handleTranspose = (amount) => {
    let newAmount = transpose + amount

    if (newAmount > 11) newAmount -= 12
    if (newAmount < -11) newAmount += 12

    setTranspose(newAmount)
  }

  const isSectionTitle = (line) => {
    const cleanLine = line.trim()

    return /^(ESTROFA|CORO|PUENTE|INTRO|FINAL|VERSO|PRE-CORO|PRECORO|INTERLUDIO|CORO FINAL)(\s+\d+)?\s*:?$/i.test(cleanLine)
  }

  return (
    <>
      <div className="header" style={{ padding: '1rem 1.5rem' }}>
        <button
          className="btn"
          style={{ padding: '0.5rem', backgroundColor: 'transparent' }}
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={24} />
        </button>

        <div className="song-viewer-title">
  <div className="song-type-label">
    {song.isSpecial ? 'ESPECIAL' : 'HIMNO'} {song.number || song.id}
  </div>

  <h1>
    {song.title}
  </h1>

  {(song.key || song.time) && (
    <div className="song-key-line">
      <span className="song-note-symbol">♪</span>

      {song.key && (
        <span>{song.key}</span>
      )}

      {song.key && song.time && (
        <span>-</span>
      )}

      {song.time && (
        <span>{song.time}</span>
      )}
    </div>
  )}
</div>
        <button
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => toggleFavorite(songId)}
        >
          <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      <div className="main-content">
        <div className="controls-bar">
          <button
  className={`btn chord-toggle-btn ${showChords ? 'active' : ''}`}
  onClick={() => setShowChords(!showChords)}
>
  {showChords ? <EyeOff size={18} /> : <Eye size={18} />}
  {showChords ? 'Ocultar Acordes' : 'Mostrar Acordes'}
</button>

          {showChords && (
            <div className="transpose-controls">
              <button className="btn" onClick={() => handleTranspose(-1)}>
                <Minus size={18} />
              </button>

              <span className="transpose-value">
                {transpose > 0 ? `+${transpose}` : transpose}
              </span>

              <button className="btn" onClick={() => handleTranspose(1)}>
                <Plus size={18} />
              </button>
            </div>
          )}
        </div>

        <div
          className={`lyrics ${showChords ? 'with-chords' : 'without-chords'}`}
          style={{
            '--lyrics-font-size': `${fontSize}rem`,
            '--chord-font-size': `${chordSize}rem`
          }}
        >
          {song.lyrics.split('\n').map((line, lineIdx) => {
            const cleanLine = line.trim()

            if (cleanLine === '') {
              return <div key={lineIdx} className="lyric-spacer"></div>
            }

            if (isSectionTitle(cleanLine)) {
              return (
                <div key={lineIdx} className="section-title">
                  {cleanLine}
                </div>
              )
            }

            const parts = parseLyricsLine(line, transpose, chordNotation)

            return (
              <div key={lineIdx} className="chord-line-container">
                {parts.map((part, partIdx) => (
                  <div
                    key={partIdx}
                    className={part.isSpace ? 'space-group' : 'word-group'}
                  >
                    {!part.isSpace && showChords && (
                      <span className={`chord-label ${!part.chord ? 'empty-chord' : ''}`}>
                        {part.chord || ''}
                      </span>
                    )}

                    {!part.isSpace && (
                      <span className="lyric-text">
                        {part.text || ' '}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
function SettingsPage({ settings, updateSettings }) {
  const fontPercent = Math.round((settings.fontSize / DEFAULT_SETTINGS.fontSize) * 100)
  const chordPercent = Math.round((settings.chordSize / DEFAULT_SETTINGS.chordSize) * 100)
  const wakeLockSupported = typeof navigator !== 'undefined' && 'wakeLock' in navigator

  return (
    <>
      <div className="header">
        <h1>Ajustes</h1>
        <Settings size={24} color="var(--accent)" />
      </div>

      <div className="main-content">
      <div className="settings-card">
  <h2>Apariencia</h2>

  <p className="settings-muted">
    Elige cómo quieres visualizar el himnario.
  </p>

  <div className="theme-options">
    <button
      className={`theme-option ${settings.theme === 'dark' ? 'active' : ''}`}
      onClick={() => updateSettings({ theme: 'dark' })}
    >
      <span className="theme-preview dark-preview"></span>
      <strong>Oscuro</strong>
    </button>

    <button
      className={`theme-option ${settings.theme === 'light' ? 'active' : ''}`}
      onClick={() => updateSettings({ theme: 'light' })}
    >
      <span className="theme-preview light-preview"></span>
      <strong>Claro</strong>
    </button>
  </div>
</div>
<div className="settings-card">
  <h2>Escala de acordes</h2>

  <p className="settings-muted">
    Elige cómo quieres visualizar las notas musicales.
  </p>

  <div className="notation-options">
    <button
      className={`notation-option ${settings.chordNotation === 'spanish' ? 'active' : ''}`}
      onClick={() => updateSettings({ chordNotation: 'spanish' })}
    >
      <strong>Española</strong>
      <span>Do · Re · Mi · Fa · Sol · La · Si</span>
    </button>

    <button
      className={`notation-option ${settings.chordNotation === 'english' ? 'active' : ''}`}
      onClick={() => updateSettings({ chordNotation: 'english' })}
    >
      <strong>Inglesa</strong>
      <span>C · D · E · F · G · A · B</span>
    </button>
  </div>
</div>
        <div className="settings-card">
          <h2>Tamaño de letra</h2>

          <div className="setting-group">
            <div className="setting-label-row">
              <label>Letra de la alabanza</label>
              <span>{fontPercent}%</span>
            </div>

            <input
              className="setting-range"
              type="range"
              min="0.85"
              max="1.8"
              step="0.05"
              value={settings.fontSize}
              onChange={(e) => updateSettings({ fontSize: Number(e.target.value) })}
            />

            <div
              className="settings-preview"
              style={{ '--preview-font-size': `${settings.fontSize}rem` }}
            >
              <p className="preview-title">Vista previa de letra</p>
              <p className="preview-lyrics-text">
                Firmes y adelante, huestes de la fe
              </p>
            </div>
          </div>
        </div>

        <div className="settings-card">
          <h2>Tamaño de acordes</h2>

          <div className="setting-group">
            <div className="setting-label-row">
              <label>Acordes sobre la letra</label>
              <span>{chordPercent}%</span>
            </div>

            <input
              className="setting-range"
              type="range"
              min="0.75"
              max="1.5"
              step="0.05"
              value={settings.chordSize}
              onChange={(e) => updateSettings({ chordSize: Number(e.target.value) })}
            />

            <div
              className="settings-preview chord-preview"
              style={{
                '--preview-font-size': `${settings.fontSize}rem`,
                '--preview-chord-size': `${settings.chordSize}rem`
              }}
            >
              <p className="preview-title">Vista previa de acordes</p>

              <div className="preview-chord-line">
                <span className="preview-word">
                  <span className="preview-chord">Do</span>
                  <span className="preview-text">Firmes</span>
                </span>

                <span className="preview-space"></span>

                <span className="preview-word">
                  <span className="preview-chord empty-preview-chord">.</span>
                  <span className="preview-text">y</span>
                </span>

                <span className="preview-space"></span>

                <span className="preview-word">
                  <span className="preview-chord">Sol</span>
                  <span className="preview-text">adelante</span>
                </span>
              </div>
            </div>
          </div>

          <button
            className="btn"
            style={{ marginTop: '1rem' }}
            onClick={() => updateSettings({
              fontSize: DEFAULT_SETTINGS.fontSize,
              chordSize: DEFAULT_SETTINGS.chordSize
            })}
          >
            Restablecer tamaños
          </button>
        </div>

        <div className="settings-card">
          <h2>Lectura</h2>

          <div className="toggle-row">
            <div>
              <strong>Mantener pantalla activa</strong>
              <p>
                Evita que la pantalla se bloquee mientras estás leyendo una alabanza.
              </p>

              {!wakeLockSupported && (
                <p className="settings-warning">
                  Tu navegador puede no permitir esta función.
                </p>
              )}
            </div>

            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.keepAwake}
                onChange={(e) => updateSettings({ keepAwake: e.target.checked })}
              />
              <span></span>
            </label>
          </div>
        </div>

        <div className="settings-card">
          <h2>Contacto</h2>

          <p>
            Para sugerencias, correcciones de letra, errores en acordes o fallas de la aplicación,
            puedes escribir al correo:
          </p>

          <a className="contact-link" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="settings-card">
          <h2>Acerca de</h2>

          <div className="about-row">
            <span>Aplicación</span>
            <strong>Himnario Digital IPREC</strong>
          </div>

          <div className="about-row">
            <span>Versión</span>
            <strong>{APP_VERSION}</strong>
          </div>

          <div className="about-row">
            <span>Contenido</span>
            <strong>Himnos, coritos y especiales</strong>
          </div>

          <p className="settings-muted">
            Aplicación creada para apoyar la lectura, búsqueda y acompañamiento musical
            de alabanzas congregacionales.
          </p>
        </div>

        <div className="developer-watermark">
          Desarrollada por {DEVELOPER_NAME}
        </div>
      </div>
    </>
  )
}

function App() {
  const [favorites, toggleFavorite] = useFavorites()
  const [settings, updateSettings] = useAppSettings()

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', settings.theme)
  }, [settings.theme])

  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={<SongList title="Himnario IPREC" filterType="all" />}
          />

          <Route
            path="/favoritos"
            element={
              <SongList
                title="Mis Favoritos"
                filterType="favorites"
                favoritesList={favorites}
              />
            }
          />

          <Route
            path="/especiales"
            element={<SongList title="Coros Especiales" filterType="specials" />}
          />

          <Route
            path="/ajustes"
            element={
              <SettingsPage
                settings={settings}
                updateSettings={updateSettings}
              />
            }
          />

          <Route
            path="/song/:id"
            element={
              <SongViewer
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                settings={settings}
              />
            }
          />
        </Routes>

        <BottomNav />
      </div>
    </BrowserRouter>
  )
}

export default App