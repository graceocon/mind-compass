let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let chosenLetter = document.getElementById("chosen-letter")
let generateRandomLetter =  document.getElementById("choose-random-letter")

generateRandomLetter.addEventListener("click", function() {
    let randomLetter = Math.floor( Math.random() * letters.length )
    chosenLetter.textContent = "Letter: " + letters[randomLetter]
    }
)





let aBtn = document.getElementById("a-btn")

aBtn.addEventListener("click", function() {
    chosenLetter.textContent = "Letter: A"
    }
)