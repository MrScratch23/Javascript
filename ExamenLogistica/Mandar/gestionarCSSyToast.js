


export function cambiarColor() {
    const r = Math.floor(Math.random()*100)+50;
    const g = Math.floor(Math.random()*100)+50;
    const b = Math.floor(Math.random()*100)+50;

 

    document.styleSheets[0].cssRules[2].style.setProperty("--accent-color", `rgb(${r}, ${g}, ${b})`);
}

export function Toasty() {
   // Crear el contenedor del toast si no existe
   let toastContainer = document.getElementById('toast-container');
   if (!toastContainer) {
       toastContainer = document.createElement('div');
       toastContainer.id = 'toast-container';
       toastContainer.style.position = 'fixed';
       toastContainer.style.bottom = '20px';
       toastContainer.style.right = '20px';
       toastContainer.style.zIndex = '9999';
       document.body.appendChild(toastContainer);
   }

   // Función para mostrar un toast
   function showToast(message, duration = 3000) {
       const toast = document.createElement('div');
       toast.textContent = message;
       toast.style.background = 'rgba(0, 0, 0, 0.7)';
       toast.style.color = '#fff';
       toast.style.padding = '10px 20px';
       toast.style.marginTop = '10px';
       toast.style.borderRadius = '5px';
       toast.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
       toast.style.opacity = '0';
       toast.style.transition = 'opacity 0.5s ease';

       toastContainer.appendChild(toast);

       // Animar la aparición del toast
       requestAnimationFrame(() => {
           toast.style.opacity = '1';
       });

       // Eliminar el toast después de la duración especificada
       setTimeout(() => {
           toast.style.opacity = '0';
           toast.addEventListener('transitionend', () => {
               toastContainer.removeChild(toast);
           });
       }, duration);
   }

   return { showToast };
}