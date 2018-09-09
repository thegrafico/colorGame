//alert("CONNECTED");
//the number of div to show
var numberOfSquare = 6;
//our list of colors [] (is array)
var colors = generateRandoColorNum(numberOfSquare);

//select all the DOM that have class square only
var squareDiv = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
//the color we pick
var pickedColor = pickColor();
var colorDisplayed = document.getElementById("colorDisplay");
var messageSpan = document.querySelector("#message");

//button Reset
var btn = document.querySelector("#btn");
//hard and easy btn
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
  //if you press CTRL + d -> select the next word you have selected
//the message tha apear at the top
colorDisplayed.textContent = pickedColor;

for (var i = 0; i < squareDiv.length; i++) {
  //give the firts color of my arry to the firts elemento of square
  squareDiv[i].style.backgroundColor = colors[i];

  squareDiv[i].addEventListener("click", function(){
    //alert(this.style.backgroundColor);

    //grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    //compare color to pickedColor
    if(clickedColor === pickedColor){
        //display message
        messageSpan.textContent = "WIN";
        //button message
        btn.textContent = "Play Again?";
        //only if win change the color of all element
        changeColor(clickedColor);
        //change the color of h1 element
        h1.style.backgroundColor = clickedColor;
      }
      else{
        this.style.backgroundColor = "#232323";
        messageSpan.textContent = "Try again";
      }
  });
}

function pickColor(){
  //get the random element
  var random = Math.floor(Math.random() * colors.length);
  
  return colors[random];
}

//function to change the color
function changeColor(color){
  //loop through all square
  for (var i = 0; i < squareDiv.length; i++) {
    //change the color of all the square
    squareDiv[i].style.backgroundColor = color;
  }
}

function generateRandoColorNum(num){
  //created our arr
  var arr = [];
  //repeat num times
  for(var i = 0; i < num; i++){
    //get Random color and push into array
    arr.push(randomColor());
  }
  //return arr
  return arr;
}

function randomColor(){
  //RBG go 0 to 255
  var r = Math.floor(Math.random() * 256);

  var g = Math.floor(Math.random() * 256);

  var b = Math.floor(Math.random() * 256);
  //rgb(r, g, b);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

btn.addEventListener("click", function(){
  //generate random new colors
  colors = generateRandoColorNum(numberOfSquare);
  //pick new random color
  pickedColor = pickColor();
  //change color display
  colorDisplayed.textContent = pickedColor;
  //change the color of all square

  for (var i = 0; i < squareDiv.length; i++) {
    //give the firts color of my arry to the firts elemento of square
    squareDiv[i].style.backgroundColor = colors[i];
  }

  //dysplayed message
  btn.textContent = "New Colors";
  messageSpan.textContent = "";
  //change color of h1
  h1.style.backgroundColor = "steelblue";
});

//Easy And Hard Button
easyBtn.addEventListener("click", function(){

  //set the color of the selected button
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  
  numberOfSquare = 3;
  //set new colors
  colors = generateRandoColorNum(numberOfSquare);
  //pick new color
  pickedColor = pickColor();
  //change de massage
  colorDisplayed.textContent = pickedColor;

  for (var i = 0; i < squareDiv.length; i++) {
    //is there are any colors
    if(colors[i]){
        squareDiv[i].style.backgroundColor = colors[i];
    } else
      squareDiv[i].style.display = "none";
  }
});


hardBtn.addEventListener("click", function(){

  //set the color of the selected button
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");


  numberOfSquare = 6;
  //set new colors
  colors = generateRandoColorNum(numberOfSquare);
  //pick new color
  pickedColor = pickColor();
  //change de massage
  colorDisplayed.textContent = pickedColor;

  for (var i = 0; i < squareDiv.length; i++) {
    
    squareDiv[i].style.backgroundColor = colors[i];
    squareDiv[i].style.display = "block";
  }
});











































