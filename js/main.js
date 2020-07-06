$(document).ready(function(){ //open jquery library when DOM is fully loaded

  var nextBtn= $('.next');
  var prevBtn = $('.prev');

  // function to control the carousel using <div> class next (from left to right)
  nextBtn.click(nextImage);
  // It's the some way to type:

  // nextBtn.click(function(){
  //   nextImage();
  // });

  // function to control the carousel using <div> class prev (from right to left)
  prevBtn.click(prevImage);
  // It's the some way to type:

  // prevBtn.click(function(){
  //   prevImage();
  // });

  // function to control the carousel using keyboard key (left and right narrow)
  $(document).keydown(carouselKeyControl);
  // It's the some way to type:

    // $(document).keydown(function(){
    // carouselKeyControl();
    // });

  $('.slider-wrapper .nav>i').click(function(){
    $('.nav >i').removeClass('active');
    $(this).addClass('active');
    var thisIndex = $(this).index();
    $('img.active').removeClass('active');
    $('img').eq(thisIndex).addClass('active');

 });

});  //close document ready function

// MY functions................................................

// function for the next image......................

function nextImage(){

  var imgShow = $('.slider-wrapper img.active'); //active image
  console.log("image active" ,imgShow);
  imgShow.removeClass('active'); //remove active class to hide image

  var markShow = $('.slider-wrapper i.active'); //active circle marker
  console.log("marker" ,markShow);
  markShow.removeClass('active'); //remove active class to hide marker

//after every click of the "next" button the browser'll show the next image and marker
  if(imgShow.hasClass('last') == true) { //once we'll arrive to the last image (with "last£ class)
    $('.slider-wrapper img.first').addClass('active'); //show first image of the array
    $('.slider-wrapper i.first').addClass('active'); //show first marker of the array
  } else{
    imgShow.next().addClass('active'); //else continue to show  next image
    markShow.next().addClass('active'); //else continue to show next  marker
  }
}
// end of function......................

// function for the prev image......................

function prevImage(){

  var imgShow = $('.slider-wrapper img.active'); //active image
  console.log("image active" ,imgShow);
  imgShow.removeClass('active'); //remove active class to hide image

  var markShow = $('.slider-wrapper i.active'); //active circle marker
  console.log("marker" ,markShow);
  markShow.removeClass('active'); //remove active class to hide marker

//after every click of the "prev" button the browser'll show the previous image and marker
  if(imgShow.hasClass('first') == true){ //when carousel nextBtn click on the first image
    $('.slider-wrapper img.last').addClass('active'); //show last image  instead of first
    $('.slider-wrapper i.last').addClass('active'); //show last marker  instead of first
  } else{
    imgShow.prev().addClass('active'); //else continue to show the images
    markShow.prev().addClass('active'); //else continue to show next the marker
  }
}
// end of function......................

// function for Keyboard control......................

function carouselKeyControl(){
  console.log("tasto premuto",event.which);
  var key = event.which;
  if(key == 39){   // right narrow
    nextImage();
  } else if (key == 37){ // left narrow
     prevImage();
  }
}

// end of function......................
