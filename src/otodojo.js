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

shape1.src=`/media/shapes/shape${getRndInt(1,10)}.png`
shape2.src=`/media/shapes/shape${getRndInt(1,10)}.png`
shape3.src=`/media/shapes/shape${getRndInt(1,10)}.png`
shape4.src=`/media/shapes/shape${getRndInt(1,10)}.png`

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
    '-1': 0,
    '-2': 1,
    '-3': 2,
    '-4': 4,
    '-5': 8,
    '-6': 16
}
const blurValuesLength = Object.keys(blurValues).length
let blurValue = 0

function shapeMover(shape) {
    // this function moves and randomizes some 
    // of the parameters for each shape
    // blurValue = getRndInt(0, blurValuesLength - 1)
    shape.style.opacity = `${getRndInt(8,10)*0.1}`
    let screenWidth = screen.width
    let screenHeight = screen.height
    shape.style.transform = `translateX(${getRndInt(0, screenWidth * 0.66)}px) 
                             translateY(${getRndInt(0, screenHeight * 0.5)}px)
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