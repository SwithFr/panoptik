/* panoptik
 * /bin/controllers/modules/delete.js - delete modules
 * started @ 23/10/2015
 */

"use strict";

var jsonMiddlewares = require( "../../core/express/middlewares.js" ).json;

// [DELETE] - /modules/:id
module.exports = function( oRequest, oResponse ) {

    // returns
    jsonMiddlewares.send( oRequest, oResponse, {
        "truc": "module deleted"
    } );

};
