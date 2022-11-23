import './main.css'
import './otodojo.css'
import * as AUDIO from './otodojoAudio.js'

// track mouse clicks
let mouseX, mouseY = 0
let mouseDown = false
document.addEventListener('pointerdown', logKeyDown)
function logKeyDown(e) {
  mouseDown = true
}
document.addEventListener('pointerup', logKeyUp)
function logKeyUp(e) {
  mouseDown = false
}
document.addEventListener('pointermove', logKey)
function logKey(e) {
  mouseX = e.clientX - 100
  mouseY = e.clientY - 100
  if (mouseX < 0) mouseX = 0
  if (mouseY < 0) mouseY = 0
}
// random int function
function getRndInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
window.getRndInt = getRndInt

function map(value, oldRange, newRange) {
    var newValue = (value - oldRange[0]) * (newRange[1] - newRange[0]) / (oldRange[1] - oldRange[0]) + newRange[0]
    return Math.min(Math.max(newValue, newRange[0]), newRange[1])
}

const shape1 = document.getElementById('shape1')
const shape2 = document.getElementById('shape2')
const shape3 = document.getElementById('shape3')
const shape4 = document.getElementById('shape4')
const shape5 = document.getElementById('shape5')
const shapes = [shape1, shape2, shape3, shape4, shape5]

function shuffleShape(element) {
    element.src = `/media/shapes/shape${getRndInt(1,20)}.png`
}
window.shuffleShape = shuffleShape

shuffleShape(shape1)
shuffleShape(shape2)
shuffleShape(shape3)
shuffleShape(shape4)
shuffleShape(shape5)

let lowFreqValue = 0
let midFreqValue = 0
let midHighFreqValue = 0
let highFreqValue = 0
let blurValue = 120
const minusOrNotArray = ['', '-']
const yxzArray = ['Y', 'X', 'Z']
let firstShapeMove = true

function shapeMover(shape, lowFreqValue, midFreqValue, midHighFreqValue) {
    // this function moves and randomizes some 
    // of the parameters for each shape

    const freqValues = [lowFreqValue, midFreqValue, midHighFreqValue]
    let screenWidth = window.innerWidth
    let screenHeight = window.innerHeight
    let quarterScreenWidth = screenWidth * 0.25
    let quarterScreenHeight = screenHeight * 0.25

    if (mouseDown === true) {
        shape.style.transform = `rotate(0deg)
                                 translate3d(${mouseX}px, ${mouseY}px, ${mouseX / mouseY}px)
                                 perspective(${mouseX / mouseY}px)
                                `
        shape.style.filter = `blur(0px)
                              drop-shadow(${String(freqValues[getRndInt(0,freqValues.length)])}px ${String(freqValues[getRndInt(0,freqValues.length)])}px ${String(freqValues[getRndInt(0,freqValues.length)])}px white)`
        blurValue = 0
    }
    if (mouseDown === false) {
        shape.style.transform = `rotate${yxzArray[getRndInt(0,2)]}(${map(freqValues[getRndInt(0,freqValues.length)], [0,255], [0,720])}deg)
                                 translate3d(${minusOrNotArray[getRndInt(0,1)]}${getRndInt(quarterScreenWidth, screenWidth)}px, ${minusOrNotArray[getRndInt(0,1)]}${getRndInt(quarterScreenHeight, screenHeight)}px, 0px)
                                 perspective(100px)
                                `
        shape.style.filter = `blur(0px)
                              drop-shadow(${String(freqValues[getRndInt(0,freqValues.length)])}px ${String(freqValues[getRndInt(0,freqValues.length)])}px ${String(freqValues[getRndInt(0,freqValues.length)])}px white)`
        blurValue = 0
    }
}

shapeMover(shape1, lowFreqValue, midFreqValue, midHighFreqValue)
shapeMover(shape2, lowFreqValue, midFreqValue, midHighFreqValue)
shapeMover(shape3, lowFreqValue, midFreqValue, midHighFreqValue)
shapeMover(shape4, lowFreqValue, midFreqValue, midHighFreqValue)
shapeMover(shape5, lowFreqValue, midFreqValue, midHighFreqValue)
firstShapeMove = false

