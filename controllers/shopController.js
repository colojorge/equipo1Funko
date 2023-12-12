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
]

const title = "Carrito";

const shopControllers = {
    shop: (req, res) => res.send('Route for Shop view'),
    item: (req, res) => res.send(`Route for Item id: ${req.params.id} view`),
    add: (req, res) => res.send('Ruta para agregar item al carrito'),
    
    // ruta para agregar item al carrito 
    cart: (req, res) => res.render('carritoGet', {cart, title}),// ruta devuelve la vista con lo que tengo en el carrito
    // cart: (req, res) => res.send('Ruta para ver contenido del carrito'),// ruta devuelve la vista con lo que tengo en el carrito
    postCart: (req, res) => res.send('Envia contenido del carrito para comprar')// ruta que envia contenido del carrito (comprar)
}

export default shopControllers;
