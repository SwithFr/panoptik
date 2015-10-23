/* panoptik
 * /bin/controllers/users/details.js - details for user
 * started @ 23/10/2015
 */

"use strict";

var jsonMiddlewares = require( "../../core/express/middlewares.js" ).json;

// [GET] - /users/:id
module.exports = function( oRequest, oResponse ) {

    var iUserID = +oRequest.params.id; // + shortcut pour parseInt( string )

    if ( isNaN( iUserID ) ) {
        return jsonMiddlewares.error( oRequest, oResponse, new Error( "NO_VALID_ID" ), 400 );
    }

    // TODO: get user in db
    var oUser = {
        "pseudo": "Swith",
        "avatar": "img/avatar/12345.png"
    };

    jsonMiddlewares.send( oRequest, oResponse, oUser );

};
