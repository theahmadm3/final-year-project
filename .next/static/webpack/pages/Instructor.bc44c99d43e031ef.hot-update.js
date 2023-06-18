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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tachyons */ \"./node_modules/.pnpm/tachyons@4.12.0/node_modules/tachyons/css/tachyons.css\");\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/.pnpm/qrcode.react@3.1.0_react@18.2.0/node_modules/qrcode.react/lib/esm/index.js\");\n/* harmony import */ var _components_SideNavbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SideNavbar */ \"./src/components/SideNavbar.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Instructor() {\n    _s();\n    const instructorFName = \"Yoro\";\n    const instructorLName = \"Diouf\";\n    const instructorID = 11008999;\n    const [qrCodeValue, setQrCodeValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    // const [location, setLocation] = useState(null);\n    const [showTakeAttendanceBtn, setShowTakeAttendanceBtn] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideNavbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this),\n            showTakeAttendanceBtn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                style: {\n                    position: \"absolute\",\n                    top: \"30%\",\n                    left: \"45%\",\n                    padding: 20\n                },\n                onClick: async ()=>{\n                    const coords = await (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getCoords)();\n                    console.log(JSON.stringify({\n                        expireOn: Date.now() + 2 * 60 * 1000,\n                        instructorID,\n                        course: \"SEN311\",\n                        coords\n                    }));\n                    setQrCodeValue(JSON.stringify({\n                        expireOn: Date.now() + 20 * 60 * 1000,\n                        instructorID,\n                        course: \"SEN311\",\n                        coords\n                    }));\n                    setShowTakeAttendanceBtn(false);\n                },\n                children: \"take attendance\"\n            }, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pa2 center w-100 mt1 shadow-1 bg-transparent\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"white\",\n                        children: \" Instructor Page \"\n                    }, void 0, false, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"w-100 pa1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"pa5 w-40 ma2 fr bg-white-90 grow\"\n                            }, void 0, false, {\n                                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-white-90 grow pa2 w-50 ma2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Instructor Name:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            instructorFName,\n                                            \" \",\n                                            instructorLName\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                lineNumber: 53,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ma2 bg-white-90 grow pa2 w-50\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Instructor ID:\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: instructorID\n                                    }, void 0, false, {\n                                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                lineNumber: 59,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"shadow-1 pa2 mt4 w-100\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"tc white\",\n                                children: \" Courses \"\n                            }, void 0, false, {\n                                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                lineNumber: 65,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"scroll-x w-100 center scroll-y Icourse fit-content pa2 shadow-1 ma3 flex flex-row\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"pa3 ma2 bg-light-gray fit-content bn bg-white-70 flex flex-column shadow-1\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(qrcode_react__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            value: qrCodeValue,\n                                            className: \"center grow\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"CSC 101\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Intro to computer science\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 70,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"grow bn pa2 shadow-1 mt1\",\n                                            onClick: async ()=>{\n                                                const coords = await (0,_utils__WEBPACK_IMPORTED_MODULE_5__.getCoords)();\n                                                console.log(JSON.stringify({\n                                                    expireOn: Date.now() + 2 * 60 * 1000,\n                                                    instructorID,\n                                                    course: \"SEN311\",\n                                                    coords\n                                                }));\n                                                setQrCodeValue(JSON.stringify({\n                                                    expireOn: Date.now() + 20 * 60 * 1000,\n                                                    instructorID,\n                                                    course: \"SEN311\",\n                                                    coords\n                                                }));\n                                                setShowTakeAttendanceBtn(false);\n                                            },\n                                            children: \" take attendance\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Instructor.js\",\n                lineNumber: 49,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Instructor, \"uSbdhjfNvKx5wEIdnIoRfZ82Ax8=\");\n_c = Instructor;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Instructor);\nvar _c;\n$RefreshReg$(_c, \"Instructor\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvSW5zdHJ1Y3Rvci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBa0I7QUFDc0I7QUFDTjtBQUNlO0FBQ2Y7QUFFbEMsU0FBU0ssYUFBYTs7SUFDbEIsTUFBTUMsa0JBQWtCO0lBQ3hCLE1BQU1DLGtCQUFrQjtJQUN4QixNQUFNQyxlQUFlO0lBQ3JCLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ25ELGtEQUFrRDtJQUNsRCxNQUFNLENBQUNVLHVCQUF1QkMseUJBQXlCLEdBQUdYLCtDQUFRQSxDQUFDLElBQUk7SUFFdkUscUJBQ0U7OzBCQUNFLDhEQUFDRSw4REFBVUE7Ozs7O1lBQ1ZRLHNDQUNDLDhEQUFDRTtnQkFDQ0MsT0FBTztvQkFDTEMsVUFBVTtvQkFDVkMsS0FBSztvQkFDTEMsTUFBTTtvQkFDTkMsU0FBUztnQkFDWDtnQkFDQUMsU0FBUyxVQUFZO29CQUNuQixNQUFNQyxTQUFTLE1BQU1oQixpREFBU0E7b0JBQzlCaUIsUUFBUUMsR0FBRyxDQUNUQyxLQUFLQyxTQUFTLENBQUM7d0JBQ2JDLFVBQVVDLEtBQUtDLEdBQUcsS0FBSyxJQUFJLEtBQUs7d0JBQ2hDbkI7d0JBQ0FvQixRQUFRO3dCQUNSUjtvQkFDRjtvQkFFRlYsZUFDRWEsS0FBS0MsU0FBUyxDQUFDO3dCQUNiQyxVQUFVQyxLQUFLQyxHQUFHLEtBQUssS0FBSyxLQUFLO3dCQUNqQ25CO3dCQUNBb0IsUUFBUTt3QkFDUlI7b0JBQ0Y7b0JBRUZSLHlCQUF5QixLQUFLO2dCQUNoQzswQkFBRzs7Ozs7cUNBSUwsOERBQUNpQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFROzs7Ozs7a0NBQ3RCLDhEQUFDRTt3QkFBUUYsV0FBVTs7MENBQ2pCLDhEQUFDRDtnQ0FBSUMsV0FBVTs7Ozs7OzBDQUNmLDhEQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNHO2tEQUFHOzs7Ozs7a0RBQ0osOERBQUNDOzs0Q0FDRTVCOzRDQUFnQjs0Q0FBRUM7Ozs7Ozs7Ozs7Ozs7MENBR3ZCLDhEQUFDc0I7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDRztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQztrREFBRzFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUN3Qjt3QkFBUUYsV0FBVTs7MENBQ2pCLDhEQUFDQztnQ0FBR0QsV0FBVTswQ0FBVzs7Ozs7OzBDQUN6Qiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQzVCLG9EQUFNQTs0Q0FBQ2lDLE9BQU8xQjs0Q0FBYXFCLFdBQVU7Ozs7OztzREFDdEMsOERBQUNNO3NEQUFHOzs7Ozs7c0RBQ0osOERBQUNGO3NEQUFFOzs7Ozs7c0RBQ0gsOERBQUNyQjs0Q0FBT2lCLFdBQVU7NENBQ2hCWCxTQUFTLFVBQVk7Z0RBQ25CLE1BQU1DLFNBQVMsTUFBTWhCLGlEQUFTQTtnREFDOUJpQixRQUFRQyxHQUFHLENBQ1RDLEtBQUtDLFNBQVMsQ0FBQztvREFDYkMsVUFBVUMsS0FBS0MsR0FBRyxLQUFLLElBQUksS0FBSztvREFDaENuQjtvREFDQW9CLFFBQVE7b0RBQ1JSO2dEQUNGO2dEQUVGVixlQUNFYSxLQUFLQyxTQUFTLENBQUM7b0RBQ2JDLFVBQVVDLEtBQUtDLEdBQUcsS0FBSyxLQUFLLEtBQUs7b0RBQ2pDbkI7b0RBQ0FvQixRQUFRO29EQUNSUjtnREFDRjtnREFFRlIseUJBQXlCLEtBQUs7NENBQ2hDO3NEQUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVdaOzs7QUFHVDtHQW5HU1A7S0FBQUE7QUF3R1QsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0luc3RydWN0b3IuanM/OTZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJ0YWNoeW9uc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFFSQ29kZSBmcm9tICdxcmNvZGUucmVhY3QnO1xuaW1wb3J0IFNpZGVOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlTmF2YmFyJ1xuaW1wb3J0IHtnZXRDb29yZHN9IGZyb20gJy4uL3V0aWxzJ1xuXG5mdW5jdGlvbiBJbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGluc3RydWN0b3JGTmFtZSA9ICdZb3JvJztcbiAgICBjb25zdCBpbnN0cnVjdG9yTE5hbWUgPSAnRGlvdWYnO1xuICAgIGNvbnN0IGluc3RydWN0b3JJRCA9IDExMDA4OTk5O1xuICAgIGNvbnN0IFtxckNvZGVWYWx1ZSwgc2V0UXJDb2RlVmFsdWVdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgLy8gY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc2hvd1Rha2VBdHRlbmRhbmNlQnRuLCBzZXRTaG93VGFrZUF0dGVuZGFuY2VCdG5dID0gdXNlU3RhdGUodHJ1ZSlcblxuICAgIHJldHVybiAoXG4gICAgICA8PlxuICAgICAgICA8U2lkZU5hdmJhciAvPlxuICAgICAgICB7c2hvd1Rha2VBdHRlbmRhbmNlQnRuID8gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICB0b3A6ICczMCUnLFxuICAgICAgICAgICAgICBsZWZ0OiAnNDUlJyxcbiAgICAgICAgICAgICAgcGFkZGluZzogMjAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSBhd2FpdCBnZXRDb29yZHMoKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgZXhwaXJlT246IERhdGUubm93KCkgKyAyICogNjAgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3RvcklELFxuICAgICAgICAgICAgICAgICAgY291cnNlOiAnU0VOMzExJyxcbiAgICAgICAgICAgICAgICAgIGNvb3JkcyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBzZXRRckNvZGVWYWx1ZShcbiAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICBleHBpcmVPbjogRGF0ZS5ub3coKSArIDIwICogNjAgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3RvcklELFxuICAgICAgICAgICAgICAgICAgY291cnNlOiAnU0VOMzExJyxcbiAgICAgICAgICAgICAgICAgIGNvb3JkcyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBzZXRTaG93VGFrZUF0dGVuZGFuY2VCdG4oZmFsc2UpO1xuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICB0YWtlIGF0dGVuZGFuY2VcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGEyIGNlbnRlciB3LTEwMCBtdDEgc2hhZG93LTEgYmctdHJhbnNwYXJlbnQnPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nd2hpdGUnPiBJbnN0cnVjdG9yIFBhZ2UgPC9oMT5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndy0xMDAgcGExJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhNSB3LTQwIG1hMiBmciBiZy13aGl0ZS05MCBncm93Jz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlLTkwIGdyb3cgcGEyIHctNTAgbWEyJz5cbiAgICAgICAgICAgICAgICA8aDM+SW5zdHJ1Y3RvciBOYW1lOjwvaDM+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICB7aW5zdHJ1Y3RvckZOYW1lfSB7aW5zdHJ1Y3RvckxOYW1lfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYTIgYmctd2hpdGUtOTAgZ3JvdyBwYTIgdy01MCc+XG4gICAgICAgICAgICAgICAgPGgzPkluc3RydWN0b3IgSUQ6PC9oMz5cbiAgICAgICAgICAgICAgICA8cD57aW5zdHJ1Y3RvcklEfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3NoYWRvdy0xIHBhMiBtdDQgdy0xMDAnPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0YyB3aGl0ZSc+IENvdXJzZXMgPC9oMT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Njcm9sbC14IHctMTAwIGNlbnRlciBzY3JvbGwteSBJY291cnNlIGZpdC1jb250ZW50IHBhMiBzaGFkb3ctMSBtYTMgZmxleCBmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3BhMyBtYTIgYmctbGlnaHQtZ3JheSBmaXQtY29udGVudCBibiBiZy13aGl0ZS03MCBmbGV4IGZsZXgtY29sdW1uIHNoYWRvdy0xJz5cbiAgICAgICAgICAgICAgICAgIDxRUkNvZGUgdmFsdWU9e3FyQ29kZVZhbHVlfSBjbGFzc05hbWU9J2NlbnRlciBncm93JyAvPlxuICAgICAgICAgICAgICAgICAgPGgyPkNTQyAxMDE8L2gyPlxuICAgICAgICAgICAgICAgICAgPHA+SW50cm8gdG8gY29tcHV0ZXIgc2NpZW5jZTwvcD5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdncm93IGJuIHBhMiBzaGFkb3ctMSBtdDEnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb29yZHMgPSBhd2FpdCBnZXRDb29yZHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlT246IERhdGUubm93KCkgKyAyICogNjAgKiAxMDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0cnVjdG9ySUQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvdXJzZTogJ1NFTjMxMScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvb3JkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICBzZXRRckNvZGVWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwaXJlT246IERhdGUubm93KCkgKyAyMCAqIDYwICogMTAwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdHJ1Y3RvcklELFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb3Vyc2U6ICdTRU4zMTEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjb29yZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1Rha2VBdHRlbmRhbmNlQnRuKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPiB0YWtlIGF0dGVuZGFuY2VcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgey8qIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTG9jYXRpb25DbGlja31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdncm93IGJuIHBhMiBzaGFkb3ctMSBtdDEnPlxuICAgICAgICAgICAgICAgICAgICBHZXQgTG9jYXRpb25cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8Lz5cbiAgICApO1xufVxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBJbnN0cnVjdG9yO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJRUkNvZGUiLCJTaWRlTmF2YmFyIiwiZ2V0Q29vcmRzIiwiSW5zdHJ1Y3RvciIsImluc3RydWN0b3JGTmFtZSIsImluc3RydWN0b3JMTmFtZSIsImluc3RydWN0b3JJRCIsInFyQ29kZVZhbHVlIiwic2V0UXJDb2RlVmFsdWUiLCJzaG93VGFrZUF0dGVuZGFuY2VCdG4iLCJzZXRTaG93VGFrZUF0dGVuZGFuY2VCdG4iLCJidXR0b24iLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInBhZGRpbmciLCJvbkNsaWNrIiwiY29vcmRzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJleHBpcmVPbiIsIkRhdGUiLCJub3ciLCJjb3Vyc2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNlY3Rpb24iLCJoMyIsInAiLCJ2YWx1ZSIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/Instructor.js\n"));

/***/ })

});