webpackHotUpdate_N_E("pages/diary",{

/***/ "./pages/diary.tsx":
/*!*************************!*\
  !*** ./pages/diary.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Page; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/layout */ \"./components/layout.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var lib_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/user */ \"./lib/user.ts\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\nvar _jsxFileName = \"/home/bcko/github/myselfdistancingdiary.github.io/pages/diary.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Section = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].section.withConfig({\n  displayName: \"diary__Section\",\n  componentId: \"i0yiwz-0\"\n})([\"background-image:url('/diary-background.jpg');background-repeat:no-repeat;width:100%;height:100%;background-size:cover;\"]);\n_c = Section;\nfunction Page() {\n  _s();\n\n  var _useFetchUser = Object(lib_user__WEBPACK_IMPORTED_MODULE_3__[\"useFetchUser\"])(),\n      user = _useFetchUser.user,\n      loading = _useFetchUser.loading;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"])(),\n      register = _useForm.register,\n      handleSubmit = _useForm.handleSubmit;\n\n  function onSubmit(data) {\n    var diaryString = data.diary;\n    var words = ['i', 'my', 'me', 'mine'];\n\n    for (var word in words) {\n      console.log(\"loop\");\n\n      if (diaryString.includes(word.toLowerCase())) {\n        console.log(\"the word \".concat(word, \" is included!\"));\n      }\n    }\n\n    return console.log(data);\n  }\n\n  return __jsx(components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    user: user,\n    loading: loading,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(Section, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, __jsx(\"form\", {\n    onSubmit: handleSubmit(onSubmit),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, __jsx(\"textarea\", {\n    name: \"diary\",\n    ref: register,\n    rows: 20,\n    cols: 40,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }, \" write your diary \"), __jsx(\"input\", {\n    type: \"submit\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }))));\n}\n\n_s(Page, \"VNfpH+LSAhN2QK6yJ2vE9oLEzKo=\", false, function () {\n  return [lib_user__WEBPACK_IMPORTED_MODULE_3__[\"useFetchUser\"], react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"]];\n});\n\n_c2 = Page;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Section\");\n$RefreshReg$(_c2, \"Page\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGlhcnkudHN4PzQwNTkiXSwibmFtZXMiOlsiU2VjdGlvbiIsInN0eWxlZCIsInNlY3Rpb24iLCJQYWdlIiwidXNlRmV0Y2hVc2VyIiwidXNlciIsImxvYWRpbmciLCJ1c2VGb3JtIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJvblN1Ym1pdCIsImRhdGEiLCJkaWFyeVN0cmluZyIsImRpYXJ5Iiwid29yZHMiLCJ3b3JkIiwiY29uc29sZSIsImxvZyIsImluY2x1ZGVzIiwidG9Mb3dlckNhc2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLE9BQU8sR0FBR0MseURBQU0sQ0FBQ0MsT0FBVjtBQUFBO0FBQUE7QUFBQSwrSEFBYjtLQUFNRixPO0FBU1MsU0FBU0csSUFBVCxHQUFnQjtBQUFBOztBQUFBLHNCQUNIQyw2REFBWSxFQURUO0FBQUEsTUFDckJDLElBRHFCLGlCQUNyQkEsSUFEcUI7QUFBQSxNQUNmQyxPQURlLGlCQUNmQSxPQURlOztBQUFBLGlCQUVNQywrREFBTyxFQUZiO0FBQUEsTUFFckJDLFFBRnFCLFlBRXJCQSxRQUZxQjtBQUFBLE1BRVhDLFlBRlcsWUFFWEEsWUFGVzs7QUFJN0IsV0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDdEIsUUFBTUMsV0FBVyxHQUFHRCxJQUFJLENBQUNFLEtBQXpCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLE1BQWxCLENBQWQ7O0FBRUEsU0FBSyxJQUFNQyxJQUFYLElBQW1CRCxLQUFuQixFQUEwQjtBQUN4QkUsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjs7QUFDQSxVQUFJTCxXQUFXLENBQUNNLFFBQVosQ0FBcUJILElBQUksQ0FBQ0ksV0FBTCxFQUFyQixDQUFKLEVBQThDO0FBQzVDSCxlQUFPLENBQUNDLEdBQVIsb0JBQXdCRixJQUF4QjtBQUNEO0FBQ0Y7O0FBQ0QsV0FBT0MsT0FBTyxDQUFDQyxHQUFSLENBQVlOLElBQVosQ0FBUDtBQUNEOztBQUVDLFNBQ0UsTUFBQyx5REFBRDtBQUFRLFFBQUksRUFBRU4sSUFBZDtBQUFvQixXQUFPLEVBQUVDLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLE9BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQU0sWUFBUSxFQUFFRyxZQUFZLENBQUNDLFFBQUQsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVBO0FBQVUsUUFBSSxFQUFDLE9BQWY7QUFBdUIsT0FBRyxFQUFFRixRQUE1QjtBQUFzQyxRQUFJLEVBQUUsRUFBNUM7QUFBZ0QsUUFBSSxFQUFFLEVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkEsRUFHQTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIQSxDQURBLENBREEsQ0FERjtBQVdEOztHQTVCcUJMLEk7VUFDSUMscUQsRUFDU0csdUQ7OztNQUZiSixJIiwiZmlsZSI6Ii4vcGFnZXMvZGlhcnkudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHVzZUZldGNoVXNlciB9IGZyb20gJ2xpYi91c2VyJ1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcblxuXG5jb25zdCBTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2RpYXJ5LWJhY2tncm91bmQuanBnJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cbmBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgeyB1c2VyLCBsb2FkaW5nIH0gPSB1c2VGZXRjaFVzZXIoKVxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKTtcblxuICBmdW5jdGlvbiBvblN1Ym1pdChkYXRhKSB7XG4gICAgY29uc3QgZGlhcnlTdHJpbmcgPSBkYXRhLmRpYXJ5O1xuICAgIGNvbnN0IHdvcmRzID0gWydpJywgJ215JywgJ21lJywgJ21pbmUnXTtcbiAgICBcbiAgICBmb3IgKGNvbnN0IHdvcmQgaW4gd29yZHMpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwibG9vcFwiKVxuICAgICAgaWYgKGRpYXJ5U3RyaW5nLmluY2x1ZGVzKHdvcmQudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgY29uc29sZS5sb2coYHRoZSB3b3JkICR7d29yZH0gaXMgaW5jbHVkZWQhYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb25zb2xlLmxvZyhkYXRhKTtcbiAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQgdXNlcj17dXNlcn0gbG9hZGluZz17bG9hZGluZ30+XG4gICAgICA8U2VjdGlvbj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cblxuICAgICAgPHRleHRhcmVhIG5hbWU9XCJkaWFyeVwiIHJlZj17cmVnaXN0ZXJ9IHJvd3M9ezIwfSBjb2xzPXs0MH0+IHdyaXRlIHlvdXIgZGlhcnkgPC90ZXh0YXJlYT5cbiAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgLz5cbiAgICA8L2Zvcm0+XG4gICAgICAgIDwvU2VjdGlvbj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/diary.tsx\n");

/***/ })

})