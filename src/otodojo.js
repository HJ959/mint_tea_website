import './main.css'
import './otodojo.css'
import {
    Howl,
    Howler
} from 'howler';

// play the example track
var sound = new Howl({
    src: ['media/Otodojo_Tracks/Otodojo & Jason ddb - One Way Or Another (premaster).mp3'],
    html5: true
});

sound.play();

// random int function
function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const shape1 = document.getElementById('shape1')
const shape2 = document.getElementById('shape2')
const shape3 = document.getElementById('shape3')
const shape4 = document.getElementById('shape4')
let start, previousTimeStamp
let targetX = 0
let targetY = 0
let valuesReset = false

let screenWidth = window.innerWidth
let screenHeight = window.innerHeight

// for abit until I have the tracks RMS use prime numbers to drive the step
const primeNumbers = [13, 15, 16, 21]
let primeNumber = primeNumbers[getRndInt(0, primeNumbers.length - 1)]
let primeNumber2 = primeNumbers[getRndInt(0, primeNumbers.length - 1)]
let primeNumber3 = primeNumbers[getRndInt(0, primeNumbers.length - 1)]
let primeNumber4 = primeNumbers[getRndInt(0, primeNumbers.length - 1)]

// for generating biased random numbers for the blur
const blurValues = {
    '0': 0,
    '-1': 1,
    '-2': 2,
    '-3': 4,
    '-4': 8,
    '-5': 16,
    '-6': 32
}
const blurValuesLength = Object.keys(blurValues).length
let blurValue = 0

function shapeMover(shape) {
    // this function moves and randomizes some 
    // of the parameters for each shape
    blurValue = getRndInt(0, blurValuesLength - 1)
    shape.style.filter = `blur(${blurValues[`-${blurValue}`]}px)`
    let screenWidth = screen.width
    let screenHeight = screen.height
    shape.style.transform = `translateX(${getRndInt(0, screenWidth * 0.66)}px) 
                             translateY(${getRndInt(0, screenHeight)}px)
                             rotate(${getRndInt(0, screenWidth * 0.77)}deg)`
    shape.style.zIndex = `-${blurValue}`
}

// main animation function
function step(timestamp) {
    if (start === undefined) {
        start = timestamp
    }

    const elapsed = timestamp - start

    if (timestamp != previousTimeStamp) {
        if (parseInt(elapsed) % primeNumber === 0) {
            shapeMover(shape1)
        }
        if (parseInt(elapsed) % primeNumber2 === 0) {
            shapeMover(shape2)
        }
        if (parseInt(elapsed) % primeNumber3 === 0) {
            shapeMover(shape3)
        }
        if (parseInt(elapsed) % primeNumber4 === 0) {
            shapeMover(shape4)
        }
    }

    previousTimeStamp = timestamp
    window.requestAnimationFrame(step)

}

window.requestAnimationFrame(step)