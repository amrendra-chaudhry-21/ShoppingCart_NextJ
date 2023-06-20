"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_cartState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/cartState */ \"./atoms/cartState.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Product = function(param) {\n    var product = param.product;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_cartState__WEBPACK_IMPORTED_MODULE_3__.cartState), 2), cartItem = ref[0], setCartItem = ref[1];\n    var addItemsToCart = function() {\n        if (cartItem.findIndex(function(pro) {\n            return pro.id === product.id;\n        }) === -1) {\n            setCartItem(function(prevState) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(prevState).concat([\n                    product\n                ]);\n            });\n        } else {\n            setCartItem(function(prevState) {\n                return prevState.map(function(item) {\n                    return item.id === product.id ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, item), {\n                        quantity: item.quantity + 1\n                    }) : item;\n                });\n            });\n        }\n        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"\".concat(product.name, \" added to cart\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#fff] pt-4 pb-10 shadow-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"mx-auto w-[150px] h-[300px] object-contain\",\n                src: product.image,\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between text-[16px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: product.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                                lineNumber: 29,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                children: [\n                                    \"$\",\n                                    product.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                                lineNumber: 30,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-red-600 text-white py-4 px-12 mt-4 block hover:bg-blue-500 md:bg-green-500\",\n                        onClick: addItemsToCart,\n                        children: \"Add To Cart\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, _this);\n};\n_s(Product, \"fswGI2PVCs0atLGTPTLJ6oWuN5M=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFBeUI7QUFDZTtBQUNNO0FBQ1Y7QUFFcEMsSUFBTUksT0FBTyxHQUFHLGdCQUFpQjtRQUFkQyxPQUFPLFNBQVBBLE9BQU87O0lBQ3RCLElBQWdDSixHQUF5QixvRkFBekJBLHNEQUFjLENBQUNDLHVEQUFTLENBQUMsTUFBbERJLFFBQVEsR0FBaUJMLEdBQXlCLEdBQTFDLEVBQUVNLFdBQVcsR0FBSU4sR0FBeUIsR0FBN0I7SUFFNUIsSUFBTU8sY0FBYyxHQUFHLFdBQU07UUFDekIsSUFBSUYsUUFBUSxDQUFDRyxTQUFTLENBQUNDLFNBQUFBLEdBQUc7bUJBQUlBLEdBQUcsQ0FBQ0MsRUFBRSxLQUFLTixPQUFPLENBQUNNLEVBQUU7U0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekRKLFdBQVcsQ0FBQ0ssU0FBQUEsU0FBUzt1QkFBSSxxRkFBSUEsU0FBUyxDQUFUQSxRQUFKO29CQUFlUCxPQUFPO2lCQUFDO2FBQUEsQ0FBQztRQUNyRCxPQUFPO1lBQ0hFLFdBQVcsQ0FBQ0ssU0FBQUEsU0FBUyxFQUFJO2dCQUNyQixPQUFPQSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7b0JBQzNCLE9BQU9BLElBQUksQ0FBQ0gsRUFBRSxLQUFLTixPQUFPLENBQUNNLEVBQUUsR0FBRyx3S0FBS0csSUFBSTt3QkFBRUMsUUFBUSxFQUFFRCxJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDO3NCQUFFLEdBQUdELElBQUk7Z0JBQ25GLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQztRQUNOLENBQUM7UUFFRFgsMkRBQUssQ0FBQyxFQUFDLENBQWUsTUFBYyxDQUEzQkUsT0FBTyxDQUFDVyxJQUFJLEVBQUMsZ0JBQWMsQ0FBQyxDQUFDO0lBRTFDLENBQUM7SUFFRCxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsaUNBQWlDOzswQkFDNUMsOERBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyw0Q0FBNEM7Z0JBQUNFLEdBQUcsRUFBRWYsT0FBTyxDQUFDZ0IsS0FBSztnQkFBRUMsR0FBRyxFQUFDLEVBQUU7Ozs7O3FCQUFHOzBCQUN6Riw4REFBQ0wsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7O2tDQUN0Qiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLCtDQUErQzs7MENBQzFELDhEQUFDSyxJQUFFOzBDQUFFbEIsT0FBTyxDQUFDbUIsS0FBSzs7Ozs7cUNBQU07MENBQ3hCLDhEQUFDRCxJQUFFOztvQ0FBQyxHQUFDO29DQUFDbEIsT0FBTyxDQUFDb0IsS0FBSzs7Ozs7O3FDQUFNOzs7Ozs7NkJBRXZCO2tDQUVOLDhEQUFDQyxRQUFNO3dCQUNIUixTQUFTLEVBQUMsK0VBQStFO3dCQUN6RlMsT0FBTyxFQUFFbkIsY0FBYztrQ0FBRSxhQUFXOzs7Ozs2QkFBUzs7Ozs7O3FCQUUvQzs7Ozs7O2FBRUosQ0FDVDtBQUNMLENBQUM7R0FwQ0tKLE9BQU87O1FBQ3VCSCxrREFBYzs7O0FBRDVDRyxLQUFBQSxPQUFPO0FBc0NiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdC5qcz9kYWI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBjYXJ0U3RhdGUgfSBmcm9tIFwiLi4vYXRvbXMvY2FydFN0YXRlXCJcclxuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcblxyXG5jb25zdCBQcm9kdWN0ID0gKHsgcHJvZHVjdCB9KSA9PiB7XHJcbiAgICBjb25zdCBbY2FydEl0ZW0sIHNldENhcnRJdGVtXSA9IHVzZVJlY29pbFN0YXRlKGNhcnRTdGF0ZSlcclxuXHJcbiAgICBjb25zdCBhZGRJdGVtc1RvQ2FydCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoY2FydEl0ZW0uZmluZEluZGV4KHBybyA9PiBwcm8uaWQgPT09IHByb2R1Y3QuaWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICBzZXRDYXJ0SXRlbShwcmV2U3RhdGUgPT4gWy4uLnByZXZTdGF0ZSwgcHJvZHVjdF0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q2FydEl0ZW0ocHJldlN0YXRlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGUubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9IDogaXRlbVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRvYXN0KGAke3Byb2R1Y3QubmFtZX0gYWRkZWQgdG8gY2FydGApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLVsjZmZmXSBwdC00IHBiLTEwIHNoYWRvdy0yeGwnPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbXgtYXV0byB3LVsxNTBweF0gaC1bMzAwcHhdIG9iamVjdC1jb250YWluJyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC02IHB4LTgnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LVsxNnB4XSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1Pntwcm9kdWN0LnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1PiR7cHJvZHVjdC5wcmljZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYmctcmVkLTYwMCB0ZXh0LXdoaXRlIHB5LTQgcHgtMTIgbXQtNCBibG9jayBob3ZlcjpiZy1ibHVlLTUwMCBtZDpiZy1ncmVlbi01MDAnXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkSXRlbXNUb0NhcnR9PkFkZCBUbyBDYXJ0PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3QiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWNvaWxTdGF0ZSIsImNhcnRTdGF0ZSIsInRvYXN0IiwiUHJvZHVjdCIsInByb2R1Y3QiLCJjYXJ0SXRlbSIsInNldENhcnRJdGVtIiwiYWRkSXRlbXNUb0NhcnQiLCJmaW5kSW5kZXgiLCJwcm8iLCJpZCIsInByZXZTdGF0ZSIsIm1hcCIsIml0ZW0iLCJxdWFudGl0eSIsIm5hbWUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsImg1IiwidGl0bGUiLCJwcmljZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Product.js\n"));

/***/ })

});