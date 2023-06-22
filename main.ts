input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    sumando = 1
})
input.onGesture(Gesture.Shake, function () {
    if (sumando == 1) {
        basic.showNumber(num1 + num2)
    }
    if (restando == 1) {
        basic.showNumber(num1 - num2)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    num2 += 1
    if (num2 > 9) {
        num2 = 1
    }
    basic.showNumber(num2)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    restando = 1
})
input.onPinPressed(TouchPin.P1, function () {
    num1 += 1
    if (num1 > 9) {
        num1 = 1
    }
    basic.showNumber(num1)
    restando = 0
    sumando = 0
})
let restando = 0
let sumando = 0
let num2 = 0
let num1 = 0
num1 = 0
num2 = 0
