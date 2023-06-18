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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tachyons */ \"./node_modules/.pnpm/tachyons@4.12.0/node_modules/tachyons/css/tachyons.css\");\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SideNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SideNavbar */ \"./src/components/SideNavbar.js\");\n/* harmony import */ var No_components_biometrics_Biometrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! No/components/biometrics/Biometrics */ \"./src/components/biometrics/Biometrics.js\");\n/* harmony import */ var No_components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! No/components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var react_qr_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-qr-reader */ \"./node_modules/.pnpm/react-qr-reader@3.0.0-beta-1_biqbaboplfbrettd7655fr4n2y/node_modules/react-qr-reader/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var geolib_es_getPreciseDistance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! geolib/es/getPreciseDistance */ \"./node_modules/.pnpm/geolib@3.3.4/node_modules/geolib/es/getPreciseDistance.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Attendance() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [coords, setCoords] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [scanQR, setScanQR] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const biometricsVerified = ()=>{\n        return prompt(\"are you authorized?\");\n    };\n    const takeAttendance = async (data)=>{\n        const studCoords = await (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getCoords)();\n        const instructorCoords = data.coords;\n        if (data.expireOn < Date.now()) {\n            return alert(\"attendance has expired!!\");\n        }\n        alert((0,geolib_es_getPreciseDistance__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(studCoords, instructorCoords));\n        if ((0,geolib_es_getPreciseDistance__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(studCoords, instructorCoords, 1000) > 20 || !biometricsVerified()) {\n            setStatus(\"FAILED\");\n            return;\n        }\n        await fetch(\"/api/attendance\", {\n            method: \"post\",\n            body: {\n                ...data,\n                student: localStorage.getItem(student)\n            }\n        });\n    };\n    const callapi = async ()=>{\n        const res = await fetch(\"/api/hello\");\n        console.log(await res.json());\n    };\n    callapi();\n    if (status == \"SUCCESS\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"success\"\n        }, void 0, false, {\n            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n            lineNumber: 50,\n            columnNumber: 14\n        }, this);\n    } else if (status == \"FAILED\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"failed\"\n        }, void 0, false, {\n            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n            lineNumber: 52,\n            columnNumber: 14\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideNavbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            !scanQR ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: async ()=>{\n                    setScanQR(true);\n                },\n                children: \"take attendance\"\n            }, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                lineNumber: 60,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_reader__WEBPACK_IMPORTED_MODULE_5__.QrReader, {\n                        scanDelay: 300,\n                        constraints: {\n                            facingMode: \"environment\"\n                        },\n                        onResult: (result, error)=>{\n                            if (!!result) {\n                                setData(result);\n                                const data = JSON.parse(result.text);\n                                takeAttendance(data);\n                            }\n                            if (!!error) {\n                                console.info(error);\n                            }\n                        },\n                        style: {\n                            width: \"100%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: JSON.stringify(data)\n                    }, void 0, false, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: data ? new Date(data.timestamp).toISOString() : \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(No_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Attendance, \"AyE6SM4uK16LHU7505mwQf6Q2zY=\");\n_c = Attendance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Attendance);\nvar _c;\n$RefreshReg$(_c, \"Attendance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQXR0ZW5kYW5jZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0I7QUFDK0I7QUFDWTtBQUNuQjtBQUNDO0FBQ1Y7QUFDSTtBQUN5QjtBQUU5RCxTQUFTTyxhQUFhOztJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUMsSUFBSTtJQUNyQyxNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUMsSUFBSTtJQUN6QyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNLENBQUNVLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUM7SUFFckMsTUFBTVkscUJBQXFCLElBQU07UUFDL0IsT0FBT0MsT0FBTztJQUNoQjtJQUVBLE1BQU1DLGlCQUFpQixPQUFPVixPQUFPO1FBQ25DLE1BQU1XLGFBQWEsTUFBTWQsaURBQVNBO1FBQ2xDLE1BQU1lLG1CQUFtQlosS0FBS0UsTUFBTTtRQUNwQyxJQUFHRixLQUFLYSxRQUFRLEdBQUdDLEtBQUtDLEdBQUcsSUFBRztZQUM1QixPQUFPQyxNQUFNO1FBQ2YsQ0FBQztRQUNEQSxNQUFNbEIsd0VBQWtCQSxDQUFDYSxZQUFZQztRQUNyQyxJQUNFZCx3RUFBa0JBLENBQUNhLFlBQVlDLGtCQUFrQixRQUFRLE1BQ3pELENBQUNKLHNCQUNEO1lBQ0FELFVBQVU7WUFDVjtRQUNGLENBQUM7UUFDRCxNQUFNVSxNQUFNLG1CQUFtQjtZQUM3QkMsUUFBUTtZQUNSQyxNQUFNO2dCQUNKLEdBQUduQixJQUFJO2dCQUNQb0IsU0FBU0MsYUFBYUMsT0FBTyxDQUFDRjtZQUNoQztRQUNGO0lBQ0Y7SUFFQSxNQUFNRyxVQUFVLFVBQVU7UUFDeEIsTUFBTUMsTUFBTSxNQUFNUCxNQUFNO1FBQ3hCUSxRQUFRQyxHQUFHLENBQUMsTUFBTUYsSUFBSUcsSUFBSTtJQUM1QjtJQUNBSjtJQUVBLElBQUdqQixVQUFVLFdBQVU7UUFDckIscUJBQU8sOERBQUNzQjtzQkFBRTs7Ozs7O0lBQ1osT0FBTyxJQUFHdEIsVUFBVSxVQUFTO1FBQzNCLHFCQUFPLDhEQUFDc0I7c0JBQUU7Ozs7OztJQUNaLENBQUM7SUFFRCxxQkFDRTs7MEJBQ0UsOERBQUNwQyw4REFBVUE7Ozs7O1lBRVYsQ0FBQ1ksdUJBQ0EsOERBQUN5QjtnQkFDQ0MsU0FBUyxVQUFZO29CQUNuQnpCLFVBQVUsSUFBSTtnQkFDaEI7MEJBQUc7Ozs7O3FDQUlMOztrQ0FDRSw4REFBQ1YscURBQVFBO3dCQUNQb0MsV0FBVzt3QkFDWEMsYUFBYTs0QkFBRUMsWUFBWTt3QkFBYzt3QkFDekNDLFVBQVUsQ0FBQ0MsUUFBUUMsUUFBVTs0QkFDM0IsSUFBSSxDQUFDLENBQUNELFFBQVE7Z0NBQ1psQyxRQUFRa0M7Z0NBQ1IsTUFBTW5DLE9BQU9xQyxLQUFLQyxLQUFLLENBQUNILE9BQU9JLElBQUk7Z0NBQ25DN0IsZUFBZVY7NEJBQ2pCLENBQUM7NEJBRUQsSUFBSSxDQUFDLENBQUNvQyxPQUFPO2dDQUNYWCxRQUFRZSxJQUFJLENBQUNKOzRCQUNmLENBQUM7d0JBQ0g7d0JBQ0FLLE9BQU87NEJBQUVDLE9BQU87d0JBQU87Ozs7OztrQ0FFekIsOERBQUNkO2tDQUFHUyxLQUFLTSxTQUFTLENBQUMzQzs7Ozs7O2tDQUNuQiw4REFBQzRCO2tDQUFHNUIsT0FBTyxJQUFJYyxLQUFLZCxLQUFLNEMsU0FBUyxFQUFFQyxXQUFXLEtBQUssRUFBRTs7Ozs7Ozs0QkFFekQ7MEJBQ0QsOERBQUNuRCw0REFBTUE7Ozs7Ozs7QUFJZjtHQWxGU0s7S0FBQUE7QUFvRlQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL0F0dGVuZGFuY2UuanM/Y2UxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3RhY2h5b25zJztcbmltcG9ydCBTaWRlTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvU2lkZU5hdmJhcidcbmltcG9ydCBCaW9tZXRyaWNzIGZyb20gJ05vL2NvbXBvbmVudHMvYmlvbWV0cmljcy9CaW9tZXRyaWNzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnTm8vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHsgUXJSZWFkZXIgfSBmcm9tICdyZWFjdC1xci1yZWFkZXInO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRDb29yZHMgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgZ2V0UHJlY2lzZURpc3RhbmNlIGZyb20gJ2dlb2xpYi9lcy9nZXRQcmVjaXNlRGlzdGFuY2UnO1xuXG5mdW5jdGlvbiBBdHRlbmRhbmNlKCkge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjb29yZHMsIHNldENvb3Jkc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbc2NhblFSLCBzZXRTY2FuUVJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnN0IGJpb21ldHJpY3NWZXJpZmllZCA9ICgpID0+IHtcbiAgICAgIHJldHVybiBwcm9tcHQoXCJhcmUgeW91IGF1dGhvcml6ZWQ/XCIpXG4gICAgfVxuXG4gICAgY29uc3QgdGFrZUF0dGVuZGFuY2UgPSBhc3luYyAoZGF0YSk9PntcbiAgICAgIGNvbnN0IHN0dWRDb29yZHMgPSBhd2FpdCBnZXRDb29yZHMoKVxuICAgICAgY29uc3QgaW5zdHJ1Y3RvckNvb3JkcyA9IGRhdGEuY29vcmRzXG4gICAgICBpZihkYXRhLmV4cGlyZU9uIDwgRGF0ZS5ub3coKSl7XG4gICAgICAgIHJldHVybiBhbGVydChcImF0dGVuZGFuY2UgaGFzIGV4cGlyZWQhIVwiKVxuICAgICAgfVxuICAgICAgYWxlcnQoZ2V0UHJlY2lzZURpc3RhbmNlKHN0dWRDb29yZHMsIGluc3RydWN0b3JDb29yZHMsICkpO1xuICAgICAgaWYgKFxuICAgICAgICBnZXRQcmVjaXNlRGlzdGFuY2Uoc3R1ZENvb3JkcywgaW5zdHJ1Y3RvckNvb3JkcywgMTAwMCkgPiAyMCB8fFxuICAgICAgICAhYmlvbWV0cmljc1ZlcmlmaWVkKClcbiAgICAgICkge1xuICAgICAgICBzZXRTdGF0dXMoJ0ZBSUxFRCcpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhd2FpdCBmZXRjaCgnL2FwaS9hdHRlbmRhbmNlJywge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgc3R1ZGVudDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oc3R1ZGVudCksXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjYWxsYXBpID0gYXN5bmMgKCk9PntcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL2hlbGxvJylcbiAgICAgIGNvbnNvbGUubG9nKGF3YWl0IHJlcy5qc29uKCkpXG4gICAgfVxuICAgIGNhbGxhcGkoKVxuXG4gICAgaWYoc3RhdHVzID09ICdTVUNDRVNTJyl7XG4gICAgICByZXR1cm4gPHA+c3VjY2VzczwvcD5cbiAgICB9IGVsc2UgaWYoc3RhdHVzID09ICdGQUlMRUQnKXtcbiAgICAgIHJldHVybiA8cD5mYWlsZWQ8L3A+XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxTaWRlTmF2YmFyIC8+XG4gICAgICAgIHsvKiA8QmlvbWV0cmljcyAvPiAqL31cbiAgICAgICAgeyFzY2FuUVIgPyAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICBzZXRTY2FuUVIodHJ1ZSk7XG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgIHRha2UgYXR0ZW5kYW5jZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8UXJSZWFkZXJcbiAgICAgICAgICAgICAgc2NhbkRlbGF5PXszMDB9XG4gICAgICAgICAgICAgIGNvbnN0cmFpbnRzPXt7IGZhY2luZ01vZGU6ICdlbnZpcm9ubWVudCcgfX1cbiAgICAgICAgICAgICAgb25SZXN1bHQ9eyhyZXN1bHQsIGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCEhcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICBzZXREYXRhKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShyZXN1bHQudGV4dCk7XG4gICAgICAgICAgICAgICAgICB0YWtlQXR0ZW5kYW5jZShkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoISFlcnJvcikge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5pbmZvKGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8cD57SlNPTi5zdHJpbmdpZnkoZGF0YSl9PC9wPlxuICAgICAgICAgICAgPHA+e2RhdGEgPyBuZXcgRGF0ZShkYXRhLnRpbWVzdGFtcCkudG9JU09TdHJpbmcoKSA6ICcnfTwvcD5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC8+XG4gICAgKTtcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXR0ZW5kYW5jZTsiXSwibmFtZXMiOlsiU2lkZU5hdmJhciIsIkJpb21ldHJpY3MiLCJGb290ZXIiLCJRclJlYWRlciIsInVzZVN0YXRlIiwiZ2V0Q29vcmRzIiwiZ2V0UHJlY2lzZURpc3RhbmNlIiwiQXR0ZW5kYW5jZSIsImRhdGEiLCJzZXREYXRhIiwiY29vcmRzIiwic2V0Q29vcmRzIiwic2NhblFSIiwic2V0U2NhblFSIiwic3RhdHVzIiwic2V0U3RhdHVzIiwiYmlvbWV0cmljc1ZlcmlmaWVkIiwicHJvbXB0IiwidGFrZUF0dGVuZGFuY2UiLCJzdHVkQ29vcmRzIiwiaW5zdHJ1Y3RvckNvb3JkcyIsImV4cGlyZU9uIiwiRGF0ZSIsIm5vdyIsImFsZXJ0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwic3R1ZGVudCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjYWxsYXBpIiwicmVzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJwIiwiYnV0dG9uIiwib25DbGljayIsInNjYW5EZWxheSIsImNvbnN0cmFpbnRzIiwiZmFjaW5nTW9kZSIsIm9uUmVzdWx0IiwicmVzdWx0IiwiZXJyb3IiLCJKU09OIiwicGFyc2UiLCJ0ZXh0IiwiaW5mbyIsInN0eWxlIiwid2lkdGgiLCJzdHJpbmdpZnkiLCJ0aW1lc3RhbXAiLCJ0b0lTT1N0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/Attendance.js\n"));

/***/ })

});