'use strict';
  var InvoiceFD = require('../../sampleData/v1/Invoice.json');
  var InvoiceData = InvoiceFD;


var Promise = require('bluebird');
var paginationService = require('../../services/pagination.js');
 

exports.getInvoice = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(InvoiceData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, InvoiceData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putInvoice = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(InvoiceData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(InvoiceData[Object.keys(InvoiceData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postInvoice = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(InvoiceData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(InvoiceData[Object.keys(InvoiceData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.deleteInvoice = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(InvoiceData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(InvoiceData[Object.keys(InvoiceData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


