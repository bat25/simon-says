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

    pg.col = parseInt(pw / pg.bs)
    pg.row = parseInt(ph / pg.bs)

    if (pw % pg.bs < 50) {
        pg.col -= 1
    }
    if (ph % pg.bs < 50) {
        pg.row -= 1
    }

    pg.w = pg.col * pg.bs;
    pg.h = pg.row * pg.bs;

    resizeCanvas(pg.w, pg.h);

    pg.colors = [];
    for (let i = 0; i < pg.col; i++) {
        let colors = [];
        for (let j = 0; j < pg.row; j++) {
            let r = parseInt(Math.random() * 255);
            let g = parseInt(Math.random() * 255);
            let b = parseInt(Math.random() * 255);
            colors.push({ r, g, b });
        }
        pg.colors.push(colors);
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

        for (let i = 0; i < pg.col; i++) {
            for (let j = 0; j < pg.row; j++) {
                applyColor(j, i, pg.colors[i][j].r, pg.colors[i][j].g, pg.colors[i][j].b);
            }
        }

        if (mouseX > 0 && mouseX < pg.w && mouseY > 0 && mouseY < pg.h) {
            hoverCell(...blockIndex(mouseX, mouseY));
        }
    }
}

function blockIndex(x, y) {
    y = parseInt(mouseY / pg.h * pg.row);
    x = parseInt(mouseX / pg.w * pg.col);
    return [y, x];
}

function mousePressed() {
    const pressedIndex = blockIndex(mouseX, mouseY);
    if (!((pressedIndex[0] < pg.row && pressedIndex[0] > -1) && (pressedIndex[1] < pg.col && pressedIndex[1] > -1))) return

}
