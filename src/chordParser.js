const SPANISH_SHARP_NOTES = ['Do', 'Do#', 'Re', 'Re#', 'Mi', 'Fa', 'Fa#', 'Sol', 'Sol#', 'La', 'La#', 'Si']
const SPANISH_FLAT_NOTES = ['Do', 'Reb', 'Re', 'Mib', 'Mi', 'Fa', 'Solb', 'Sol', 'Lab', 'La', 'Sib', 'Si']

const ENGLISH_SHARP_NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const ENGLISH_FLAT_NOTES = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B']

const NOTE_INDEX = {
  Do: 0,
  'Do#': 1,
  Reb: 1,
  Re: 2,
  'Re#': 3,
  Mib: 3,
  Mi: 4,
  Fa: 5,
  'Fa#': 6,
  Solb: 6,
  Sol: 7,
  'Sol#': 8,
  Lab: 8,
  La: 9,
  'La#': 10,
  Sib: 10,
  Si: 11,

  C: 0,
  'C#': 1,
  Db: 1,
  D: 2,
  'D#': 3,
  Eb: 3,
  E: 4,
  F: 5,
  'F#': 6,
  Gb: 6,
  G: 7,
  'G#': 8,
  Ab: 8,
  A: 9,
  'A#': 10,
  Bb: 10,
  B: 11
}

const POSSIBLE_ROOTS = [
  'Sol#', 'Solb',
  'Do#', 'Reb',
  'Re#', 'Mib',
  'Fa#', 'Sol',
  'Lab',
  'La#', 'Sib',
  'Do', 'Re', 'Mi', 'Fa', 'La', 'Si',

  'C#', 'Db',
  'D#', 'Eb',
  'F#', 'Gb',
  'G#', 'Ab',
  'A#', 'Bb',
  'C', 'D', 'E', 'F', 'G', 'A', 'B'
]

function prefersFlat(root) {
  return root.includes('b')
}

function getScale(notation, useFlats) {
  if (notation === 'english') {
    return useFlats ? ENGLISH_FLAT_NOTES : ENGLISH_SHARP_NOTES
  }

  return useFlats ? SPANISH_FLAT_NOTES : SPANISH_SHARP_NOTES
}

function transposeSingleChord(chord, amount = 0, notation = 'spanish') {
  if (!chord) return ''

  if (chord.includes('/')) {
    return chord
      .split('/')
      .map(part => transposeSingleChord(part, amount, notation))
      .join('/')
  }

  const root = POSSIBLE_ROOTS.find(note => chord.startsWith(note))

  if (!root) return chord

  const suffix = chord.slice(root.length)
  const currentIndex = NOTE_INDEX[root]

  if (currentIndex === undefined) return chord

  let newIndex = (currentIndex + amount) % 12

  if (newIndex < 0) {
    newIndex += 12
  }

  const noteScale = getScale(notation, prefersFlat(root))

  return noteScale[newIndex] + suffix
}

export function parseLyricsLine(line, transpose = 0, notation = 'spanish') {
  const parts = []
  let pendingChord = ''
  let lastIndex = 0

  const chordRegex = /\[([^\]]+)\]/g
  let match

  function addText(text) {
    if (text === '') return

    const tokens = text.match(/\s+|\S+/g) || []

    tokens.forEach(token => {
      if (/^\s+$/.test(token)) {
        parts.push({
          chord: '',
          text: token,
          isSpace: true
        })
        return
      }

      parts.push({
        chord: pendingChord,
        text: token,
        isSpace: false
      })

      pendingChord = ''
    })
  }

  while ((match = chordRegex.exec(line)) !== null) {
    const textBeforeChord = line.slice(lastIndex, match.index)

    addText(textBeforeChord)

    pendingChord = transposeSingleChord(match[1].trim(), transpose, notation)
    lastIndex = chordRegex.lastIndex
  }

  const remainingText = line.slice(lastIndex)
  addText(remainingText)

  if (pendingChord) {
    parts.push({
      chord: pendingChord,
      text: '',
      isSpace: false
    })
  }

  return parts
}