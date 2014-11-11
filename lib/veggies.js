/*jshint node: true */
'use strict';

var Veggie = function(name, days, datePlanted) {
  this.name = name;
  this.days = days;
  this.datePlanted = datePlanted;
};

module.exports = Veggie;
