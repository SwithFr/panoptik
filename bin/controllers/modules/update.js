/* panoptik
 * /bin/controllers/modules/update.js - update modules
 * started @ 23/10/2015
 */

"use strict";

var jsonMiddlewares = require( "../../core/express/middlewares.js" ).json;

// [PUT] - /modules/:id
module.exports = function( oRequest, oResponse ) {

    // returns
    jsonMiddlewares.send( oRequest, oResponse, {
        "truc": "module updated"
    } );

};
