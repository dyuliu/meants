'use strict';

namespace application {
  export class HeaderController {
    public static $inject: string[] = ['$scope'];

    constructor($scope) {
      console.log('this is header controller');
    }

  }

  angular
    .module('core')
    .controller('HeaderController', HeaderController);
}
