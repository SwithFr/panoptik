/* panoptik
 * /bin/controllers/modules/create.js - create modules
 * started @ 23/10/2015
 */

"use strict";

var jsonMiddlewares = require( "../../core/express/middlewares.js" ).json;

// [POST] - /modules
module.exports = function( oRequest, oResponse ) {

    // returns
    jsonMiddlewares.send( oRequest, oResponse, {
        "truc": "module created"
    } );

};
