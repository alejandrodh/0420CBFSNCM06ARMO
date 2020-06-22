const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {
		// Do the magic
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic

		const product = productModel.findById(req.params.productId);

		return res.render('detail', {product})

	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic
	},

	// Update - Form to edit
	edit: (req, res) => {

		const product = productModel.findById(req.params.productId)

		return res.render('product-edit-form', {product})
	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		productModel.edit(req.body, req.params.productId)
		
		return res.redirect('/products/detail/' + req.params.productId);
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
	}
};

module.exports = controller;