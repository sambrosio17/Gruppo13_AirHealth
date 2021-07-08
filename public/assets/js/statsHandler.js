if(localStorage.getItem("username")==null){
    window.location.href="./index.html";

}


if(localStorage.getItem("dark")==="false"){
    document.querySelector("link").href="./public/assets/style/style_light.css"
}else {
    document.querySelector("link").href="./public/assets/style/style_dark.css"
}




const handleNav = () => {
    let navIcons = document.querySelectorAll(".navbar > img");

    navIcons[0].addEventListener('click', () => location.href="./home.html");
    navIcons[1].addEventListener('click', () => location.href="./stats.html");
    navIcons[2].addEventListener('click', () => location.href="./advice.html");
    navIcons[3].addEventListener('click', () => location.href="./settings.html");
}

let dataPos=0;
let numberDate=0;


const main = async (dataPos) => {

    let data = await (await fetch("./public/assets/json/home.json")).json();


    let day=document.querySelector("#day");
    let posElement=document.querySelector("#location");
    let percentageElement=document.querySelector("#percentage");
    let subPos=document.querySelector("p#position");
    let subPercentage= document.querySelector(".innerBox #percentage");
    let values= document.querySelectorAll("#value");
    let shortDesc=document.querySelector("#percentageDescription");
    let longDesc=document.querySelector("#fullDescription");
    let imgGauge=document.querySelector(".gauge > img");
    

    let date= new Date();
    subPos.innerText=localStorage.getItem("position");
    let mesi=["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre","Dicembre"];

    day.innerText=(date.getDate()+dataPos)+" "+mesi[date.getMonth()];
    let currentData= await data[dataPos];
    percentageElement.innerText=  currentData.percentage+"%";
    subPercentage.innerText= currentData.percentage;
    imgGauge.src="./public/assets/images/sample/gauge"+ await currentData.percentage+".png";
    shortDesc.innerText= currentData.shortDescription;
    longDesc.innerText= currentData.longDescription;

    for(let i=0; i<values.length; i++){
        values[i].innerText=  currentData.values[i];
        console.log(currentData.values[i]);

}
}

handleNav();
main(dataPos,numberDate);


document.querySelector(".slider > span:nth-child(3)").addEventListener("click", () => {
    dataPos= (dataPos+1)%5;
    console.log(dataPos);
    main(dataPos);
})

document.querySelector(".slider > span:nth-child(1)").addEventListener("click", () => {
    dataPos= (dataPos+4)%5;
    console.log(dataPos);
    main(dataPos);
})

document.querySelector(".button.share").addEventListener("click", () => {
    document.querySelector(".blurred").style.height="100%";
    document.querySelector(".blurred").style.opacity="100%";

    document.querySelector(".sharingBox").style.zIndex="101";
    document.querySelector(".sharingBox").style.opacity="100%";
})

document.querySelector("#close").addEventListener("click", () => {
    document.querySelector(".blurred").style.height="0%";
    document.querySelector(".blurred").style.opacity="0%";

    document.querySelector(".sharingBox").style.zIndex="-10";
    document.querySelector(".sharingBox").style.opacity="0%";
})

let errorElement=document.createElement("span");
errorElement.innerText="Questo campo è obbligatorio";
errorElement.classList.add("error");
let privacyToggle=false;
document.querySelector(".outer").addEventListener("click", () => {

   if(privacyToggle === false){
    document.querySelector(".inner").style.width="15px";
    document.querySelector(".inner").style.height="15px";
    document.querySelector(".inner").style.top="51%";
    document.querySelector(".inner").style.left="17%";
    document.querySelector(".inner").style.transform="translate(-17%,-51%)";
   }else {
    document.querySelector(".inner").style.width="0px";
    document.querySelector(".inner").style.height="0px";
   }
   
   privacyToggle=!privacyToggle;


})

let eShown=false;
document.querySelector("#send").addEventListener("click", () => {

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



    let emailField= document.querySelector("input[name=email]");
    let email=emailField.value;
    let eError=errorElement.cloneNode(true);
    

    if(email.length <1 && eShown === false){
        emailField.classList.add("errorBorder");
        emailField.parentNode.appendChild(eError);
        eShown=true;
    }if(email.length >=1 && eShown === true){
        emailField.classList.remove("errorBorder");
        if( document.querySelector("body > div > div.sharingBox > div > div:nth-child(1) > span") !=null){
        document.querySelector("body > div > div.sharingBox > div > div:nth-child(1) > span").remove();
        }
        eShown=false;
    }

    if(privacyToggle && email.length>1) {
        document.querySelector(".sharingBox .formWrapper").remove();
        let thx= document.createElement("p");
        thx.id="thx";
        thx.innerText=" Grazie per aver contribuito!"
        document.querySelector(".sharingBox").appendChild(thx);

        let img=document.createElement("img");
        img.id="imgThx";
        img.src="./public/assets/images/heart.png";
        document.querySelector(".sharingBox").appendChild(img);


    }

   
    
})