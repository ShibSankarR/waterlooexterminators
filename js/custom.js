
$(window).scroll(function(){
    if ($(window).scrollTop() > 120){
            $("#sticky").addClass('fixed');
    }
    else {
         $("#sticky").removeClass('fixed');
    }
});











$( document ).ready(function() {
  setInterval(function time(){
  var d = new Date();
  var hours = 24 - d.getHours();
  var min = 60 - d.getMinutes();
  if((min + '').length == 1){
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if((sec + '').length == 1){
        sec = '0' + sec;
  }
  jQuery('#countdown #hour').html(hours);
  jQuery('#countdown #min').html(min);
  jQuery('#countdown #sec').html(sec);
}, 1000); });























$(function () {
    var count = 0;
    $('.owl-carousel').each(function () {
        $(this).attr('id', 'owl-demo' + count);
        $('#owl-demo' + count).owlCarousel({
            navigation: true,
            slideSpeed: 300,
            pagination: true,
            singleItem: true,
            autoPlay: 2000,
            autoHeight: true
        });
        count++;
    });
});









   























// MENU

var FX=function(t,e){return e(".menu-button").click(function(){e(".mobile_primary").toggle({direction:"left"}),e(".menu-button").toggleClass("open"),e(".mainnav .pull--right").toggleClass("open")}),e(".mobile_primary .menu-item-has-children").append('<span class="sub-menu--button"></span>'),e(".sub-menu--button").each(function(){e(this).click(function(){e(this).toggleClass("open"),e(this).prev().slideToggle()})})}(FX||{},jQuery);


$(document).on('ready', function() {
$(".testiminial_slider").slick({
    lazyLoad: 'ondemand', // ondemand progressive anticipated
    infinite: true,
    dots: true,
    });
});

$('.affiliations_details').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    autoplaySpeed: 4000,
    responsive: [
    {
    breakpoint: 1100,
    settings: {
      slidesToShow: 5,
      slidesToScroll:1,
      dots: true
    }
    },
    {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true
    }
    },
    {
    breakpoint: 767,
    settings: {
      slidesToShow:3,
      slidesToScroll: 1,
      dots: true
    }
    },
    {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true
    }
    }
    
    ]
    });




























$(document).ready(function(){
	$('#carousel-one').carousel({
		interval: 2000,
		keyboard: false,
		pause: hover
	});
})








