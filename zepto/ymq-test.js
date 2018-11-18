var Ymqjs = (function () {
  var $,
    ymqjs = {};
  ymqjs.Z = function (dom, selector) {
    dom = dom || [];
    dom.__proto__ = $.fn;
    dom.selector = selector || "";
    return dom;
  };

  ymqjs.init = function (selector, context) {
    var dom;
    return ymqjs.Z(dom, selector);
  };
  $ = function (selector, context) {
    return ymqjs.init(selector, context);
  };
  $.fn = {
    sayHello: function () {
      console.log("hello ");
      return this;
    }
  };

  ymqjs.Z.prototype = $.fn;
  $.ymqjs = ymqjs;

  return $;
})();

window.Ymqjs = Ymqjs;
window.$ === undefined && (window.$ = Ymqjs);