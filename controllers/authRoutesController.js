import postForm from "../src/models/Formulario.js";
import postLogin from "../src/models/Login.js";

const authRoutesControllers = {
    // login: (req, res) => res.send('Ruta logearse admin'),
    login: (req, res) => res.render('loginGet'),
    
    postLogin: async (req, res) => {
        const resultLogin = await postLogin(req.body)
        const mail = req.body.email
        /* res.send('Ruta enviar logearse admin') */
        const mensajes = {
            mensaje1: 'Bienvenido !',
            mensaje2: 'Gracias por visitarnos',
            mensaje3: 'Hola ' + mail
        }
        res.render('respuestas', { mensajes });
    },

    register: (req, res) => res.render('registerGet'),

    postRegister: async (req, res) => {
        const result = await postForm(req.body)
        const name = req.body.nombre
        console.log(name)
        const mensajes = {
            mensaje1: 'Garcias por registrarte...!',
            mensaje2: 'Disfrutá todas nuestras ofertas y promociones',
            mensaje3: 'Hola ' + name
        }
        res.render('respuestas', { mensajes })
    }
};

export default authRoutesControllers;