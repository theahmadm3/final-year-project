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

/***/ "./node_modules/.pnpm/geolib@3.3.4/node_modules/geolib/es/getPreciseDistance.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/geolib@3.3.4/node_modules/geolib/es/getPreciseDistance.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval(__webpack_require__.ts("Object.defineProperty(exports, \"__esModule\", ({value:true}));exports[\"default\"]=void 0;var _getLatitude=_interopRequireDefault(__webpack_require__(/*! ./getLatitude */ \"./node_modules/.pnpm/geolib@3.3.4/node_modules/geolib/es/getLatitude.js\"));var _getLongitude=_interopRequireDefault(__webpack_require__(/*! ./getLongitude */ \"./node_modules/.pnpm/geolib@3.3.4/node_modules/geolib/es/getLongitude.js\"));var _toRad=_interopRequireDefault(__webpack_require__(/*! ./toRad */ \"./node_modules/.pnpm/geolib@3.3.4/node_modules/geolib/es/toRad.js\"));var _constants=__webpack_require__(/*! ./constants */ \"./node_modules/.pnpm/geolib@3.3.4/node_modules/geolib/es/constants.js\");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}var getDistance=function getDistance(start,end){var accuracy=arguments.length>2&&arguments[2]!==undefined?arguments[2]:1;accuracy=typeof accuracy!==\"undefined\"&&!isNaN(accuracy)?accuracy:1;var startLat=(0,_getLatitude.default)(start);var startLon=(0,_getLongitude.default)(start);var endLat=(0,_getLatitude.default)(end);var endLon=(0,_getLongitude.default)(end);var b=6356752.314245;var ellipsoidParams=1/298.257223563;var L=(0,_toRad.default)(endLon-startLon);var cosSigma;var sigma;var sinAlpha;var cosSqAlpha;var cos2SigmaM;var sinSigma;var U1=Math.atan((1-ellipsoidParams)*Math.tan((0,_toRad.default)(parseFloat(startLat))));var U2=Math.atan((1-ellipsoidParams)*Math.tan((0,_toRad.default)(parseFloat(endLat))));var sinU1=Math.sin(U1);var cosU1=Math.cos(U1);var sinU2=Math.sin(U2);var cosU2=Math.cos(U2);var lambda=L;var lambdaP;var iterLimit=100;do{var sinLambda=Math.sin(lambda);var cosLambda=Math.cos(lambda);sinSigma=Math.sqrt(cosU2*sinLambda*(cosU2*sinLambda)+(cosU1*sinU2-sinU1*cosU2*cosLambda)*(cosU1*sinU2-sinU1*cosU2*cosLambda));if(sinSigma===0){return 0}cosSigma=sinU1*sinU2+cosU1*cosU2*cosLambda;sigma=Math.atan2(sinSigma,cosSigma);sinAlpha=cosU1*cosU2*sinLambda/sinSigma;cosSqAlpha=1-sinAlpha*sinAlpha;cos2SigmaM=cosSigma-2*sinU1*sinU2/cosSqAlpha;if(isNaN(cos2SigmaM)){cos2SigmaM=0}var C=ellipsoidParams/16*cosSqAlpha*(4+ellipsoidParams*(4-3*cosSqAlpha));lambdaP=lambda;lambda=L+(1-C)*ellipsoidParams*sinAlpha*(sigma+C*sinSigma*(cos2SigmaM+C*cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)))}while(Math.abs(lambda-lambdaP)>1e-12&&--iterLimit>0);if(iterLimit===0){return NaN}var uSq=cosSqAlpha*(_constants.earthRadius*_constants.earthRadius-b*b)/(b*b);var A=1+uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));var B=uSq/1024*(256+uSq*(-128+uSq*(74-47*uSq)));var deltaSigma=B*sinSigma*(cos2SigmaM+B/4*(cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)-B/6*cos2SigmaM*(-3+4*sinSigma*sinSigma)*(-3+4*cos2SigmaM*cos2SigmaM)));var distance=b*A*(sigma-deltaSigma);return Math.round(distance/accuracy)*accuracy};var _default=getDistance;exports[\"default\"]=_default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvLnBucG0vZ2VvbGliQDMuMy40L25vZGVfbW9kdWxlcy9nZW9saWIvZXMvZ2V0UHJlY2lzZURpc3RhbmNlLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhLDhDQUEyQyxDQUFDLFdBQVcsRUFBQyxDQUFDLGtCQUFlLFFBQVEsd0NBQXdDLG1CQUFPLENBQUMsOEZBQWUsR0FBRyx5Q0FBeUMsbUJBQU8sQ0FBQyxnR0FBZ0IsR0FBRyxrQ0FBa0MsbUJBQU8sQ0FBQyxrRkFBUyxHQUFHLGVBQWUsbUJBQU8sQ0FBQywwRkFBYSxFQUFFLHFDQUFxQyxnQ0FBZ0MsYUFBYSxnREFBZ0QseUVBQXlFLG9FQUFvRSw2Q0FBNkMsOENBQThDLHlDQUF5QywwQ0FBMEMscUJBQXFCLG9DQUFvQywwQ0FBMEMsYUFBYSxVQUFVLGFBQWEsZUFBZSxlQUFlLGFBQWEseUZBQXlGLHVGQUF1Rix1QkFBdUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsYUFBYSxZQUFZLGtCQUFrQixHQUFHLCtCQUErQiwrQkFBK0IsOEhBQThILGlCQUFpQixTQUFTLDJDQUEyQyxvQ0FBb0Msd0NBQXdDLCtCQUErQiw2Q0FBNkMsc0JBQXNCLGFBQWEseUVBQXlFLGVBQWUsZ0hBQWdILHFEQUFxRCxrQkFBa0IsV0FBVyw2RUFBNkUsc0RBQXNELGdEQUFnRCx3SkFBd0osb0NBQW9DLCtDQUErQyx5QkFBeUIsa0JBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2dlb2xpYkAzLjMuNC9ub2RlX21vZHVsZXMvZ2VvbGliL2VzL2dldFByZWNpc2VEaXN0YW5jZS5qcz84YzViIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTp0cnVlfSk7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldExhdGl0dWRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ2V0TGF0aXR1ZGVcIikpO3ZhciBfZ2V0TG9uZ2l0dWRlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vZ2V0TG9uZ2l0dWRlXCIpKTt2YXIgX3RvUmFkPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdG9SYWRcIikpO3ZhciBfY29uc3RhbnRzPXJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian19dmFyIGdldERpc3RhbmNlPWZ1bmN0aW9uIGdldERpc3RhbmNlKHN0YXJ0LGVuZCl7dmFyIGFjY3VyYWN5PWFyZ3VtZW50cy5sZW5ndGg+MiYmYXJndW1lbnRzWzJdIT09dW5kZWZpbmVkP2FyZ3VtZW50c1syXToxO2FjY3VyYWN5PXR5cGVvZiBhY2N1cmFjeSE9PVwidW5kZWZpbmVkXCImJiFpc05hTihhY2N1cmFjeSk/YWNjdXJhY3k6MTt2YXIgc3RhcnRMYXQ9KDAsX2dldExhdGl0dWRlLmRlZmF1bHQpKHN0YXJ0KTt2YXIgc3RhcnRMb249KDAsX2dldExvbmdpdHVkZS5kZWZhdWx0KShzdGFydCk7dmFyIGVuZExhdD0oMCxfZ2V0TGF0aXR1ZGUuZGVmYXVsdCkoZW5kKTt2YXIgZW5kTG9uPSgwLF9nZXRMb25naXR1ZGUuZGVmYXVsdCkoZW5kKTt2YXIgYj02MzU2NzUyLjMxNDI0NTt2YXIgZWxsaXBzb2lkUGFyYW1zPTEvMjk4LjI1NzIyMzU2Mzt2YXIgTD0oMCxfdG9SYWQuZGVmYXVsdCkoZW5kTG9uLXN0YXJ0TG9uKTt2YXIgY29zU2lnbWE7dmFyIHNpZ21hO3ZhciBzaW5BbHBoYTt2YXIgY29zU3FBbHBoYTt2YXIgY29zMlNpZ21hTTt2YXIgc2luU2lnbWE7dmFyIFUxPU1hdGguYXRhbigoMS1lbGxpcHNvaWRQYXJhbXMpKk1hdGgudGFuKCgwLF90b1JhZC5kZWZhdWx0KShwYXJzZUZsb2F0KHN0YXJ0TGF0KSkpKTt2YXIgVTI9TWF0aC5hdGFuKCgxLWVsbGlwc29pZFBhcmFtcykqTWF0aC50YW4oKDAsX3RvUmFkLmRlZmF1bHQpKHBhcnNlRmxvYXQoZW5kTGF0KSkpKTt2YXIgc2luVTE9TWF0aC5zaW4oVTEpO3ZhciBjb3NVMT1NYXRoLmNvcyhVMSk7dmFyIHNpblUyPU1hdGguc2luKFUyKTt2YXIgY29zVTI9TWF0aC5jb3MoVTIpO3ZhciBsYW1iZGE9TDt2YXIgbGFtYmRhUDt2YXIgaXRlckxpbWl0PTEwMDtkb3t2YXIgc2luTGFtYmRhPU1hdGguc2luKGxhbWJkYSk7dmFyIGNvc0xhbWJkYT1NYXRoLmNvcyhsYW1iZGEpO3NpblNpZ21hPU1hdGguc3FydChjb3NVMipzaW5MYW1iZGEqKGNvc1UyKnNpbkxhbWJkYSkrKGNvc1UxKnNpblUyLXNpblUxKmNvc1UyKmNvc0xhbWJkYSkqKGNvc1UxKnNpblUyLXNpblUxKmNvc1UyKmNvc0xhbWJkYSkpO2lmKHNpblNpZ21hPT09MCl7cmV0dXJuIDB9Y29zU2lnbWE9c2luVTEqc2luVTIrY29zVTEqY29zVTIqY29zTGFtYmRhO3NpZ21hPU1hdGguYXRhbjIoc2luU2lnbWEsY29zU2lnbWEpO3NpbkFscGhhPWNvc1UxKmNvc1UyKnNpbkxhbWJkYS9zaW5TaWdtYTtjb3NTcUFscGhhPTEtc2luQWxwaGEqc2luQWxwaGE7Y29zMlNpZ21hTT1jb3NTaWdtYS0yKnNpblUxKnNpblUyL2Nvc1NxQWxwaGE7aWYoaXNOYU4oY29zMlNpZ21hTSkpe2NvczJTaWdtYU09MH12YXIgQz1lbGxpcHNvaWRQYXJhbXMvMTYqY29zU3FBbHBoYSooNCtlbGxpcHNvaWRQYXJhbXMqKDQtMypjb3NTcUFscGhhKSk7bGFtYmRhUD1sYW1iZGE7bGFtYmRhPUwrKDEtQykqZWxsaXBzb2lkUGFyYW1zKnNpbkFscGhhKihzaWdtYStDKnNpblNpZ21hKihjb3MyU2lnbWFNK0MqY29zU2lnbWEqKC0xKzIqY29zMlNpZ21hTSpjb3MyU2lnbWFNKSkpfXdoaWxlKE1hdGguYWJzKGxhbWJkYS1sYW1iZGFQKT4xZS0xMiYmLS1pdGVyTGltaXQ+MCk7aWYoaXRlckxpbWl0PT09MCl7cmV0dXJuIE5hTn12YXIgdVNxPWNvc1NxQWxwaGEqKF9jb25zdGFudHMuZWFydGhSYWRpdXMqX2NvbnN0YW50cy5lYXJ0aFJhZGl1cy1iKmIpLyhiKmIpO3ZhciBBPTErdVNxLzE2Mzg0Kig0MDk2K3VTcSooLTc2OCt1U3EqKDMyMC0xNzUqdVNxKSkpO3ZhciBCPXVTcS8xMDI0KigyNTYrdVNxKigtMTI4K3VTcSooNzQtNDcqdVNxKSkpO3ZhciBkZWx0YVNpZ21hPUIqc2luU2lnbWEqKGNvczJTaWdtYU0rQi80Kihjb3NTaWdtYSooLTErMipjb3MyU2lnbWFNKmNvczJTaWdtYU0pLUIvNipjb3MyU2lnbWFNKigtMys0KnNpblNpZ21hKnNpblNpZ21hKSooLTMrNCpjb3MyU2lnbWFNKmNvczJTaWdtYU0pKSk7dmFyIGRpc3RhbmNlPWIqQSooc2lnbWEtZGVsdGFTaWdtYSk7cmV0dXJuIE1hdGgucm91bmQoZGlzdGFuY2UvYWNjdXJhY3kpKmFjY3VyYWN5fTt2YXIgX2RlZmF1bHQ9Z2V0RGlzdGFuY2U7ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/.pnpm/geolib@3.3.4/node_modules/geolib/es/getPreciseDistance.js\n"));

