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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tachyons */ \"./node_modules/.pnpm/tachyons@4.12.0/node_modules/tachyons/css/tachyons.css\");\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SideNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SideNavbar */ \"./src/components/SideNavbar.js\");\n/* harmony import */ var No_components_biometrics_Biometrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! No/components/biometrics/Biometrics */ \"./src/components/biometrics/Biometrics.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var react_qr_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-qr-reader */ \"./node_modules/.pnpm/react-qr-reader@3.0.0-beta-1_biqbaboplfbrettd7655fr4n2y/node_modules/react-qr-reader/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! geolib/es/getDistance */ \"./node_modules/.pnpm/geolib@3.3.4/node_modules/geolib/es/getDistance.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Attendance() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [coords, setCoords] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [scanQR, setScanQR] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const biometricsVerified = ()=>{\n        return confirm(\"are you authorized?\");\n    };\n    const takeAttendance = async (data)=>{\n        const studCoords = await (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getCoords)();\n        const instructorCoords = data.coords;\n        if (data.expireOn < Date.now()) {\n            return alert(\"attendance has expired!!\");\n        }\n        alert((0,geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(studCoords, instructorCoords));\n        if ((0,geolib_es_getDistance__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(studCoords, instructorCoords) > 20 || !biometricsVerified()) {\n            setStatus(\"FAILED\");\n            return;\n        }\n        await fetch(\"/api/attendance\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                ...data,\n                student: JSON.parse(localStorage.getItem(\"user\"))\n            }),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        setStatus(\"SUCCESS\");\n    };\n    // const callapi = async ()=>{\n    //   const res = await fetch('/api/hello')\n    //   console.log(await res.json())\n    // }\n    // callapi()\n    if (status == \"SUCCESS\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"success\"\n        }, void 0, false, {\n            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n            lineNumber: 55,\n            columnNumber: 14\n        }, this);\n    } else if (status == \"FAILED\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"failed\"\n        }, void 0, false, {\n            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n            lineNumber: 57,\n            columnNumber: 14\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideNavbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, this),\n            !scanQR ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: async ()=>{\n                    setScanQR(true);\n                },\n                children: \"take attendance\"\n            }, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                lineNumber: 66,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_reader__WEBPACK_IMPORTED_MODULE_5__.QrReader, {\n                    constraints: {\n                        facingMode: \"environment\"\n                    },\n                    onResult: (result, error)=>{\n                        if (!!result) {\n                            setData(result === null || result === void 0 ? void 0 : result.text);\n                        }\n                        if (!!error) {\n                            console.info(error);\n                        }\n                    },\n                    style: {\n                        width: \"100%\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                    lineNumber: 91,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Attendance, \"AyE6SM4uK16LHU7505mwQf6Q2zY=\");\n_c = Attendance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Attendance);\nvar _c;\n$RefreshReg$(_c, \"Attendance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQXR0ZW5kYW5jZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0I7QUFDK0I7QUFDWTtBQUNuQjtBQUNDO0FBQ1Y7QUFDSTtBQUNXO0FBRWhELFNBQVNPLGFBQWE7O0lBRWxCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3JDLE1BQU0sQ0FBQ00sUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3pDLE1BQU0sQ0FBQ1EsUUFBUUMsVUFBVSxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNWSxxQkFBcUIsSUFBTTtRQUMvQixPQUFPQyxRQUFRO0lBQ2pCO0lBRUEsTUFBTUMsaUJBQWlCLE9BQU9WLE9BQU87UUFDbkMsTUFBTVcsYUFBYSxNQUFNZCxpREFBU0E7UUFDbEMsTUFBTWUsbUJBQW1CWixLQUFLRSxNQUFNO1FBQ3BDLElBQUdGLEtBQUthLFFBQVEsR0FBR0MsS0FBS0MsR0FBRyxJQUFHO1lBQzVCLE9BQU9DLE1BQU07UUFDZixDQUFDO1FBQ0RBLE1BQU1sQixpRUFBV0EsQ0FBQ2EsWUFBWUM7UUFDOUIsSUFDRWQsaUVBQVdBLENBQUNhLFlBQVlDLG9CQUFvQixNQUM1QyxDQUFDSixzQkFDRDtZQUNBRCxVQUFVO1lBQ1Y7UUFDRixDQUFDO1FBQ0QsTUFBTVUsTUFBTSxtQkFBbUI7WUFDN0JDLFFBQVE7WUFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO2dCQUNuQixHQUFHckIsSUFBSTtnQkFDUHNCLFNBQVNGLEtBQUtHLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO1lBQzNDO1lBQ0FDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1FBQ0Y7UUFDQW5CLFVBQVU7SUFDWjtJQUVBLDhCQUE4QjtJQUM5QiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0lBQ2xDLElBQUk7SUFDSixZQUFZO0lBRVosSUFBR0QsVUFBVSxXQUFVO1FBQ3JCLHFCQUFPLDhEQUFDcUI7c0JBQUU7Ozs7OztJQUNaLE9BQU8sSUFBR3JCLFVBQVUsVUFBUztRQUMzQixxQkFBTyw4REFBQ3FCO3NCQUFFOzs7Ozs7SUFDWixDQUFDO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNwQyw4REFBVUE7Ozs7O1lBRVYsQ0FBQ1ksdUJBQ0EsOERBQUN5QjtnQkFDQ0MsU0FBUyxVQUFZO29CQUNuQnpCLFVBQVUsSUFBSTtnQkFDaEI7MEJBQUc7Ozs7O3FDQUlMOzBCQWtCRSw0RUFBQ1YscURBQVFBO29CQUNQb0MsYUFBYTt3QkFBRUMsWUFBWTtvQkFBYztvQkFDekNDLFVBQVUsQ0FBQ0MsUUFBUUMsUUFBVTt3QkFDM0IsSUFBSSxDQUFDLENBQUNELFFBQVE7NEJBQ1pqQyxRQUFRaUMsbUJBQUFBLG9CQUFBQSxLQUFBQSxJQUFBQSxPQUFRRSxJQUFJO3dCQUN0QixDQUFDO3dCQUVELElBQUksQ0FBQyxDQUFDRCxPQUFPOzRCQUNYRSxRQUFRQyxJQUFJLENBQUNIO3dCQUNmLENBQUM7b0JBQ0g7b0JBQ0FJLE9BQU87d0JBQUVDLE9BQU87b0JBQU87Ozs7Ozs2QkFHNUI7MEJBQ0QsOERBQUM5QywwREFBTUE7Ozs7Ozs7QUFJZjtHQXBHU0s7S0FBQUE7QUFzR1QsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0F0dGVuZGFuY2UuanM/Y2UxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3RhY2h5b25zJztcbmltcG9ydCBTaWRlTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZU5hdmJhcidcbmltcG9ydCBCaW9tZXRyaWNzIGZyb20gJ05vL2NvbXBvbmVudHMvYmlvbWV0cmljcy9CaW9tZXRyaWNzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHsgUXJSZWFkZXIgfSBmcm9tICdyZWFjdC1xci1yZWFkZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRDb29yZHMgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgZ2V0RGlzdGFuY2UgZnJvbSAnZ2VvbGliL2VzL2dldERpc3RhbmNlJztcblxuZnVuY3Rpb24gQXR0ZW5kYW5jZSgpIHtcblxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjb29yZHMsIHNldENvb3Jkc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc2NhblFSLCBzZXRTY2FuUVJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IGJpb21ldHJpY3NWZXJpZmllZCA9ICgpID0+IHtcbiAgICAgIHJldHVybiBjb25maXJtKFwiYXJlIHlvdSBhdXRob3JpemVkP1wiKVxuICAgIH1cblxuICAgIGNvbnN0IHRha2VBdHRlbmRhbmNlID0gYXN5bmMgKGRhdGEpPT57XG4gICAgICBjb25zdCBzdHVkQ29vcmRzID0gYXdhaXQgZ2V0Q29vcmRzKClcbiAgICAgIGNvbnN0IGluc3RydWN0b3JDb29yZHMgPSBkYXRhLmNvb3Jkc1xuICAgICAgaWYoZGF0YS5leHBpcmVPbiA8IERhdGUubm93KCkpe1xuICAgICAgICByZXR1cm4gYWxlcnQoXCJhdHRlbmRhbmNlIGhhcyBleHBpcmVkISFcIilcbiAgICAgIH1cbiAgICAgIGFsZXJ0KGdldERpc3RhbmNlKHN0dWRDb29yZHMsIGluc3RydWN0b3JDb29yZHMpKTtcbiAgICAgIGlmIChcbiAgICAgICAgZ2V0RGlzdGFuY2Uoc3R1ZENvb3JkcywgaW5zdHJ1Y3RvckNvb3JkcykgPiAyMCB8fFxuICAgICAgICAhYmlvbWV0cmljc1ZlcmlmaWVkKClcbiAgICAgICkge1xuICAgICAgICBzZXRTdGF0dXMoJ0ZBSUxFRCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhd2FpdCBmZXRjaCgnL2FwaS9hdHRlbmRhbmNlJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgc3R1ZGVudDogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSxcbiAgICAgICAgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBzZXRTdGF0dXMoJ1NVQ0NFU1MnKVxuICAgIH1cblxuICAgIC8vIGNvbnN0IGNhbGxhcGkgPSBhc3luYyAoKT0+e1xuICAgIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvaGVsbG8nKVxuICAgIC8vICAgY29uc29sZS5sb2coYXdhaXQgcmVzLmpzb24oKSlcbiAgICAvLyB9XG4gICAgLy8gY2FsbGFwaSgpXG5cbiAgICBpZihzdGF0dXMgPT0gJ1NVQ0NFU1MnKXtcbiAgICAgIHJldHVybiA8cD5zdWNjZXNzPC9wPlxuICAgIH0gZWxzZSBpZihzdGF0dXMgPT0gJ0ZBSUxFRCcpe1xuICAgICAgcmV0dXJuIDxwPmZhaWxlZDwvcD5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPGRpdj48L2Rpdj5cbiAgICAgICAgPFNpZGVOYXZiYXIgLz5cbiAgICAgICAgey8qIDxCaW9tZXRyaWNzIC8+ICovfVxuICAgICAgICB7IXNjYW5RUiA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNjYW5RUih0cnVlKTtcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgdGFrZSBhdHRlbmRhbmNlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiA8UXJSZWFkZXJcbiAgICAgICAgICAgICAgc2NhbkRlbGF5PXsxMDAwfVxuICAgICAgICAgICAgICBjb25zdHJhaW50cz17eyBmYWNpbmdNb2RlOiAnZW52aXJvbm1lbnQnIH19XG4gICAgICAgICAgICAgIG9uUmVzdWx0PXsocmVzdWx0LCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgc2V0U2NhblFSKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0LnRleHQpO1xuICAgICAgICAgICAgICAgICAgdGFrZUF0dGVuZGFuY2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEhZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgIDxRclJlYWRlclxuICAgICAgICAgICAgICBjb25zdHJhaW50cz17eyBmYWNpbmdNb2RlOiAnZW52aXJvbm1lbnQnIH19XG4gICAgICAgICAgICAgIG9uUmVzdWx0PXsocmVzdWx0LCBlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghIXJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgc2V0RGF0YShyZXN1bHQ/LnRleHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0ZW5kYW5jZTsiXSwibmFtZXMiOlsiU2lkZU5hdmJhciIsIkJpb21ldHJpY3MiLCJGb290ZXIiLCJRclJlYWRlciIsInVzZVN0YXRlIiwiZ2V0Q29vcmRzIiwiZ2V0RGlzdGFuY2UiLCJBdHRlbmRhbmNlIiwiZGF0YSIsInNldERhdGEiLCJjb29yZHMiLCJzZXRDb29yZHMiLCJzY2FuUVIiLCJzZXRTY2FuUVIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJiaW9tZXRyaWNzVmVyaWZpZWQiLCJjb25maXJtIiwidGFrZUF0dGVuZGFuY2UiLCJzdHVkQ29vcmRzIiwiaW5zdHJ1Y3RvckNvb3JkcyIsImV4cGlyZU9uIiwiRGF0ZSIsIm5vdyIsImFsZXJ0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0dWRlbnQiLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJoZWFkZXJzIiwicCIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjb25zdHJhaW50cyIsImZhY2luZ01vZGUiLCJvblJlc3VsdCIsInJlc3VsdCIsImVycm9yIiwidGV4dCIsImNvbnNvbGUiLCJpbmZvIiwic3R5bGUiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Attendance.js\n"));

/***/ })

});