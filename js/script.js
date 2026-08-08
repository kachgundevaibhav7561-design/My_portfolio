window.addEventListener("scroll", function(){

    let navbar = document.querySelector(".navbar");

    if(window.scrollY > 100){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});