const bars = document.querySelector(".fa-arrow-right");
const sidenav = document.querySelector(".sidenav");
const closingButton = document.querySelector(".fa-arrow-left")

bars.addEventListener("click", () => {
  sidenav.classList.toggle("show-sidenav")
})
closingButton.addEventListener("click", ()=>{
  sidenav.classList.remove("show-sidenav")
})

/*
function HideBar(click) {
    document.getElementsByClassName("sidenav").style.transform = "-100"
}
*/
/*
function Title() {
    document.getElementById("Title").innerHTML = "Alex Russano";
  }*/