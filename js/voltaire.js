(function() {
  "use strict";

  var urlParams = new URLSearchParams(window.location.search);
  var type = urlParams.get('type');
  var amount = type === "l" ? 12 : 6;
  document.getElementById("pricing-text").innerHTML = `$${amount}/month`;
})();