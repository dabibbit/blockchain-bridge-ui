rippleGatewayApp.service('Utils', [function() {
  function Utils () {}

  Utils.prototype = {
    qs: function(obj, prefix){
      var str = [];
      for (var p in obj) {
        var k = prefix ? prefix + "[" + p + "]" : p,
          v = obj[p];
        str.push(angular.isObject(v) ? qs(v, k) : (k) + "=" + encodeURIComponent(v));
      }
      return str.join("&");
    },
    buildPaymentUri: function(payment) {
      var _this = this;
      var base_url = 'https://rippletrade.com/#/send?';

      var paymentObj = {
        to: payment.destination_address.address,
        amount: payment.destination_amount.amount+'/'+payment.destination_amount.currency,
        tab: 'send'
      };

      if (payment.destination_address.tag) {
        paymentObj.dt = payment.destination_address.tag;
      }

      var payment_uri = base_url + _this.qs(paymentObj);

      return payment_uri;
    },
    buildDogeUri: function(payment) {
      return 'dogecoin:'
        +payment.destination_address
        +'?amount='
        +payment.destination_amount.amount;
    }
  };

  return new Utils;
}]);
