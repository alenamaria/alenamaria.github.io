// Generell - Scroll-Effekt: Konditionale Anweisung
var h = window.innerHeight;
var nav = document.getElementsByClassName('nav');
window.addEventListener('scroll', function () {
    if (nav.length != 0) {
        // Festlegen, wann die Navigationsleiste 'fixed' ist und wann nicht
        if (window.pageYOffset >= h) {
            nav[0].style.position = 'fixed';
        }
        else {
            nav[0].style.position = 'relative';
        }
    }
});
// Back-to-top Button
window.onscroll = function () {
    scrollFunction();
};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    }
    else {
        document.getElementById("myBtn").style.display = "none";
    }
}
// Wenn der Button gedrueckt wird, springt es wieder zum Anfang der Seite
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
