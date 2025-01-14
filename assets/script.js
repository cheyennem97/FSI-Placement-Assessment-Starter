let yourName = "Cheyenne Roach" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0


let gbQty = document.querySelector('#qty-gb')
let ccQty = document.querySelector('#qty-cc')
let sugarQty = document.querySelector('#qty-sugar')
let totalQty = document.querySelector('#qty-total')
const gbPlusBtn = document.querySelector('#add-gb')
let minusGbBtn = document.querySelector('#minus-gb')
let sugarPlusBtn = document.querySelector('#add-sugar')
let sugarMinusBtn = document.querySelector('#minus-sugar')
let ccPlusBtn = document.querySelector('#add-cc')
let ccMinusBtn = document.querySelector('#minus-cc')
const credit = document.querySelector('#credit')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
    gb++
    gbQty.textContent = gb
});
gbPlusBtn.addEventListener('click', function(){
    total++
    totalQty.textContent = total
})


minusGbBtn.addEventListener('click', function() {
    if (gb >0){
        gb--
        gbQty.textContent = gb
    }
    
});
minusGbBtn.addEventListener('click', function(){
    if (total >0){
        total--
        totalQty.textContent = total
    }
})

ccPlusBtn.addEventListener('click', function(){
    cc++
    ccQty.textContent = cc
});
ccPlusBtn.addEventListener('click', function(){
    total++
    totalQty.textContent = total
})

ccMinusBtn.addEventListener('click', function(){
    if (cc >0){
        cc--
        ccQty.textContent = cc
    }
    
});
ccMinusBtn.addEventListener('click', function(){
    if (total >0){
        total--
        totalQty.textContent = total
    }
})

sugarPlusBtn.addEventListener('click', function(){
    sugar++
    sugarQty.textContent = sugar
});
sugarPlusBtn.addEventListener('click', function(){
    total++
    totalQty.textContent = total
})

sugarMinusBtn.addEventListener('click', function(){
    if (sugar >0){
        sugar--
        sugarQty.textContent = sugar
    }
    
});
sugarMinusBtn.addEventListener('click', function(){
    if (total >0){
        total--
        totalQty.textContent = total
    }
})

