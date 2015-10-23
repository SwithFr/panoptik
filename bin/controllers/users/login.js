/* panoptik
 * /bin/controllers/users/login.js - log user
 * started @ 23/10/2015
 */

"use strict";

var jsonMiddlewares = require( "../../core/express/middlewares.js" ).json,
    zouti = require( "zouti" );

module.exports = function( oRequest, oResponse ) {

    // get post params
    var sLogin = oRequest.body.login || "",
        sPassword = oRequest.body.password || "",
        oUser,
        sToken;

    // verify post params
    if ( !sLogin.trim() || !sPassword.trim() ) {
        // send error: no empty params !
        return jsonMiddlewares.error( oRequest, oResponse, new Error( "NO_EMPTY_PARAMS" ), 400 );
    }

    // TODO: check in db
    oUser = {
        "id": 1,
        "login": "Swith",
        "password": "jAaimeLesGrilladesBeaucoupBeaucoup",
        "last_connexion": new Date()
    };

    // generate token
    sToken = zouti.sha256( oUser.id + "-" + oUser.last_connexion.getTime() );

    // returns
    jsonMiddlewares.send( oRequest, oResponse, {
        "id": oUser.id,
        "token": sToken
    } );

};
