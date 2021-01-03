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
})({"dino/data.json":[function(require,module,exports) {
module.exports = {
  "Dinos": [{
    "species": "Triceratops",
    "weight": 13000,
    "height": 114,
    "diet": "herbavor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "First discovered in 1889 by Othniel Charles Marsh"
  }, {
    "species": "Tyrannosaurus Rex",
    "weight": 11905,
    "height": 144,
    "diet": "carnivor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "The largest known skull measures in at 5 feet long."
  }, {
    "species": "Anklyosaurus",
    "weight": 10500,
    "height": 55,
    "diet": "herbavor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "Anklyosaurus survived for approximately 135 million years."
  }, {
    "species": "Brachiosaurus",
    "weight": 70000,
    "height": "372",
    "diet": "herbavor",
    "where": "North America",
    "when": "Late Jurasic",
    "fact": "An asteroid was named 9954 Brachiosaurus in 1991."
  }, {
    "species": "Stegosaurus",
    "weight": 11600,
    "height": 79,
    "diet": "herbavor",
    "where": "North America, Europe, Asia",
    "when": "Late Jurasic to Early Cretaceous",
    "fact": "The Stegosaurus had between 17 and 22 seperate places and flat spines."
  }, {
    "species": "Elasmosaurus",
    "weight": 16000,
    "height": 59,
    "diet": "carnivor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "Elasmosaurus was a marine reptile first discovered in Kansas."
  }, {
    "species": "Pteranodon",
    "weight": 44,
    "height": 20,
    "diet": "carnivor",
    "where": "North America",
    "when": "Late Cretaceous",
    "fact": "Actually a flying reptile, the Pteranodon is not a dinosaur."
  }, {
    "species": "Pigeon",
    "weight": 0.5,
    "height": 9,
    "diet": "herbavor",
    "where": "World Wide",
    "when": "Holocene",
    "fact": "All birds are living dinosaurs."
  }]
};
},{}],"dino/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDinos;
exports.Dino = void 0;

var _data = require("./data.json");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var subtract = function subtract(a, b) {
  return a - b;
}; // random number generator


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var Dino = /*#__PURE__*/function () {
  function Dino(_ref) {
    var dino = _ref.dino,
        humanInput = _ref.humanInput,
        randomFact = _ref.randomFact;

    _classCallCheck(this, Dino);

    var height = dino.height,
        weight = dino.weight,
        diet = dino.diet,
        species = dino.species,
        fact = dino.fact;
    this.height = height;
    this.weight = weight;
    this.diet = diet;
    this.species = species; // identifying bird or dino, birds weigh less than dino.

    if (weight > 1) {
      // setting facts by comparing the user
      this.setFact(humanInput, randomFact, fact);
    } else {
      // for birds setting fact as it is without comparing.
      this.fact = fact;
    }
  }

  _createClass(Dino, [{
    key: "setFact",
    value: function setFact(_ref2, factOptionName, fact) {
      var feet = _ref2.feet,
          inches = _ref2.inches,
          diet = _ref2.diet,
          weight = _ref2.weight;

      switch (factOptionName) {
        case 'height':
          var totalHeight = feet + inches;
          this.fact = this.compareHeightAndSetFact(totalHeight);
          break;

        case 'weight':
          this.fact = this.compareWeightAndSetFact(weight);
          break;

        case 'diet':
          this.fact = this.compareDietAndSetFact(diet);
          break;

        default:
          this.fact = "no fact to display";
          break;
      }
    } // compares the height of dino vs human and returns the fact.

  }, {
    key: "compareHeightAndSetFact",
    value: function compareHeightAndSetFact(height) {
      // Note height in inches.
      var fact = "Our heights are equal!  ".concat(height, " inches");

      if (this.height > height) {
        fact = "I am taller than you by ".concat(this.height - height, " inches");
      } else if (this.height < height) {
        fact = "You are taller than me by ".concat(subtract(height, this.height), " inches");
      } else {//swallow
      }

      return fact;
    } // compares the weight of dino vs human and returns the fact.

  }, {
    key: "compareWeightAndSetFact",
    value: function compareWeightAndSetFact(weight) {
      // NOTE: Weight in JSON file is in lbs.
      var fact = "Our weights are equal! ".concat(weight, " lbs");

      if (this.weight > weight) {
        fact = "I am weigh more than you by ".concat(subtract(this.weight, weight), " lbs");
      } else if (this.weight < weight) {
        fact = "You weigh more than me by ".concat(subtract(weight, this.weight), " lbs");
      } else {// swallow 
      }

      return fact;
    } // compares the diet of dino vs human and returns the fact.

  }, {
    key: "compareDietAndSetFact",
    value: function compareDietAndSetFact(diet) {
      var fact;

      if (this.diet === diet.toLowerCase()) {
        fact = "Our diets are same, ".concat(diet, "!");
      } else {
        fact = "Our diets are different";
      }

      return fact;
    }
  }]);

  return Dino;
}();

exports.Dino = Dino;

function getDinos(humanInput) {
  var compareOptions = ["height", "weight", "diet"];
  var randomFact = compareOptions[getRandomInt(compareOptions.length)];
  return _data.Dinos.map(function (dino) {
    return new Dino({
      dino: dino,
      humanInput: humanInput,
      randomFact: randomFact
    });
  });
}
},{"./data.json":"dino/data.json"}],"images/anklyosaurus.png":[function(require,module,exports) {
module.exports = "/anklyosaurus.f96513e6.png";
},{}],"images/brachiosaurus.png":[function(require,module,exports) {
module.exports = "/brachiosaurus.81e4c2fd.png";
},{}],"images/elasmosaurus.png":[function(require,module,exports) {
module.exports = "/elasmosaurus.4327d02e.png";
},{}],"images/pteranodon.png":[function(require,module,exports) {
module.exports = "/pteranodon.5b35c3b1.png";
},{}],"images/pigeon.png":[function(require,module,exports) {
module.exports = "/pigeon.b587b5f2.png";
},{}],"images/human.png":[function(require,module,exports) {
module.exports = "/human.5671e61b.png";
},{}],"images/stegosaurus.png":[function(require,module,exports) {
module.exports = "/stegosaurus.f3bf38e3.png";
},{}],"images/tracks.png":[function(require,module,exports) {
module.exports = "/tracks.44a7a949.png";
},{}],"images/triceratops.png":[function(require,module,exports) {
module.exports = "/triceratops.51bd8679.png";
},{}],"images/tyrannosaurus rex.png":[function(require,module,exports) {
module.exports = "/tyrannosaurus rex.dd3ab35d.png";
},{}],"images/*.png":[function(require,module,exports) {
module.exports = {
  "anklyosaurus": require("./anklyosaurus.png"),
  "brachiosaurus": require("./brachiosaurus.png"),
  "elasmosaurus": require("./elasmosaurus.png"),
  "pteranodon": require("./pteranodon.png"),
  "pigeon": require("./pigeon.png"),
  "human": require("./human.png"),
  "stegosaurus": require("./stegosaurus.png"),
  "tracks": require("./tracks.png"),
  "triceratops": require("./triceratops.png"),
  "tyrannosaurus rex": require("./tyrannosaurus rex.png")
};
},{"./anklyosaurus.png":"images/anklyosaurus.png","./brachiosaurus.png":"images/brachiosaurus.png","./elasmosaurus.png":"images/elasmosaurus.png","./pteranodon.png":"images/pteranodon.png","./pigeon.png":"images/pigeon.png","./human.png":"images/human.png","./stegosaurus.png":"images/stegosaurus.png","./tracks.png":"images/tracks.png","./triceratops.png":"images/triceratops.png","./tyrannosaurus rex.png":"images/tyrannosaurus rex.png"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"grid/grid.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"grid/grid.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGridItems = void 0;

var _ = _interopRequireDefault(require("../images/*.png"));

require("./grid.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// removing slash from the input image .
var getImage = function getImage(url) {
  return url.substring(1);
};

var createGridItem = function createGridItem(_ref) {
  var name = _ref.name,
      image = _ref.image,
      fact = _ref.fact;
  return " <div class=\"grid-item\">\n\t  \t<h3>".concat(name, "</h3>\n  \t\t\t<img src=\"").concat(window.location.origin, "/").concat(image, "\" alt=\"").concat(name, "\" style=\"width:auto;\">\n\t\t\t").concat(fact ? "<p>".concat(fact ? fact : '&nbsp;', "</p>") : "&nbsp;", "\n\t</div>");
}; // inserting human information into the grid.


var insertHumanInfoInGrid = function insertHumanInfoInGrid(human, dinos) {
  var humanInformation = createGridItem({
    name: human.name,
    image: getImage(_.default["human"])
  }); // inserting the human information at the center of the grid.

  dinos.splice(Math.floor(dinos.length / 2), 0, humanInformation);
  return dinos;
}; // Add tiles of dinos and human to DOM


var loadGridItems = function loadGridItems(dinos, humanInfo) {
  var dinosGrid = []; // Generate Tiles for each Dino in Array

  dinos.forEach(function (dino) {
    dinosGrid.push(createGridItem({
      name: dino.species,
      image: getImage(_.default[dino.species.toLowerCase()]),
      fact: dino.fact
    }));
  });
  return insertHumanInfoInGrid(humanInfo, dinosGrid);
};

exports.loadGridItems = loadGridItems;
},{"../images/*.png":"images/*.png","./grid.css":"grid/grid.css"}],"app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.human = exports.container = exports.form = exports.grid = void 0;

var _index = _interopRequireDefault(require("./dino/index"));

var _grid = require("./grid/grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var grid = document.getElementById("grid");
exports.grid = grid;
var form = document.getElementById("dino-compare");
exports.form = form;
var container = document.getElementById("container");
exports.container = container;
var human = {}; // creating button for user .

exports.human = human;

var createButton = function createButton(text, callback) {
  var button = document.createElement("button");
  button.innerText = text;
  button.id = "goBack";
  button.onclick = callback;
  return button;
}; // converts feet into inches


var convertFeetToInches = function convertFeetToInches(feet) {
  return feet * 12;
}; // get values from form


var getInputFormValues = function getInputFormValues(inputFormElements) {
  var humanInformation = {};
  Array.prototype.forEach.call(inputFormElements, function (_ref) {
    var name = _ref.name,
        value = _ref.value;
    var isNameEqualToFeet = name === "feet";
    humanInformation[name] = isNameEqualToFeet ? convertFeetToInches(value) : value;
  });
  delete humanInformation[""];
  return humanInformation;
}; // displaying form and hiding the grid.


var goBack = function goBack() {
  // removing grid items and goback button
  grid.innerHTML = null;
  document.getElementById("goBack").remove(); // displaying and resetting the forms.

  form.reset();
  form.style.display = "block";
};

var onSubmit = function onSubmit(event) {
  event.preventDefault(); // setting form values to human

  var inputFormValues = getInputFormValues(event.target.elements); // hiding form elements from the ui.

  form.style.display = "none"; // fetching the dinos from the dinos.json

  var dinos = (0, _index.default)(inputFormValues); // loading all the fetched dinos & human in the grid

  grid.innerHTML = (0, _grid.loadGridItems)(dinos, inputFormValues).join(""); // adding goback button to the DOM

  container.append(createButton("go back", goBack));
}; // addEventListener for form submission


form.addEventListener("submit", onSubmit);
},{"./dino/index":"dino/index.js","./grid/grid":"grid/grid.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62242" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.js"], null)
//# sourceMappingURL=/app.c328ef1a.js.map