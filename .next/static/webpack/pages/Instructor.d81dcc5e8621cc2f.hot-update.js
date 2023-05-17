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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tachyons */ \"./node_modules/tachyons/css/tachyons.css\");\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! geolocation */ \"./node_modules/geolocation/index.js\");\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/qrcode.react/lib/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Instructor() {\n    _s();\n    const qrCodeValue = \"h1\";\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const handleLocationClick = ()=>{\n        geolocation__WEBPACK_IMPORTED_MODULE_3__.getCurrentPosition((error, position)=>{\n            if (error) {\n                console.error(\"Error getting location:\", error);\n                alert(\"Error: Can't get location!\");\n            } else {\n                const { latitude , longitude  } = position.coords;\n                setLocation({\n                    latitude,\n                    longitude\n                });\n                alert(\"The coordinates are \".concat(position.coords.latitude, \" \").concat(position.coords.longitude));\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"pa2 center w-100 mt1 shadow-1 bg-transparent\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \" Inst \"\n                }, void 0, false, {\n                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \"shadow-1 pa2 mt4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"tc white\",\n                            children: \" Courses \"\n                        }, void 0, false, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 28,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"scroll-x w-100 center scroll-y Icourse fit-content pa2 shadow-1 ma3 flex flex-row\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        value: qrCodeValue,\n                                        className: \"center\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"CSC 101\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Intro to computer science\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 33,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: handleLocationClick,\n                                        className: \"grow bn pa2 shadow-1 mt1\",\n                                        children: \"Get Location\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 34,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                                lineNumber: 30,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n                    lineNumber: 27,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/m3/Desktop/final-year-project/src/pages/Instructor.js\",\n            lineNumber: 25,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(Instructor, \"oqKkKXuEMFy/klxDqCY5G3vHULI=\");\n_c = Instructor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Instructor);\nvar _c;\n$RefreshReg$(_c, \"Instructor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSW5zdHJ1Y3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFrQjtBQUNzQjtBQUNGO0FBQ0o7QUFFbEMsU0FBU0ksYUFBYTs7SUFDbEIsTUFBTUMsY0FBYztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsSUFBSTtJQUM3QyxNQUFNTyxzQkFBc0IsSUFBTTtRQUM5Qk4sMkRBQThCLENBQUMsQ0FBQ1EsT0FBT0MsV0FBYTtZQUNoRCxJQUFJRCxPQUFPO2dCQUNQRSxRQUFRRixLQUFLLENBQUMsMkJBQTJCQTtnQkFDekNHLE1BQU07WUFDVixPQUFPO2dCQUNILE1BQU0sRUFBRUMsU0FBUSxFQUFFQyxVQUFTLEVBQUUsR0FBR0osU0FBU0ssTUFBTTtnQkFDL0NULFlBQVk7b0JBQUVPO29CQUFVQztnQkFBVTtnQkFDbENGLE1BQU0sdUJBQW1ERixPQUE1QkEsU0FBU0ssTUFBTSxDQUFDRixRQUFRLEVBQUMsS0FBNkIsT0FBMUJILFNBQVNLLE1BQU0sQ0FBQ0QsU0FBUztZQUN0RixDQUFDO1FBQ0w7SUFDSjtJQUVBLHFCQUNJO2tCQUVJLDRFQUFDRTtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ0M7b0JBQVFGLFdBQVU7O3NDQUNmLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBVzs7Ozs7O3NDQUN6Qiw4REFBQ0Q7NEJBQUlDLFdBQVU7c0NBQ1gsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDWCw4REFBQ2Ysb0RBQU1BO3dDQUFDa0IsT0FBT2hCO3dDQUFhYSxXQUFVOzs7Ozs7a0RBQ3RDLDhEQUFDSTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQztrREFBRTs7Ozs7O2tEQUNILDhEQUFDQzt3Q0FBT0MsU0FBU2pCO3dDQUFxQlUsV0FBVTtrREFBMkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN2RztHQXJDU2Q7S0FBQUE7QUEwQ1QsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0luc3RydWN0b3IuanM/OTZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0YWNoeW9uc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdlb2xvY2F0aW9uIGZyb20gJ2dlb2xvY2F0aW9uJztcbmltcG9ydCBRUkNvZGUgZnJvbSAncXJjb2RlLnJlYWN0JztcblxuZnVuY3Rpb24gSW5zdHJ1Y3RvcigpIHtcbiAgICBjb25zdCBxckNvZGVWYWx1ZSA9ICdoMSc7XG4gICAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBoYW5kbGVMb2NhdGlvbkNsaWNrID0gKCkgPT4ge1xuICAgICAgICBnZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oKGVycm9yLCBwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZ2V0dGluZyBsb2NhdGlvbjonLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJFcnJvcjogQ2FuJ3QgZ2V0IGxvY2F0aW9uIVwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0gPSBwb3NpdGlvbi5jb29yZHM7XG4gICAgICAgICAgICAgICAgc2V0TG9jYXRpb24oeyBsYXRpdHVkZSwgbG9uZ2l0dWRlIH0pO1xuICAgICAgICAgICAgICAgIGFsZXJ0KGBUaGUgY29vcmRpbmF0ZXMgYXJlICR7cG9zaXRpb24uY29vcmRzLmxhdGl0dWRlfSAke3Bvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGV9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhMiBjZW50ZXIgdy0xMDAgbXQxIHNoYWRvdy0xIGJnLXRyYW5zcGFyZW50XCI+XG4gICAgICAgICAgICAgICAgPGgxPiBJbnN0IDwvaDE+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2hhZG93LTEgcGEyIG10NFwiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGMgd2hpdGVcIj4gQ291cnNlcyA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcm9sbC14IHctMTAwIGNlbnRlciBzY3JvbGwteSBJY291cnNlIGZpdC1jb250ZW50IHBhMiBzaGFkb3ctMSBtYTMgZmxleCBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYTMgbWEyIGJnLWxpZ2h0LWdyYXkgZml0LWNvbnRlbnQgYm4gYmctd2hpdGUtNzAgZmxleCBmbGV4LWNvbHVtbiBzaGFkb3ctMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e3FyQ29kZVZhbHVlfSBjbGFzc05hbWU9XCJjZW50ZXJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5DU0MgMTAxPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JbnRybyB0byBjb21wdXRlciBzY2llbmNlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlTG9jYXRpb25DbGlja30gY2xhc3NOYW1lPVwiZ3JvdyBibiBwYTIgc2hhZG93LTEgbXQxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBMb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBJbnN0cnVjdG9yO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJnZW9sb2NhdGlvbiIsIlFSQ29kZSIsIkluc3RydWN0b3IiLCJxckNvZGVWYWx1ZSIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJoYW5kbGVMb2NhdGlvbkNsaWNrIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiZXJyb3IiLCJwb3NpdGlvbiIsImNvbnNvbGUiLCJhbGVydCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiY29vcmRzIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzZWN0aW9uIiwidmFsdWUiLCJoMiIsInAiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Instructor.js\n"));

/***/ })

});