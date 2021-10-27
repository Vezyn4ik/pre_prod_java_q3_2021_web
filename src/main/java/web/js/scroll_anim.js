var isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);
function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function() {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var list = document.querySelectorAll(".animl,.animr, .footer_div, form, .gridright, .gridleft ");

function scrolling(e) {
    for (var item of list) {
        if (isPartiallyVisible(item)) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    }
}

function isPartiallyVisible(el) {
    var elementBoundary = el.getBoundingClientRect();
    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;
    return ((top + height >= 0) && (height + window.innerHeight >= bottom));
}
