module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateCar extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016010618470716;
    }

    up() {

      return [
        this.createTable("cars", [{"name":"vin","type":"int"},{"name":"tire1","type":"int"},{"name":"tire2","type":"int"},{"name":"tire3","type":"int"},{"name":"tire4","type":"int"}])
      ];

    }

    down() {

      return [
        this.dropTable("cars")
      ];

    }

  }

  return CreateCar;

})();
