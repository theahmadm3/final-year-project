"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/AttendanceList",{

/***/ "./src/pages/AttendanceList.js":
/*!*************************************!*\
  !*** ./src/pages/AttendanceList.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AttendanceList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tachyons */ \"./node_modules/.pnpm/tachyons@4.12.0/node_modules/tachyons/css/tachyons.css\");\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_SideNavbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SideNavbar */ \"./src/components/SideNavbar.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction AttendanceList() {\n    _s();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    console.log(list);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const res = await fetch(\"/api/attendance\");\n                const data = await res.json();\n                setList(data);\n            } catch (error) {\n                console.error(\"Error fetching attendance data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideNavbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/AttendanceList.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"tc w-100 mw8 center ba b--black-20 br3 mt4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        className: \"bg-light-gray\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"pa3\",\n                                    children: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/AttendanceList.js\",\n                                    lineNumber: 29,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"pa3\",\n                                    children: \"First Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/AttendanceList.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"pa3\",\n                                    children: \"Last Name\"\n                                }, void 0, false, {\n                                    fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/AttendanceList.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/AttendanceList.js\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/AttendanceList.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: list.map((e)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"pa3\",\n                                        children: e.id\n                                    }, void 0, false, {\n                                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/AttendanceList.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"pa3\",\n                                        children: e.firstName\n                                    }, void 0, false, {\n                                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/AttendanceList.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        className: \"pa3\",\n                                        children: e.lastName\n                                    }, void 0, false, {\n                                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/AttendanceList.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, e.id, true, {\n                                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/AttendanceList.js\",\n                                lineNumber: 36,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/AttendanceList.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/AttendanceList.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(AttendanceList, \"ZBNfaudzy8bVxb8UgkyyMnLdlWY=\");\n_c = AttendanceList;\nvar _c;\n$RefreshReg$(_c, \"AttendanceList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQXR0ZW5kYW5jZUxpc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNqQztBQUNnQztBQUVuQyxTQUFTSSxpQkFBaUI7O0lBQ3ZDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ25DSyxRQUFRQyxHQUFHLENBQUNIO0lBRVpKLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNUSxZQUFZLFVBQVk7WUFDNUIsSUFBSTtnQkFDRixNQUFNQyxNQUFNLE1BQU1DLE1BQU07Z0JBQ3hCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtnQkFDM0JQLFFBQVFNO1lBQ1YsRUFBRSxPQUFPRSxPQUFPO2dCQUNkUCxRQUFRTyxLQUFLLENBQUMsbUNBQW1DQTtZQUNuRDtRQUNGO1FBRUFMO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0U7OzBCQUNFLDhEQUFDTiw4REFBVUE7Ozs7OzBCQUNYLDhEQUFDWTtnQkFBTUMsV0FBVTs7a0NBQ2YsOERBQUNDO3dCQUFNRCxXQUFVO2tDQUNmLDRFQUFDRTs7OENBQ0MsOERBQUNDO29DQUFHSCxXQUFVOzhDQUFNOzs7Ozs7OENBQ3BCLDhEQUFDRztvQ0FBR0gsV0FBVTs4Q0FBTTs7Ozs7OzhDQUNwQiw4REFBQ0c7b0NBQUdILFdBQVU7OENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUd4Qiw4REFBQ0k7a0NBQ0VmLEtBQUtnQixHQUFHLENBQUMsQ0FBQ0Msa0JBQ1QsOERBQUNKOztrREFDQyw4REFBQ0s7d0NBQUdQLFdBQVU7a0RBQU9NLEVBQUVFLEVBQUU7Ozs7OztrREFDekIsOERBQUNEO3dDQUFHUCxXQUFVO2tEQUFPTSxFQUFFRyxTQUFTOzs7Ozs7a0RBQ2hDLDhEQUFDRjt3Q0FBR1AsV0FBVTtrREFBT00sRUFBRUksUUFBUTs7Ozs7OzsrQkFIeEJKLEVBQUVFLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVV6QixDQUFDO0dBekN1QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9BdHRlbmRhbmNlTGlzdC5qcz9jZDMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICd0YWNoeW9ucyc7XG5pbXBvcnQgU2lkZU5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGVOYXZiYXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdHRlbmRhbmNlTGlzdCgpIHtcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zb2xlLmxvZyhsaXN0KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvYXR0ZW5kYW5jZScpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgc2V0TGlzdChkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGF0dGVuZGFuY2UgZGF0YTonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNpZGVOYXZiYXIgLz5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9J3RjIHctMTAwIG13OCBjZW50ZXIgYmEgYi0tYmxhY2stMjAgYnIzIG10NCc+XG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9J2JnLWxpZ2h0LWdyYXknPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3BhMyc+SUQ8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0ncGEzJz5GaXJzdCBOYW1lPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J3BhMyc+TGFzdCBOYW1lPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2xpc3QubWFwKChlKSA9PiAoXG4gICAgICAgICAgICA8dHIga2V5PXtlLmlkfT5cbiAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0ncGEzJz57ZS5pZH08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwYTMnPntlLmZpcnN0TmFtZX08L3RkPlxuICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdwYTMnPntlLmxhc3ROYW1lfTwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2lkZU5hdmJhciIsIkF0dGVuZGFuY2VMaXN0IiwibGlzdCIsInNldExpc3QiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2hEYXRhIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImVycm9yIiwidGFibGUiLCJjbGFzc05hbWUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsImUiLCJ0ZCIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/AttendanceList.js\n"));

/***/ })

});