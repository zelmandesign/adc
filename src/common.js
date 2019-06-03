import $ from 'jquery';

// Property data API
$.getJSON('https://api.adcookie.usermd.net/deweloper/', function (data) {
  for (var i = 0; i < data.length; i++) {
    $(".carousel-item").each(function(i) {
      if ( i === 0 ) {
          $(this).addClass('active');
      }
    }); 
    var property_data = 
      `<div class="carousel-item">
        <div class="container">
          <div class="row">
            <div class="col-xl col-md-6 mb-5">
              <h2>${data[i].nazwa}</h2>
              <div class="sep"></div>
              <p>Metraż: ${data[i].metraz} m2</p>
              <p>Cena Netto: ${data[i].netto} zł*<br>
              <small>* cena nie zawiera 23% VAT</small></p>
              <p>Piętro: ${data[i].pietro} - Parter</p>
              <p>Przeznaczenie: ${data[i].przeznaczenie}</p>
              <p>Status: ${data[i].status}</p>
              <p class="mt-5"><a href="#contact-top" class="btn btn-black mr-3">Zapytaj</a> <a href="#" class="btn btn-black">Pobierz plan</a></p>

            </div>
            <div class="col-xl col-md-6 mb-5">
              <img src="${data[i].obrazki.rzut}" class="img-fluid" alt="rzut">
            </div>
            <div class="col-xl col-md-6 mb-5">
              <div class="w-100 d-flex justify-content-center">
                <div class="north"></div>
              </div>
              <img src="${data[i].obrazki.pietro}" class="img-fluid" alt="pietro">
            </div>
          </div>
        </div>
      </div>`;
    $(".carousel-inner").append(property_data);
  }
  $('.banner a[href^="#"], #property-carousel a[href^="#"]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate( {
      'scrollTop': $target.offset().top-40
    }, 900, 'swing', function () {
      window.location.hash = target;
    } );
  } );
});

// Hide Nav
'use strict';
  
var c, currentScrollTop = 0,
    navbar = $('.banner');

$(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();
  
    currentScrollTop = a;
  
    if (c < currentScrollTop && a > b) {
      navbar.addClass("scrollUp");
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass("scrollUp");
    }
    c = currentScrollTop;
});

// Mobile Nav Fix
$(window).on('resize', function() {
  if ($(window).width() < 960) {
    $('.nav-link').attr('data-toggle','collapse');
  }
  else {
    $('.nav-link').attr('data-toggle','');
  }
});

// Restricts input for the given textbox to the given inputFilter.
function setInputFilter(textbox, inputFilter) {
  ["input", "keydown", "keyup", "mousedown", "mouseup", "select", "contextmenu", "drop"].forEach(function(event) {
    textbox.addEventListener(event, function() {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}

setInputFilter(document.getElementById("tel"), function(value) {
  return /^\d*\.?\d*$/.test(value);
});

// Trigger Counter whem user scroll to div 

$(window).scroll(function() {
  var hT = $('#about p').offset().top,
      hH = $('#about p').outerHeight(),
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
    $('.digits').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
    
      {
        duration: 8000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
      });
    });
  }
});


