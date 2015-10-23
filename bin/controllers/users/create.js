/* panoptik
 * /bin/controllers/users/create.js - create user
 * started @ 23/10/2015
 */

"use strict";

var jsonMiddlewares = require( "../../core/express/middlewares.js" ).json;

// [POST] - /users
module.exports = function( oRequest, oResponse ) {

    // TODO: check if empty params

    // TODO: add in db
    var oUser = {
        "id": 42,
        "login": "Void",
        "password": "ilAaimeAussiLesGrilladesBeaucoupBeaucoup",
        "last_connexion": new Date()
    };

    // returns
    jsonMiddlewares.send( oRequest, oResponse, oUser );

};
