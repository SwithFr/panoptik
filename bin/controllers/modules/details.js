/* panoptik
 * /bin/controllers/modules/detail.js - detail modules
 * started @ 23/10/2015
 */

"use strict";

var jsonMiddlewares = require( "../../core/express/middlewares.js" ).json;

// [GET] - /modules/:id
module.exports = function( oRequest, oResponse ) {

    // returns
    jsonMiddlewares.send( oRequest, oResponse, {
        "truc": "module details"
    } );

};
