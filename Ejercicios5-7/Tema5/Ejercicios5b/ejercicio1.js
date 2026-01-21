"use strict"

document.addEventListener('input', (e) => {
    const textInput = document.querySelector("#textInput").value;
    const output = document.querySelector("#output");
    output.textContent = textInput;

})