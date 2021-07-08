if(localStorage.getItem("username")==null){
    window.location.href="./index.html";

}


if(localStorage.getItem("dark")==="false"){
    document.querySelector("link").href="./public/assets/style/style_light.css"
}else {
    document.querySelector("link").href="./public/assets/style/style_dark.css"
}

let API_KEY="af8e88e8851b471cb860c3735f0fc604";

const main = async () => {
    
    let data = await (await fetch("./public/assets/json/home.json")).json();

    let posElement=document.querySelector("#location");
    let percentageElement=document.querySelector("#percentage");
    let subPos=document.querySelector("p#position");
    let subPercentage= document.querySelector(".innerBox #percentage");
    let values= document.querySelectorAll("#value");
    let shortDesc=document.querySelector("#percentageDescription");
    let longDesc=document.querySelector("#fullDescription");
    let imgGauge=document.querySelector(".gauge > img");

    document.querySelector("#user").innerText = "Ciao, "+localStorage.getItem("username")+"!";

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (pos) => {
            let posLat=pos.coords.latitude;
            let posLong=pos.coords.longitude;


            let urlReq="https://api.geoapify.com/v1/geocode/reverse?lat="+posLat+"&lon="+posLong+"&apiKey="+API_KEY;

            let posData= await (await fetch(urlReq)).json();
            console.log(posData);
            let position= await posData.features[0].properties.city+", "+posData.features[0].properties.county_code;
            localStorage.setItem("position", position);
            posElement.innerText= await position;
            subPos.innerText=await position;
            let random= Math.floor(Math.random() * data.length);
            let currentData= await data[random];
            percentageElement.innerText= await currentData.percentage+"%";
            subPercentage.innerText=await currentData.percentage;
            imgGauge.src="./public/assets/images/sample/gauge"+ await currentData.percentage+".png";
            shortDesc.innerText=await currentData.shortDescription;
            longDesc.innerText=await currentData.longDescription;

            for(let i=0; i<values.length; i++){
                values[i].innerText= await currentData.values[i];
                if(i==6){
                    values[i].innerText += "%";
                }
                if(i==7){
                    values[i].innerText += " Km/h";
                }
            console.log(currentData.values[i])
    }
      })
    }
    if(!navigator.geolocation){
        console.log("we");
    }

}

const handleNav = () => {
    let navIcons = document.querySelectorAll(".navbar > img");

    navIcons[0].addEventListener('click', () => location.href="./home.html");
    navIcons[1].addEventListener('click', () => location.href="./stats.html");
    navIcons[2].addEventListener('click', () => location.href="./advice.html");
    navIcons[3].addEventListener('click', () => location.href="./settings.html");
}

main();
handleNav();