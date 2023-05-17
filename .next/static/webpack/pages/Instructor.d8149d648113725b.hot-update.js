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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tachyons */ \"./node_modules/tachyons/css/tachyons.css\");\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! geolocation */ \"./node_modules/geolocation/index.js\");\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/qrcode.react/lib/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Instructor() {\n    _s();\n    const qrCodeValue = \"h1\";\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleLocationClick = ()=>{\n        geolocation__WEBPACK_IMPORTED_MODULE_3__.getCurrentPosition((error, position)=>{\n            if (error) {\n                console.error(\"Error getting location:\", error);\n                alert(\"Error: Can't get location!\");\n            } else {\n                const { latitude , longitude  } = position.coords;\n                setLocation({\n                    latitude,\n                    longitude\n                });\n                alert(\"The coordinates are \".concat(position.coords.latitude, \" \").concat(position.coords.longitude));\n            }\n        });\n    };\n    const instructorFName = \"Yoro\";\n    const instructorLName = \"Diouf\";\n    const instructorID = 11008999;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pa2 center w-100 mt1 shadow-1 bg-transparent\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"white\",\n                    children: \" Instructor Page \"\n                }, void 0, false, {\n                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"w-100 pa1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pa5 w-40 ma2 fr bg-white-90 grow\"\n                        }, void 0, false, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white-90 grow pa2 w-50 ma2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Instructor Name:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        instructorFName,\n                                        \" \",\n                                        instructorLName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ma2 bg-white-90 grow pa2 w-50\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Instructor ID:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: instructorID\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"shadow-1 pa2 mt4 w-100\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"tc white\",\n                            children: \" Courses \"\n                        }, void 0, false, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"scroll-x w-100 center scroll-y Icourse fit-content pa2 shadow-1 ma3 flex flex-row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        value: qrCodeValue,\n                                        className: \"center gorw-large\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"CSC 101\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 47,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Intro to computer science\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 48,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleLocationClick,\n                                        className: \"grow bn pa2 shadow-1 mt1\",\n                                        children: \"Get Location\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                lineNumber: 45,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Instructor, \"oqKkKXuEMFy/klxDqCY5G3vHULI=\");\n_c = Instructor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Instructor);\nvar _c;\n$RefreshReg$(_c, \"Instructor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSW5zdHJ1Y3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrQjtBQUNzQjtBQUNGO0FBQ0o7QUFHbEMsU0FBU0ksYUFBYTs7SUFDbEIsTUFBTUMsY0FBYztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsSUFBSTtJQUM3QyxNQUFNTyxzQkFBc0IsSUFBTTtRQUM5Qk4sMkRBQThCLENBQUMsQ0FBQ1EsT0FBT0MsV0FBYTtZQUNoRCxJQUFJRCxPQUFPO2dCQUNQRSxRQUFRRixLQUFLLENBQUMsMkJBQTJCQTtnQkFDekNHLE1BQU07WUFDVixPQUFPO2dCQUNILE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxVQUFTLEVBQUUsR0FBR0osU0FBU0ssTUFBTTtnQkFDL0NULFlBQVk7b0JBQUVPO29CQUFVQztnQkFBVTtnQkFDbENGLE1BQU0sdUJBQW1ERixPQUE1QkEsU0FBU0ssTUFBTSxDQUFDRixRQUFRLEVBQUMsS0FBNkIsT0FBMUJILFNBQVNLLE1BQU0sQ0FBQ0QsU0FBUztZQUN0RixDQUFDO1FBQ0w7SUFDSjtJQUNBLE1BQU1FLGtCQUFrQjtJQUN4QixNQUFNQyxrQkFBa0I7SUFDeEIsTUFBTUMsZUFBZTtJQUVyQixxQkFDSTtrQkFDSSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFROzs7Ozs7OEJBQ3RCLDhEQUFDRTtvQkFBUUYsV0FBVTs7c0NBQ2YsOERBQUNEOzRCQUFJQyxXQUFVOzs7Ozs7c0NBRWYsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDWCw4REFBQ0c7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0M7O3dDQUFHUjt3Q0FBZ0I7d0NBQUVDOzs7Ozs7Ozs7Ozs7O3NDQUUxQiw4REFBQ0U7NEJBQUlDLFdBQVU7OzhDQUNYLDhEQUFDRzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQzs4Q0FBR047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHWiw4REFBQ0k7b0JBQVFGLFdBQVU7O3NDQUNmLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBVzs7Ozs7O3NDQUN6Qiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ2xCLG9EQUFNQTt3Q0FBQ3VCLE9BQU9yQjt3Q0FBYWdCLFdBQVU7Ozs7OztrREFDdEMsOERBQUNNO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNGO2tEQUFFOzs7Ozs7a0RBQ0gsOERBQUNHO3dDQUFPQyxTQUFTckI7d0NBQXFCYSxXQUFVO2tEQUEyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU3ZHO0dBbkRTakI7S0FBQUE7QUF3RFQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0luc3RydWN0b3IuanM/OTZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0YWNoeW9uc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdlb2xvY2F0aW9uIGZyb20gJ2dlb2xvY2F0aW9uJztcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0JztcblxuXG5mdW5jdGlvbiBJbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IHFyQ29kZVZhbHVlID0gJ2gxJztcbiAgICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IGhhbmRsZUxvY2F0aW9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigoZXJyb3IsIHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZXR0aW5nIGxvY2F0aW9uOicsIGVycm9yKTtcbiAgICAgICAgICAgICAgICBhbGVydChcIkVycm9yOiBDYW4ndCBnZXQgbG9jYXRpb24hXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSA9IHBvc2l0aW9uLmNvb3JkcztcbiAgICAgICAgICAgICAgICBzZXRMb2NhdGlvbih7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSk7XG4gICAgICAgICAgICAgICAgYWxlcnQoYFRoZSBjb29yZGluYXRlcyBhcmUgJHtwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGV9ICR7cG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBpbnN0cnVjdG9yRk5hbWUgPSBcIllvcm9cIjtcbiAgICBjb25zdCBpbnN0cnVjdG9yTE5hbWUgPSBcIkRpb3VmXCI7XG4gICAgY29uc3QgaW5zdHJ1Y3RvcklEID0gMTEwMDg5OTk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYTIgY2VudGVyIHctMTAwIG10MSBzaGFkb3ctMSBiZy10cmFuc3BhcmVudFwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ3aGl0ZVwiPiBJbnN0cnVjdG9yIFBhZ2UgPC9oMT5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LTEwMCBwYTFcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYTUgdy00MCBtYTIgZnIgYmctd2hpdGUtOTAgZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZS05MCBncm93IHBhMiB3LTUwIG1hMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkluc3RydWN0b3IgTmFtZTo8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2luc3RydWN0b3JGTmFtZX0ge2luc3RydWN0b3JMTmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hMiBiZy13aGl0ZS05MCBncm93IHBhMiB3LTUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+SW5zdHJ1Y3RvciBJRDo8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2luc3RydWN0b3JJRH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaGFkb3ctMSBwYTIgbXQ0IHctMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0YyB3aGl0ZVwiPiBDb3Vyc2VzIDwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2Nyb2xsLXggdy0xMDAgY2VudGVyIHNjcm9sbC15IEljb3Vyc2UgZml0LWNvbnRlbnQgcGEyIHNoYWRvdy0xIG1hMyBmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhMyBtYTIgYmctbGlnaHQtZ3JheSBmaXQtY29udGVudCBibiBiZy13aGl0ZS03MCBmbGV4IGZsZXgtY29sdW1uIHNoYWRvdy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFFSQ29kZSB2YWx1ZT17cXJDb2RlVmFsdWV9IGNsYXNzTmFtZT1cImNlbnRlciBnb3J3LWxhcmdlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q1NDIDEwMTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW50cm8gdG8gY29tcHV0ZXIgc2NpZW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvY2F0aW9uQ2xpY2t9IGNsYXNzTmFtZT1cImdyb3cgYm4gcGEyIHNoYWRvdy0xIG10MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXQgTG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5zdHJ1Y3RvcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZ2VvbG9jYXRpb24iLCJRUkNvZGUiLCJJbnN0cnVjdG9yIiwicXJDb2RlVmFsdWUiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwiaGFuZGxlTG9jYXRpb25DbGljayIsImdldEN1cnJlbnRQb3NpdGlvbiIsImVycm9yIiwicG9zaXRpb24iLCJjb25zb2xlIiwiYWxlcnQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvb3JkcyIsImluc3RydWN0b3JGTmFtZSIsImluc3RydWN0b3JMTmFtZSIsImluc3RydWN0b3JJRCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2VjdGlvbiIsImgzIiwicCIsInZhbHVlIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Instructor.js\n"));

/***/ })

});