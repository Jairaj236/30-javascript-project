
const hexacode = document.querySelector(".hex-btn");
const hexColorValue = document.querySelector(".hex-color-value");
const heccolorcontainer = document.querySelector(".hexa-color");
function hexcodeGenerator(){
    let characters = "0123456789abcdef";
 let hexColorOutput = "";
    for(let i=0; i<6; i++){
       
        hexColorOutput += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );

    }

    hexColorValue.textContent = `#${hexColorOutput}`;
    heccolorcontainer.style.backgroundColor = `#${hexColorOutput}`
}

hexacode.addEventListener("click", hexcodeGenerator)