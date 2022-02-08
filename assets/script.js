// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Cheyenne Roach" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let gbQty = document.querySelector('#qty-gb')
// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')

let minusGbBtn = document.querySelector('#minus-gb')


// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb++
    gbQty.textContent = ${gb}
// HINT: You can delete this console.log after you no longer need it!

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

minusGbBtn.addEventListener('click', function() {
    gb--
console.log(gb)
})

let ccPlusBtn = document.querySelector('#add-cc')

let ccMinusBtn = document.querySelector('#minus-cc')

ccPlusBtn.addEventListener('click', function(){
    cc++
    console.log(cc)
})

ccMinusBtn.addEventListener('click', function(){
    cc--
    console.log(cc)
})

let sugarPlusBtn = document.querySelector('#add-sugar')

let sugarMinusBtn = document.querySelector('#minus-sugar')

sugarPlusBtn.addEventListener('click', function(){
    sugar++
    console.log(sugar)
})

sugarMinusBtn.addEventListener('click', function(){
    sugar--
    console.log(sugar)
})
// TODO: Hook up event listeners for the rest of the buttons