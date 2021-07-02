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
app();