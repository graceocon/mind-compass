const lettersCountries = [
    {
        letter: "A",
        number: 11,
        countries: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan"]
    },
    {
        letter: "B",
        number: 17,
        countries: ["Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi"]
    },
    {
        letter: "C",
        number: 17,
        countries: ["Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Republic of the Congo (Congo-Brazzaville)", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)"]
    },
    {
        letter: "D",
        number: 5,
        countries: ["Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic"]
    },
    {
        letter: "E",
        number: 8,
        countries: ["Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (formally Swaziland)", "Ethiopia"]
    },
    {
        letter: "F",
        number: 3,
        countries: ["Fiji", "Finland", "France"]
    },
    {
        letter: "G",
        number: 11,
        countries: ["Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana"]
    },
    {
        letter: "H",
        number: 4,
        countries: ["Haiti", "Holy See (Vatican City)", "Honduras", "Hungary"]
    },
    {
        letter: "I",
        number: 8,
        countries: ["Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy"]
    },
    {
        letter: "J",
        number: 3,
        countries: ["Jamaica", "Japan", "Jordan"]
    },
    {
        letter: "K",
        number: 5,
        countries: ["Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan"]
    },
    {
        letter: "L",
        number: 9,
        countries: ["Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg"]
    },
    {
        letter: "M",
        number: 18,
        countries: ["Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)"]
    },
    {
        letter: "N",
        number: 11,
        countries: ["Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway"]
    },
    {
        letter: "O",
        number: 1,
        countries: ["Oman"]
    },
    {
        letter: "P",
        number: 10,
        countries: ["Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal"]
    },
    {
        letter: "Q",
        number: 1,
        countries: ["Qatar"]
    },
    {
        letter: "R",
        number: 3,
        countries: ["Romania", "Russia", "Rwanda"]
    },
    {
        letter: "S",
        number: 26,
        countries: ["Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria"]
    },
    {
        letter: "T",
        number: 11,
        countries: ["Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu"]
    },
    {
        letter: "U",
        number: 7,
        countries: ["Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan"]
    },
    {
        letter: "V",
        number: 3,
        countries: ["Vanuatu", "Venezuela", "Vietnam"]
    },
    {
        letter: "W",
        number: 0,
        countries: [""]
    },
    {
        letter: "X",
        number: 0,
        countries: [""]
    },
    {
        letter: "Y",
        number: 1,
        countries: ["Yemen"]
    },
    {
        letter: "Z",
        number: 2,
        countries: ["Zambia", "Zimbabwe"]
    }
]

// const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let chosenLetter = document.getElementById("chosen-letter")
let countriesNumber = document.getElementById("countries-number")
let countriesList = document.getElementById("countries-list")
let generateRandomLetter =  document.getElementById("choose-random-letter")

// generateRandomLetter.addEventListener("click", function() {
//     let randomLetter = Math.floor( Math.random() * letters.length )
//     chosenLetter.textContent = "Letter: " + letters[randomLetter]
//     }
// )


// SCRIBBLE

// function generateRandomLetterCountries() {
//     let randomArray = Math.floor( Math.random() * lettersCountries.length)
//     letterRandom = lettersCountries[randomArray].letter
//     numberRandom = lettersCountries[randomArray].number
//     countriesRandom = lettersCountries[randomArray].countries
// }

// function orderedCountriesList() {
//     let orderedCountries = ""
//     for (let i = 0; i > lettersCountries.countries.length; i++) {
//     orderedCountries += lettersCountries[i]
//     }
//     return orderedCountries
// }

// generateRandomLetter.addEventListener("click", function() {
//     chosenLetter.textContent = generateRandomLetterCountries(letterRandom)
//     countriesNumber.textContent = numberRandom
//     countriesList.textContent = countriesRandom
//     }
// )

generateRandomLetter.addEventListener("click", function() {
    let randomArray = Math.floor( Math.random() * lettersCountries.length)
    chosenLetter.textContent = lettersCountries[randomArray].letter
    countriesNumber.textContent = lettersCountries[randomArray].number
    countriesList.innerHTML = "<li>" + lettersCountries[randomArray].countries + "</li>"
    }
)

// SCRIBBLE


// generateRandomLetter.addEventListener("click", function() {
//     let randomArray = Math.floor( Math.random() * lettersCountries.length)
//     chosenLetter.textContent = lettersCountries[randomArray].letter
//     countriesNumber.textContent = lettersCountries[randomArray].number
//     countriesList.textContent = lettersCountries[randomArray].countries
//     }
// )

