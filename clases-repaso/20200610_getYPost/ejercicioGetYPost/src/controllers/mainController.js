const fs = require('fs');
const path = require('path');

// const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const productsFilePath = path.join(__dirname, '..','data','productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	root: (req, res) => {
		// Do the magic
		let visited = products.filter(function(product){
			return product.category == "visited";
		});

		let inSale = products.filter(function (product) {
			return product.category == "in-sale";
		});		

		// return res.render('index', { milanesa: visited, ofertas: inSale }); //Renombro las variables para la vista
		return res.render('index', { visited, inSale });
	},

	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
