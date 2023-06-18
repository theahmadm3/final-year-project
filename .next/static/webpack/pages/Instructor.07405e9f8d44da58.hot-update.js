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

/***/ "./src/components/SideNavbar.js":
/*!**************************************!*\
  !*** ./src/components/SideNavbar.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/.pnpm/next@13.3.0_biqbaboplfbrettd7655fr4n2y/node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Images_user_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/user.png */ \"./src/Images/user.png\");\n/* harmony import */ var _Images_course_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Images/course.png */ \"./src/Images/course.png\");\n/* harmony import */ var _Images_attendance_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Images/attendance.png */ \"./src/Images/attendance.png\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/.pnpm/next@13.3.0_biqbaboplfbrettd7655fr4n2y/node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Navbar() {\n    _s();\n    const [showNav, setShowNav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function toggleNav() {\n        setShowNav(!showNav);\n    }\n    function closeNav() {\n        setShowNav(false);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{});\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fl pa2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"nav-toggle shadow-1\",\n                onClick: toggleNav,\n                children: showNav ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n                    lineNumber: 23,\n                    columnNumber: 20\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    children: \"☰\"\n                }, void 0, false, {\n                    fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n                    lineNumber: 23,\n                    columnNumber: 43\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"nav \".concat(showNav ? \"show\" : \"\"),\n                children: JSON.parse(localStorage.getItem(\"user\")).type == \"INST\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    href: \"/Instructor\",\n                    className: \"tc flex flex-column menu-item pointer w-10 pt3 pb3 bg-gray white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            className: \"pl3\",\n                            src: _Images_attendance_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                            alt: \"user logo\",\n                            width: 70,\n                            height: 65\n                        }, void 0, false, {\n                            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this),\n                        \"Instructor\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"nav-close black bg-white\",\n                            onClick: closeNav,\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n                            lineNumber: 41,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            href: \"/User\",\n                            className: \"tc flex flex-column menu-item pointer w-10 pa3 bg-gray white\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _Images_user_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                    alt: \"user logo\",\n                                    width: 90,\n                                    height: 65\n                                }, void 0, false, {\n                                    fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 11\n                                }, this),\n                                \"Profile\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n                            lineNumber: 44,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            href: \"/Courses\",\n                            className: \"tc flex flex-column menu-item pointer w-10 pa3 bg-gray white\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _Images_course_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    alt: \"user logo\",\n                                    width: 90,\n                                    height: 65\n                                }, void 0, false, {\n                                    fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n                                    lineNumber: 53,\n                                    columnNumber: 11\n                                }, this),\n                                \"Courses\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n                            lineNumber: 50,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                            href: \"/Attendance\",\n                            className: \"tc flex flex-column menu-item pointer w-10 pt3 pb3 bg-gray white\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    className: \"pl3\",\n                                    src: _Images_attendance_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                    alt: \"user logo\",\n                                    width: 70,\n                                    height: 65\n                                }, void 0, false, {\n                                    fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 11\n                                }, this),\n                                \"Attendance\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n                            lineNumber: 56,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true)\n            }, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/components/SideNavbar.js\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"d6mkrMkELrbzjTknqXCbobR4vWU=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaWRlTmF2YmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3BCO0FBQ087QUFDSTtBQUNXO0FBQ3hCO0FBRzdCLFNBQVNRLFNBQVM7O0lBQ2hCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLFNBQVNTLFlBQVk7UUFDbkJELFdBQVcsQ0FBQ0Q7SUFDZDtJQUNBLFNBQVNHLFdBQVc7UUFDbEJGLFdBQVcsS0FBSztJQUNsQjtJQUVBVCxnREFBU0EsQ0FBQyxJQUFJLENBQUM7SUFFZixxQkFDRSw4REFBQ1k7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPRCxXQUFVO2dCQUFzQkUsU0FBU0w7MEJBQzlDRix3QkFBVSw4REFBQ1E7OEJBQUs7Ozs7O3lDQUFpQiw4REFBQ0E7OEJBQUs7Ozs7O3dCQUFjOzs7Ozs7MEJBRXhELDhEQUFDQztnQkFBSUosV0FBVyxPQUE2QixPQUF0QkwsVUFBVSxTQUFTLEVBQUU7MEJBQ3pDVSxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQyxTQUFTQyxJQUFJLElBQUksdUJBQ2hELDhEQUFDaEIsa0RBQUlBO29CQUNIaUIsTUFBSztvQkFDTFYsV0FBVTs7c0NBQ1YsOERBQUNYLG1EQUFLQTs0QkFDSlcsV0FBVTs0QkFDVlcsS0FBS25CLDhEQUFhQTs0QkFDbEJvQixLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzs7Ozs7d0JBQ1I7Ozs7Ozt5Q0FJTjs7c0NBQ0EsOERBQUNiOzRCQUFPRCxXQUFVOzRCQUEyQkUsU0FBU0o7c0NBQVU7Ozs7OztzQ0FHaEUsOERBQUNMLGtEQUFJQTs0QkFDSGlCLE1BQUs7NEJBQ0xWLFdBQVU7OzhDQUNWLDhEQUFDWCxtREFBS0E7b0NBQUNzQixLQUFLckIsd0RBQUlBO29DQUFFc0IsS0FBSTtvQ0FBWUMsT0FBTztvQ0FBSUMsUUFBUTs7Ozs7O2dDQUFNOzs7Ozs7O3NDQUc3RCw4REFBQ3JCLGtEQUFJQTs0QkFDSGlCLE1BQUs7NEJBQ0xWLFdBQVU7OzhDQUNWLDhEQUFDWCxtREFBS0E7b0NBQUNzQixLQUFLcEIsMERBQU1BO29DQUFFcUIsS0FBSTtvQ0FBWUMsT0FBTztvQ0FBSUMsUUFBUTs7Ozs7O2dDQUFNOzs7Ozs7O3NDQUcvRCw4REFBQ3JCLGtEQUFJQTs0QkFDSGlCLE1BQUs7NEJBQ0xWLFdBQVU7OzhDQUNWLDhEQUFDWCxtREFBS0E7b0NBQ0pXLFdBQVU7b0NBQ1ZXLEtBQUtuQiw4REFBYUE7b0NBQ2xCb0IsS0FBSTtvQ0FDSkMsT0FBTztvQ0FDUEMsUUFBUTs7Ozs7O2dDQUNSOzs7Ozs7OztnQ0FHRDs7Ozs7Ozs7Ozs7O0FBS1g7R0FoRVNwQjtLQUFBQTtBQWtFVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlTmF2YmFyLmpzPzk3ZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgVXNlciBmcm9tICcuLi9JbWFnZXMvdXNlci5wbmcnO1xuaW1wb3J0IENvdXJzZSBmcm9tICcuLi9JbWFnZXMvY291cnNlLnBuZyc7XG5pbXBvcnQgQXR0ZW5kYW5jZVBpYyBmcm9tICcuLi9JbWFnZXMvYXR0ZW5kYW5jZS5wbmcnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuXG5mdW5jdGlvbiBOYXZiYXIoKSB7XG4gIGNvbnN0IFtzaG93TmF2LCBzZXRTaG93TmF2XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgZnVuY3Rpb24gdG9nZ2xlTmF2KCkge1xuICAgIHNldFNob3dOYXYoIXNob3dOYXYpO1xuICB9XG4gIGZ1bmN0aW9uIGNsb3NlTmF2KCkge1xuICAgIHNldFNob3dOYXYoZmFsc2UpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpPT57fSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbCBwYTInPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J25hdi10b2dnbGUgc2hhZG93LTEnIG9uQ2xpY2s9e3RvZ2dsZU5hdn0+XG4gICAgICAgIHtzaG93TmF2ID8gPHNwYW4+JnRpbWVzOzwvc3Bhbj4gOiA8c3Bhbj4mIzk3NzY7PC9zcGFuPn1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPG5hdiBjbGFzc05hbWU9e2BuYXYgJHtzaG93TmF2ID8gJ3Nob3cnIDogJyd9YH0+XG4gICAgICAgIHtKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpLnR5cGUgPT0gJ0lOU1QnID8gKFxuICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICBocmVmPScvSW5zdHJ1Y3RvcidcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ndGMgZmxleCBmbGV4LWNvbHVtbiBtZW51LWl0ZW0gcG9pbnRlciB3LTEwIHB0MyBwYjMgYmctZ3JheSB3aGl0ZSc+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdwbDMnXG4gICAgICAgICAgICAgIHNyYz17QXR0ZW5kYW5jZVBpY31cbiAgICAgICAgICAgICAgYWx0PSd1c2VyIGxvZ28nXG4gICAgICAgICAgICAgIHdpZHRoPXs3MH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs2NX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICBJbnN0cnVjdG9yXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICApIDogXG4gICAgICAgIDw+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSduYXYtY2xvc2UgYmxhY2sgYmctd2hpdGUnIG9uQ2xpY2s9e2Nsb3NlTmF2fT5cbiAgICAgICAgICBYXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9Jy9Vc2VyJ1xuICAgICAgICAgIGNsYXNzTmFtZT0ndGMgZmxleCBmbGV4LWNvbHVtbiBtZW51LWl0ZW0gcG9pbnRlciB3LTEwIHBhMyBiZy1ncmF5IHdoaXRlJz5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtVc2VyfSBhbHQ9J3VzZXIgbG9nbycgd2lkdGg9ezkwfSBoZWlnaHQ9ezY1fSAvPlxuICAgICAgICAgIFByb2ZpbGVcbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9Jy9Db3Vyc2VzJ1xuICAgICAgICAgIGNsYXNzTmFtZT0ndGMgZmxleCBmbGV4LWNvbHVtbiBtZW51LWl0ZW0gcG9pbnRlciB3LTEwIHBhMyBiZy1ncmF5IHdoaXRlJz5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtDb3Vyc2V9IGFsdD0ndXNlciBsb2dvJyB3aWR0aD17OTB9IGhlaWdodD17NjV9IC8+XG4gICAgICAgICAgQ291cnNlc1xuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgaHJlZj0nL0F0dGVuZGFuY2UnXG4gICAgICAgICAgY2xhc3NOYW1lPSd0YyBmbGV4IGZsZXgtY29sdW1uIG1lbnUtaXRlbSBwb2ludGVyIHctMTAgcHQzIHBiMyBiZy1ncmF5IHdoaXRlJz5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncGwzJ1xuICAgICAgICAgICAgc3JjPXtBdHRlbmRhbmNlUGljfVxuICAgICAgICAgICAgYWx0PSd1c2VyIGxvZ28nXG4gICAgICAgICAgICB3aWR0aD17NzB9XG4gICAgICAgICAgICBoZWlnaHQ9ezY1fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgQXR0ZW5kYW5jZVxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvPlxuICAgICAgICB9XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIlVzZXIiLCJDb3Vyc2UiLCJBdHRlbmRhbmNlUGljIiwiTGluayIsIk5hdmJhciIsInNob3dOYXYiLCJzZXRTaG93TmF2IiwidG9nZ2xlTmF2IiwiY2xvc2VOYXYiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwic3BhbiIsIm5hdiIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0eXBlIiwiaHJlZiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/SideNavbar.js\n"));

/***/ })

});