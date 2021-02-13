class Box {

    constructor(row, col, size) {
        this.row = row;
        this.col = col;
        this.size = size;
        this.highlighted = false;
        this.color = [
            parseInt(Math.random() * 255),
            parseInt(Math.random() * 255),
            parseInt(Math.random() * 255)
        ]
    }

    draw() {
        if (!this.highlighted) {
            push();
            stroke(255);
            fill(...this.color.map(c => c + 25));
            strokeWeight(8);
            rect(this.col * this.size, this.row * this.size, this.size, this.size);
            pop();
        }
    }

    glow() {
        if (!this.highlighted) {
            push();
            stroke(255);
            fill(...this.color.map(c => c + 25));
            strokeWeight(0);
            rect(this.col * this.size, this.row * this.size, this.size, this.size);
            pop();
        }
    }

    highlight() {
        this.highlighted = true;
        this.undraw();
        push();
        stroke(255);
        fill(...this.color.map(c => c + 25));
        strokeWeight(0);
        circle((this.col * this.size) + this.size / 2, (this.row * this.size) + this.size / 2, this.size * 0.9);
        pop();
        setTimeout(() => {
            this.highlighted = false
        }, 300)
    }

    undraw() {
        push();
        stroke(255);
        fill(255);
        strokeWeight(0);
        rect(this.col * this.size, this.row * this.size, this.size, this.size);
        pop();
    }

}