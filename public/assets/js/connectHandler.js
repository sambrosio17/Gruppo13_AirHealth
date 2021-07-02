if(localStorage.getItem("ok")==="true"){
    window.location.href = "./home.html";
}

if(localStorage.getItem("dark")==="false"){
    document.querySelector("link").href="./public/assets/style/style_light.css"
}else {
    document.querySelector("link").href="./public/assets/style/style_dark.css"
}

localStorage.setItem("ok",true);

window.setTimeout(function(){

    // Move to a new location or you can do something else
    window.location.href = "./home.html";

}, 5000)

