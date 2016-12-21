'use strict';

namespace application {
  export class HomeController {
    public static $inject: string[] = ['$scope', '$location', 'Pip'];

    constructor($scope, $location, Pip: IPipService) {
      console.log('this is home controller haha');
    }

  }

  angular
    .module('core')
    .controller('HomeController', HomeController);
}
