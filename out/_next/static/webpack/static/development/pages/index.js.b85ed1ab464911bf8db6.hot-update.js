webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/Menu/Menu.jsx":
/*!**************************************!*\
  !*** ./src/components/Menu/Menu.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../Container */ "./src/components/Container/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Menu.module.scss */ "./src/components/Menu/Menu.module.scss");
/* harmony import */ var _Menu_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _router_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../router/router */ "./src/router/router.js");
var _jsxFileName = "C:\\Users\\PAVILION\\Desktop\\Repositor\\AvtoSale\\src\\components\\Menu\\Menu.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Menu() {
  var avtoDrop = function avtoDrop(_ref) {
    var city = _ref.city;
    var sortCity = city.sort(function (a, b) {
      return a.name < b.name ? -1 : 1;
    });
    return sortCity.map(function (el, i) {
      return __jsx("li", {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: el.url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, el.name)));
    });
  };

  return __jsx(_Container__WEBPACK_IMPORTED_MODULE_1__["default"], {
    fluid: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_3__["wrp"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("ul", {
    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_3__["menu"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("li", {
    className: "menu__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("a", {
    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_3__["menu__item__link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "\u041E \u043D\u0430\u0441"))), __jsx("li", {
    className: "menu__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("a", {
    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_3__["menu__item__link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "\u0410\u0432\u0442\u043E\u0432\u044B\u043A\u0443\u043F \u0432 \u0433\u043E\u0440\u043E\u0434\u0430\u0445")), __jsx("div", {
    "uk-drop": "mode: click",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("ul", {
    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_3__["dropMenu"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, " ", avtoDrop(_router_router__WEBPACK_IMPORTED_MODULE_4__["default"])))), __jsx("li", {
    className: "menu__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("a", {
    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_3__["menu__item__link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u044C"))), __jsx("li", {
    className: "menu__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("a", {
    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_3__["menu__item__link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "\u041F\u043E\u043B\u0435\u0437\u043D\u0430\u044F \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"))), __jsx("li", {
    className: "menu__item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("a", {
    className: _Menu_module_scss__WEBPACK_IMPORTED_MODULE_3__["menu__item__link"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")))));
} //TODO Канвас меню


/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ })

})
//# sourceMappingURL=index.js.b85ed1ab464911bf8db6.hot-update.js.map