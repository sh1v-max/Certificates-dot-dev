// You do not need to focus on and modify the content of this file

export function renderTrackMetadata (htmlStr) {
  document.querySelector('#trackMetadata').innerHTML = htmlStr
}

export function renderPlaylist (playlist) {
  const container = document.querySelector('#playlistTracks')
  playlist.forEach((item) => {
    const el = document.createElement('li')
    el.textContent = item
    container.appendChild(el)
  })
}

export function renderAudioEffects (effects) {
  const reverbEl = document.querySelector('#reverb')
  const delayEl = document.querySelector('#delay')
  const chorusEl = document.querySelector('#chorus')
  reverbEl.value = effects.reverb
  delayEl.value = effects.delay
  chorusEl.value = effects.chorus
}

export function renderMixParameters (params) {
  const volumeEl = document.querySelector('#volume')
  const panEl = document.querySelector('#pan')
  volumeEl.value = params.volume
  panEl.value = params.pan
}


export function renderInstrumentTuning (value) {
  const tunerEl = document.querySelector('#tuner')
  tunerEl.textContent = value
}
