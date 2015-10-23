/* panoptik
 * /bin/routes/modules.js - modules controllers
 * started @ 23/10/2015
 */

"use strict";

var fCheckConnect = require( "../core/express/middlewares.js" ).checkConnect;

exports.init = function( oApp ) {

    // list all modules
    oApp.get( "/modules", fCheckConnect, require( "../controllers/modules/list.js" ) );

    // get one module details
    oApp.get( "/modules/:id", fCheckConnect, require( "../controllers/modules/details.js" ) );

    // update module
    oApp.put( "/modules/:id", fCheckConnect, require( "../controllers/modules/update.js" ) );

    // create module
    oApp.post( "/modules", fCheckConnect, require( "../controllers/modules/create.js" ) );

    // delete module
    oApp.delete( "/modules/:id", fCheckConnect, require( "../controllers/modules/delete.js" ) );

};
