'use strict';


angular.module('deckApp')
  .filter('relativeTime', function(momentService) {
    return function(input) {
      var moment = momentService(isNaN(parseInt(input)) ? input : parseInt(input));
      return moment.isValid()? moment.calendar() : 'n/a';
    };
  })
  .filter('duration', function(momentService) {
    return function(input) {
      var moment = momentService(isNaN(parseInt(input)) ? input : parseInt(input));
      return moment.isValid()? moment.fromNow() : 'n/a';
    };
  })
  .filter('simpleTime', function(momentService) {
    return function(input) {
      var moment = momentService(isNaN(parseInt(input)) ? input : parseInt(input));
      return moment.isValid() ? moment.format('MM/DD/YY, h:mm:ss a') : 'n/a';
    };
  });
