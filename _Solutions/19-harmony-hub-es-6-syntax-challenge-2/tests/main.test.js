import { describe, it, expect } from 'vitest'
import {
  formatTrackMetadata,
  createPlaylist,
  mergeAudioEffects,
  assignMixParameters,
  checkInstrumentTuning
} from '../src/main'

describe('formatTrackMetadata', () => {
  it('should correctly format track metadata', () => {
    const result = formatTrackMetadata('Test Title', 'Test Artist', 'Pop', 'Rock')
    expect(result).toContain('<div class="track-title">Test Title</div>')
    expect(result).toContain('<div class="track-artist">Test Artist</div>')
    expect(result).toContain('<div class="track-genres">Pop,Rock</div>')
  })
})

describe('createPlaylist', () => {
  it('should correctly create a playlist', () => {
    const existingPlaylist = [
      'Song1',
      'Song2'
    ]
    const newTracks = [
      'Song3',
      'Song4'
    ]
    const result = createPlaylist(existingPlaylist, ...newTracks)
    expect(result).toEqual([
      'Song1',
      'Song2',
      'Song3',
      'Song4'
    ])
  })
})

describe('mergeAudioEffects', () => {
  it('should correctly merge audio effects', () => {
    const defaultEffects = { 'reverb': 0.5,
      'delay': 0.3 }
    const customEffects = { 'delay': 0.5,
      'distortion': 0.2 }
    const result = mergeAudioEffects(defaultEffects, customEffects)
    expect(result).toEqual({ 'reverb': 0.5,
      'delay': 0.5,
      'distortion': 0.2 })
  })
})

describe('assignMixParameters', () => {
  it('should correctly assign mix parameters', () => {
    const mixParams = { 'volume': 0.8,
      'pan': -0.2 }
    const result = assignMixParameters(mixParams)
    expect(result).toEqual({ 'volume': 0.8,
      'pan': -0.2,
      'isMuted': false })
  })
})

describe('checkInstrumentTuning', () => {
  it('should return the correct tuning frequency', () => {
    const tuningObject = { 'violin': 442,
      'piano': 440 }
    expect(checkInstrumentTuning(tuningObject, 'violin')).toBe(442)
    expect(checkInstrumentTuning(tuningObject, 'piano')).toBe(440)
    expect(checkInstrumentTuning(tuningObject, 'guitar')).toBe(440) // default value
  })
})
