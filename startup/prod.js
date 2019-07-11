/*jshint esversion: 6 */
/* jshint ignore:start */

const helmet =require('helmet');
const copression = require('compression');


module.exports = function(app){
    app.use(helmet());
    app.use(copression());
}