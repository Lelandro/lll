input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 100; index++) {
        led.plot(randint(0, 4), randint(0, 4))
        basic.pause(20)
        basic.clearScreen()
        led.plot(randint(0, 4), randint(0, 4))
        basic.pause(20)
        basic.clearScreen()
    }
})
