var rippleGatewayApp = angular.module('rippleGatewayApp', [
  'ngRoute'
]);

rippleGatewayApp.config(['$routeProvider', '$compileProvider',
  function($routeProvider, $compileProvider) {
    $routeProvider.

    when('/dog-to-xrp', {
      controller: 'dogToXrp',
      templateUrl: 'views/admin/dog_to_xrp.html'
    }).
    when('/xrp-to-dog', {
      controller: 'xrpToDog',
      templateUrl: 'views/admin/xrp_to_dog.html'
    }).
    otherwise({
      redirectTo: '/dog-to-xrp'
    });
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|dogecoin):/);
  }
]);