/***/ }),

/***/ "./src/pages/Attendance.js":
/*!*********************************!*\
  !*** ./src/pages/Attendance.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tachyons */ \"./node_modules/.pnpm/tachyons@4.12.0/node_modules/tachyons/css/tachyons.css\");\n/* harmony import */ var tachyons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tachyons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SideNavbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SideNavbar */ \"./src/components/SideNavbar.js\");\n/* harmony import */ var No_components_biometrics_Biometrics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! No/components/biometrics/Biometrics */ \"./src/components/biometrics/Biometrics.js\");\n/* harmony import */ var No_components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! No/components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var react_qr_reader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-qr-reader */ \"./node_modules/.pnpm/react-qr-reader@3.0.0-beta-1_biqbaboplfbrettd7655fr4n2y/node_modules/react-qr-reader/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var geolib_es_getPreciseDistance__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! geolib/es/getPreciseDistance */ \"./node_modules/.pnpm/geolib@3.3.4/node_modules/geolib/es/getPreciseDistance.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Attendance() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [coords, setCoords] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    const [scanQR, setScanQR] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const biometricsVerified = ()=>{\n        return prompt(\"are you authorized?\");\n    };\n    const takeAttendance = async (data)=>{\n        const studCoords = await (0,_utils__WEBPACK_IMPORTED_MODULE_7__.getCoords)();\n        const instructorCoords = data.coords;\n        if (data.expireOn < Date.now()) {\n            return alert(\"attendance has expired!!\");\n        }\n        alert((0,geolib_es_getPreciseDistance__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(studCoords, instructorCoords));\n        if (getDistance(studCoords, instructorCoords) > 20 || !biometricsVerified()) {\n            setStatus(\"FAILED\");\n            return;\n        }\n        await fetch(\"/api/attendance\", {\n            method: \"post\",\n            body: {\n                ...data,\n                student: localStorage.getItem(student)\n            }\n        });\n    };\n    const callapi = async ()=>{\n        const res = await fetch(\"/api/hello\");\n        console.log(await res.json());\n    };\n    callapi();\n    if (status == \"SUCCESS\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"success\"\n        }, void 0, false, {\n            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n            lineNumber: 50,\n            columnNumber: 14\n        }, this);\n    } else if (status == \"FAILED\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"failed\"\n        }, void 0, false, {\n            fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n            lineNumber: 52,\n            columnNumber: 14\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SideNavbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            !scanQR ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: async ()=>{\n                    setScanQR(true);\n                },\n                children: \"take attendance\"\n            }, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                lineNumber: 60,\n                columnNumber: 11\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_qr_reader__WEBPACK_IMPORTED_MODULE_5__.QrReader, {\n                        scanDelay: 300,\n                        constraints: {\n                            facingMode: \"environment\"\n                        },\n                        onResult: (result, error)=>{\n                            if (!!result) {\n                                setData(result);\n                                const data = JSON.parse(result.text);\n                                takeAttendance(data);\n                            }\n                            if (!!error) {\n                                console.info(error);\n                            }\n                        },\n                        style: {\n                            width: \"100%\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: JSON.stringify(data)\n                    }, void 0, false, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: data ? new Date(data.timestamp).toISOString() : \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(No_components_Footer__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/mikibo/Desktop/Coding/final-year-project/src/pages/Attendance.js\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Attendance, \"AyE6SM4uK16LHU7505mwQf6Q2zY=\");\n_c = Attendance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Attendance);\nvar _c;\n$RefreshReg$(_c, \"Attendance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvQXR0ZW5kYW5jZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBa0I7QUFDK0I7QUFDWTtBQUNuQjtBQUNDO0FBQ1Y7QUFDSTtBQUN5QjtBQUU5RCxTQUFTTyxhQUFhOztJQUNsQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQUMsSUFBSTtJQUNyQyxNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUMsSUFBSTtJQUN6QyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNLENBQUNVLFFBQVFDLFVBQVUsR0FBR1gsK0NBQVFBLENBQUM7SUFFckMsTUFBTVkscUJBQXFCLElBQU07UUFDL0IsT0FBT0MsT0FBTztJQUNoQjtJQUVBLE1BQU1DLGlCQUFpQixPQUFPVixPQUFPO1FBQ25DLE1BQU1XLGFBQWEsTUFBTWQsaURBQVNBO1FBQ2xDLE1BQU1lLG1CQUFtQlosS0FBS0UsTUFBTTtRQUNwQyxJQUFHRixLQUFLYSxRQUFRLEdBQUdDLEtBQUtDLEdBQUcsSUFBRztZQUM1QixPQUFPQyxNQUFNO1FBQ2YsQ0FBQztRQUNEQSxNQUFNbEIsd0VBQWtCQSxDQUFDYSxZQUFZQztRQUNyQyxJQUNFSyxZQUFZTixZQUFZQyxvQkFBb0IsTUFDNUMsQ0FBQ0osc0JBQ0Q7WUFDQUQsVUFBVTtZQUNWO1FBQ0YsQ0FBQztRQUNELE1BQU1XLE1BQU0sbUJBQW1CO1lBQzdCQyxRQUFRO1lBQ1JDLE1BQU07Z0JBQ0osR0FBR3BCLElBQUk7Z0JBQ1BxQixTQUFTQyxhQUFhQyxPQUFPLENBQUNGO1lBQ2hDO1FBQ0Y7SUFDRjtJQUVBLE1BQU1HLFVBQVUsVUFBVTtRQUN4QixNQUFNQyxNQUFNLE1BQU1QLE1BQU07UUFDeEJRLFFBQVFDLEdBQUcsQ0FBQyxNQUFNRixJQUFJRyxJQUFJO0lBQzVCO0lBQ0FKO0lBRUEsSUFBR2xCLFVBQVUsV0FBVTtRQUNyQixxQkFBTyw4REFBQ3VCO3NCQUFFOzs7Ozs7SUFDWixPQUFPLElBQUd2QixVQUFVLFVBQVM7UUFDM0IscUJBQU8sOERBQUN1QjtzQkFBRTs7Ozs7O0lBQ1osQ0FBQztJQUVELHFCQUNFOzswQkFDRSw4REFBQ3JDLDhEQUFVQTs7Ozs7WUFFVixDQUFDWSx1QkFDQSw4REFBQzBCO2dCQUNDQyxTQUFTLFVBQVk7b0JBQ25CMUIsVUFBVSxJQUFJO2dCQUNoQjswQkFBRzs7Ozs7cUNBSUw7O2tDQUNFLDhEQUFDVixxREFBUUE7d0JBQ1BxQyxXQUFXO3dCQUNYQyxhQUFhOzRCQUFFQyxZQUFZO3dCQUFjO3dCQUN6Q0MsVUFBVSxDQUFDQyxRQUFRQyxRQUFVOzRCQUMzQixJQUFJLENBQUMsQ0FBQ0QsUUFBUTtnQ0FDWm5DLFFBQVFtQztnQ0FDUixNQUFNcEMsT0FBT3NDLEtBQUtDLEtBQUssQ0FBQ0gsT0FBT0ksSUFBSTtnQ0FDbkM5QixlQUFlVjs0QkFDakIsQ0FBQzs0QkFFRCxJQUFJLENBQUMsQ0FBQ3FDLE9BQU87Z0NBQ1hYLFFBQVFlLElBQUksQ0FBQ0o7NEJBQ2YsQ0FBQzt3QkFDSDt3QkFDQUssT0FBTzs0QkFBRUMsT0FBTzt3QkFBTzs7Ozs7O2tDQUV6Qiw4REFBQ2Q7a0NBQUdTLEtBQUtNLFNBQVMsQ0FBQzVDOzs7Ozs7a0NBQ25CLDhEQUFDNkI7a0NBQUc3QixPQUFPLElBQUljLEtBQUtkLEtBQUs2QyxTQUFTLEVBQUVDLFdBQVcsS0FBSyxFQUFFOzs7Ozs7OzRCQUV6RDswQkFDRCw4REFBQ3BELDREQUFNQTs7Ozs7OztBQUlmO0dBbEZTSztLQUFBQTtBQW9GVCwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvQXR0ZW5kYW5jZS5qcz9jZTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndGFjaHlvbnMnO1xuaW1wb3J0IFNpZGVOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TaWRlTmF2YmFyJ1xuaW1wb3J0IEJpb21ldHJpY3MgZnJvbSAnTm8vY29tcG9uZW50cy9iaW9tZXRyaWNzL0Jpb21ldHJpY3MnO1xuaW1wb3J0IEZvb3RlciBmcm9tICdOby9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQgeyBRclJlYWRlciB9IGZyb20gJ3JlYWN0LXFyLXJlYWRlcic7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldENvb3JkcyB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCBnZXRQcmVjaXNlRGlzdGFuY2UgZnJvbSAnZ2VvbGliL2VzL2dldFByZWNpc2VEaXN0YW5jZSc7XG5cbmZ1bmN0aW9uIEF0dGVuZGFuY2UoKSB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW2Nvb3Jkcywgc2V0Q29vcmRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzY2FuUVIsIHNldFNjYW5RUl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlKCcnKVxuXG4gICAgY29uc3QgYmlvbWV0cmljc1ZlcmlmaWVkID0gKCkgPT4ge1xuICAgICAgcmV0dXJuIHByb21wdChcImFyZSB5b3UgYXV0aG9yaXplZD9cIilcbiAgICB9XG5cbiAgICBjb25zdCB0YWtlQXR0ZW5kYW5jZSA9IGFzeW5jIChkYXRhKT0+e1xuICAgICAgY29uc3Qgc3R1ZENvb3JkcyA9IGF3YWl0IGdldENvb3JkcygpXG4gICAgICBjb25zdCBpbnN0cnVjdG9yQ29vcmRzID0gZGF0YS5jb29yZHNcbiAgICAgIGlmKGRhdGEuZXhwaXJlT24gPCBEYXRlLm5vdygpKXtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KFwiYXR0ZW5kYW5jZSBoYXMgZXhwaXJlZCEhXCIpXG4gICAgICB9XG4gICAgICBhbGVydChnZXRQcmVjaXNlRGlzdGFuY2Uoc3R1ZENvb3JkcywgaW5zdHJ1Y3RvckNvb3JkcykpO1xuICAgICAgaWYgKFxuICAgICAgICBnZXREaXN0YW5jZShzdHVkQ29vcmRzLCBpbnN0cnVjdG9yQ29vcmRzKSA+IDIwIHx8XG4gICAgICAgICFiaW9tZXRyaWNzVmVyaWZpZWQoKVxuICAgICAgKSB7XG4gICAgICAgIHNldFN0YXR1cygnRkFJTEVEJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGF3YWl0IGZldGNoKCcvYXBpL2F0dGVuZGFuY2UnLCB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICBzdHVkZW50OiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdHVkZW50KSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNhbGxhcGkgPSBhc3luYyAoKT0+e1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJy9hcGkvaGVsbG8nKVxuICAgICAgY29uc29sZS5sb2coYXdhaXQgcmVzLmpzb24oKSlcbiAgICB9XG4gICAgY2FsbGFwaSgpXG5cbiAgICBpZihzdGF0dXMgPT0gJ1NVQ0NFU1MnKXtcbiAgICAgIHJldHVybiA8cD5zdWNjZXNzPC9wPlxuICAgIH0gZWxzZSBpZihzdGF0dXMgPT0gJ0ZBSUxFRCcpe1xuICAgICAgcmV0dXJuIDxwPmZhaWxlZDwvcD5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgPFNpZGVOYXZiYXIgLz5cbiAgICAgICAgey8qIDxCaW9tZXRyaWNzIC8+ICovfVxuICAgICAgICB7IXNjYW5RUiA/IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgIHNldFNjYW5RUih0cnVlKTtcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgdGFrZSBhdHRlbmRhbmNlXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxRclJlYWRlclxuICAgICAgICAgICAgICBzY2FuRGVsYXk9ezMwMH1cbiAgICAgICAgICAgICAgY29uc3RyYWludHM9e3sgZmFjaW5nTW9kZTogJ2Vudmlyb25tZW50JyB9fVxuICAgICAgICAgICAgICBvblJlc3VsdD17KHJlc3VsdCwgZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoISFyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgIHNldERhdGEocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdC50ZXh0KTtcbiAgICAgICAgICAgICAgICAgIHRha2VBdHRlbmRhbmNlKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghIWVycm9yKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwPntKU09OLnN0cmluZ2lmeShkYXRhKX08L3A+XG4gICAgICAgICAgICA8cD57ZGF0YSA/IG5ldyBEYXRlKGRhdGEudGltZXN0YW1wKS50b0lTT1N0cmluZygpIDogJyd9PC9wPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8Lz5cbiAgICApO1xuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCBBdHRlbmRhbmNlOyJdLCJuYW1lcyI6WyJTaWRlTmF2YmFyIiwiQmlvbWV0cmljcyIsIkZvb3RlciIsIlFyUmVhZGVyIiwidXNlU3RhdGUiLCJnZXRDb29yZHMiLCJnZXRQcmVjaXNlRGlzdGFuY2UiLCJBdHRlbmRhbmNlIiwiZGF0YSIsInNldERhdGEiLCJjb29yZHMiLCJzZXRDb29yZHMiLCJzY2FuUVIiLCJzZXRTY2FuUVIiLCJzdGF0dXMiLCJzZXRTdGF0dXMiLCJiaW9tZXRyaWNzVmVyaWZpZWQiLCJwcm9tcHQiLCJ0YWtlQXR0ZW5kYW5jZSIsInN0dWRDb29yZHMiLCJpbnN0cnVjdG9yQ29vcmRzIiwiZXhwaXJlT24iLCJEYXRlIiwibm93IiwiYWxlcnQiLCJnZXREaXN0YW5jZSIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsInN0dWRlbnQiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY2FsbGFwaSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzY2FuRGVsYXkiLCJjb25zdHJhaW50cyIsImZhY2luZ01vZGUiLCJvblJlc3VsdCIsInJlc3VsdCIsImVycm9yIiwiSlNPTiIsInBhcnNlIiwidGV4dCIsImluZm8iLCJzdHlsZSIsIndpZHRoIiwic3RyaW5naWZ5IiwidGltZXN0YW1wIiwidG9JU09TdHJpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/Attendance.js\n"));

/***/ })

});