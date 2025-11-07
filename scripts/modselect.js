let mods = {}

setInterval(() => {
    let modSelected = document.getElementById("ModSelect").value
    document.querySelectorAll(".modDiv").forEach((e) => {
        if (modSelected + "Div" !== e.id) {
            e.style.display = "none";
        }
        else {
            e.style.display = "unset";
        }
    })
    document.querySelectorAll(".modCB").forEach((e) => {
        if (e.checked) {
            mods[e.id.slice(3, e.id.length)] = true
        }
        else {
            mods[e.id.slice(3, e.id.length)] = false
        }
    })

    if (modSelected !== "Select Mod...") {
        createCB(modSelected)
    }

    showPages()
},500)

function createCB(mod) {
    if (!document.getElementById(mod+"Div")) {
        let modDiv = document.createElement("div")
        modDiv.id = mod + "Div"
        modDiv.classList = "modDiv"

        let newline = document.createElement("br")

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.id = "CB_" + mod
        checkbox.classList = "modCB"
        let label = document.createElement("label")
        label.id = mod + "Label"
        label.classList = "modLabel"
        label.for = checkbox.id
        label.innerText = `Enable ${mod}:`

        modDiv.appendChild(newline)
        modDiv.appendChild(label)
        modDiv.appendChild(checkbox)
        document.getElementById("ModSelectDiv").appendChild(modDiv)
    }
}

function showPages() {
    document.querySelectorAll(".Minesweeper").forEach((e) => {
        if (mods.Minesweeper) {
            e.style.display = "unset"
        }
        else {
            e.style.display = "none"
        }
    })

    document.querySelectorAll(".RockPaperScissorsLizardSpock").forEach((e) => {
        if (mods.RockPaperScissorsLizardSpock) {
            e.style.display = "unset"
        }
        else {
            e.style.display = "none"
        }
    })

    document.querySelectorAll(".Tetris").forEach((e) => {
        if (mods.Tetris) {
            e.style.display = "unset"
        }
        else {
            e.style.display = "none"
        }
    })
}