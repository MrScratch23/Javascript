


// precarga aunque es innecesario para algo pequeño
document.addEventListener('mouseenter', e => {
    import('https://unpkg.com/rough-notation?module');
});

document.addEventListener('click', async e => {
     if (e.target.tagName != "BUTTON") return;

try {
    const { annotate } = await import('https://unpkg.com/rough-notation?module');
     const boton = document.querySelector("#boton");
     const annotation = annotate(boton, { type: 'underline' });
        annotation.show();
} catch (error) {
    alert(error);
}

    
    })