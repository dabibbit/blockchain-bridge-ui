rippleGatewayApp.service('ApiService', ['$http', function($http) {

  function success(callback){
    return function(resp, status, headers, config){
      callback(null, resp);
    };
  }

  function error(callback) {
    return function (resp, status, headers, config) {
      callback(resp, null);
    };
  }

  function serialize(obj) {
    var str = [];
    for(var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

  function API(){}

  API.prototype.getQuote = function (quote, callback) {

    $http({ method: 'POST', url: '/api/v1/bridge/quotes', data: quote })
      .success(success(callback))
      .error(error(callback));
  };

  return new API;

}]);

