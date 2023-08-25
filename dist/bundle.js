/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/lancelot-v23-latin-regular.woff2 */ "./src/assets/fonts/lancelot-v23-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/fonts/happy-monkey-v14-latin-regular.woff2 */ "./src/assets/fonts/happy-monkey-v14-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* lancelot-regular - latin */
@font-face {
  font-family: "Lancelot";
  font-style: normal;
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff2");
}

/* happy-monkey-regular - latin */
@font-face {
  font-family: "Happy Monkey";
  font-style: normal;
  font-weight: 400;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___})
    format("woff2");
}

* {
  margin: 0;
  padding: 0;
  height: 100%;
  box-sizing: border-box;

  --main-bground-color: #ffe8d6;
  --head-foot-color: #cca590;
  --inactive-tab-color: #b7b7a4;
  --form-green-color: #8b8b76;
  --to-do-entry-color: #f8d6bc;
  --checkmark-color: #535347;
  --low-priority-color: #e7f24f;
  --medium-priority-color: #eeb250;
  --high-priority-color: #bc2702;
}

.container {
  display: grid;
  grid-template-rows: 1fr 7.5fr 0.8fr;
}

/* Header */

.header {
  background-color: var(--head-foot-color);
  font-family: "Lancelot";
  font-size: 2.8ch;
  grid-area: 1 / 1 / 2 / 2;

  display: grid;
  grid-template-columns: 5fr 0.7fr;

  align-items: center;
}

.header h1 {
  height: min-content;
  align-self: center;
  margin-left: 1ch;
}

.header button.show-form-btn,
.header button.tab-btn {
  height: 8ch;
  border: none;
  margin-right: 5ch;
  background-color: var(--head-foot-color);
  cursor: pointer;
}

.header button.show-form-btn:focus {
  border: 1px solid var(--main-bground-color);
}

/* Main */

.main {
  background-color: var(--main-bground-color);
  grid-area: 2 / 1 / 3 / 2;
  position: relative;

  display: grid;
  grid-template-columns: 1fr 5fr;
}

/* Main: Side-Nav */

.cat-form-visible {
  pointer-events: none;
}

.side-nav {
  grid-area: 1 / 1 / 2 / 2;
  background-color: var(--inactive-tab-color);
}

.forms-box {
  grid-area: 1 / 2 / 2 / 3;
  min-height: 100%;
  height: min-content;
  margin: 0 2ch;
}

.content-box {
  grid-area: 1 / 2 / 2 / 3;
  min-height: 100%;
  height: min-content;
  margin: 0 2ch;
}

.tab-btn {
  background-color: var(--inactive-tab-color);
  font-family: "Lancelot";
  font-size: 3ch;
  border: none;

  width: 100%;
  height: 10ch;
  border-bottom: solid 1px var(--main-bground-color);

  cursor: pointer;
}

.btn-ctrl:focus {
  outline: 3px solid var(--form-green-color);
}

.btn-ctrl--active {
  background-color: var(--main-bground-color);
}

.tab-btn:last-child {
  border-bottom: none;
}

/* Main: Tab opening messages */
.add-cat-msg {
  display: block;
  width: 100%;
  text-align: center;
}

/* Main: To-Do-Form */
.form-div,
.edit-form-div {
  display: none;
  position: absolute;
  z-index: 10;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.5ch;
  height: min-content;
  min-width: min-content;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5ch;
  padding: 5ch;
  background-color: var(--inactive-tab-color);
  border-radius: 3ch;
  outline: 1px solid black;
  outline-offset: -2ch;
}

.req-msg {
  font-family: "Happy Monkey";
  font-size: 2.8ch;
  text-align: center;
  margin-bottom: 1.5ch;
}

.form-line.hidden {
  display: none;
}

.form-line {
  display: flex;
  flex-wrap: wrap;
}

.category-name {
  margin-top: 1.5ch;
  font-size: 2.2ch;
  font-family: "Happy Monkey";
}

.instruct {
  display: flex;
  justify-content: end;
  margin-top: -1.4ch;
}

.title-msg::before {
  content: "Add a title.";
  font-family: "Happy Monkey";
  font-size: 1.8ch;
}

.priority-msg::before {
  content: "Choose a priority level.";
  font-family: "Happy Monkey";
  font-size: 1.8ch;
}

.description-msg::before {
  content: "Add details (optional).";
  font-family: "Happy Monkey";
  font-size: 1.8ch;
}

.due-date-msg::before {
  content: "Select a date and time.";
  font-family: "Happy Monkey";
  font-size: 1.8ch;
}

.btn-line,
.select-btn-line,
.cat-btn-line {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3ch;
  margin-top: 4ch;
}

.form-line > label,
.category-line > label,
.complete-container > label {
  display: inline-block;
  width: 15ch;
  font-family: "Happy Monkey";
  font-size: 2.15ch;
  margin-top: 1.5ch;
}

input[type="text"],
input[type="datetime-local"],
.task-priority {
  display: inline-block;
  flex: 1;
  height: 3ch;
  width: 10%;
  padding-left: 1ch;
  font-family: "Happy Monkey";
  font-size: 1.9ch;
  background-color: var(--main-bground-color);
  border-radius: 1ch;
  border: 0.2ch solid var(--form-green-color);
  margin-top: 1.5ch;
}

textarea {
  flex: 1;
  padding-left: 1ch;
  font-family: "Happy Monkey";
  font-size: 1.9ch;
  background-color: var(--main-bground-color);
  border-radius: 1ch;
  border: 0.2ch solid var(--form-green-color);
  resize: vertical;
}

input[type="text"]:focus,
textarea:focus,
input[type="datetime-local"]:focus,
.task-priority:focus {
  outline: 2px solid var(--form-green-color);
}

input[type="text"]:valid {
  background-color: var(--main-bground-color);
}

button.add-to-do,
button.edit-to-do,
button.cancel-category,
button.cancel-to-do {
  font-family: "Happy Monkey";
  font-size: 1.8ch;
  width: 8ch;
  height: min-content;
  background-color: var(--main-bground-color);
  padding: 0.8ch;
  border-radius: 3ch;
  border: 1px solid var(--head-foot-color);
}

button.add-to-do:hover,
button.edit-to-do:hover,
button.cancel-category:hover,
button.cancel-to-do:hover {
  background-color: var(--form-green-color);
  cursor: pointer;
}

button.add-to-do:focus,
button.edit-to-do:focus,
button.cancel-category:focus,
button.cancel-to-do:focus {
  border: 2px solid var(--form-green-color);
  outline: 2px solid var(--form-green-color);
}

/* Main: Tab Content */

.tab-content {
  display: none;
  grid-area: 1 / 2 / 2 / 3;
  font-family: "Happy Monkey";
  margin-top: 2ch;
  margin-left: 2ch;
  width: 100%;
  height: 100%;
}

.tab-content--active {
  display: initial;
  grid-area: 1 / 2 / 2 / 3;
  font-family: "Happy Monkey";
  margin-top: 2ch;
  margin-left: 2ch;
  width: 100%;
  height: 100%;
}

/* Main: Category View */

/* Category View: New Category Form */

.select-form-container,
.create-cat-warning-div,
.cat-form-container {
  display: none;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
}

.select-form,
.create-cat-warning,
.category-form {
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: var(--head-foot-color);
  height: min-content;
  width: 50ch;
  margin-top: 5ch;
  padding: 1.5ch;
  border-radius: 1ch;
}

.select-ask,
.must-create-cat {
  text-align: center;
  font-family: "Lancelot";
}

input[type="text"].category {
  margin-left: -5ch;
  width: 70%;
}

.select-btn-line,
.cat-btn-line {
  margin-top: 2ch;
}

button.add-category,
button.agree-btn,
button.select-to-do-btn {
  font-family: "Happy Monkey";
  font-size: 1.8ch;
  width: 20ch;
  height: min-content;
  background-color: var(--main-bground-color);
  padding: 0.8ch;
  border-radius: 3ch;
  border: 1px solid var(--head-foot-color);
}

button.add-category:hover,
button.agree-btn:hover,
button.select-to-do-btn:hover {
  background-color: var(--form-green-color);
  cursor: pointer;
}

button.add-category:focus,
button.agree-btn:focus,
button.select-to-do-btn:focus {
  outline: 2px solid var(--form-green-color);
}

/* Category View: New Category Section */
.cat-section {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4ch;
}

.cat-card {
  font-family: "Lancelot";
  font-size: 2ch;
  background-color: var(--inactive-tab-color);
  width: 30ch;
  height: min-content;
  display: flex;
  flex-direction: column;
  gap: 3ch;
  align-items: center;
  padding: 1ch;
  border-radius: 1ch;
  margin-bottom: 2ch;
}

.cat-content {
  width: 100%;
  height: 100%;
  text-align: center;
}

.new-to-do {
  font-family: "Happy Monkey";
  font-size: 2ch;
  width: 10ch;
  height: 3ch;
  border: 1px solid var(--form-green-color);
  border-radius: 2ch;
  background-color: var(--head-foot-color);
  cursor: pointer;
}

.new-to-do:hover {
  background-color: var(--main-bground-color);
}

.new-to-do:focus {
  outline: 2px solid var(--form-green-color);
}

.cat-card .delete-icon {
  display: flex;
  width: 100%;
  height: min-content;
  justify-content: flex-end;
  margin-right: 1ch;
  margin-bottom: 0.5ch;
}

.cat-card .delete-icon > img {
  width: 2ch;
}

.cat-card .delete-icon > img:hover {
  width: 2.2ch;
  cursor: pointer;
}

.cat-card .delete-icon > img:focus {
  border: none;
  width: 2.8ch;
  padding: 0.5ch;
}

/* Category Section: New To Do Item */

.to-do-entry {
  margin: 1ch 0 1ch 0;
  background-color: var(--to-do-entry-color);
  border-radius: 1ch;
  padding: 1ch 0 1ch 0;
}

.to-do-entry .title {
  text-decoration: underline;
  font-size: 2.6ch;
  padding-bottom: 1ch;
}

.details-title,
.due-title {
  width: 100%;
  text-align: left;
  font-size: 2.5ch;
  margin-left: 1.5ch;
}

.details,
.show-due-date {
  padding-bottom: 1ch;
  font-family: "Happy Monkey";
}

.to-do-entry > label {
  width: 10ch;
  margin-bottom: 1ch;
}

.complete-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7ch;
}

input[type="checkbox"].complete {
  align-self: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  height: 2.5ch;
  width: 2.5ch;
  border: 1px solid var(--form-green-color);
  border-radius: 1ch;
  outline: none;
  background-color: var(--main-bground-color);
  cursor: pointer;
  position: relative;
}

input[type="checkbox"].complete:focus {
  outline: 2px solid var(--form-green-color);
}

input[type="checkbox"].complete:checked {
  border: 1px solid var(--form-green-color);
  background-color: var(--main-bground-color);
}

input[type="checkbox"].complete:checked::before {
  content: "\\2713";
  color: var(--checkmark-color);
  position: absolute;
  bottom: -0.4ch;
  font-size: 4ch;
}

.to-do-entry .delete-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5ch;
}

.to-do-entry .delete-icon > img {
  width: 2ch;
  margin-top: 4ch;
}

.to-do-entry .delete-icon > img:hover {
  width: 2.2ch;
  margin-top: 2.1ch;
  cursor: pointer;
}

.cat-card .delete-icon > img:focus {
  border: none;
  width: 2.8ch;
  height: 3ch;
  padding: 0.5ch;
}

.to-do-entry .priority {
  width: 100%;
  height: 3ch;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2ch;
  padding-right: 2ch;
}

.to-do-entry .priority-color,
.grid-cells .priority-color {
  width: 2.2ch;
  height: 2.2ch;
  border-radius: 50%;
  border: 2px solid var(--form-green-color);
  background-color: var(--high-priority-color);
}

.to-do-entry .priority > img {
  width: 2.2ch;
}

.to-do-entry .priority > img:focus {
  border: none;
  width: 2.8ch;
  padding: 0.5ch;
}

/* Main: Due Date View */

.by-due-date {
  width: 100%;
}

/* Main: Due Date, Priority and Completed Tasks View - Grid Styling */
.due-view-div,
.priority-view-div,
.completed-view-div {
  display: grid;
  grid-auto-rows: min-content;
  margin-right: 2ch;
  width: 100%;
}

.due-task-header,
.priority-task-header {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.completed-task-header {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.due-task-header,
.priority-task-header,
.completed-task-header {
  border-bottom: 0.3ch solid black;
  font-family: "lancelot";
  font-size: 2ch;
  width: 100%;
  text-align: center;
  padding-bottom: 1ch;
  margin-right: 2ch;
  height: min-content;
}

.due-tasks-row-parent,
.priority-tasks-row-parent,
.completed-tasks-row-parent {
  width: 100%;
  margin-right: 2ch;
  height: min-content;
}

.due-view-row,
.priority-view-row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.completed-tasks-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.due-view-row,
.priority-view-row,
.completed-tasks-row {
  height: min-content;
  padding-top: 1ch;
  padding-bottom: 1ch;
  font-family: "Happy Monkey";
  border-bottom: 1px solid black;
}

.headers,
.grid-cells {
  text-align: center;
  height: min-content;
}

.headers:not(:last-of-type),
.grid-cells:not(:last-of-type) {
  width: 100%;
  border-right: 0.2ch solid black;
}

.due-view-due,
.priority-view-priority {
  grid-column: 1;
}

.due-view-title,
.priority-view-title {
  grid-column: 2;
}

.due-view-description,
.priority-view-description {
  grid-column: 3;
}

.due-view-priority,
.priority-view-due {
  grid-column: 4;
}

.due-view-complete,
.priority-view-complete {
  grid-column: 5;
}

.due-view-delete,
.priority-view-delete {
  grid-column: 6;
}

.complete-view-complete {
  grid-column: 1;
}

.complete-view-title {
  grid-column: 2;
}

.complete-view-description {
  grid-column: 3;
}

.complete-view-priority {
  grid-column: 4;
}

.complete-view-delete {
  grid-column: 5;
}

.grid-cells .priority-color {
  align-items: center;
  width: 2.2ch;
  height: 2.2ch;
  border-radius: 50%;
  border: 2px solid var(--form-green-color);
  background-color: var(--high-priority-color);
  margin-left: auto;
  margin-right: auto;
}

.grid-cells > img {
  width: 2ch;
}

.grid-cells > img:hover {
  width: 2.2ch;
  cursor: pointer;
}

/* Footer */

footer {
  background-color: var(--head-foot-color);
  grid-area: 3 / 1 / 4 / 2;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-content: center;
  align-items: center;

  font-family: "Happy Monkey";
}

footer p {
  height: min-content;
  justify-self: end;
  margin-right: 1ch;
}

footer a:focus {
  outline: 3px solid var(--form-green-color);
}

footer img {
  height: 3.5ch;
  margin-left: 1ch;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* lancelot-regular - latin */\n@font-face {\n  font-family: \"Lancelot\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"./assets/fonts/lancelot-v23-latin-regular.woff2\") format(\"woff2\");\n}\n\n/* happy-monkey-regular - latin */\n@font-face {\n  font-family: \"Happy Monkey\";\n  font-style: normal;\n  font-weight: 400;\n  src: url(\"./assets/fonts/happy-monkey-v14-latin-regular.woff2\")\n    format(\"woff2\");\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  box-sizing: border-box;\n\n  --main-bground-color: #ffe8d6;\n  --head-foot-color: #cca590;\n  --inactive-tab-color: #b7b7a4;\n  --form-green-color: #8b8b76;\n  --to-do-entry-color: #f8d6bc;\n  --checkmark-color: #535347;\n  --low-priority-color: #e7f24f;\n  --medium-priority-color: #eeb250;\n  --high-priority-color: #bc2702;\n}\n\n.container {\n  display: grid;\n  grid-template-rows: 1fr 7.5fr 0.8fr;\n}\n\n/* Header */\n\n.header {\n  background-color: var(--head-foot-color);\n  font-family: \"Lancelot\";\n  font-size: 2.8ch;\n  grid-area: 1 / 1 / 2 / 2;\n\n  display: grid;\n  grid-template-columns: 5fr 0.7fr;\n\n  align-items: center;\n}\n\n.header h1 {\n  height: min-content;\n  align-self: center;\n  margin-left: 1ch;\n}\n\n.header button.show-form-btn,\n.header button.tab-btn {\n  height: 8ch;\n  border: none;\n  margin-right: 5ch;\n  background-color: var(--head-foot-color);\n  cursor: pointer;\n}\n\n.header button.show-form-btn:focus {\n  border: 1px solid var(--main-bground-color);\n}\n\n/* Main */\n\n.main {\n  background-color: var(--main-bground-color);\n  grid-area: 2 / 1 / 3 / 2;\n  position: relative;\n\n  display: grid;\n  grid-template-columns: 1fr 5fr;\n}\n\n/* Main: Side-Nav */\n\n.cat-form-visible {\n  pointer-events: none;\n}\n\n.side-nav {\n  grid-area: 1 / 1 / 2 / 2;\n  background-color: var(--inactive-tab-color);\n}\n\n.forms-box {\n  grid-area: 1 / 2 / 2 / 3;\n  min-height: 100%;\n  height: min-content;\n  margin: 0 2ch;\n}\n\n.content-box {\n  grid-area: 1 / 2 / 2 / 3;\n  min-height: 100%;\n  height: min-content;\n  margin: 0 2ch;\n}\n\n.tab-btn {\n  background-color: var(--inactive-tab-color);\n  font-family: \"Lancelot\";\n  font-size: 3ch;\n  border: none;\n\n  width: 100%;\n  height: 10ch;\n  border-bottom: solid 1px var(--main-bground-color);\n\n  cursor: pointer;\n}\n\n.btn-ctrl:focus {\n  outline: 3px solid var(--form-green-color);\n}\n\n.btn-ctrl--active {\n  background-color: var(--main-bground-color);\n}\n\n.tab-btn:last-child {\n  border-bottom: none;\n}\n\n/* Main: Tab opening messages */\n.add-cat-msg {\n  display: block;\n  width: 100%;\n  text-align: center;\n}\n\n/* Main: To-Do-Form */\n.form-div,\n.edit-form-div {\n  display: none;\n  position: absolute;\n  z-index: 10;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  overflow: scroll;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5ch;\n  height: min-content;\n  min-width: min-content;\n  width: 50%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 5ch;\n  padding: 5ch;\n  background-color: var(--inactive-tab-color);\n  border-radius: 3ch;\n  outline: 1px solid black;\n  outline-offset: -2ch;\n}\n\n.req-msg {\n  font-family: \"Happy Monkey\";\n  font-size: 2.8ch;\n  text-align: center;\n  margin-bottom: 1.5ch;\n}\n\n.form-line.hidden {\n  display: none;\n}\n\n.form-line {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.category-name {\n  margin-top: 1.5ch;\n  font-size: 2.2ch;\n  font-family: \"Happy Monkey\";\n}\n\n.instruct {\n  display: flex;\n  justify-content: end;\n  margin-top: -1.4ch;\n}\n\n.title-msg::before {\n  content: \"Add a title.\";\n  font-family: \"Happy Monkey\";\n  font-size: 1.8ch;\n}\n\n.priority-msg::before {\n  content: \"Choose a priority level.\";\n  font-family: \"Happy Monkey\";\n  font-size: 1.8ch;\n}\n\n.description-msg::before {\n  content: \"Add details (optional).\";\n  font-family: \"Happy Monkey\";\n  font-size: 1.8ch;\n}\n\n.due-date-msg::before {\n  content: \"Select a date and time.\";\n  font-family: \"Happy Monkey\";\n  font-size: 1.8ch;\n}\n\n.btn-line,\n.select-btn-line,\n.cat-btn-line {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 3ch;\n  margin-top: 4ch;\n}\n\n.form-line > label,\n.category-line > label,\n.complete-container > label {\n  display: inline-block;\n  width: 15ch;\n  font-family: \"Happy Monkey\";\n  font-size: 2.15ch;\n  margin-top: 1.5ch;\n}\n\ninput[type=\"text\"],\ninput[type=\"datetime-local\"],\n.task-priority {\n  display: inline-block;\n  flex: 1;\n  height: 3ch;\n  width: 10%;\n  padding-left: 1ch;\n  font-family: \"Happy Monkey\";\n  font-size: 1.9ch;\n  background-color: var(--main-bground-color);\n  border-radius: 1ch;\n  border: 0.2ch solid var(--form-green-color);\n  margin-top: 1.5ch;\n}\n\ntextarea {\n  flex: 1;\n  padding-left: 1ch;\n  font-family: \"Happy Monkey\";\n  font-size: 1.9ch;\n  background-color: var(--main-bground-color);\n  border-radius: 1ch;\n  border: 0.2ch solid var(--form-green-color);\n  resize: vertical;\n}\n\ninput[type=\"text\"]:focus,\ntextarea:focus,\ninput[type=\"datetime-local\"]:focus,\n.task-priority:focus {\n  outline: 2px solid var(--form-green-color);\n}\n\ninput[type=\"text\"]:valid {\n  background-color: var(--main-bground-color);\n}\n\nbutton.add-to-do,\nbutton.edit-to-do,\nbutton.cancel-category,\nbutton.cancel-to-do {\n  font-family: \"Happy Monkey\";\n  font-size: 1.8ch;\n  width: 8ch;\n  height: min-content;\n  background-color: var(--main-bground-color);\n  padding: 0.8ch;\n  border-radius: 3ch;\n  border: 1px solid var(--head-foot-color);\n}\n\nbutton.add-to-do:hover,\nbutton.edit-to-do:hover,\nbutton.cancel-category:hover,\nbutton.cancel-to-do:hover {\n  background-color: var(--form-green-color);\n  cursor: pointer;\n}\n\nbutton.add-to-do:focus,\nbutton.edit-to-do:focus,\nbutton.cancel-category:focus,\nbutton.cancel-to-do:focus {\n  border: 2px solid var(--form-green-color);\n  outline: 2px solid var(--form-green-color);\n}\n\n/* Main: Tab Content */\n\n.tab-content {\n  display: none;\n  grid-area: 1 / 2 / 2 / 3;\n  font-family: \"Happy Monkey\";\n  margin-top: 2ch;\n  margin-left: 2ch;\n  width: 100%;\n  height: 100%;\n}\n\n.tab-content--active {\n  display: initial;\n  grid-area: 1 / 2 / 2 / 3;\n  font-family: \"Happy Monkey\";\n  margin-top: 2ch;\n  margin-left: 2ch;\n  width: 100%;\n  height: 100%;\n}\n\n/* Main: Category View */\n\n/* Category View: New Category Form */\n\n.select-form-container,\n.create-cat-warning-div,\n.cat-form-container {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  right: 0;\n}\n\n.select-form,\n.create-cat-warning,\n.category-form {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n  background-color: var(--head-foot-color);\n  height: min-content;\n  width: 50ch;\n  margin-top: 5ch;\n  padding: 1.5ch;\n  border-radius: 1ch;\n}\n\n.select-ask,\n.must-create-cat {\n  text-align: center;\n  font-family: \"Lancelot\";\n}\n\ninput[type=\"text\"].category {\n  margin-left: -5ch;\n  width: 70%;\n}\n\n.select-btn-line,\n.cat-btn-line {\n  margin-top: 2ch;\n}\n\nbutton.add-category,\nbutton.agree-btn,\nbutton.select-to-do-btn {\n  font-family: \"Happy Monkey\";\n  font-size: 1.8ch;\n  width: 20ch;\n  height: min-content;\n  background-color: var(--main-bground-color);\n  padding: 0.8ch;\n  border-radius: 3ch;\n  border: 1px solid var(--head-foot-color);\n}\n\nbutton.add-category:hover,\nbutton.agree-btn:hover,\nbutton.select-to-do-btn:hover {\n  background-color: var(--form-green-color);\n  cursor: pointer;\n}\n\nbutton.add-category:focus,\nbutton.agree-btn:focus,\nbutton.select-to-do-btn:focus {\n  outline: 2px solid var(--form-green-color);\n}\n\n/* Category View: New Category Section */\n.cat-section {\n  width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 4ch;\n}\n\n.cat-card {\n  font-family: \"Lancelot\";\n  font-size: 2ch;\n  background-color: var(--inactive-tab-color);\n  width: 30ch;\n  height: min-content;\n  display: flex;\n  flex-direction: column;\n  gap: 3ch;\n  align-items: center;\n  padding: 1ch;\n  border-radius: 1ch;\n  margin-bottom: 2ch;\n}\n\n.cat-content {\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.new-to-do {\n  font-family: \"Happy Monkey\";\n  font-size: 2ch;\n  width: 10ch;\n  height: 3ch;\n  border: 1px solid var(--form-green-color);\n  border-radius: 2ch;\n  background-color: var(--head-foot-color);\n  cursor: pointer;\n}\n\n.new-to-do:hover {\n  background-color: var(--main-bground-color);\n}\n\n.new-to-do:focus {\n  outline: 2px solid var(--form-green-color);\n}\n\n.cat-card .delete-icon {\n  display: flex;\n  width: 100%;\n  height: min-content;\n  justify-content: flex-end;\n  margin-right: 1ch;\n  margin-bottom: 0.5ch;\n}\n\n.cat-card .delete-icon > img {\n  width: 2ch;\n}\n\n.cat-card .delete-icon > img:hover {\n  width: 2.2ch;\n  cursor: pointer;\n}\n\n.cat-card .delete-icon > img:focus {\n  border: none;\n  width: 2.8ch;\n  padding: 0.5ch;\n}\n\n/* Category Section: New To Do Item */\n\n.to-do-entry {\n  margin: 1ch 0 1ch 0;\n  background-color: var(--to-do-entry-color);\n  border-radius: 1ch;\n  padding: 1ch 0 1ch 0;\n}\n\n.to-do-entry .title {\n  text-decoration: underline;\n  font-size: 2.6ch;\n  padding-bottom: 1ch;\n}\n\n.details-title,\n.due-title {\n  width: 100%;\n  text-align: left;\n  font-size: 2.5ch;\n  margin-left: 1.5ch;\n}\n\n.details,\n.show-due-date {\n  padding-bottom: 1ch;\n  font-family: \"Happy Monkey\";\n}\n\n.to-do-entry > label {\n  width: 10ch;\n  margin-bottom: 1ch;\n}\n\n.complete-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.7ch;\n}\n\ninput[type=\"checkbox\"].complete {\n  align-self: center;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -o-appearance: none;\n  appearance: none;\n  height: 2.5ch;\n  width: 2.5ch;\n  border: 1px solid var(--form-green-color);\n  border-radius: 1ch;\n  outline: none;\n  background-color: var(--main-bground-color);\n  cursor: pointer;\n  position: relative;\n}\n\ninput[type=\"checkbox\"].complete:focus {\n  outline: 2px solid var(--form-green-color);\n}\n\ninput[type=\"checkbox\"].complete:checked {\n  border: 1px solid var(--form-green-color);\n  background-color: var(--main-bground-color);\n}\n\ninput[type=\"checkbox\"].complete:checked::before {\n  content: \"\\2713\";\n  color: var(--checkmark-color);\n  position: absolute;\n  bottom: -0.4ch;\n  font-size: 4ch;\n}\n\n.to-do-entry .delete-icon {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 2.5ch;\n}\n\n.to-do-entry .delete-icon > img {\n  width: 2ch;\n  margin-top: 4ch;\n}\n\n.to-do-entry .delete-icon > img:hover {\n  width: 2.2ch;\n  margin-top: 2.1ch;\n  cursor: pointer;\n}\n\n.cat-card .delete-icon > img:focus {\n  border: none;\n  width: 2.8ch;\n  height: 3ch;\n  padding: 0.5ch;\n}\n\n.to-do-entry .priority {\n  width: 100%;\n  height: 3ch;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 2ch;\n  padding-right: 2ch;\n}\n\n.to-do-entry .priority-color,\n.grid-cells .priority-color {\n  width: 2.2ch;\n  height: 2.2ch;\n  border-radius: 50%;\n  border: 2px solid var(--form-green-color);\n  background-color: var(--high-priority-color);\n}\n\n.to-do-entry .priority > img {\n  width: 2.2ch;\n}\n\n.to-do-entry .priority > img:focus {\n  border: none;\n  width: 2.8ch;\n  padding: 0.5ch;\n}\n\n/* Main: Due Date View */\n\n.by-due-date {\n  width: 100%;\n}\n\n/* Main: Due Date, Priority and Completed Tasks View - Grid Styling */\n.due-view-div,\n.priority-view-div,\n.completed-view-div {\n  display: grid;\n  grid-auto-rows: min-content;\n  margin-right: 2ch;\n  width: 100%;\n}\n\n.due-task-header,\n.priority-task-header {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n}\n\n.completed-task-header {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.due-task-header,\n.priority-task-header,\n.completed-task-header {\n  border-bottom: 0.3ch solid black;\n  font-family: \"lancelot\";\n  font-size: 2ch;\n  width: 100%;\n  text-align: center;\n  padding-bottom: 1ch;\n  margin-right: 2ch;\n  height: min-content;\n}\n\n.due-tasks-row-parent,\n.priority-tasks-row-parent,\n.completed-tasks-row-parent {\n  width: 100%;\n  margin-right: 2ch;\n  height: min-content;\n}\n\n.due-view-row,\n.priority-view-row {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n}\n\n.completed-tasks-row {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n}\n\n.due-view-row,\n.priority-view-row,\n.completed-tasks-row {\n  height: min-content;\n  padding-top: 1ch;\n  padding-bottom: 1ch;\n  font-family: \"Happy Monkey\";\n  border-bottom: 1px solid black;\n}\n\n.headers,\n.grid-cells {\n  text-align: center;\n  height: min-content;\n}\n\n.headers:not(:last-of-type),\n.grid-cells:not(:last-of-type) {\n  width: 100%;\n  border-right: 0.2ch solid black;\n}\n\n.due-view-due,\n.priority-view-priority {\n  grid-column: 1;\n}\n\n.due-view-title,\n.priority-view-title {\n  grid-column: 2;\n}\n\n.due-view-description,\n.priority-view-description {\n  grid-column: 3;\n}\n\n.due-view-priority,\n.priority-view-due {\n  grid-column: 4;\n}\n\n.due-view-complete,\n.priority-view-complete {\n  grid-column: 5;\n}\n\n.due-view-delete,\n.priority-view-delete {\n  grid-column: 6;\n}\n\n.complete-view-complete {\n  grid-column: 1;\n}\n\n.complete-view-title {\n  grid-column: 2;\n}\n\n.complete-view-description {\n  grid-column: 3;\n}\n\n.complete-view-priority {\n  grid-column: 4;\n}\n\n.complete-view-delete {\n  grid-column: 5;\n}\n\n.grid-cells .priority-color {\n  align-items: center;\n  width: 2.2ch;\n  height: 2.2ch;\n  border-radius: 50%;\n  border: 2px solid var(--form-green-color);\n  background-color: var(--high-priority-color);\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.grid-cells > img {\n  width: 2ch;\n}\n\n.grid-cells > img:hover {\n  width: 2.2ch;\n  cursor: pointer;\n}\n\n/* Footer */\n\nfooter {\n  background-color: var(--head-foot-color);\n  grid-area: 3 / 1 / 4 / 2;\n\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-content: center;\n  align-items: center;\n\n  font-family: \"Happy Monkey\";\n}\n\nfooter p {\n  height: min-content;\n  justify-self: end;\n  margin-right: 1ch;\n}\n\nfooter a:focus {\n  outline: 3px solid var(--form-green-color);\n}\n\nfooter img {\n  height: 3.5ch;\n  margin-left: 1ch;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isAfter/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isAfter/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAfter)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|Number} date - the date that should be after the other one to return true
 * @param {Date|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter(dirtyDate, dirtyDateToCompare) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dateToCompare = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateToCompare);
  return date.getTime() > dateToCompare.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFromStorage: () => (/* binding */ buildFromStorage),
/* harmony export */   cancelCategoryForm: () => (/* binding */ cancelCategoryForm),
/* harmony export */   cancelToDo: () => (/* binding */ cancelToDo),
/* harmony export */   displayByView: () => (/* binding */ displayByView),
/* harmony export */   displayByViewWithKeyboard: () => (/* binding */ displayByViewWithKeyboard),
/* harmony export */   handleEventDelegation: () => (/* binding */ handleEventDelegation),
/* harmony export */   handleEventDelegationWithKeyboard: () => (/* binding */ handleEventDelegationWithKeyboard),
/* harmony export */   hideCategoryWarning: () => (/* binding */ hideCategoryWarning),
/* harmony export */   markComplete: () => (/* binding */ markComplete),
/* harmony export */   selectActionForm: () => (/* binding */ selectActionForm),
/* harmony export */   showCategoryForm: () => (/* binding */ showCategoryForm),
/* harmony export */   showCategoryWarning: () => (/* binding */ showCategoryWarning),
/* harmony export */   submitNewCategory: () => (/* binding */ submitNewCategory),
/* harmony export */   submitToDo: () => (/* binding */ submitToDo)
/* harmony export */ });
/* harmony import */ var _querySelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./querySelectors */ "./src/querySelectors.js");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/view.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dates */ "./src/dates.js");





