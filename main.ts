input.onButtonPressed(Button.A, function () {
    pepa.change(LedSpriteProperty.X, PohybX)
    if (pepa.get(LedSpriteProperty.X) == 4) {
        PohybX = -1
    }
    if (pepa.get(LedSpriteProperty.X) == 0) {
        PohybX = 1
    }
})
input.onButtonPressed(Button.B, function () {
    pepa.change(LedSpriteProperty.Y, PohybY)
    if (pepa.get(LedSpriteProperty.Y) == 4) {
        PohybY = -1
    }
    if (pepa.get(LedSpriteProperty.Y) == 0) {
        PohybY = 1
    }
})
let pepa: game.LedSprite = null
let PohybX = 0
let PohybY = 0
basic.showString("PEPA!")
basic.pause(500)
PohybY = 1
PohybX = 1
pepa = game.createSprite(2, 2)
pepa.set(LedSpriteProperty.Blink, 250)
basic.forever(function () {
	
})
