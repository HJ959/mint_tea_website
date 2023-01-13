import './main.css'
import './otodojo.css'
import * as AUDIO from './otodojoAudio.js'

// if window resize we want to change the scope of the image positions
let rect, rectLeftQuarter = 0
const mainScreenElement = document.getElementById('mainScreen')
rect = mainScreenElement.getBoundingClientRect()
rectLeftQuarter = rect.right * 0.25
console.log(rect, rectLeftQuarter)
function updateImageZone() {
    rect = mainScreenElement.getBoundingClientRect()
    rectLeftQuarter = rect.right * 0.25
}
window.addEventListener("resize", updateImageZone)

// track mouse clicks
let mouseX, mouseY = 0
let mouseDown = false
window.addEventListener('pointerdown', logKeyDown)

function logKeyDown(e) {
    mouseDown = true
}
window.addEventListener('pointerup', logKeyUp)

function logKeyUp(e) {
    mouseDown = false
}
window.addEventListener('pointermove', logKey)

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
let freqValue0to100 = 0
let freqValue200to400 = 0
let freqValue600to800 = 0
let freqValue1000to1200 = 0
let freqValue2000to5000 = 0
let freqValues = [freqValue0to100, freqValue200to400, freqValue600to800, freqValue1000to1200, freqValue2000to5000]
let highestValue = 25
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

        // var rms = 0
        // for (var i = 0; i < AUDIO.dataArray.length; i++) {
        //     rms += AUDIO.dataArray[i] * AUDIO.dataArray[i]
        // }
        // rms /= AUDIO.dataArray.length
        // freqValue0to100 = map(Math.sqrt(rms), [0,highestValue], [0,255])

        if (freqValue0to100 > highestValue) {
            highestValue = freqValue0to100
        }
    
        // fft size is 4096 so I think 20,000Hz is across half that range?
        freqValue0to100 = AUDIO.dataArray.slice(0, 10).reduce((partialSum, a) => partialSum + a, 0) * 0.1
        freqValue200to400 = AUDIO.dataArray.slice(100, 200).reduce((partialSum, a) => partialSum + a, 0) * 0.01
        freqValue600to800 = AUDIO.dataArray.slice(600, 700).reduce((partialSum, a) => partialSum + a, 0) * 0.01
        freqValue1000to1200 = AUDIO.dataArray.slice(900, 1000).reduce((partialSum, a) => partialSum + a, 0) * 0.01
        freqValue2000to5000 = AUDIO.dataArray.slice(1200, 1300).reduce((partialSum, a) => partialSum + a, 0) * 0.01
        freqValues = [freqValue0to100, freqValue200to400, freqValue600to800, freqValue1000to1200, freqValue2000to5000]
        for (var i = 0; i < shapes.length; i++) {
            shapes[i].style.filter = `drop-shadow(${freqValue0to100}px ${freqValue0to100}px ${freqValue200to400}px white)
                                      opacity(${freqValues[i]}%) 
                                      saturate(${freqValues[i]*0.5}%)
                                      blur(${Math.abs(highestValue-freqValue0to100)}px)`
        }
        for (var i = 0; i < shapes.length; i++) {
            if (mouseDown === true) {
                shapes[i].style.transform = `rotate(0deg)
                                             scale(1)
                                             translate3d(${mouseX}px,${mouseY}px,0px)`
                shapes[i].style.filter = `blur(0px)
                                          opacity(${freqValues[i]}%) 
                                          saturate(${freqValues[i]*0.5}%)
                                          drop-shadow(${freqValue0to100}px ${freqValue200to400}px ${freqValue0to100}px white)`
            }
        }
        
        if (counter1 > 2 && freqValue0to100 > highestValue *0.95) {
            for (var i = 0; i < shapes.length; i++) {
                if (mouseDown === false) {
                    shapes[i].style.transform = `rotate(${freqValue0to100 % 360}deg)
                                                 scale(${freqValue0to100*0.01})
                                                 translate3d(${minusOrNotArray[getRndInt(0,1)]}${getRndInt(0,rect.right)}px,${minusOrNotArray[getRndInt(0,1)]}${getRndInt(0,rect.right)}px,0px)`
                    counter1 = 0
                }
            }
        }
    }
    counter1++
    previousTimeStamp = timestamp
    window.requestAnimationFrame(step)
}

window.requestAnimationFrame(step)