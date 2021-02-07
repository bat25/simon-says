let game = {
    state: 0
}

let pg = {
    w: 600,
    h: 600,
    row: 3,
    col: 3,
    colors: [],
}

function setup() {
    console.log("Hello World!");
    createCanvas(pg.w, pg.h);

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

function draw() {
    if(game.state == 0) {
        // start button..
    }

    if (game.state == 1) {
        background(255, 0, 0);

        // // rows
        // for (let i = 1; i < pg.row; i++) {
        //     line(0, i * pg.h / pg.row, pg.w, i * pg.h / pg.row);
        // }
        // // cols
        // for (let i = 1; i < pg.col; i++) {
        //     line(i * pg.w / pg.col, 0, i * pg.w / pg.col, pg.h);
        // }

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
