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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"./node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms_cartState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms/cartState */ \"./atoms/cartState.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Product = function(param) {\n    var product = param.product;\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_atoms_cartState__WEBPACK_IMPORTED_MODULE_3__.cartState), 2), cartItem = ref[0], setCartItem = ref[1];\n    var addItemsToCart = function() {\n        if (cartItem.findIndex(function(pro) {\n            return pro.id === product.id;\n        }) === -1) {\n            setCartItem(function(prevState) {\n                return (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(prevState).concat([\n                    product\n                ]);\n            });\n        } else {\n            setCartItem(function(prevState) {\n                return prevState.map(function(item) {\n                    return item.id === product.id ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, item), {\n                        quantity: item.quantity + 1\n                    }) : item;\n                });\n            });\n        }\n        (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(\"\".concat(product.name, \" added to cart\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gray-200 rounded-lg\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: product.image,\n                alt: \"\",\n                className: \"rounded-t-lg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                lineNumber: 29,\n                columnNumber: 15\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-bold mt-5\",\n                            children: product.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                            lineNumber: 32,\n                            columnNumber: 19\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: product.category\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                            lineNumber: 33,\n                            columnNumber: 19\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                lineNumber: 30,\n                columnNumber: 15\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-2 px-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        className: \"bg-green-500 rounded-full px-2 text-white tracking-widest mr-3\",\n                        children: \"fdgfd\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                        className: \"bg-green-500 rounded-full px-2 text-white tracking-widest mr-3\",\n                        children: \"gfg\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                lineNumber: 40,\n                columnNumber: 15\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-2xl px-5 pb-6\",\n                children: \"$ 213\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n                lineNumber: 48,\n                columnNumber: 15\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC\\\\Downloads\\\\shopping-cart-main\\\\shopping-cart-main\\\\components\\\\Product.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, _this);\n};\n_s(Product, \"fswGI2PVCs0atLGTPTLJ6oWuN5M=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Byb2R1Y3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUFBeUI7QUFDZTtBQUNNO0FBQ1Y7QUFFcEMsSUFBTUksT0FBTyxHQUFHLGdCQUFpQjtRQUFkQyxPQUFPLFNBQVBBLE9BQU87O0lBRXRCLElBQWdDSixHQUF5QixvRkFBekJBLHNEQUFjLENBQUNDLHVEQUFTLENBQUMsTUFBbERJLFFBQVEsR0FBaUJMLEdBQXlCLEdBQTFDLEVBQUVNLFdBQVcsR0FBSU4sR0FBeUIsR0FBN0I7SUFFNUIsSUFBTU8sY0FBYyxHQUFHLFdBQU07UUFFekIsSUFBSUYsUUFBUSxDQUFDRyxTQUFTLENBQUNDLFNBQUFBLEdBQUc7bUJBQUlBLEdBQUcsQ0FBQ0MsRUFBRSxLQUFLTixPQUFPLENBQUNNLEVBQUU7U0FBQSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDekRKLFdBQVcsQ0FBQ0ssU0FBQUEsU0FBUzt1QkFBSSxxRkFBSUEsU0FBUyxDQUFUQSxRQUFKO29CQUFlUCxPQUFPO2lCQUFDO2FBQUEsQ0FBQztRQUNyRCxPQUFPO1lBQ0hFLFdBQVcsQ0FBQ0ssU0FBQUEsU0FBUyxFQUFJO2dCQUNyQixPQUFPQSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUs7b0JBQzNCLE9BQU9BLElBQUksQ0FBQ0gsRUFBRSxLQUFLTixPQUFPLENBQUNNLEVBQUUsR0FBRyx3S0FBS0csSUFBSTt3QkFBRUMsUUFBUSxFQUFFRCxJQUFJLENBQUNDLFFBQVEsR0FBRyxDQUFDO3NCQUFFLEdBQUdELElBQUk7Z0JBQ25GLENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQztRQUNOLENBQUM7UUFFRFgsMkRBQUssQ0FBQyxFQUFDLENBQWUsTUFBYyxDQUEzQkUsT0FBTyxDQUFDVyxJQUFJLEVBQUMsZ0JBQWMsQ0FBQyxDQUFDO0lBRTFDLENBQUM7SUFFRCxxQkFFSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzswQkFDakMsOERBQUNDLEtBQUc7Z0JBQUNDLEdBQUcsRUFBRWYsT0FBTyxDQUFDZ0IsS0FBSztnQkFBRUMsR0FBRyxFQUFDLEVBQUU7Z0JBQUNKLFNBQVMsRUFBQyxjQUFjOzs7OztxQkFBRzswQkFDM0QsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxtQ0FBbUM7MEJBQ2hELDRFQUFDRCxLQUFHO29CQUFDQyxTQUFTLEVBQUMsTUFBTTs7c0NBQ25CLDhEQUFDSyxJQUFFOzRCQUFDTCxTQUFTLEVBQUMsZ0JBQWdCO3NDQUFFYixPQUFPLENBQUNtQixLQUFLOzs7OztpQ0FBTTtzQ0FDbkQsOERBQUNDLEdBQUM7c0NBQUVwQixPQUFPLENBQUNxQixRQUFROzs7OztpQ0FBSzs7Ozs7O3lCQUNyQjs7Ozs7cUJBS0Y7MEJBQ04sOERBQUNULEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxXQUFXOztrQ0FDeEIsOERBQUNTLE9BQUs7d0JBQUNULFNBQVMsRUFBQyxnRUFBaUU7a0NBQUMsT0FFbkY7Ozs7OzZCQUFRO2tDQUNSLDhEQUFDUyxPQUFLO3dCQUFDVCxTQUFTLEVBQUMsZ0VBQWlFO2tDQUFDLEtBRW5GOzs7Ozs2QkFBUTs7Ozs7O3FCQUNKOzBCQUNOLDhEQUFDTyxHQUFDO2dCQUFDUCxTQUFTLEVBQUMsb0JBQW9COzBCQUFDLE9BQUs7Ozs7O3FCQUFJOzs7Ozs7YUFDdkMsQ0FxQmI7QUFDTCxDQUFDO0dBakVLZCxPQUFPOztRQUV1Qkgsa0RBQWM7OztBQUY1Q0csS0FBQUEsT0FBTztBQW1FYiwrREFBZUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Byb2R1Y3QuanM/ZGFiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSAncmVjb2lsJztcclxuaW1wb3J0IHsgY2FydFN0YXRlIH0gZnJvbSBcIi4uL2F0b21zL2NhcnRTdGF0ZVwiXHJcbmltcG9ydCB0b2FzdCBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xyXG5cclxuY29uc3QgUHJvZHVjdCA9ICh7IHByb2R1Y3QgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtjYXJ0SXRlbSwgc2V0Q2FydEl0ZW1dID0gdXNlUmVjb2lsU3RhdGUoY2FydFN0YXRlKVxyXG5cclxuICAgIGNvbnN0IGFkZEl0ZW1zVG9DYXJ0ID0gKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoY2FydEl0ZW0uZmluZEluZGV4KHBybyA9PiBwcm8uaWQgPT09IHByb2R1Y3QuaWQpID09PSAtMSkge1xyXG4gICAgICAgICAgICBzZXRDYXJ0SXRlbShwcmV2U3RhdGUgPT4gWy4uLnByZXZTdGF0ZSwgcHJvZHVjdF0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0Q2FydEl0ZW0ocHJldlN0YXRlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGUubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQgPyB7IC4uLml0ZW0sIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5ICsgMSB9IDogaXRlbVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRvYXN0KGAke3Byb2R1Y3QubmFtZX0gYWRkZWQgdG8gY2FydGApXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTIwMCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9e3Byb2R1Y3QuaW1hZ2V9IGFsdD1cIlwiIGNsYXNzTmFtZT1cInJvdW5kZWQtdC1sZ1wiIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNVwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG10LTVcIj57cHJvZHVjdC50aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8cD57cHJvZHVjdC5jYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJweC01XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCc0hlYXJ0IHRpdGxlPVwiQWRkIHRvIFdpc2hsaXN0XCIgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMiBweC01XCI+XHJcbiAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwICByb3VuZGVkLWZ1bGwgcHgtMiB0ZXh0LXdoaXRlIHRyYWNraW5nLXdpZGVzdCBtci0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIGZkZ2ZkXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCAgcm91bmRlZC1mdWxsIHB4LTIgdGV4dC13aGl0ZSB0cmFja2luZy13aWRlc3QgbXItM1wiPlxyXG4gICAgICAgICAgICAgICAgICBnZmdcclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0yeGwgcHgtNSBwYi02XCI+JCAyMTM8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAvLyA8ZGl2IGNsYXNzTmFtZT0nYmctWyNmZmZdIHB0LTYgcGItNCBzaGFkb3ctMnhsJz5cclxuICAgICAgICAvLyAgICAgPGltZyBjbGFzc05hbWU9J214LWF1dG8gdy1bMTUwcHhdIGgtWzI1MHB4XSBvYmplY3QtY29udGFpbicgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgIC8vICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCBweC02Jz5cclxuICAgICAgICAvLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gdGV4dC1bMjZweF0nPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxoMT57cHJvZHVjdC5uYW1lfTwvaDE+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPGgzPiR7cHJvZHVjdC5wcmljZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHRleHQtWzI2cHhdJz5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgICAgICA8aDM+JHtwcm9kdWN0LnJhdGluZy5yYXRlfTwvaDM+XHJcbiAgICAgICAgLy8gICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgLy8gICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY2xhc3NOYW1lPSdiZy1yZWQtNjAwIHRleHQtd2hpdGUgcHktNCBweC0xMiBtdC00IGJsb2NrIG14LWF1dG8gaG92ZXI6YmctcmVkLTgwMCdcclxuICAgICAgICAvLyAgICAgICAgICAgICBvbkNsaWNrPXthZGRJdGVtc1RvQ2FydH0+QWRkIFRvIENhcnQ8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgLy8gICAgIDwvZGl2PlxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVjb2lsU3RhdGUiLCJjYXJ0U3RhdGUiLCJ0b2FzdCIsIlByb2R1Y3QiLCJwcm9kdWN0IiwiY2FydEl0ZW0iLCJzZXRDYXJ0SXRlbSIsImFkZEl0ZW1zVG9DYXJ0IiwiZmluZEluZGV4IiwicHJvIiwiaWQiLCJwcmV2U3RhdGUiLCJtYXAiLCJpdGVtIiwicXVhbnRpdHkiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJoMiIsInRpdGxlIiwicCIsImNhdGVnb3J5Iiwic21hbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Product.js\n"));

/***/ })

});