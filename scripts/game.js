class Game {
    constructor() {
        this.refresh()
    }

    async addRound() {
        let index = rand([0, this.boxes.length - 1])
        while (this.boxesInQueue[this.boxesInQueue.length - 1] === this.boxes[index]) {
            index = rand([0, this.boxes.length - 1])
        }
        this.boxesInQueue.push(this.boxes[index])
        this.boxesInTracker.push(new StepTracker(this.boxes[index]))

        this.boxesInTracker.forEach(bit => bit.show())
        for (let i = 0; i < this.boxesInQueue.length; i++) {
            await Promise.allSettled([
                this.boxesInQueue[i].highlight(),
                this.boxesInTracker[i].highlight()
            ])
        }
        this.boxesInTracker.forEach(bit => bit.hide())
    }

    refresh() {
        this.state = 1
        this.boxes = []
        this.boxesInQueue = []
        document.getElementById("tracker").innerHTML = ""
        this.boxesInTracker = []
    }
}

const rand = ([min, max]) => Math.round(Math.random()*(max - min) + min)