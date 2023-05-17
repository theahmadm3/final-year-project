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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tachyons */ \"./node_modules/tachyons/css/tachyons.css\");\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! geolocation */ \"./node_modules/geolocation/index.js\");\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/qrcode.react/lib/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Instructor() {\n    _s();\n    const qrCodeValue = \"h1\";\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleLocationClick = ()=>{\n        geolocation__WEBPACK_IMPORTED_MODULE_3__.getCurrentPosition((error, position)=>{\n            if (error) {\n                console.error(\"Error getting location:\", error);\n                alert(\"Error: Can't get location!\");\n            } else {\n                const { latitude , longitude  } = position.coords;\n                setLocation({\n                    latitude,\n                    longitude\n                });\n                alert(\"The coordinates are \".concat(position.coords.latitude, \" \").concat(position.coords.longitude));\n            }\n        });\n    };\n    const instructorFName = \"Yoro\";\n    const instructorLName = \"Diouf\";\n    const instructorID = 11008999;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pa2 center w-100 mt1 shadow-1 bg-transparent\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"white\",\n                    children: \" Instructor Page \"\n                }, void 0, false, {\n                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white pa2 w-60\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Instructor Name:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                instructorFName,\n                                \" \",\n                                instructorLName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 32,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                    lineNumber: 30,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white pa2 w-60\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            children: \"Instructor ID:\"\n                        }, void 0, false, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: instructorID\n                        }, void 0, false, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"shadow-1 pa2 mt4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"tc white\",\n                            children: \" Courses \"\n                        }, void 0, false, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"scroll-x w-100 center scroll-y Icourse fit-content pa2 shadow-1 ma3 flex flex-row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        value: qrCodeValue,\n                                        className: \"center\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"CSC 101\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Intro to computer science\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleLocationClick,\n                                        className: \"grow bn pa2 shadow-1 mt1\",\n                                        children: \"Get Location\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                lineNumber: 41,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                    lineNumber: 38,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n            lineNumber: 28,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Instructor, \"oqKkKXuEMFy/klxDqCY5G3vHULI=\");\n_c = Instructor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Instructor);\nvar _c;\n$RefreshReg$(_c, \"Instructor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSW5zdHJ1Y3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrQjtBQUNzQjtBQUNGO0FBQ0o7QUFFbEMsU0FBU0ksYUFBYTs7SUFDbEIsTUFBTUMsY0FBYztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsSUFBSTtJQUM3QyxNQUFNTyxzQkFBc0IsSUFBTTtRQUM5Qk4sMkRBQThCLENBQUMsQ0FBQ1EsT0FBT0MsV0FBYTtZQUNoRCxJQUFJRCxPQUFPO2dCQUNQRSxRQUFRRixLQUFLLENBQUMsMkJBQTJCQTtnQkFDekNHLE1BQU07WUFDVixPQUFPO2dCQUNILE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxVQUFTLEVBQUUsR0FBR0osU0FBU0ssTUFBTTtnQkFDL0NULFlBQVk7b0JBQUVPO29CQUFVQztnQkFBVTtnQkFDbENGLE1BQU0sdUJBQW1ERixPQUE1QkEsU0FBU0ssTUFBTSxDQUFDRixRQUFRLEVBQUMsS0FBNkIsT0FBMUJILFNBQVNLLE1BQU0sQ0FBQ0QsU0FBUztZQUN0RixDQUFDO1FBQ0w7SUFDSjtJQUNBLE1BQU1FLGtCQUFrQjtJQUN4QixNQUFNQyxrQkFBa0I7SUFDeEIsTUFBTUMsZUFBZTtJQUVyQixxQkFDSTtrQkFFSSw0RUFBQ0M7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFHRCxXQUFVOzhCQUFROzs7Ozs7OEJBQ3RCLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNFO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNDOztnQ0FBR1A7Z0NBQWdCO2dDQUFFQzs7Ozs7Ozs7Ozs7Ozs4QkFFMUIsOERBQUNFO29CQUFJQyxXQUFVOztzQ0FDWCw4REFBQ0U7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0M7c0NBQUdMOzs7Ozs7Ozs7Ozs7OEJBRVIsOERBQUNNO29CQUFRSixXQUFVOztzQ0FDZiw4REFBQ0M7NEJBQUdELFdBQVU7c0NBQVc7Ozs7OztzQ0FDekIsOERBQUNEOzRCQUFJQyxXQUFVO3NDQUNYLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNsQixvREFBTUE7d0NBQUN1QixPQUFPckI7d0NBQWFnQixXQUFVOzs7Ozs7a0RBQ3RDLDhEQUFDTTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDSDtrREFBRTs7Ozs7O2tEQUNILDhEQUFDSTt3Q0FBT0MsU0FBU3JCO3dDQUFxQmEsV0FBVTtrREFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN2RztHQWhEU2pCO0tBQUFBO0FBcURULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9JbnN0cnVjdG9yLmpzPzk2ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwidGFjaHlvbnNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnZW9sb2NhdGlvbiBmcm9tICdnZW9sb2NhdGlvbic7XG5pbXBvcnQgUVJDb2RlIGZyb20gJ3FyY29kZS5yZWFjdCc7XG5cbmZ1bmN0aW9uIEluc3RydWN0b3IoKSB7XG4gICAgY29uc3QgcXJDb2RlVmFsdWUgPSAnaDEnO1xuICAgIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgaGFuZGxlTG9jYXRpb25DbGljayA9ICgpID0+IHtcbiAgICAgICAgZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChlcnJvciwgcG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgbG9jYXRpb246JywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3I6IENhbid0IGdldCBsb2NhdGlvbiFcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9ID0gcG9zaXRpb24uY29vcmRzO1xuICAgICAgICAgICAgICAgIHNldExvY2F0aW9uKHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9KTtcbiAgICAgICAgICAgICAgICBhbGVydChgVGhlIGNvb3JkaW5hdGVzIGFyZSAke3Bvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZX0gJHtwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGluc3RydWN0b3JGTmFtZSA9IFwiWW9yb1wiO1xuICAgIGNvbnN0IGluc3RydWN0b3JMTmFtZSA9IFwiRGlvdWZcIjtcbiAgICBjb25zdCBpbnN0cnVjdG9ySUQgPSAxMTAwODk5OTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGEyIGNlbnRlciB3LTEwMCBtdDEgc2hhZG93LTEgYmctdHJhbnNwYXJlbnRcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid2hpdGVcIj4gSW5zdHJ1Y3RvciBQYWdlIDwvaDE+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwYTIgdy02MFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDM+SW5zdHJ1Y3RvciBOYW1lOjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPntpbnN0cnVjdG9yRk5hbWV9IHtpbnN0cnVjdG9yTE5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcGEyIHctNjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkluc3RydWN0b3IgSUQ6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+e2luc3RydWN0b3JJRH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2hhZG93LTEgcGEyIG10NFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGMgd2hpdGVcIj4gQ291cnNlcyA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC14IHctMTAwIGNlbnRlciBzY3JvbGwteSBJY291cnNlIGZpdC1jb250ZW50IHBhMiBzaGFkb3ctMSBtYTMgZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYTMgbWEyIGJnLWxpZ2h0LWdyYXkgZml0LWNvbnRlbnQgYm4gYmctd2hpdGUtNzAgZmxleCBmbGV4LWNvbHVtbiBzaGFkb3ctMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e3FyQ29kZVZhbHVlfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DU0MgMTAxPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JbnRybyB0byBjb21wdXRlciBzY2llbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9jYXRpb25DbGlja30gY2xhc3NOYW1lPVwiZ3JvdyBibiBwYTIgc2hhZG93LTEgbXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBMb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBJbnN0cnVjdG9yO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJnZW9sb2NhdGlvbiIsIlFSQ29kZSIsIkluc3RydWN0b3IiLCJxckNvZGVWYWx1ZSIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJoYW5kbGVMb2NhdGlvbkNsaWNrIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiZXJyb3IiLCJwb3NpdGlvbiIsImNvbnNvbGUiLCJhbGVydCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY29vcmRzIiwiaW5zdHJ1Y3RvckZOYW1lIiwiaW5zdHJ1Y3RvckxOYW1lIiwiaW5zdHJ1Y3RvcklEIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJoMyIsInAiLCJzZWN0aW9uIiwidmFsdWUiLCJoMiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Instructor.js\n"));

/***/ })

});