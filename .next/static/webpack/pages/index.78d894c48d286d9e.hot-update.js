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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_cartState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/cartState */ \"./atoms/cartState.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Product = function(param) {\n    var product = param.product;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_cartState__WEBPACK_IMPORTED_MODULE_3__.cartState), 2), cartItem = ref[0], setCartItem = ref[1];\n    var addItemsToCart = function() {\n        if (cartItem.findIndex(function(pro) {\n            return pro.id === product.id;\n        }) === -1) {\n            setCartItem(function(prevState) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(prevState).concat([\n                    product\n                ]);\n            });\n        } else {\n            setCartItem(function(prevState) {\n                return prevState.map(function(item) {\n                    return item.id === product.id ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, item), {\n                        quantity: item.quantity + 1\n                    }) : item;\n                });\n            });\n        }\n        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"\".concat(product.name, \" added to cart\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-[#fff] pt-6 pb-4 shadow-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"mx-auto w-[150px] h-[150px] object-contain\",\n                src: product.image,\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-between text-[26px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: product.title\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                                lineNumber: 33,\n                                columnNumber: 21\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: [\n                                    \"$\",\n                                    product.price\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"bg-red-600 text-white py-4 px-12 mt-4 block mx-auto hover:bg-red-800\",\n                        onClick: addItemsToCart,\n                        children: \"Add To Cart\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, _this);\n};\n_s(Product, \"fswGI2PVCs0atLGTPTLJ6oWuN5M=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFBeUI7QUFDZTtBQUNNO0FBQ1Y7QUFFcEMsSUFBTUksT0FBTyxHQUFHLGdCQUFpQjtRQUFkQyxPQUFPLFNBQVBBLE9BQU87O0lBRXRCLElBQWdDSixHQUF5QixvRkFBekJBLHNEQUFjLENBQUNDLHVEQUFTLENBQUMsTUFBbERJLFFBQVEsR0FBaUJMLEdBQXlCLEdBQTFDLEVBQUVNLFdBQVcsR0FBSU4sR0FBeUIsR0FBN0I7SUFFNUIsSUFBTU8sY0FBYyxHQUFHLFdBQU07UUFFekIsSUFBSUYsUUFBUSxDQUFDRyxTQUFTLENBQUNDLFNBQUFBLEdBQUc7bUJBQUlBLEdBQUcsQ0FBQ0MsRUFBRSxLQUFLTixPQUFPLENBQUNNLEVBQUU7U0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekRKLFdBQVcsQ0FBQ0ssU0FBQUEsU0FBUzt1QkFBSSxxRkFBSUEsU0FBUyxDQUFUQSxRQUFKO29CQUFlUCxPQUFPO2lCQUFDO2FBQUEsQ0FBQztRQUNyRCxPQUFPO1lBQ0hFLFdBQVcsQ0FBQ0ssU0FBQUEsU0FBUyxFQUFJO2dCQUNyQixPQUFPQSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7b0JBQzNCLE9BQU9BLElBQUksQ0FBQ0gsRUFBRSxLQUFLTixPQUFPLENBQUNNLEVBQUUsR0FBRyx3S0FBS0csSUFBSTt3QkFBRUMsUUFBUSxFQUFFRCxJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDO3NCQUFFLEdBQUdELElBQUk7Z0JBQ25GLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQztRQUNOLENBQUM7UUFFRFgsMkRBQUssQ0FBQyxFQUFDLENBQWUsTUFBYyxDQUEzQkUsT0FBTyxDQUFDVyxJQUFJLEVBQUMsZ0JBQWMsQ0FBQyxDQUFDO0lBRTFDLENBQUM7SUFFRCxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsZ0NBQWdDOzswQkFFM0MsOERBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyw0Q0FBNEM7Z0JBQUNFLEdBQUcsRUFBRWYsT0FBTyxDQUFDZ0IsS0FBSztnQkFBRUMsR0FBRyxFQUFDLEVBQUU7Ozs7O3FCQUFHOzBCQUV6Riw4REFBQ0wsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7O2tDQUN0Qiw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLCtDQUErQzs7MENBQzFELDhEQUFDSyxHQUFDOzBDQUFFbEIsT0FBTyxDQUFDbUIsS0FBSzs7Ozs7cUNBQUs7MENBQ3RCLDhEQUFDQyxJQUFFOztvQ0FBQyxHQUFDO29DQUFDcEIsT0FBTyxDQUFDcUIsS0FBSzs7Ozs7O3FDQUFNOzs7Ozs7NkJBQ3ZCO2tDQUVOLDhEQUFDQyxRQUFNO3dCQUNIVCxTQUFTLEVBQUMsc0VBQXNFO3dCQUNoRlUsT0FBTyxFQUFFcEIsY0FBYztrQ0FBRSxhQUFXOzs7Ozs2QkFBUzs7Ozs7O3FCQUUvQzs7Ozs7O2FBRUosQ0FDVDtBQUNMLENBQUM7R0F2Q0tKLE9BQU87O1FBRXVCSCxrREFBYzs7O0FBRjVDRyxLQUFBQSxPQUFPO0FBeUNiLCtEQUFlQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUHJvZHVjdC5qcz9kYWI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tICdyZWNvaWwnO1xyXG5pbXBvcnQgeyBjYXJ0U3RhdGUgfSBmcm9tIFwiLi4vYXRvbXMvY2FydFN0YXRlXCJcclxuaW1wb3J0IHRvYXN0IGZyb20gJ3JlYWN0LWhvdC10b2FzdCc7XHJcblxyXG5jb25zdCBQcm9kdWN0ID0gKHsgcHJvZHVjdCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2NhcnRJdGVtLCBzZXRDYXJ0SXRlbV0gPSB1c2VSZWNvaWxTdGF0ZShjYXJ0U3RhdGUpXHJcblxyXG4gICAgY29uc3QgYWRkSXRlbXNUb0NhcnQgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChjYXJ0SXRlbS5maW5kSW5kZXgocHJvID0+IHByby5pZCA9PT0gcHJvZHVjdC5pZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHNldENhcnRJdGVtKHByZXZTdGF0ZSA9PiBbLi4ucHJldlN0YXRlLCBwcm9kdWN0XSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRDYXJ0SXRlbShwcmV2U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZCA/IHsgLi4uaXRlbSwgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHkgKyAxIH0gOiBpdGVtXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG9hc3QoYCR7cHJvZHVjdC5uYW1lfSBhZGRlZCB0byBjYXJ0YClcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctWyNmZmZdIHB0LTYgcGItNCBzaGFkb3ctMnhsJz5cclxuXHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdteC1hdXRvIHctWzE1MHB4XSBoLVsxNTBweF0gb2JqZWN0LWNvbnRhaW4nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PVwiXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC02IHB4LTgnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiB0ZXh0LVsyNnB4XSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz4ke3Byb2R1Y3QucHJpY2V9PC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLXJlZC02MDAgdGV4dC13aGl0ZSBweS00IHB4LTEyIG10LTQgYmxvY2sgbXgtYXV0byBob3ZlcjpiZy1yZWQtODAwJ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZEl0ZW1zVG9DYXJ0fT5BZGQgVG8gQ2FydDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVjb2lsU3RhdGUiLCJjYXJ0U3RhdGUiLCJ0b2FzdCIsIlByb2R1Y3QiLCJwcm9kdWN0IiwiY2FydEl0ZW0iLCJzZXRDYXJ0SXRlbSIsImFkZEl0ZW1zVG9DYXJ0IiwiZmluZEluZGV4IiwicHJvIiwiaWQiLCJwcmV2U3RhdGUiLCJtYXAiLCJpdGVtIiwicXVhbnRpdHkiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJwIiwidGl0bGUiLCJoMyIsInByaWNlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Product.js\n"));

/***/ })

});