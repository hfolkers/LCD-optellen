input.onButtonPressed(Button.A, function () {
    input2 = input2 + 1
    makerbit.showStringOnLcd1602("" + (input2), makerbit.position1602(LcdPosition1602.Pos17), 16)
})
input.onButtonPressed(Button.AB, function () {
    input2 = 0
    makerbit.showStringOnLcd1602("" + (input2), makerbit.position1602(LcdPosition1602.Pos17), 16)
})
input.onButtonPressed(Button.B, function () {
    input2 = input2 - 1
    makerbit.showStringOnLcd1602("" + (input2), makerbit.position1602(LcdPosition1602.Pos17), 16)
})
let input2 = 0
makerbit.connectLcd(39)
input2 = 0
makerbit.showStringOnLcd1602("hallo", makerbit.position1602(LcdPosition1602.Pos1), 16)
makerbit.showStringOnLcd1602("" + (input2), makerbit.position1602(LcdPosition1602.Pos17), 16)
