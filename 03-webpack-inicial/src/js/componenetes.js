 export const saludar  = (nombre) => {
    console.log('creando la etiquetra h1');

    const h1 = document.createElement('h1');
    h1.innerText = `hola, ${ nombre}`;
    document.body.append(h1);
}
