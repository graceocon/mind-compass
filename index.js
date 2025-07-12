
import { countriesData } from "./data.js"


const chosenLetter = document.getElementById("chosen-letter")
const chosenLetterNumber = document.getElementById("chosen-letter-number")
let chosenLetterCountries = document.getElementById("chosen-letter-countries")


document.addEventListener("click", function(e){
    if (e.target.id === 'random-btn'){
        renderRandomObj()
    }
    else if (e.target.id === "a-btn"){
        renderCountryObj(countriesData[0])
    }
    else if (e.target.id === 'b-btn'){
        renderCountryObj(countriesData[1])
    }
    else if (e.target.id === 'c-btn'){
        renderCountryObj(countriesData[2])
    }
    else if (e.target.id === 'd-btn'){
        renderCountryObj(countriesData[3])
    }
    else if (e.target.id === 'e-btn'){
        renderCountryObj(countriesData[4])
    }
    else if (e.target.id === 'f-btn'){
        renderCountryObj(countriesData[5])
    }
    else if (e.target.id === 'g-btn'){
        renderCountryObj(countriesData[6])
    }
    else if (e.target.id === 'h-btn'){
        renderCountryObj(countriesData[7])
    }
    else if (e.target.id === 'i-btn'){
        renderCountryObj(countriesData[8])
    }
    else if (e.target.id === 'j-btn'){
        renderCountryObj(countriesData[9])
    }
    else if (e.target.id === 'k-btn'){
        renderCountryObj(countriesData[10])
    }
    else if (e.target.id === 'l-btn'){
        renderCountryObj(countriesData[11])
    }
    else if (e.target.id === 'm-btn'){
        renderCountryObj(countriesData[12])
    }
    else if (e.target.id === 'n-btn'){
        renderCountryObj(countriesData[13])
    }
    else if (e.target.id === 'o-btn'){
        renderCountryObj(countriesData[14])
    }
    else if (e.target.id === 'p-btn'){
        renderCountryObj(countriesData[15])
    }
    else if (e.target.id === 'q-btn'){
        renderCountryObj(countriesData[16])
    }
    else if (e.target.id === 'r-btn'){
        renderCountryObj(countriesData[17])
    }
    else if (e.target.id === 's-btn'){
        renderCountryObj(countriesData[18])
    }
    else if (e.target.id === 't-btn'){
        renderCountryObj(countriesData[19])
    }
    else if (e.target.id === 'u-btn'){
        renderCountryObj(countriesData[20])
    }
    else if (e.target.id === 'v-btn'){
        renderCountryObj(countriesData[21])
    }
    else if (e.target.id === 'w-btn'){
        renderCountryObj(countriesData[22])
    }
    else if (e.target.id === 'x-btn'){
        renderCountryObj(countriesData[23])
    }
    else if (e.target.id === 'y-btn'){
        renderCountryObj(countriesData[24])
    }
    else if (e.target.id === 'z-btn'){
        renderCountryObj(countriesData[25])
    }
})


function renderRandomObj(){

    let randomCountryData = Math.floor( Math.random() * countriesData.length)

    chosenLetter.textContent = countriesData[randomCountryData].letter
    chosenLetterNumber.textContent = countriesData[randomCountryData].number

    let randomCountriesList = ""
    if (countriesData[randomCountryData].countries.length){
        countriesData[randomCountryData].countries.forEach(function(country){
                randomCountriesList +=
                `
                <ul>
                    <li class="list-items">
                    <div  class="country">
                        <i class="fa-regular fa-lightbulb"></i>
                        <input type=checkbox class="tick"/>
                    </div>
                    <div class="country">
                        ${country}
                    </div>
                    </li>
                </ul>
                `
            })
    }
    chosenLetterCountries.innerHTML = randomCountriesList
}


function renderCountryObj(letterObj) {

    chosenLetter.textContent = letterObj.letter
    chosenLetterNumber.textContent = letterObj.number

    let countryList = ""
    letterObj.countries.forEach(function(country){
            countryList +=
            `
            <ul>
                <li class="list-items">
                <div  class="country">
                    <i class="fa-regular fa-lightbulb lightbulb"></i>
                    <input type=checkbox class="tick"/>
                </div>
                <div class="country">
                    ${country}
                </div>
                </li>
            </ul>
            `
        })
        
    chosenLetterCountries.innerHTML = countryList
}


// function renderCountryObj(letterObj) {

//     chosenLetter.textContent = letterObj.letter
//     chosenLetterNumber.textContent = letterObj.number

//     let countryList = ""
//     letterObj.countries.forEach(function(country){
//             countryList +=
//             `<div class="tick-wrapper">
//                 <div class="round">
//                     <li class="list-items">
//                         <input type="checkbox" id="tick" />
//                         <label for="tick"></label>
//                         ${country}
//                     </li>
//                 </div>
//             </div>`
//         })
        
//     chosenLetterCountries.innerHTML = countryList
// }