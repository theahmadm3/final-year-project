"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Instructor",{

/***/ "./src/pages/Instructor.js":
/*!*********************************!*\
  !*** ./src/pages/Instructor.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! geolocation */ \"./node_modules/geolocation/index.js\");\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/qrcode.react/lib/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Instructor() {\n    _s();\n    const qrCodeValue = \"h1\";\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleLocationClick = ()=>{\n        geolocation__WEBPACK_IMPORTED_MODULE_2__.getCurrentPosition((error, position)=>{\n            if (error) {\n                console.error(\"Error getting location:\", error);\n            } else {\n                const { latitude , longitude  } = position.coords;\n                setLocation({\n                    latitude,\n                    longitude\n                });\n                alert();\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pa2 center w-100 mt1 shadow-1 bg-transparent\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"shadow-1 pa2 mt4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"tc white\",\n                        children: \" Courses \"\n                    }, void 0, false, {\n                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"scroll-x w-100 center scroll-y Icourse fit-content pa2 shadow-1 ma3 flex flex-row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    value: qrCodeValue,\n                                    className: \"center\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: \"CSC 101\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Intro to computer science\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleLocationClick,\n                                    className: \"grow pa2 shadow-1 mt1\",\n                                    children: \"Get Location\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Instructor, \"oqKkKXuEMFy/klxDqCY5G3vHULI=\");\n_c = Instructor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Instructor);\nvar _c;\n$RefreshReg$(_c, \"Instructor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSW5zdHJ1Y3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0M7QUFDRjtBQUNKO0FBRWxDLFNBQVNJLGFBQWE7O0lBQ3BCLE1BQU1DLGNBQWM7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDLElBQUk7SUFFN0MsTUFBTU8sc0JBQXNCLElBQU07UUFDaENOLDJEQUE4QixDQUFDLENBQUNRLE9BQU9DLFdBQWE7WUFDbEQsSUFBSUQsT0FBTztnQkFDVEUsUUFBUUYsS0FBSyxDQUFDLDJCQUEyQkE7WUFDM0MsT0FBTztnQkFDTCxNQUFNLEVBQUVHLFNBQVEsRUFBRUMsVUFBUyxFQUFFLEdBQUdILFNBQVNJLE1BQU07Z0JBQy9DUixZQUFZO29CQUFFTTtvQkFBVUM7Z0JBQVU7Z0JBQ2xDRTtZQUNGLENBQUM7UUFDSDtJQUNGO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQUlDLFdBQVU7c0JBRWIsNEVBQUNDO2dCQUFRRCxXQUFVOztrQ0FDakIsOERBQUNFO3dCQUFHRixXQUFVO2tDQUFXOzs7Ozs7a0NBQ3pCLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDZixvREFBTUE7b0NBQUNrQixPQUFPaEI7b0NBQWFhLFdBQVU7Ozs7Ozs4Q0FDdEMsOERBQUNJOzhDQUFHOzs7Ozs7OENBQ0osOERBQUNDOzhDQUFFOzs7Ozs7OENBQ0gsOERBQUNDO29DQUFPQyxTQUFTakI7b0NBQXFCVSxXQUFVOzhDQUF3Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTdEY7R0FwQ1NkO0tBQUFBO0FBc0NULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9JbnN0cnVjdG9yLmpzPzk2ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdlb2xvY2F0aW9uIGZyb20gJ2dlb2xvY2F0aW9uJztcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0JztcblxuZnVuY3Rpb24gSW5zdHJ1Y3RvcigpIHtcbiAgY29uc3QgcXJDb2RlVmFsdWUgPSAnaDEnO1xuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUxvY2F0aW9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChlcnJvciwgcG9zaXRpb24pID0+IHtcbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGxvY2F0aW9uOicsIGVycm9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gcG9zaXRpb24uY29vcmRzO1xuICAgICAgICBzZXRMb2NhdGlvbih7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSk7XG4gICAgICAgIGFsZXJ0KClcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhMiBjZW50ZXIgdy0xMDAgbXQxIHNoYWRvdy0xIGJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgIHsvKiBSZXN0IG9mIHRoZSBjb21wb25lbnQgY29kZSAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2hhZG93LTEgcGEyIG10NFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0YyB3aGl0ZVwiPiBDb3Vyc2VzIDwvaDE+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwteCB3LTEwMCBjZW50ZXIgc2Nyb2xsLXkgSWNvdXJzZSBmaXQtY29udGVudCBwYTIgc2hhZG93LTEgbWEzIGZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGEzIG1hMiBiZy1saWdodC1ncmF5IGZpdC1jb250ZW50IGJuIGJnLXdoaXRlLTcwIGZsZXggZmxleC1jb2x1bW4gc2hhZG93LTFcIj5cbiAgICAgICAgICAgICAgPFFSQ29kZSB2YWx1ZT17cXJDb2RlVmFsdWV9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgIDxoMj5DU0MgMTAxPC9oMj5cbiAgICAgICAgICAgICAgPHA+SW50cm8gdG8gY29tcHV0ZXIgc2NpZW5jZTwvcD5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2NhdGlvbkNsaWNrfSBjbGFzc05hbWU9XCJncm93IHBhMiBzaGFkb3ctMSBtdDFcIj5cbiAgICAgICAgICAgICAgICBHZXQgTG9jYXRpb25cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluc3RydWN0b3I7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImdlb2xvY2F0aW9uIiwiUVJDb2RlIiwiSW5zdHJ1Y3RvciIsInFyQ29kZVZhbHVlIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImhhbmRsZUxvY2F0aW9uQ2xpY2siLCJnZXRDdXJyZW50UG9zaXRpb24iLCJlcnJvciIsInBvc2l0aW9uIiwiY29uc29sZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY29vcmRzIiwiYWxlcnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwiaDEiLCJ2YWx1ZSIsImgyIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Instructor.js\n"));

/***/ })

});