function buildFromStorage() {
  if (_model__WEBPACK_IMPORTED_MODULE_2__.categoriesArray.length === 0) {
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.showCatMessage)();
  } else {
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceCategorySections)();
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.createCategorySection)();
    (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByCreationDate)();
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceToDoItems)();
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayToDoEntry)();
    (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
    (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesCategory)();
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceCompletedRows)();
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.showCompletedTasks)();
  }
}

function selectActionForm() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.addBtn.addEventListener("pointerdown", _view__WEBPACK_IMPORTED_MODULE_1__.selectAddType);

  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.addBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.selectAddType)();
    }
  });
}

function showCategoryForm() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.addCategoryBtn.addEventListener("pointerdown", _view__WEBPACK_IMPORTED_MODULE_1__.newCategoryForm);

  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.addCategoryBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.newCategoryForm)();
    }
  });
}

function showCategoryWarning() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.selectToDoBtn.addEventListener("pointerdown", function () {
    if (_model__WEBPACK_IMPORTED_MODULE_2__.categoriesArray.length === 0) {
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayCategoryWarning)();
    } else {
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.closeSelectionBox)();
    }
  });

  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.selectToDoBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      if (_model__WEBPACK_IMPORTED_MODULE_2__.categoriesArray.length === 0) {
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayCategoryWarning)();
      } else {
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.closeSelectionBox)();
      }
    }
  });
}

function hideCategoryWarning() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.agreeBtn.addEventListener("pointerdown", function () {
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.closeToDoWarning)();
  });

  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.agreeBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.closeToDoWarning)();
    }
  });
}

function cancelCategoryForm() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.cancelCategoryBtn.addEventListener("pointerdown", _view__WEBPACK_IMPORTED_MODULE_1__.hideCategoryForm);

  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.cancelCategoryBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.hideCategoryForm)();
    }
  });
}

function cancelToDo() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.cancelToDoBtn.addEventListener("pointerdown", _view__WEBPACK_IMPORTED_MODULE_1__.hideToDoForm);

  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.cancelToDoBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.hideToDoForm)();
    }
  });
}

function submitNewCategory() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.categoryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    (0,_model__WEBPACK_IMPORTED_MODULE_2__.newCategoryArray)();
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.hideCategoryForm)();
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceCategorySections)();
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.createCategorySection)();
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceToDoItems)();
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayToDoEntry)();
  });
}

function submitToDo() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.toDoForm.addEventListener("pointerdown", (e) => {
    if (e.target === _querySelectors__WEBPACK_IMPORTED_MODULE_0__.addToDoBtn) {
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.newToDoItem)();
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByCreationDate)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.hideToDoForm)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceToDoItems)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayToDoEntry)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesCategory)();
    }

    if (e.target === _querySelectors__WEBPACK_IMPORTED_MODULE_0__.editToDoBtn) {
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.editToDoInStorage)();
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByCreationDate)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.hideToDoForm)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceToDoItems)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayToDoEntry)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesCategory)();
    }
  });

  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.toDoForm.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.target === _querySelectors__WEBPACK_IMPORTED_MODULE_0__.addToDoBtn) {
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.newToDoItem)();
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByCreationDate)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.hideToDoForm)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceToDoItems)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayToDoEntry)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesCategory)();
    }

    if (e.key === "Enter" && e.target === _querySelectors__WEBPACK_IMPORTED_MODULE_0__.editToDoBtn) {
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.editToDoInStorage)();
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByCreationDate)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.hideToDoForm)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceToDoItems)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayToDoEntry)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesCategory)();
    }
  });
}

function displayByView() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.sideNav.addEventListener("pointerdown", () => {
    // Display by Category
    if (_querySelectors__WEBPACK_IMPORTED_MODULE_0__.categoryBtn.classList.contains("cat-tab")) {
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByCreationDate)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceToDoItems)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayToDoEntry)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesCategory)();
    }
    // Display by Due Date
    if (_querySelectors__WEBPACK_IMPORTED_MODULE_0__.dueDateBtn.classList.contains("date-tab")) {
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByDueDate)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceDueDateRows)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.showByDueDate)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesDueView)();
    }
    // Display by Priority
    if (_querySelectors__WEBPACK_IMPORTED_MODULE_0__.priorityBtn.classList.contains("priority-tab")) {
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByPriority)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.replacePriorityRows)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.showByPriority)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesPriority)();
    }
  });
}

function displayByViewWithKeyboard() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.sideNav.addEventListener("keydown", (event) => {
    // Display by Category
    if (event.key === "Enter" && _querySelectors__WEBPACK_IMPORTED_MODULE_0__.categoryBtn.classList.contains("cat-tab")) {
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByCreationDate)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceToDoItems)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayToDoEntry)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesCategory)();
    }
    // Display by Due Date
    if (event.key === "Enter" && _querySelectors__WEBPACK_IMPORTED_MODULE_0__.dueDateBtn.classList.contains("date-tab")) {
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByDueDate)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceDueDateRows)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.showByDueDate)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesDueView)();
    }
    // Display by Priority
    if (
      event.key === "Enter" &&
      _querySelectors__WEBPACK_IMPORTED_MODULE_0__.priorityBtn.classList.contains("priority-tab")
    ) {
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByPriority)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.replacePriorityRows)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.showByPriority)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesPriority)();
    }
  });
}

function handleEventDelegation() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.contentBox.addEventListener("pointerdown", function (event) {
    //Display To Do Entry Form
    const addBtn = event.target.dataset.category;
    const addBtns = Array.from(document.querySelectorAll("[data-category"));
    addBtns.forEach((button) => {
      if (event.target === button) {
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.toDoFormDisplay)(addBtn);
      }
    });

    // Delete To Do Items
    const deleteToDoItem = event.target.dataset.itemDelete;
    const toDoEntries = Array.from(
      document.querySelectorAll(["[data-item-delete]"])
    );
    toDoEntries.forEach((entry) => {
      if (event.target === entry) {
        (0,_model__WEBPACK_IMPORTED_MODULE_2__.removeToDoFromCategory)(deleteToDoItem);
        (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByCreationDate)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceToDoItems)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayToDoEntry)();
        (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
        (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesCategory)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceCompletedRows)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.showCompletedTasks)();

        if (_querySelectors__WEBPACK_IMPORTED_MODULE_0__.dueDateBtn.classList.contains("btn-ctrl--active")) {
          (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByDueDate)();
          (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceDueDateRows)();
          (0,_view__WEBPACK_IMPORTED_MODULE_1__.showByDueDate)();
          (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
          (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesDueView)();
        }
        if (_querySelectors__WEBPACK_IMPORTED_MODULE_0__.priorityBtn.classList.contains("btn-ctrl--active")) {
          (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByPriority)();
          (0,_view__WEBPACK_IMPORTED_MODULE_1__.replacePriorityRows)();
          (0,_view__WEBPACK_IMPORTED_MODULE_1__.showByPriority)();
          (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
          (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesPriority)();
        }
      }
    });

    // Delete Category with any and all entries
    const deleteCategoryIndex = event.target.dataset.deleteCatIndex;
    const deleteCategoryName = event.target.dataset.deleteCat;
    const deleteCatBtns = Array.from(
      document.querySelectorAll("[data-delete-cat")
    );
    deleteCatBtns.forEach((btn) => {
      if (event.target === btn) {
        (0,_model__WEBPACK_IMPORTED_MODULE_2__.removeCategory)(deleteCategoryIndex, deleteCategoryName);
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceCategorySections)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.createCategorySection)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceToDoItems)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayToDoEntry)();
        (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
        (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesCategory)();
      }
    });

    // Display Form to edit To Do entry
    const editIcon = parseInt(event.target.dataset.edit);
    const editIconCat = event.target.dataset.editCat;
    const editBtns = Array.from(document.querySelectorAll("[data-edit"));
    editBtns.forEach((edit) => {
      if (event.target === edit) {
        console.log(typeof editIcon);
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.showFormWithInfo)(editIcon, editIconCat);
      }
    });
  });
}

function handleEventDelegationWithKeyboard() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.contentBox.addEventListener("keydown", function (event) {
    //Display To Do Entry Form
    const addBtn = event.target.dataset.category;
    const addBtns = Array.from(document.querySelectorAll("[data-category"));
    addBtns.forEach((button) => {
      if (event.key === "Enter" && event.target === button) {
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.toDoFormDisplay)(addBtn);
      }
    });

    // Delete To Do Items
    const deleteToDoItem = event.target.dataset.itemDelete;
    const toDoEntries = Array.from(
      document.querySelectorAll(["[data-item-delete]"])
    );
    toDoEntries.forEach((entry) => {
      if (event.key === "Enter" && event.target === entry) {
        (0,_model__WEBPACK_IMPORTED_MODULE_2__.removeToDoFromCategory)(deleteToDoItem);
        (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByCreationDate)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceToDoItems)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayToDoEntry)();
        (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
        (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesCategory)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceCompletedRows)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.showCompletedTasks)();

        if (_querySelectors__WEBPACK_IMPORTED_MODULE_0__.dueDateBtn.classList.contains("btn-ctrl--active")) {
          (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByDueDate)();
          (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceDueDateRows)();
          (0,_view__WEBPACK_IMPORTED_MODULE_1__.showByDueDate)();
          (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
          (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesDueView)();
        }
        if (_querySelectors__WEBPACK_IMPORTED_MODULE_0__.priorityBtn.classList.contains("btn-ctrl--active")) {
          (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByPriority)();
          (0,_view__WEBPACK_IMPORTED_MODULE_1__.replacePriorityRows)();
          (0,_view__WEBPACK_IMPORTED_MODULE_1__.showByPriority)();
          (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
          (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesPriority)();
        }
      }
    });

    // Delete Category with any and all entries
    const deleteCategoryIndex = event.target.dataset.deleteCatIndex;
    const deleteCategoryName = event.target.dataset.deleteCat;
    const deleteCatBtns = Array.from(
      document.querySelectorAll("[data-delete-cat")
    );
    deleteCatBtns.forEach((btn) => {
      if (event.key === "Enter" && event.target === btn) {
        (0,_model__WEBPACK_IMPORTED_MODULE_2__.removeCategory)(deleteCategoryIndex, deleteCategoryName);
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceCategorySections)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.createCategorySection)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceToDoItems)();
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayToDoEntry)();
        (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
        (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesCategory)();
      }
    });

    // Display Form to edit To Do entry
    const editIcon = parseInt(event.target.dataset.edit);
    const editBtns = Array.from(document.querySelectorAll("[data-edit"));
    editBtns.forEach((edit) => {
      if (event.key === "Enter" && event.target === edit) {
        console.log(typeof editIcon);
        (0,_view__WEBPACK_IMPORTED_MODULE_1__.showFormWithInfo)(editIcon);
      }
    });
  });
}

function markComplete() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.contentBox.addEventListener("change", (event) => {
    const taskIndex = event.target.dataset.check;

    if (event.target === taskIndex) console.log(taskIndex);
    (0,_model__WEBPACK_IMPORTED_MODULE_2__.changeCompleteStatus)(taskIndex);
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceCompletedRows)();
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.showCompletedTasks)();
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceToDoItems)();
    (0,_view__WEBPACK_IMPORTED_MODULE_1__.displayToDoEntry)();
    (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
    (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesCategory)();

    if (_querySelectors__WEBPACK_IMPORTED_MODULE_0__.dueDateBtn.classList.contains("btn-ctrl--active")) {
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByDueDate)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.replaceDueDateRows)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.showByDueDate)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesDueView)();
    }
    if (_querySelectors__WEBPACK_IMPORTED_MODULE_0__.priorityBtn.classList.contains("btn-ctrl--active")) {
      (0,_model__WEBPACK_IMPORTED_MODULE_2__.sortByPriority)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.replacePriorityRows)();
      (0,_view__WEBPACK_IMPORTED_MODULE_1__.showByPriority)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.findPastDue)();
      (0,_dates__WEBPACK_IMPORTED_MODULE_3__.formatDatesPriority)();
    }
  });
}


/***/ }),

/***/ "./src/dates.js":
/*!**********************!*\
  !*** ./src/dates.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   findPastDue: () => (/* binding */ findPastDue),
/* harmony export */   formatDatesCategory: () => (/* binding */ formatDatesCategory),
/* harmony export */   formatDatesDueView: () => (/* binding */ formatDatesDueView),
/* harmony export */   formatDatesPriority: () => (/* binding */ formatDatesPriority),
/* harmony export */   limitDatePicker: () => (/* binding */ limitDatePicker)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isAfter/index.js");
/* harmony import */ var _querySelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./querySelectors */ "./src/querySelectors.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/model.js");




function formatDatesCategory() {
  const dueDateDisplay = document.querySelectorAll(".show-due-date");
  dueDateDisplay.forEach((date) => {
    const formatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(date.textContent, 0), "PPp");
    date.textContent = formatted;
    date.style.textAlign = "center";
  });
}

function formatDatesDueView() {
  const dueDateDisplay = document.querySelectorAll(".show-date-due");

  dueDateDisplay.forEach((date) => {
    const formatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(date.textContent, 0), "PPp");
    date.textContent = formatted;
  });
}

function formatDatesPriority() {
  const dueDateDisplay = document.querySelectorAll(".show-date-priority");

  dueDateDisplay.forEach((date) => {
    const formatted = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(date.textContent, 0), "PPp");
    date.textContent = formatted;
  });
}

function limitDatePicker() {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let hour = today.getHours();
  let minute = today.getMinutes();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }

  const minDate = year + "-" + month + "-" + day + "T" + hour + ":" + minute;
  console.log(minDate);

  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.dateTimePicker.setAttribute("min", minDate);
  _querySelectors__WEBPACK_IMPORTED_MODULE_0__.creationTimePicker.setAttribute("value", minDate);

  return minDate;
}

function findPastDue() {
  const currentDateTime = limitDatePicker();

  for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_1__.toDoItemsArray.length; i++) {
    const taskDue = _model__WEBPACK_IMPORTED_MODULE_1__.toDoItemsArray[i].dueDate;

    const comparison = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(
      (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(currentDateTime, 0),
      (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(taskDue, 0)
    );
    console.log(comparison);

    const dueDateDisplay = Array.from(
      document.querySelectorAll(".show-due-date")
    );

    dueDateDisplay.forEach((date, index) => {
      if (index === _model__WEBPACK_IMPORTED_MODULE_1__.toDoItemsArray.indexOf(_model__WEBPACK_IMPORTED_MODULE_1__.toDoItemsArray[i])) {
        if (comparison === true) {
          date.style.color = "#bc2702";
        }
      }
    });
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _tabControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabControl */ "./src/tabControl.js");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller */ "./src/controller.js");




document.addEventListener("DOMContentLoaded", () => {
  (0,_tabControl__WEBPACK_IMPORTED_MODULE_1__["default"])();

  document.querySelectorAll(".container").forEach((tabBtn) => {
    tabBtn.querySelector(".btn-ctrl").click();
  });

  document.querySelectorAll(".content-box").forEach((tabContent) => {
    tabContent.querySelector(".tab-content").click();
  });

  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.buildFromStorage)();
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.selectActionForm)();
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.showCategoryForm)();
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.showCategoryWarning)();
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.hideCategoryWarning)();
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.cancelCategoryForm)();
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.submitNewCategory)();
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.submitToDo)();
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.cancelToDo)();
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.displayByView)();
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.displayByViewWithKeyboard)();
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.handleEventDelegation)();
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.handleEventDelegationWithKeyboard)();
  (0,_controller__WEBPACK_IMPORTED_MODULE_2__.markComplete)();
});


/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categoriesArray: () => (/* binding */ categoriesArray),
/* harmony export */   changeCompleteStatus: () => (/* binding */ changeCompleteStatus),
/* harmony export */   editToDoInStorage: () => (/* binding */ editToDoInStorage),
/* harmony export */   newCategoryArray: () => (/* binding */ newCategoryArray),
/* harmony export */   newToDoItem: () => (/* binding */ newToDoItem),
/* harmony export */   removeCategory: () => (/* binding */ removeCategory),
/* harmony export */   removeToDoFromCategory: () => (/* binding */ removeToDoFromCategory),
/* harmony export */   sortByCreationDate: () => (/* binding */ sortByCreationDate),
/* harmony export */   sortByDueDate: () => (/* binding */ sortByDueDate),
/* harmony export */   sortByPriority: () => (/* binding */ sortByPriority),
/* harmony export */   toDoItemsArray: () => (/* binding */ toDoItemsArray)
/* harmony export */ });
/* harmony import */ var _querySelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./querySelectors */ "./src/querySelectors.js");


let categories = JSON.parse(localStorage.categories || "[]");
localStorage.setItem("categories", JSON.stringify(categories));
let categoriesArray = JSON.parse(localStorage.getItem("categories"));

let toDoItems = JSON.parse(localStorage.toDoItems || "[]");
localStorage.setItem("toDoItems", JSON.stringify(toDoItems));
let toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));

function newCategoryArray() {
  const newCategory = _querySelectors__WEBPACK_IMPORTED_MODULE_0__.categoryInput.value.trim();

  if (
    categories.some(
      (category) => category.toLowerCase() === newCategory.toLowerCase()
    )
  ) {
    alert("Duplicate category. Please choose a new category title");
  } else {
    let addCategory = JSON.parse(localStorage.getItem("categories"));
    addCategory.push(newCategory);
    localStorage.setItem("categories", JSON.stringify(addCategory));
    categoriesArray = JSON.parse(localStorage.getItem("categories"));
    console.log(categoriesArray);
  }
}

function newToDoItem() {
  const category = _querySelectors__WEBPACK_IMPORTED_MODULE_0__.categoryName.textContent;
  const title = _querySelectors__WEBPACK_IMPORTED_MODULE_0__.toDoTitle.value.trim();
  const priority = _querySelectors__WEBPACK_IMPORTED_MODULE_0__.toDoPriority.value.trim();
  const description = _querySelectors__WEBPACK_IMPORTED_MODULE_0__.toDoDescription.value.trim();
  const dueDate = _querySelectors__WEBPACK_IMPORTED_MODULE_0__.toDoDueDate.value.trim();
  const creationTime = _querySelectors__WEBPACK_IMPORTED_MODULE_0__.creationTimePicker.value.trim();
  const completedTask = false;

  const toDoItem = {
    category,
    title,
    priority,
    description,
    dueDate,
    creationTime,
    completedTask,
  };
  let addToDoItem = JSON.parse(localStorage.getItem("toDoItems"));
  addToDoItem.push(toDoItem);
  localStorage.setItem("toDoItems", JSON.stringify(addToDoItem));
  toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
  console.log(toDoItemsArray);
}

function removeToDoFromCategory(removedItem) {
  if (removedItem) {
    let confirmRemove = confirm(
      "Are you sure you want to delete this entry? This cannot be undone"
    );

    if (confirmRemove) {
      let arrayCount = localStorage.length;
      if (arrayCount) {
        for (let i = 0; i < arrayCount; i++) {
          let key = localStorage.key(i);
          console.log(key);

          if (key === "toDoItems") {
            let updateArray = JSON.parse(localStorage.getItem("toDoItems"));

            updateArray.splice(removedItem, 1);

            localStorage.setItem("toDoItems", JSON.stringify(updateArray));
            toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
            console.log(toDoItemsArray);
          }
        }
      }
    }
  }
}

function editToDoInStorage(entryIndex) {
  let arrayCount = localStorage.length;
  if (arrayCount) {
    for (let i = 0; i < arrayCount; i++) {
      let key = localStorage.key(i);
      console.log(key);

      if (key === "toDoItems") {
        let updateArray = JSON.parse(localStorage.getItem("toDoItems"));

        updateArray.at(entryIndex).category = _querySelectors__WEBPACK_IMPORTED_MODULE_0__.categoryName.textContent;
        updateArray.at(entryIndex).title = _querySelectors__WEBPACK_IMPORTED_MODULE_0__.toDoTitle.value.trim();
        updateArray.at(entryIndex).priority = _querySelectors__WEBPACK_IMPORTED_MODULE_0__.toDoPriority.value.trim();
        updateArray.at(entryIndex).description = _querySelectors__WEBPACK_IMPORTED_MODULE_0__.toDoDescription.value.trim();
        updateArray.at(entryIndex).dueDate = _querySelectors__WEBPACK_IMPORTED_MODULE_0__.toDoDueDate.value.trim();

        localStorage.setItem("toDoItems", JSON.stringify(updateArray));
        toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
        console.log(toDoItemsArray);
      }
    }
  }
}

function removeCategory(removedIndex, removedCatName) {
  if (removedCatName) {
    console.log(removedIndex);
    console.log(removedCatName);
    let confirmRemoveCat = confirm(
      "Are you sure you want to delete this category with all of its entries? This cannot be undone"
    );

    if (confirmRemoveCat) {
      let editToDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
      const deletedEntriesByCatName = editToDoItemsArray.filter(
        (entry) => entry.category !== removedCatName
      );

      editToDoItemsArray = deletedEntriesByCatName;

      localStorage.setItem("toDoItems", JSON.stringify(editToDoItemsArray));
      toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
      console.log(toDoItemsArray);

      let arrayCount = localStorage.length;
      if (arrayCount) {
        for (let i = 0; i < arrayCount; i++) {
          let key = localStorage.key(i);
          console.log(key);

          if (key === "categories") {
            let updateCategoriesArray = JSON.parse(
              localStorage.getItem("categories")
            );

            updateCategoriesArray.splice(removedCatName, 1);

            localStorage.setItem(
              "categories",
              JSON.stringify(updateCategoriesArray)
            );
            categoriesArray = JSON.parse(localStorage.getItem("categories"));
            console.log(categoriesArray);
          }
        }
      }
    }
  }
}

function changeCompleteStatus(taskIndex) {
  let checkComplete = JSON.parse(localStorage.getItem("toDoItems"));

  if (checkComplete.at(taskIndex)) {
    if (checkComplete[taskIndex].completedTask === false) {
      checkComplete[taskIndex].completedTask = true;

      let arrayCount = localStorage.length;
      if (arrayCount) {
        for (let i = 0; i < arrayCount; i++) {
          let key = localStorage.key(i);
          console.log(key);

          if (key === "toDoItems") {
            localStorage.setItem("toDoItems", JSON.stringify(checkComplete));
            toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
            console.log(toDoItemsArray);
          }
        }
      }
    } else {
      let uncheckComplete = JSON.parse(localStorage.getItem("toDoItems"));

      uncheckComplete[taskIndex].completedTask === true;
      uncheckComplete[taskIndex].completedTask = false;

      let arrayCount = localStorage.length;
      if (arrayCount) {
        for (let i = 0; i < arrayCount; i++) {
          let key = localStorage.key(i);
          console.log(key);

          if (key === "toDoItems") {
            localStorage.setItem("toDoItems", JSON.stringify(uncheckComplete));
            toDoItemsArray = JSON.parse(localStorage.getItem("toDoItems"));
            console.log(toDoItemsArray);
          }
        }
      }
    }
  }
}

function sortByCreationDate() {
  toDoItemsArray.sort(
    (date1, date2) =>
      Date.parse(date1.creationTime) - Date.parse(date2.creationTime)
  );

  console.log(toDoItemsArray);
}

function sortByDueDate() {
  toDoItemsArray.sort(
    (date1, date2) => Date.parse(date1.dueDate) - Date.parse(date2.dueDate)
  );

  console.log(toDoItemsArray);
}

function sortByPriority() {
  const importance = {
    low: 3,
    medium: 2,
    high: 1,
  };

  toDoItemsArray.sort(
    (a, b) => importance[a.priority] - importance[b.priority]
  );

  console.log(toDoItemsArray);
}


/***/ }),

/***/ "./src/querySelectors.js":
/*!*******************************!*\
  !*** ./src/querySelectors.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addBtn: () => (/* binding */ addBtn),
/* harmony export */   addCategoryBtn: () => (/* binding */ addCategoryBtn),
/* harmony export */   addCategoryMsg: () => (/* binding */ addCategoryMsg),
/* harmony export */   addToDoBtn: () => (/* binding */ addToDoBtn),
/* harmony export */   agreeBtn: () => (/* binding */ agreeBtn),
/* harmony export */   cancelCategoryBtn: () => (/* binding */ cancelCategoryBtn),
/* harmony export */   cancelToDoBtn: () => (/* binding */ cancelToDoBtn),
/* harmony export */   categoryBtn: () => (/* binding */ categoryBtn),
/* harmony export */   categoryForm: () => (/* binding */ categoryForm),
/* harmony export */   categoryFormBox: () => (/* binding */ categoryFormBox),
/* harmony export */   categoryInput: () => (/* binding */ categoryInput),
/* harmony export */   categoryName: () => (/* binding */ categoryName),
/* harmony export */   categorySection: () => (/* binding */ categorySection),
/* harmony export */   categoryTab: () => (/* binding */ categoryTab),
/* harmony export */   categoryWarning: () => (/* binding */ categoryWarning),
/* harmony export */   completedTasksDiv: () => (/* binding */ completedTasksDiv),
/* harmony export */   contentBox: () => (/* binding */ contentBox),
/* harmony export */   creationTimePicker: () => (/* binding */ creationTimePicker),
/* harmony export */   dateTimePicker: () => (/* binding */ dateTimePicker),
/* harmony export */   dueDateBtn: () => (/* binding */ dueDateBtn),
/* harmony export */   dueDateTaskDiv: () => (/* binding */ dueDateTaskDiv),
/* harmony export */   editToDoBtn: () => (/* binding */ editToDoBtn),
/* harmony export */   priorityBtn: () => (/* binding */ priorityBtn),
/* harmony export */   priorityTaskDiv: () => (/* binding */ priorityTaskDiv),
/* harmony export */   returnToCatTab: () => (/* binding */ returnToCatTab),
/* harmony export */   selectAddTypeDiv: () => (/* binding */ selectAddTypeDiv),
/* harmony export */   selectToDoBtn: () => (/* binding */ selectToDoBtn),
/* harmony export */   sideNav: () => (/* binding */ sideNav),
/* harmony export */   toDoDescription: () => (/* binding */ toDoDescription),
/* harmony export */   toDoDueDate: () => (/* binding */ toDoDueDate),
/* harmony export */   toDoForm: () => (/* binding */ toDoForm),
/* harmony export */   toDoFormContainer: () => (/* binding */ toDoFormContainer),
/* harmony export */   toDoPriority: () => (/* binding */ toDoPriority),
/* harmony export */   toDoTitle: () => (/* binding */ toDoTitle)
/* harmony export */ });
const contentBox = document.querySelector(".content-box");
const selectAddTypeDiv = document.querySelector(
  ".select-form-container"
);
const addCategoryBtn = document.querySelector(".add-category");
const selectToDoBtn = document.querySelector(".select-to-do-btn");
const categoryWarning = document.querySelector(
  ".create-cat-warning-div"
);
const agreeBtn = document.querySelector(".agree-btn");
const addCategoryMsg = document.querySelector(".add-cat-msg");
const addBtn = document.querySelector(".show-form-btn");
const returnToCatTab = document.querySelector(".cat-tab");
const categoryBtn = document.querySelector("[data-for-tab='category']");
const dueDateBtn = document.querySelector("[data-for-tab='due-date']");
const priorityBtn = document.querySelector("[data-for-tab='priority']");
const categoryTab = document.querySelector(".by-category");
const sideNav = document.querySelector(".side-nav");
const cancelCategoryBtn = document.querySelector(".cancel-category");
const categoryFormBox = document.querySelector(".cat-form-container");
const categoryForm = document.querySelector("#category-form");
const categoryInput = document.querySelector(".category");
const categorySection = document.querySelector(".cat-section");
const toDoFormContainer = document.querySelector(".form-div");
const toDoForm = document.querySelector(".form");
const cancelToDoBtn = document.querySelector(".cancel-to-do");
const categoryName = document.querySelector(".category-name");
const toDoTitle = document.querySelector(".title");
const toDoPriority = document.querySelector(".task-priority");
const toDoDescription = document.querySelector(".description");
const toDoDueDate = document.querySelector(".due-date");
const dateTimePicker = document.querySelector(
  "input[type='datetime-local']"
);
const creationTimePicker = document.querySelector(".creation-date");
const addToDoBtn = document.querySelector("[data-form-add]");
const editToDoBtn = document.querySelector("[data-form-edit]");
const dueDateTaskDiv = document.querySelector(".due-view-div");
const priorityTaskDiv = document.querySelector(".priority-view-div");
const completedTasksDiv = document.querySelector(".completed-view-div");


