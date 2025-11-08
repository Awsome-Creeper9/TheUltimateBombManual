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
        e.style.display = (mods.Minesweeper) ? "unset" : "none"
    })

    document.querySelectorAll(".RockPaperScissorsLizardSpock").forEach((e) => {
        e.style.display = (mods.RockPaperScissorsLizardSpock) ? "unset" : "none"
    })

    document.querySelectorAll(".Tetris").forEach((e) => {
        e.style.display = (mods.Tetris) ? "unset" : "none"
    })

    document.querySelectorAll(".MathIsHard").forEach((e) => {
        e.style.display = (mods.MathIsHard) ? "unset" : "none"
    })

    document.querySelectorAll(".Flags").forEach((e) => {
        e.style.display = (mods.Flags) ? "unset" : "none"
    })

    document.querySelectorAll(".LogicGates").forEach((e) => {
        e.style.display = (mods.LogicGates) ? "unset" : "none"
    })

    document.querySelectorAll(".FlowerButton").forEach((e) => {
        e.style.display = (mods.FlowerButton) ? "unset" : "none"
    })

    document.querySelectorAll(".Scripting").forEach((e) => {
        e.style.display = (mods.Scripting) ? "unset" : "none"
    })

    document.querySelectorAll(".NeedySlots").forEach((e) => {
        e.style.display = (mods.NeedySlots) ? "unset" : "none"
    })

    document.querySelectorAll(".PianoKeys").forEach((e) => {
        e.style.display = (mods.PianoKeys) ? "unset" : "none"
    })

    document.querySelectorAll(".ColorFlash").forEach((e) => {
        e.style.display = (mods.ColorFlash) ? "unset" : "none"
    })

    document.querySelectorAll(".HexisAdvancedBaseModules").forEach((e) => {
        e.style.display = (mods.HexisAdvancedBaseModules) ? "unset" : "none"
    })

    document.querySelectorAll(".A90").forEach((e) => {
        e.style.display = (mods.A90) ? "unset" : "none"
    })
}