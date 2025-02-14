enum LEDAnimations {
    Pulse,
    Hello_world,
}


//% color="#AA278D"
namespace LEDAnimator {


    /**
     * Play animation until done
     */
    //? block
    export function PlayAnimation(anim: LEDAnimations) {
        if (anim == LEDAnimations.Pulse) {
            basic.showLeds(`
                . # . # .
                # # # # #
                # # # # #
                . # # # .
                . . # . .
                `)
            basic.showLeds(`
                . . . . .
                . # . # .
                . # # # .
                . . # . .
                . . . . .
                `)
        } else if (anim == LEDAnimations.Hello_world) {
            basic.showString("Hello, world!")
        } else {
            basic.showString("?")
        }
    }
}