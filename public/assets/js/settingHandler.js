if(localStorage.getItem("username")==null){
    window.location.href="./index.html";

}


if(localStorage.getItem("dark")==="false"){
    document.querySelector(".toggle").style.left="10%";
         //document.querySelector(".toggle").style.right="80%";
         document.querySelector(".toggle").style.transform="translateX(-10%) translateY(-50%)";
        document.querySelector("link").href="./public/assets/style/style_light.css"
}else {
    document.querySelector(".toggle").style.left="90%";
    // document.querySelector(".toggle").style.right="10%";
    document.querySelector(".toggle").style.transform="translateX(-90%) translateY(-50%)";
 document.querySelector("link").href="./public/assets/style/style_dark.css"
}




const app = async () => {





document.querySelector(".toggle").addEventListener("click", async (el) => {

    console.log("storage " + localStorage.getItem("dark"))
    localStorage.getItem("dark");

    var newVal  = localStorage.getItem("dark");
    console.log("newVal "+newVal);

  if(newVal==="false"){

    console.log("in");
       document.querySelector(".toggle").style.left="90%";
       // document.querySelector(".toggle").style.right="10%";
       document.querySelector(".toggle").style.transform="translateX(-90%) translateY(-50%)";
    document.querySelector("link").href="./public/assets/style/style_dark.css"
    localStorage.removeItem("dark");
    newVal=true;
    }else{
         document.querySelector(".toggle").style.left="10%";
         //document.querySelector(".toggle").style.right="80%";
         document.querySelector(".toggle").style.transform="translateX(-10%) translateY(-50%)";
        document.querySelector("link").href="./public/assets/style/style_light.css"
        localStorage.removeItem("dark");
        newVal=false;
    }

    
    console.log("newVal "+newVal);

    localStorage.setItem("dark",newVal);


});
}

const handleNav = () => {
    let navIcons = document.querySelectorAll(".navbar > img");

    navIcons[0].addEventListener('click', () => location.href="./home.html");
    navIcons[1].addEventListener('click', () => location.href="./stats.html");
    navIcons[2].addEventListener('click', () => location.href="./advice.html");
    navIcons[3].addEventListener('click', () => location.href="./settings.html");
}

handleNav();
app();