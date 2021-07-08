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


const main = async () => {

    const data= await (await fetch("./public/assets/json/advice.json")).json();
    console.log(data);

    /*<div class="singleAdvice">
                <img src="./public/assets/images/sample/sampleAdvice.jpg">
                <p>Testo Consiglio</p>
            </div>*/

    const container=document.querySelector(".adviceContainer");
    
    for(let i=0; i<data.length; i++){
        let wrapper=document.createElement("div");
        wrapper.classList.add("singleAdvice");
        wrapper.id= i;
        let img=document.createElement("img");
        img.src= data[i].image;
        wrapper.appendChild(img);
        let title=document.createElement("p");
        title.innerText=data[i].title;
        wrapper.appendChild(title);
        wrapper.addEventListener("click",() => {
            
            const main= document.querySelector(".main");
           /*

            <div class="adviceDetail">
            <p>Usa i mezzi</p>
            <p>Veniam incididunt anim deserunt cillum cillum Lorem excepteur qui consequat irure ipsum elit excepteur consectetur. </p>
            <span id="close"></span>
            </div>
           */


            let blurred=document.createElement("div");
            blurred.classList.add("blurred");
            blurred.style.opacity="100%";
            blurred.style.height="100%";

            let adviceDetail=document.createElement("div");
            adviceDetail.classList.add("adviceDetail");
            let title= document.createElement("p");
            title.innerText=data[i].title;
            let description=document.createElement("p");
            description.innerText=data[i].description;
            let close=document.createElement("span");
            close.id="close";

            adviceDetail.appendChild(title);
            adviceDetail.appendChild(description);
            adviceDetail.appendChild(close);


            main.appendChild(blurred);
            main.appendChild(adviceDetail);

            document.querySelector("#close").addEventListener("click", () => {
                document.querySelector(".blurred").style.height="0%";
                document.querySelector(".blurred").style.opacity="0%";
                main.removeChild(blurred)
                main.removeChild(adviceDetail);
            })

        }
        
        );
        container.appendChild(wrapper);
    }
}

main();
handleNav();