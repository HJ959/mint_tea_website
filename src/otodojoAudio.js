// use the web API to play and analyse the tracks

// create the audio context 

// for legacy browsers
export const AudioContext = window.AudioContext || window.webkitAudioContext

export const audioContext = new AudioContext()

// get the audio element
const audioElement = document.getElementById("parsingAPath")

// pass it into the audio context
export let track = audioContext.createMediaElementSource(audioElement)

// function nextTrack() {
//     track.close()
//     audioElement.setAttribute('src', 'media/Otodojo_Tracks/Otodojo & Jason ddb - One Way Or Another (premaster).mp3')
//     track = audioContext.createMediaElementSource(audioElement)
// }
// window.nextTrack = nextTrack

// create the analyser node
export const analyser = new AnalyserNode(audioContext)
analyser.fftSize = 16384
analyser.smoothingTimeConstant = 0.9

export const bufferLength = analyser.frequencyBinCount
export const dataArray = new Uint8Array(bufferLength)
analyser.getByteTimeDomainData(dataArray)

// connect to the output
track.connect(analyser).connect(audioContext.destination)

// follow this 
// https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode

// Select our play button
const playButton = document.getElementById("playPause")

function togglePlay() {
    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
        audioContext.resume()
    }

    // Play or pause track depending on state
    if (playButton.dataset.playing === "false") {
        audioElement.play()
        playButton.dataset.playing = "true"
    } else if (playButton.dataset.playing === "true") {
        audioElement.pause()
        playButton.dataset.playing = "false"
    }
}

// event = keyup or keydown
document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        // play pause
        togglePlay()
    }
})

playButton.addEventListener(
    "click",
    () => {
        togglePlay()
    },
    false
)

audioElement.addEventListener(
    "ended",
    () => {
        playButton.dataset.playing = "false"
    },
    false
)