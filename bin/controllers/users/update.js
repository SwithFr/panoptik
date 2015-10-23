/* panoptik
 * /bin/controllers/users/update.js - update user
 * started @ 23/10/2015
 */

"use strict";

var jsonMiddlewares = require( "../../core/express/middlewares.js" ).json;

module.exports = function( oRequest, oResponse ) {

    // get post params
    var iUserID = +oRequest.params.id,
        oUser;

    // verify post params
    if ( isNaN( iUserID ) ) {
        return jsonMiddlewares.error( oRequest, oResponse, new Error( "INVALID_PARAMS" ), 400 );
    }

    // TODO: check in db
    oUser = {
        "id": iUserID,
        "login": "Swith",
        "password": "jAaimeLesGrilladesBeaucoupBeaucoup",
        "last_connexion": new Date()
    };

    // returns
    jsonMiddlewares.send( oRequest, oResponse, oUser );

};
