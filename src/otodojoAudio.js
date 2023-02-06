// use the web API to play and analyse the tracks

// create the audio context 

// for legacy browsers
export const AudioContext = window.AudioContext || window.webkitAudioContext

export const audioContext = new AudioContext()

// get the audio element
export const audioElement = document.getElementById("parsingAPath")

// pass it into the audio context
export let track = audioContext.createMediaElementSource(audioElement)

// create the analyser node
export const analyser = new AnalyserNode(audioContext)
analyser.fftSize = 4096
analyser.smoothingTimeConstant = 0.3

// low pass filter
const lowPassFilter = new BiquadFilterNode(audioContext)
lowPassFilter.frequency.value = 20
lowPassFilter.type = 'lowpass'

export const bufferLength = analyser.frequencyBinCount
export const dataArray = new Uint8Array(bufferLength)
analyser.getByteTimeDomainData(dataArray)

// connect to the output
// track.connect(lowPassFilter)
track.connect(analyser).connect(audioContext.destination)

// follow this 
// https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode

// Select our play button
export const playButton = document.getElementById("playPause")
export const UXInstruction = document.getElementById("UXInstruction")

function togglePlay() {
    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
        audioContext.resume()
    }

    // Play or pause track depending on state
    if (playButton.dataset.playing === "false") {
        audioElement.play()
        playButton.dataset.playing = "true"
        UXInstruction.style.filter = `blur(100px)`
    } else if (playButton.dataset.playing === "true") {
        audioElement.pause()
        playButton.dataset.playing = "false"
        UXInstruction.style.filter = `blur(0px)`
    }
}

// event = keyup or keydown
window.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        // play pause
        togglePlay()
    }
})

audioElement.addEventListener(
    "ended",
    () => {
        playButton.dataset.playing = "false"
    },
    false
)

// if the user leaves the tab and it becomes inactive stop playing sound and video
window.addEventListener("visibilitychange", event => {
    if (document.visibilityState != "visible") {
        audioElement.pause()
    }
})

// taken from https://stackoverflow.com/questions/2264072/detect-a-finger-swipe-through-javascript-on-the-iphone-and-android
let touchstartY = 0;
let touchendY = 0;

const slider = document.getElementById('mainScreen');

function handleGesture() {
  if (touchendY + 200 < touchstartY) {
    togglePlay();
  }
}

slider.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenY;
})

slider.addEventListener('touchend', e => {
  touchendY = e.changedTouches[0].screenY;
  handleGesture();
})