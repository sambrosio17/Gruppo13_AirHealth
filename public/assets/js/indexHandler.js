
if(localStorage.getItem("reg")==="true"){
    window.location.href="./home.html";
}else {
    localStorage.setItem("dark",false);
}



document.querySelector(".button.config").addEventListener("click", () => {
    localStorage.setItem("reg",true);
    window.location.href="./configure.html";
})