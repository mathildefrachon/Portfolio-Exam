var scrollY = 0;
var distance = 10;
var speed = 5;

function autoScrollTo(el) {
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
    var bodyHeight = document.body.offsetHeight;
    var yPos = currentY + window.innerHeight;
    var animator = setTimeout('autoScrollTo(\'' + el + '\')', speed);
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

function resetScroller(el) {
    var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
    var animator = setTimeout('resetScroller(\'' + el + '\')', speed);
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


// FIN SCROLLING CODE

//MENU FOR DEKSTOP

if (window.innerWidth > 480) {
    document.getElementById("menu").style.top = "0";
}


//MENU FOR MOBILE

if (window.innerWidth < 480) {

    document.getElementById("burger").style.color = "#0c0c37";

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