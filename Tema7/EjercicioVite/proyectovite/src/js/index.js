const btnAccion = document.querySelector('#btnAcción');

btnAccion.addEventListener("click", async e=>{
  const {annotate} = await import ('rough-notation');
  
  const annotation = annotate(btnAccion, { type: 'underline' });
  annotation.show();
})