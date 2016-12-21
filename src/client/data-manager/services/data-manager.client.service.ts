namespace application {
  'use strict';

  export interface IDataManagerService {
  };

  class DataManager implements IDataManagerService {
    public static $inject = ['$http', 'Global', '$q'];

    constructor(public $http: ng.IHttpService, public Global: IGlobalService, public $q: ng.IQService) {
      // do somethings here

    }

    private httpRequest(options) {
      let that = this;
      return this.$q(function (resolve, reject) {
        that.$http(options).then(
          function (response) {
            resolve(response.data);
          },
          function (errors) {
            console.error(errors);
            reject(errors);
          }
        );
      });
    }
  }

  angular
    .module('data-manager')
    .service('DataManager', DataManager);
}