/***/ }),

/***/ "./src/tabControl.js":
/*!***************************!*\
  !*** ./src/tabControl.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tabControls)
/* harmony export */ });
/* harmony import */ var _querySelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./querySelectors */ "./src/querySelectors.js");


function tabControls() {
  document.querySelectorAll(".btn-ctrl").forEach((button) => {
    button.addEventListener("click", () => {
      const btnContainer = document.querySelector(".container");
      const clickedBtn = button.dataset.forTab;
      const tabContainer = document.querySelector(".content-box");
      const activeTab = tabContainer.querySelector(
        `.tab-content[data-tab="${clickedBtn}"]`
      );

      //   console.log(btnContainer);
      // console.log(clickedTab);
      //   console.log(tabContainer);
      // console.log(activeTab);

      btnContainer.querySelectorAll(".btn-ctrl").forEach((tabBtn) => {
        tabBtn.classList.remove("btn-ctrl--active");
      });

      tabContainer.querySelectorAll(".tab-content").forEach((tabContent) => {
        tabContent.classList.remove("tab-content--active");
      });

      button.classList.add("btn-ctrl--active");
      activeTab.classList.add("tab-content--active");

      if (_querySelectors__WEBPACK_IMPORTED_MODULE_0__.addBtn.classList.contains("btn-ctrl--active")) {
        _querySelectors__WEBPACK_IMPORTED_MODULE_0__.addBtn.classList.remove("btn-ctrl--active");
        _querySelectors__WEBPACK_IMPORTED_MODULE_0__.returnToCatTab.classList.add("btn-ctrl--active");
      }
    });
  });
}


/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeSelectionBox: () => (/* binding */ closeSelectionBox),
/* harmony export */   closeToDoWarning: () => (/* binding */ closeToDoWarning),
/* harmony export */   createCategorySection: () => (/* binding */ createCategorySection),
/* harmony export */   displayCategoryWarning: () => (/* binding */ displayCategoryWarning),
/* harmony export */   displayToDoEntry: () => (/* binding */ displayToDoEntry),
/* harmony export */   hideCategoryForm: () => (/* binding */ hideCategoryForm),
/* harmony export */   hideToDoForm: () => (/* binding */ hideToDoForm),
/* harmony export */   newCategoryForm: () => (/* binding */ newCategoryForm),
/* harmony export */   replaceCategorySections: () => (/* binding */ replaceCategorySections),
/* harmony export */   replaceCompletedRows: () => (/* binding */ replaceCompletedRows),
/* harmony export */   replaceDueDateRows: () => (/* binding */ replaceDueDateRows),
/* harmony export */   replacePriorityRows: () => (/* binding */ replacePriorityRows),
/* harmony export */   replaceToDoItems: () => (/* binding */ replaceToDoItems),
/* harmony export */   selectAddType: () => (/* binding */ selectAddType),
/* harmony export */   showByDueDate: () => (/* binding */ showByDueDate),
/* harmony export */   showByPriority: () => (/* binding */ showByPriority),
/* harmony export */   showCatMessage: () => (/* binding */ showCatMessage),
/* harmony export */   showCompletedTasks: () => (/* binding */ showCompletedTasks),
/* harmony export */   showFormWithInfo: () => (/* binding */ showFormWithInfo),
/* harmony export */   toDoFormDisplay: () => (/* binding */ toDoFormDisplay)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_imgs_trash_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/imgs/trash.svg */ "./src/assets/imgs/trash.svg");
/* harmony import */ var _assets_imgs_edit_button_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/imgs/edit-button-svgrepo-com.svg */ "./src/assets/imgs/edit-button-svgrepo-com.svg");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _querySelectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./querySelectors */ "./src/querySelectors.js");
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dates */ "./src/dates.js");







function selectAddType() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.addCategoryMsg.style.display = "none";
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.selectAddTypeDiv.style.display = "initial";
  if (_querySelectors__WEBPACK_IMPORTED_MODULE_4__.selectAddTypeDiv.style.display === "initial") {
    _querySelectors__WEBPACK_IMPORTED_MODULE_4__.sideNav.classList.add("cat-form-visible");
  } else {
    _querySelectors__WEBPACK_IMPORTED_MODULE_4__.sideNav.classList.remove("cat-form-visible");
  }
}

function showCatMessage() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.addCategoryMsg.style.display = "initial";

  console.log(_querySelectors__WEBPACK_IMPORTED_MODULE_4__.addCategoryMsg.style.display);
}

function displayCategoryWarning() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.categoryWarning.style.display = "initial";
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.selectAddTypeDiv.style.display = "none";
}

function closeToDoWarning() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.categoryWarning.style.display = "none";
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.categoryFormBox.style.display = "initial";
}

function closeSelectionBox() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.selectAddTypeDiv.style.display = "none";
}

function newCategoryForm() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.selectAddTypeDiv.style.display = "none";
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.categoryFormBox.style.display = "initial";
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.categoryTab.classList.add("tab-content--active");

  if (_querySelectors__WEBPACK_IMPORTED_MODULE_4__.categoryFormBox.style.display === "initial") {
    _querySelectors__WEBPACK_IMPORTED_MODULE_4__.sideNav.classList.add("cat-form-visible");
  }
}

function hideCategoryForm() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.categoryFormBox.style.display = "none";
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.categoryForm.reset();
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.addCategoryMsg.style.display = "initial";
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.sideNav.classList.remove("cat-form-visible");
}

function createCategorySection() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.addCategoryMsg.style.display = "none";

  console.log(_model__WEBPACK_IMPORTED_MODULE_3__.categoriesArray);

  for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_3__.categoriesArray.length; i++) {
    const categoryCard = document.createElement("div");
    categoryCard.className = "cat-card";
    categoryCard.setAttribute("data-cat-num", i);

    const cardCategoryName = document.createElement("h2");
    cardCategoryName.className = "cat-name";
    cardCategoryName.textContent = `${_model__WEBPACK_IMPORTED_MODULE_3__.categoriesArray[i]}`;

    const categoryContent = document.createElement("div");
    categoryContent.className = "cat-content";
    categoryContent.dataset.content = `${_model__WEBPACK_IMPORTED_MODULE_3__.categoriesArray[i]}`;

    const addItemBtn = document.createElement("button");
    addItemBtn.type = "button";
    addItemBtn.className = "new-to-do";
    addItemBtn.id = "add-item";
    addItemBtn.value = "add-item";
    addItemBtn.setAttribute("data-category", `${_model__WEBPACK_IMPORTED_MODULE_3__.categoriesArray[i]}`);
    addItemBtn.textContent = "Add Item";

    const deleteIconContainer = document.createElement("div");
    deleteIconContainer.className = "delete-icon";
    deleteIconContainer.setAttribute(
      "data-delete-cat",
      `${_model__WEBPACK_IMPORTED_MODULE_3__.categoriesArray[i]}`
    );
    deleteIconContainer.setAttribute("data-delete-cat-index", i);

    const deleteBtnImg = document.createElement("img");
    deleteBtnImg.src = _assets_imgs_trash_svg__WEBPACK_IMPORTED_MODULE_1__;
    deleteBtnImg.setAttribute("data-delete-cat", `${_model__WEBPACK_IMPORTED_MODULE_3__.categoriesArray[i]}`);
    deleteBtnImg.setAttribute("data-delete-cat-index", i);
    deleteBtnImg.setAttribute("focusable", true);
    deleteBtnImg.setAttribute("tabindex", 0);

    _querySelectors__WEBPACK_IMPORTED_MODULE_4__.categorySection.appendChild(categoryCard);
    categoryCard.appendChild(cardCategoryName);
    categoryCard.appendChild(categoryContent);
    categoryCard.appendChild(addItemBtn);
    categoryCard.appendChild(deleteIconContainer);
    deleteIconContainer.appendChild(deleteBtnImg);
  }
}

function replaceCategorySections() {
  // Replaces all category sections on each new category creation to prevent duplicates
  while (_querySelectors__WEBPACK_IMPORTED_MODULE_4__.categorySection.firstChild) {
    _querySelectors__WEBPACK_IMPORTED_MODULE_4__.categorySection.removeChild(_querySelectors__WEBPACK_IMPORTED_MODULE_4__.categorySection.firstChild);
  }
}

function toDoFormDisplay(addBtn) {
  console.log(addBtn);
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.categoryName.textContent = addBtn;

  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.toDoFormContainer.style.display = "initial";
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.toDoFormContainer.scrollTo(0, 0);
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.addToDoBtn.style.display = "initial";
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.editToDoBtn.style.display = "none";
  (0,_dates__WEBPACK_IMPORTED_MODULE_5__.limitDatePicker)();
}

function showFormWithInfo(editBtnIndex, editBtnCat) {
  for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray.length; i++) {
    _querySelectors__WEBPACK_IMPORTED_MODULE_4__.toDoFormContainer.style.display = "initial";
    _querySelectors__WEBPACK_IMPORTED_MODULE_4__.toDoFormContainer.scrollTo(0, 0);
    _querySelectors__WEBPACK_IMPORTED_MODULE_4__.addToDoBtn.style.display = "none";
    _querySelectors__WEBPACK_IMPORTED_MODULE_4__.editToDoBtn.style.display = "initial";
    (0,_dates__WEBPACK_IMPORTED_MODULE_5__.limitDatePicker)();

    if (
      parseInt(editBtnIndex) ===
      parseInt(_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray.indexOf(_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i]))
    ) {
      _querySelectors__WEBPACK_IMPORTED_MODULE_4__.categoryName.textContent = editBtnCat;
      _querySelectors__WEBPACK_IMPORTED_MODULE_4__.toDoTitle.value = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].title;
      _querySelectors__WEBPACK_IMPORTED_MODULE_4__.toDoPriority.value = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].priority;
      _querySelectors__WEBPACK_IMPORTED_MODULE_4__.toDoDescription.value = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].description;
      _querySelectors__WEBPACK_IMPORTED_MODULE_4__.toDoDueDate.value = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].dueDate;
    }

    const entryIndex = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray.indexOf(_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i]);
  }
}

function hideToDoForm() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.toDoFormContainer.style.display = "none";
  _querySelectors__WEBPACK_IMPORTED_MODULE_4__.toDoForm.reset();
}

function displayToDoEntry() {
  for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray.length; i++) {
    if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].completedTask === false) {
      const catContentDivs = document.querySelectorAll(".cat-content");

      const toDoEntry = document.createElement("div");
      toDoEntry.className = "to-do-entry";
      toDoEntry.setAttribute("data-entry", i);

      const toDoTitle = document.createElement("h3");
      toDoTitle.className = "title";
      toDoTitle.textContent = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].title;

      const toDoDetailsTitle = document.createElement("div");
      toDoDetailsTitle.className = "details-title";
      toDoDetailsTitle.textContent = "Details:";
      if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].description === "") {
        toDoDetailsTitle.style.display = "none";
      }

      const toDoDetails = document.createElement("p");
      toDoDetails.className = "details";
      toDoDetails.textContent = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].description;

      const toDoDueDateTitle = document.createElement("div");
      toDoDueDateTitle.className = "due-title";
      toDoDueDateTitle.textContent = "Due Date:";

      const toDoDueDate = document.createElement("p");
      toDoDueDate.className = "show-due-date";
      toDoDueDate.textContent = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].dueDate;

      const completedDiv = document.createElement("div");
      completedDiv.className = "complete-container";

      const completedCheckLabel = document.createElement("label");
      completedCheckLabel.setAttribute("for", "complete");
      completedCheckLabel.textContent = "Complete:";

      const completedCheck = document.createElement("INPUT");
      completedCheck.setAttribute("type", "checkbox");
      completedCheck.className = "complete";
      completedCheck.name = "complete";
      completedCheck.id = "complete";
      completedCheck.value = "complete";
      completedCheck.checked = false;
      completedCheck.setAttribute("data-check", i);

      const deleteIconDiv = document.createElement("div");
      deleteIconDiv.className = "delete-icon";

      const deleteIcon = document.createElement("img");
      deleteIcon.src = _assets_imgs_trash_svg__WEBPACK_IMPORTED_MODULE_1__;
      deleteIcon.alt = "Delete Entry";
      deleteIcon.setAttribute("data-item-delete", i);
      deleteIcon.setAttribute("focusable", true);
      deleteIcon.setAttribute("tabindex", 0);

      const priorityDiv = document.createElement("div");
      priorityDiv.className = "priority";

      const priorityColor = document.createElement("div");
      priorityColor.className = "priority-color";
      priorityColor.style.border = "1px solid #535347";
      if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].priority.toLowerCase() === "low") {
        priorityColor.style.backgroundColor = "#e7f24f";
      } else if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].priority.toLowerCase() === "medium") {
        priorityColor.style.backgroundColor = "#eeb250";
      } else if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].priority.toLowerCase === "high") {
        priorityColor.style.backgroundColor = "#bc2702";
      }

      const editIcon = document.createElement("img");
      editIcon.className = "edit-btn";
      editIcon.src = _assets_imgs_edit_button_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_2__;
      editIcon.alt = "Edit Entry";
      editIcon.setAttribute("data-edit", i);
      editIcon.setAttribute("data-edit-cat", _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].category);
      editIcon.setAttribute("focusable", true);
      editIcon.setAttribute("tabindex", 0);

      catContentDivs.forEach((div) => {
        if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].category === div.dataset.content) {
          console.log(div.dataset.content);

          div.appendChild(toDoEntry);
          toDoEntry.appendChild(toDoTitle);
          toDoEntry.appendChild(toDoDetailsTitle);
          toDoEntry.appendChild(toDoDetails);
          toDoEntry.appendChild(toDoDueDateTitle);
          toDoEntry.appendChild(toDoDueDate);
          toDoEntry.appendChild(completedDiv);
          completedDiv.appendChild(completedCheckLabel);
          completedDiv.appendChild(completedCheck);
          toDoEntry.appendChild(deleteIconDiv);
          deleteIconDiv.appendChild(deleteIcon);
          toDoEntry.appendChild(priorityDiv);
          priorityDiv.appendChild(priorityColor);
          priorityDiv.appendChild(editIcon);
        }
      });
    }
  }
}

function replaceToDoItems() {
  // Replaces all To Do Items on each new item creation to prevent duplicates
  let toDoParents = document.querySelectorAll(".cat-content");
  toDoParents.forEach((parent) => {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  });
}

function showByDueDate() {
  for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray.length; i++) {
    if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].completedTask === false) {
      const dueDateTasksRowDiv = document.createElement("div");
      dueDateTasksRowDiv.className = "due-tasks-row-parent";

      const dueDateTasksRow = document.createElement("div");
      dueDateTasksRow.className = "due-view-row";

      const dueViewDueDate = document.createElement("div");
      dueViewDueDate.className = "due-view-due show-date-due";
      dueViewDueDate.textContent = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].dueDate;
      dueViewDueDate.style.borderRight = "0.2ch solid black";
      dueViewDueDate.style.textAlign = "center";

      const dueDateTitle = document.createElement("div");
      dueDateTitle.className = "grid-cells .due-view-title";
      dueDateTitle.textContent = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].title;

      const dueDateDescription = document.createElement("div");
      dueDateDescription.className = "grid-cells .due-view-description";
      if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].description !== "") {
        dueDateDescription.textContent = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].description;
      } else {
        dueDateDescription.textContent = "----";
      }

      const dueDatePriority = document.createElement("div");
      dueDatePriority.className = "grid-cells .due-view-priority";
      const dueDatePriorityColor = document.createElement("div");
      dueDatePriorityColor.className = "priority-color";
      dueDatePriorityColor.style.border = "1px solid #535347";
      if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].priority.toLowerCase() === "low") {
        dueDatePriorityColor.style.backgroundColor = "#e7f24f";
      } else if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].priority.toLowerCase() === "medium") {
        dueDatePriorityColor.style.backgroundColor = "#eeb250";
      } else if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].priority.toLowerCase === "high") {
        dueDatePriorityColor.style.backgroundColor = "#bc2702";
      }

      const dueDateCheck = document.createElement("div");
      dueDateCheck.className = "grid-cells .due-view-complete";

      const dueDateLabel = document.createElement("label");
      dueDateLabel.setAttribute("for", "complete");

      const dueDateCheckbox = document.createElement("INPUT");
      dueDateCheckbox.setAttribute("type", "checkbox");
      dueDateCheckbox.className = "complete";
      dueDateCheckbox.name = "complete";
      dueDateCheckbox.id = "complete";
      dueDateCheckbox.value = "complete";
      dueDateCheckbox.checked = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].completedTask;
      dueDateCheckbox.setAttribute("data-check", i);

      const dueDateDelete = document.createElement("div");
      dueDateDelete.className = "grid-cells .due-view-delete";

      const deleteBtnImg = document.createElement("img");
      deleteBtnImg.src = _assets_imgs_trash_svg__WEBPACK_IMPORTED_MODULE_1__;
      deleteBtnImg.setAttribute("data-item-delete", i);

      _querySelectors__WEBPACK_IMPORTED_MODULE_4__.dueDateTaskDiv.appendChild(dueDateTasksRowDiv);
      dueDateTasksRowDiv.appendChild(dueDateTasksRow);
      dueDateTasksRow.appendChild(dueViewDueDate);
      dueDateTasksRow.appendChild(dueDateTitle);
      dueDateTasksRow.appendChild(dueDateDescription);
      dueDateTasksRow.appendChild(dueDatePriority);
      dueDatePriority.appendChild(dueDatePriorityColor);
      dueDateTasksRow.appendChild(dueDateCheck);
      dueDateCheck.appendChild(dueDateLabel);
      dueDateCheck.appendChild(dueDateCheckbox);
      dueDateTasksRow.appendChild(dueDateDelete);
      dueDateDelete.appendChild(deleteBtnImg);
    }
  }
}

function replaceDueDateRows() {
  // Replaces all rows of DueDate view to prevent duplicates

  const dueViewRows = document.querySelectorAll(".due-view-row");

  dueViewRows.forEach((row) => {
    if (row.parentNode) {
      row.parentNode.removeChild(row);
    }
  });
}

function showByPriority() {
  for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray.length; i++) {
    if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].completedTask === false) {
      const priorityTasksRowDiv = document.createElement("div");
      priorityTasksRowDiv.className = "priority-tasks-row-parent";

      const priorityTasksRow = document.createElement("div");
      priorityTasksRow.className = "priority-view-row";

      const priorityViewPriority = document.createElement("div");
      priorityViewPriority.className = "grid-cells .priority-view-priority";
      const priorityViewPriorityColor = document.createElement("div");
      priorityViewPriorityColor.className = "priority-color";
      priorityViewPriorityColor.style.border = "1px solid #535347";
      if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].priority.toLowerCase() === "low") {
        priorityViewPriorityColor.style.backgroundColor = "#e7f24f";
      } else if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].priority.toLowerCase() === "medium") {
        priorityViewPriorityColor.style.backgroundColor = "#eeb250";
      } else if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].priority.toLowerCase === "high") {
        priorityViewPriorityColor.style.backgroundColor = "#bc2702";
      }

      const priorityTitle = document.createElement("div");
      priorityTitle.className = "grid-cells .priority-view-title";
      priorityTitle.textContent = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].title;

      const priorityDescription = document.createElement("div");
      priorityDescription.className = "grid-cells .priority-view-description";
      if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].description !== "") {
        priorityDescription.textContent = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].description;
      } else {
        priorityDescription.textContent = "----";
      }

      const priorityViewDueDate = document.createElement("div");
      priorityViewDueDate.className = "priority-view-due show-date-priority";
      priorityViewDueDate.textContent = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].dueDate;
      priorityViewDueDate.style.borderRight = "0.2ch solid black";
      priorityViewDueDate.style.textAlign = "center";

      const priorityCheck = document.createElement("div");
      priorityCheck.className = "grid-cells .priority-view-complete";

      const priorityLabel = document.createElement("label");
      priorityLabel.setAttribute("for", "complete");

      const priorityCheckbox = document.createElement("INPUT");
      priorityCheckbox.setAttribute("type", "checkbox");
      priorityCheckbox.className = "complete";
      priorityCheckbox.name = "complete";
      priorityCheckbox.id = "complete";
      priorityCheckbox.value = "complete";
      priorityCheckbox.checked = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].completedTask;
      priorityCheckbox.setAttribute("data-check", i);

      const priorityDelete = document.createElement("div");
      priorityDelete.className = "grid-cells .priority-view-delete";

      const deleteBtnImg = document.createElement("img");
      deleteBtnImg.src = _assets_imgs_trash_svg__WEBPACK_IMPORTED_MODULE_1__;
      deleteBtnImg.setAttribute("data-item-delete", i);

      _querySelectors__WEBPACK_IMPORTED_MODULE_4__.priorityTaskDiv.appendChild(priorityTasksRowDiv);
      priorityTasksRowDiv.appendChild(priorityTasksRow);
      priorityTasksRow.appendChild(priorityViewPriority);
      priorityViewPriority.appendChild(priorityViewPriorityColor);
      priorityTasksRow.appendChild(priorityTitle);
      priorityTasksRow.appendChild(priorityDescription);
      priorityTasksRow.appendChild(priorityViewDueDate);
      priorityTasksRow.appendChild(priorityCheck);
      priorityCheck.appendChild(priorityLabel);
      priorityCheck.appendChild(priorityCheckbox);
      priorityTasksRow.appendChild(priorityDelete);
      priorityDelete.appendChild(deleteBtnImg);
    }
  }
}

function replacePriorityRows() {
  // Replaces all rows of priority view to prevent duplicates

  const priorityViewRows = document.querySelectorAll(".priority-view-row");

  priorityViewRows.forEach((row) => {
    if (row.parentNode) {
      row.parentNode.removeChild(row);
    }
  });
}

function showCompletedTasks() {
  for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray.length; i++) {
    if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].completedTask === true) {
      const completedTasksRowDiv = document.createElement("div");
      completedTasksRowDiv.className = "completed-tasks-row-parent";

      const completedTasksRow = document.createElement("div");
      completedTasksRow.className = "completed-tasks-row";

      const gridCellsCheck = document.createElement("div");
      gridCellsCheck.className = "grid-cells .complete-view-complete";

      const completedLabel = document.createElement("label");
      completedLabel.setAttribute("for", "complete");

      const completedCheckbox = document.createElement("INPUT");
      completedCheckbox.setAttribute("type", "checkbox");
      completedCheckbox.className = "complete";
      completedCheckbox.name = "complete";
      completedCheckbox.id = "complete";
      completedCheckbox.value = "complete";
      completedCheckbox.checked = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].completedTask;
      completedCheckbox.setAttribute("data-check", i);

      const gridCellsTitle = document.createElement("div");
      gridCellsTitle.className = "grid-cells .complete-view-title";
      gridCellsTitle.textContent = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].title;

      const gridCellsDescription = document.createElement("div");
      gridCellsDescription.className = "grid-cells .complete-view-description";
      if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].description !== "") {
        gridCellsDescription.textContent = _model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].description;
      } else {
        gridCellsDescription.textContent = "----";
      }

      const gridCellsPriority = document.createElement("div");
      gridCellsPriority.className = "grid-cells .complete-view-priority";

      const gridCellsPriorityColor = document.createElement("div");
      gridCellsPriorityColor.className = "priority-color";
      gridCellsPriorityColor.style.border = "1px solid #535347";
      if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].priority.toLowerCase() === "low") {
        gridCellsPriorityColor.style.backgroundColor = "#e7f24f";
      } else if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].priority.toLowerCase() === "medium") {
        gridCellsPriorityColor.style.backgroundColor = "#eeb250";
      } else if (_model__WEBPACK_IMPORTED_MODULE_3__.toDoItemsArray[i].priority.toLowerCase === "high") {
        gridCellsPriorityColor.style.backgroundColor = "#bc2702";
      }

      const gridCellsDelete = document.createElement("div");
      gridCellsDelete.className = "grid-cells .complete-view-delete";

      const deleteBtnImg = document.createElement("img");
      deleteBtnImg.src = _assets_imgs_trash_svg__WEBPACK_IMPORTED_MODULE_1__;
      deleteBtnImg.setAttribute("data-item-delete", i);

      _querySelectors__WEBPACK_IMPORTED_MODULE_4__.completedTasksDiv.appendChild(completedTasksRowDiv);
      completedTasksRowDiv.appendChild(completedTasksRow);
      completedTasksRow.appendChild(gridCellsCheck);
      gridCellsCheck.appendChild(completedLabel);
      gridCellsCheck.appendChild(completedCheckbox);
      completedTasksRow.appendChild(gridCellsTitle);
      completedTasksRow.appendChild(gridCellsDescription);
      completedTasksRow.appendChild(gridCellsPriority);
      gridCellsPriority.appendChild(gridCellsPriorityColor);
      completedTasksRow.appendChild(gridCellsDelete);
      gridCellsDelete.appendChild(deleteBtnImg);
    }
  }
}

function replaceCompletedRows() {
  // Replaces all rows of Completed Tasks to prevent duplicates

  const completedTaskRows = document.querySelectorAll(".completed-tasks-row");

  completedTaskRows.forEach((row) => {
    if (row.parentNode) {
      row.parentNode.removeChild(row);
    }
  });
}


/***/ }),

/***/ "./src/assets/fonts/happy-monkey-v14-latin-regular.woff2":
/*!***************************************************************!*\
  !*** ./src/assets/fonts/happy-monkey-v14-latin-regular.woff2 ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4ce4d8f8d2ce135c3d9a.woff2";

/***/ }),

/***/ "./src/assets/fonts/lancelot-v23-latin-regular.woff2":
/*!***********************************************************!*\
  !*** ./src/assets/fonts/lancelot-v23-latin-regular.woff2 ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f7b40c9fef4315fd0d81.woff2";

/***/ }),

/***/ "./src/assets/imgs/edit-button-svgrepo-com.svg":
/*!*****************************************************!*\
  !*** ./src/assets/imgs/edit-button-svgrepo-com.svg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/edit-button-svgrepo-com-3850e0ebedd15efb907f.svg";

/***/ }),

