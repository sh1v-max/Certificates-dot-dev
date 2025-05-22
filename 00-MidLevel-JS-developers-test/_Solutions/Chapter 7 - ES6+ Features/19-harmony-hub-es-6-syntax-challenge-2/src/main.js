import { data } from '../public/data'
import {
  renderTrackMetadata,
  renderPlaylist,
  renderAudioEffects,
  renderMixParameters,
  renderInstrumentTuning
} from './render'

// 1. Track Metadata Formatter
export function formatTrackMetadata (title, artist, ...genres) {
  return `
    <div class="track-title">${title}</div>
    <div class="track-artist">${artist}</div>
    <div class="track-genres">${genres.join(',')}</div>
  `
}

renderTrackMetadata(formatTrackMetadata(data.track.title, data.track.artist, data.track.genres))

// 2. Playlist Creator
export function createPlaylist (existingPlaylist, ...newTracks) {
  return [
    ...existingPlaylist,
    ...newTracks
  ]
}


renderPlaylist(createPlaylist(data.playlist, data.newTracks[0], data.newTracks[1]))


// 3. Audio Effect Merger
export function mergeAudioEffects (defaultEffects, customEffects) {
  return { ...defaultEffects,
    ...customEffects }
}


renderAudioEffects(mergeAudioEffects(data.defaultEffects, data.customEffects))

// 4. Mix Assignment
export function assignMixParameters ({ volume, pan }) {
  return { volume,
    pan,
    'isMuted': false }
}


renderMixParameters(assignMixParameters(data.mixParameters))


// 5. Instrument Tuning Check
export function checkInstrumentTuning (tuningObject, instrumentName) {
  return tuningObject[instrumentName] || 440
}


renderInstrumentTuning(checkInstrumentTuning(data.tuning, 'violin'))
