/*jshint node: true */
'use strict';

var chai = require('chai');
var expect = chai.expect;
var gardenTracker = require('../lib/garden_tracker.js');


describe('Garden Tracker', function() {

  it('gives instructions', function(done) {
    expect(gardenTracker(undefined)).to.eql("Welcome to Garden Tracker!\n==========================\nTo set up a bed, type \n     bed bed#\nPlanted something? Type \n     node garden_tracker.js planted veggie #days datePlanted bed#");
    done();
  });

  it('makes a garden bed', function(done) {
    expect(gardenTracker('bed', 1)).to.eql("Created bed number 1");
    done();
  });

  it('records a vegetable that was planted', function(done) {
    expect(gardenTracker('planted', 'spinach', 50, 'nov11', 1)).to.eql("You planted spinach in bed1 on nov11, 50 days to maturity.");
    done();
  });
});
