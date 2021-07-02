if(localStorage.getItem("username")!=null){
    window.location.href="./home.html";

}


if(localStorage.getItem("dark")==="false"){
    document.querySelector("link").href="./public/assets/style/style_light.css"
}else {
    document.querySelector("link").href="./public/assets/style/style_dark.css"
}



let errorElement=document.createElement("span");
errorElement.innerText="Questo campo è obbligatorio";
errorElement.classList.add("error");
let privacyToggle=false;
document.querySelector(".outer").addEventListener("click", () => {

   if(privacyToggle === false){
    document.querySelector(".inner").style.width="15px";
    document.querySelector(".inner").style.height="15px";
   }else {
    document.querySelector(".inner").style.width="0px";
    document.querySelector(".inner").style.height="0px";
   }
   
   privacyToggle=!privacyToggle;


})


let uShown= false;
let eShown=false;
let aShown=false;
document.querySelector(".button.config").addEventListener("click", () => {

    var check=true;
    if(privacyToggle === false){
        document.querySelector(".outer").classList.add("errorBorder");
        document.querySelector(".inputWrapper.check > label").appendChild(errorElement);
    }else{
        document.querySelector(".outer").classList.remove("errorBorder");
        let remove=document.querySelector(".inputWrapper.check > label > span");
        if(remove != null){
            document.querySelector(".inputWrapper.check > label").removeChild(errorElement);
        }
    }

    let usernameField= document.querySelector("input[name=username]");
    let username= usernameField.value;
    let uError=errorElement.cloneNode(true);
    

    if(username.length <1 && uShown === false){
        usernameField.classList.add("errorBorder");
        usernameField.parentNode.appendChild(uError);
        uShown=true;
    }if(username.length >=1 && uShown === true){
        usernameField.classList.remove("errorBorder");
        if( document.querySelector(".inputWrapper.username span") !=null){
        document.querySelector(".inputWrapper.username span").remove();
        
        }
        uShown=false;
    }


    let emailField= document.querySelector("input[name=email]");
    let email=emailField.value;
    let eError=uError.cloneNode(true);
    

    if(email.length <1 && eShown === false){
        emailField.classList.add("errorBorder");
        emailField.parentNode.appendChild(eError);
        eShown=true;
    }if(email.length >=1 && eShown === true){
        emailField.classList.remove("errorBorder");
        if( document.querySelector(".inputWrapper.email span") !=null){
        document.querySelector(".inputWrapper.email span").remove();
        }
        eShown=false;
    }

    let ageField= document.querySelector("input[name=age]");
    let age=ageField.value;
    let aError=uError.cloneNode(true);
    

    if(age.length <1 && aShown === false){
        ageField.classList.add("errorBorder");
        ageField.parentNode.appendChild(aError);
        aShown=true;
    }if(age.length >=1 && aShown === true){
        ageField.classList.remove("errorBorder");
        if( document.querySelector(".inputWrapper.age span") !=null){
        document.querySelector(".inputWrapper.age span").remove();
        }
        aShown=false;
    }

    if(username.length>= 1 && email.length >=1 && age.length >=1 && privacyToggle ){
        localStorage.setItem("username",username);
        window.location.href="./connect.html";
    }
    
})