// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"JS/array/array.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ustensilsArray = exports.recipesArray = exports.nameArray = exports.ingredientsArray = exports.filteredUstensilsArray = exports.filteredRecipesArray = exports.filteredNameArray = exports.filteredIngredientsArray = exports.filteredApplianceArray = exports.createRecipesArray = exports.arrayCreator = exports.applianceArray = void 0;
var recipesArray = [];
exports.recipesArray = recipesArray;
var applianceArray = [];
exports.applianceArray = applianceArray;
var ustensilsArray = [];
exports.ustensilsArray = ustensilsArray;
var nameArray = [];
exports.nameArray = nameArray;
var ingredientsArray = [];
exports.ingredientsArray = ingredientsArray;
var filteredRecipesArray = [];
exports.filteredRecipesArray = filteredRecipesArray;
var filteredApplianceArray = [];
exports.filteredApplianceArray = filteredApplianceArray;
var filteredUstensilsArray = [];
exports.filteredUstensilsArray = filteredUstensilsArray;
var filteredNameArray = [];
exports.filteredNameArray = filteredNameArray;
var filteredIngredientsArray = [];
exports.filteredIngredientsArray = filteredIngredientsArray;

var createRecipesArray = function createRecipesArray(data) {
  var recipes = data.recipes;

  for (var index = 0; index < recipes.length; index++) {
    var element = recipes[index];
    recipesArray.push(element);
    filteredRecipesArray.push(element);
  }
};

exports.createRecipesArray = createRecipesArray;

var arrayCreator = function arrayCreator(array, property) {
  for (var index = 0; index < filteredRecipesArray.length; index++) {
    var element = filteredRecipesArray[index][property];
    array.push(element);
  }
};

exports.arrayCreator = arrayCreator;
},{}],"JS/class/Ingredients.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ingredients = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ingredients = /*#__PURE__*/function () {
  function Ingredients(data) {
    _classCallCheck(this, Ingredients);

    this.ingredient = data.ingredient;
    this.quantity = data.quantity;
    this.unit = data.unit;
  }

  _createClass(Ingredients, [{
    key: "createIngredients",
    value: function createIngredients() {
      var _this = this;

      var undefQuantity = function undefQuantity() {
        if (typeof _this.quantity === 'undefined') {
          return '';
        } else {
          return _this.quantity;
        }
      };

      var undefUnit = function undefUnit() {
        if (typeof _this.unit === 'undefined') {
          return '';
        } else {
          return _this.unit;
        }
      };
      /* création des ingrédients */


      return "<p class=\"card-text mb-0 fs-6\" style='font-size:12px;'><strong >".concat(this.ingredient, " : </strong><small>").concat(undefQuantity(), " ").concat(undefUnit(), "</small></p>");
    }
  }]);

  return Ingredients;
}();

exports.Ingredients = Ingredients;
},{}],"JS/class/Recipe.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recipe = void 0;

var _Ingredients = require("./Ingredients.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Recipe = /*#__PURE__*/function () {
  function Recipe(data) {
    _classCallCheck(this, Recipe);

    this.id = data.id;
    this.name = data.name;
    this.servings = data.servings;
    this.ingredients = data.ingredients;
    this.time = data.time;
    this.description = data.description;
    this.appliance = data.appliance;
    this.ustensils = data.ustensils;
  }

  _createClass(Recipe, [{
    key: "createHtml",
    value: function createHtml() {
      return "<div class=\"card-container col-md-4\">\n      <div class=\"card mb-4 box-shadow\">\n        <div class=\"card-img-top\" style=\"height: 235px; width: 100%; display: block;background-color:#C7BEBE;\"></div>\n        <div class=\"card-body\" style=\"height: 235px; width: 100%; background-color:#E7E7E7;\">\n          <div class=\"row d-flex justify-content-between align-items-center\">\n            <p class=\"col-8 pr-0\">".concat(this.name, "</p>\n            <p class=\"col-3 text-dark ml-0 pl-0 pr-0 font-weight-bold\"><i class=\"far fa-clock pr-2\"></i>").concat(this.time, " mins</p>\n          </div>\n          <div class=\"row\">\n            <ul class=\"col card-text font-weight-bold ingredients\">").concat(this.createRecipe(), "</ul>\n            <p class=\"col card-text\" style=\"font-size:14px; display: -webkit-box; -webkit-line-clamp: 7; -webkit-box-orient: vertical; overflow: hidden; text-overflow: ellipsis;\" >").concat(this.description, "</p>\n          </div>\n        </div>\n      </div>\n    </div>");
    }
  }, {
    key: "createRecipe",
    value: function createRecipe() {
      var array = this.ingredients;
      var arrayRawHtml = [];

      for (var index = 0; index < array.length; index++) {
        var ingredient = new _Ingredients.Ingredients(array[index]);
        var rawHtml = ingredient.createIngredients();
        arrayRawHtml.push(rawHtml);
      }

      ;
      return arrayRawHtml.join('');
    }
  }]);

  return Recipe;
}();

