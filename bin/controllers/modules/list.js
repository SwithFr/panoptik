/* panoptik
 * /bin/controllers/modules/list.js - list all modules
 * started @ 23/10/2015
 */

"use strict";

var jsonMiddlewares = require( "../../core/express/middlewares.js" ).json;

// [GET] - /modules
module.exports = function( oRequest, oResponse ) {

    // returns
    jsonMiddlewares.send( oRequest, oResponse, {
        "truc": "All modules"
    } );

};
