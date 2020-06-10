'use strict';

$(function(){ 
    var width = 720;
    var animationSpeed = 1000;
    var pause = 2000;
    var currentSlide = 1;

    var $slider = $("#slider");
    var $sliderContainer = $slider.find(".slides");
    var $slides = $sliderContainer.find(".slide");

    var interval;

    function startSlider(){
        interval = setInterval(function(){
            $sliderContainer.animate({'margin-left': '-='+width},animationSpeed, function(){
                currentSlide++;
                if(currentSlide===$slides.length){
                    currentSlide = 1;
                    $sliderContainer.css('margin-left',0);
                }
            });
        },pause);
    };

    function pauseSlider(){
        clearInterval(interval);
    }

    $slider.on('mouseenter', pauseSlider).on('mouseleave', startSlider);

    startSlider();

})