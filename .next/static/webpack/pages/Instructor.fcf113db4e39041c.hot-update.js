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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tachyons */ \"./node_modules/tachyons/css/tachyons.css\");\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! geolocation */ \"./node_modules/geolocation/index.js\");\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/qrcode.react/lib/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Instructor() {\n    _s();\n    const qrCodeValue = \"h1\";\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleLocationClick = ()=>{\n        geolocation__WEBPACK_IMPORTED_MODULE_3__.getCurrentPosition((error, position)=>{\n            if (error) {\n                console.error(\"Error getting location:\", error);\n                alert(\"Error: Can't get location!\");\n            } else {\n                const { latitude , longitude  } = position.coords;\n                setLocation({\n                    latitude,\n                    longitude\n                });\n                alert(\"The coordinates are \".concat(position.coords.latitude, \" \").concat(position.coords.longitude));\n            }\n        });\n    };\n    const instructorFName = \"Yoro\";\n    const instructorLName = \"Diouf\";\n    const instructorID = 11008999;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pa2 center w-100 mt1 shadow-1 bg-transparent\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"white\",\n                    children: \" Instructor Page \"\n                }, void 0, false, {\n                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"w-100 pa1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"pa4 w-40 ma2 fr bg-white\"\n                        }, void 0, false, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"bg-white pa2 w-50 ma2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Instructor Name:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        instructorFName,\n                                        \" \",\n                                        instructorLName\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ma2 bg-white pa2 w-50\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: \"Instructor ID:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: instructorID\n                                }, void 0, false, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"shadow-1 pa2 mt4 w-100\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"tc white\",\n                            children: \" Courses \"\n                        }, void 0, false, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"scroll-x w-100 center scroll-y Icourse fit-content pa2 shadow-1 ma3 flex flex-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            value: qrCodeValue,\n                                            className: \"center\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"CSC 101\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Intro to computer science\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleLocationClick,\n                                            className: \"grow bn pa2 shadow-1 mt1\",\n                                            children: \"Get Location\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 49,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            value: qrCodeValue,\n                                            className: \"center\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"CSC 101\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Intro to computer science\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleLocationClick,\n                                            className: \"grow bn pa2 shadow-1 mt1\",\n                                            children: \"Get Location\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            value: qrCodeValue,\n                                            className: \"center\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"CSC 101\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 63,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Intro to computer science\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleLocationClick,\n                                            className: \"grow bn pa2 shadow-1 mt1\",\n                                            children: \"Get Location\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                            value: qrCodeValue,\n                                            className: \"center\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"CSC 101\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Intro to computer science\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: handleLocationClick,\n                                            className: \"grow bn pa2 shadow-1 mt1\",\n                                            children: \"Get Location\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                    lineNumber: 42,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Instructor, \"oqKkKXuEMFy/klxDqCY5G3vHULI=\");\n_c = Instructor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Instructor);\nvar _c;\n$RefreshReg$(_c, \"Instructor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cGFjazovL19OX0UvLi9zcmMvcGFnZXMvSW5zdHJ1Y3Rvci5qcz85NmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcInRhY2h5b25zXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2VvbG9jYXRpb24gZnJvbSAnZ2VvbG9jYXRpb24nO1xuaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUucmVhY3QnO1xuXG5cbmZ1bmN0aW9uIEluc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcXJDb2RlVmFsdWUgPSAnaDEnO1xuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgaGFuZGxlTG9jYXRpb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChlcnJvciwgcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgbG9jYXRpb246JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3I6IENhbid0IGdldCBsb2NhdGlvbiFcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gcG9zaXRpb24uY29vcmRzO1xuICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9KTtcbiAgICAgICAgICAgICAgICBhbGVydChgVGhlIGNvb3JkaW5hdGVzIGFyZSAke3Bvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZX0gJHtwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGluc3RydWN0b3JGTmFtZSA9IFwiWW9yb1wiO1xuICAgIGNvbnN0IGluc3RydWN0b3JMTmFtZSA9IFwiRGlvdWZcIjtcbiAgICBjb25zdCBpbnN0cnVjdG9ySUQgPSAxMTAwODk5OTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhMiBjZW50ZXIgdy0xMDAgbXQxIHNoYWRvdy0xIGJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIndoaXRlXCI+IEluc3RydWN0b3IgUGFnZSA8L2gxPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctMTAwIHBhMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhNCB3LTQwIG1hMiBmciBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwYTIgdy01MCBtYTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5JbnN0cnVjdG9yIE5hbWU6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpbnN0cnVjdG9yRk5hbWV9IHtpbnN0cnVjdG9yTE5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYTIgYmctd2hpdGUgcGEyIHctNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5JbnN0cnVjdG9yIElEOjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57aW5zdHJ1Y3RvcklEfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNoYWRvdy0xIHBhMiBtdDQgdy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRjIHdoaXRlXCI+IENvdXJzZXMgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JvbGwteCB3LTEwMCBjZW50ZXIgc2Nyb2xsLXkgSWNvdXJzZSBmaXQtY29udGVudCBwYTIgc2hhZG93LTEgbWEzIGZsZXggZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGEzIG1hMiBiZy1saWdodC1ncmF5IGZpdC1jb250ZW50IGJuIGJnLXdoaXRlLTcwIGZsZXggZmxleC1jb2x1bW4gc2hhZG93LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPXtxckNvZGVWYWx1ZX0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q1NDIDEwMTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW50cm8gdG8gY29tcHV0ZXIgc2NpZW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvY2F0aW9uQ2xpY2t9IGNsYXNzTmFtZT1cImdyb3cgYm4gcGEyIHNoYWRvdy0xIG10MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXQgTG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYTMgbWEyIGJnLWxpZ2h0LWdyYXkgZml0LWNvbnRlbnQgYm4gYmctd2hpdGUtNzAgZmxleCBmbGV4LWNvbHVtbiBzaGFkb3ctMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e3FyQ29kZVZhbHVlfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DU0MgMTAxPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JbnRybyB0byBjb21wdXRlciBzY2llbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9jYXRpb25DbGlja30gY2xhc3NOYW1lPVwiZ3JvdyBibiBwYTIgc2hhZG93LTEgbXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBMb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhMyBtYTIgYmctbGlnaHQtZ3JheSBmaXQtY29udGVudCBibiBiZy13aGl0ZS03MCBmbGV4IGZsZXgtY29sdW1uIHNoYWRvdy0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFFSQ29kZSB2YWx1ZT17cXJDb2RlVmFsdWV9IGNsYXNzTmFtZT1cImNlbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkNTQyAxMDE8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkludHJvIHRvIGNvbXB1dGVyIHNjaWVuY2U8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMb2NhdGlvbkNsaWNrfSBjbGFzc05hbWU9XCJncm93IGJuIHBhMiBzaGFkb3ctMSBtdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0IExvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGEzIG1hMiBiZy1saWdodC1ncmF5IGZpdC1jb250ZW50IGJuIGJnLXdoaXRlLTcwIGZsZXggZmxleC1jb2x1bW4gc2hhZG93LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPXtxckNvZGVWYWx1ZX0gY2xhc3NOYW1lPVwiY2VudGVyXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+Q1NDIDEwMTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW50cm8gdG8gY29tcHV0ZXIgc2NpZW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUxvY2F0aW9uQ2xpY2t9IGNsYXNzTmFtZT1cImdyb3cgYm4gcGEyIHNoYWRvdy0xIG10MVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXQgTG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgSW5zdHJ1Y3RvcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiZ2VvbG9jYXRpb24iLCJRUkNvZGUiLCJJbnN0cnVjdG9yIiwicXJDb2RlVmFsdWUiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwiaGFuZGxlTG9jYXRpb25DbGljayIsImdldEN1cnJlbnRQb3NpdGlvbiIsImVycm9yIiwicG9zaXRpb24iLCJjb25zb2xlIiwiYWxlcnQiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvb3JkcyIsImluc3RydWN0b3JGTmFtZSIsImluc3RydWN0b3JMTmFtZSIsImluc3RydWN0b3JJRCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwic2VjdGlvbiIsImgzIiwicCIsInZhbHVlIiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Instructor.js\n"));

/***/ })

});