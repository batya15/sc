// Глобально

var parallaxShift = 100;
this.scrolled = window.pageYOffset;
var scrolled = window.pageYOffset;
var autoScroll = false;
var isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 200
    }, 1000);
});
//var soundClick = new Audio("/sounds/click.wav" ) ;
//soundClick.volume = 0.5

function changePhoto() {

}

$(document).ready(function(){
    $('.arrowProducts').click(function(){
      $(this).parents('.product').find('.productExtra').slideToggle(300);
      $(this).parents('.product').find('.arrowProducts').toggleClass('flip');
      // $('.productExtra').slideToggle(500);
      //  $(this).next('.productExtra').show();
        //alert('clik');
        //$('.productExtra').css('height','auto');
    });
});




// ready
$(function(){

  //$('.sky-video').css('background','url("i/bg_sky_' + (Math.floor(Math.random() * 1) + 1) + '.gif")');
  $('.sky-video').css('background-size','cover');
  //this.logosOffset = document.getElementsByClassName('logosLine')[0].offsetTop + 200;
  this.visible = true;
})

// После загрузки

function pageLoaded() {


  $('.preloader').css('opacity',0);
  $('.preloader').css('z-index',0);
  //root.style.setProperty('--colorMain', '#1A'+(Math.floor(Math.abs(Math.sin(i/1000)*9))+1)+'FF6');

}


setInterval(function(){


  if (this.visible == true) {$('.blink').css('opacity','0'); this.visible = false;} else {$('.blink').css('opacity','1'); this.visible = true;}




}, 500);









//



// offset vars
function getScrolled() {

  this.scrolled = window.pageYOffset;
  var scrolled = window.pageYOffset;

}

function resize() {
  var canvasSize = window.innerWidth;


// подгонка шестиугольной svg-маски
  //if (typeof window.orientation == 'undefined') {document.getElementById('hexPath').style.transform="scale("+ window.innerWidth/1000 +")";}



//this.logosOffset = document.getElementsByClassName('logosLine')[0].offsetTop;


}





function scrollTopLocal() {
/*$("html, body").animate({
    scrollTop: 0
  }, {
    duration: 1200,
    easing: "easeInOut"
  });*/
}




function isItVisible(object) {

  var item = document.getElementById(object);

  getScrolled();
  //if ((item.offsetTop - window.innerHeight) < scrolled) {item.style.backgroundColor="none";};  //crossed the floor
  //if (item.offsetTop < scrolled) {item.style.backgroundColor="none";}; // crossed the celling

}


function showDiv(divName) {



  if (divName == 'mapMoscow') {$('.mapMoscow').css('display','block');$('.mapSpb').css('display','none');$('.mapY').css('display','none');}
  if (divName == 'mapSpb') {$('.mapMoscow').css('display','none');$('.mapSpb').css('display','block');$('.mapY').css('display','none');}
  if (divName == 'mapY') {$('.mapMoscow').css('display','none');$('.mapSpb').css('display','none');$('.mapY').css('display','block');}
  //if ((item.offsetTop - window.innerHeight) < scrolled) {item.style.backgroundColor="none";};  //crossed the floor
  //if (item.offsetTop < scrolled) {item.style.backgroundColor="none";}; // crossed the celling

}


function showMenu() {

  $('.menuTop').css('position', 'fixed');




if (isMobile) {  //desktop script


  $('.menuTop').css('margin-top', '20vh');
  $('.menuBG').css('display', 'block');
  $('.menuBG').css('opacity', '0.9');
    //  $('div').css('filter', 'saturate(0%)');
    }
    else {
      $('.menuTop').css('margin-top', '35px');
      $('body').css('margin-top','98px')
      $('.menuGlow').css('top','-20px');

    }


}

function hideMenu() {

    if (isMobile) {

      // mobile script
        $('.menuTop').css('margin-top', '-200vh');
        $('.menuBG').css('opacity', '0');
        $('.menuBG').css('display', 'none');





    }
    else {


    $('body').css('margin-top','0')
    $('.menuGlow').css('top','-120px')
    if (scrolled > 100){$('.menuTop').css('margin-top', '-10vh');    }
    }
}






document.addEventListener("touchmove", ScrollStart, false);
function ScrollStart() {
    //start of scroll event for iOS
    hideMenu();
    if (scrolled>150) {
    } else {
      $('.menuTop').css('position', 'absolute');
      $('.menuTop').css('margin-top', '35px');
    }
}

window.onscroll = function() {

  getScrolled();

  hideMenu();
  isItVisible('decor__sculpture');

  let root = document.documentElement;

  //$('h1').css('color', '#'+ Math.floor(Math.sin(scrolled/21)) +'0'+ Math.floor(Math.sin(scrolled/10)) +'F06');



if (typeof window.orientation == 'undefined') {




  //$('.photoOffice').css('background-size', scrolled/38+'%');

//  if (scrolled<600) {$('.item').css('perspective', 10-scrolled/100+'vh');}

//psy

    //  $('.item').css('transform','rotate3d(1,1,0,'+ (Math.sin(scrolled/1000)*Math.cos(scrolled/1000))*0.2 +'deg)');
    //  $('.container').css('transform','scale(' + (1-Math.sin(scrolled/500)*Math.cos(scrolled/500)/25) +')');
      // меняем главный синий покругу
      //root.style.setProperty('--colorMain', '#1A'+(Math.floor(Math.abs(Math.sin(scrolled/1000)*9))+1)+'FF6');



    //$('.decor__sculpture').css('transform','scale('+ (0.5 + scrolled/2000) +')');
    //$('.logoPixel').css('margin-top',100-scrolled/5+'px');
  //  $('.logoPixel').css('transform', 'rotate3d(1,1,0,'+ (Math.sin(1000-scrolled/1750))*90 +'deg)');

    $('.decorRight').css('transform','rotate('+(-1*scrolled/10)+'deg)');

    $('.decorBigMechanism').css('transform','rotate(' + (1*scrolled/10)+'deg)');

    $('.logoCircle').css('transform','rotate('+ (130+(scrolled)/8) + 'deg)');

    $('.parallax').css('padding-bottom',  -400+scrolled/4);

    //$('.lifePhotos').css('margin-bottom',  $('.lifePhotos').offset().top - scrolled);


      if (scrolled>150) {
      } else {
        $('.menuTop').css('position', 'absolute');
        $('.menuTop').css('margin-top', '35px');
      }


/*
    $('.photoHex').each( function(i){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it in */
        /* if( bottom_of_window > (bottom_of_object-200) ){
            $(this).animate(
              {'margin-top':-scrolled+$(this).offset().top+'px'}, 300
          );
        }
    });*/
}

  //document.getElementById('logosLine').style.marginLeft = (this.logosOffset - scrolled) + 'px';
  //console.log(this.logosOffset*5 - scrolled*5);
  //document.getElementsByClassName('topTextOne')[0].style.marginBottom = -scrolled/2 + 'px';





  /* Check the location of each desired element
   $('.hidden').each( function(i){
       var bottom_of_object = $(this).offset().top + $(this).outerHeight();
       var bottom_of_window = $(window).scrollTop() + $(window).height();

       if( bottom_of_window > (bottom_of_object-400) ){
           $(this).animate(
             {'opacity':'1'}, 200
         );
       }
   });*/



}
