
// importar archivo css propio del componente 
import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';


// funcion saludar 
// para exportar una function, usamos la palabra reservada export 
export const saludar = (nombre) => {
    console.log('Creando etiqueta h1...');

    
    const h1 = document.createElement('h1');
    h1.innerText = `Archivo configuración inicial de ${ nombre } !!`;
    document.querySelector('.row').appendChild( h1 );



    // img 
    // console.log(webpacklogo);
    // const img = document.createElement('img');
    // img.src = webpacklogo;
    // document.body.append( img );

}
