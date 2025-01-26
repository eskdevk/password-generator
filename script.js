const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercaseE1 = document.getElementById("lowercase");
const uppercaseE1 = document.getElementById("uppercase");
const numbersE1 = document.getElementById("numbers");
const symbolE1 = document.getElementById("symbols");
const generateBtn = document.getElementById("getBtn");

const copyIcon = document.getElementById("icon");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=[]{}:':\",./<>?";

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", ()=>{
    sliderValue.textContent = inputSlider.value;
});

copyIcon.addEventListener('click', ()=>{
    if(passBox.value!= "" || passBox.value.length>=10){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.src = "checkIcon.svg";

        setTimeout(()=>{
            copyIcon.src = "copy icon.svg";
        }, 3000);
    }
});


generateBtn.addEventListener("click", ()=>{

    passBox.value = generatePassword();
});

function generatePassword(){

    const length = inputSlider.value;
    let characters = "";
    let password = "";

    characters += lowercaseE1.checked ? lowercaseLetters : "";
    characters += uppercaseE1.checked ? uppercaseLetters : "";
    characters += numbersE1.checked ? numbers : "";
    characters += symbolE1.checked ? symbols : "";

    for(let i= 0; i<length; i++){
        password += characters.charAt(Math.floor(Math.random()*characters.length));
    }

    return password;
}