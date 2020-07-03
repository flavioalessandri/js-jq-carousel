
//open jquery library when DOM is fully loaded
$(document).ready(function(){

var nextBtn= $('.next');
var prevBtn = $('.prev');





nextBtn.click(function (){

  var imgShow = $('.images img.active'); //active image
  imgShow.removeClass('active'); //remove active class to hide image

  if(imgShow.hasClass('last') == true){ //when carousel nextBtn click on the last image
    ($('.images img.first').addClass('active')); //show first image
  } else{
    imgShow.next().addClass('active'); //else continue to show the images
}
})

prevBtn.click(function (){

  var imgShow = $('.images img.active'); //active image
  imgShow.removeClass('active'); //remove active class to hide image

  if(imgShow.hasClass('first') == true){ //when carousel nextBtn click on the last image
    ($('.images img.last').addClass('active')); //show first image
  } else{
    imgShow.prev().addClass('active'); //else continue to show the images
}
})









}
);
