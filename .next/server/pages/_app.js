/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/common/Navbar.tsx":
/*!******************************************!*\
  !*** ./src/components/common/Navbar.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst navLinks = [\n    {\n        href: \"/\",\n        label: \"Home\"\n    },\n    {\n        href: \"/dashboard\",\n        label: \"Dashboard\"\n    },\n    {\n        href: \"/catalog\",\n        label: \"Catalog\"\n    },\n    {\n        href: \"/procurement\",\n        label: \"Procurement\"\n    },\n    {\n        href: \"/approval\",\n        label: \"Approval\"\n    },\n    {\n        href: \"/vendor\",\n        label: \"Vendor\"\n    }\n];\nfunction Navbar() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"hidden md:flex items-center justify-between bg-primary text-white px-8 py-4 shadow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"/assets/images/gov-logo.svg\",\n                                alt: \"Gov Logo\",\n                                className: \"w-10 h-10\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Downloads/mulearn/frontend/src/components/common/Navbar.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-bold text-xl\",\n                                children: \"GovProcure\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Downloads/mulearn/frontend/src/components/common/Navbar.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Downloads/mulearn/frontend/src/components/common/Navbar.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-6\",\n                        children: navLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: link.href,\n                                className: \"hover:underline\",\n                                children: link.label\n                            }, link.href, false, {\n                                fileName: \"/Users/apple/Downloads/mulearn/frontend/src/components/common/Navbar.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Downloads/mulearn/frontend/src/components/common/Navbar.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Downloads/mulearn/frontend/src/components/common/Navbar.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"fixed bottom-0 left-0 right-0 z-50 bg-white border-t flex md:hidden justify-around py-2 shadow\",\n                children: navLinks.map((link)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: link.href,\n                        className: \"flex flex-col items-center text-xs text-primary\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"mb-1\",\n                                children: \"⬤\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Downloads/mulearn/frontend/src/components/common/Navbar.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 13\n                            }, this),\n                            link.label\n                        ]\n                    }, link.href, true, {\n                        fileName: \"/Users/apple/Downloads/mulearn/frontend/src/components/common/Navbar.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/apple/Downloads/mulearn/frontend/src/components/common/Navbar.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21tb24vTmF2YmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNHO0FBRTdCLE1BQU1FLFdBQVc7SUFDZjtRQUFFQyxNQUFNO1FBQUtDLE9BQU87SUFBTztJQUMzQjtRQUFFRCxNQUFNO1FBQWNDLE9BQU87SUFBWTtJQUN6QztRQUFFRCxNQUFNO1FBQVlDLE9BQU87SUFBVTtJQUNyQztRQUFFRCxNQUFNO1FBQWdCQyxPQUFPO0lBQWM7SUFDN0M7UUFBRUQsTUFBTTtRQUFhQyxPQUFPO0lBQVc7SUFDdkM7UUFBRUQsTUFBTTtRQUFXQyxPQUFPO0lBQVM7Q0FDcEM7QUFFYyxTQUFTQztJQUN0QixxQkFDRTs7MEJBRUUsOERBQUNDO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0M7d0JBQUlELFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBSUMsS0FBSTtnQ0FBOEJDLEtBQUk7Z0NBQVdKLFdBQVU7Ozs7OzswQ0FDaEUsOERBQUNLO2dDQUFLTCxXQUFVOzBDQUFvQjs7Ozs7Ozs7Ozs7O2tDQUV0Qyw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ1pMLFNBQVNXLEdBQUcsQ0FBQyxDQUFDQyxxQkFDYiw4REFBQ2Isa0RBQUlBO2dDQUFpQkUsTUFBTVcsS0FBS1gsSUFBSTtnQ0FBRUksV0FBVTswQ0FDOUNPLEtBQUtWLEtBQUs7K0JBREZVLEtBQUtYLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTzFCLDhEQUFDRztnQkFBSUMsV0FBVTswQkFDWkwsU0FBU1csR0FBRyxDQUFDLENBQUNDLHFCQUNiLDhEQUFDYixrREFBSUE7d0JBQWlCRSxNQUFNVyxLQUFLWCxJQUFJO3dCQUFFSSxXQUFVOzswQ0FFL0MsOERBQUNLO2dDQUFLTCxXQUFVOzBDQUFPOzs7Ozs7NEJBQ3RCTyxLQUFLVixLQUFLOzt1QkFIRlUsS0FBS1gsSUFBSTs7Ozs7Ozs7Ozs7O0FBUzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvY29tcG9uZW50cy9jb21tb24vTmF2YmFyLnRzeD82NTBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5jb25zdCBuYXZMaW5rcyA9IFtcbiAgeyBocmVmOiAnLycsIGxhYmVsOiAnSG9tZScgfSxcbiAgeyBocmVmOiAnL2Rhc2hib2FyZCcsIGxhYmVsOiAnRGFzaGJvYXJkJyB9LFxuICB7IGhyZWY6ICcvY2F0YWxvZycsIGxhYmVsOiAnQ2F0YWxvZycgfSxcbiAgeyBocmVmOiAnL3Byb2N1cmVtZW50JywgbGFiZWw6ICdQcm9jdXJlbWVudCcgfSxcbiAgeyBocmVmOiAnL2FwcHJvdmFsJywgbGFiZWw6ICdBcHByb3ZhbCcgfSxcbiAgeyBocmVmOiAnL3ZlbmRvcicsIGxhYmVsOiAnVmVuZG9yJyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2YmFyKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogVG9wYmFyIGZvciBkZXNrdG9wICovfVxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJnLXByaW1hcnkgdGV4dC13aGl0ZSBweC04IHB5LTQgc2hhZG93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2dvdi1sb2dvLnN2Z1wiIGFsdD1cIkdvdiBMb2dvXCIgY2xhc3NOYW1lPVwidy0xMCBoLTEwXCIgLz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bFwiPkdvdlByb2N1cmU8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTZcIj5cbiAgICAgICAgICB7bmF2TGlua3MubWFwKChsaW5rKSA9PiAoXG4gICAgICAgICAgICA8TGluayBrZXk9e2xpbmsuaHJlZn0gaHJlZj17bGluay5ocmVmfSBjbGFzc05hbWU9XCJob3Zlcjp1bmRlcmxpbmVcIj5cbiAgICAgICAgICAgICAge2xpbmsubGFiZWx9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG4gICAgICB7LyogQm90dG9tYmFyIGZvciBtb2JpbGUgKi99XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHotNTAgYmctd2hpdGUgYm9yZGVyLXQgZmxleCBtZDpoaWRkZW4ganVzdGlmeS1hcm91bmQgcHktMiBzaGFkb3dcIj5cbiAgICAgICAge25hdkxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgIDxMaW5rIGtleT17bGluay5ocmVmfSBocmVmPXtsaW5rLmhyZWZ9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHRleHQteHMgdGV4dC1wcmltYXJ5XCI+XG4gICAgICAgICAgICB7LyogSWNvbiBwbGFjZWhvbGRlciAqL31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1iLTFcIj7irKQ8L3NwYW4+XG4gICAgICAgICAgICB7bGluay5sYWJlbH1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gICk7XG59ICJdLCJuYW1lcyI6WyJSZWFjdCIsIkxpbmsiLCJuYXZMaW5rcyIsImhyZWYiLCJsYWJlbCIsIk5hdmJhciIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsImltZyIsInNyYyIsImFsdCIsInNwYW4iLCJtYXAiLCJsaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/common/Navbar.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_common_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common/Navbar */ \"./src/components/common/Navbar.tsx\");\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/apple/Downloads/mulearn/frontend/src/pages/_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/apple/Downloads/mulearn/frontend/src/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ0s7QUFDa0I7QUFLbEMsU0FBU0UsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBWTtJQUM1RCxxQkFDRTs7MEJBQ0UsOERBQUNILGlFQUFNQTs7Ozs7MEJBQ1AsOERBQUNFO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBRzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL2NvbW1vbi9OYXZiYXInO1xuLy8gaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJzsgLy8gV2lsbCByZXNvbHZlIGFmdGVyIGluc3RhbGxpbmcgZGVwZW5kZW5jaWVzXG5cbnR5cGUgQXBwUHJvcHMgPSBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOYXZiYXIgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn0gIl0sIm5hbWVzIjpbIlJlYWN0IiwiTmF2YmFyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();