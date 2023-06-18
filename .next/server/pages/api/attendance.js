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
exports.id = "pages/api/attendance";
exports.ids = ["pages/api/attendance"];
exports.modules = {

/***/ "(api)/./src/pages/api/attendance.js":
/*!*************************************!*\
  !*** ./src/pages/api/attendance.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nconst attendances = [];\nfunction handler(req, res) {\n    if (req.method == \"POST\") {\n        console.log(req.body);\n        attendances.push(req.body);\n        res.status(200).json({\n            name: \"John Doe\"\n        });\n    } else if (req.method == \"GET\") {\n        res.json(attendances);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F0dGVuZGFuY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLGNBQWMsRUFBRTtBQUVQLFNBQVNDLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDLElBQUlELElBQUlFLE1BQU0sSUFBSSxRQUFRO1FBQ3hCQyxRQUFRQyxHQUFHLENBQUNKLElBQUlLLElBQUk7UUFDcEJQLFlBQVlRLElBQUksQ0FBQ04sSUFBSUssSUFBSTtRQUN6QkosSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxNQUFNO1FBQVc7SUFDMUMsT0FBTyxJQUFHVCxJQUFJRSxNQUFNLElBQUksT0FBTTtRQUM1QkQsSUFBSU8sSUFBSSxDQUFDVjtJQUNYLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL3NyYy9wYWdlcy9hcGkvYXR0ZW5kYW5jZS5qcz80YjA0Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF0dGVuZGFuY2VzID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT0gJ1BPU1QnKSB7XG4gICAgY29uc29sZS5sb2cocmVxLmJvZHkpXG4gICAgYXR0ZW5kYW5jZXMucHVzaChyZXEuYm9keSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiAnSm9obiBEb2UnIH0pO1xuICB9IGVsc2UgaWYocmVxLm1ldGhvZCA9PSAnR0VUJyl7XG4gICAgcmVzLmpzb24oYXR0ZW5kYW5jZXMpXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhdHRlbmRhbmNlcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJjb25zb2xlIiwibG9nIiwiYm9keSIsInB1c2giLCJzdGF0dXMiLCJqc29uIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/attendance.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/attendance.js"));
module.exports = __webpack_exports__;

})();