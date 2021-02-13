// let game = {
//     state: 1, // running
// }
let game = new Game()
// 1: in game
// 2: in resize

let pg = {
    boxSize: 200
}

function setup() {
    game.refresh()
    createCanvas().parent("pg");

    // calculate suitable w/h && c/r
    const playground = document.getElementById("pg");

    pg.bs = playground.clientWidth < 500 ? 100 : 200;

    const ph = Math.min(playground.clientHeight, pg.bs * 4 + 50);
    const pw = Math.min(playground.clientWidth, pg.bs * 4 + 50);

    pg.cols = parseInt(pw / pg.bs)
    pg.rows = parseInt(ph / pg.bs)

    if (pw % pg.bs < 50) {
        pg.cols -= 1
    }
    if (ph % pg.bs < 50) {
        pg.rows -= 1
    }

    pg.w = pg.cols * pg.bs;
    pg.h = pg.rows * pg.bs;

    resizeCanvas(pg.w, pg.h);

    game.boxes = [];
    for (let i = 0; i < pg.rows; i++) {
        for (let j = 0; j < pg.cols; j++) {
            game.boxes.push(new Box(i, j, pg.bs));
        }
    }
}

window.onresize = () => {
    game.state = 2;
    setup();
    game.state = 1;
}

function draw() {
    // setup();
    if (game.state == 0) {
        // start button..
    }

    if (game.state == 1) {

        game.boxes.forEach(b => {
            b.draw();
        });

        if (withinCanvas()) {
            const index = blockIndex(mouseX, mouseY)
            game.boxes[index].glow();
        }
    }
}

const withinCanvas = () => mouseX > 0 && mouseX < pg.w && mouseY > 0 && mouseY < pg.h

function blockIndex() {
    const col = parseInt(mouseX / pg.bs)
    const row = parseInt(mouseY / pg.bs)
    let index = row * pg.cols + col;
    return index;
}

function mousePressed() {
    if (withinCanvas()) {
        const index = blockIndex(mouseX, mouseY);
        game.boxes[index].highlight()
    }
}