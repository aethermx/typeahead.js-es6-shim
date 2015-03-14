(function() {

  function generateModule(name, values) {

    define(name, [], function() {
      'use strict';

      return values;
    });

  }

  generateModule('bloodhound', {'default': Bloodhound});

})();
