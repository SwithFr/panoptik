/* panoptik
 * /bin/controllers/users/logout.js - logout user
 * started @ 23/10/2015
 */

"use strict";

var jsonMiddlewares = require( "../../core/express/middlewares.js" ).json;

// [GET] - /users/logout
module.exports = function( oRequest, oResponse ) {

    // returns
    jsonMiddlewares.send( oRequest, oResponse, "User logged out." );

};
