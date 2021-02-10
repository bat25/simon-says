const tracker = document.getElementById("tracker")

const stepTracker = {
    addCircle(r, g, b){
        const div = document.createElement("div")
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        div.style.width = "25px"
        div.style.height = "25px"
        div.style.borderRadius = "50%"
        tracker.appendChild(div)
    }
}