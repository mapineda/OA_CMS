'use strict';

System.register(['bootstrap'], function (_export, _context) {
  return {
    setters: [function (_bootstrap) {}],
    execute: function () {
      function configure(aurelia) {
        aurelia.use.standardConfiguration().developmentLogging();

        aurelia.start().then(function () {
          return aurelia.setRoot();
        });
      }

      _export('configure', configure);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRU8sZUFBUyxTQUFULENBQW1CLE9BQW5CLEVBQTRCO0FBQ2pDLGdCQUFRLEdBQVIsQ0FDRyxxQkFESCxHQUVHLGtCQUZIOztBQVdBLGdCQUFRLEtBQVIsR0FBZ0IsSUFBaEIsQ0FBcUI7QUFBQSxpQkFBTSxRQUFRLE9BQVIsRUFBTjtBQUFBLFNBQXJCO0FBQ0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjIn0=