let aBtn = document.getElementById("a-btn")

aBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[0].letter
    countriesNumber.textContent = lettersCountries[0].number
    countriesList.textContent = lettersCountries[0].countries
    }
)

let bBtn = document.getElementById("b-btn")

bBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[1].letter
    countriesNumber.textContent = lettersCountries[1].number
    countriesList.textContent = lettersCountries[1].countries
    }
)

let cBtn = document.getElementById("c-btn")

cBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[2].letter
    countriesNumber.textContent = lettersCountries[2].number
    countriesList.textContent = lettersCountries[2].countries
    }
)

let dBtn = document.getElementById("d-btn")

function renderCountriesListD() {
let countriesListD = ""
for (i = 0; i < lettersCountries[3].countries.length; i++) {
    countriesListD += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[3].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListD
}

dBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[3].letter
    countriesNumber.textContent = lettersCountries[3].number
    renderCountriesListD()
    }
)

let eBtn = document.getElementById("e-btn")

function renderCountriesListE() {
let countriesListE = ""
for (i = 0; i < lettersCountries[4].countries.length; i++) {
    countriesListE += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[4].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListE
}

eBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[4].letter
    countriesNumber.textContent = lettersCountries[4].number
    renderCountriesListE()
    }
)

let fBtn = document.getElementById("f-btn")

function renderCountriesListF() {
let countriesListF = ""
for (i = 0; i < lettersCountries[5].countries.length; i++) {
    countriesListF += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[5].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListM
}

fBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[5].letter
    countriesNumber.textContent = lettersCountries[5].number
    renderCountriesListF()
    }
)

let gBtn = document.getElementById("g-btn")

function renderCountriesListG() {
let countriesListG = ""
for (i = 0; i < lettersCountries[6].countries.length; i++) {
    countriesListG += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[6].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListM
}

gBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[6].letter
    countriesNumber.textContent = lettersCountries[6].number
    renderCountriesListG()
    }
)

let hBtn = document.getElementById("h-btn")

function renderCountriesListH() {
let countriesListH = ""
for (i = 0; i < lettersCountries[7].countries.length; i++) {
    countriesListH += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[7].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListM
}

hBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[7].letter
    countriesNumber.textContent = lettersCountries[7].number
    renderCountriesListH()
    }
)

let iBtn = document.getElementById("i-btn")

function renderCountriesListI() {
let countriesListI = ""
for (i = 0; i < lettersCountries[8].countries.length; i++) {
    countriesListI += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[8].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListM
}

iBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[8].letter
    countriesNumber.textContent = lettersCountries[8].number
    renderCountriesListI()
    }
)

let jBtn = document.getElementById("j-btn")

function renderCountriesListJ() {
let countriesListJ = ""
for (i = 0; i < lettersCountries[9].countries.length; i++) {
    countriesListJ += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[9].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListM
}

jBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[9].letter
    countriesNumber.textContent = lettersCountries[9].number
    renderCountriesListJ()
    }
)

let kBtn = document.getElementById("k-btn")

function renderCountriesListK() {
let countriesListK = ""
for (i = 0; i < lettersCountries[10].countries.length; i++) {
    countriesListK += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[10].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListM
}

kBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[10].letter
    countriesNumber.textContent = lettersCountries[10].number
    renderCountriesListK()
    }
)

let lBtn = document.getElementById("l-btn")

function renderCountriesListL() {
let countriesListL = ""
for (i = 0; i < lettersCountries[11].countries.length; i++) {
    countriesListL += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[11].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListM
}

lBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[11].letter
    countriesNumber.textContent = lettersCountries[11].number
    renderCountriesListL()
    }
)

let mBtn = document.getElementById("m-btn")

function renderCountriesListM() {
let countriesListM = ""
for (i = 0; i < lettersCountries[12].countries.length; i++) {
    countriesListM += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[12].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListM
}

mBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[12].letter
    countriesNumber.textContent = lettersCountries[12].number
    renderCountriesListM()
    }
)

let nBtn = document.getElementById("n-btn")

function renderCountriesListN() {
let countriesListN = ""
for (i = 0; i < lettersCountries[13].countries.length; i++) {
    countriesListN += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[13].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListN
}

nBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[13].letter
    countriesNumber.textContent = lettersCountries[13].number
    renderCountriesListN()
    }
)

