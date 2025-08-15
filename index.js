
import { mainData } from "./maindata.js"

const randomBtn = document.getElementById("random-btn")
const letterBtns = document.getElementById("letter-btns")
const scrollPoint = document.getElementById("button-section")

const chosenLetter = document.getElementById("chosen-letter")
const chosenLetterNumber = document.getElementById("chosen-letter-number")
const chosenLetterCountries = document.getElementById("chosen-letter-countries")

const numberT = ""
const territories = ""

randomBtn.addEventListener("click", function() {
    scrollPoint.scrollIntoView({ behavior: 'smooth' })
    const randomIndex = Math.floor( Math.random() * mainData.letterObjs.length)
    renderCountriesList(mainData.letterObjs, randomIndex)
})

letterBtns.addEventListener("click", function(e){
    randomBtn.scrollIntoView({ behavior: 'smooth' })
    const data = mainData.letterObjs.filter(obj => obj.id === e.target.id)
    renderCountriesList(data, 0)
})


function renderCountriesList(data, index) {
    chosenLetter.textContent = data[index].id
    chosenLetterNumber.textContent = data[index].numberOfC
    
    let countriesList = ""
    data[index].countries.forEach(country => {
            countriesList +=
            `
            <ul>
                <li class="list-items">
                <div class="country">
                    <i id=${country.name} class="fa-regular fa-lightbulb lightbulb"></i>
                    <input type=checkbox class="tick"/>
                </div>
                <div class="country">
                    ${country.name}
                </div>
                </li>
            </ul>
            `
    })
    chosenLetterCountries.innerHTML = countriesList
}


function renderButtons(data) {
    const letterArr = data.letters.split("")
    letterArr.forEach(letter => {
        letterBtns.innerHTML += `
            <button id=${letter} class="random-letter-btn all-btns">${letter}</button>
        `
    })
}
renderButtons(mainData)

// update data
// render territories list
// update data
// add event listener for hints
// render hints modal
// update data
// add event listener for modal close btn