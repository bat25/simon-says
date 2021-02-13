
function hoverCell(row, col) {
    push();
    stroke(255);
    fill(pg.colors[col][row].r + 25, pg.colors[col][row].g + 25, pg.colors[col][row].b + 25);
    strokeWeight(8);
    rect(parseInt(col) * pg.w/pg.col, parseInt(row) * pg.h/pg.row, pg.w/pg.col, pg.h/pg.row)
    pop();
}

function higlight(row, col) {
    push();
    stroke(255);
    fill(pg.colors[col][row].r + 25, pg.colors[col][row].g + 25, pg.colors[col][row].b + 25);
    strokeWeight(0);
    rect(parseInt(col) * pg.w/pg.col, parseInt(row) * pg.h/pg.row, pg.w/pg.col, pg.h/pg.row)
    pop();
}

function applyColor(row, col, r, g, b) {
    push();
    fill(r, g, b);
    stroke(255);
    strokeWeight(8);
    rect(parseInt(col) * pg.w/pg.col, parseInt(row) * pg.h/pg.row, pg.w/pg.col, pg.h/pg.row);
    pop();
}