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

const minusOrNotArray = ['', '-']
const yxzArray = ['Y', 'X', 'Z']
let zAxisValue = 0
const mainScreenElement = document.getElementById('mainScreen')
let rect, rectLeftQuarter = 0
let freqValues = [lowFreqValue, midFreqValue, midHighFreqValue]

function shapeMover(shape) {
    // this function moves and randomizes some 
    // of the parameters for each shape
    rect = mainScreenElement.getBoundingClientRect();
    rectLeftQuarter = rect.right * 0.25

    if (mouseDown === true) {
        shape.style.transform = `rotate(0deg)
                                 scale(1)
                                 translate3d(${mouseX}px,${mouseY}px,0px)`
        shape.style.filter = `blur(0px)
                              drop-shadow(${String(freqValues[getRndInt(0,freqValues.length)])}px ${String(freqValues[getRndInt(0,freqValues.length)])}px ${String(freqValues[getRndInt(0,freqValues.length)])}px white)`
        // blurValue = 0
    }
    if (mouseDown === false) {
        zAxisValue = `${minusOrNotArray[getRndInt(0,1)]}${getRndInt(0,rect.bottom*0.2)}`
        shape.style.transform = `rotate(${getRndInt(0,360)}deg)
                                perspective(${getRndInt(0,100)}px)
                                translate3d(${minusOrNotArray[getRndInt(0,1)]}${getRndInt(rectLeftQuarter,rect.right)}px,${minusOrNotArray[getRndInt(0,1)]}${getRndInt(rect.bottom,rect.top)}px, ${zAxisValue}px)
                                scale(${midFreqValue*0.05})
                               `
        setShapeFilter(shape)
        // blurValue = 0
    }
}

function setShapeFilter(shape) {
    shape.style.filter = `blur(${Math.abs(zAxisValue*0.5)}px)
                              drop-shadow(${String(freqValues[getRndInt(0,freqValues.length)])}px ${String(freqValues[getRndInt(0,freqValues.length)])}px ${String(freqValues[getRndInt(0,freqValues.length)])}px white)
                              opacity(${lowFreqValue}%) 
                              saturate(${lowFreqValue}%)`
}

shapeMover(shape1)
shapeMover(shape2)
shapeMover(shape3)
shapeMover(shape4)
shapeMover(shape5)

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

    // make sure some time has passed help reduce processing
    if (timestamp != previousTimeStamp) {
        // work out the average value per chunk of audio data 
        // it's split into a rough freuqncy range
        AUDIO.analyser.getByteFrequencyData(AUDIO.dataArray)
        
        lowFreqValue = AUDIO.dataArray.slice(3, 6).reduce((partialSum, a) => partialSum + a, 0) / 4
        midFreqValue = AUDIO.dataArray.slice(200, 400).reduce((partialSum, a) => partialSum + a, 0) / 200
        midHighFreqValue = AUDIO.dataArray.slice(500, 600).reduce((partialSum, a) => partialSum + a, 0) / 200
        
        for (var i = 0; i < shapes.length; i++) {
            setShapeFilter(shapes[i])
            shapes[i].style.transition = `all ${(lowFreqValue * getRndInt(0,7)) * 0.01}s`
        }
        
        // when there's low frequencies thumps trigger shape moves
        if (lowFreqValue > 10 && counter1 > 20) {
            shapeMover(shape1)
            counter1 = 0
        }
        if (lowFreqValue > 20 && counter2 > 30) {
            shapeMover(shape2)
            counter2 = 0
        }
        if (lowFreqValue > 30 && counter3 > 10) {
            shapeMover(shape3)
            counter3 = 0
        }
        if (lowFreqValue > 30 && counter4 > 15) {
            shapeMover(shape4)
            shapeMover(shape5)
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