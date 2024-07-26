let elem = document.getElementById("element");
let code = document.getElementById("code");
let inputs = document.querySelectorAll(".sliders input");
inputs.forEach((inp) => {
    inp.addEventListener("input", genrateShadow);
});
function genrateShadow() { 
    let hShadow = document.getElementById("h-shadow").value;
    let VShadow = document.getElementById("v-shadow").value;
    let Blurraduis = document.getElementById("Blur-raduis").value;
    let Spreadraduis = document.getElementById("Spread-raduis").value;
    let Shadowcolor = document.getElementById("Shadow-color").value;
    let ShadowcolorOpactiy = document.getElementById("Shadow-color-Opactiy").value;
    let shadowinset = document.getElementById("shadow-inset").checked;
    //using Teranry Operator to Check inset
     let boxShadow = shadowinset ? `inset ${hShadow}px ${VShadow}px ${Blurraduis}px ${Spreadraduis}px ${hexToRgba(Shadowcolor, ShadowcolorOpactiy)}` : ` ${hShadow}px ${VShadow}px ${Blurraduis}px ${Spreadraduis}px ${hexToRgba(Shadowcolor, ShadowcolorOpactiy)}`;
    elem.style.boxShadow = boxShadow;
    code.textContent = `box-shadow:${boxShadow}`;
    
}
//converting hexa to rgba
function hexToRgba(Shadowcolor, ShadowcolorOpactiy) {
    let r = parseInt(Shadowcolor.substr(1, 2), 16);
    let g = parseInt(Shadowcolor.substr(3, 2), 16);
    let b = parseInt(Shadowcolor.substr(5, 2), 16);
    return `rgba(${r},${g},${b},${ShadowcolorOpactiy})`
}
function copyCode() { 
    code.select();
  code.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(code.value);

  // Alert the copied text
    alert("Copied the text: " + code.value);
    //Or use document.execCommand("copy")
}