function createLib (execlib) {
  'use strict';
  return execlib.loadDependencies('client', ['allex:gatesession:logger'], require('./creator').bind(null, execlib));
}
module.exports = createLib;