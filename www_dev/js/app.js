'use strict';

var constants = require('./constants')
  , services = require('./services')
  , factories = require('./factories')
  , controllers = require('./controllers')
  , directives = require('./directives')
  , filters = require('./filters');

function run ($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      window.StatusBar.styleDefault();
    }
  });
}

module.exports = angular.module('MyApp', [
  // Ionic
  'ionic',
  // Angular FH API shim
  'FH',

  filters.name,
  constants.name,
  services.name,
  factories.name,
  controllers.name,
  directives.name
]).run(run);
