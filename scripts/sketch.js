let game;


let state = 0;
// 0: start menu
// 1: in game




window.onresize = () => {
    game.destroy()
    game = new Game();
}

function draw() {
    if (state == 0) {
        // start button..
        background(255);
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

async function mousePressed() {
    if (state == 1 && withinCanvas() && game.waitingForInput) {
        const index = blockIndex(mouseX, mouseY);
        game.boxes[index].highlight()
        const success = await game.checkSelection(index);
        console.log(success);
        if (!success) {
            alert("Out! Score is " + game.score)
            game.destroy()
            game = new Game()
        }
    }
}
