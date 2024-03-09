let closeIcon = document.getElementById("closeIcon");
let menuIcon = document.getElementById("menuIcon");
let navLink = document.getElementById("navLink");
closeIcon.onclick = function clickCloseIcon(){
    navLink.style.right = "-200px";
}
menuIcon.onclick = function clickMenuIcon(){
    navLink.style.right ="0px";
    navLink.style.display = "inline-block";

}