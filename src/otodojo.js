import './main.css'
import './otodojo.css'
import * as AUDIO from './otodojoAudio.js'

// if window resize we want to change the scope of the image positions
let rect, rectLeftQuarter = 0
const mainScreenElement = document.getElementById('mainScreen')
rect = mainScreenElement.getBoundingClientRect()
rectLeftQuarter = rect.right * 0.25

function updateImageZone() {
    rect = mainScreenElement.getBoundingClientRect()
    rectLeftQuarter = rect.right * 0.25
    console.log(rect)
}
document.addEventListener("resize", updateImageZone)

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
document.getRndInt = getRndInt

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
    element.src = `/media/shapes/shape${getRndInt(1,13)}.png`
}
document.shuffleShape = shuffleShape

shuffleShape(shape1)
shuffleShape(shape2)
shuffleShape(shape3)
shuffleShape(shape4)
shuffleShape(shape5)

const minusOrNotArray = ['', '-']
let zAxisValue = 0

let start, previousTimeStamp
let counter1 = 0
let previousLowFreqValue = 0
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

        var lowFreqValue = AUDIO.dataArray.slice(3, 6).reduce((partialSum, a) => partialSum + a, 0) / 4
        var midFreqValue = AUDIO.dataArray.slice(200, 400).reduce((partialSum, a) => partialSum + a, 0) / 200

        if (lowFreqValue > previousLowFreqValue) previousLowFreqValue = lowFreqValue
        
        for (var i = 0; i < shapes.length; i++) {
            shapes[i].style.filter = `drop-shadow(${lowFreqValue}px ${lowFreqValue}px ${midFreqValue}px white)
                                      opacity(${lowFreqValue}%) 
                                      saturate(${lowFreqValue}%)
                                      blur(${100-map(lowFreqValue, [0,previousLowFreqValue], [0,100])}px)`
        }

        // when there's low frequencies thumps trigger shape moves
        if (counter1 > 15 && lowFreqValue > 50) {
            for (var i = 0; i < shapes.length; i++) {
                // this function moves and randomizes some 
                // of the parameters for each shape
                if (mouseDown === true) {
                    shapes[i].style.transform = `rotate(0deg)
                                 scale(1)
                                 translate3d(${mouseX}px,${mouseY}px,0px)`
                    shapes[i].style.filter = `blur(0px)
                              drop-shadow(${lowFreqValue}rem ${midFreqValue}rem ${lowFreqValue}rem white)`
                }
                if (mouseDown === false) {
                    zAxisValue = `${minusOrNotArray[getRndInt(0,1)]}${getRndInt(0,rect.bottom*0.2)}`
                    shapes[i].style.transform = `rotate(${getRndInt(0,10)}deg)
                                 perspective(${getRndInt(0,50)}px)
                                 translate3d(${minusOrNotArray[getRndInt(0,1)]}${getRndInt(rectLeftQuarter,rect.right)}px,${minusOrNotArray[getRndInt(0,1)]}${getRndInt(rect.bottom,rect.top)}px, ${zAxisValue}px)
                                 scale(${midFreqValue*0.05})`
                }
                counter1 = 0
            }
        }
        counter1++
    }
    previousTimeStamp = timestamp
    window.requestAnimationFrame(step)
}

window.requestAnimationFrame(step)