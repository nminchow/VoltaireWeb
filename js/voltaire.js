(function() {
  "use strict";

  var urlParams = new URLSearchParams(window.location.search);
  var type = urlParams.get('type');
  var amount = type === "l" ? 9 : 3;
  document.getElementById("pricing-text").innerHTML = `$${amount}/month`;
  document.getElementById("mobile-pricing-text").innerHTML = `Or enter card details ($${amount}/month)`;
})();