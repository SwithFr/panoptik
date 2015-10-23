/* panoptik
 * /bin/controllers/pages/dev.js - dev pages controllers
 * started @ 23/10/2015
 */

"use strict";

var jsonMiddlewares = require( "../../core/express/middlewares" ).json;

module.exports = function( oRequest, oResponse ) {

    jsonMiddlewares.send( oRequest, oResponse, "Hello, world!" );

};
