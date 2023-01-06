$(document).ready(function(){

  $('#menu').click(function(){
    // $(this).toggleClass('fa-times');
    // $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});



let menu  =  document.getElementById("menu");
document.querySelector(".close").style.display="none";

menu.addEventListener("click",()=>{
  document.querySelector("header").style.display="block";
  document.querySelector(".close").style.display="block";
  menu.style.display="none";

})

document.querySelector(".close").addEventListener("click",()=>{
  document.querySelector("header").style.display="none";
  document.querySelector(".close").style.display="none";
  menu.style.display="block";
})
