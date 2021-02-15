let game;


let state = 1;
// let state;
// 1: in game
// 2: in resize


function setup() {
    // state = 0;
    game = new Game()
}

window.onresize = () => {
    state = 2;
    setup();
    state = 1;
}

function draw() {
    if (state == 0) {
        // start button..
    }

    if (state == 1) {
        game.boxes.forEach(b => {
            b.draw();
        });

        if (withinCanvas()) {
            const index = blockIndex(mouseX, mouseY)
            game.boxes[index].glow();
        }
    }
}

const withinCanvas = () => mouseX > 0 && mouseX < game.canvasWidth && mouseY > 0 && mouseY < game.canvasHeight

function blockIndex() {
    const col = parseInt(mouseX / game.boxSize)
    const row = parseInt(mouseY / game.boxSize)
    let index = row * game.cols + col;
    return index;
}

function mousePressed() {
    if (withinCanvas()) {
        const index = blockIndex(mouseX, mouseY);
        game.boxes[index].highlight()
    }
}