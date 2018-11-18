(function (window) {
  var zepto = {};

  function Z (dom, selector) {
    var i, len = dom ? dom.length : 0;
    for (i = 0; i < len; i++) {
      this[i] = dom[i];
    }
    this.length = len;
    this.selector = selector || "";
  }

  zepto.init = function (dom, selector) {
    return new Z(dom, selector);
  };

  var $ = function (selector) {
    var slice = Array.prototype.slice;
    var dom = slice.call(document.querySelectorAll(selector));
    return zepto.init(dom, selector);
  };

  $.fn = {
    css: function (key, value) {
      alert("css");
    },
    html: function (value) {
      return "这是一个html模板";
    }
  };

  window.$ = $;
  Z.prototype = $.fn;

})(window);