let oBtn = document.getElementById("o-btn")

function renderCountriesListO() {
let countriesListO = ""
for (i = 0; i < lettersCountries[14].countries.length; i++) {
    countriesListO += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[14].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListO
}

oBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[14].letter
    countriesNumber.textContent = lettersCountries[14].number
    renderCountriesListO()
    }
)

let pBtn = document.getElementById("p-btn")

function renderCountriesListP() {
let countriesListP = ""
for (i = 0; i < lettersCountries[15].countries.length; i++) {
    countriesListP += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[15].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListP
}

pBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[15].letter
    countriesNumber.textContent = lettersCountries[15].number
    renderCountriesListP()
    }
)

let qBtn = document.getElementById("q-btn")

function renderCountriesListQ() {
let countriesListQ = ""
for (i = 0; i < lettersCountries[16].countries.length; i++) {
    countriesListQ += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[16].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListQ
}

qBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[16].letter
    countriesNumber.textContent = lettersCountries[16].number
    renderCountriesListQ()
    }
)

let rBtn = document.getElementById("r-btn")

function renderCountriesListR() {
let countriesListR = ""
for (i = 0; i < lettersCountries[17].countries.length; i++) {
    countriesListR += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[17].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListR
}

rBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[17].letter
    countriesNumber.textContent = lettersCountries[17].number
    renderCountriesListR()
    }
)

let sBtn = document.getElementById("s-btn")

function renderCountriesListS() {
let countriesListS = ""
for (i = 0; i < lettersCountries[18].countries.length; i++) {
    countriesListS += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[18].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListS
}

sBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[18].letter
    countriesNumber.textContent = lettersCountries[18].number
    renderCountriesListS()
    }
)

let tBtn = document.getElementById("t-btn")

function renderCountriesListT() {
let countriesListT = ""
for (i = 0; i < lettersCountries[19].countries.length; i++) {
    countriesListT += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[19].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListT
}

tBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[19].letter
    countriesNumber.textContent = lettersCountries[19].number
    renderCountriesListT()
    }
)

let uBtn = document.getElementById("u-btn")

function renderCountriesListU() {
let countriesListU = ""
for (i = 0; i < lettersCountries[20].countries.length; i++) {
    countriesListU += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[20].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListU
}

uBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[20].letter
    countriesNumber.textContent = lettersCountries[20].number
    renderCountriesListU()
    }
)

let vBtn = document.getElementById("v-btn")

function renderCountriesListV() {
let countriesListV = ""
for (i = 0; i < lettersCountries[21].countries.length; i++) {
    countriesListV += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[21].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListV
}

vBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[21].letter
    countriesNumber.textContent = lettersCountries[21].number
    renderCountriesListV()
    }
)

let wBtn = document.getElementById("w-btn")

function renderCountriesListW() {
let countriesListW = ""
for (i = 0; i < lettersCountries[22].countries.length; i++) {
    countriesListW += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[22].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListW
}

wBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[22].letter
    countriesNumber.textContent = lettersCountries[22].number
    renderCountriesListW()
    }
)
let xBtn = document.getElementById("x-btn")

function renderCountriesListX() {
let countriesListX = ""
for (i = 0; i < lettersCountries[23].countries.length; i++) {
    countriesListX += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[23].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListX
}

xBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[23].letter
    countriesNumber.textContent = lettersCountries[23].number
    renderCountriesListX()
    }
)

let yBtn = document.getElementById("y-btn")

function renderCountriesListY() {
let countriesListY = ""
for (i = 0; i < lettersCountries[24].countries.length; i++) {
    countriesListY += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[24].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListY
}

yBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[24].letter
    countriesNumber.textContent = lettersCountries[24].number
    renderCountriesListY()
    }
)


let zBtn = document.getElementById("z-btn")

function renderCountriesListZ() {
let countriesListZ = ""
for (i = 0; i < lettersCountries[25].countries.length; i++) {
    countriesListZ += `<li><input type=checkbox class="checkbox"/> ${lettersCountries[25].countries[i]}</li>`
}
    countriesList.innerHTML = countriesListZ
}

zBtn.addEventListener("click", function() {
    chosenLetter.textContent = lettersCountries[25].letter
    countriesNumber.textContent = lettersCountries[25].number
    renderCountriesListZ()
    }
)