let start, previousTimeStamp
let counter1 = 0,
    counter2 = 0,
    counter3 = 0,
    counter4 = 0

// main animation function
function step(timestamp) {
    if (start === undefined) {
        start = timestamp
    }

    const elapsed = timestamp - start

    AUDIO.analyser.getByteFrequencyData(AUDIO.dataArray)

    // work out the average value per chunk of audio data 
    // it's split into a rough freuqncy range
    lowFreqValue = AUDIO.dataArray.slice(3, 6).reduce((partialSum, a) => partialSum + a, 0) / 4
    midFreqValue = AUDIO.dataArray.slice(200, 400).reduce((partialSum, a) => partialSum + a, 0) / 200
    midHighFreqValue = AUDIO.dataArray.slice(500, 600).reduce((partialSum, a) => partialSum + a, 0) / 200
    highFreqValue = AUDIO.dataArray.slice(700, 1200).reduce((partialSum, a) => partialSum + a, 0) / 600

    // slowly blur to a set value when low freqencies not being triggered
    for (var i = 0; i < shapes.length; i++) {
        shapes[i].style.filter = `blur(${String(blurValue)}px)`
    }
    if (blurValue === 0) blurValue = 1
    if (blurValue < 500) blurValue = blurValue * 1.1

    if (midFreqValue > 50) {
        shape1.style.filter = 'opacity(90%)'
        shape3.style.filter = 'opacity(90%)'
    } else {
        shape1.style.filter = `opacity(${midFreqValue}%) saturate(${midFreqValue}%)`
        shape1.style.transition = `${(midFreqValue * getRndInt(0,15)) * 0.01}s`
        shape3.style.filter = `opacity(${midFreqValue}%) saturate(${midFreqValue}%)`
        shape3.style.transition = `${(midFreqValue * getRndInt(0,15)) * 0.01}s`
        
    }

    if (midHighFreqValue > 50) {
        shape2.style.filter = 'opacity(90%)'
        shape5.style.filter = 'opacity(90%)'
    } else {
        shape2.style.filter = `opacity(${midHighFreqValue}%) saturate(${midHighFreqValue}%)`
        shape2.style.transition = `${(midHighFreqValue * getRndInt(0,15)) * 0.01}s`
        shape5.style.filter = `opacity(${midHighFreqValue}%) saturate(${midHighFreqValue}%)`
        shape5.style.transition = `${(midHighFreqValue * getRndInt(0,15)) * 0.01}s`
    }

    if (highFreqValue > 50) {
        shape4.style.filter = 'opacity(90%)'
    } else {
        shape4.style.filter = `opacity(${highFreqValue}%) invert(${highFreqValue}%)`
        shape4.style.transition = `${(highFreqValue * getRndInt(0,15)) * 0.01}s`
    }

    // when there's low frequencies thumps trigger shape moves
    if (timestamp != previousTimeStamp) {
        if (lowFreqValue > 10 && counter1 > 20) {
            shapeMover(shape1, lowFreqValue, midFreqValue, midHighFreqValue)
            counter1 = 0
        }
        if (midHighFreqValue > 20 && counter2 > 30) {
            shapeMover(shape2, lowFreqValue, midFreqValue, midHighFreqValue)
            counter2 = 0
        }
        if (lowFreqValue > 30 && counter3 > 10) {
            shapeMover(shape3, lowFreqValue, midFreqValue, midHighFreqValue)
            counter3 = 0
        }
        if (lowFreqValue > 30 && counter4 > 15) {
            shapeMover(shape4, lowFreqValue, midFreqValue, midHighFreqValue)
            shapeMover(shape5, lowFreqValue, midFreqValue, midHighFreqValue)
            counter4 = 0
        }
    }

    counter1++
    counter2++
    counter3++
    counter4++
    previousTimeStamp = timestamp
    window.requestAnimationFrame(step)

}

window.requestAnimationFrame(step)