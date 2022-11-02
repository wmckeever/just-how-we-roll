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
 
 //double d6 image1
 let dd6Image1 = document.querySelector('#double-d6-roll-1');
 let dd6MeanDisplay1 = document.querySelector('#double-d6-rolls-mean');
 
 //double d6 image2
 let dd6Image2 = document.querySelector('#double-d6-roll-2');
 let dd6MeanDisplay2 = document.querySelector('#double-d6-rolls-mean');
 
 //d12 image
 let d12Image = document.querySelector('#d12-roll');
 let d12ImageMeanDisplay = document.querySelector('#d12-rolls-mean'); 
 
 //d20 image
 let d20Image = document.querySelector('#d20-roll');
 let d20ImageMeanDisplay = document.querySelector('#d20-rolls-mean'); 
 
 
 
 
 /*******************
  * EVENT LISTENERS *
  *******************/
 d6Image.addEventListener('click', function(){
     console.log("D6 is working as intended!")
         d6RollFunction();
    })
 
 dd6Image1.addEventListener('click', function(){
     console.log("DD6-1 is working as intended!")
         dd6RollFunction1();
         dd6RollFunction2();
    })
 dd6Image2.addEventListener('click', function(){
     console.log("DD6-2 is working as intended!")
     dd6RollFunction1();
     dd6RollFunction2();
    })
 
 d12Image.addEventListener('click', function(){
     console.log("D12 is working as intended!")
     d12RollFunction();
    })
 
 d20Image.addEventListener('click', function(){
     console.log("D20 is working as intended!")
     d20RollFunction();
    })
 
 
  //<-------------- Reset Buttin Event Listener  -------------->//
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
     dd6Image1.src = "./images/start/d6.png";
     dd6Image2.src = "./images/start/d6.png";
     d12Image.src = "./images/start/d12-2.png";
     d20Image.src = "./images/start/d20-1.png";
     d6MeanDisplay.innerText = "NA";
     dd6MeanDisplay1.innerText = "NA";
     d12ImageMeanDisplay.innerText = "NA";
     d20ImageMeanDisplay.innerText = "NA";
 }
 //! global reset function called when the page is loaded:
 resetClicked();
 
 //<-------------- d6 Function  -------------->//
 
 function d6RollFunction () {
     let result = getRandomNumber(6);
     console.log(result);
     console.log(sixes);
     sixes.push(result);
     getMean(sixes);
     d6MeanDisplay.innerText = getMean(sixes);
     
 
     // Chooses the correct image file based on string interpolation and the result. Can be done with an if/ else loop as well. 
     d6Image.src = `./images/d6/${result}.png`
    }
 
 //<-------------- Double d6 Function  -------------->//
 
 function dd6RollFunction1 () {
     let result = getRandomNumber(6);
     console.log(result);
     console.log(doubleSixes);
     doubleSixes.push(result);
     getMean(doubleSixes);
     dd6MeanDisplay1.innerText = getMean(doubleSixes);
    
 
    //* Chooses the correct image file based on string interpolation and the result. Can be done with an if/ else loop as well. 
 
     dd6Image1.src = `./images/d6/${result}.png`
    }
 
 function dd6RollFunction2 () {
     let result = getRandomNumber(6);
     console.log(result);
     console.log(doubleSixes);
     doubleSixes.push(result);
     getMean(doubleSixes);
     dd6MeanDisplay2.innerText = getMean(doubleSixes);
    
 
     //* Chooses the correct image file based on string interpolation and the result. Can be done with an if/ else loop as well. 
     dd6Image2.src = `./images/d6/${result}.png`
    }
 
 //<-------------- d12 Function  -------------->//
 
 function d12RollFunction () {
     let result = getRandomNumber(12);
     console.log(result);
     console.log(twelves);
     twelves.push(result);
     getMean(twelves);
     d12ImageMeanDisplay.innerText = getMean(twelves);
    
 
     //* Chooses the correct image file based on string interpolation and the result. Can be done with an if/ else loop as well. 
     d12Image.src = `./images/numbers/${result}.png`
    }
 
 //<-------------- d20 Function  -------------->//
 
 function d20RollFunction () {
     let result = getRandomNumber(20);
     console.log(result);
     console.log(twenties);
     twenties.push(result);
     getMean(twenties);
     d20ImageMeanDisplay.innerText = getMean(twenties);
    
 
     //* Chooses the correct image file based on string interpolation and the result. Can be done with an if/ else loop as well. 
     d20Image.src = `./images/numbers/${result}.png`
    }
 
 /****************************
  * CLICK HANDLING FUNCTIONS *
 ****************************/         
 
 
 
 /****************
  * MATH SECTION *
  ****************/
 function getMean (array) {
     // * first create a variable to keep track of total:
     let total = 0;
     
     // then add all the numbers together and adds it to total:numbers in the array:
     for (let i = 0; i < array.length; i++) {
         total = total + array[i];
     }
     //and divide by the amount of numbers in array:
        return total/array.length;
    }