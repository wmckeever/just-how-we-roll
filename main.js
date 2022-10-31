/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/

// Reset Button
let resetButton = document.querySelector('#reset-button');

//single d6 image
let d6Image = document.querySelector('#d6-roll');
let d6MeanDisplay = document.querySelector('#d6-rolls-mean');




/*******************
 * EVENT LISTENERS *
 *******************/
d6Image.addEventListener('click', function(){
    console.log("D6 is working as intended!")
   
})
resetButton.addEventListener('click', function(){
    console.log("Reset button is working as intented!")
    resetClicked();
})



/******************
 * RESET FUNCTION *
 ******************/
function resetClicked () {
    // empty global arrays
    sixes = [];
    doubleSixes = [];
    twelves = [];
    twenties = [];
    
    // reset images
    d6Image.src = "./images/start/d6.png";
    d6MeanDisplay.innerText = "NA";
}
// global reset function called when the page is loaded:
resetClicked();

/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/         



/****************
 * MATH SECTION *
 ****************/
