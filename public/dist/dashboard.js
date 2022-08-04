/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/storejs/dist/store.js":
/*!********************************************!*\
  !*** ./node_modules/storejs/dist/store.js ***!
  \********************************************/
/***/ (function(module) {

eval("/**!\n * storejs v2.0.1\n * Local storage localstorage package provides a simple API\n * \n * Copyright (c) 2021 kenny wang <wowohoo@qq.com>\n * https://jaywcjlove.github.io/store.js/\n * \n * Licensed under the MIT license.\n */\n\n(function (global, factory) {\n   true ? module.exports = factory() :\n  0;\n}(this, (function () { 'use strict';\n\n  var storage = window.localStorage;\n\n  function isJSON(obj) {\n    obj = JSON.stringify(obj);\n\n    if (!/^\\{[\\s\\S]*\\}$/.test(obj)) {\n      return false;\n    }\n\n    return true;\n  }\n\n  function stringify(val) {\n    return val === undefined || typeof val === \"function\" ? val + '' : JSON.stringify(val);\n  }\n\n  function deserialize(value) {\n    if (typeof value !== 'string') {\n      return undefined;\n    }\n\n    try {\n      return JSON.parse(value);\n    } catch (e) {\n      return value;\n    }\n  }\n\n  function isFunction(value) {\n    return {}.toString.call(value) === \"[object Function]\";\n  }\n\n  function isArray(value) {\n    return Object.prototype.toString.call(value) === \"[object Array]\";\n  } // https://github.com/jaywcjlove/store.js/pull/8\n  // Error: QuotaExceededError\n\n\n  function dealIncognito(storage) {\n    var _KEY = '_Is_Incognit',\n        _VALUE = 'yes';\n\n    try {\n      storage.setItem(_KEY, _VALUE);\n    } catch (e) {\n      if (e.name === 'QuotaExceededError') {\n        var _nothing = function _nothing() {};\n\n        storage.__proto__ = {\n          setItem: _nothing,\n          getItem: _nothing,\n          removeItem: _nothing,\n          clear: _nothing\n        };\n      }\n    } finally {\n      if (storage.getItem(_KEY) === _VALUE) storage.removeItem(_KEY);\n    }\n\n    return storage;\n  } // deal QuotaExceededError if user use incognito mode in browser\n\n\n  storage = dealIncognito(storage);\n\n  function Store() {\n    if (!(this instanceof Store)) {\n      return new Store();\n    }\n  }\n\n  Store.prototype = {\n    set: function set(key, val) {\n      if (key && !isJSON(key)) {\n        storage.setItem(key, stringify(val));\n      } else if (isJSON(key)) {\n        for (var a in key) {\n          this.set(a, key[a]);\n        }\n      }\n\n      return this;\n    },\n    get: function get(key) {\n      if (!key) {\n        var ret = {};\n        this.forEach(function (key, val) {\n          return ret[key] = val;\n        });\n        return ret;\n      }\n\n      if (key.charAt(0) === '?') {\n        return this.has(key.substr(1));\n      }\n\n      var args = arguments;\n\n      if (args.length > 1) {\n        var dt = {};\n\n        for (var i = 0, len = args.length; i < len; i++) {\n          var value = deserialize(storage.getItem(args[i]));\n\n          if (this.has(args[i])) {\n            dt[args[i]] = value;\n          }\n        }\n\n        return dt;\n      }\n\n      return deserialize(storage.getItem(key));\n    },\n    clear: function clear() {\n      storage.clear();\n      return this;\n    },\n    remove: function remove(key) {\n      var val = this.get(key);\n      storage.removeItem(key);\n      return val;\n    },\n    has: function has(key) {\n      return {}.hasOwnProperty.call(this.get(), key);\n    },\n    keys: function keys() {\n      var d = [];\n      this.forEach(function (k) {\n        d.push(k);\n      });\n      return d;\n    },\n    forEach: function forEach(callback) {\n      for (var i = 0, len = storage.length; i < len; i++) {\n        var key = storage.key(i);\n        callback(key, this.get(key));\n      }\n\n      return this;\n    },\n    search: function search(str) {\n      var arr = this.keys(),\n          dt = {};\n\n      for (var i = 0, len = arr.length; i < len; i++) {\n        if (arr[i].indexOf(str) > -1) dt[arr[i]] = this.get(arr[i]);\n      }\n\n      return dt;\n    }\n  };\n  var _Store = null;\n\n  function store(key, data) {\n    var argm = arguments;\n    var dt = null;\n    if (!_Store) _Store = Store();\n    if (argm.length === 0) return _Store.get();\n\n    if (argm.length === 1) {\n      if (typeof key === \"string\") return _Store.get(key);\n      if (isJSON(key)) return _Store.set(key);\n    }\n\n    if (argm.length === 2 && typeof key === \"string\") {\n      if (!data) return _Store.remove(key);\n      if (data && typeof data === \"string\") return _Store.set(key, data);\n\n      if (data && isFunction(data)) {\n        dt = null;\n        dt = data(key, _Store.get(key));\n        store.set(key, dt);\n      }\n    }\n\n    if (argm.length === 2 && isArray(key) && isFunction(data)) {\n      for (var i = 0, len = key.length; i < len; i++) {\n        dt = data(key[i], _Store.get(key[i]));\n        store.set(key[i], dt);\n      }\n    }\n\n    return store;\n  }\n\n  for (var a in Store.prototype) {\n    store[a] = Store.prototype[a];\n  }\n\n  return store;\n\n})));\n\n\n//# sourceURL=webpack://sat-mock-test-site/./node_modules/storejs/dist/store.js?");

/***/ }),

/***/ "./public/js/dashboard.js":
/*!********************************!*\
  !*** ./public/js/dashboard.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\r\n * This is where I will import api for all mocktest and then list them out\r\n */\r\n\r\n const store = __webpack_require__(/*! storejs */ \"./node_modules/storejs/dist/store.js\")\r\n const btnClick = document.querySelector('.btnClick')\r\n\r\n const  saveTestId =  () => {\r\n   const wtf = document.querySelector('.testId').textContent\r\n     store('id', wtf)\r\n     console.log(store.keys())\r\n }  \r\nbtnClick.addEventListener('click', saveTestId)\n\n//# sourceURL=webpack://sat-mock-test-site/./public/js/dashboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/js/dashboard.js");
/******/ 	
/******/ })()
;