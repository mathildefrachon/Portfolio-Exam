var scrollY = 0;
var distance = 10;
var speed = 5;

let logo = document.querySelector("#logo");

let home = document.querySelector("#BUTTONHOME");
let animation = document.querySelector("#BUTTONANIMATION");
let digital = document.querySelector("#BUTTONDIGITAL");
let videos = document.querySelector("#BUTTONVIDEOS");
let about = document.querySelector("#BUTTONABOUT");

var targethome = document.querySelector("#all_projects").offsetTop;
var targetanimation = document.querySelector("#ANIMATIONPROJECTS").offsetTop;
var targetdigital = document.querySelector("#DIGITALPROJECTS").offsetTop;
var targetvideos = document.querySelector("#VIDEOSPROJECTS").offsetTop;
var targetabout = document.querySelector("#ABOUT").offsetTop;

//home.addEventListener('click', scrollHome);
//animation.addEventListener('click', scrollAnimation);
//digital.addEventListener('click', scrollDigital);
//videos.addEventListener('click', scrollVideos);
//about.addEventListener('click', scrollAbout);

function scrollHome() {

    var currentY = window.pageYOffset; // WHERE WE ARE

    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var animator = setTimeout('autoScrollTo(\'' + targethome + '\')', speed);


        resetScroller(targethome);



}

function scrollAbout() {

    var currentY = window.pageYOffset; // WHERE WE ARE

    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var animator = setTimeout('autoScrollTo(\'' + targetabout + '\')', speed);


       autoScrollTo(targetabout);



}

function scrollAnimation() {

    var currentY = window.pageYOffset; // WHERE WE ARE

    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var animator = setTimeout('autoScrollTo(\'' + targetanimation + '\')', speed);

    if (currentY < targetanimation) {
        console.log("godown");
        autoScrollTo(targetanimation);
    } else {
        console.log("goup");
        resetScroller(targetanimation);
    }


}

function scrollDigital() {

    var currentY = window.pageYOffset; // WHERE WE ARE

    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var animator = setTimeout('autoScrollTo(\'' + targetdigital + '\')', speed);

    if (currentY < targetdigital) {
        console.log("godown");
        autoScrollTo(targetdigital);
    } else {
        console.log("goup");
        resetScroller(targetdigital);
    }


}

function scrollVideos() {

    var currentY = window.pageYOffset; // WHERE WE ARE

    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var animator = setTimeout('autoScrollTo(\'' + targetvideos + '\')', speed);

    if (currentY < targetvideos) {
        console.log("godown");
        autoScrollTo(targetvideos);
    } else {
        console.log("goup");
        resetScroller(targetvideos);
    }


}





function autoScrollTo(n) {

    //    var targetY = document.getElementById().offsetTop; //WHERE IS MY DIV
    var targetY = n;
    var currentY = window.pageYOffset; // WHERE WE ARE

    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var animator = setTimeout('autoScrollTo(\'' + targetY + '\')', speed);

    if (yPos > bodyHeight) {
        clearTimeout(animator);
    } else {
        if (currentY < targetY - distance) {
            scrollY = currentY + distance;
            window.scroll(0, scrollY);
        } else {
            clearTimeout(animator);
        }
    }
    console.log("go down");
    if (window.innerWidth < 480) {
        closeMenu();
        console.log("close");
    }

}

function resetScroller(n) {

    var targetY = n;
    var currentY = window.pageYOffset; // WHERE WE ARE

    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var animator = setTimeout('autoScrollTo(\'' + targetY + '\')', speed);

    if (currentY > targetY) {
        scrollY = currentY - distance;
        window.scroll(0, scrollY);
    } else {
        clearTimeout(animator);
    }
    console.log("go back");
    if (window.innerWidth < 480) {
        closeMenu();
        console.log("close");
    }

}

// TRY STICKY MENU WITHOUT J QUERY

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    StickMenu()
};

// Get the navbar
var menu = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = menu.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
if (window.innerWidth > 480) {

    function StickMenu() {
        if (window.pageYOffset >= sticky) {
            console.log("stick");
            menu.style.position = "fixed";
            menu.style.top = "0";
            menu.classList.add("sticky");
        } else {
            console.log("disappear");
            menu.style.position = "absolute";
            menu.style.top = "99vh";
            menu.classList.remove("sticky");
        }
    }

}

if (window.innerWidth < 480) {
//    location.reload();
    function openMenu() {
        console.log("open Menu");
        document.getElementById("menu").style.display = "inline";


        document.getElementById("burger").style.display = "none";
    }

    function closeMenu() {

        console.log("close menu");
        document.getElementById("menu").style.display = "none";

        document.getElementById("burger").style.display = "block";

    }
}
