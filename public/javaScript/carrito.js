const counterElement = document.querySelector('.cantidad');
const resultadoElement = document.querySelector('.importe');
const resultadoElement1 = document.querySelector('.importe1');

const cart = [
    {
        id: 1,
        nombre: 'BABY YODA BLUEBALL',
        descripcion: 'STAR WARS',
        precio: 150,
    },
    {
        id: 2,
        nombre: 'PIDGEOTTO',
        descripcion: 'POKEMON',
        precio: 100
    }
];

const precio1 = cart[0].precio;
const precio2 = cart[1].precio;
let counter = 1;

actualizarImporte = (id) => {
    if(id === 'baby'){
        const nuevoPrecio = precio1 * counter;
        resultadoElement.innerText = `$ ${nuevoPrecio}`;
    }else{
        const nuevoPrecio = precio2 * counter;
        resultadoElement1.innerText = `$ ${nuevoPrecio}`;
    }
};

const addButton = (id) => {
    let counterElement = document.getElementById(id);
    counterElement.innerText = parseInt(counterElement.innerText ) + 1;
    counter += 1;
    actualizarImporte(id);
};

const subButton = (id) => {
    let counterElement = document.getElementById(id);
    if (parseInt(counterElement.innerText) > 1){
        counterElement.innerText = parseInt(counterElement.innerText ) - 1;
        counter -= 1;
        actualizarImporte(id);
    }
};


