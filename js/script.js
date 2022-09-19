document.querySelector(".menu-open").addEventListener("click", function(event){
    event.preventDefault();
    document.querySelector("#menu").setAttribute("aria-expanded","true");
    document.querySelector(".menu-close a").classList.add("active");
    document.querySelector(".menu-open a").classList.remove("active");
});
document.querySelector(".menu-close").addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector("#menu").setAttribute("aria-expanded","false");
    document.querySelector(".menu-open a").classList.add("active");
    document.querySelector(".menu-close a").classList.remove("active");
});