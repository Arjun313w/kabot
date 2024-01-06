input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 68)
})
let index = 50
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P12, DigitalPin.P8)
radio.setGroup(1)
basic.forever(function () {
    pins.servoWritePin(AnalogPin.P1, 100)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 95)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 90)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 80)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 75)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 70)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 65)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 60)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 50)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 40)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 55)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 65)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 75)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 85)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 90)
    basic.pause(500)
    pins.servoWritePin(AnalogPin.P1, 100)
    basic.pause(500)
})
basic.forever(function () {
    for (let index = 0; index <= 180; index++) {
        pins.servoWritePin(AnalogPin.P0, index)
        index += 5
        basic.pause(500)
    }
})
basic.forever(function () {
    for (let index = 0; index <= 68; index++) {
        pins.servoWritePin(AnalogPin.P2, index)
        index += 5
        basic.pause(200)
    }
})
basic.forever(function () {
    if (makerbit.isUltrasonicDistanceLessThan(10, DistanceUnit.CM)) {
        radio.sendNumber(0)
        basic.showIcon(IconNames.No)
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.Heart)
        basic.pause(500)
    }
})
