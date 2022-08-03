const header = document.querySelector("header")
let language = document.getElementById("language")
let others = document.getElementById("others")
let up = document.querySelector(".fa-chevron-down")
let srch = document.querySelector(".srch")
let search = document.getElementById("search")
let searchbar = document.getElementById("search-bar")
let searchinp = document.querySelector ("#search-bar input")
let closest = document.querySelector(".close")
let iconclose = document.querySelectorAll(".fa-times")
let opens = document.querySelectorAll(".open")
let fkkmd = document.getElementById("fkk-md")
let fkmdchild = document.getElementById("fkk-md-child")
let hamburger = document.querySelector(".hamburger")
let hamburgerbox = document.getElementById("burger-menu-box")
let body = document.querySelector("body")
let navtop = document.getElementById("nav-top")
let divs = document.getElementsByTagName("div")
let navs = document.getElementById("navs")
let navbtm = document.getElementById("nav-bottom")
let az = document.getElementById("right-logo-lng-az")
let language2 = document.getElementById("lng2")
let arrow = document.querySelector(".arrow")

body.onclick = function() {
    up.classList.remove("fa-chevron-up")
    up.classList.add("fa-chevron-down")
    others.classList.remove("flex")
    // fkmdchild.style.display="none"
    // fkmdchild.classList.remove("none")
}
language.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation()
    up.classList.toggle("fa-chevron-up")
    others.classList.toggle("flex")
});
search.addEventListener("click",(e)=>{
    e.preventDefault()
    searchbar.classList.toggle('fade');
    srch.classList.toggle('filter')
    search.classList.toggle('color')
    if (searchbar.style.opacity == 0) searchinp.value = ''
  })
closest.addEventListener("click", function() {
    closest.parentElement.classList.remove('fade')
    search.classList.remove('color')
    srch.classList.remove('filter')
    if (searchbar.style.opacity == 0) searchinp.value = ''
    
})

iconclose.forEach(close => {
    close.addEventListener('click', function (e) {
        e.preventDefault()
        close.parentElement.parentElement.style.display = "none"
    })
})
opens.forEach(open => {
    open.addEventListener('mouseenter', function (e) {
        e.target.querySelector('.nav-sub').style.display = "flex"
    })
    open.addEventListener('mouseleave', function (e) {
        e.target.querySelector('.nav-sub').style.display = "none"
    })
})
fkkmd.onclick=function() {
    fkmdchild.classList.toggle("none")
}
hamburger.onclick=function() {
    hamburger.classList.toggle("is-active");
    hamburgerbox.classList.toggle("box-left-none")
    body.classList.toggle ("overflow-y")
}

$(window).bind('mousewheel', function(event) {
    if (event.originalEvent.wheelDelta >= 0) {
        header.classList.remove("scroll")
    }
    else {
        header.classList.add("scroll")
    }
});

az.addEventListener("click", (e) => {
    e.preventDefault();
    arrow.classList.toggle("arrow-open")
    language2.classList.toggle("none")
});