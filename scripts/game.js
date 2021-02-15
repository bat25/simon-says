class Game {
    constructor() {
        createCanvas().parent("pg");

        const playground = document.getElementById("pg")
        this.boxSize = playground.clientWidth < 500 ? 100 : 200;
        
        /** @type {Number} Canvas Container Height */
        const canvasContainerHeight = Math.min(playground.clientHeight, this.boxSize * 4 + 50);
        /** @type {Number} Canvas Container Width */
        const canvasContainerWidth = Math.min(playground.clientWidth, this.boxSize * 4 + 50);

        /** @type {Number} Number of Columns in Playground */
        this.cols = parseInt(canvasContainerWidth / this.boxSize)
        /** @type {Number} Number of Rows in Playground */
        this.rows = parseInt(canvasContainerHeight / this.boxSize)

        if (canvasContainerWidth % this.boxSize < 50) {
            this.cols -= 1
        }
        if (canvasContainerHeight % this.boxSize < 50) {
            this.rows -= 1
        }

        this.canvasWidth = this.cols * this.boxSize;
        this.canvasHeight = this.rows * this.boxSize;

        resizeCanvas(this.canvasWidth, this.canvasHeight)

        this.refresh()
    }

    async addRound() {
        let index = rand([0, this.boxes.length - 1])
        while (this.boxesInQueue[this.boxesInQueue.length - 1] === this.boxes[index]) {
            index = rand([0, this.boxes.length - 1])
        }
        this.boxesInQueue.push(this.boxes[index])
        this.discsInTracker.push(new StepTracker(this.boxes[index]))
        
        this.discsInTracker.forEach(bit => bit.show())
        for (let i = 0; i < this.boxesInQueue.length; i++) {
            await Promise.allSettled([
                this.boxesInQueue[i].highlight(),
                this.discsInTracker[i].highlight()
            ])
        }
        this.discsInTracker.forEach(bit => bit.hide())
    }

    refresh() {
        this.boxesInQueue = []
        document.getElementById("tracker").innerHTML = ""
        this.discsInTracker = []
        this.boxes = [];
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.boxes.push(new Box(i, j, this.boxSize));
            }
        }
    }
}

const rand = ([min, max]) => Math.round(Math.random() * (max - min) + min)