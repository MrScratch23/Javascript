"use strict";

const tratarXML = function(xml) {
  // Eliminar el botón de realizar pedido
  const btnRealizarPedido = document.querySelector("#btnRealizarPedido");
  if (btnRealizarPedido) {
    btnRealizarPedido.remove();
  }
  
  // Obtener el elemento form del XML
  const formElement = xml.querySelector("form");
  
  // 1. Crear el formulario
  const form = document.createElement("form");
  
  // 2. Crear fieldset con legend
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  
  // Obtener el título del XML
  const titleElement = formElement.querySelector("title");
  if (titleElement) {
    legend.textContent = titleElement.textContent;
  }
  fieldset.appendChild(legend);
  
  // 3. Añadir el select del XML al fieldset
  const selectElement = formElement.querySelector("select");
  if (selectElement) {
    const select = document.createElement("select");
    select.id = selectElement.getAttribute("id") || "slPostre";
    
    // Añadir opciones del menú (ejemplo)
    const postres = ["Tarta de chocolate", "Flan", "Helado", "Fruta"];
    postres.forEach((postre, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = postre;
      select.appendChild(option);
    });
    
    fieldset.appendChild(select);
  }
  
  // 4. Convertir input_number en label + input type="number"
  const inputNumberElement = formElement.querySelector("input_number");
  if (inputNumberElement) {
    const label = document.createElement("label");
    label.textContent = inputNumberElement.textContent || "Cantidad";
    
    const input = document.createElement("input");
    input.type = "number";
    input.min = "1";
    input.value = "1";
    
    fieldset.appendChild(label);
    fieldset.appendChild(document.createElement("br")); // Para separar
    fieldset.appendChild(input);
  }
  
  // 5. Añadir fieldset al formulario
  form.appendChild(fieldset);
  
  // 6. Añadir el botón fuera del fieldset
  const buttonElement = formElement.querySelector("button");
  if (buttonElement) {
    const button = document.createElement("button");
    button.type = buttonElement.getAttribute("type") || "button";
    button.id = buttonElement.getAttribute("id") || "btnAnadir";
    button.textContent = buttonElement.textContent || "Añadir al pedido";
    form.appendChild(button);
  }
  
  // 7. Añadir el formulario al final del body
  document.body.appendChild(form);
};

// Cargar el XML con fetch cuando se haga clic en el botón
document.querySelector("#btnRealizarPedido").addEventListener('click', async function() {
  try {
    const response = await fetch("formulario.xml");
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    
    // Obtener el texto XML
    const xmlText = await response.text();
    
    // Parsear el texto XML
    const parser = new DOMParser();
    // usar "text/xml" para casos cortos
    const xml = parser.parseFromString(xmlText, "application/xml");
    
    // Verificar si hubo error en el parseo
    const errorNode = xml.querySelector("parsererror");
    if (errorNode) {
      throw new Error("Error al parsear el XML");
    }
    
    // Procesar el XML
    tratarXML(xml);
    
  } catch (error) {
    console.error("Error al cargar el XML:", error);
  }
});