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
exports.id = "pages/Instructor";
exports.ids = ["pages/Instructor"];
exports.modules = {

/***/ "./src/pages/Instructor.js":
/*!*********************************!*\
  !*** ./src/pages/Instructor.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tachyons */ \"./node_modules/tachyons/css/tachyons.css\");\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! geolocation */ \"geolocation\");\n/* harmony import */ var geolocation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(geolocation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qrcode.react */ \"qrcode.react\");\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction Instructor() {\n    const qrCodeValue = \"h1\";\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleLocationClick = ()=>{\n        geolocation__WEBPACK_IMPORTED_MODULE_3___default().getCurrentPosition((error, position)=>{\n            if (error) {\n                console.error(\"Error getting location:\", error);\n            } else {\n                const { latitude , longitude  } = position.coords;\n                setLocation({\n                    latitude,\n                    longitude\n                });\n                alert(`${position.coords.latitude} ${position.coords.longitude}`);\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pa2 center w-100 mt1 shadow-1 bg-transparent\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"shadow-1 pa2 mt4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"tc white\",\n                        children: \" Courses \"\n                    }, void 0, false, {\n                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll-x w-100 center scroll-y Icourse fit-content pa2 shadow-1 ma3 flex flex-row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((qrcode_react__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    value: qrCodeValue,\n                                    className: \"center\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"CSC 101\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Intro to computer science\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleLocationClick,\n                                    className: \"grow pa2 shadow-1 mt1\",\n                                    children: \"Get Location\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                        lineNumber: 27,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                lineNumber: 25,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Instructor);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSW5zdHJ1Y3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0I7QUFDc0I7QUFDRjtBQUNKO0FBRWxDLFNBQVNJLGFBQWE7SUFDbEIsTUFBTUMsY0FBYztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsSUFBSTtJQUU3QyxNQUFNTyxzQkFBc0IsSUFBTTtRQUM5Qk4scUVBQThCLENBQUMsQ0FBQ1EsT0FBT0MsV0FBYTtZQUNoRCxJQUFJRCxPQUFPO2dCQUNQRSxRQUFRRixLQUFLLENBQUMsMkJBQTJCQTtZQUM3QyxPQUFPO2dCQUNILE1BQU0sRUFBRUcsU0FBUSxFQUFFQyxVQUFTLEVBQUUsR0FBR0gsU0FBU0ksTUFBTTtnQkFDL0NSLFlBQVk7b0JBQUVNO29CQUFVQztnQkFBVTtnQkFDbENFLE1BQU0sQ0FBQyxFQUFFTCxTQUFTSSxNQUFNLENBQUNGLFFBQVEsQ0FBQyxDQUFDLEVBQUVGLFNBQVNJLE1BQU0sQ0FBQ0QsU0FBUyxDQUFDLENBQUM7WUFDcEUsQ0FBQztRQUNMO0lBQ0o7SUFFQSxxQkFDSTtrQkFDSSw0RUFBQ0c7WUFBSUMsV0FBVTtzQkFDWCw0RUFBQ0M7Z0JBQVFELFdBQVU7O2tDQUNmLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBVzs7Ozs7O2tDQUN6Qiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1gsNEVBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ2YscURBQU1BO29DQUFDa0IsT0FBT2hCO29DQUFhYSxXQUFVOzs7Ozs7OENBQ3RDLDhEQUFDSTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQzs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDQztvQ0FBT0MsU0FBU2pCO29DQUFxQlUsV0FBVTs4Q0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3BHO0FBRUEsaUVBQWVkLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0Ly4vc3JjL3BhZ2VzL0luc3RydWN0b3IuanM/OTZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0YWNoeW9uc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdlb2xvY2F0aW9uIGZyb20gJ2dlb2xvY2F0aW9uJztcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0JztcblxuZnVuY3Rpb24gSW5zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBxckNvZGVWYWx1ZSA9ICdoMSc7XG4gICAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IGhhbmRsZUxvY2F0aW9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoZXJyb3IsIHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGxvY2F0aW9uOicsIGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBwb3NpdGlvbi5jb29yZHM7XG4gICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0pO1xuICAgICAgICAgICAgICAgIGFsZXJ0KGAke3Bvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZX0gJHtwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGEyIGNlbnRlciB3LTEwMCBtdDEgc2hhZG93LTEgYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaGFkb3ctMSBwYTIgbXQ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0YyB3aGl0ZVwiPiBDb3Vyc2VzIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXggdy0xMDAgY2VudGVyIHNjcm9sbC15IEljb3Vyc2UgZml0LWNvbnRlbnQgcGEyIHNoYWRvdy0xIG1hMyBmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhMyBtYTIgYmctbGlnaHQtZ3JheSBmaXQtY29udGVudCBibiBiZy13aGl0ZS03MCBmbGV4IGZsZXgtY29sdW1uIHNoYWRvdy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFFSQ29kZSB2YWx1ZT17cXJDb2RlVmFsdWV9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNTQyAxMDE8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkludHJvIHRvIGNvbXB1dGVyIHNjaWVuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2NhdGlvbkNsaWNrfSBjbGFzc05hbWU9XCJncm93IHBhMiBzaGFkb3ctMSBtdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0IExvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RydWN0b3I7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImdlb2xvY2F0aW9uIiwiUVJDb2RlIiwiSW5zdHJ1Y3RvciIsInFyQ29kZVZhbHVlIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImhhbmRsZUxvY2F0aW9uQ2xpY2siLCJnZXRDdXJyZW50UG9zaXRpb24iLCJlcnJvciIsInBvc2l0aW9uIiwiY29uc29sZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY29vcmRzIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaDEiLCJ2YWx1ZSIsImgyIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Instructor.js\n");

/***/ }),

/***/ "./node_modules/tachyons/css/tachyons.css":
/*!************************************************!*\
  !*** ./node_modules/tachyons/css/tachyons.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "geolocation":
/*!******************************!*\
  !*** external "geolocation" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("geolocation");

/***/ }),

/***/ "qrcode.react":
/*!*******************************!*\
  !*** external "qrcode.react" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("qrcode.react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/Instructor.js"));
module.exports = __webpack_exports__;

})();