exports.Recipe = Recipe;
},{"./Ingredients.js":"JS/class/Ingredients.js"}],"JS/layout/card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.card = void 0;

var _Recipe = require("../class/Recipe.js");

var card = function card(array) {
  var gallery = document.querySelector(".gallery");
  var arrayRawHtml = [];

  for (var index = 0; index < array.length; index++) {
    var element = array[index];
    var recipe = new _Recipe.Recipe(element);
    arrayRawHtml.push(recipe.createHtml());
  }

  gallery.innerHTML = arrayRawHtml.join("");
};

exports.card = card;
},{"../class/Recipe.js":"JS/class/Recipe.js"}],"JS/utils/utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeDouble = exports.objectProperty = exports.lowercaseArray = exports.lowerCase = exports.loopObject = exports.concatArray = void 0;

var lowerCase = function lowerCase(value) {
  return value.toLowerCase();
};

exports.lowerCase = lowerCase;

var lowercaseArray = function lowercaseArray(array) {
  var arr = [];

  for (var index = 0; index < array.length; index++) {
    var element = array[index];
    arr.push(element.toLowerCase());
  }

  return arr;
};

exports.lowercaseArray = lowercaseArray;

var loopObject = function loopObject(myArray) {
  var ingredientList = [];

  for (var i = 0; i < myArray.length; i++) {
    ingredientList.push(myArray[i].ingredient.toLowerCase());
  }

  return ingredientList;
};

exports.loopObject = loopObject;

var concatArray = function concatArray(myArray) {
  for (var i = 0; i < myArray.length; i++) {
    myArray[i].toLowerCase();
  }
};

exports.concatArray = concatArray;

var removeDouble = function removeDouble(array) {
  var ens = new Set(array);
  return Array.from(ens);
};

exports.removeDouble = removeDouble;

var objectProperty = function objectProperty(array) {
  var newArray = [];

  for (var index = 0; index < array.length; index++) {
    var element = array[index]["ingredient"];
    newArray.push(element);
  }

  return newArray;
};

exports.objectProperty = objectProperty;
},{}],"JS/sort/suggestion.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggestion = exports.createSuggestion = void 0;

var suggestion = function suggestion(value) {
  return "<a class=\"dropdown-item text-light\" href=\"#\"> ".concat(value, "</a>");
};

exports.suggestion = suggestion;

var createSuggestion = function createSuggestion(itemArray, loc) {
  var location = document.getElementById(loc);
  var array = [];

  for (var index = 0; index < itemArray.length; index++) {
    var element = itemArray[index];
    array.push(suggestion(element));
  }

  location.innerHTML = array.join("");
};

exports.createSuggestion = createSuggestion;
},{}],"JS/sort/sort.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setArrays = exports.searchInput = exports.displayItems = void 0;

var _array = require("../array/array.js");

var _card = require("../layout/card.js");

var _utils = require("../utils/utils.js");

var _suggestion = require("./suggestion.js");

var searchInput = function searchInput(input, condition) {
  input.oninput = function () {
    sortCard(input.value, condition);
  };
};

exports.searchInput = searchInput;

var sortCard = function sortCard(value, condition) {
  resetArray();

  for (var index = 0; index < _array.recipesArray.length; index++) {
    if (setCondition(index, value, condition)) {
      _array.filteredRecipesArray.push(_array.recipesArray[index]);
    }
  }

  setArrays();
  displayItems();
};

