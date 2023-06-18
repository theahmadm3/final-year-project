"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Attendance",{

/***/ "./src/pages/Attendance.js":
/*!*********************************!*\
  !*** ./src/pages/Attendance.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tachyons */ \"./node_modules/.pnpm/tachyons@4.12.0/node_modules/tachyons/css/tachyons.css\");\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SideNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SideNavbar */ \"./src/components/SideNavbar.js\");\n/* harmony import */ var No_components_biometrics_Biometrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! No/components/biometrics/Biometrics */ \"./src/components/biometrics/Biometrics.js\");\n/* harmony import */ var No_components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! No/components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var react_qr_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-qr-reader */ \"./node_modules/.pnpm/react-qr-reader@3.0.0-beta-1_biqbaboplfbrettd7655fr4n2y/node_modules/react-qr-reader/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! geolib/es/getDistance */ \"./node_modules/.pnpm/geolib@3.3.4/node_modules/geolib/es/getDistance.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Attendance() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [coords, setCoords] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [scanQR, setScanQR] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const biometricsVerified = ()=>{\n        return prompt(\"are you authorized?\");\n    };\n    const takeAttendance = async (data)=>{\n        const studCoords = await (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getCoords)();\n        const instructorCoords = data.coords;\n        if (data.expireOn < Date.now()) {\n            return alert(\"attendance has expired!!\");\n        }\n        alert(getPreciseDistance(studCoords, instructorCoords));\n        if ((0,geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(studCoords, instructorCoords) > 20 || !biometricsVerified()) {\n            setStatus(\"FAILED\");\n            return;\n        }\n        await fetch(\"/api/attendance\", {\n            method: \"post\",\n            body: {\n                ...data,\n                student: localStorage.getItem(student)\n            }\n        });\n    };\n    const callapi = async ()=>{\n        const res = await fetch(\"/api/hello\");\n        console.log(await res.json());\n    };\n    callapi();\n    if (status == \"SUCCESS\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"success\"\n        }, void 0, false, {\n            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n            lineNumber: 50,\n            columnNumber: 14\n        }, this);\n    } else if (status == \"FAILED\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"failed\"\n        }, void 0, false, {\n            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n            lineNumber: 52,\n            columnNumber: 14\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideNavbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            !scanQR ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: async ()=>{\n                    setScanQR(true);\n                },\n                children: \"take attendance\"\n            }, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                lineNumber: 60,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_reader__WEBPACK_IMPORTED_MODULE_5__.QrReader, {\n                        scanDelay: 300,\n                        constraints: {\n                            facingMode: \"environment\"\n                        },\n                        onResult: (result, error)=>{\n                            if (!!result) {\n                                setData(result);\n                                const data = JSON.parse(result.text);\n                                takeAttendance(data);\n                            }\n                            if (!!error) {\n                                console.info(error);\n                            }\n                        },\n                        style: {\n                            width: \"100%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: JSON.stringify(data)\n                    }, void 0, false, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: data ? new Date(data.timestamp).toISOString() : \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(No_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Attendance, \"AyE6SM4uK16LHU7505mwQf6Q2zY=\");\n_c = Attendance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Attendance);\nvar _c;\n$RefreshReg$(_c, \"Attendance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQXR0ZW5kYW5jZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0I7QUFDK0I7QUFDWTtBQUNuQjtBQUNDO0FBQ1Y7QUFDSTtBQUNXO0FBRWhELFNBQVNPLGFBQWE7O0lBQ2xCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3pDLE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNWSxxQkFBcUIsSUFBTTtRQUMvQixPQUFPQyxPQUFPO0lBQ2hCO0lBRUEsTUFBTUMsaUJBQWlCLE9BQU9WLE9BQU87UUFDbkMsTUFBTVcsYUFBYSxNQUFNZCxpREFBU0E7UUFDbEMsTUFBTWUsbUJBQW1CWixLQUFLRSxNQUFNO1FBQ3BDLElBQUdGLEtBQUthLFFBQVEsR0FBR0MsS0FBS0MsR0FBRyxJQUFHO1lBQzVCLE9BQU9DLE1BQU07UUFDZixDQUFDO1FBQ0RBLE1BQU1DLG1CQUFtQk4sWUFBWUM7UUFDckMsSUFDRWQsaUVBQVdBLENBQUNhLFlBQVlDLG9CQUFvQixNQUM1QyxDQUFDSixzQkFDRDtZQUNBRCxVQUFVO1lBQ1Y7UUFDRixDQUFDO1FBQ0QsTUFBTVcsTUFBTSxtQkFBbUI7WUFDN0JDLFFBQVE7WUFDUkMsTUFBTTtnQkFDSixHQUFHcEIsSUFBSTtnQkFDUHFCLFNBQVNDLGFBQWFDLE9BQU8sQ0FBQ0Y7WUFDaEM7UUFDRjtJQUNGO0lBRUEsTUFBTUcsVUFBVSxVQUFVO1FBQ3hCLE1BQU1DLE1BQU0sTUFBTVAsTUFBTTtRQUN4QlEsUUFBUUMsR0FBRyxDQUFDLE1BQU1GLElBQUlHLElBQUk7SUFDNUI7SUFDQUo7SUFFQSxJQUFHbEIsVUFBVSxXQUFVO1FBQ3JCLHFCQUFPLDhEQUFDdUI7c0JBQUU7Ozs7OztJQUNaLE9BQU8sSUFBR3ZCLFVBQVUsVUFBUztRQUMzQixxQkFBTyw4REFBQ3VCO3NCQUFFOzs7Ozs7SUFDWixDQUFDO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDckMsOERBQVVBOzs7OztZQUVWLENBQUNZLHVCQUNBLDhEQUFDMEI7Z0JBQ0NDLFNBQVMsVUFBWTtvQkFDbkIxQixVQUFVLElBQUk7Z0JBQ2hCOzBCQUFHOzs7OztxQ0FJTDs7a0NBQ0UsOERBQUNWLHFEQUFRQTt3QkFDUHFDLFdBQVc7d0JBQ1hDLGFBQWE7NEJBQUVDLFlBQVk7d0JBQWM7d0JBQ3pDQyxVQUFVLENBQUNDLFFBQVFDLFFBQVU7NEJBQzNCLElBQUksQ0FBQyxDQUFDRCxRQUFRO2dDQUNabkMsUUFBUW1DO2dDQUNSLE1BQU1wQyxPQUFPc0MsS0FBS0MsS0FBSyxDQUFDSCxPQUFPSSxJQUFJO2dDQUNuQzlCLGVBQWVWOzRCQUNqQixDQUFDOzRCQUVELElBQUksQ0FBQyxDQUFDcUMsT0FBTztnQ0FDWFgsUUFBUWUsSUFBSSxDQUFDSjs0QkFDZixDQUFDO3dCQUNIO3dCQUNBSyxPQUFPOzRCQUFFQyxPQUFPO3dCQUFPOzs7Ozs7a0NBRXpCLDhEQUFDZDtrQ0FBR1MsS0FBS00sU0FBUyxDQUFDNUM7Ozs7OztrQ0FDbkIsOERBQUM2QjtrQ0FBRzdCLE9BQU8sSUFBSWMsS0FBS2QsS0FBSzZDLFNBQVMsRUFBRUMsV0FBVyxLQUFLLEVBQUU7Ozs7Ozs7NEJBRXpEOzBCQUNELDhEQUFDcEQsNERBQU1BOzs7Ozs7O0FBSWY7R0FsRlNLO0tBQUFBO0FBb0ZULCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9BdHRlbmRhbmNlLmpzP2NlMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd0YWNoeW9ucyc7XG5pbXBvcnQgU2lkZU5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGVOYXZiYXInXG5pbXBvcnQgQmlvbWV0cmljcyBmcm9tICdOby9jb21wb25lbnRzL2Jpb21ldHJpY3MvQmlvbWV0cmljcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJ05vL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7IFFyUmVhZGVyIH0gZnJvbSAncmVhY3QtcXItcmVhZGVyJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0Q29vcmRzIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IGdldERpc3RhbmNlIGZyb20gJ2dlb2xpYi9lcy9nZXREaXN0YW5jZSc7XG5cbmZ1bmN0aW9uIEF0dGVuZGFuY2UoKSB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Nvb3Jkcywgc2V0Q29vcmRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzY2FuUVIsIHNldFNjYW5RUl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgYmlvbWV0cmljc1ZlcmlmaWVkID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb21wdChcImFyZSB5b3UgYXV0aG9yaXplZD9cIilcbiAgICB9XG5cbiAgICBjb25zdCB0YWtlQXR0ZW5kYW5jZSA9IGFzeW5jIChkYXRhKT0+e1xuICAgICAgY29uc3Qgc3R1ZENvb3JkcyA9IGF3YWl0IGdldENvb3JkcygpXG4gICAgICBjb25zdCBpbnN0cnVjdG9yQ29vcmRzID0gZGF0YS5jb29yZHNcbiAgICAgIGlmKGRhdGEuZXhwaXJlT24gPCBEYXRlLm5vdygpKXtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KFwiYXR0ZW5kYW5jZSBoYXMgZXhwaXJlZCEhXCIpXG4gICAgICB9XG4gICAgICBhbGVydChnZXRQcmVjaXNlRGlzdGFuY2Uoc3R1ZENvb3JkcywgaW5zdHJ1Y3RvckNvb3JkcykpO1xuICAgICAgaWYgKFxuICAgICAgICBnZXREaXN0YW5jZShzdHVkQ29vcmRzLCBpbnN0cnVjdG9yQ29vcmRzKSA+IDIwIHx8XG4gICAgICAgICFiaW9tZXRyaWNzVmVyaWZpZWQoKVxuICAgICAgKSB7XG4gICAgICAgIHNldFN0YXR1cygnRkFJTEVEJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGF3YWl0IGZldGNoKCcvYXBpL2F0dGVuZGFuY2UnLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICBzdHVkZW50OiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdHVkZW50KSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGxhcGkgPSBhc3luYyAoKT0+e1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvaGVsbG8nKVxuICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzLmpzb24oKSlcbiAgICB9XG4gICAgY2FsbGFwaSgpXG5cbiAgICBpZihzdGF0dXMgPT0gJ1NVQ0NFU1MnKXtcbiAgICAgIHJldHVybiA8cD5zdWNjZXNzPC9wPlxuICAgIH0gZWxzZSBpZihzdGF0dXMgPT0gJ0ZBSUxFRCcpe1xuICAgICAgcmV0dXJuIDxwPmZhaWxlZDwvcD5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFNpZGVOYXZiYXIgLz5cbiAgICAgICAgey8qIDxCaW9tZXRyaWNzIC8+ICovfVxuICAgICAgICB7IXNjYW5RUiA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNjYW5RUih0cnVlKTtcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgdGFrZSBhdHRlbmRhbmNlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxRclJlYWRlclxuICAgICAgICAgICAgICBzY2FuRGVsYXk9ezMwMH1cbiAgICAgICAgICAgICAgY29uc3RyYWludHM9e3sgZmFjaW5nTW9kZTogJ2Vudmlyb25tZW50JyB9fVxuICAgICAgICAgICAgICBvblJlc3VsdD17KHJlc3VsdCwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdC50ZXh0KTtcbiAgICAgICAgICAgICAgICAgIHRha2VBdHRlbmRhbmNlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwPntKU09OLnN0cmluZ2lmeShkYXRhKX08L3A+XG4gICAgICAgICAgICA8cD57ZGF0YSA/IG5ldyBEYXRlKGRhdGEudGltZXN0YW1wKS50b0lTT1N0cmluZygpIDogJyd9PC9wPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8Lz5cbiAgICApO1xuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBBdHRlbmRhbmNlOyJdLCJuYW1lcyI6WyJTaWRlTmF2YmFyIiwiQmlvbWV0cmljcyIsIkZvb3RlciIsIlFyUmVhZGVyIiwidXNlU3RhdGUiLCJnZXRDb29yZHMiLCJnZXREaXN0YW5jZSIsIkF0dGVuZGFuY2UiLCJkYXRhIiwic2V0RGF0YSIsImNvb3JkcyIsInNldENvb3JkcyIsInNjYW5RUiIsInNldFNjYW5RUiIsInN0YXR1cyIsInNldFN0YXR1cyIsImJpb21ldHJpY3NWZXJpZmllZCIsInByb21wdCIsInRha2VBdHRlbmRhbmNlIiwic3R1ZENvb3JkcyIsImluc3RydWN0b3JDb29yZHMiLCJleHBpcmVPbiIsIkRhdGUiLCJub3ciLCJhbGVydCIsImdldFByZWNpc2VEaXN0YW5jZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInN0dWRlbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FsbGFwaSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzY2FuRGVsYXkiLCJjb25zdHJhaW50cyIsImZhY2luZ01vZGUiLCJvblJlc3VsdCIsInJlc3VsdCIsImVycm9yIiwiSlNPTiIsInBhcnNlIiwidGV4dCIsImluZm8iLCJzdHlsZSIsIndpZHRoIiwic3RyaW5naWZ5IiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Attendance.js\n"));

/***/ })

});