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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tachyons */ \"./node_modules/.pnpm/tachyons@4.12.0/node_modules/tachyons/css/tachyons.css\");\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/.pnpm/qrcode.react@3.1.0_react@18.2.0/node_modules/qrcode.react/lib/esm/index.js\");\n/* harmony import */ var _components_SideNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SideNavbar */ \"./src/components/SideNavbar.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Instructor() {\n    _s();\n    const instructorFName = \"Yoro\";\n    const instructorLName = \"Diouf\";\n    const instructorID = 11008999;\n    const [qrCodeValue, setQrCodeValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // const [location, setLocation] = useState(null);\n    const [showTakeAttendanceBtn, setShowTakeAttendanceBtn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideNavbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            showTakeAttendanceBtn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    position: \"absolute\",\n                    top: \"50%\",\n                    left: \"50%\"\n                },\n                onClick: async ()=>{\n                    const coords = await (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getCoords)();\n                    console.log(JSON.stringify({\n                        expireOn: Date.now() + 2 * 60 * 1000,\n                        instructorID,\n                        course: \"SEN311\",\n                        coords\n                    }));\n                    setQrCodeValue(JSON.stringify({\n                        expireOn: Date.now() + 20 * 60 * 1000,\n                        instructorID,\n                        course: \"SEN311\",\n                        coords\n                    }));\n                    setShowTakeAttendanceBtn(false);\n                },\n                children: \"take attendance\"\n            }, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pa2 center w-100 mt1 shadow-1 bg-transparent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"white\",\n                        children: \" Instructor Page \"\n                    }, void 0, false, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"w-100 pa1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pa5 w-40 ma2 fr bg-white-90 grow\"\n                            }, void 0, false, {\n                                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                lineNumber: 51,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white-90 grow pa2 w-50 ma2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Instructor Name:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            instructorFName,\n                                            \" \",\n                                            instructorLName\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ma2 bg-white-90 grow pa2 w-50\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Instructor ID:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: instructorID\n                                    }, void 0, false, {\n                                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"shadow-1 pa2 mt4 w-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"tc white\",\n                                children: \" Courses \"\n                            }, void 0, false, {\n                                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"scroll-x w-100 center scroll-y Icourse fit-content pa2 shadow-1 ma3 flex flex-row\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            value: qrCodeValue,\n                                            className: \"center grow\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"CSC 101\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Intro to computer science\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                lineNumber: 48,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Instructor, \"uSbdhjfNvKx5wEIdnIoRfZ82Ax8=\");\n_c = Instructor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Instructor);\nvar _c;\n$RefreshReg$(_c, \"Instructor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSW5zdHJ1Y3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0I7QUFDc0I7QUFDTjtBQUNlO0FBQ2Y7QUFFbEMsU0FBU0ssYUFBYTs7SUFDbEIsTUFBTUMsa0JBQWtCO0lBQ3hCLE1BQU1DLGtCQUFrQjtJQUN4QixNQUFNQyxlQUFlO0lBQ3JCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ25ELGtEQUFrRDtJQUNsRCxNQUFNLENBQUNVLHVCQUF1QkMseUJBQXlCLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFFdkUscUJBQ0U7OzBCQUNFLDhEQUFDRSw4REFBVUE7Ozs7O1lBQ1ZRLHNDQUNDLDhEQUFDRTtnQkFDREMsT0FBTztvQkFDTEMsVUFBVTtvQkFDVkMsS0FBSztvQkFDTEMsTUFBTTtnQkFDUjtnQkFDRUMsU0FBUyxVQUFZO29CQUNuQixNQUFNQyxTQUFTLE1BQU1mLGlEQUFTQTtvQkFDOUJnQixRQUFRQyxHQUFHLENBQ1RDLEtBQUtDLFNBQVMsQ0FBQzt3QkFDYkMsVUFBVUMsS0FBS0MsR0FBRyxLQUFLLElBQUksS0FBSzt3QkFDaENsQjt3QkFDQW1CLFFBQVE7d0JBQ1JSO29CQUNGO29CQUVGVCxlQUNFWSxLQUFLQyxTQUFTLENBQUM7d0JBQ2JDLFVBQVVDLEtBQUtDLEdBQUcsS0FBSyxLQUFLLEtBQUs7d0JBQ2pDbEI7d0JBQ0FtQixRQUFRO3dCQUNSUjtvQkFDRjtvQkFFRlAseUJBQXlCLEtBQUs7Z0JBQ2hDOzBCQUFHOzs7OztxQ0FJTCw4REFBQ2dCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQVE7Ozs7OztrQ0FDdEIsOERBQUNFO3dCQUFRRixXQUFVOzswQ0FDakIsOERBQUNEO2dDQUFJQyxXQUFVOzs7Ozs7MENBQ2YsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0c7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0M7OzRDQUNFM0I7NENBQWdCOzRDQUFFQzs7Ozs7Ozs7Ozs7OzswQ0FHdkIsOERBQUNxQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNHO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDO2tEQUFHekI7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHUiw4REFBQ3VCO3dCQUFRRixXQUFVOzswQ0FDakIsOERBQUNDO2dDQUFHRCxXQUFVOzBDQUFXOzs7Ozs7MENBQ3pCLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FDYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDM0Isb0RBQU1BOzRDQUFDZ0MsT0FBT3pCOzRDQUFhb0IsV0FBVTs7Ozs7O3NEQUN0Qyw4REFBQ007c0RBQUc7Ozs7OztzREFDSiw4REFBQ0Y7c0RBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBVVo7OztBQUdUO0dBM0VTNUI7S0FBQUE7QUFnRlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0luc3RydWN0b3IuanM/OTZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0YWNoeW9uc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUucmVhY3QnO1xuaW1wb3J0IFNpZGVOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlTmF2YmFyJ1xuaW1wb3J0IHtnZXRDb29yZHN9IGZyb20gJy4uL3V0aWxzJ1xuXG5mdW5jdGlvbiBJbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGluc3RydWN0b3JGTmFtZSA9ICdZb3JvJztcbiAgICBjb25zdCBpbnN0cnVjdG9yTE5hbWUgPSAnRGlvdWYnO1xuICAgIGNvbnN0IGluc3RydWN0b3JJRCA9IDExMDA4OTk5O1xuICAgIGNvbnN0IFtxckNvZGVWYWx1ZSwgc2V0UXJDb2RlVmFsdWVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgLy8gY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc2hvd1Rha2VBdHRlbmRhbmNlQnRuLCBzZXRTaG93VGFrZUF0dGVuZGFuY2VCdG5dID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8U2lkZU5hdmJhciAvPlxuICAgICAgICB7c2hvd1Rha2VBdHRlbmRhbmNlQnRuID8gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IFwiNTAlXCIsXG4gICAgICAgICAgICBsZWZ0OiBcIjUwJVwiXG4gICAgICAgICAgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY29vcmRzID0gYXdhaXQgZ2V0Q29vcmRzKCk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgIGV4cGlyZU9uOiBEYXRlLm5vdygpICsgMiAqIDYwICogMTAwMCxcbiAgICAgICAgICAgICAgICAgIGluc3RydWN0b3JJRCxcbiAgICAgICAgICAgICAgICAgIGNvdXJzZTogJ1NFTjMxMScsXG4gICAgICAgICAgICAgICAgICBjb29yZHMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgc2V0UXJDb2RlVmFsdWUoXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgZXhwaXJlT246IERhdGUubm93KCkgKyAyMCAqIDYwICogMTAwMCxcbiAgICAgICAgICAgICAgICAgIGluc3RydWN0b3JJRCxcbiAgICAgICAgICAgICAgICAgIGNvdXJzZTogJ1NFTjMxMScsXG4gICAgICAgICAgICAgICAgICBjb29yZHMsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgc2V0U2hvd1Rha2VBdHRlbmRhbmNlQnRuKGZhbHNlKTtcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgdGFrZSBhdHRlbmRhbmNlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhMiBjZW50ZXIgdy0xMDAgbXQxIHNoYWRvdy0xIGJnLXRyYW5zcGFyZW50Jz5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3doaXRlJz4gSW5zdHJ1Y3RvciBQYWdlIDwvaDE+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3ctMTAwIHBhMSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYTUgdy00MCBtYTIgZnIgYmctd2hpdGUtOTAgZ3Jvdyc+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZS05MCBncm93IHBhMiB3LTUwIG1hMic+XG4gICAgICAgICAgICAgICAgPGgzPkluc3RydWN0b3IgTmFtZTo8L2gzPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAge2luc3RydWN0b3JGTmFtZX0ge2luc3RydWN0b3JMTmFtZX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWEyIGJnLXdoaXRlLTkwIGdyb3cgcGEyIHctNTAnPlxuICAgICAgICAgICAgICAgIDxoMz5JbnN0cnVjdG9yIElEOjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+e2luc3RydWN0b3JJRH08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdzaGFkb3ctMSBwYTIgbXQ0IHctMTAwJz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGMgd2hpdGUnPiBDb3Vyc2VzIDwvaDE+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzY3JvbGwteCB3LTEwMCBjZW50ZXIgc2Nyb2xsLXkgSWNvdXJzZSBmaXQtY29udGVudCBwYTIgc2hhZG93LTEgbWEzIGZsZXggZmxleC1yb3cnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYTMgbWEyIGJnLWxpZ2h0LWdyYXkgZml0LWNvbnRlbnQgYm4gYmctd2hpdGUtNzAgZmxleCBmbGV4LWNvbHVtbiBzaGFkb3ctMSc+XG4gICAgICAgICAgICAgICAgICA8UVJDb2RlIHZhbHVlPXtxckNvZGVWYWx1ZX0gY2xhc3NOYW1lPSdjZW50ZXIgZ3JvdycgLz5cbiAgICAgICAgICAgICAgICAgIDxoMj5DU0MgMTAxPC9oMj5cbiAgICAgICAgICAgICAgICAgIDxwPkludHJvIHRvIGNvbXB1dGVyIHNjaWVuY2U8L3A+XG4gICAgICAgICAgICAgICAgICB7LyogPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMb2NhdGlvbkNsaWNrfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2dyb3cgYm4gcGEyIHNoYWRvdy0xIG10MSc+XG4gICAgICAgICAgICAgICAgICAgIEdldCBMb2NhdGlvblxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvPlxuICAgICk7XG59XG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IEluc3RydWN0b3I7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlFSQ29kZSIsIlNpZGVOYXZiYXIiLCJnZXRDb29yZHMiLCJJbnN0cnVjdG9yIiwiaW5zdHJ1Y3RvckZOYW1lIiwiaW5zdHJ1Y3RvckxOYW1lIiwiaW5zdHJ1Y3RvcklEIiwicXJDb2RlVmFsdWUiLCJzZXRRckNvZGVWYWx1ZSIsInNob3dUYWtlQXR0ZW5kYW5jZUJ0biIsInNldFNob3dUYWtlQXR0ZW5kYW5jZUJ0biIsImJ1dHRvbiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwib25DbGljayIsImNvb3JkcyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZXhwaXJlT24iLCJEYXRlIiwibm93IiwiY291cnNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJzZWN0aW9uIiwiaDMiLCJwIiwidmFsdWUiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Instructor.js\n"));

/***/ })

});