var setArrays = function setArrays() {
  (0, _array.arrayCreator)(_array.filteredApplianceArray, "appliance");
  (0, _array.arrayCreator)(_array.filteredNameArray, "name");
  (0, _array.arrayCreator)(_array.filteredUstensilsArray, "ustensils");
  (0, _array.arrayCreator)(_array.filteredIngredientsArray, "ingredients");
};

exports.setArrays = setArrays;

var resetArray = function resetArray() {
  _array.filteredRecipesArray.length = 0;
  _array.filteredApplianceArray.length = 0;
  _array.filteredUstensilsArray.length = 0;
  _array.filteredNameArray.length = 0;
  _array.filteredIngredientsArray.length = 0;
};

var setCondition = function setCondition(index, value, condition) {
  var ingredientsCondition = (0, _utils.loopObject)(_array.ingredientsArray[index]).includes(value.toLowerCase());

  var ustensilsCondition = _array.ustensilsArray[index].map(_utils.lowerCase).includes(value.toLowerCase());

  var nameCondition = _array.nameArray[index].toLowerCase().includes(value.toLowerCase());

  var applianceCondition = _array.applianceArray[index].toLowerCase().includes(value.toLowerCase());

  switch (condition) {
    case "ingredients":
      return ingredientsCondition;

    case "ustensils":
      return ustensilsCondition;

    case "appliance":
      return applianceCondition;

    case "globals":
      return ingredientsCondition || ustensilsCondition || applianceCondition || nameCondition;

    default:
      break;
  }
};

var displayItems = function displayItems() {
  (0, _card.card)(_array.filteredRecipesArray);
  (0, _suggestion.createSuggestion)((0, _utils.removeDouble)((0, _utils.lowercaseArray)((0, _utils.objectProperty)(_array.filteredIngredientsArray.flat()))), "ingredientsgst");
  (0, _suggestion.createSuggestion)((0, _utils.removeDouble)((0, _utils.lowercaseArray)(_array.filteredUstensilsArray.flat())), "ustensilsgt");
  (0, _suggestion.createSuggestion)((0, _utils.removeDouble)((0, _utils.lowercaseArray)(_array.filteredApplianceArray)), "appliancesgt");
};

exports.displayItems = displayItems;
},{"../array/array.js":"JS/array/array.js","../layout/card.js":"JS/layout/card.js","../utils/utils.js":"JS/utils/utils.js","./suggestion.js":"JS/sort/suggestion.js"}],"JS/data/getData.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = void 0;

var _array = require("../array/array.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var url;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "data.json";
            _context.next = 3;
            return fetch(url).then(function (resp) {
              return resp.json();
            }).then(function (data) {
              return (0, _array.createRecipesArray)(data);
            }).catch(function (e) {
              return console.log("une erreur c'est produite", e);
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getData() {
    return _ref.apply(this, arguments);
  };
}();

exports.getData = getData;
},{"../array/array.js":"JS/array/array.js"}],"JS/index/index.js":[function(require,module,exports) {
"use strict";

var _sort = require("../sort/sort.js");

var _array = require("../array/array.js");

var _getData = require("../data/getData.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var globalSearch = document.getElementById("search");
var ingredientsSearch = document.getElementById("ingredientsBtn");
var applianceSearch = document.getElementById("applianceBtn");
var ustensilsSearch = document.getElementById("ustensilsBtn");

var init = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _getData.getData)();

          case 2:
            (0, _array.arrayCreator)(_array.applianceArray, "appliance");
            (0, _array.arrayCreator)(_array.nameArray, "name");
            (0, _array.arrayCreator)(_array.ustensilsArray, "ustensils");
            (0, _array.arrayCreator)(_array.ingredientsArray, "ingredients");
            (0, _sort.searchInput)(globalSearch, "globals");
            (0, _sort.searchInput)(ingredientsSearch, "ingredients");
            (0, _sort.searchInput)(applianceSearch, "appliance");
            (0, _sort.searchInput)(ustensilsSearch, "ustensils");
            (0, _sort.displayItems)();

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

init();
},{"../sort/sort.js":"JS/sort/sort.js","../array/array.js":"JS/array/array.js","../data/getData.js":"JS/data/getData.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57306" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","JS/index/index.js"], null)
//# sourceMappingURL=/index.562f6afc.js.map