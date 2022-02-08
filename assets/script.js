// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Cheyenne Roach" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

let gbQty = document.querySelector('#qty-gb')
let ccQty = document.querySelector('#qty-cc')
let sugarQty = document.querySelector('#qty-sugar')
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
    gbQty.textContent = gb
})

minusGbBtn.addEventListener('click', function() {
    gb--
    gbQty.textContent = gb
})

let ccPlusBtn = document.querySelector('#add-cc')
let ccMinusBtn = document.querySelector('#minus-cc')

ccPlusBtn.addEventListener('click', function(){
    cc++
    ccQty.textContent = cc
})

ccMinusBtn.addEventListener('click', function(){
    cc--
    ccQty.textContent = cc
})

let sugarPlusBtn = document.querySelector('#add-sugar')
let sugarMinusBtn = document.querySelector('#minus-sugar')

sugarPlusBtn.addEventListener('click', function(){
    sugar++
    sugarQty.textContent = sugar
})

sugarMinusBtn.addEventListener('click', function(){
    sugar--
    sugarQty.textContent = sugar
})
// TODO: Hook up event listeners for the rest of the buttons