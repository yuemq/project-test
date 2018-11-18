(function (window) {

  //封装schema
  function _invoke (action, data, callback) {
    var schema = "myapp://utils/" + action;
    //为了下面循环不处理是？还是&，所以这里统一加上
    schema += "?a=a";
    //拼接参数
    var key;
    for (key in data) {
      if (data.hasOwnProperty(key)) {
        schema += "&" + key + "=" + data[key];
      }
    }

    //处理回调
    var callbackName = "";
    if (typeof callback === "string") {
      //callback 是一个函数的名字
      callbackName = callback;
    } else {
      //callback 是一个函数
      callbackName = action + Date.now();
      window[callbackName] = callback;
    }
    schema += "&callback=" + callbackName;

    var iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = schema;
    var body = document.body;
    body.appendChild(iframe);
    setTimeout(function () {
      body.removeChild(iframe);
      iframe = null;
    });

  }

  //暴露全局
  window.invoke = {
    share: function (data, callback) {
      _invoke("share", data, callback);
    },
    scan: function (data, callback) {
      _invoke("scan", data, callback);
    }
  };
})(window);