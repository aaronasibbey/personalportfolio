



const images  = ["/website/resources/testphoto1.jpeg", "/website/resources/testphoto2.jpeg", "/website/resources/testphoto3.jpeg"];

const slideshow = document.querySelector(".slideshow");

const interval = setInterval(function(){

    startSlideshow();
}, 10000);   /* Interval for 10000ms AKA 10seconds*/


var index = 1;


startSlideshow = () => {
    slideshow.style.backgroundImage = `url(${images[index++]})`; /* remember: Back ticks (`) as single quotes for java script and $ used to call an object such as variables or functions*/


    /* since fade class is called in html we set the div class to "slideshow fade", we have to remove
    and add fade everytime the slide show starts or else it would only call fade once, code is below */
    slideshow.classList.remove("fade");
    void slideshow.offsetWidth;
    slideshow.classList.add("fade");
    if( index > images.length - 1) index = 0;


}