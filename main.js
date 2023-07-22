const tabLinks = document.getElementsByClassName("tab-links")
const tabContents = document.getElementsByClassName("tab-contents")
function openTab(tabName){
    for(let tableLink of tabLinks) {
      tableLink.classList.remove('active-link')
    }
    for(let tableContent of tabContents) {
      tableContent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link')
    document.getElementById(tabName).classList.add("active-tab")
}

/......................................./ 
let sideMenu = document.getElementById("sidemenu")
function openmenu(){
  sideMenu.style.right = "0";
}
function closemenu(){
  sideMenu.style.right = "-200px";
}
/......................................../ 
const subscribe = document.querySelector(".login-btn")
const iconClose = document.querySelector(".icon-close")
const wrapper = document.querySelector(".wrapper")
subscribe.addEventListener('click',()=>{
  wrapper.classList.add('active-popup')
})
iconClose.addEventListener('click',()=>{
  wrapper.classList.remove('active-popup')
})