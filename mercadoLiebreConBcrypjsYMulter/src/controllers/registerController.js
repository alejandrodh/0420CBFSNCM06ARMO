const jsonModel = require('../models/jsonModel');
const usersModel = jsonModel('users');
const bcryptjs = require('bcryptjs');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
        create: function(req, res){
            return res.render('users/register');
        },
        store: function(req, res){
            // let user = {
            //     id: "",
            //     username:req.body.username,
            //     email: req.body.email,
            //     password: bcryptjs.hashSync(req.body.password, 10),
            //     image:"???",
            // }
            // return res.send(req.file);
            delete req.body.retype;
            req.body.password = bcryptjs.hashSync(req.body.password, 10);

            let user = {
                id: "",
                ...req.body,
                image:req.file.filename
            }


            usersModel.guardarUno(user);
            
            return res.redirect('/');
        }

}


module.exports = controller;