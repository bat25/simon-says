const trackerDOM = document.getElementById("tracker")
class StepTracker {
    constructor(box) {
        this.box = box

        this.div = document.createElement("div")
        this.div.style.backgroundColor = `rgb(${box.color.join(", ")})`
        this.div.style.width = "25px"
        this.div.style.height = "25px"
        this.div.style.borderRadius = "50%"
        this.hide()
        trackerDOM.appendChild(this.div)
    }

    highlight() {
        this.div.classList.add("animate")
        return new Promise((res, rej) => {
            setTimeout(() => {
                this.div.classList.remove("animate")
                res(this)
            }, 300)
        })
    }

    hide() {
        this.div.classList.add("hidden")
        return this
    }

    show() {
        this.div.classList.remove("hidden")
        return this;
    }
}