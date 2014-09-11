rippleGatewayApp.controller('xrpToDog', ['$scope', 'ApiService', 'Utils', function($scope, $api, $utils){
  $scope.errors = [];
  var bridgePrefix = 'dogecoin:';
  function handleError(error) {
    $scope.errors.push(error);
  }

  $scope.quote = {
    amount: null,
    address: null,
    currency: 'DOG'
  };


  $scope.form = {};

  $scope.ripple_payment_uri;

  $scope.form.confirm = false;

  $scope.getQuote = function() {
    $scope.quote.address = bridgePrefix.concat($scope.quote.address);
    $api.getQuote($scope.quote, function(error, response){
      if (error) {
        return handleError(error);
      }

      $scope.form.confirm = !$scope.form.confirm;
      $scope.quoteResponse = response.bridge;
      console.log('response', response);

      $scope.payment_uri = $utils.buildPaymentUri($scope.quoteResponse);
    });

  };


}]);

rippleGatewayApp.controller('dogToXrp', ['$scope', 'ApiService', 'Utils', function($scope, $api, $utils){
  $scope.errors = [];
  var bridgePrefix = 'ripple:';
  function handleError(error) {
    $scope.errors.push(error);
  }

  $scope.quote = {
    amount: null,
    address: null,
    currency: 'DOG'
  };

  $scope.form = {};

  $scope.quoteResponse = {};

  $scope.dogecoin_payment_uri;

  $scope.form.confirm = false;

  $scope.getQuote = function() {
    $scope.quote.address = bridgePrefix.concat($scope.quote.address);
    $api.getQuote($scope.quote, function(error, response){
      if (error) {
        return handleError(error);
      }

      $scope.form.confirm = !$scope.form.confirm;
      $scope.quoteResponse = response.bridge;
      console.log('response', response);

      $scope.payment_uri = $utils.buildDogeUri($scope.quoteResponse);
    });

  };

}]);