/***/ "./src/assets/imgs/trash.svg":
/*!***********************************!*\
  !*** ./src/assets/imgs/trash.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/trash-130e357021a89c46fad4.svg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/tabControl.js");
/******/ 	__webpack_require__("./src/controller.js");
/******/ 	__webpack_require__("./src/model.js");
/******/ 	__webpack_require__("./src/view.js");
/******/ 	__webpack_require__("./src/querySelectors.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dates.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMktBQWtFO0FBQzlHLDRDQUE0QyxtTEFBc0U7QUFDbEgsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxVQUFVLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLFdBQVcsT0FBTyxRQUFRLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sYUFBYSxjQUFjLFFBQVEsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsTUFBTSxZQUFZLFFBQVEsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLFdBQVcsS0FBSyxZQUFZLGNBQWMsV0FBVyxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLHNFQUFzRSw4QkFBOEIsdUJBQXVCLHFCQUFxQixvRkFBb0YsR0FBRyxvREFBb0Qsa0NBQWtDLHVCQUF1QixxQkFBcUIsNkZBQTZGLEdBQUcsT0FBTyxjQUFjLGVBQWUsaUJBQWlCLDJCQUEyQixvQ0FBb0MsK0JBQStCLGtDQUFrQyxnQ0FBZ0MsaUNBQWlDLCtCQUErQixrQ0FBa0MscUNBQXFDLG1DQUFtQyxHQUFHLGdCQUFnQixrQkFBa0Isd0NBQXdDLEdBQUcsNkJBQTZCLDZDQUE2Qyw4QkFBOEIscUJBQXFCLDZCQUE2QixvQkFBb0IscUNBQXFDLDBCQUEwQixHQUFHLGdCQUFnQix3QkFBd0IsdUJBQXVCLHFCQUFxQixHQUFHLDJEQUEyRCxnQkFBZ0IsaUJBQWlCLHNCQUFzQiw2Q0FBNkMsb0JBQW9CLEdBQUcsd0NBQXdDLGdEQUFnRCxHQUFHLHlCQUF5QixnREFBZ0QsNkJBQTZCLHVCQUF1QixvQkFBb0IsbUNBQW1DLEdBQUcsK0NBQStDLHlCQUF5QixHQUFHLGVBQWUsNkJBQTZCLGdEQUFnRCxHQUFHLGdCQUFnQiw2QkFBNkIscUJBQXFCLHdCQUF3QixrQkFBa0IsR0FBRyxrQkFBa0IsNkJBQTZCLHFCQUFxQix3QkFBd0Isa0JBQWtCLEdBQUcsY0FBYyxnREFBZ0QsOEJBQThCLG1CQUFtQixpQkFBaUIsa0JBQWtCLGlCQUFpQix1REFBdUQsc0JBQXNCLEdBQUcscUJBQXFCLCtDQUErQyxHQUFHLHVCQUF1QixnREFBZ0QsR0FBRyx5QkFBeUIsd0JBQXdCLEdBQUcsb0RBQW9ELG1CQUFtQixnQkFBZ0IsdUJBQXVCLEdBQUcsd0RBQXdELGtCQUFrQix1QkFBdUIsZ0JBQWdCLFlBQVksV0FBVyxhQUFhLGNBQWMsaUJBQWlCLHFCQUFxQixHQUFHLFdBQVcsa0JBQWtCLDJCQUEyQixlQUFlLHdCQUF3QiwyQkFBMkIsZUFBZSxzQkFBc0IsdUJBQXVCLHVCQUF1QixpQkFBaUIsZ0RBQWdELHVCQUF1Qiw2QkFBNkIseUJBQXlCLEdBQUcsY0FBYyxrQ0FBa0MscUJBQXFCLHVCQUF1Qix5QkFBeUIsR0FBRyx1QkFBdUIsa0JBQWtCLEdBQUcsZ0JBQWdCLGtCQUFrQixvQkFBb0IsR0FBRyxvQkFBb0Isc0JBQXNCLHFCQUFxQixrQ0FBa0MsR0FBRyxlQUFlLGtCQUFrQix5QkFBeUIsdUJBQXVCLEdBQUcsd0JBQXdCLDhCQUE4QixrQ0FBa0MscUJBQXFCLEdBQUcsMkJBQTJCLDBDQUEwQyxrQ0FBa0MscUJBQXFCLEdBQUcsOEJBQThCLHlDQUF5QyxrQ0FBa0MscUJBQXFCLEdBQUcsMkJBQTJCLHlDQUF5QyxrQ0FBa0MscUJBQXFCLEdBQUcsa0RBQWtELGtCQUFrQixvQkFBb0IsNEJBQTRCLGFBQWEsb0JBQW9CLEdBQUcsK0VBQStFLDBCQUEwQixnQkFBZ0Isa0NBQWtDLHNCQUFzQixzQkFBc0IsR0FBRyw0RUFBNEUsMEJBQTBCLFlBQVksZ0JBQWdCLGVBQWUsc0JBQXNCLGtDQUFrQyxxQkFBcUIsZ0RBQWdELHVCQUF1QixnREFBZ0Qsc0JBQXNCLEdBQUcsY0FBYyxZQUFZLHNCQUFzQixrQ0FBa0MscUJBQXFCLGdEQUFnRCx1QkFBdUIsZ0RBQWdELHFCQUFxQixHQUFHLCtHQUErRywrQ0FBK0MsR0FBRyxnQ0FBZ0MsZ0RBQWdELEdBQUcseUZBQXlGLGtDQUFrQyxxQkFBcUIsZUFBZSx3QkFBd0IsZ0RBQWdELG1CQUFtQix1QkFBdUIsNkNBQTZDLEdBQUcsaUhBQWlILDhDQUE4QyxvQkFBb0IsR0FBRyxpSEFBaUgsOENBQThDLCtDQUErQyxHQUFHLDZDQUE2QyxrQkFBa0IsNkJBQTZCLGtDQUFrQyxvQkFBb0IscUJBQXFCLGdCQUFnQixpQkFBaUIsR0FBRywwQkFBMEIscUJBQXFCLDZCQUE2QixrQ0FBa0Msb0JBQW9CLHFCQUFxQixnQkFBZ0IsaUJBQWlCLEdBQUcsbUpBQW1KLGtCQUFrQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixZQUFZLGFBQWEsR0FBRyx5REFBeUQsa0JBQWtCLDJCQUEyQixpQkFBaUIsNkNBQTZDLHdCQUF3QixnQkFBZ0Isb0JBQW9CLG1CQUFtQix1QkFBdUIsR0FBRyxvQ0FBb0MsdUJBQXVCLDhCQUE4QixHQUFHLG1DQUFtQyxzQkFBc0IsZUFBZSxHQUFHLHNDQUFzQyxvQkFBb0IsR0FBRyxzRUFBc0Usa0NBQWtDLHFCQUFxQixnQkFBZ0Isd0JBQXdCLGdEQUFnRCxtQkFBbUIsdUJBQXVCLDZDQUE2QyxHQUFHLHdGQUF3Riw4Q0FBOEMsb0JBQW9CLEdBQUcsd0ZBQXdGLCtDQUErQyxHQUFHLDZEQUE2RCxnQkFBZ0IscUJBQXFCLGtCQUFrQixvQkFBb0IsNEJBQTRCLGFBQWEsR0FBRyxlQUFlLDhCQUE4QixtQkFBbUIsZ0RBQWdELGdCQUFnQix3QkFBd0Isa0JBQWtCLDJCQUEyQixhQUFhLHdCQUF3QixpQkFBaUIsdUJBQXVCLHVCQUF1QixHQUFHLGtCQUFrQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLGdCQUFnQixrQ0FBa0MsbUJBQW1CLGdCQUFnQixnQkFBZ0IsOENBQThDLHVCQUF1Qiw2Q0FBNkMsb0JBQW9CLEdBQUcsc0JBQXNCLGdEQUFnRCxHQUFHLHNCQUFzQiwrQ0FBK0MsR0FBRyw0QkFBNEIsa0JBQWtCLGdCQUFnQix3QkFBd0IsOEJBQThCLHNCQUFzQix5QkFBeUIsR0FBRyxrQ0FBa0MsZUFBZSxHQUFHLHdDQUF3QyxpQkFBaUIsb0JBQW9CLEdBQUcsd0NBQXdDLGlCQUFpQixpQkFBaUIsbUJBQW1CLEdBQUcsNERBQTRELHdCQUF3QiwrQ0FBK0MsdUJBQXVCLHlCQUF5QixHQUFHLHlCQUF5QiwrQkFBK0IscUJBQXFCLHdCQUF3QixHQUFHLGlDQUFpQyxnQkFBZ0IscUJBQXFCLHFCQUFxQix1QkFBdUIsR0FBRywrQkFBK0Isd0JBQXdCLGtDQUFrQyxHQUFHLDBCQUEwQixnQkFBZ0IsdUJBQXVCLEdBQUcseUJBQXlCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLGVBQWUsR0FBRyx1Q0FBdUMsdUJBQXVCLDZCQUE2QiwwQkFBMEIsd0JBQXdCLHFCQUFxQixrQkFBa0IsaUJBQWlCLDhDQUE4Qyx1QkFBdUIsa0JBQWtCLGdEQUFnRCxvQkFBb0IsdUJBQXVCLEdBQUcsNkNBQTZDLCtDQUErQyxHQUFHLCtDQUErQyw4Q0FBOEMsZ0RBQWdELEdBQUcsdURBQXVELHdCQUF3QixrQ0FBa0MsdUJBQXVCLG1CQUFtQixtQkFBbUIsR0FBRywrQkFBK0Isa0JBQWtCLDRCQUE0Qix3QkFBd0Isa0JBQWtCLEdBQUcscUNBQXFDLGVBQWUsb0JBQW9CLEdBQUcsMkNBQTJDLGlCQUFpQixzQkFBc0Isb0JBQW9CLEdBQUcsd0NBQXdDLGlCQUFpQixpQkFBaUIsZ0JBQWdCLG1CQUFtQixHQUFHLDRCQUE0QixnQkFBZ0IsZ0JBQWdCLGtCQUFrQixtQ0FBbUMsd0JBQXdCLHNCQUFzQix1QkFBdUIsR0FBRyxnRUFBZ0UsaUJBQWlCLGtCQUFrQix1QkFBdUIsOENBQThDLGlEQUFpRCxHQUFHLGtDQUFrQyxpQkFBaUIsR0FBRyx3Q0FBd0MsaUJBQWlCLGlCQUFpQixtQkFBbUIsR0FBRywrQ0FBK0MsZ0JBQWdCLEdBQUcsc0lBQXNJLGtCQUFrQixnQ0FBZ0Msc0JBQXNCLGdCQUFnQixHQUFHLDhDQUE4QyxrQkFBa0IsMENBQTBDLEdBQUcsNEJBQTRCLGtCQUFrQiwwQ0FBMEMsR0FBRyx1RUFBdUUscUNBQXFDLDhCQUE4QixtQkFBbUIsZ0JBQWdCLHVCQUF1Qix3QkFBd0Isc0JBQXNCLHdCQUF3QixHQUFHLHNGQUFzRixnQkFBZ0Isc0JBQXNCLHdCQUF3QixHQUFHLHdDQUF3QyxrQkFBa0IsMENBQTBDLEdBQUcsMEJBQTBCLGtCQUFrQiwwQ0FBMEMsR0FBRywrREFBK0Qsd0JBQXdCLHFCQUFxQix3QkFBd0Isa0NBQWtDLG1DQUFtQyxHQUFHLDRCQUE0Qix1QkFBdUIsd0JBQXdCLEdBQUcsa0VBQWtFLGdCQUFnQixvQ0FBb0MsR0FBRyw2Q0FBNkMsbUJBQW1CLEdBQUcsNENBQTRDLG1CQUFtQixHQUFHLHdEQUF3RCxtQkFBbUIsR0FBRyw2Q0FBNkMsbUJBQW1CLEdBQUcsa0RBQWtELG1CQUFtQixHQUFHLDhDQUE4QyxtQkFBbUIsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsMEJBQTBCLG1CQUFtQixHQUFHLGdDQUFnQyxtQkFBbUIsR0FBRyw2QkFBNkIsbUJBQW1CLEdBQUcsMkJBQTJCLG1CQUFtQixHQUFHLGlDQUFpQyx3QkFBd0IsaUJBQWlCLGtCQUFrQix1QkFBdUIsOENBQThDLGlEQUFpRCxzQkFBc0IsdUJBQXVCLEdBQUcsdUJBQXVCLGVBQWUsR0FBRyw2QkFBNkIsaUJBQWlCLG9CQUFvQixHQUFHLDRCQUE0Qiw2Q0FBNkMsNkJBQTZCLG9CQUFvQixtQ0FBbUMsMEJBQTBCLHdCQUF3QixvQ0FBb0MsR0FBRyxjQUFjLHdCQUF3QixzQkFBc0Isc0JBQXNCLEdBQUcsb0JBQW9CLCtDQUErQyxHQUFHLGdCQUFnQixrQkFBa0IscUJBQXFCLEdBQUcscUJBQXFCO0FBQ3Rwb0I7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUM3eEIxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDUHdEO0FBQ3hELGlFQUFlLDhEQUFhOzs7Ozs7Ozs7Ozs7Ozs7QUNENUI7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05xRTtBQUNKO0FBQ1E7QUFDZDtBQUNRO0FBQ047QUFDSDtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsV0FBVyxpRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5Qix3RUFBYztBQUN2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWEscUVBQWU7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXNCLDJFQUFpQjs7QUFFdkM7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpRUFBZTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZUFBZSxvRUFBVTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esa0JBQWtCLHVFQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLHlFQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FB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QSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdExtQztBQUNnQjtBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ007QUFDVztBQUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk9PO0FBQ0E7QUFDUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNtRDs7QUFFM0M7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNB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eEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzQWZ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNEYXRlL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbG9jYWxpemUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3BhcnNlSVNPL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2RhdGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tb2RlbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3F1ZXJ5U2VsZWN0b3JzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdGFiQ29udHJvbC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3ZpZXcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vYXNzZXRzL2ZvbnRzL2xhbmNlbG90LXYyMy1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvaGFwcHktbW9ua2V5LXYxNC1sYXRpbi1yZWd1bGFyLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogbGFuY2Vsb3QtcmVndWxhciAtIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTGFuY2Vsb3RcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cblxuLyogaGFwcHktbW9ua2V5LXJlZ3VsYXIgLSBsYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pXG4gICAgZm9ybWF0KFwid29mZjJcIik7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAtLW1haW4tYmdyb3VuZC1jb2xvcjogI2ZmZThkNjtcbiAgLS1oZWFkLWZvb3QtY29sb3I6ICNjY2E1OTA7XG4gIC0taW5hY3RpdmUtdGFiLWNvbG9yOiAjYjdiN2E0O1xuICAtLWZvcm0tZ3JlZW4tY29sb3I6ICM4YjhiNzY7XG4gIC0tdG8tZG8tZW50cnktY29sb3I6ICNmOGQ2YmM7XG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjNTM1MzQ3O1xuICAtLWxvdy1wcmlvcml0eS1jb2xvcjogI2U3ZjI0ZjtcbiAgLS1tZWRpdW0tcHJpb3JpdHktY29sb3I6ICNlZWIyNTA7XG4gIC0taGlnaC1wcmlvcml0eS1jb2xvcjogI2JjMjcwMjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDcuNWZyIDAuOGZyO1xufVxuXG4vKiBIZWFkZXIgKi9cblxuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWQtZm9vdC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIkxhbmNlbG90XCI7XG4gIGZvbnQtc2l6ZTogMi44Y2g7XG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAwLjdmcjtcblxuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaGVhZGVyIGgxIHtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMWNoO1xufVxuXG4uaGVhZGVyIGJ1dHRvbi5zaG93LWZvcm0tYnRuLFxuLmhlYWRlciBidXR0b24udGFiLWJ0biB7XG4gIGhlaWdodDogOGNoO1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogNWNoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWZvb3QtY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZWFkZXIgYnV0dG9uLnNob3ctZm9ybS1idG46Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xufVxuXG4vKiBNYWluICovXG5cbi5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ3JvdW5kLWNvbG9yKTtcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xufVxuXG4vKiBNYWluOiBTaWRlLU5hdiAqL1xuXG4uY2F0LWZvcm0tdmlzaWJsZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2lkZS1uYXYge1xuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluYWN0aXZlLXRhYi1jb2xvcik7XG59XG5cbi5mb3Jtcy1ib3gge1xuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gIG1hcmdpbjogMCAyY2g7XG59XG5cbi5jb250ZW50LWJveCB7XG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgbWFyZ2luOiAwIDJjaDtcbn1cblxuLnRhYi1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmFjdGl2ZS10YWItY29sb3IpO1xuICBmb250LWZhbWlseTogXCJMYW5jZWxvdFwiO1xuICBmb250LXNpemU6IDNjaDtcbiAgYm9yZGVyOiBub25lO1xuXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwY2g7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmJ0bi1jdHJsOmZvY3VzIHtcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xufVxuXG4uYnRuLWN0cmwtLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XG59XG5cbi50YWItYnRuOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4vKiBNYWluOiBUYWIgb3BlbmluZyBtZXNzYWdlcyAqL1xuLmFkZC1jYXQtbXNnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIE1haW46IFRvLURvLUZvcm0gKi9cbi5mb3JtLWRpdixcbi5lZGl0LWZvcm0tZGl2IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBtYXJnaW46IGF1dG87XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxLjVjaDtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNWNoO1xuICBwYWRkaW5nOiA1Y2g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluYWN0aXZlLXRhYi1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDNjaDtcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xuICBvdXRsaW5lLW9mZnNldDogLTJjaDtcbn1cblxuLnJlcS1tc2cge1xuICBmb250LWZhbWlseTogXCJIYXBweSBNb25rZXlcIjtcbiAgZm9udC1zaXplOiAyLjhjaDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxLjVjaDtcbn1cblxuLmZvcm0tbGluZS5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZm9ybS1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uY2F0ZWdvcnktbmFtZSB7XG4gIG1hcmdpbi10b3A6IDEuNWNoO1xuICBmb250LXNpemU6IDIuMmNoO1xuICBmb250LWZhbWlseTogXCJIYXBweSBNb25rZXlcIjtcbn1cblxuLmluc3RydWN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIG1hcmdpbi10b3A6IC0xLjRjaDtcbn1cblxuLnRpdGxlLW1zZzo6YmVmb3JlIHtcbiAgY29udGVudDogXCJBZGQgYSB0aXRsZS5cIjtcbiAgZm9udC1mYW1pbHk6IFwiSGFwcHkgTW9ua2V5XCI7XG4gIGZvbnQtc2l6ZTogMS44Y2g7XG59XG5cbi5wcmlvcml0eS1tc2c6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiQ2hvb3NlIGEgcHJpb3JpdHkgbGV2ZWwuXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xuICBmb250LXNpemU6IDEuOGNoO1xufVxuXG4uZGVzY3JpcHRpb24tbXNnOjpiZWZvcmUge1xuICBjb250ZW50OiBcIkFkZCBkZXRhaWxzIChvcHRpb25hbCkuXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xuICBmb250LXNpemU6IDEuOGNoO1xufVxuXG4uZHVlLWRhdGUtbXNnOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlNlbGVjdCBhIGRhdGUgYW5kIHRpbWUuXCI7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xuICBmb250LXNpemU6IDEuOGNoO1xufVxuXG4uYnRuLWxpbmUsXG4uc2VsZWN0LWJ0bi1saW5lLFxuLmNhdC1idG4tbGluZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogM2NoO1xuICBtYXJnaW4tdG9wOiA0Y2g7XG59XG5cbi5mb3JtLWxpbmUgPiBsYWJlbCxcbi5jYXRlZ29yeS1saW5lID4gbGFiZWwsXG4uY29tcGxldGUtY29udGFpbmVyID4gbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxNWNoO1xuICBmb250LWZhbWlseTogXCJIYXBweSBNb25rZXlcIjtcbiAgZm9udC1zaXplOiAyLjE1Y2g7XG4gIG1hcmdpbi10b3A6IDEuNWNoO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbmlucHV0W3R5cGU9XCJkYXRldGltZS1sb2NhbFwiXSxcbi50YXNrLXByaW9yaXR5IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDNjaDtcbiAgd2lkdGg6IDEwJTtcbiAgcGFkZGluZy1sZWZ0OiAxY2g7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xuICBmb250LXNpemU6IDEuOWNoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxY2g7XG4gIGJvcmRlcjogMC4yY2ggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XG4gIG1hcmdpbi10b3A6IDEuNWNoO1xufVxuXG50ZXh0YXJlYSB7XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmctbGVmdDogMWNoO1xuICBmb250LWZhbWlseTogXCJIYXBweSBNb25rZXlcIjtcbiAgZm9udC1zaXplOiAxLjljaDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ3JvdW5kLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMWNoO1xuICBib3JkZXI6IDAuMmNoIHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xuICByZXNpemU6IHZlcnRpY2FsO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyxcbnRleHRhcmVhOmZvY3VzLFxuaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdOmZvY3VzLFxuLnRhc2stcHJpb3JpdHk6Zm9jdXMge1xuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOnZhbGlkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ3JvdW5kLWNvbG9yKTtcbn1cblxuYnV0dG9uLmFkZC10by1kbyxcbmJ1dHRvbi5lZGl0LXRvLWRvLFxuYnV0dG9uLmNhbmNlbC1jYXRlZ29yeSxcbmJ1dHRvbi5jYW5jZWwtdG8tZG8ge1xuICBmb250LWZhbWlseTogXCJIYXBweSBNb25rZXlcIjtcbiAgZm9udC1zaXplOiAxLjhjaDtcbiAgd2lkdGg6IDhjaDtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ3JvdW5kLWNvbG9yKTtcbiAgcGFkZGluZzogMC44Y2g7XG4gIGJvcmRlci1yYWRpdXM6IDNjaDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZC1mb290LWNvbG9yKTtcbn1cblxuYnV0dG9uLmFkZC10by1kbzpob3ZlcixcbmJ1dHRvbi5lZGl0LXRvLWRvOmhvdmVyLFxuYnV0dG9uLmNhbmNlbC1jYXRlZ29yeTpob3ZlcixcbmJ1dHRvbi5jYW5jZWwtdG8tZG86aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5idXR0b24uYWRkLXRvLWRvOmZvY3VzLFxuYnV0dG9uLmVkaXQtdG8tZG86Zm9jdXMsXG5idXR0b24uY2FuY2VsLWNhdGVnb3J5OmZvY3VzLFxuYnV0dG9uLmNhbmNlbC10by1kbzpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XG59XG5cbi8qIE1haW46IFRhYiBDb250ZW50ICovXG5cbi50YWItY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbiAgZm9udC1mYW1pbHk6IFwiSGFwcHkgTW9ua2V5XCI7XG4gIG1hcmdpbi10b3A6IDJjaDtcbiAgbWFyZ2luLWxlZnQ6IDJjaDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRhYi1jb250ZW50LS1hY3RpdmUge1xuICBkaXNwbGF5OiBpbml0aWFsO1xuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xuICBtYXJnaW4tdG9wOiAyY2g7XG4gIG1hcmdpbi1sZWZ0OiAyY2g7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIE1haW46IENhdGVnb3J5IFZpZXcgKi9cblxuLyogQ2F0ZWdvcnkgVmlldzogTmV3IENhdGVnb3J5IEZvcm0gKi9cblxuLnNlbGVjdC1mb3JtLWNvbnRhaW5lcixcbi5jcmVhdGUtY2F0LXdhcm5pbmctZGl2LFxuLmNhdC1mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5zZWxlY3QtZm9ybSxcbi5jcmVhdGUtY2F0LXdhcm5pbmcsXG4uY2F0ZWdvcnktZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1mb290LWNvbG9yKTtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgd2lkdGg6IDUwY2g7XG4gIG1hcmdpbi10b3A6IDVjaDtcbiAgcGFkZGluZzogMS41Y2g7XG4gIGJvcmRlci1yYWRpdXM6IDFjaDtcbn1cblxuLnNlbGVjdC1hc2ssXG4ubXVzdC1jcmVhdGUtY2F0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJMYW5jZWxvdFwiO1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXS5jYXRlZ29yeSB7XG4gIG1hcmdpbi1sZWZ0OiAtNWNoO1xuICB3aWR0aDogNzAlO1xufVxuXG4uc2VsZWN0LWJ0bi1saW5lLFxuLmNhdC1idG4tbGluZSB7XG4gIG1hcmdpbi10b3A6IDJjaDtcbn1cblxuYnV0dG9uLmFkZC1jYXRlZ29yeSxcbmJ1dHRvbi5hZ3JlZS1idG4sXG5idXR0b24uc2VsZWN0LXRvLWRvLWJ0biB7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xuICBmb250LXNpemU6IDEuOGNoO1xuICB3aWR0aDogMjBjaDtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ3JvdW5kLWNvbG9yKTtcbiAgcGFkZGluZzogMC44Y2g7XG4gIGJvcmRlci1yYWRpdXM6IDNjaDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZC1mb290LWNvbG9yKTtcbn1cblxuYnV0dG9uLmFkZC1jYXRlZ29yeTpob3ZlcixcbmJ1dHRvbi5hZ3JlZS1idG46aG92ZXIsXG5idXR0b24uc2VsZWN0LXRvLWRvLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbi5hZGQtY2F0ZWdvcnk6Zm9jdXMsXG5idXR0b24uYWdyZWUtYnRuOmZvY3VzLFxuYnV0dG9uLnNlbGVjdC10by1kby1idG46Zm9jdXMge1xuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XG59XG5cbi8qIENhdGVnb3J5IFZpZXc6IE5ldyBDYXRlZ29yeSBTZWN0aW9uICovXG4uY2F0LXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiA0Y2g7XG59XG5cbi5jYXQtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIkxhbmNlbG90XCI7XG4gIGZvbnQtc2l6ZTogMmNoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmFjdGl2ZS10YWItY29sb3IpO1xuICB3aWR0aDogMzBjaDtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzY2g7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFjaDtcbiAgYm9yZGVyLXJhZGl1czogMWNoO1xuICBtYXJnaW4tYm90dG9tOiAyY2g7XG59XG5cbi5jYXQtY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ldy10by1kbyB7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xuICBmb250LXNpemU6IDJjaDtcbiAgd2lkdGg6IDEwY2g7XG4gIGhlaWdodDogM2NoO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMmNoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWZvb3QtY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXctdG8tZG86aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xufVxuXG4ubmV3LXRvLWRvOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xufVxuXG4uY2F0LWNhcmQgLmRlbGV0ZS1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1yaWdodDogMWNoO1xuICBtYXJnaW4tYm90dG9tOiAwLjVjaDtcbn1cblxuLmNhdC1jYXJkIC5kZWxldGUtaWNvbiA+IGltZyB7XG4gIHdpZHRoOiAyY2g7XG59XG5cbi5jYXQtY2FyZCAuZGVsZXRlLWljb24gPiBpbWc6aG92ZXIge1xuICB3aWR0aDogMi4yY2g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhdC1jYXJkIC5kZWxldGUtaWNvbiA+IGltZzpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDIuOGNoO1xuICBwYWRkaW5nOiAwLjVjaDtcbn1cblxuLyogQ2F0ZWdvcnkgU2VjdGlvbjogTmV3IFRvIERvIEl0ZW0gKi9cblxuLnRvLWRvLWVudHJ5IHtcbiAgbWFyZ2luOiAxY2ggMCAxY2ggMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdG8tZG8tZW50cnktY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxY2g7XG4gIHBhZGRpbmc6IDFjaCAwIDFjaCAwO1xufVxuXG4udG8tZG8tZW50cnkgLnRpdGxlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGZvbnQtc2l6ZTogMi42Y2g7XG4gIHBhZGRpbmctYm90dG9tOiAxY2g7XG59XG5cbi5kZXRhaWxzLXRpdGxlLFxuLmR1ZS10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDIuNWNoO1xuICBtYXJnaW4tbGVmdDogMS41Y2g7XG59XG5cbi5kZXRhaWxzLFxuLnNob3ctZHVlLWRhdGUge1xuICBwYWRkaW5nLWJvdHRvbTogMWNoO1xuICBmb250LWZhbWlseTogXCJIYXBweSBNb25rZXlcIjtcbn1cblxuLnRvLWRvLWVudHJ5ID4gbGFiZWwge1xuICB3aWR0aDogMTBjaDtcbiAgbWFyZ2luLWJvdHRvbTogMWNoO1xufVxuXG4uY29tcGxldGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjdjaDtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLmNvbXBsZXRlIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLW8tYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgaGVpZ2h0OiAyLjVjaDtcbiAgd2lkdGg6IDIuNWNoO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogMWNoO1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLmNvbXBsZXRlOmZvY3VzIHtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0uY29tcGxldGU6Y2hlY2tlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0uY29tcGxldGU6Y2hlY2tlZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcMjcxM1wiO1xuICBjb2xvcjogdmFyKC0tY2hlY2ttYXJrLWNvbG9yKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0wLjRjaDtcbiAgZm9udC1zaXplOiA0Y2g7XG59XG5cbi50by1kby1lbnRyeSAuZGVsZXRlLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyLjVjaDtcbn1cblxuLnRvLWRvLWVudHJ5IC5kZWxldGUtaWNvbiA+IGltZyB7XG4gIHdpZHRoOiAyY2g7XG4gIG1hcmdpbi10b3A6IDRjaDtcbn1cblxuLnRvLWRvLWVudHJ5IC5kZWxldGUtaWNvbiA+IGltZzpob3ZlciB7XG4gIHdpZHRoOiAyLjJjaDtcbiAgbWFyZ2luLXRvcDogMi4xY2g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhdC1jYXJkIC5kZWxldGUtaWNvbiA+IGltZzpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDIuOGNoO1xuICBoZWlnaHQ6IDNjaDtcbiAgcGFkZGluZzogMC41Y2g7XG59XG5cbi50by1kby1lbnRyeSAucHJpb3JpdHkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzY2g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyY2g7XG4gIHBhZGRpbmctcmlnaHQ6IDJjaDtcbn1cblxuLnRvLWRvLWVudHJ5IC5wcmlvcml0eS1jb2xvcixcbi5ncmlkLWNlbGxzIC5wcmlvcml0eS1jb2xvciB7XG4gIHdpZHRoOiAyLjJjaDtcbiAgaGVpZ2h0OiAyLjJjaDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XG59XG5cbi50by1kby1lbnRyeSAucHJpb3JpdHkgPiBpbWcge1xuICB3aWR0aDogMi4yY2g7XG59XG5cbi50by1kby1lbnRyeSAucHJpb3JpdHkgPiBpbWc6Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAyLjhjaDtcbiAgcGFkZGluZzogMC41Y2g7XG59XG5cbi8qIE1haW46IER1ZSBEYXRlIFZpZXcgKi9cblxuLmJ5LWR1ZS1kYXRlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi8qIE1haW46IER1ZSBEYXRlLCBQcmlvcml0eSBhbmQgQ29tcGxldGVkIFRhc2tzIFZpZXcgLSBHcmlkIFN0eWxpbmcgKi9cbi5kdWUtdmlldy1kaXYsXG4ucHJpb3JpdHktdmlldy1kaXYsXG4uY29tcGxldGVkLXZpZXctZGl2IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xuICBtYXJnaW4tcmlnaHQ6IDJjaDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kdWUtdGFzay1oZWFkZXIsXG4ucHJpb3JpdHktdGFzay1oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xufVxuXG4uY29tcGxldGVkLXRhc2staGVhZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbn1cblxuLmR1ZS10YXNrLWhlYWRlcixcbi5wcmlvcml0eS10YXNrLWhlYWRlcixcbi5jb21wbGV0ZWQtdGFzay1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwLjNjaCBzb2xpZCBibGFjaztcbiAgZm9udC1mYW1pbHk6IFwibGFuY2Vsb3RcIjtcbiAgZm9udC1zaXplOiAyY2g7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctYm90dG9tOiAxY2g7XG4gIG1hcmdpbi1yaWdodDogMmNoO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uZHVlLXRhc2tzLXJvdy1wYXJlbnQsXG4ucHJpb3JpdHktdGFza3Mtcm93LXBhcmVudCxcbi5jb21wbGV0ZWQtdGFza3Mtcm93LXBhcmVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDJjaDtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLmR1ZS12aWV3LXJvdyxcbi5wcmlvcml0eS12aWV3LXJvdyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG59XG5cbi5jb21wbGV0ZWQtdGFza3Mtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcbn1cblxuLmR1ZS12aWV3LXJvdyxcbi5wcmlvcml0eS12aWV3LXJvdyxcbi5jb21wbGV0ZWQtdGFza3Mtcm93IHtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgcGFkZGluZy10b3A6IDFjaDtcbiAgcGFkZGluZy1ib3R0b206IDFjaDtcbiAgZm9udC1mYW1pbHk6IFwiSGFwcHkgTW9ua2V5XCI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmhlYWRlcnMsXG4uZ3JpZC1jZWxscyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbn1cblxuLmhlYWRlcnM6bm90KDpsYXN0LW9mLXR5cGUpLFxuLmdyaWQtY2VsbHM6bm90KDpsYXN0LW9mLXR5cGUpIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yaWdodDogMC4yY2ggc29saWQgYmxhY2s7XG59XG5cbi5kdWUtdmlldy1kdWUsXG4ucHJpb3JpdHktdmlldy1wcmlvcml0eSB7XG4gIGdyaWQtY29sdW1uOiAxO1xufVxuXG4uZHVlLXZpZXctdGl0bGUsXG4ucHJpb3JpdHktdmlldy10aXRsZSB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG4uZHVlLXZpZXctZGVzY3JpcHRpb24sXG4ucHJpb3JpdHktdmlldy1kZXNjcmlwdGlvbiB7XG4gIGdyaWQtY29sdW1uOiAzO1xufVxuXG4uZHVlLXZpZXctcHJpb3JpdHksXG4ucHJpb3JpdHktdmlldy1kdWUge1xuICBncmlkLWNvbHVtbjogNDtcbn1cblxuLmR1ZS12aWV3LWNvbXBsZXRlLFxuLnByaW9yaXR5LXZpZXctY29tcGxldGUge1xuICBncmlkLWNvbHVtbjogNTtcbn1cblxuLmR1ZS12aWV3LWRlbGV0ZSxcbi5wcmlvcml0eS12aWV3LWRlbGV0ZSB7XG4gIGdyaWQtY29sdW1uOiA2O1xufVxuXG4uY29tcGxldGUtdmlldy1jb21wbGV0ZSB7XG4gIGdyaWQtY29sdW1uOiAxO1xufVxuXG4uY29tcGxldGUtdmlldy10aXRsZSB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuXG4uY29tcGxldGUtdmlldy1kZXNjcmlwdGlvbiB7XG4gIGdyaWQtY29sdW1uOiAzO1xufVxuXG4uY29tcGxldGUtdmlldy1wcmlvcml0eSB7XG4gIGdyaWQtY29sdW1uOiA0O1xufVxuXG4uY29tcGxldGUtdmlldy1kZWxldGUge1xuICBncmlkLWNvbHVtbjogNTtcbn1cblxuLmdyaWQtY2VsbHMgLnByaW9yaXR5LWNvbG9yIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDIuMmNoO1xuICBoZWlnaHQ6IDIuMmNoO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmdyaWQtY2VsbHMgPiBpbWcge1xuICB3aWR0aDogMmNoO1xufVxuXG4uZ3JpZC1jZWxscyA+IGltZzpob3ZlciB7XG4gIHdpZHRoOiAyLjJjaDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBGb290ZXIgKi9cblxuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1mb290LWNvbG9yKTtcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xufVxuXG5mb290ZXIgcCB7XG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XG4gIGp1c3RpZnktc2VsZjogZW5kO1xuICBtYXJnaW4tcmlnaHQ6IDFjaDtcbn1cblxuZm9vdGVyIGE6Zm9jdXMge1xuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XG59XG5cbmZvb3RlciBpbWcge1xuICBoZWlnaHQ6IDMuNWNoO1xuICBtYXJnaW4tbGVmdDogMWNoO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDZCQUE2QjtBQUM3QjtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDREQUEyRTtBQUM3RTs7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQjttQkFDaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFlBQVk7RUFDWixzQkFBc0I7O0VBRXRCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QixnQ0FBZ0M7RUFDaEMsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1DQUFtQztBQUNyQzs7QUFFQSxXQUFXOztBQUVYO0VBQ0Usd0NBQXdDO0VBQ3hDLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsd0JBQXdCOztFQUV4QixhQUFhO0VBQ2IsZ0NBQWdDOztFQUVoQyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7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O0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogbGFuY2Vsb3QtcmVndWxhciAtIGxhdGluICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkxhbmNlbG90XFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvbGFuY2Vsb3QtdjIzLWxhdGluLXJlZ3VsYXIud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcblxcbi8qIGhhcHB5LW1vbmtleS1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFwcHkgTW9ua2V5XFxcIjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBzcmM6IHVybChcXFwiLi9hc3NldHMvZm9udHMvaGFwcHktbW9ua2V5LXYxNC1sYXRpbi1yZWd1bGFyLndvZmYyXFxcIilcXG4gICAgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgLS1tYWluLWJncm91bmQtY29sb3I6ICNmZmU4ZDY7XFxuICAtLWhlYWQtZm9vdC1jb2xvcjogI2NjYTU5MDtcXG4gIC0taW5hY3RpdmUtdGFiLWNvbG9yOiAjYjdiN2E0O1xcbiAgLS1mb3JtLWdyZWVuLWNvbG9yOiAjOGI4Yjc2O1xcbiAgLS10by1kby1lbnRyeS1jb2xvcjogI2Y4ZDZiYztcXG4gIC0tY2hlY2ttYXJrLWNvbG9yOiAjNTM1MzQ3O1xcbiAgLS1sb3ctcHJpb3JpdHktY29sb3I6ICNlN2YyNGY7XFxuICAtLW1lZGl1bS1wcmlvcml0eS1jb2xvcjogI2VlYjI1MDtcXG4gIC0taGlnaC1wcmlvcml0eS1jb2xvcjogI2JjMjcwMjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNy41ZnIgMC44ZnI7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1mb290LWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGFuY2Vsb3RcXFwiO1xcbiAgZm9udC1zaXplOiAyLjhjaDtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDVmciAwLjdmcjtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5oZWFkZXIgaDEge1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi1sZWZ0OiAxY2g7XFxufVxcblxcbi5oZWFkZXIgYnV0dG9uLnNob3ctZm9ybS1idG4sXFxuLmhlYWRlciBidXR0b24udGFiLWJ0biB7XFxuICBoZWlnaHQ6IDhjaDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi1yaWdodDogNWNoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1mb290LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmhlYWRlciBidXR0b24uc2hvdy1mb3JtLWJ0bjpmb2N1cyB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xcbn1cXG5cXG4vKiBNYWluICovXFxuXFxuLm1haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ3JvdW5kLWNvbG9yKTtcXG4gIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxufVxcblxcbi8qIE1haW46IFNpZGUtTmF2ICovXFxuXFxuLmNhdC1mb3JtLXZpc2libGUge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zaWRlLW5hdiB7XFxuICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmFjdGl2ZS10YWItY29sb3IpO1xcbn1cXG5cXG4uZm9ybXMtYm94IHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgbWFyZ2luOiAwIDJjaDtcXG59XFxuXFxuLmNvbnRlbnQtYm94IHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgbWFyZ2luOiAwIDJjaDtcXG59XFxuXFxuLnRhYi1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5hY3RpdmUtdGFiLWNvbG9yKTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGFuY2Vsb3RcXFwiO1xcbiAgZm9udC1zaXplOiAzY2g7XFxuICBib3JkZXI6IG5vbmU7XFxuXFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTBjaDtcXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uYnRuLWN0cmw6Zm9jdXMge1xcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xcbn1cXG5cXG4uYnRuLWN0cmwtLWFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xcbn1cXG5cXG4udGFiLWJ0bjpsYXN0LWNoaWxkIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7XFxufVxcblxcbi8qIE1haW46IFRhYiBvcGVuaW5nIG1lc3NhZ2VzICovXFxuLmFkZC1jYXQtbXNnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIE1haW46IFRvLURvLUZvcm0gKi9cXG4uZm9ybS1kaXYsXFxuLmVkaXQtZm9ybS1kaXYge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IDEwO1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNWNoO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA1Y2g7XFxuICBwYWRkaW5nOiA1Y2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmFjdGl2ZS10YWItY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogM2NoO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkIGJsYWNrO1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0yY2g7XFxufVxcblxcbi5yZXEtbXNnIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFwcHkgTW9ua2V5XFxcIjtcXG4gIGZvbnQtc2l6ZTogMi44Y2g7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVjaDtcXG59XFxuXFxuLmZvcm0tbGluZS5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcm0tbGluZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uY2F0ZWdvcnktbmFtZSB7XFxuICBtYXJnaW4tdG9wOiAxLjVjaDtcXG4gIGZvbnQtc2l6ZTogMi4yY2g7XFxuICBmb250LWZhbWlseTogXFxcIkhhcHB5IE1vbmtleVxcXCI7XFxufVxcblxcbi5pbnN0cnVjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICBtYXJnaW4tdG9wOiAtMS40Y2g7XFxufVxcblxcbi50aXRsZS1tc2c6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiQWRkIGEgdGl0bGUuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFwcHkgTW9ua2V5XFxcIjtcXG4gIGZvbnQtc2l6ZTogMS44Y2g7XFxufVxcblxcbi5wcmlvcml0eS1tc2c6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiQ2hvb3NlIGEgcHJpb3JpdHkgbGV2ZWwuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFwcHkgTW9ua2V5XFxcIjtcXG4gIGZvbnQtc2l6ZTogMS44Y2g7XFxufVxcblxcbi5kZXNjcmlwdGlvbi1tc2c6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiQWRkIGRldGFpbHMgKG9wdGlvbmFsKS5cXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXBweSBNb25rZXlcXFwiO1xcbiAgZm9udC1zaXplOiAxLjhjaDtcXG59XFxuXFxuLmR1ZS1kYXRlLW1zZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJTZWxlY3QgYSBkYXRlIGFuZCB0aW1lLlxcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkhhcHB5IE1vbmtleVxcXCI7XFxuICBmb250LXNpemU6IDEuOGNoO1xcbn1cXG5cXG4uYnRuLWxpbmUsXFxuLnNlbGVjdC1idG4tbGluZSxcXG4uY2F0LWJ0bi1saW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogM2NoO1xcbiAgbWFyZ2luLXRvcDogNGNoO1xcbn1cXG5cXG4uZm9ybS1saW5lID4gbGFiZWwsXFxuLmNhdGVnb3J5LWxpbmUgPiBsYWJlbCxcXG4uY29tcGxldGUtY29udGFpbmVyID4gbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDE1Y2g7XFxuICBmb250LWZhbWlseTogXFxcIkhhcHB5IE1vbmtleVxcXCI7XFxuICBmb250LXNpemU6IDIuMTVjaDtcXG4gIG1hcmdpbi10b3A6IDEuNWNoO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXSxcXG4udGFzay1wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAzY2g7XFxuICB3aWR0aDogMTAlO1xcbiAgcGFkZGluZy1sZWZ0OiAxY2g7XFxuICBmb250LWZhbWlseTogXFxcIkhhcHB5IE1vbmtleVxcXCI7XFxuICBmb250LXNpemU6IDEuOWNoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ3JvdW5kLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFjaDtcXG4gIGJvcmRlcjogMC4yY2ggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxuICBtYXJnaW4tdG9wOiAxLjVjaDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmctbGVmdDogMWNoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXBweSBNb25rZXlcXFwiO1xcbiAgZm9udC1zaXplOiAxLjljaDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxY2g7XFxuICBib3JkZXI6IDAuMmNoIHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdOmZvY3VzLFxcbnRleHRhcmVhOmZvY3VzLFxcbmlucHV0W3R5cGU9XFxcImRhdGV0aW1lLWxvY2FsXFxcIl06Zm9jdXMsXFxuLnRhc2stcHJpb3JpdHk6Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06dmFsaWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLmFkZC10by1kbyxcXG5idXR0b24uZWRpdC10by1kbyxcXG5idXR0b24uY2FuY2VsLWNhdGVnb3J5LFxcbmJ1dHRvbi5jYW5jZWwtdG8tZG8ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXBweSBNb25rZXlcXFwiO1xcbiAgZm9udC1zaXplOiAxLjhjaDtcXG4gIHdpZHRoOiA4Y2g7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ3JvdW5kLWNvbG9yKTtcXG4gIHBhZGRpbmc6IDAuOGNoO1xcbiAgYm9yZGVyLXJhZGl1czogM2NoO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taGVhZC1mb290LWNvbG9yKTtcXG59XFxuXFxuYnV0dG9uLmFkZC10by1kbzpob3ZlcixcXG5idXR0b24uZWRpdC10by1kbzpob3ZlcixcXG5idXR0b24uY2FuY2VsLWNhdGVnb3J5OmhvdmVyLFxcbmJ1dHRvbi5jYW5jZWwtdG8tZG86aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbi5hZGQtdG8tZG86Zm9jdXMsXFxuYnV0dG9uLmVkaXQtdG8tZG86Zm9jdXMsXFxuYnV0dG9uLmNhbmNlbC1jYXRlZ29yeTpmb2N1cyxcXG5idXR0b24uY2FuY2VsLXRvLWRvOmZvY3VzIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xcbn1cXG5cXG4vKiBNYWluOiBUYWIgQ29udGVudCAqL1xcblxcbi50YWItY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXBweSBNb25rZXlcXFwiO1xcbiAgbWFyZ2luLXRvcDogMmNoO1xcbiAgbWFyZ2luLWxlZnQ6IDJjaDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4udGFiLWNvbnRlbnQtLWFjdGl2ZSB7XFxuICBkaXNwbGF5OiBpbml0aWFsO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXBweSBNb25rZXlcXFwiO1xcbiAgbWFyZ2luLXRvcDogMmNoO1xcbiAgbWFyZ2luLWxlZnQ6IDJjaDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBNYWluOiBDYXRlZ29yeSBWaWV3ICovXFxuXFxuLyogQ2F0ZWdvcnkgVmlldzogTmV3IENhdGVnb3J5IEZvcm0gKi9cXG5cXG4uc2VsZWN0LWZvcm0tY29udGFpbmVyLFxcbi5jcmVhdGUtY2F0LXdhcm5pbmctZGl2LFxcbi5jYXQtZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbn1cXG5cXG4uc2VsZWN0LWZvcm0sXFxuLmNyZWF0ZS1jYXQtd2FybmluZyxcXG4uY2F0ZWdvcnktZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWQtZm9vdC1jb2xvcik7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgd2lkdGg6IDUwY2g7XFxuICBtYXJnaW4tdG9wOiA1Y2g7XFxuICBwYWRkaW5nOiAxLjVjaDtcXG4gIGJvcmRlci1yYWRpdXM6IDFjaDtcXG59XFxuXFxuLnNlbGVjdC1hc2ssXFxuLm11c3QtY3JlYXRlLWNhdCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIkxhbmNlbG90XFxcIjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLmNhdGVnb3J5IHtcXG4gIG1hcmdpbi1sZWZ0OiAtNWNoO1xcbiAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLnNlbGVjdC1idG4tbGluZSxcXG4uY2F0LWJ0bi1saW5lIHtcXG4gIG1hcmdpbi10b3A6IDJjaDtcXG59XFxuXFxuYnV0dG9uLmFkZC1jYXRlZ29yeSxcXG5idXR0b24uYWdyZWUtYnRuLFxcbmJ1dHRvbi5zZWxlY3QtdG8tZG8tYnRuIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFwcHkgTW9ua2V5XFxcIjtcXG4gIGZvbnQtc2l6ZTogMS44Y2g7XFxuICB3aWR0aDogMjBjaDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xcbiAgcGFkZGluZzogMC44Y2g7XFxuICBib3JkZXItcmFkaXVzOiAzY2g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkLWZvb3QtY29sb3IpO1xcbn1cXG5cXG5idXR0b24uYWRkLWNhdGVnb3J5OmhvdmVyLFxcbmJ1dHRvbi5hZ3JlZS1idG46aG92ZXIsXFxuYnV0dG9uLnNlbGVjdC10by1kby1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmJ1dHRvbi5hZGQtY2F0ZWdvcnk6Zm9jdXMsXFxuYnV0dG9uLmFncmVlLWJ0bjpmb2N1cyxcXG5idXR0b24uc2VsZWN0LXRvLWRvLWJ0bjpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxufVxcblxcbi8qIENhdGVnb3J5IFZpZXc6IE5ldyBDYXRlZ29yeSBTZWN0aW9uICovXFxuLmNhdC1zZWN0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogNGNoO1xcbn1cXG5cXG4uY2F0LWNhcmQge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYW5jZWxvdFxcXCI7XFxuICBmb250LXNpemU6IDJjaDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluYWN0aXZlLXRhYi1jb2xvcik7XFxuICB3aWR0aDogMzBjaDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogM2NoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFjaDtcXG4gIGJvcmRlci1yYWRpdXM6IDFjaDtcXG4gIG1hcmdpbi1ib3R0b206IDJjaDtcXG59XFxuXFxuLmNhdC1jb250ZW50IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubmV3LXRvLWRvIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFwcHkgTW9ua2V5XFxcIjtcXG4gIGZvbnQtc2l6ZTogMmNoO1xcbiAgd2lkdGg6IDEwY2g7XFxuICBoZWlnaHQ6IDNjaDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMmNoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1mb290LWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy10by1kbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xcbn1cXG5cXG4ubmV3LXRvLWRvOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcXG59XFxuXFxuLmNhdC1jYXJkIC5kZWxldGUtaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi1yaWdodDogMWNoO1xcbiAgbWFyZ2luLWJvdHRvbTogMC41Y2g7XFxufVxcblxcbi5jYXQtY2FyZCAuZGVsZXRlLWljb24gPiBpbWcge1xcbiAgd2lkdGg6IDJjaDtcXG59XFxuXFxuLmNhdC1jYXJkIC5kZWxldGUtaWNvbiA+IGltZzpob3ZlciB7XFxuICB3aWR0aDogMi4yY2g7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jYXQtY2FyZCAuZGVsZXRlLWljb24gPiBpbWc6Zm9jdXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDIuOGNoO1xcbiAgcGFkZGluZzogMC41Y2g7XFxufVxcblxcbi8qIENhdGVnb3J5IFNlY3Rpb246IE5ldyBUbyBEbyBJdGVtICovXFxuXFxuLnRvLWRvLWVudHJ5IHtcXG4gIG1hcmdpbjogMWNoIDAgMWNoIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10by1kby1lbnRyeS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxY2g7XFxuICBwYWRkaW5nOiAxY2ggMCAxY2ggMDtcXG59XFxuXFxuLnRvLWRvLWVudHJ5IC50aXRsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc2l6ZTogMi42Y2g7XFxuICBwYWRkaW5nLWJvdHRvbTogMWNoO1xcbn1cXG5cXG4uZGV0YWlscy10aXRsZSxcXG4uZHVlLXRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMi41Y2g7XFxuICBtYXJnaW4tbGVmdDogMS41Y2g7XFxufVxcblxcbi5kZXRhaWxzLFxcbi5zaG93LWR1ZS1kYXRlIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxY2g7XFxuICBmb250LWZhbWlseTogXFxcIkhhcHB5IE1vbmtleVxcXCI7XFxufVxcblxcbi50by1kby1lbnRyeSA+IGxhYmVsIHtcXG4gIHdpZHRoOiAxMGNoO1xcbiAgbWFyZ2luLWJvdHRvbTogMWNoO1xcbn1cXG5cXG4uY29tcGxldGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMC43Y2g7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0uY29tcGxldGUge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW8tYXBwZWFyYW5jZTogbm9uZTtcXG4gIGFwcGVhcmFuY2U6IG5vbmU7XFxuICBoZWlnaHQ6IDIuNWNoO1xcbiAgd2lkdGg6IDIuNWNoO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAxY2g7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ3JvdW5kLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXS5jb21wbGV0ZTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0uY29tcGxldGU6Y2hlY2tlZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0uY29tcGxldGU6Y2hlY2tlZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMjcxM1xcXCI7XFxuICBjb2xvcjogdmFyKC0tY2hlY2ttYXJrLWNvbG9yKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogLTAuNGNoO1xcbiAgZm9udC1zaXplOiA0Y2g7XFxufVxcblxcbi50by1kby1lbnRyeSAuZGVsZXRlLWljb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMi41Y2g7XFxufVxcblxcbi50by1kby1lbnRyeSAuZGVsZXRlLWljb24gPiBpbWcge1xcbiAgd2lkdGg6IDJjaDtcXG4gIG1hcmdpbi10b3A6IDRjaDtcXG59XFxuXFxuLnRvLWRvLWVudHJ5IC5kZWxldGUtaWNvbiA+IGltZzpob3ZlciB7XFxuICB3aWR0aDogMi4yY2g7XFxuICBtYXJnaW4tdG9wOiAyLjFjaDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhdC1jYXJkIC5kZWxldGUtaWNvbiA+IGltZzpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMi44Y2g7XFxuICBoZWlnaHQ6IDNjaDtcXG4gIHBhZGRpbmc6IDAuNWNoO1xcbn1cXG5cXG4udG8tZG8tZW50cnkgLnByaW9yaXR5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzY2g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmctbGVmdDogMmNoO1xcbiAgcGFkZGluZy1yaWdodDogMmNoO1xcbn1cXG5cXG4udG8tZG8tZW50cnkgLnByaW9yaXR5LWNvbG9yLFxcbi5ncmlkLWNlbGxzIC5wcmlvcml0eS1jb2xvciB7XFxuICB3aWR0aDogMi4yY2g7XFxuICBoZWlnaHQ6IDIuMmNoO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG59XFxuXFxuLnRvLWRvLWVudHJ5IC5wcmlvcml0eSA+IGltZyB7XFxuICB3aWR0aDogMi4yY2g7XFxufVxcblxcbi50by1kby1lbnRyeSAucHJpb3JpdHkgPiBpbWc6Zm9jdXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDIuOGNoO1xcbiAgcGFkZGluZzogMC41Y2g7XFxufVxcblxcbi8qIE1haW46IER1ZSBEYXRlIFZpZXcgKi9cXG5cXG4uYnktZHVlLWRhdGUge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi8qIE1haW46IER1ZSBEYXRlLCBQcmlvcml0eSBhbmQgQ29tcGxldGVkIFRhc2tzIFZpZXcgLSBHcmlkIFN0eWxpbmcgKi9cXG4uZHVlLXZpZXctZGl2LFxcbi5wcmlvcml0eS12aWV3LWRpdixcXG4uY29tcGxldGVkLXZpZXctZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDJjaDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZHVlLXRhc2staGVhZGVyLFxcbi5wcmlvcml0eS10YXNrLWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG59XFxuXFxuLmNvbXBsZXRlZC10YXNrLWhlYWRlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG59XFxuXFxuLmR1ZS10YXNrLWhlYWRlcixcXG4ucHJpb3JpdHktdGFzay1oZWFkZXIsXFxuLmNvbXBsZXRlZC10YXNrLWhlYWRlciB7XFxuICBib3JkZXItYm90dG9tOiAwLjNjaCBzb2xpZCBibGFjaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwibGFuY2Vsb3RcXFwiO1xcbiAgZm9udC1zaXplOiAyY2g7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAxY2g7XFxuICBtYXJnaW4tcmlnaHQ6IDJjaDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5kdWUtdGFza3Mtcm93LXBhcmVudCxcXG4ucHJpb3JpdHktdGFza3Mtcm93LXBhcmVudCxcXG4uY29tcGxldGVkLXRhc2tzLXJvdy1wYXJlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tcmlnaHQ6IDJjaDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5kdWUtdmlldy1yb3csXFxuLnByaW9yaXR5LXZpZXctcm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbn1cXG5cXG4uY29tcGxldGVkLXRhc2tzLXJvdyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcXG59XFxuXFxuLmR1ZS12aWV3LXJvdyxcXG4ucHJpb3JpdHktdmlldy1yb3csXFxuLmNvbXBsZXRlZC10YXNrcy1yb3cge1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIHBhZGRpbmctdG9wOiAxY2g7XFxuICBwYWRkaW5nLWJvdHRvbTogMWNoO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXBweSBNb25rZXlcXFwiO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uaGVhZGVycyxcXG4uZ3JpZC1jZWxscyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbn1cXG5cXG4uaGVhZGVyczpub3QoOmxhc3Qtb2YtdHlwZSksXFxuLmdyaWQtY2VsbHM6bm90KDpsYXN0LW9mLXR5cGUpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJpZ2h0OiAwLjJjaCBzb2xpZCBibGFjaztcXG59XFxuXFxuLmR1ZS12aWV3LWR1ZSxcXG4ucHJpb3JpdHktdmlldy1wcmlvcml0eSB7XFxuICBncmlkLWNvbHVtbjogMTtcXG59XFxuXFxuLmR1ZS12aWV3LXRpdGxlLFxcbi5wcmlvcml0eS12aWV3LXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uZHVlLXZpZXctZGVzY3JpcHRpb24sXFxuLnByaW9yaXR5LXZpZXctZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxufVxcblxcbi5kdWUtdmlldy1wcmlvcml0eSxcXG4ucHJpb3JpdHktdmlldy1kdWUge1xcbiAgZ3JpZC1jb2x1bW46IDQ7XFxufVxcblxcbi5kdWUtdmlldy1jb21wbGV0ZSxcXG4ucHJpb3JpdHktdmlldy1jb21wbGV0ZSB7XFxuICBncmlkLWNvbHVtbjogNTtcXG59XFxuXFxuLmR1ZS12aWV3LWRlbGV0ZSxcXG4ucHJpb3JpdHktdmlldy1kZWxldGUge1xcbiAgZ3JpZC1jb2x1bW46IDY7XFxufVxcblxcbi5jb21wbGV0ZS12aWV3LWNvbXBsZXRlIHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG4uY29tcGxldGUtdmlldy10aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMjtcXG59XFxuXFxuLmNvbXBsZXRlLXZpZXctZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW46IDM7XFxufVxcblxcbi5jb21wbGV0ZS12aWV3LXByaW9yaXR5IHtcXG4gIGdyaWQtY29sdW1uOiA0O1xcbn1cXG5cXG4uY29tcGxldGUtdmlldy1kZWxldGUge1xcbiAgZ3JpZC1jb2x1bW46IDU7XFxufVxcblxcbi5ncmlkLWNlbGxzIC5wcmlvcml0eS1jb2xvciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDIuMmNoO1xcbiAgaGVpZ2h0OiAyLjJjaDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGlnaC1wcmlvcml0eS1jb2xvcik7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmdyaWQtY2VsbHMgPiBpbWcge1xcbiAgd2lkdGg6IDJjaDtcXG59XFxuXFxuLmdyaWQtY2VsbHMgPiBpbWc6aG92ZXIge1xcbiAgd2lkdGg6IDIuMmNoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBGb290ZXIgKi9cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1mb290LWNvbG9yKTtcXG4gIGdyaWQtYXJlYTogMyAvIDEgLyA0IC8gMjtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXBweSBNb25rZXlcXFwiO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICBtYXJnaW4tcmlnaHQ6IDFjaDtcXG59XFxuXFxuZm9vdGVyIGE6Zm9jdXMge1xcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xcbn1cXG5cXG5mb290ZXIgaW1nIHtcXG4gIGhlaWdodDogMy41Y2g7XFxuICBtYXJnaW4tbGVmdDogMWNoO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbn07XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiBHKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIFkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjtcblxuICAgIC8vIFR3byBkaWdpdCB5ZWFyXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfVxuXG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIFIoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTtcblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiB1KGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIFEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gcShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiBMKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiB3KGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIEkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIEQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiBFKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gZShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiBjKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gaShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiBiKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiBCKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIEsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiBrKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gWChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24geChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIE8oZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIHooZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIHQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gVChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiB5KGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG5cbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiBoKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gbShkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59O1xudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59O1xudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBvcHRpb25zKTtcbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIG9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9fbGliL2RlZmF1bHRMb2NhbGUvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcblxuLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuXG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgbG9jYWxlID0gKF9yZWYgPSAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX29wdGlvbnMkbG9jYWxlICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRsb2NhbGUgOiBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiBkZWZhdWx0TG9jYWxlO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmMiA9IChfcmVmMyA9IChfcmVmNCA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTIub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMiRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUyJG9wdGkuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmNCAhPT0gdm9pZCAwID8gX3JlZjQgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmNSA9IChfcmVmNiA9IChfcmVmNyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9IF9vcHRpb25zJGxvY2FsZTMub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlMyRvcHRpID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUzJG9wdGkud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNyAhPT0gdm9pZCAwID8gX3JlZjcgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY2ICE9PSB2b2lkIDAgPyBfcmVmNiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsNC53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY1ICE9PSB2b2lkIDAgPyBfcmVmNSA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICBpZiAoIShvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuICBpZiAoIW1hdGNoZWQpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgcmV0dXJuIG1hdGNoZWRbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNBZnRlclxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBhZnRlciB0aGUgb3RoZXIgb25lIHRvIHJldHVybiB0cnVlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBhZnRlciAxMSBGZWJydWFyeSAxOTg3P1xuICogY29uc3QgcmVzdWx0ID0gaXNBZnRlcihuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0FmdGVyKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHRvRGF0ZShkaXJ0eURhdGVUb0NvbXBhcmUpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgPiBkYXRlVG9Db21wYXJlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7XG4gICAgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nO1xuXG4gIC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7XG5cbiAgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7XG4gIGNvbnRlbnRCb3gsXG4gIGFkZENhdGVnb3J5QnRuLFxuICBzZWxlY3RUb0RvQnRuLFxuICBhZ3JlZUJ0bixcbiAgYWRkQnRuLFxuICBjYXRlZ29yeUZvcm0sXG4gIGNhbmNlbENhdGVnb3J5QnRuLFxuICB0b0RvRm9ybSxcbiAgY2FuY2VsVG9Eb0J0bixcbiAgYWRkVG9Eb0J0bixcbiAgZWRpdFRvRG9CdG4sXG4gIGNhdGVnb3J5QnRuLFxuICBkdWVEYXRlQnRuLFxuICBwcmlvcml0eUJ0bixcbiAgc2lkZU5hdixcbn0gZnJvbSBcIi4vcXVlcnlTZWxlY3RvcnNcIjtcbmltcG9ydCB7XG4gIHNlbGVjdEFkZFR5cGUsXG4gIHNob3dDYXRNZXNzYWdlLFxuICBkaXNwbGF5Q2F0ZWdvcnlXYXJuaW5nLFxuICBjbG9zZVRvRG9XYXJuaW5nLFxuICBjbG9zZVNlbGVjdGlvbkJveCxcbiAgbmV3Q2F0ZWdvcnlGb3JtLFxuICBoaWRlQ2F0ZWdvcnlGb3JtLFxuICByZXBsYWNlQ2F0ZWdvcnlTZWN0aW9ucyxcbiAgY3JlYXRlQ2F0ZWdvcnlTZWN0aW9uLFxuICB0b0RvRm9ybURpc3BsYXksXG4gIGhpZGVUb0RvRm9ybSxcbiAgZGlzcGxheVRvRG9FbnRyeSxcbiAgcmVwbGFjZVRvRG9JdGVtcyxcbiAgc2hvd0Zvcm1XaXRoSW5mbyxcbiAgc2hvd0NvbXBsZXRlZFRhc2tzLFxuICByZXBsYWNlQ29tcGxldGVkUm93cyxcbiAgc2hvd0J5RHVlRGF0ZSxcbiAgcmVwbGFjZUR1ZURhdGVSb3dzLFxuICBzaG93QnlQcmlvcml0eSxcbiAgcmVwbGFjZVByaW9yaXR5Um93cyxcbn0gZnJvbSBcIi4vdmlld1wiO1xuaW1wb3J0IHtcbiAgY2F0ZWdvcmllc0FycmF5LFxuICBuZXdDYXRlZ29yeUFycmF5LFxuICBuZXdUb0RvSXRlbSxcbiAgZWRpdFRvRG9JblN0b3JhZ2UsXG4gIHJlbW92ZVRvRG9Gcm9tQ2F0ZWdvcnksXG4gIHJlbW92ZUNhdGVnb3J5LFxuICBjaGFuZ2VDb21wbGV0ZVN0YXR1cyxcbiAgc29ydEJ5Q3JlYXRpb25EYXRlLFxuICBzb3J0QnlEdWVEYXRlLFxuICBzb3J0QnlQcmlvcml0eSxcbn0gZnJvbSBcIi4vbW9kZWxcIjtcbmltcG9ydCB7XG4gIGZpbmRQYXN0RHVlLFxuICBmb3JtYXREYXRlc0NhdGVnb3J5LFxuICBmb3JtYXREYXRlc0R1ZVZpZXcsXG4gIGZvcm1hdERhdGVzUHJpb3JpdHksXG59IGZyb20gXCIuL2RhdGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBidWlsZEZyb21TdG9yYWdlKCkge1xuICBpZiAoY2F0ZWdvcmllc0FycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgIHNob3dDYXRNZXNzYWdlKCk7XG4gIH0gZWxzZSB7XG4gICAgcmVwbGFjZUNhdGVnb3J5U2VjdGlvbnMoKTtcbiAgICBjcmVhdGVDYXRlZ29yeVNlY3Rpb24oKTtcbiAgICBzb3J0QnlDcmVhdGlvbkRhdGUoKTtcbiAgICByZXBsYWNlVG9Eb0l0ZW1zKCk7XG4gICAgZGlzcGxheVRvRG9FbnRyeSgpO1xuICAgIGZpbmRQYXN0RHVlKCk7XG4gICAgZm9ybWF0RGF0ZXNDYXRlZ29yeSgpO1xuICAgIHJlcGxhY2VDb21wbGV0ZWRSb3dzKCk7XG4gICAgc2hvd0NvbXBsZXRlZFRhc2tzKCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEFjdGlvbkZvcm0oKSB7XG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgc2VsZWN0QWRkVHlwZSk7XG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIHNlbGVjdEFkZFR5cGUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NhdGVnb3J5Rm9ybSgpIHtcbiAgYWRkQ2F0ZWdvcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIG5ld0NhdGVnb3J5Rm9ybSk7XG5cbiAgYWRkQ2F0ZWdvcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgbmV3Q2F0ZWdvcnlGb3JtKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDYXRlZ29yeVdhcm5pbmcoKSB7XG4gIHNlbGVjdFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2F0ZWdvcmllc0FycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGlzcGxheUNhdGVnb3J5V2FybmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbG9zZVNlbGVjdGlvbkJveCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgc2VsZWN0VG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBpZiAoY2F0ZWdvcmllc0FycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBkaXNwbGF5Q2F0ZWdvcnlXYXJuaW5nKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbG9zZVNlbGVjdGlvbkJveCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoaWRlQ2F0ZWdvcnlXYXJuaW5nKCkge1xuICBhZ3JlZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZnVuY3Rpb24gKCkge1xuICAgIGNsb3NlVG9Eb1dhcm5pbmcoKTtcbiAgfSk7XG5cbiAgYWdyZWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgY2xvc2VUb0RvV2FybmluZygpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxDYXRlZ29yeUZvcm0oKSB7XG4gIGNhbmNlbENhdGVnb3J5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBoaWRlQ2F0ZWdvcnlGb3JtKTtcblxuICBjYW5jZWxDYXRlZ29yeUJ0bi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBoaWRlQ2F0ZWdvcnlGb3JtKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbFRvRG8oKSB7XG4gIGNhbmNlbFRvRG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhpZGVUb0RvRm9ybSk7XG5cbiAgY2FuY2VsVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBoaWRlVG9Eb0Zvcm0oKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0TmV3Q2F0ZWdvcnkoKSB7XG4gIGNhdGVnb3J5Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5ld0NhdGVnb3J5QXJyYXkoKTtcbiAgICBoaWRlQ2F0ZWdvcnlGb3JtKCk7XG4gICAgcmVwbGFjZUNhdGVnb3J5U2VjdGlvbnMoKTtcbiAgICBjcmVhdGVDYXRlZ29yeVNlY3Rpb24oKTtcbiAgICByZXBsYWNlVG9Eb0l0ZW1zKCk7XG4gICAgZGlzcGxheVRvRG9FbnRyeSgpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN1Ym1pdFRvRG8oKSB7XG4gIHRvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gYWRkVG9Eb0J0bikge1xuICAgICAgbmV3VG9Eb0l0ZW0oKTtcbiAgICAgIHNvcnRCeUNyZWF0aW9uRGF0ZSgpO1xuICAgICAgaGlkZVRvRG9Gb3JtKCk7XG4gICAgICByZXBsYWNlVG9Eb0l0ZW1zKCk7XG4gICAgICBkaXNwbGF5VG9Eb0VudHJ5KCk7XG4gICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgZm9ybWF0RGF0ZXNDYXRlZ29yeSgpO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldCA9PT0gZWRpdFRvRG9CdG4pIHtcbiAgICAgIGVkaXRUb0RvSW5TdG9yYWdlKCk7XG4gICAgICBzb3J0QnlDcmVhdGlvbkRhdGUoKTtcbiAgICAgIGhpZGVUb0RvRm9ybSgpO1xuICAgICAgcmVwbGFjZVRvRG9JdGVtcygpO1xuICAgICAgZGlzcGxheVRvRG9FbnRyeSgpO1xuICAgICAgZmluZFBhc3REdWUoKTtcbiAgICAgIGZvcm1hdERhdGVzQ2F0ZWdvcnkoKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRvRG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgZS50YXJnZXQgPT09IGFkZFRvRG9CdG4pIHtcbiAgICAgIG5ld1RvRG9JdGVtKCk7XG4gICAgICBzb3J0QnlDcmVhdGlvbkRhdGUoKTtcbiAgICAgIGhpZGVUb0RvRm9ybSgpO1xuICAgICAgcmVwbGFjZVRvRG9JdGVtcygpO1xuICAgICAgZGlzcGxheVRvRG9FbnRyeSgpO1xuICAgICAgZmluZFBhc3REdWUoKTtcbiAgICAgIGZvcm1hdERhdGVzQ2F0ZWdvcnkoKTtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBlLnRhcmdldCA9PT0gZWRpdFRvRG9CdG4pIHtcbiAgICAgIGVkaXRUb0RvSW5TdG9yYWdlKCk7XG4gICAgICBzb3J0QnlDcmVhdGlvbkRhdGUoKTtcbiAgICAgIGhpZGVUb0RvRm9ybSgpO1xuICAgICAgcmVwbGFjZVRvRG9JdGVtcygpO1xuICAgICAgZGlzcGxheVRvRG9FbnRyeSgpO1xuICAgICAgZmluZFBhc3REdWUoKTtcbiAgICAgIGZvcm1hdERhdGVzQ2F0ZWdvcnkoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUJ5VmlldygpIHtcbiAgc2lkZU5hdi5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xuICAgIC8vIERpc3BsYXkgYnkgQ2F0ZWdvcnlcbiAgICBpZiAoY2F0ZWdvcnlCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2F0LXRhYlwiKSkge1xuICAgICAgc29ydEJ5Q3JlYXRpb25EYXRlKCk7XG4gICAgICByZXBsYWNlVG9Eb0l0ZW1zKCk7XG4gICAgICBkaXNwbGF5VG9Eb0VudHJ5KCk7XG4gICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgZm9ybWF0RGF0ZXNDYXRlZ29yeSgpO1xuICAgIH1cbiAgICAvLyBEaXNwbGF5IGJ5IER1ZSBEYXRlXG4gICAgaWYgKGR1ZURhdGVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGF0ZS10YWJcIikpIHtcbiAgICAgIHNvcnRCeUR1ZURhdGUoKTtcbiAgICAgIHJlcGxhY2VEdWVEYXRlUm93cygpO1xuICAgICAgc2hvd0J5RHVlRGF0ZSgpO1xuICAgICAgZmluZFBhc3REdWUoKTtcbiAgICAgIGZvcm1hdERhdGVzRHVlVmlldygpO1xuICAgIH1cbiAgICAvLyBEaXNwbGF5IGJ5IFByaW9yaXR5XG4gICAgaWYgKHByaW9yaXR5QnRuLmNsYXNzTGlzdC5jb250YWlucyhcInByaW9yaXR5LXRhYlwiKSkge1xuICAgICAgc29ydEJ5UHJpb3JpdHkoKTtcbiAgICAgIHJlcGxhY2VQcmlvcml0eVJvd3MoKTtcbiAgICAgIHNob3dCeVByaW9yaXR5KCk7XG4gICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgZm9ybWF0RGF0ZXNQcmlvcml0eSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QnlWaWV3V2l0aEtleWJvYXJkKCkge1xuICBzaWRlTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgIC8vIERpc3BsYXkgYnkgQ2F0ZWdvcnlcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgY2F0ZWdvcnlCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiY2F0LXRhYlwiKSkge1xuICAgICAgc29ydEJ5Q3JlYXRpb25EYXRlKCk7XG4gICAgICByZXBsYWNlVG9Eb0l0ZW1zKCk7XG4gICAgICBkaXNwbGF5VG9Eb0VudHJ5KCk7XG4gICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgZm9ybWF0RGF0ZXNDYXRlZ29yeSgpO1xuICAgIH1cbiAgICAvLyBEaXNwbGF5IGJ5IER1ZSBEYXRlXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIGR1ZURhdGVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGF0ZS10YWJcIikpIHtcbiAgICAgIHNvcnRCeUR1ZURhdGUoKTtcbiAgICAgIHJlcGxhY2VEdWVEYXRlUm93cygpO1xuICAgICAgc2hvd0J5RHVlRGF0ZSgpO1xuICAgICAgZmluZFBhc3REdWUoKTtcbiAgICAgIGZvcm1hdERhdGVzRHVlVmlldygpO1xuICAgIH1cbiAgICAvLyBEaXNwbGF5IGJ5IFByaW9yaXR5XG4gICAgaWYgKFxuICAgICAgZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiZcbiAgICAgIHByaW9yaXR5QnRuLmNsYXNzTGlzdC5jb250YWlucyhcInByaW9yaXR5LXRhYlwiKVxuICAgICkge1xuICAgICAgc29ydEJ5UHJpb3JpdHkoKTtcbiAgICAgIHJlcGxhY2VQcmlvcml0eVJvd3MoKTtcbiAgICAgIHNob3dCeVByaW9yaXR5KCk7XG4gICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgZm9ybWF0RGF0ZXNQcmlvcml0eSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFdmVudERlbGVnYXRpb24oKSB7XG4gIGNvbnRlbnRCb3guYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vRGlzcGxheSBUbyBEbyBFbnRyeSBGb3JtXG4gICAgY29uc3QgYWRkQnRuID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuY2F0ZWdvcnk7XG4gICAgY29uc3QgYWRkQnRucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNhdGVnb3J5XCIpKTtcbiAgICBhZGRCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gYnV0dG9uKSB7XG4gICAgICAgIHRvRG9Gb3JtRGlzcGxheShhZGRCdG4pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGVsZXRlIFRvIERvIEl0ZW1zXG4gICAgY29uc3QgZGVsZXRlVG9Eb0l0ZW0gPSBldmVudC50YXJnZXQuZGF0YXNldC5pdGVtRGVsZXRlO1xuICAgIGNvbnN0IHRvRG9FbnRyaWVzID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoW1wiW2RhdGEtaXRlbS1kZWxldGVdXCJdKVxuICAgICk7XG4gICAgdG9Eb0VudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGVudHJ5KSB7XG4gICAgICAgIHJlbW92ZVRvRG9Gcm9tQ2F0ZWdvcnkoZGVsZXRlVG9Eb0l0ZW0pO1xuICAgICAgICBzb3J0QnlDcmVhdGlvbkRhdGUoKTtcbiAgICAgICAgcmVwbGFjZVRvRG9JdGVtcygpO1xuICAgICAgICBkaXNwbGF5VG9Eb0VudHJ5KCk7XG4gICAgICAgIGZpbmRQYXN0RHVlKCk7XG4gICAgICAgIGZvcm1hdERhdGVzQ2F0ZWdvcnkoKTtcbiAgICAgICAgcmVwbGFjZUNvbXBsZXRlZFJvd3MoKTtcbiAgICAgICAgc2hvd0NvbXBsZXRlZFRhc2tzKCk7XG5cbiAgICAgICAgaWYgKGR1ZURhdGVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWN0cmwtLWFjdGl2ZVwiKSkge1xuICAgICAgICAgIHNvcnRCeUR1ZURhdGUoKTtcbiAgICAgICAgICByZXBsYWNlRHVlRGF0ZVJvd3MoKTtcbiAgICAgICAgICBzaG93QnlEdWVEYXRlKCk7XG4gICAgICAgICAgZmluZFBhc3REdWUoKTtcbiAgICAgICAgICBmb3JtYXREYXRlc0R1ZVZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHlCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWN0cmwtLWFjdGl2ZVwiKSkge1xuICAgICAgICAgIHNvcnRCeVByaW9yaXR5KCk7XG4gICAgICAgICAgcmVwbGFjZVByaW9yaXR5Um93cygpO1xuICAgICAgICAgIHNob3dCeVByaW9yaXR5KCk7XG4gICAgICAgICAgZmluZFBhc3REdWUoKTtcbiAgICAgICAgICBmb3JtYXREYXRlc1ByaW9yaXR5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERlbGV0ZSBDYXRlZ29yeSB3aXRoIGFueSBhbmQgYWxsIGVudHJpZXNcbiAgICBjb25zdCBkZWxldGVDYXRlZ29yeUluZGV4ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuZGVsZXRlQ2F0SW5kZXg7XG4gICAgY29uc3QgZGVsZXRlQ2F0ZWdvcnlOYW1lID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuZGVsZXRlQ2F0O1xuICAgIGNvbnN0IGRlbGV0ZUNhdEJ0bnMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRlbGV0ZS1jYXRcIilcbiAgICApO1xuICAgIGRlbGV0ZUNhdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBidG4pIHtcbiAgICAgICAgcmVtb3ZlQ2F0ZWdvcnkoZGVsZXRlQ2F0ZWdvcnlJbmRleCwgZGVsZXRlQ2F0ZWdvcnlOYW1lKTtcbiAgICAgICAgcmVwbGFjZUNhdGVnb3J5U2VjdGlvbnMoKTtcbiAgICAgICAgY3JlYXRlQ2F0ZWdvcnlTZWN0aW9uKCk7XG4gICAgICAgIHJlcGxhY2VUb0RvSXRlbXMoKTtcbiAgICAgICAgZGlzcGxheVRvRG9FbnRyeSgpO1xuICAgICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgICBmb3JtYXREYXRlc0NhdGVnb3J5KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEaXNwbGF5IEZvcm0gdG8gZWRpdCBUbyBEbyBlbnRyeVxuICAgIGNvbnN0IGVkaXRJY29uID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuZWRpdCk7XG4gICAgY29uc3QgZWRpdEljb25DYXQgPSBldmVudC50YXJnZXQuZGF0YXNldC5lZGl0Q2F0O1xuICAgIGNvbnN0IGVkaXRCdG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZWRpdFwiKSk7XG4gICAgZWRpdEJ0bnMuZm9yRWFjaCgoZWRpdCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZWRpdCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0eXBlb2YgZWRpdEljb24pO1xuICAgICAgICBzaG93Rm9ybVdpdGhJbmZvKGVkaXRJY29uLCBlZGl0SWNvbkNhdCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlRXZlbnREZWxlZ2F0aW9uV2l0aEtleWJvYXJkKCkge1xuICBjb250ZW50Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIC8vRGlzcGxheSBUbyBEbyBFbnRyeSBGb3JtXG4gICAgY29uc3QgYWRkQnRuID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuY2F0ZWdvcnk7XG4gICAgY29uc3QgYWRkQnRucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWNhdGVnb3J5XCIpKTtcbiAgICBhZGRCdG5zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIGV2ZW50LnRhcmdldCA9PT0gYnV0dG9uKSB7XG4gICAgICAgIHRvRG9Gb3JtRGlzcGxheShhZGRCdG4pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGVsZXRlIFRvIERvIEl0ZW1zXG4gICAgY29uc3QgZGVsZXRlVG9Eb0l0ZW0gPSBldmVudC50YXJnZXQuZGF0YXNldC5pdGVtRGVsZXRlO1xuICAgIGNvbnN0IHRvRG9FbnRyaWVzID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoW1wiW2RhdGEtaXRlbS1kZWxldGVdXCJdKVxuICAgICk7XG4gICAgdG9Eb0VudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiBldmVudC50YXJnZXQgPT09IGVudHJ5KSB7XG4gICAgICAgIHJlbW92ZVRvRG9Gcm9tQ2F0ZWdvcnkoZGVsZXRlVG9Eb0l0ZW0pO1xuICAgICAgICBzb3J0QnlDcmVhdGlvbkRhdGUoKTtcbiAgICAgICAgcmVwbGFjZVRvRG9JdGVtcygpO1xuICAgICAgICBkaXNwbGF5VG9Eb0VudHJ5KCk7XG4gICAgICAgIGZpbmRQYXN0RHVlKCk7XG4gICAgICAgIGZvcm1hdERhdGVzQ2F0ZWdvcnkoKTtcbiAgICAgICAgcmVwbGFjZUNvbXBsZXRlZFJvd3MoKTtcbiAgICAgICAgc2hvd0NvbXBsZXRlZFRhc2tzKCk7XG5cbiAgICAgICAgaWYgKGR1ZURhdGVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWN0cmwtLWFjdGl2ZVwiKSkge1xuICAgICAgICAgIHNvcnRCeUR1ZURhdGUoKTtcbiAgICAgICAgICByZXBsYWNlRHVlRGF0ZVJvd3MoKTtcbiAgICAgICAgICBzaG93QnlEdWVEYXRlKCk7XG4gICAgICAgICAgZmluZFBhc3REdWUoKTtcbiAgICAgICAgICBmb3JtYXREYXRlc0R1ZVZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHlCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWN0cmwtLWFjdGl2ZVwiKSkge1xuICAgICAgICAgIHNvcnRCeVByaW9yaXR5KCk7XG4gICAgICAgICAgcmVwbGFjZVByaW9yaXR5Um93cygpO1xuICAgICAgICAgIHNob3dCeVByaW9yaXR5KCk7XG4gICAgICAgICAgZmluZFBhc3REdWUoKTtcbiAgICAgICAgICBmb3JtYXREYXRlc1ByaW9yaXR5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERlbGV0ZSBDYXRlZ29yeSB3aXRoIGFueSBhbmQgYWxsIGVudHJpZXNcbiAgICBjb25zdCBkZWxldGVDYXRlZ29yeUluZGV4ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuZGVsZXRlQ2F0SW5kZXg7XG4gICAgY29uc3QgZGVsZXRlQ2F0ZWdvcnlOYW1lID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuZGVsZXRlQ2F0O1xuICAgIGNvbnN0IGRlbGV0ZUNhdEJ0bnMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWRlbGV0ZS1jYXRcIilcbiAgICApO1xuICAgIGRlbGV0ZUNhdEJ0bnMuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgZXZlbnQudGFyZ2V0ID09PSBidG4pIHtcbiAgICAgICAgcmVtb3ZlQ2F0ZWdvcnkoZGVsZXRlQ2F0ZWdvcnlJbmRleCwgZGVsZXRlQ2F0ZWdvcnlOYW1lKTtcbiAgICAgICAgcmVwbGFjZUNhdGVnb3J5U2VjdGlvbnMoKTtcbiAgICAgICAgY3JlYXRlQ2F0ZWdvcnlTZWN0aW9uKCk7XG4gICAgICAgIHJlcGxhY2VUb0RvSXRlbXMoKTtcbiAgICAgICAgZGlzcGxheVRvRG9FbnRyeSgpO1xuICAgICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgICBmb3JtYXREYXRlc0NhdGVnb3J5KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEaXNwbGF5IEZvcm0gdG8gZWRpdCBUbyBEbyBlbnRyeVxuICAgIGNvbnN0IGVkaXRJY29uID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmRhdGFzZXQuZWRpdCk7XG4gICAgY29uc3QgZWRpdEJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1lZGl0XCIpKTtcbiAgICBlZGl0QnRucy5mb3JFYWNoKChlZGl0KSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgZXZlbnQudGFyZ2V0ID09PSBlZGl0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBlZGl0SWNvbik7XG4gICAgICAgIHNob3dGb3JtV2l0aEluZm8oZWRpdEljb24pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtDb21wbGV0ZSgpIHtcbiAgY29udGVudEJveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRhc2tJbmRleCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmNoZWNrO1xuXG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGFza0luZGV4KSBjb25zb2xlLmxvZyh0YXNrSW5kZXgpO1xuICAgIGNoYW5nZUNvbXBsZXRlU3RhdHVzKHRhc2tJbmRleCk7XG4gICAgcmVwbGFjZUNvbXBsZXRlZFJvd3MoKTtcbiAgICBzaG93Q29tcGxldGVkVGFza3MoKTtcbiAgICByZXBsYWNlVG9Eb0l0ZW1zKCk7XG4gICAgZGlzcGxheVRvRG9FbnRyeSgpO1xuICAgIGZpbmRQYXN0RHVlKCk7XG4gICAgZm9ybWF0RGF0ZXNDYXRlZ29yeSgpO1xuXG4gICAgaWYgKGR1ZURhdGVCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWN0cmwtLWFjdGl2ZVwiKSkge1xuICAgICAgc29ydEJ5RHVlRGF0ZSgpO1xuICAgICAgcmVwbGFjZUR1ZURhdGVSb3dzKCk7XG4gICAgICBzaG93QnlEdWVEYXRlKCk7XG4gICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgZm9ybWF0RGF0ZXNEdWVWaWV3KCk7XG4gICAgfVxuICAgIGlmIChwcmlvcml0eUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tY3RybC0tYWN0aXZlXCIpKSB7XG4gICAgICBzb3J0QnlQcmlvcml0eSgpO1xuICAgICAgcmVwbGFjZVByaW9yaXR5Um93cygpO1xuICAgICAgc2hvd0J5UHJpb3JpdHkoKTtcbiAgICAgIGZpbmRQYXN0RHVlKCk7XG4gICAgICBmb3JtYXREYXRlc1ByaW9yaXR5KCk7XG4gICAgfVxuICB9KTtcbn1cbiIsImltcG9ydCB7IGZvcm1hdCwgcGFyc2VJU08sIGlzQWZ0ZXIgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IGRhdGVUaW1lUGlja2VyLCBjcmVhdGlvblRpbWVQaWNrZXIgfSBmcm9tIFwiLi9xdWVyeVNlbGVjdG9yc1wiO1xuaW1wb3J0IHsgdG9Eb0l0ZW1zQXJyYXkgfSBmcm9tIFwiLi9tb2RlbFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZXNDYXRlZ29yeSgpIHtcbiAgY29uc3QgZHVlRGF0ZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3ctZHVlLWRhdGVcIik7XG4gIGR1ZURhdGVEaXNwbGF5LmZvckVhY2goKGRhdGUpID0+IHtcbiAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXQocGFyc2VJU08oZGF0ZS50ZXh0Q29udGVudCwgMCksIFwiUFBwXCIpO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWQ7XG4gICAgZGF0ZS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVzRHVlVmlldygpIHtcbiAgY29uc3QgZHVlRGF0ZURpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3ctZGF0ZS1kdWVcIik7XG5cbiAgZHVlRGF0ZURpc3BsYXkuZm9yRWFjaCgoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdChwYXJzZUlTTyhkYXRlLnRleHRDb250ZW50LCAwKSwgXCJQUHBcIik7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdHRlZDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlc1ByaW9yaXR5KCkge1xuICBjb25zdCBkdWVEYXRlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvdy1kYXRlLXByaW9yaXR5XCIpO1xuXG4gIGR1ZURhdGVEaXNwbGF5LmZvckVhY2goKGRhdGUpID0+IHtcbiAgICBjb25zdCBmb3JtYXR0ZWQgPSBmb3JtYXQocGFyc2VJU08oZGF0ZS50ZXh0Q29udGVudCwgMCksIFwiUFBwXCIpO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBmb3JtYXR0ZWQ7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGltaXREYXRlUGlja2VyKCkge1xuICBsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICBsZXQgZGF5ID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICBsZXQgbW9udGggPSB0b2RheS5nZXRNb250aCgpICsgMTtcbiAgbGV0IHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICBsZXQgaG91ciA9IHRvZGF5LmdldEhvdXJzKCk7XG4gIGxldCBtaW51dGUgPSB0b2RheS5nZXRNaW51dGVzKCk7XG5cbiAgaWYgKGRheSA8IDEwKSB7XG4gICAgZGF5ID0gXCIwXCIgKyBkYXk7XG4gIH1cbiAgaWYgKG1vbnRoIDwgMTApIHtcbiAgICBtb250aCA9IFwiMFwiICsgbW9udGg7XG4gIH1cbiAgaWYgKGhvdXIgPCAxMCkge1xuICAgIGhvdXIgPSBcIjBcIiArIGhvdXI7XG4gIH1cbiAgaWYgKG1pbnV0ZSA8IDEwKSB7XG4gICAgbWludXRlID0gXCIwXCIgKyBtaW51dGU7XG4gIH1cblxuICBjb25zdCBtaW5EYXRlID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheSArIFwiVFwiICsgaG91ciArIFwiOlwiICsgbWludXRlO1xuICBjb25zb2xlLmxvZyhtaW5EYXRlKTtcblxuICBkYXRlVGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgbWluRGF0ZSk7XG4gIGNyZWF0aW9uVGltZVBpY2tlci5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBtaW5EYXRlKTtcblxuICByZXR1cm4gbWluRGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRQYXN0RHVlKCkge1xuICBjb25zdCBjdXJyZW50RGF0ZVRpbWUgPSBsaW1pdERhdGVQaWNrZXIoKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9JdGVtc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza0R1ZSA9IHRvRG9JdGVtc0FycmF5W2ldLmR1ZURhdGU7XG5cbiAgICBjb25zdCBjb21wYXJpc29uID0gaXNBZnRlcihcbiAgICAgIHBhcnNlSVNPKGN1cnJlbnREYXRlVGltZSwgMCksXG4gICAgICBwYXJzZUlTTyh0YXNrRHVlLCAwKVxuICAgICk7XG4gICAgY29uc29sZS5sb2coY29tcGFyaXNvbik7XG5cbiAgICBjb25zdCBkdWVEYXRlRGlzcGxheSA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNob3ctZHVlLWRhdGVcIilcbiAgICApO1xuXG4gICAgZHVlRGF0ZURpc3BsYXkuZm9yRWFjaCgoZGF0ZSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpbmRleCA9PT0gdG9Eb0l0ZW1zQXJyYXkuaW5kZXhPZih0b0RvSXRlbXNBcnJheVtpXSkpIHtcbiAgICAgICAgaWYgKGNvbXBhcmlzb24gPT09IHRydWUpIHtcbiAgICAgICAgICBkYXRlLnN0eWxlLmNvbG9yID0gXCIjYmMyNzAyXCI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB0YWJDb250cm9scyBmcm9tIFwiLi90YWJDb250cm9sXCI7XG5pbXBvcnQge1xuICBidWlsZEZyb21TdG9yYWdlLFxuICBzZWxlY3RBY3Rpb25Gb3JtLFxuICBzaG93Q2F0ZWdvcnlGb3JtLFxuICBzaG93Q2F0ZWdvcnlXYXJuaW5nLFxuICBoaWRlQ2F0ZWdvcnlXYXJuaW5nLFxuICBjYW5jZWxDYXRlZ29yeUZvcm0sXG4gIHN1Ym1pdE5ld0NhdGVnb3J5LFxuICBzdWJtaXRUb0RvLFxuICBjYW5jZWxUb0RvLFxuICBkaXNwbGF5QnlWaWV3LFxuICBkaXNwbGF5QnlWaWV3V2l0aEtleWJvYXJkLFxuICBoYW5kbGVFdmVudERlbGVnYXRpb24sXG4gIGhhbmRsZUV2ZW50RGVsZWdhdGlvbldpdGhLZXlib2FyZCxcbiAgbWFya0NvbXBsZXRlLFxufSBmcm9tIFwiLi9jb250cm9sbGVyXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgdGFiQ29udHJvbHMoKTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhaW5lclwiKS5mb3JFYWNoKCh0YWJCdG4pID0+IHtcbiAgICB0YWJCdG4ucXVlcnlTZWxlY3RvcihcIi5idG4tY3RybFwiKS5jbGljaygpO1xuICB9KTtcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRlbnQtYm94XCIpLmZvckVhY2goKHRhYkNvbnRlbnQpID0+IHtcbiAgICB0YWJDb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFiLWNvbnRlbnRcIikuY2xpY2soKTtcbiAgfSk7XG5cbiAgYnVpbGRGcm9tU3RvcmFnZSgpO1xuICBzZWxlY3RBY3Rpb25Gb3JtKCk7XG4gIHNob3dDYXRlZ29yeUZvcm0oKTtcbiAgc2hvd0NhdGVnb3J5V2FybmluZygpO1xuICBoaWRlQ2F0ZWdvcnlXYXJuaW5nKCk7XG4gIGNhbmNlbENhdGVnb3J5Rm9ybSgpO1xuICBzdWJtaXROZXdDYXRlZ29yeSgpO1xuICBzdWJtaXRUb0RvKCk7XG4gIGNhbmNlbFRvRG8oKTtcbiAgZGlzcGxheUJ5VmlldygpO1xuICBkaXNwbGF5QnlWaWV3V2l0aEtleWJvYXJkKCk7XG4gIGhhbmRsZUV2ZW50RGVsZWdhdGlvbigpO1xuICBoYW5kbGVFdmVudERlbGVnYXRpb25XaXRoS2V5Ym9hcmQoKTtcbiAgbWFya0NvbXBsZXRlKCk7XG59KTtcbiIsImltcG9ydCB7XG4gIGNhdGVnb3J5SW5wdXQsXG4gIHRvRG9UaXRsZSxcbiAgdG9Eb1ByaW9yaXR5LFxuICB0b0RvRGVzY3JpcHRpb24sXG4gIHRvRG9EdWVEYXRlLFxuICBjcmVhdGlvblRpbWVQaWNrZXIsXG4gIGNhdGVnb3J5TmFtZSxcbn0gZnJvbSBcIi4vcXVlcnlTZWxlY3RvcnNcIjtcblxubGV0IGNhdGVnb3JpZXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5jYXRlZ29yaWVzIHx8IFwiW11cIik7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhdGVnb3JpZXNcIiwgSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcykpO1xuZXhwb3J0IGxldCBjYXRlZ29yaWVzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKSk7XG5cbmxldCB0b0RvSXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS50b0RvSXRlbXMgfHwgXCJbXVwiKTtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb0l0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9JdGVtcykpO1xuZXhwb3J0IGxldCB0b0RvSXRlbXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvSXRlbXNcIikpO1xuXG5leHBvcnQgZnVuY3Rpb24gbmV3Q2F0ZWdvcnlBcnJheSgpIHtcbiAgY29uc3QgbmV3Q2F0ZWdvcnkgPSBjYXRlZ29yeUlucHV0LnZhbHVlLnRyaW0oKTtcblxuICBpZiAoXG4gICAgY2F0ZWdvcmllcy5zb21lKFxuICAgICAgKGNhdGVnb3J5KSA9PiBjYXRlZ29yeS50b0xvd2VyQ2FzZSgpID09PSBuZXdDYXRlZ29yeS50b0xvd2VyQ2FzZSgpXG4gICAgKVxuICApIHtcbiAgICBhbGVydChcIkR1cGxpY2F0ZSBjYXRlZ29yeS4gUGxlYXNlIGNob29zZSBhIG5ldyBjYXRlZ29yeSB0aXRsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBsZXQgYWRkQ2F0ZWdvcnkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKSk7XG4gICAgYWRkQ2F0ZWdvcnkucHVzaChuZXdDYXRlZ29yeSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXRlZ29yaWVzXCIsIEpTT04uc3RyaW5naWZ5KGFkZENhdGVnb3J5KSk7XG4gICAgY2F0ZWdvcmllc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIikpO1xuICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXNBcnJheSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5ld1RvRG9JdGVtKCkge1xuICBjb25zdCBjYXRlZ29yeSA9IGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudDtcbiAgY29uc3QgdGl0bGUgPSB0b0RvVGl0bGUudmFsdWUudHJpbSgpO1xuICBjb25zdCBwcmlvcml0eSA9IHRvRG9Qcmlvcml0eS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gdG9Eb0Rlc2NyaXB0aW9uLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgZHVlRGF0ZSA9IHRvRG9EdWVEYXRlLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgY3JlYXRpb25UaW1lID0gY3JlYXRpb25UaW1lUGlja2VyLnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgY29tcGxldGVkVGFzayA9IGZhbHNlO1xuXG4gIGNvbnN0IHRvRG9JdGVtID0ge1xuICAgIGNhdGVnb3J5LFxuICAgIHRpdGxlLFxuICAgIHByaW9yaXR5LFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGR1ZURhdGUsXG4gICAgY3JlYXRpb25UaW1lLFxuICAgIGNvbXBsZXRlZFRhc2ssXG4gIH07XG4gIGxldCBhZGRUb0RvSXRlbSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvSXRlbXNcIikpO1xuICBhZGRUb0RvSXRlbS5wdXNoKHRvRG9JdGVtKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvSXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoYWRkVG9Eb0l0ZW0pKTtcbiAgdG9Eb0l0ZW1zQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0l0ZW1zXCIpKTtcbiAgY29uc29sZS5sb2codG9Eb0l0ZW1zQXJyYXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVG9Eb0Zyb21DYXRlZ29yeShyZW1vdmVkSXRlbSkge1xuICBpZiAocmVtb3ZlZEl0ZW0pIHtcbiAgICBsZXQgY29uZmlybVJlbW92ZSA9IGNvbmZpcm0oXG4gICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBlbnRyeT8gVGhpcyBjYW5ub3QgYmUgdW5kb25lXCJcbiAgICApO1xuXG4gICAgaWYgKGNvbmZpcm1SZW1vdmUpIHtcbiAgICAgIGxldCBhcnJheUNvdW50ID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgIGlmIChhcnJheUNvdW50KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlDb3VudDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcblxuICAgICAgICAgIGlmIChrZXkgPT09IFwidG9Eb0l0ZW1zXCIpIHtcbiAgICAgICAgICAgIGxldCB1cGRhdGVBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvSXRlbXNcIikpO1xuXG4gICAgICAgICAgICB1cGRhdGVBcnJheS5zcGxpY2UocmVtb3ZlZEl0ZW0sIDEpO1xuXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9JdGVtc1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVBcnJheSkpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1zQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0l0ZW1zXCIpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvRG9JdGVtc0FycmF5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUb0RvSW5TdG9yYWdlKGVudHJ5SW5kZXgpIHtcbiAgbGV0IGFycmF5Q291bnQgPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICBpZiAoYXJyYXlDb3VudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlDb3VudDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgIGNvbnNvbGUubG9nKGtleSk7XG5cbiAgICAgIGlmIChrZXkgPT09IFwidG9Eb0l0ZW1zXCIpIHtcbiAgICAgICAgbGV0IHVwZGF0ZUFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9JdGVtc1wiKSk7XG5cbiAgICAgICAgdXBkYXRlQXJyYXkuYXQoZW50cnlJbmRleCkuY2F0ZWdvcnkgPSBjYXRlZ29yeU5hbWUudGV4dENvbnRlbnQ7XG4gICAgICAgIHVwZGF0ZUFycmF5LmF0KGVudHJ5SW5kZXgpLnRpdGxlID0gdG9Eb1RpdGxlLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgdXBkYXRlQXJyYXkuYXQoZW50cnlJbmRleCkucHJpb3JpdHkgPSB0b0RvUHJpb3JpdHkudmFsdWUudHJpbSgpO1xuICAgICAgICB1cGRhdGVBcnJheS5hdChlbnRyeUluZGV4KS5kZXNjcmlwdGlvbiA9IHRvRG9EZXNjcmlwdGlvbi52YWx1ZS50cmltKCk7XG4gICAgICAgIHVwZGF0ZUFycmF5LmF0KGVudHJ5SW5kZXgpLmR1ZURhdGUgPSB0b0RvRHVlRGF0ZS52YWx1ZS50cmltKCk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvSXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkodXBkYXRlQXJyYXkpKTtcbiAgICAgICAgdG9Eb0l0ZW1zQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0l0ZW1zXCIpKTtcbiAgICAgICAgY29uc29sZS5sb2codG9Eb0l0ZW1zQXJyYXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2F0ZWdvcnkocmVtb3ZlZEluZGV4LCByZW1vdmVkQ2F0TmFtZSkge1xuICBpZiAocmVtb3ZlZENhdE5hbWUpIHtcbiAgICBjb25zb2xlLmxvZyhyZW1vdmVkSW5kZXgpO1xuICAgIGNvbnNvbGUubG9nKHJlbW92ZWRDYXROYW1lKTtcbiAgICBsZXQgY29uZmlybVJlbW92ZUNhdCA9IGNvbmZpcm0oXG4gICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBjYXRlZ29yeSB3aXRoIGFsbCBvZiBpdHMgZW50cmllcz8gVGhpcyBjYW5ub3QgYmUgdW5kb25lXCJcbiAgICApO1xuXG4gICAgaWYgKGNvbmZpcm1SZW1vdmVDYXQpIHtcbiAgICAgIGxldCBlZGl0VG9Eb0l0ZW1zQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0l0ZW1zXCIpKTtcbiAgICAgIGNvbnN0IGRlbGV0ZWRFbnRyaWVzQnlDYXROYW1lID0gZWRpdFRvRG9JdGVtc0FycmF5LmZpbHRlcihcbiAgICAgICAgKGVudHJ5KSA9PiBlbnRyeS5jYXRlZ29yeSAhPT0gcmVtb3ZlZENhdE5hbWVcbiAgICAgICk7XG5cbiAgICAgIGVkaXRUb0RvSXRlbXNBcnJheSA9IGRlbGV0ZWRFbnRyaWVzQnlDYXROYW1lO1xuXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9JdGVtc1wiLCBKU09OLnN0cmluZ2lmeShlZGl0VG9Eb0l0ZW1zQXJyYXkpKTtcbiAgICAgIHRvRG9JdGVtc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9JdGVtc1wiKSk7XG4gICAgICBjb25zb2xlLmxvZyh0b0RvSXRlbXNBcnJheSk7XG5cbiAgICAgIGxldCBhcnJheUNvdW50ID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgIGlmIChhcnJheUNvdW50KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlDb3VudDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcblxuICAgICAgICAgIGlmIChrZXkgPT09IFwiY2F0ZWdvcmllc1wiKSB7XG4gICAgICAgICAgICBsZXQgdXBkYXRlQ2F0ZWdvcmllc0FycmF5ID0gSlNPTi5wYXJzZShcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB1cGRhdGVDYXRlZ29yaWVzQXJyYXkuc3BsaWNlKHJlbW92ZWRDYXROYW1lLCAxKTtcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgIFwiY2F0ZWdvcmllc1wiLFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh1cGRhdGVDYXRlZ29yaWVzQXJyYXkpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY2F0ZWdvcmllc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY2F0ZWdvcmllc0FycmF5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUNvbXBsZXRlU3RhdHVzKHRhc2tJbmRleCkge1xuICBsZXQgY2hlY2tDb21wbGV0ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvSXRlbXNcIikpO1xuXG4gIGlmIChjaGVja0NvbXBsZXRlLmF0KHRhc2tJbmRleCkpIHtcbiAgICBpZiAoY2hlY2tDb21wbGV0ZVt0YXNrSW5kZXhdLmNvbXBsZXRlZFRhc2sgPT09IGZhbHNlKSB7XG4gICAgICBjaGVja0NvbXBsZXRlW3Rhc2tJbmRleF0uY29tcGxldGVkVGFzayA9IHRydWU7XG5cbiAgICAgIGxldCBhcnJheUNvdW50ID0gbG9jYWxTdG9yYWdlLmxlbmd0aDtcbiAgICAgIGlmIChhcnJheUNvdW50KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXlDb3VudDsgaSsrKSB7XG4gICAgICAgICAgbGV0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgICAgY29uc29sZS5sb2coa2V5KTtcblxuICAgICAgICAgIGlmIChrZXkgPT09IFwidG9Eb0l0ZW1zXCIpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb0l0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KGNoZWNrQ29tcGxldGUpKTtcbiAgICAgICAgICAgIHRvRG9JdGVtc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9JdGVtc1wiKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b0RvSXRlbXNBcnJheSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB1bmNoZWNrQ29tcGxldGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0l0ZW1zXCIpKTtcblxuICAgICAgdW5jaGVja0NvbXBsZXRlW3Rhc2tJbmRleF0uY29tcGxldGVkVGFzayA9PT0gdHJ1ZTtcbiAgICAgIHVuY2hlY2tDb21wbGV0ZVt0YXNrSW5kZXhdLmNvbXBsZXRlZFRhc2sgPSBmYWxzZTtcblxuICAgICAgbGV0IGFycmF5Q291bnQgPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICAgICAgaWYgKGFycmF5Q291bnQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUNvdW50OyBpKyspIHtcbiAgICAgICAgICBsZXQga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuXG4gICAgICAgICAgaWYgKGtleSA9PT0gXCJ0b0RvSXRlbXNcIikge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvSXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkodW5jaGVja0NvbXBsZXRlKSk7XG4gICAgICAgICAgICB0b0RvSXRlbXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvSXRlbXNcIikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9Eb0l0ZW1zQXJyYXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydEJ5Q3JlYXRpb25EYXRlKCkge1xuICB0b0RvSXRlbXNBcnJheS5zb3J0KFxuICAgIChkYXRlMSwgZGF0ZTIpID0+XG4gICAgICBEYXRlLnBhcnNlKGRhdGUxLmNyZWF0aW9uVGltZSkgLSBEYXRlLnBhcnNlKGRhdGUyLmNyZWF0aW9uVGltZSlcbiAgKTtcblxuICBjb25zb2xlLmxvZyh0b0RvSXRlbXNBcnJheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0QnlEdWVEYXRlKCkge1xuICB0b0RvSXRlbXNBcnJheS5zb3J0KFxuICAgIChkYXRlMSwgZGF0ZTIpID0+IERhdGUucGFyc2UoZGF0ZTEuZHVlRGF0ZSkgLSBEYXRlLnBhcnNlKGRhdGUyLmR1ZURhdGUpXG4gICk7XG5cbiAgY29uc29sZS5sb2codG9Eb0l0ZW1zQXJyYXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc29ydEJ5UHJpb3JpdHkoKSB7XG4gIGNvbnN0IGltcG9ydGFuY2UgPSB7XG4gICAgbG93OiAzLFxuICAgIG1lZGl1bTogMixcbiAgICBoaWdoOiAxLFxuICB9O1xuXG4gIHRvRG9JdGVtc0FycmF5LnNvcnQoXG4gICAgKGEsIGIpID0+IGltcG9ydGFuY2VbYS5wcmlvcml0eV0gLSBpbXBvcnRhbmNlW2IucHJpb3JpdHldXG4gICk7XG5cbiAgY29uc29sZS5sb2codG9Eb0l0ZW1zQXJyYXkpO1xufVxuIiwiZXhwb3J0IGNvbnN0IGNvbnRlbnRCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm94XCIpO1xuZXhwb3J0IGNvbnN0IHNlbGVjdEFkZFR5cGVEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIi5zZWxlY3QtZm9ybS1jb250YWluZXJcIlxuKTtcbmV4cG9ydCBjb25zdCBhZGRDYXRlZ29yeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWNhdGVnb3J5XCIpO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNlbGVjdC10by1kby1idG5cIik7XG5leHBvcnQgY29uc3QgY2F0ZWdvcnlXYXJuaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIuY3JlYXRlLWNhdC13YXJuaW5nLWRpdlwiXG4pO1xuZXhwb3J0IGNvbnN0IGFncmVlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZ3JlZS1idG5cIik7XG5leHBvcnQgY29uc3QgYWRkQ2F0ZWdvcnlNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1jYXQtbXNnXCIpO1xuZXhwb3J0IGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hvdy1mb3JtLWJ0blwiKTtcbmV4cG9ydCBjb25zdCByZXR1cm5Ub0NhdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0LXRhYlwiKTtcbmV4cG9ydCBjb25zdCBjYXRlZ29yeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1mb3ItdGFiPSdjYXRlZ29yeSddXCIpO1xuZXhwb3J0IGNvbnN0IGR1ZURhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZm9yLXRhYj0nZHVlLWRhdGUnXVwiKTtcbmV4cG9ydCBjb25zdCBwcmlvcml0eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1mb3ItdGFiPSdwcmlvcml0eSddXCIpO1xuZXhwb3J0IGNvbnN0IGNhdGVnb3J5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ieS1jYXRlZ29yeVwiKTtcbmV4cG9ydCBjb25zdCBzaWRlTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlLW5hdlwiKTtcbmV4cG9ydCBjb25zdCBjYW5jZWxDYXRlZ29yeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWNhdGVnb3J5XCIpO1xuZXhwb3J0IGNvbnN0IGNhdGVnb3J5Rm9ybUJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0LWZvcm0tY29udGFpbmVyXCIpO1xuZXhwb3J0IGNvbnN0IGNhdGVnb3J5Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2F0ZWdvcnktZm9ybVwiKTtcbmV4cG9ydCBjb25zdCBjYXRlZ29yeUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXRlZ29yeVwiKTtcbmV4cG9ydCBjb25zdCBjYXRlZ29yeVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdC1zZWN0aW9uXCIpO1xuZXhwb3J0IGNvbnN0IHRvRG9Gb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWRpdlwiKTtcbmV4cG9ydCBjb25zdCB0b0RvRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcbmV4cG9ydCBjb25zdCBjYW5jZWxUb0RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtdG8tZG9cIik7XG5leHBvcnQgY29uc3QgY2F0ZWdvcnlOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXRlZ29yeS1uYW1lXCIpO1xuZXhwb3J0IGNvbnN0IHRvRG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGl0bGVcIik7XG5leHBvcnQgY29uc3QgdG9Eb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXByaW9yaXR5XCIpO1xuZXhwb3J0IGNvbnN0IHRvRG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XG5leHBvcnQgY29uc3QgdG9Eb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1ZS1kYXRlXCIpO1xuZXhwb3J0IGNvbnN0IGRhdGVUaW1lUGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCJpbnB1dFt0eXBlPSdkYXRldGltZS1sb2NhbCddXCJcbik7XG5leHBvcnQgY29uc3QgY3JlYXRpb25UaW1lUGlja2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGlvbi1kYXRlXCIpO1xuZXhwb3J0IGNvbnN0IGFkZFRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZm9ybS1hZGRdXCIpO1xuZXhwb3J0IGNvbnN0IGVkaXRUb0RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWZvcm0tZWRpdF1cIik7XG5leHBvcnQgY29uc3QgZHVlRGF0ZVRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1ZS12aWV3LWRpdlwiKTtcbmV4cG9ydCBjb25zdCBwcmlvcml0eVRhc2tEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByaW9yaXR5LXZpZXctZGl2XCIpO1xuZXhwb3J0IGNvbnN0IGNvbXBsZXRlZFRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wbGV0ZWQtdmlldy1kaXZcIik7XG4iLCJpbXBvcnQgeyBhZGRCdG4sIHJldHVyblRvQ2F0VGFiIH0gZnJvbSBcIi4vcXVlcnlTZWxlY3RvcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFiQ29udHJvbHMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnRuLWN0cmxcIikuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBidG5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRhaW5lclwiKTtcbiAgICAgIGNvbnN0IGNsaWNrZWRCdG4gPSBidXR0b24uZGF0YXNldC5mb3JUYWI7XG4gICAgICBjb25zdCB0YWJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnQtYm94XCIpO1xuICAgICAgY29uc3QgYWN0aXZlVGFiID0gdGFiQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGAudGFiLWNvbnRlbnRbZGF0YS10YWI9XCIke2NsaWNrZWRCdG59XCJdYFxuICAgICAgKTtcblxuICAgICAgLy8gICBjb25zb2xlLmxvZyhidG5Db250YWluZXIpO1xuICAgICAgLy8gY29uc29sZS5sb2coY2xpY2tlZFRhYik7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRhYkNvbnRhaW5lcik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVUYWIpO1xuXG4gICAgICBidG5Db250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi5idG4tY3RybFwiKS5mb3JFYWNoKCh0YWJCdG4pID0+IHtcbiAgICAgICAgdGFiQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJidG4tY3RybC0tYWN0aXZlXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIHRhYkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYi1jb250ZW50XCIpLmZvckVhY2goKHRhYkNvbnRlbnQpID0+IHtcbiAgICAgICAgdGFiQ29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwidGFiLWNvbnRlbnQtLWFjdGl2ZVwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImJ0bi1jdHJsLS1hY3RpdmVcIik7XG4gICAgICBhY3RpdmVUYWIuY2xhc3NMaXN0LmFkZChcInRhYi1jb250ZW50LS1hY3RpdmVcIik7XG5cbiAgICAgIGlmIChhZGRCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYnRuLWN0cmwtLWFjdGl2ZVwiKSkge1xuICAgICAgICBhZGRCdG4uY2xhc3NMaXN0LnJlbW92ZShcImJ0bi1jdHJsLS1hY3RpdmVcIik7XG4gICAgICAgIHJldHVyblRvQ2F0VGFiLmNsYXNzTGlzdC5hZGQoXCJidG4tY3RybC0tYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgZGVsZXRlSWNvbkltZyBmcm9tIFwiLi9hc3NldHMvaW1ncy90cmFzaC5zdmdcIjtcbmltcG9ydCBlZGl0SWNvbkltZyBmcm9tIFwiLi9hc3NldHMvaW1ncy9lZGl0LWJ1dHRvbi1zdmdyZXBvLWNvbS5zdmdcIjtcbmltcG9ydCB7IGNhdGVnb3JpZXNBcnJheSwgdG9Eb0l0ZW1zQXJyYXkgfSBmcm9tIFwiLi9tb2RlbFwiO1xuaW1wb3J0IHtcbiAgYWRkQ2F0ZWdvcnlNc2csXG4gIHNlbGVjdEFkZFR5cGVEaXYsXG4gIGNhdGVnb3J5V2FybmluZyxcbiAgY2F0ZWdvcnlGb3JtQm94LFxuICBjYXRlZ29yeUZvcm0sXG4gIGNhdGVnb3J5VGFiLFxuICBjYXRlZ29yeVNlY3Rpb24sXG4gIHNpZGVOYXYsXG4gIHRvRG9Gb3JtQ29udGFpbmVyLFxuICB0b0RvRm9ybSxcbiAgY2F0ZWdvcnlOYW1lLFxuICB0b0RvVGl0bGUsXG4gIHRvRG9Qcmlvcml0eSxcbiAgdG9Eb0Rlc2NyaXB0aW9uLFxuICB0b0RvRHVlRGF0ZSxcbiAgYWRkVG9Eb0J0bixcbiAgZWRpdFRvRG9CdG4sXG4gIGR1ZURhdGVUYXNrRGl2LFxuICBwcmlvcml0eVRhc2tEaXYsXG4gIGNvbXBsZXRlZFRhc2tzRGl2LFxufSBmcm9tIFwiLi9xdWVyeVNlbGVjdG9yc1wiO1xuaW1wb3J0IHsgbGltaXREYXRlUGlja2VyIH0gZnJvbSBcIi4vZGF0ZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlbGVjdEFkZFR5cGUoKSB7XG4gIGFkZENhdGVnb3J5TXNnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgc2VsZWN0QWRkVHlwZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XG4gIGlmIChzZWxlY3RBZGRUeXBlRGl2LnN0eWxlLmRpc3BsYXkgPT09IFwiaW5pdGlhbFwiKSB7XG4gICAgc2lkZU5hdi5jbGFzc0xpc3QuYWRkKFwiY2F0LWZvcm0tdmlzaWJsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBzaWRlTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJjYXQtZm9ybS12aXNpYmxlXCIpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q2F0TWVzc2FnZSgpIHtcbiAgYWRkQ2F0ZWdvcnlNc2cuc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xuXG4gIGNvbnNvbGUubG9nKGFkZENhdGVnb3J5TXNnLnN0eWxlLmRpc3BsYXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUNhdGVnb3J5V2FybmluZygpIHtcbiAgY2F0ZWdvcnlXYXJuaW5nLnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcbiAgc2VsZWN0QWRkVHlwZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVRvRG9XYXJuaW5nKCkge1xuICBjYXRlZ29yeVdhcm5pbmcuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjYXRlZ29yeUZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VTZWxlY3Rpb25Cb3goKSB7XG4gIHNlbGVjdEFkZFR5cGVEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3Q2F0ZWdvcnlGb3JtKCkge1xuICBzZWxlY3RBZGRUeXBlRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY2F0ZWdvcnlGb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcbiAgY2F0ZWdvcnlUYWIuY2xhc3NMaXN0LmFkZChcInRhYi1jb250ZW50LS1hY3RpdmVcIik7XG5cbiAgaWYgKGNhdGVnb3J5Rm9ybUJveC5zdHlsZS5kaXNwbGF5ID09PSBcImluaXRpYWxcIikge1xuICAgIHNpZGVOYXYuY2xhc3NMaXN0LmFkZChcImNhdC1mb3JtLXZpc2libGVcIik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVDYXRlZ29yeUZvcm0oKSB7XG4gIGNhdGVnb3J5Rm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNhdGVnb3J5Rm9ybS5yZXNldCgpO1xuICBhZGRDYXRlZ29yeU1zZy5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XG4gIHNpZGVOYXYuY2xhc3NMaXN0LnJlbW92ZShcImNhdC1mb3JtLXZpc2libGVcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeVNlY3Rpb24oKSB7XG4gIGFkZENhdGVnb3J5TXNnLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzQXJyYXkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2F0ZWdvcmllc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY2F0ZWdvcnlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXRlZ29yeUNhcmQuY2xhc3NOYW1lID0gXCJjYXQtY2FyZFwiO1xuICAgIGNhdGVnb3J5Q2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNhdC1udW1cIiwgaSk7XG5cbiAgICBjb25zdCBjYXJkQ2F0ZWdvcnlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNhcmRDYXRlZ29yeU5hbWUuY2xhc3NOYW1lID0gXCJjYXQtbmFtZVwiO1xuICAgIGNhcmRDYXRlZ29yeU5hbWUudGV4dENvbnRlbnQgPSBgJHtjYXRlZ29yaWVzQXJyYXlbaV19YDtcblxuICAgIGNvbnN0IGNhdGVnb3J5Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2F0ZWdvcnlDb250ZW50LmNsYXNzTmFtZSA9IFwiY2F0LWNvbnRlbnRcIjtcbiAgICBjYXRlZ29yeUNvbnRlbnQuZGF0YXNldC5jb250ZW50ID0gYCR7Y2F0ZWdvcmllc0FycmF5W2ldfWA7XG5cbiAgICBjb25zdCBhZGRJdGVtQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRJdGVtQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGFkZEl0ZW1CdG4uY2xhc3NOYW1lID0gXCJuZXctdG8tZG9cIjtcbiAgICBhZGRJdGVtQnRuLmlkID0gXCJhZGQtaXRlbVwiO1xuICAgIGFkZEl0ZW1CdG4udmFsdWUgPSBcImFkZC1pdGVtXCI7XG4gICAgYWRkSXRlbUJ0bi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNhdGVnb3J5XCIsIGAke2NhdGVnb3JpZXNBcnJheVtpXX1gKTtcbiAgICBhZGRJdGVtQnRuLnRleHRDb250ZW50ID0gXCJBZGQgSXRlbVwiO1xuXG4gICAgY29uc3QgZGVsZXRlSWNvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGVsZXRlSWNvbkNvbnRhaW5lci5jbGFzc05hbWUgPSBcImRlbGV0ZS1pY29uXCI7XG4gICAgZGVsZXRlSWNvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgICBcImRhdGEtZGVsZXRlLWNhdFwiLFxuICAgICAgYCR7Y2F0ZWdvcmllc0FycmF5W2ldfWBcbiAgICApO1xuICAgIGRlbGV0ZUljb25Db250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1kZWxldGUtY2F0LWluZGV4XCIsIGkpO1xuXG4gICAgY29uc3QgZGVsZXRlQnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBkZWxldGVCdG5JbWcuc3JjID0gZGVsZXRlSWNvbkltZztcbiAgICBkZWxldGVCdG5JbWcuc2V0QXR0cmlidXRlKFwiZGF0YS1kZWxldGUtY2F0XCIsIGAke2NhdGVnb3JpZXNBcnJheVtpXX1gKTtcbiAgICBkZWxldGVCdG5JbWcuc2V0QXR0cmlidXRlKFwiZGF0YS1kZWxldGUtY2F0LWluZGV4XCIsIGkpO1xuICAgIGRlbGV0ZUJ0bkltZy5zZXRBdHRyaWJ1dGUoXCJmb2N1c2FibGVcIiwgdHJ1ZSk7XG4gICAgZGVsZXRlQnRuSW1nLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuXG4gICAgY2F0ZWdvcnlTZWN0aW9uLmFwcGVuZENoaWxkKGNhdGVnb3J5Q2FyZCk7XG4gICAgY2F0ZWdvcnlDYXJkLmFwcGVuZENoaWxkKGNhcmRDYXRlZ29yeU5hbWUpO1xuICAgIGNhdGVnb3J5Q2FyZC5hcHBlbmRDaGlsZChjYXRlZ29yeUNvbnRlbnQpO1xuICAgIGNhdGVnb3J5Q2FyZC5hcHBlbmRDaGlsZChhZGRJdGVtQnRuKTtcbiAgICBjYXRlZ29yeUNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbkNvbnRhaW5lcik7XG4gICAgZGVsZXRlSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG5JbWcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2F0ZWdvcnlTZWN0aW9ucygpIHtcbiAgLy8gUmVwbGFjZXMgYWxsIGNhdGVnb3J5IHNlY3Rpb25zIG9uIGVhY2ggbmV3IGNhdGVnb3J5IGNyZWF0aW9uIHRvIHByZXZlbnQgZHVwbGljYXRlc1xuICB3aGlsZSAoY2F0ZWdvcnlTZWN0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICBjYXRlZ29yeVNlY3Rpb24ucmVtb3ZlQ2hpbGQoY2F0ZWdvcnlTZWN0aW9uLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RvRm9ybURpc3BsYXkoYWRkQnRuKSB7XG4gIGNvbnNvbGUubG9nKGFkZEJ0bik7XG4gIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9IGFkZEJ0bjtcblxuICB0b0RvRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XG4gIHRvRG9Gb3JtQ29udGFpbmVyLnNjcm9sbFRvKDAsIDApO1xuICBhZGRUb0RvQnRuLnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcbiAgZWRpdFRvRG9CdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBsaW1pdERhdGVQaWNrZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dGb3JtV2l0aEluZm8oZWRpdEJ0bkluZGV4LCBlZGl0QnRuQ2F0KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0l0ZW1zQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB0b0RvRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XG4gICAgdG9Eb0Zvcm1Db250YWluZXIuc2Nyb2xsVG8oMCwgMCk7XG4gICAgYWRkVG9Eb0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZWRpdFRvRG9CdG4uc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xuICAgIGxpbWl0RGF0ZVBpY2tlcigpO1xuXG4gICAgaWYgKFxuICAgICAgcGFyc2VJbnQoZWRpdEJ0bkluZGV4KSA9PT1cbiAgICAgIHBhcnNlSW50KHRvRG9JdGVtc0FycmF5LmluZGV4T2YodG9Eb0l0ZW1zQXJyYXlbaV0pKVxuICAgICkge1xuICAgICAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gZWRpdEJ0bkNhdDtcbiAgICAgIHRvRG9UaXRsZS52YWx1ZSA9IHRvRG9JdGVtc0FycmF5W2ldLnRpdGxlO1xuICAgICAgdG9Eb1ByaW9yaXR5LnZhbHVlID0gdG9Eb0l0ZW1zQXJyYXlbaV0ucHJpb3JpdHk7XG4gICAgICB0b0RvRGVzY3JpcHRpb24udmFsdWUgPSB0b0RvSXRlbXNBcnJheVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgIHRvRG9EdWVEYXRlLnZhbHVlID0gdG9Eb0l0ZW1zQXJyYXlbaV0uZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBlbnRyeUluZGV4ID0gdG9Eb0l0ZW1zQXJyYXkuaW5kZXhPZih0b0RvSXRlbXNBcnJheVtpXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVUb0RvRm9ybSgpIHtcbiAgdG9Eb0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0b0RvRm9ybS5yZXNldCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvRG9FbnRyeSgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvSXRlbXNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0b0RvSXRlbXNBcnJheVtpXS5jb21wbGV0ZWRUYXNrID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgY2F0Q29udGVudERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdC1jb250ZW50XCIpO1xuXG4gICAgICBjb25zdCB0b0RvRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9Eb0VudHJ5LmNsYXNzTmFtZSA9IFwidG8tZG8tZW50cnlcIjtcbiAgICAgIHRvRG9FbnRyeS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVudHJ5XCIsIGkpO1xuXG4gICAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICB0b0RvVGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICAgICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gdG9Eb0l0ZW1zQXJyYXlbaV0udGl0bGU7XG5cbiAgICAgIGNvbnN0IHRvRG9EZXRhaWxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9Eb0RldGFpbHNUaXRsZS5jbGFzc05hbWUgPSBcImRldGFpbHMtdGl0bGVcIjtcbiAgICAgIHRvRG9EZXRhaWxzVGl0bGUudGV4dENvbnRlbnQgPSBcIkRldGFpbHM6XCI7XG4gICAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0uZGVzY3JpcHRpb24gPT09IFwiXCIpIHtcbiAgICAgICAgdG9Eb0RldGFpbHNUaXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvRG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0b0RvRGV0YWlscy5jbGFzc05hbWUgPSBcImRldGFpbHNcIjtcbiAgICAgIHRvRG9EZXRhaWxzLnRleHRDb250ZW50ID0gdG9Eb0l0ZW1zQXJyYXlbaV0uZGVzY3JpcHRpb247XG5cbiAgICAgIGNvbnN0IHRvRG9EdWVEYXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9Eb0R1ZURhdGVUaXRsZS5jbGFzc05hbWUgPSBcImR1ZS10aXRsZVwiO1xuICAgICAgdG9Eb0R1ZURhdGVUaXRsZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XG5cbiAgICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0b0RvRHVlRGF0ZS5jbGFzc05hbWUgPSBcInNob3ctZHVlLWRhdGVcIjtcbiAgICAgIHRvRG9EdWVEYXRlLnRleHRDb250ZW50ID0gdG9Eb0l0ZW1zQXJyYXlbaV0uZHVlRGF0ZTtcblxuICAgICAgY29uc3QgY29tcGxldGVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbXBsZXRlZERpdi5jbGFzc05hbWUgPSBcImNvbXBsZXRlLWNvbnRhaW5lclwiO1xuXG4gICAgICBjb25zdCBjb21wbGV0ZWRDaGVja0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgY29tcGxldGVkQ2hlY2tMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb21wbGV0ZVwiKTtcbiAgICAgIGNvbXBsZXRlZENoZWNrTGFiZWwudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlOlwiO1xuXG4gICAgICBjb25zdCBjb21wbGV0ZWRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcbiAgICAgIGNvbXBsZXRlZENoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIGNvbXBsZXRlZENoZWNrLmNsYXNzTmFtZSA9IFwiY29tcGxldGVcIjtcbiAgICAgIGNvbXBsZXRlZENoZWNrLm5hbWUgPSBcImNvbXBsZXRlXCI7XG4gICAgICBjb21wbGV0ZWRDaGVjay5pZCA9IFwiY29tcGxldGVcIjtcbiAgICAgIGNvbXBsZXRlZENoZWNrLnZhbHVlID0gXCJjb21wbGV0ZVwiO1xuICAgICAgY29tcGxldGVkQ2hlY2suY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgY29tcGxldGVkQ2hlY2suc2V0QXR0cmlidXRlKFwiZGF0YS1jaGVja1wiLCBpKTtcblxuICAgICAgY29uc3QgZGVsZXRlSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkZWxldGVJY29uRGl2LmNsYXNzTmFtZSA9IFwiZGVsZXRlLWljb25cIjtcblxuICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBkZWxldGVJY29uLnNyYyA9IGRlbGV0ZUljb25JbWc7XG4gICAgICBkZWxldGVJY29uLmFsdCA9IFwiRGVsZXRlIEVudHJ5XCI7XG4gICAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZShcImRhdGEtaXRlbS1kZWxldGVcIiwgaSk7XG4gICAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZShcImZvY3VzYWJsZVwiLCB0cnVlKTtcbiAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByaW9yaXR5RGl2LmNsYXNzTmFtZSA9IFwicHJpb3JpdHlcIjtcblxuICAgICAgY29uc3QgcHJpb3JpdHlDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eUNvbG9yLmNsYXNzTmFtZSA9IFwicHJpb3JpdHktY29sb3JcIjtcbiAgICAgIHByaW9yaXR5Q29sb3Iuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzUzNTM0N1wiO1xuICAgICAgaWYgKHRvRG9JdGVtc0FycmF5W2ldLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09IFwibG93XCIpIHtcbiAgICAgICAgcHJpb3JpdHlDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlN2YyNGZcIjtcbiAgICAgIH0gZWxzZSBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0ucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICBwcmlvcml0eUNvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2VlYjI1MFwiO1xuICAgICAgfSBlbHNlIGlmICh0b0RvSXRlbXNBcnJheVtpXS5wcmlvcml0eS50b0xvd2VyQ2FzZSA9PT0gXCJoaWdoXCIpIHtcbiAgICAgICAgcHJpb3JpdHlDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNiYzI3MDJcIjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZWRpdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgZWRpdEljb24uY2xhc3NOYW1lID0gXCJlZGl0LWJ0blwiO1xuICAgICAgZWRpdEljb24uc3JjID0gZWRpdEljb25JbWc7XG4gICAgICBlZGl0SWNvbi5hbHQgPSBcIkVkaXQgRW50cnlcIjtcbiAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcImRhdGEtZWRpdFwiLCBpKTtcbiAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcImRhdGEtZWRpdC1jYXRcIiwgdG9Eb0l0ZW1zQXJyYXlbaV0uY2F0ZWdvcnkpO1xuICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwiZm9jdXNhYmxlXCIsIHRydWUpO1xuICAgICAgZWRpdEljb24uc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgMCk7XG5cbiAgICAgIGNhdENvbnRlbnREaXZzLmZvckVhY2goKGRpdikgPT4ge1xuICAgICAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0uY2F0ZWdvcnkgPT09IGRpdi5kYXRhc2V0LmNvbnRlbnQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkaXYuZGF0YXNldC5jb250ZW50KTtcblxuICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0b0RvRW50cnkpO1xuICAgICAgICAgIHRvRG9FbnRyeS5hcHBlbmRDaGlsZCh0b0RvVGl0bGUpO1xuICAgICAgICAgIHRvRG9FbnRyeS5hcHBlbmRDaGlsZCh0b0RvRGV0YWlsc1RpdGxlKTtcbiAgICAgICAgICB0b0RvRW50cnkuYXBwZW5kQ2hpbGQodG9Eb0RldGFpbHMpO1xuICAgICAgICAgIHRvRG9FbnRyeS5hcHBlbmRDaGlsZCh0b0RvRHVlRGF0ZVRpdGxlKTtcbiAgICAgICAgICB0b0RvRW50cnkuYXBwZW5kQ2hpbGQodG9Eb0R1ZURhdGUpO1xuICAgICAgICAgIHRvRG9FbnRyeS5hcHBlbmRDaGlsZChjb21wbGV0ZWREaXYpO1xuICAgICAgICAgIGNvbXBsZXRlZERpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja0xhYmVsKTtcbiAgICAgICAgICBjb21wbGV0ZWREaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2spO1xuICAgICAgICAgIHRvRG9FbnRyeS5hcHBlbmRDaGlsZChkZWxldGVJY29uRGl2KTtcbiAgICAgICAgICBkZWxldGVJY29uRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xuICAgICAgICAgIHRvRG9FbnRyeS5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG4gICAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlDb2xvcik7XG4gICAgICAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoZWRpdEljb24pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VUb0RvSXRlbXMoKSB7XG4gIC8vIFJlcGxhY2VzIGFsbCBUbyBEbyBJdGVtcyBvbiBlYWNoIG5ldyBpdGVtIGNyZWF0aW9uIHRvIHByZXZlbnQgZHVwbGljYXRlc1xuICBsZXQgdG9Eb1BhcmVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdC1jb250ZW50XCIpO1xuICB0b0RvUGFyZW50cy5mb3JFYWNoKChwYXJlbnQpID0+IHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCeUR1ZURhdGUoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0l0ZW1zQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0uY29tcGxldGVkVGFzayA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGR1ZURhdGVUYXNrc1Jvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkdWVEYXRlVGFza3NSb3dEaXYuY2xhc3NOYW1lID0gXCJkdWUtdGFza3Mtcm93LXBhcmVudFwiO1xuXG4gICAgICBjb25zdCBkdWVEYXRlVGFza3NSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZHVlRGF0ZVRhc2tzUm93LmNsYXNzTmFtZSA9IFwiZHVlLXZpZXctcm93XCI7XG5cbiAgICAgIGNvbnN0IGR1ZVZpZXdEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGR1ZVZpZXdEdWVEYXRlLmNsYXNzTmFtZSA9IFwiZHVlLXZpZXctZHVlIHNob3ctZGF0ZS1kdWVcIjtcbiAgICAgIGR1ZVZpZXdEdWVEYXRlLnRleHRDb250ZW50ID0gdG9Eb0l0ZW1zQXJyYXlbaV0uZHVlRGF0ZTtcbiAgICAgIGR1ZVZpZXdEdWVEYXRlLnN0eWxlLmJvcmRlclJpZ2h0ID0gXCIwLjJjaCBzb2xpZCBibGFja1wiO1xuICAgICAgZHVlVmlld0R1ZURhdGUuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcblxuICAgICAgY29uc3QgZHVlRGF0ZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGR1ZURhdGVUaXRsZS5jbGFzc05hbWUgPSBcImdyaWQtY2VsbHMgLmR1ZS12aWV3LXRpdGxlXCI7XG4gICAgICBkdWVEYXRlVGl0bGUudGV4dENvbnRlbnQgPSB0b0RvSXRlbXNBcnJheVtpXS50aXRsZTtcblxuICAgICAgY29uc3QgZHVlRGF0ZURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGR1ZURhdGVEZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImdyaWQtY2VsbHMgLmR1ZS12aWV3LWRlc2NyaXB0aW9uXCI7XG4gICAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0uZGVzY3JpcHRpb24gIT09IFwiXCIpIHtcbiAgICAgICAgZHVlRGF0ZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9Eb0l0ZW1zQXJyYXlbaV0uZGVzY3JpcHRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkdWVEYXRlRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIi0tLS1cIjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHVlRGF0ZVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGR1ZURhdGVQcmlvcml0eS5jbGFzc05hbWUgPSBcImdyaWQtY2VsbHMgLmR1ZS12aWV3LXByaW9yaXR5XCI7XG4gICAgICBjb25zdCBkdWVEYXRlUHJpb3JpdHlDb2xvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkdWVEYXRlUHJpb3JpdHlDb2xvci5jbGFzc05hbWUgPSBcInByaW9yaXR5LWNvbG9yXCI7XG4gICAgICBkdWVEYXRlUHJpb3JpdHlDb2xvci5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjNTM1MzQ3XCI7XG4gICAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0ucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJsb3dcIikge1xuICAgICAgICBkdWVEYXRlUHJpb3JpdHlDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlN2YyNGZcIjtcbiAgICAgIH0gZWxzZSBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0ucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJtZWRpdW1cIikge1xuICAgICAgICBkdWVEYXRlUHJpb3JpdHlDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlZWIyNTBcIjtcbiAgICAgIH0gZWxzZSBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0ucHJpb3JpdHkudG9Mb3dlckNhc2UgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgIGR1ZURhdGVQcmlvcml0eUNvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2JjMjcwMlwiO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBkdWVEYXRlQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZHVlRGF0ZUNoZWNrLmNsYXNzTmFtZSA9IFwiZ3JpZC1jZWxscyAuZHVlLXZpZXctY29tcGxldGVcIjtcblxuICAgICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbXBsZXRlXCIpO1xuXG4gICAgICBjb25zdCBkdWVEYXRlQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XG4gICAgICBkdWVEYXRlQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgZHVlRGF0ZUNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY29tcGxldGVcIjtcbiAgICAgIGR1ZURhdGVDaGVja2JveC5uYW1lID0gXCJjb21wbGV0ZVwiO1xuICAgICAgZHVlRGF0ZUNoZWNrYm94LmlkID0gXCJjb21wbGV0ZVwiO1xuICAgICAgZHVlRGF0ZUNoZWNrYm94LnZhbHVlID0gXCJjb21wbGV0ZVwiO1xuICAgICAgZHVlRGF0ZUNoZWNrYm94LmNoZWNrZWQgPSB0b0RvSXRlbXNBcnJheVtpXS5jb21wbGV0ZWRUYXNrO1xuICAgICAgZHVlRGF0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcImRhdGEtY2hlY2tcIiwgaSk7XG5cbiAgICAgIGNvbnN0IGR1ZURhdGVEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZHVlRGF0ZURlbGV0ZS5jbGFzc05hbWUgPSBcImdyaWQtY2VsbHMgLmR1ZS12aWV3LWRlbGV0ZVwiO1xuXG4gICAgICBjb25zdCBkZWxldGVCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgZGVsZXRlQnRuSW1nLnNyYyA9IGRlbGV0ZUljb25JbWc7XG4gICAgICBkZWxldGVCdG5JbWcuc2V0QXR0cmlidXRlKFwiZGF0YS1pdGVtLWRlbGV0ZVwiLCBpKTtcblxuICAgICAgZHVlRGF0ZVRhc2tEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZVRhc2tzUm93RGl2KTtcbiAgICAgIGR1ZURhdGVUYXNrc1Jvd0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlVGFza3NSb3cpO1xuICAgICAgZHVlRGF0ZVRhc2tzUm93LmFwcGVuZENoaWxkKGR1ZVZpZXdEdWVEYXRlKTtcbiAgICAgIGR1ZURhdGVUYXNrc1Jvdy5hcHBlbmRDaGlsZChkdWVEYXRlVGl0bGUpO1xuICAgICAgZHVlRGF0ZVRhc2tzUm93LmFwcGVuZENoaWxkKGR1ZURhdGVEZXNjcmlwdGlvbik7XG4gICAgICBkdWVEYXRlVGFza3NSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZVByaW9yaXR5KTtcbiAgICAgIGR1ZURhdGVQcmlvcml0eS5hcHBlbmRDaGlsZChkdWVEYXRlUHJpb3JpdHlDb2xvcik7XG4gICAgICBkdWVEYXRlVGFza3NSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZUNoZWNrKTtcbiAgICAgIGR1ZURhdGVDaGVjay5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICAgICAgZHVlRGF0ZUNoZWNrLmFwcGVuZENoaWxkKGR1ZURhdGVDaGVja2JveCk7XG4gICAgICBkdWVEYXRlVGFza3NSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZURlbGV0ZSk7XG4gICAgICBkdWVEYXRlRGVsZXRlLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bkltZyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlRHVlRGF0ZVJvd3MoKSB7XG4gIC8vIFJlcGxhY2VzIGFsbCByb3dzIG9mIER1ZURhdGUgdmlldyB0byBwcmV2ZW50IGR1cGxpY2F0ZXNcblxuICBjb25zdCBkdWVWaWV3Um93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZHVlLXZpZXctcm93XCIpO1xuXG4gIGR1ZVZpZXdSb3dzLmZvckVhY2goKHJvdykgPT4ge1xuICAgIGlmIChyb3cucGFyZW50Tm9kZSkge1xuICAgICAgcm93LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocm93KTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0J5UHJpb3JpdHkoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0l0ZW1zQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0uY29tcGxldGVkVGFzayA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IHByaW9yaXR5VGFza3NSb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHlUYXNrc1Jvd0Rpdi5jbGFzc05hbWUgPSBcInByaW9yaXR5LXRhc2tzLXJvdy1wYXJlbnRcIjtcblxuICAgICAgY29uc3QgcHJpb3JpdHlUYXNrc1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eVRhc2tzUm93LmNsYXNzTmFtZSA9IFwicHJpb3JpdHktdmlldy1yb3dcIjtcblxuICAgICAgY29uc3QgcHJpb3JpdHlWaWV3UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHlWaWV3UHJpb3JpdHkuY2xhc3NOYW1lID0gXCJncmlkLWNlbGxzIC5wcmlvcml0eS12aWV3LXByaW9yaXR5XCI7XG4gICAgICBjb25zdCBwcmlvcml0eVZpZXdQcmlvcml0eUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByaW9yaXR5Vmlld1ByaW9yaXR5Q29sb3IuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1jb2xvclwiO1xuICAgICAgcHJpb3JpdHlWaWV3UHJpb3JpdHlDb2xvci5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjNTM1MzQ3XCI7XG4gICAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0ucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJsb3dcIikge1xuICAgICAgICBwcmlvcml0eVZpZXdQcmlvcml0eUNvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2U3ZjI0ZlwiO1xuICAgICAgfSBlbHNlIGlmICh0b0RvSXRlbXNBcnJheVtpXS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgIHByaW9yaXR5Vmlld1ByaW9yaXR5Q29sb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZWViMjUwXCI7XG4gICAgICB9IGVsc2UgaWYgKHRvRG9JdGVtc0FycmF5W2ldLnByaW9yaXR5LnRvTG93ZXJDYXNlID09PSBcImhpZ2hcIikge1xuICAgICAgICBwcmlvcml0eVZpZXdQcmlvcml0eUNvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2JjMjcwMlwiO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcmlvcml0eVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByaW9yaXR5VGl0bGUuY2xhc3NOYW1lID0gXCJncmlkLWNlbGxzIC5wcmlvcml0eS12aWV3LXRpdGxlXCI7XG4gICAgICBwcmlvcml0eVRpdGxlLnRleHRDb250ZW50ID0gdG9Eb0l0ZW1zQXJyYXlbaV0udGl0bGU7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHlEZXNjcmlwdGlvbi5jbGFzc05hbWUgPSBcImdyaWQtY2VsbHMgLnByaW9yaXR5LXZpZXctZGVzY3JpcHRpb25cIjtcbiAgICAgIGlmICh0b0RvSXRlbXNBcnJheVtpXS5kZXNjcmlwdGlvbiAhPT0gXCJcIikge1xuICAgICAgICBwcmlvcml0eURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9Eb0l0ZW1zQXJyYXlbaV0uZGVzY3JpcHRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmlvcml0eURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCItLS0tXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5Vmlld0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHlWaWV3RHVlRGF0ZS5jbGFzc05hbWUgPSBcInByaW9yaXR5LXZpZXctZHVlIHNob3ctZGF0ZS1wcmlvcml0eVwiO1xuICAgICAgcHJpb3JpdHlWaWV3RHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvRG9JdGVtc0FycmF5W2ldLmR1ZURhdGU7XG4gICAgICBwcmlvcml0eVZpZXdEdWVEYXRlLnN0eWxlLmJvcmRlclJpZ2h0ID0gXCIwLjJjaCBzb2xpZCBibGFja1wiO1xuICAgICAgcHJpb3JpdHlWaWV3RHVlRGF0ZS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuXG4gICAgICBjb25zdCBwcmlvcml0eUNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByaW9yaXR5Q2hlY2suY2xhc3NOYW1lID0gXCJncmlkLWNlbGxzIC5wcmlvcml0eS12aWV3LWNvbXBsZXRlXCI7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbXBsZXRlXCIpO1xuXG4gICAgICBjb25zdCBwcmlvcml0eUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xuICAgICAgcHJpb3JpdHlDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgICBwcmlvcml0eUNoZWNrYm94LmNsYXNzTmFtZSA9IFwiY29tcGxldGVcIjtcbiAgICAgIHByaW9yaXR5Q2hlY2tib3gubmFtZSA9IFwiY29tcGxldGVcIjtcbiAgICAgIHByaW9yaXR5Q2hlY2tib3guaWQgPSBcImNvbXBsZXRlXCI7XG4gICAgICBwcmlvcml0eUNoZWNrYm94LnZhbHVlID0gXCJjb21wbGV0ZVwiO1xuICAgICAgcHJpb3JpdHlDaGVja2JveC5jaGVja2VkID0gdG9Eb0l0ZW1zQXJyYXlbaV0uY29tcGxldGVkVGFzaztcbiAgICAgIHByaW9yaXR5Q2hlY2tib3guc2V0QXR0cmlidXRlKFwiZGF0YS1jaGVja1wiLCBpKTtcblxuICAgICAgY29uc3QgcHJpb3JpdHlEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHlEZWxldGUuY2xhc3NOYW1lID0gXCJncmlkLWNlbGxzIC5wcmlvcml0eS12aWV3LWRlbGV0ZVwiO1xuXG4gICAgICBjb25zdCBkZWxldGVCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgZGVsZXRlQnRuSW1nLnNyYyA9IGRlbGV0ZUljb25JbWc7XG4gICAgICBkZWxldGVCdG5JbWcuc2V0QXR0cmlidXRlKFwiZGF0YS1pdGVtLWRlbGV0ZVwiLCBpKTtcblxuICAgICAgcHJpb3JpdHlUYXNrRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5VGFza3NSb3dEaXYpO1xuICAgICAgcHJpb3JpdHlUYXNrc1Jvd0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eVRhc2tzUm93KTtcbiAgICAgIHByaW9yaXR5VGFza3NSb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlWaWV3UHJpb3JpdHkpO1xuICAgICAgcHJpb3JpdHlWaWV3UHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlWaWV3UHJpb3JpdHlDb2xvcik7XG4gICAgICBwcmlvcml0eVRhc2tzUm93LmFwcGVuZENoaWxkKHByaW9yaXR5VGl0bGUpO1xuICAgICAgcHJpb3JpdHlUYXNrc1Jvdy5hcHBlbmRDaGlsZChwcmlvcml0eURlc2NyaXB0aW9uKTtcbiAgICAgIHByaW9yaXR5VGFza3NSb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlWaWV3RHVlRGF0ZSk7XG4gICAgICBwcmlvcml0eVRhc2tzUm93LmFwcGVuZENoaWxkKHByaW9yaXR5Q2hlY2spO1xuICAgICAgcHJpb3JpdHlDaGVjay5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgIHByaW9yaXR5Q2hlY2suYXBwZW5kQ2hpbGQocHJpb3JpdHlDaGVja2JveCk7XG4gICAgICBwcmlvcml0eVRhc2tzUm93LmFwcGVuZENoaWxkKHByaW9yaXR5RGVsZXRlKTtcbiAgICAgIHByaW9yaXR5RGVsZXRlLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bkltZyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlUHJpb3JpdHlSb3dzKCkge1xuICAvLyBSZXBsYWNlcyBhbGwgcm93cyBvZiBwcmlvcml0eSB2aWV3IHRvIHByZXZlbnQgZHVwbGljYXRlc1xuXG4gIGNvbnN0IHByaW9yaXR5Vmlld1Jvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5LXZpZXctcm93XCIpO1xuXG4gIHByaW9yaXR5Vmlld1Jvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgaWYgKHJvdy5wYXJlbnROb2RlKSB7XG4gICAgICByb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb3cpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29tcGxldGVkVGFza3MoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0l0ZW1zQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0uY29tcGxldGVkVGFzayA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgY29tcGxldGVkVGFza3NSb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29tcGxldGVkVGFza3NSb3dEaXYuY2xhc3NOYW1lID0gXCJjb21wbGV0ZWQtdGFza3Mtcm93LXBhcmVudFwiO1xuXG4gICAgICBjb25zdCBjb21wbGV0ZWRUYXNrc1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb21wbGV0ZWRUYXNrc1Jvdy5jbGFzc05hbWUgPSBcImNvbXBsZXRlZC10YXNrcy1yb3dcIjtcblxuICAgICAgY29uc3QgZ3JpZENlbGxzQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3JpZENlbGxzQ2hlY2suY2xhc3NOYW1lID0gXCJncmlkLWNlbGxzIC5jb21wbGV0ZS12aWV3LWNvbXBsZXRlXCI7XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgY29tcGxldGVkTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29tcGxldGVcIik7XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xuICAgICAgY29tcGxldGVkQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgY29tcGxldGVkQ2hlY2tib3guY2xhc3NOYW1lID0gXCJjb21wbGV0ZVwiO1xuICAgICAgY29tcGxldGVkQ2hlY2tib3gubmFtZSA9IFwiY29tcGxldGVcIjtcbiAgICAgIGNvbXBsZXRlZENoZWNrYm94LmlkID0gXCJjb21wbGV0ZVwiO1xuICAgICAgY29tcGxldGVkQ2hlY2tib3gudmFsdWUgPSBcImNvbXBsZXRlXCI7XG4gICAgICBjb21wbGV0ZWRDaGVja2JveC5jaGVja2VkID0gdG9Eb0l0ZW1zQXJyYXlbaV0uY29tcGxldGVkVGFzaztcbiAgICAgIGNvbXBsZXRlZENoZWNrYm94LnNldEF0dHJpYnV0ZShcImRhdGEtY2hlY2tcIiwgaSk7XG5cbiAgICAgIGNvbnN0IGdyaWRDZWxsc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWRDZWxsc1RpdGxlLmNsYXNzTmFtZSA9IFwiZ3JpZC1jZWxscyAuY29tcGxldGUtdmlldy10aXRsZVwiO1xuICAgICAgZ3JpZENlbGxzVGl0bGUudGV4dENvbnRlbnQgPSB0b0RvSXRlbXNBcnJheVtpXS50aXRsZTtcblxuICAgICAgY29uc3QgZ3JpZENlbGxzRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3JpZENlbGxzRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJncmlkLWNlbGxzIC5jb21wbGV0ZS12aWV3LWRlc2NyaXB0aW9uXCI7XG4gICAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0uZGVzY3JpcHRpb24gIT09IFwiXCIpIHtcbiAgICAgICAgZ3JpZENlbGxzRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b0RvSXRlbXNBcnJheVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRDZWxsc0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCItLS0tXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGdyaWRDZWxsc1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWRDZWxsc1ByaW9yaXR5LmNsYXNzTmFtZSA9IFwiZ3JpZC1jZWxscyAuY29tcGxldGUtdmlldy1wcmlvcml0eVwiO1xuXG4gICAgICBjb25zdCBncmlkQ2VsbHNQcmlvcml0eUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWRDZWxsc1ByaW9yaXR5Q29sb3IuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1jb2xvclwiO1xuICAgICAgZ3JpZENlbGxzUHJpb3JpdHlDb2xvci5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjNTM1MzQ3XCI7XG4gICAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0ucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJsb3dcIikge1xuICAgICAgICBncmlkQ2VsbHNQcmlvcml0eUNvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2U3ZjI0ZlwiO1xuICAgICAgfSBlbHNlIGlmICh0b0RvSXRlbXNBcnJheVtpXS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgIGdyaWRDZWxsc1ByaW9yaXR5Q29sb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZWViMjUwXCI7XG4gICAgICB9IGVsc2UgaWYgKHRvRG9JdGVtc0FycmF5W2ldLnByaW9yaXR5LnRvTG93ZXJDYXNlID09PSBcImhpZ2hcIikge1xuICAgICAgICBncmlkQ2VsbHNQcmlvcml0eUNvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2JjMjcwMlwiO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBncmlkQ2VsbHNEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3JpZENlbGxzRGVsZXRlLmNsYXNzTmFtZSA9IFwiZ3JpZC1jZWxscyAuY29tcGxldGUtdmlldy1kZWxldGVcIjtcblxuICAgICAgY29uc3QgZGVsZXRlQnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGRlbGV0ZUJ0bkltZy5zcmMgPSBkZWxldGVJY29uSW1nO1xuICAgICAgZGVsZXRlQnRuSW1nLnNldEF0dHJpYnV0ZShcImRhdGEtaXRlbS1kZWxldGVcIiwgaSk7XG5cbiAgICAgIGNvbXBsZXRlZFRhc2tzRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzUm93RGl2KTtcbiAgICAgIGNvbXBsZXRlZFRhc2tzUm93RGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZFRhc2tzUm93KTtcbiAgICAgIGNvbXBsZXRlZFRhc2tzUm93LmFwcGVuZENoaWxkKGdyaWRDZWxsc0NoZWNrKTtcbiAgICAgIGdyaWRDZWxsc0NoZWNrLmFwcGVuZENoaWxkKGNvbXBsZXRlZExhYmVsKTtcbiAgICAgIGdyaWRDZWxsc0NoZWNrLmFwcGVuZENoaWxkKGNvbXBsZXRlZENoZWNrYm94KTtcbiAgICAgIGNvbXBsZXRlZFRhc2tzUm93LmFwcGVuZENoaWxkKGdyaWRDZWxsc1RpdGxlKTtcbiAgICAgIGNvbXBsZXRlZFRhc2tzUm93LmFwcGVuZENoaWxkKGdyaWRDZWxsc0Rlc2NyaXB0aW9uKTtcbiAgICAgIGNvbXBsZXRlZFRhc2tzUm93LmFwcGVuZENoaWxkKGdyaWRDZWxsc1ByaW9yaXR5KTtcbiAgICAgIGdyaWRDZWxsc1ByaW9yaXR5LmFwcGVuZENoaWxkKGdyaWRDZWxsc1ByaW9yaXR5Q29sb3IpO1xuICAgICAgY29tcGxldGVkVGFza3NSb3cuYXBwZW5kQ2hpbGQoZ3JpZENlbGxzRGVsZXRlKTtcbiAgICAgIGdyaWRDZWxsc0RlbGV0ZS5hcHBlbmRDaGlsZChkZWxldGVCdG5JbWcpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUNvbXBsZXRlZFJvd3MoKSB7XG4gIC8vIFJlcGxhY2VzIGFsbCByb3dzIG9mIENvbXBsZXRlZCBUYXNrcyB0byBwcmV2ZW50IGR1cGxpY2F0ZXNcblxuICBjb25zdCBjb21wbGV0ZWRUYXNrUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcGxldGVkLXRhc2tzLXJvd1wiKTtcblxuICBjb21wbGV0ZWRUYXNrUm93cy5mb3JFYWNoKChyb3cpID0+IHtcbiAgICBpZiAocm93LnBhcmVudE5vZGUpIHtcbiAgICAgIHJvdy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJvdyk7XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvdGFiQ29udHJvbC5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9jb250cm9sbGVyLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21vZGVsLmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3ZpZXcuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcXVlcnlTZWxlY3RvcnMuanNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kYXRlcy5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==