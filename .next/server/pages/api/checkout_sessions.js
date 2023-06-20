"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/checkout_sessions";
exports.ids = ["pages/api/checkout_sessions"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/checkout_sessions.js":
/*!****************************************!*\
  !*** ./pages/api/checkout_sessions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const items = req.body.cartItem;\n        const transformedItems = items.map((item)=>({\n                price_data: {\n                    currency: \"usd\",\n                    product_data: {\n                        name: item.name,\n                        images: [\n                            req.headers.origin + item.image\n                        ]\n                    },\n                    unit_amount: item.price * 100\n                },\n                quantity: item.quantity\n            }));\n        try {\n            // Create Checkout Sessions from body params.\n            const session = await stripe.checkout.sessions.create({\n                line_items: transformedItems,\n                mode: \"payment\",\n                success_url: `${req.headers.origin}/success`,\n                cancel_url: `${req.headers.origin}/`\n            });\n            res.json({\n                \"sessionURL\": session.url\n            });\n        } catch (err) {\n            console.log(err);\n            res.status(err.statusCode || 500).json(err.message);\n        }\n    } else {\n        res.setHeader(\"Allow\", \"POST\");\n        res.status(405).end(\"Method Not Allowed\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY2hlY2tvdXRfc2Vzc2lvbnMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBUSxDQUFDLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxpQkFBaUIsQ0FBQztBQUVoRCxlQUFlQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUV6QixNQUFNQyxLQUFLLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSSxDQUFDQyxRQUFRO1FBRTNCLE1BQU1DLGdCQUFnQixHQUFHSCxLQUFLLENBQUNJLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLEdBQU07Z0JBQzFDQyxVQUFVLEVBQUU7b0JBQ1JDLFFBQVEsRUFBRSxLQUFLO29CQUNmQyxZQUFZLEVBQUU7d0JBQ1ZDLElBQUksRUFBRUosSUFBSSxDQUFDSSxJQUFJO3dCQUNmQyxNQUFNLEVBQUU7NEJBQUNiLEdBQUcsQ0FBQ2MsT0FBTyxDQUFDQyxNQUFNLEdBQUNQLElBQUksQ0FBQ1EsS0FBSzt5QkFBQztxQkFDMUM7b0JBQ0RDLFdBQVcsRUFBRVQsSUFBSSxDQUFDVSxLQUFLLEdBQUcsR0FBRztpQkFDaEM7Z0JBQ0RDLFFBQVEsRUFBRVgsSUFBSSxDQUFDVyxRQUFRO2FBQzFCLEVBQUU7UUFFUCxJQUFJO1lBQ0YsNkNBQTZDO1lBQzdDLE1BQU1DLE9BQU8sR0FBRyxNQUFNMUIsTUFBTSxDQUFDMkIsUUFBUSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztnQkFDcERDLFVBQVUsRUFBRWxCLGdCQUFnQjtnQkFDNUJtQixJQUFJLEVBQUUsU0FBUztnQkFDZkMsV0FBVyxFQUFFLENBQUMsRUFBRTFCLEdBQUcsQ0FBQ2MsT0FBTyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFDO2dCQUM1Q1ksVUFBVSxFQUFFLENBQUMsRUFBRTNCLEdBQUcsQ0FBQ2MsT0FBTyxDQUFDQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2FBQ3JDLENBQUM7WUFDRmQsR0FBRyxDQUFDMkIsSUFBSSxDQUFDO2dCQUFDLFlBQVksRUFBRVIsT0FBTyxDQUFDUyxHQUFHO2FBQUMsQ0FBQyxDQUFDO1FBQ3hDLEVBQUUsT0FBT0MsR0FBRyxFQUFFO1lBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixHQUFHLENBQUMsQ0FBQztZQUNqQjdCLEdBQUcsQ0FBQ2dDLE1BQU0sQ0FBQ0gsR0FBRyxDQUFDSSxVQUFVLElBQUksR0FBRyxDQUFDLENBQUNOLElBQUksQ0FBQ0UsR0FBRyxDQUFDSyxPQUFPLENBQUMsQ0FBQztRQUN0RCxDQUFDO0lBQ0gsT0FBTztRQUNMbEMsR0FBRyxDQUFDbUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQm5DLEdBQUcsQ0FBQ2dDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDNUMsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaG9wcGluZy1jYXJ0Ly4vcGFnZXMvYXBpL2NoZWNrb3V0X3Nlc3Npb25zLmpzPzA3OWEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RyaXBlID0gcmVxdWlyZSgnc3RyaXBlJykocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IHJlcS5ib2R5LmNhcnRJdGVtXHJcblxyXG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkSXRlbXMgPSBpdGVtcy5tYXAoKGl0ZW0pID0+ICh7XHJcbiAgICAgICAgICAgIHByaWNlX2RhdGE6IHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbmN5OiBcInVzZFwiLFxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdF9kYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlczogW3JlcS5oZWFkZXJzLm9yaWdpbitpdGVtLmltYWdlXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB1bml0X2Ftb3VudDogaXRlbS5wcmljZSAqIDEwMCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcXVhbnRpdHk6IGl0ZW0ucXVhbnRpdHksXHJcbiAgICAgICAgfSkpXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gQ3JlYXRlIENoZWNrb3V0IFNlc3Npb25zIGZyb20gYm9keSBwYXJhbXMuXHJcbiAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcclxuICAgICAgICBsaW5lX2l0ZW1zOiB0cmFuc2Zvcm1lZEl0ZW1zLFxyXG4gICAgICAgIG1vZGU6ICdwYXltZW50JyxcclxuICAgICAgICBzdWNjZXNzX3VybDogYCR7cmVxLmhlYWRlcnMub3JpZ2lufS9zdWNjZXNzYCxcclxuICAgICAgICBjYW5jZWxfdXJsOiBgJHtyZXEuaGVhZGVycy5vcmlnaW59L2AsXHJcbiAgICAgIH0pO1xyXG4gICAgICByZXMuanNvbih7XCJzZXNzaW9uVVJMXCI6IHNlc3Npb24udXJsfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzQ29kZSB8fCA1MDApLmpzb24oZXJyLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJyk7XHJcbiAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2QgTm90IEFsbG93ZWQnKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsic3RyaXBlIiwicmVxdWlyZSIsInByb2Nlc3MiLCJlbnYiLCJTVFJJUEVfU0VDUkVUX0tFWSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJpdGVtcyIsImJvZHkiLCJjYXJ0SXRlbSIsInRyYW5zZm9ybWVkSXRlbXMiLCJtYXAiLCJpdGVtIiwicHJpY2VfZGF0YSIsImN1cnJlbmN5IiwicHJvZHVjdF9kYXRhIiwibmFtZSIsImltYWdlcyIsImhlYWRlcnMiLCJvcmlnaW4iLCJpbWFnZSIsInVuaXRfYW1vdW50IiwicHJpY2UiLCJxdWFudGl0eSIsInNlc3Npb24iLCJjaGVja291dCIsInNlc3Npb25zIiwiY3JlYXRlIiwibGluZV9pdGVtcyIsIm1vZGUiLCJzdWNjZXNzX3VybCIsImNhbmNlbF91cmwiLCJqc29uIiwidXJsIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInN0YXR1c0NvZGUiLCJtZXNzYWdlIiwic2V0SGVhZGVyIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/checkout_sessions.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/checkout_sessions.js"));
module.exports = __webpack_exports__;

})();