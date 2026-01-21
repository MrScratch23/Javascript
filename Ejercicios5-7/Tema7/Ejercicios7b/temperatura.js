"use strict";

const resultado = document.querySelector("#resultado");


/*function fireConfetti(event) {
	const x = event.clientX / document.body.clientWidth;
	const y = event.clientY / document.body.clientHeight;
	confetti({origin: {x, y}});
}
*/

// truco de precargade biblioteca, con mouseenter

document.addEventListener('mouseenter', e => {
    import('https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js');
});



document.addEventListener('click', async e => {
    resultado.textContent = "";
    if (e.target.tagName != "BUTTON") return;

    const temperatura = document.querySelector("#temperatura").valueAsNumber;

    if (isNaN(temperatura)) {
        let pError = document.createElement("p");
        pError.textContent = "Debe indicar un numero";
        resultado.appendChild(pError);
        return;
    }
    

    try {
        const modT = await import("./modulotemperatura.js")
        let pCelsius = document.createElement("p");
        pCelsius.textContent = modT.celsiusAFahrenheit(temperatura);
        let pFarem = document.createElement("p");
        pFarem.textContent = modT.fahrenheitACelsius(temperatura);
        let pKelvin = document.createElement("p");
        pKelvin.textContent = modT.celsiusAKelvin(temperatura);

    
    resultado.appendChild(pCelsius);
    resultado.appendChild(pFarem);
    resultado.appendChild(pKelvin);
     // fireConfetti(e); // ¡Fire Confetti!

    } catch (error) {
        let pError = document.createElement("p");
        pError.textContent = error;
        resultado.replaceChildren(pError);
    }




   
})