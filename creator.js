function createHotelSessionLogger (execlib, Base) {
  'use strict';

  var lib = execlib.lib;

  var hotelexistsfilter = {
    op: 'exists',
    field: 'session.user.__service.__hotel'
  };

  function HotelSessionLogger (conf) {
    Base.call(this, conf);
  }
  lib.inherit(HotelSessionLogger, Base);

  HotelSessionLogger.prototype.makeUpConfiguration = function (conf) {
    this.imposeFilterDescriptor(conf, hotelexistsfilter);
    return Base.prototype.makeUpConfiguration.call(this, conf);
  };

  return HotelSessionLogger;
}
module.exports = createHotelSessionLogger;