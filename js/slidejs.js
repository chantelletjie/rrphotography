


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {                        //arrow functions
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;                                                  // Array or index variable  
  var x = document.getElementsByClassName("mySlides");//grabs the images from class name mySlides
  if (n > x.length) {slideIndex = 1}                  //adds next slide 
  if (n < 1) {slideIndex = x.length}                  //subtracts present slide
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";                     // When image isnt displayed
  }
  x[slideIndex-1].style.display = "flex";             //when image is on display
}