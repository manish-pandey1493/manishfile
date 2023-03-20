
$(document).ready(function() {

    var lastScrollTop = 0;
    var navbar = $('.navbar');
    var navbarHeight = navbar.outerHeight();
    
    $(window).scroll(function(event){      
      var st = $(this).scrollTop();
      if (st < lastScrollTop){
          navbar.removeClass('navbar-hidden');
      } else {
     
        if (st > lastScrollTop && st > navbarHeight){
          navbar.addClass('navbar-hidden');
        }
      }
      lastScrollTop = st;
    });
    
  });



  




  // Get the "scroll to top" button & btn will have upward icon tp//gradient
var mybutton = document.getElementById("myBtn");

// When only the user scrolls down 500px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 4000 || document.documentElement.scrollTop > 4000) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};


function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}