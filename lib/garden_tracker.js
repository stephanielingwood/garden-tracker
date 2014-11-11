/*jshint node: true */
'use strict';

var Veggie = require('./veggies.js');
var instructions = require('./instructions.js');

var gardenTracker = function(arg2, arg3, arg4, arg5, arg6) {
  var garden = {};

  if (arg2 === undefined) {
    return instructions();
  }

  if (arg2 === 'bed') {
    var temp = ("bed" + arg3);
    garden[temp] = [];
    console.log("Created bed number " + arg3);
    return ("Created bed number " + arg3);
  }

  if (arg2 === 'planted') {
    var temp2 = ("bed" + arg6);
    garden[temp2] = [];
    garden[temp2].push(new Veggie(arg3, arg4, arg5));
    console.log("You planted " + garden[temp2][0].name + " in " + temp2 + " on " + garden[temp2][0].datePlanted + ", " + garden[temp2][0].days + " days to maturity.");
    return ("You planted " + garden[temp2][0].name + " in " + temp2 + " on " + garden[temp2][0].datePlanted + ", " + garden[temp2][0].days + " days to maturity.");
  }
};

gardenTracker(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]);

module.exports = gardenTracker;
