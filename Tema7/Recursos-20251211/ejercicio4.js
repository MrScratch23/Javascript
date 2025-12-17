"use strict";

const listado = document.querySelector("#listado");

const btnHTML = document.querySelector("#btnHTML").addEventListener('click', async e => {
  
 try{
 const response = await fetch("https://mocktarget.apigee.net/iloveapis");
 if (!response.ok) throw new Error("Se produjo un error");

const html = await response.text();
listado.textContent = html;

 } 
 catch {
  listado.textContent = `<p>${error}</p>`
 }


});


 
  

const btnXML = document.querySelector("#btnXML").addEventListener('click', e => {
  fetch("https://mocktarget.apigee.net/xml")
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then (xml => {
    
    const firstName = xml.children[0].children[1].textContent;
    const lastName = xml.children[0].children[2].textContent;
    const city = xml.children[0].children[0].textContent;
    const state = xml.children[0].children[3].textContent;
   

    listado.textContent = `<p>${city}</p> <br>
                      <p>${firstName}</p><br>
                      <p>${lastName}</p><br>
                      <p>${state}</p>`;
    

  })
  .catch (error=> {
  listado.text = error;
});
})


const btnJSON = document.querySelector("#btnJSON").addEventListener('click', async e =>{
try{
const response = await fetch("https://mocktarget.apigee.net/json")

if (!response.ok) throw new Error("Error: " + response.statusText)

const oJson = await response.json();
listado.textContent = `<p>${oJson.firstName}</p> <br>
                      <p>${oJson.lastName}</p><br>
                      <p>${oJson.city}</p><br>
                      <p>${oJson.state}</p>`;

}
catch {
  listado.textContent = error;
}

});