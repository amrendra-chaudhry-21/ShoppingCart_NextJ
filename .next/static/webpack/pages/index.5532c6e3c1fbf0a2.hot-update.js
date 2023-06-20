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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_cartState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/cartState */ \"./atoms/cartState.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Product = function(param) {\n    var product = param.product;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_cartState__WEBPACK_IMPORTED_MODULE_3__.cartState), 2), cartItem = ref[0], setCartItem = ref[1];\n    var addItemsToCart = function() {\n        if (cartItem.findIndex(function(pro) {\n            return pro.id === product.id;\n        }) === -1) {\n            setCartItem(function(prevState) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(prevState).concat([\n                    product\n                ]);\n            });\n        } else {\n            setCartItem(function(prevState) {\n                return prevState.map(function(item) {\n                    return item.id === product.id ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, item), {\n                        quantity: item.quantity + 1\n                    }) : item;\n                });\n            });\n        }\n        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"\".concat(product.name, \" added to cart\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n        class: \"px-40 py-20 bg-amber-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            class: \"w-72 bg-white drop-shadow-md rounded-lg\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    class: \"object-cover rounded-tl-lg rounded-tr-lg\",\n                    src: product.image\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"px-5 py-3 space-y-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            class: \"text-lg\",\n                            children: \"Super Computer 9064GB RAM\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"space-x-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500\",\n                                    children: \"Free Ship\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"px-3 py-0.5 border border-blue-500 text-[11px] text-blue-500\",\n                                    children: \"7 Day Return\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            class: \"space-x-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"text-2xl font-semibold\",\n                                    children: \"$600\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"text-sm line-through text-gray-500\",\n                                    children: \"$1000\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    class: \"text-sm text-red-700\",\n                                    children: \"40% off\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            class: \"flex justify-between items-center pt-3 pb-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    class: \"px-4 py-2 bg-red-600 hover:bg-amber-600 text-center text-sm text-white rounded duration-300\",\n                                    onClick: addItemsToCart,\n                                    children: \"Add to Cart\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    title: \"Add to Favorites\",\n                                    class: \"text-2xl text-gray-300 hover:text-red-500 duration-300\",\n                                    children: \"♥\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(Product, \"fswGI2PVCs0atLGTPTLJ6oWuN5M=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxrQkFBa0I7b0NBQ3hCWCxLQUFLLEVBQUMsd0RBQXdEOzhDQUMvRCxHQUVEOzs7Ozt5Q0FBSTs7Ozs7O2lDQUNBOzs7Ozs7eUJBQ0Y7Ozs7OztpQkFDRjs7Ozs7YUFDRCxDQWtCUDtBQUNKLENBQUM7R0EvRUtkLE9BQU87O1FBQ3FCSCxrREFBYzs7O0FBRDFDRyxLQUFBQSxPQUFPO0FBaUZiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9kdWN0LmpzP2RhYjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcclxuaW1wb3J0IHsgY2FydFN0YXRlIH0gZnJvbSBcIi4uL2F0b21zL2NhcnRTdGF0ZVwiO1xyXG5pbXBvcnQgdG9hc3QgZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5cclxuY29uc3QgUHJvZHVjdCA9ICh7IHByb2R1Y3QgfSkgPT4ge1xyXG4gIGNvbnN0IFtjYXJ0SXRlbSwgc2V0Q2FydEl0ZW1dID0gdXNlUmVjb2lsU3RhdGUoY2FydFN0YXRlKTtcclxuXHJcbiAgY29uc3QgYWRkSXRlbXNUb0NhcnQgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2FydEl0ZW0uZmluZEluZGV4KChwcm8pID0+IHByby5pZCA9PT0gcHJvZHVjdC5pZCkgPT09IC0xKSB7XHJcbiAgICAgIHNldENhcnRJdGVtKChwcmV2U3RhdGUpID0+IFsuLi5wcmV2U3RhdGUsIHByb2R1Y3RdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldENhcnRJdGVtKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJldlN0YXRlLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IHByb2R1Y3QuaWRcclxuICAgICAgICAgICAgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9XHJcbiAgICAgICAgICAgIDogaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9hc3QoYCR7cHJvZHVjdC5uYW1lfSBhZGRlZCB0byBjYXJ0YCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICA8Ym9keSBjbGFzcz1cInB4LTQwIHB5LTIwIGJnLWFtYmVyLTEwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidy03MiBiZy13aGl0ZSBkcm9wLXNoYWRvdy1tZCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgY2xhc3M9XCJvYmplY3QtY292ZXIgcm91bmRlZC10bC1sZyByb3VuZGVkLXRyLWxnXCJcclxuICAgICAgICAgIHNyYz17cHJvZHVjdC5pbWFnZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJweC01IHB5LTMgc3BhY2UteS0yXCI+XHJcbiAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWxnXCI+U3VwZXIgQ29tcHV0ZXIgOTA2NEdCIFJBTTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteC0yXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHgtMyBweS0wLjUgYm9yZGVyIGJvcmRlci1ibHVlLTUwMCB0ZXh0LVsxMXB4XSB0ZXh0LWJsdWUtNTAwXCI+XHJcbiAgICAgICAgICAgICAgRnJlZSBTaGlwXHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJweC0zIHB5LTAuNSBib3JkZXIgYm9yZGVyLWJsdWUtNTAwIHRleHQtWzExcHhdIHRleHQtYmx1ZS01MDBcIj5cclxuICAgICAgICAgICAgICA3IERheSBSZXR1cm5cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInNwYWNlLXgtMlwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGRcIj4kNjAwPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc20gbGluZS10aHJvdWdoIHRleHQtZ3JheS01MDBcIj4kMTAwMDwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXNtIHRleHQtcmVkLTcwMFwiPjQwJSBvZmY8L3NwYW4+XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB0LTMgcGItMlwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBjbGFzcz1cInB4LTQgcHktMiBiZy1yZWQtNjAwIGhvdmVyOmJnLWFtYmVyLTYwMCB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtd2hpdGUgcm91bmRlZCBkdXJhdGlvbi0zMDBcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZEl0ZW1zVG9DYXJ0fT5cclxuICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICB0aXRsZT1cIkFkZCB0byBGYXZvcml0ZXNcIlxyXG4gICAgICAgICAgICAgIGNsYXNzPVwidGV4dC0yeGwgdGV4dC1ncmF5LTMwMCBob3Zlcjp0ZXh0LXJlZC01MDAgZHVyYXRpb24tMzAwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICZoZWFydHM7XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvYm9keT5cclxuXHJcbiAgICAvLyA8ZGl2IGNsYXNzTmFtZT0nYmctWyNmZmZdIHB0LTQgcGItMTAgc2hhZG93LTJ4bCc+XHJcbiAgICAvLyAgICAgPGltZyBjbGFzc05hbWU9J214LWF1dG8gdy1bMTUwcHhdIGgtWzMwMHB4XSBvYmplY3QtY29udGFpbicgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgLy8gICAgIDxkaXYgY2xhc3NOYW1lPSdtdC02IHB4LTgnPlxyXG4gICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtWzE2cHhdJz5cclxuICAgIC8vICAgICAgICAgICAgIDxoNT57cHJvZHVjdC50aXRsZX08L2g1PlxyXG4gICAgLy8gICAgICAgICAgICAgPGg1PiR7cHJvZHVjdC5wcmljZX08L2g1PlxyXG5cclxuICAgIC8vICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgLy8gICAgICAgICA8YnV0dG9uXHJcbiAgICAvLyAgICAgICAgICAgICBjbGFzc05hbWU9J2JnLXJlZC02MDAgdGV4dC13aGl0ZSBweS00IHB4LTEyIG10LTQgYmxvY2sgbXgtYXV0byBob3ZlcjpiZy1ibHVlLTUwMCBtZDpiZy1ncmVlbi01MDAnXHJcbiAgICAvLyAgICAgICAgICAgICBvbkNsaWNrPXthZGRJdGVtc1RvQ2FydH0+QWRkIFRvIENhcnQ8L2J1dHRvbj5cclxuXHJcbiAgICAvLyAgICAgPC9kaXY+XHJcblxyXG4gICAgLy8gPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlY29pbFN0YXRlIiwiY2FydFN0YXRlIiwidG9hc3QiLCJQcm9kdWN0IiwicHJvZHVjdCIsImNhcnRJdGVtIiwic2V0Q2FydEl0ZW0iLCJhZGRJdGVtc1RvQ2FydCIsImZpbmRJbmRleCIsInBybyIsImlkIiwicHJldlN0YXRlIiwibWFwIiwiaXRlbSIsInF1YW50aXR5IiwibmFtZSIsImJvZHkiLCJjbGFzcyIsImRpdiIsImltZyIsInNyYyIsImltYWdlIiwiaDMiLCJzcGFuIiwicCIsImEiLCJocmVmIiwib25DbGljayIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Product.js\n"));

/***/ })

});