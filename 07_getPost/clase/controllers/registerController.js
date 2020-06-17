const fs = require('fs');
const path = require('path');


const registerController = {

    index: function(req, res){
        return res.render('register');
    },

    store : function(req, res){
        //Creamos el usuario
        //Versión Dario
        // let user = {
        //     id : "",
        //     email: req.body.email,
        //     password : req.body.password,
        // }

        delete req.body.retypePassword
        let user = {
            id:"",
            ...req.body,
        }

        //Agregamos el usuario a la base de datos json //¿Podemos pensar una función que traiga siempre los datos de un json?
        let users = fs.readFileSync(path.join(__dirname, '..', 'data', 'users.json'), 'utf-8');
        users = JSON.parse(users);
        users = [...users, user]; //Se puede hacer con un push; // users.push(user);

        users = JSON.stringify(users, null, ' '); //Pasamos el array a texto para guardarlo en json.

        //Guardar todo. //¿Podemos pensar una función que guarde siempre los datos en un json?
        fs.writeFileSync(path.join(__dirname, '..', 'data', 'users.json'), users);

        return res.redirect('/');
       
    }
}

module.exports = registerController;