"use strict";


fetch("https://mocktarget.apigee.net/xml")
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => console.log(data));