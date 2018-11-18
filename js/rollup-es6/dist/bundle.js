(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (factory());
}(this, (function () { 'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  require("core-js/es6");

  require("core-js/fn/array/includes");

  require("core-js/fn/string/pad-start");

  require("core-js/fn/string/pad-end");

  require("core-js/fn/symbol/async-iterator");

  require("core-js/fn/object/get-own-property-descriptors");

  require("core-js/fn/object/values");

  require("core-js/fn/object/entries");

  require("core-js/fn/promise/finally");

  require("core-js/web");

  require("regenerator-runtime/runtime");

  if (global._babelPolyfill && typeof console !== "undefined" && console.warn) {
    console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
  }

  global._babelPolyfill = true;

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  function _helperPluginUtils() {
    const data = require("@babel/helper-plugin-utils");

    _helperPluginUtils = function () {
      return data;
    };

    return data;
  }

  var _default = (0, _helperPluginUtils().declare)(api => {
    api.assertVersion(7);
    return {
      manipulateOptions(opts, parserOpts) {
        parserOpts.plugins.push("asyncGenerators");
      }

    };
  });

  exports.default = _default;

  function LoadImg(src) {
    var promise = new Promise(function (resolve, reject) {
      var img = document.createElement("img");

      img.onload = function () {
        resolve(img);
      };

      img.onerror = function () {
        reject("图片加载失败");
      };

      img.src = src;
    });
    return promise;
  }

  var src = "https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super";
  var src2 = "https://www.imooc.com/static/img/index/logo.gif";

  var load =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var result, result2;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return LoadImg(src);

            case 2:
              result = _context.sent;
              console.log(result);
              _context.next = 6;
              return LoadImg(src2);

            case 6:
              result2 = _context.sent;
              console.log(result2);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function load() {
      return _ref.apply(this, arguments);
    };
  }();

  load();

})));
