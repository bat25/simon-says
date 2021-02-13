let game = {
    state: 1, // running
}

// 1: in game
// 2: in resize

let pg = {
    boxSize: 200
}

function setup() {

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

    pg.boxes = [];
    for (let i = 0; i < pg.rows; i++) {
        for (let j = 0; j < pg.cols; j++) {
            pg.boxes.push(new Box(i, j, pg.bs));
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

        pg.boxes.forEach(b => {
            b.draw();
        });

        if (mouseX > 0 && mouseX < pg.w && mouseY > 0 && mouseY < pg.h) {
            const index = blockIndex(mouseX, mouseY)
            pg.boxes[index].glow();
        }
    }
}

function blockIndex() {
    const x = parseInt(mouseX / pg.bs);
    const y = parseInt(mouseY / pg.bs);
    let index = y * pg.cols + x;
    return index;
}

function mousePressed() {
    const index = blockIndex(mouseX, mouseY);
    if (index < pg.boxes.length) {
        pg.boxes[index].highlight()
    }
}