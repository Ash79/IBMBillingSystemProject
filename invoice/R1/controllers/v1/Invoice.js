'use strict';
var url = require('url');
var Invoice = require('./InvoiceService');

module.exports.getInvoice = function getInvoice (req, res, next) {
    Invoice.getInvoice (req.swagger.params, res, next);
};

module.exports.putInvoice = function putInvoice (req, res, next) {
    Invoice.putInvoice (req.swagger.params, res, next);
};

module.exports.postInvoice = function postInvoice (req, res, next) {
    Invoice.postInvoice (req.swagger.params, res, next);
};

module.exports.deleteInvoice = function deleteInvoice (req, res, next) {
    Invoice.deleteInvoice (req.swagger.params, res, next);
};

