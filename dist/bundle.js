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
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _querySelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./querySelectors */ "./src/querySelectors.js");
/* harmony import */ var _dates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dates */ "./src/dates.js");




function selectAddType() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.addCategoryMsg.style.display = "none";
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.selectAddTypeDiv.style.display = "initial";
  if (_querySelectors__WEBPACK_IMPORTED_MODULE_1__.selectAddTypeDiv.style.display === "initial") {
    _querySelectors__WEBPACK_IMPORTED_MODULE_1__.sideNav.classList.add("cat-form-visible");
  } else {
    _querySelectors__WEBPACK_IMPORTED_MODULE_1__.sideNav.classList.remove("cat-form-visible");
  }
}

function showCatMessage() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.addCategoryMsg.style.display = "initial";

  console.log(_querySelectors__WEBPACK_IMPORTED_MODULE_1__.addCategoryMsg.style.display);
}

function displayCategoryWarning() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.categoryWarning.style.display = "initial";
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.selectAddTypeDiv.style.display = "none";
}

function closeToDoWarning() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.categoryWarning.style.display = "none";
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.categoryFormBox.style.display = "initial";
}

function closeSelectionBox() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.selectAddTypeDiv.style.display = "none";
}

function newCategoryForm() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.selectAddTypeDiv.style.display = "none";
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.categoryFormBox.style.display = "initial";
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.categoryTab.classList.add("tab-content--active");

  if (_querySelectors__WEBPACK_IMPORTED_MODULE_1__.categoryFormBox.style.display === "initial") {
    _querySelectors__WEBPACK_IMPORTED_MODULE_1__.sideNav.classList.add("cat-form-visible");
  }
}

function hideCategoryForm() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.categoryFormBox.style.display = "none";
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.categoryForm.reset();
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.addCategoryMsg.style.display = "initial";
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.sideNav.classList.remove("cat-form-visible");
}

function createCategorySection() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.addCategoryMsg.style.display = "none";

  console.log(_model__WEBPACK_IMPORTED_MODULE_0__.categoriesArray);

  for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__.categoriesArray.length; i++) {
    const categoryCard = document.createElement("div");
    categoryCard.className = "cat-card";
    categoryCard.setAttribute("data-cat-num", i);

    const cardCategoryName = document.createElement("h2");
    cardCategoryName.className = "cat-name";
    cardCategoryName.textContent = `${_model__WEBPACK_IMPORTED_MODULE_0__.categoriesArray[i]}`;

    const categoryContent = document.createElement("div");
    categoryContent.className = "cat-content";
    categoryContent.dataset.content = `${_model__WEBPACK_IMPORTED_MODULE_0__.categoriesArray[i]}`;

    const addItemBtn = document.createElement("button");
    addItemBtn.type = "button";
    addItemBtn.className = "new-to-do";
    addItemBtn.id = "add-item";
    addItemBtn.value = "add-item";
    addItemBtn.setAttribute("data-category", `${_model__WEBPACK_IMPORTED_MODULE_0__.categoriesArray[i]}`);
    addItemBtn.textContent = "Add Item";

    const deleteIconContainer = document.createElement("div");
    deleteIconContainer.className = "delete-icon";
    deleteIconContainer.setAttribute(
      "data-delete-cat",
      `${_model__WEBPACK_IMPORTED_MODULE_0__.categoriesArray[i]}`
    );
    deleteIconContainer.setAttribute("data-delete-cat-index", i);

    const deleteBtnImg = document.createElement("img");
    deleteBtnImg.src = "../src/assets/imgs/trash.svg";
    deleteBtnImg.setAttribute("data-delete-cat", `${_model__WEBPACK_IMPORTED_MODULE_0__.categoriesArray[i]}`);
    deleteBtnImg.setAttribute("data-delete-cat-index", i);
    deleteBtnImg.setAttribute("focusable", true);
    deleteBtnImg.setAttribute("tabindex", 0);

    _querySelectors__WEBPACK_IMPORTED_MODULE_1__.categorySection.appendChild(categoryCard);
    categoryCard.appendChild(cardCategoryName);
    categoryCard.appendChild(categoryContent);
    categoryCard.appendChild(addItemBtn);
    categoryCard.appendChild(deleteIconContainer);
    deleteIconContainer.appendChild(deleteBtnImg);
  }
}

function replaceCategorySections() {
  // Replaces all category sections on each new category creation to prevent duplicates
  while (_querySelectors__WEBPACK_IMPORTED_MODULE_1__.categorySection.firstChild) {
    _querySelectors__WEBPACK_IMPORTED_MODULE_1__.categorySection.removeChild(_querySelectors__WEBPACK_IMPORTED_MODULE_1__.categorySection.firstChild);
  }
}

function toDoFormDisplay(addBtn) {
  console.log(addBtn);
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.categoryName.textContent = addBtn;

  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.toDoFormContainer.style.display = "initial";
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.toDoFormContainer.scrollTo(0, 0);
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.addToDoBtn.style.display = "initial";
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.editToDoBtn.style.display = "none";
  (0,_dates__WEBPACK_IMPORTED_MODULE_2__.limitDatePicker)();
}

function showFormWithInfo(editBtnIndex, editBtnCat) {
  for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray.length; i++) {
    _querySelectors__WEBPACK_IMPORTED_MODULE_1__.toDoFormContainer.style.display = "initial";
    _querySelectors__WEBPACK_IMPORTED_MODULE_1__.toDoFormContainer.scrollTo(0, 0);
    _querySelectors__WEBPACK_IMPORTED_MODULE_1__.addToDoBtn.style.display = "none";
    _querySelectors__WEBPACK_IMPORTED_MODULE_1__.editToDoBtn.style.display = "initial";
    (0,_dates__WEBPACK_IMPORTED_MODULE_2__.limitDatePicker)();

    if (
      parseInt(editBtnIndex) ===
      parseInt(_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray.indexOf(_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i]))
    ) {
      _querySelectors__WEBPACK_IMPORTED_MODULE_1__.categoryName.textContent = editBtnCat;
      _querySelectors__WEBPACK_IMPORTED_MODULE_1__.toDoTitle.value = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].title;
      _querySelectors__WEBPACK_IMPORTED_MODULE_1__.toDoPriority.value = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].priority;
      _querySelectors__WEBPACK_IMPORTED_MODULE_1__.toDoDescription.value = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].description;
      _querySelectors__WEBPACK_IMPORTED_MODULE_1__.toDoDueDate.value = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].dueDate;
    }

    const entryIndex = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray.indexOf(_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i]);
  }
}

function hideToDoForm() {
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.toDoFormContainer.style.display = "none";
  _querySelectors__WEBPACK_IMPORTED_MODULE_1__.toDoForm.reset();
}

function displayToDoEntry() {
  for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray.length; i++) {
    if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].completedTask === false) {
      const catContentDivs = document.querySelectorAll(".cat-content");

      const toDoEntry = document.createElement("div");
      toDoEntry.className = "to-do-entry";
      toDoEntry.setAttribute("data-entry", i);

      const toDoTitle = document.createElement("h3");
      toDoTitle.className = "title";
      toDoTitle.textContent = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].title;

      const toDoDetailsTitle = document.createElement("div");
      toDoDetailsTitle.className = "details-title";
      toDoDetailsTitle.textContent = "Details:";
      if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].description === "") {
        toDoDetailsTitle.style.display = "none";
      }

      const toDoDetails = document.createElement("p");
      toDoDetails.className = "details";
      toDoDetails.textContent = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].description;

      const toDoDueDateTitle = document.createElement("div");
      toDoDueDateTitle.className = "due-title";
      toDoDueDateTitle.textContent = "Due Date:";

      const toDoDueDate = document.createElement("p");
      toDoDueDate.className = "show-due-date";
      toDoDueDate.textContent = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].dueDate;

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
      deleteIcon.src = "../src/assets/imgs/trash.svg";
      deleteIcon.alt = "Delete Entry";
      deleteIcon.setAttribute("data-item-delete", i);
      deleteIcon.setAttribute("focusable", true);
      deleteIcon.setAttribute("tabindex", 0);

      const priorityDiv = document.createElement("div");
      priorityDiv.className = "priority";

      const priorityColor = document.createElement("div");
      priorityColor.className = "priority-color";
      priorityColor.style.border = "1px solid #535347";
      if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].priority.toLowerCase() === "low") {
        priorityColor.style.backgroundColor = "#e7f24f";
      } else if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].priority.toLowerCase() === "medium") {
        priorityColor.style.backgroundColor = "#eeb250";
      } else if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].priority.toLowerCase === "high") {
        priorityColor.style.backgroundColor = "#bc2702";
      }

      const editIcon = document.createElement("img");
      editIcon.className = "edit-btn";
      editIcon.src = "../src/assets/imgs/edit-button-svgrepo-com.svg";
      editIcon.alt = "Edit Entry";
      editIcon.setAttribute("data-edit", i);
      editIcon.setAttribute("data-edit-cat", _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].category);
      editIcon.setAttribute("focusable", true);
      editIcon.setAttribute("tabindex", 0);

      catContentDivs.forEach((div) => {
        if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].category === div.dataset.content) {
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
  for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray.length; i++) {
    if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].completedTask === false) {
      const dueDateTasksRowDiv = document.createElement("div");
      dueDateTasksRowDiv.className = "due-tasks-row-parent";

      const dueDateTasksRow = document.createElement("div");
      dueDateTasksRow.className = "due-view-row";

      const dueViewDueDate = document.createElement("div");
      dueViewDueDate.className = "due-view-due show-date-due";
      dueViewDueDate.textContent = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].dueDate;
      dueViewDueDate.style.borderRight = "0.2ch solid black";
      dueViewDueDate.style.textAlign = "center";

      const dueDateTitle = document.createElement("div");
      dueDateTitle.className = "grid-cells .due-view-title";
      dueDateTitle.textContent = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].title;

      const dueDateDescription = document.createElement("div");
      dueDateDescription.className = "grid-cells .due-view-description";
      if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].description !== "") {
        dueDateDescription.textContent = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].description;
      } else {
        dueDateDescription.textContent = "----";
      }

      const dueDatePriority = document.createElement("div");
      dueDatePriority.className = "grid-cells .due-view-priority";
      const dueDatePriorityColor = document.createElement("div");
      dueDatePriorityColor.className = "priority-color";
      dueDatePriorityColor.style.border = "1px solid #535347";
      if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].priority.toLowerCase() === "low") {
        dueDatePriorityColor.style.backgroundColor = "#e7f24f";
      } else if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].priority.toLowerCase() === "medium") {
        dueDatePriorityColor.style.backgroundColor = "#eeb250";
      } else if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].priority.toLowerCase === "high") {
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
      dueDateCheckbox.checked = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].completedTask;
      dueDateCheckbox.setAttribute("data-check", i);

      const dueDateDelete = document.createElement("div");
      dueDateDelete.className = "grid-cells .due-view-delete";

      const deleteBtnImg = document.createElement("img");
      deleteBtnImg.src = "../src/assets/imgs/trash.svg";
      deleteBtnImg.setAttribute("data-item-delete", i);

      _querySelectors__WEBPACK_IMPORTED_MODULE_1__.dueDateTaskDiv.appendChild(dueDateTasksRowDiv);
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
  for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray.length; i++) {
    if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].completedTask === false) {
      const priorityTasksRowDiv = document.createElement("div");
      priorityTasksRowDiv.className = "priority-tasks-row-parent";

      const priorityTasksRow = document.createElement("div");
      priorityTasksRow.className = "priority-view-row";

      const priorityViewPriority = document.createElement("div");
      priorityViewPriority.className = "grid-cells .priority-view-priority";
      const priorityViewPriorityColor = document.createElement("div");
      priorityViewPriorityColor.className = "priority-color";
      priorityViewPriorityColor.style.border = "1px solid #535347";
      if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].priority.toLowerCase() === "low") {
        priorityViewPriorityColor.style.backgroundColor = "#e7f24f";
      } else if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].priority.toLowerCase() === "medium") {
        priorityViewPriorityColor.style.backgroundColor = "#eeb250";
      } else if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].priority.toLowerCase === "high") {
        priorityViewPriorityColor.style.backgroundColor = "#bc2702";
      }

      const priorityTitle = document.createElement("div");
      priorityTitle.className = "grid-cells .priority-view-title";
      priorityTitle.textContent = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].title;

      const priorityDescription = document.createElement("div");
      priorityDescription.className = "grid-cells .priority-view-description";
      if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].description !== "") {
        priorityDescription.textContent = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].description;
      } else {
        priorityDescription.textContent = "----";
      }

      const priorityViewDueDate = document.createElement("div");
      priorityViewDueDate.className = "priority-view-due show-date-priority";
      priorityViewDueDate.textContent = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].dueDate;
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
      priorityCheckbox.checked = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].completedTask;
      priorityCheckbox.setAttribute("data-check", i);

      const priorityDelete = document.createElement("div");
      priorityDelete.className = "grid-cells .priority-view-delete";

      const deleteBtnImg = document.createElement("img");
      deleteBtnImg.src = "../src/assets/imgs/trash.svg";
      deleteBtnImg.setAttribute("data-item-delete", i);

      _querySelectors__WEBPACK_IMPORTED_MODULE_1__.priorityTaskDiv.appendChild(priorityTasksRowDiv);
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
  for (let i = 0; i < _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray.length; i++) {
    if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].completedTask === true) {
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
      completedCheckbox.checked = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].completedTask;
      completedCheckbox.setAttribute("data-check", i);

      const gridCellsTitle = document.createElement("div");
      gridCellsTitle.className = "grid-cells .complete-view-title";
      gridCellsTitle.textContent = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].title;

      const gridCellsDescription = document.createElement("div");
      gridCellsDescription.className = "grid-cells .complete-view-description";
      if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].description !== "") {
        gridCellsDescription.textContent = _model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].description;
      } else {
        gridCellsDescription.textContent = "----";
      }

      const gridCellsPriority = document.createElement("div");
      gridCellsPriority.className = "grid-cells .complete-view-priority";

      const gridCellsPriorityColor = document.createElement("div");
      gridCellsPriorityColor.className = "priority-color";
      gridCellsPriorityColor.style.border = "1px solid #535347";
      if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].priority.toLowerCase() === "low") {
        gridCellsPriorityColor.style.backgroundColor = "#e7f24f";
      } else if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].priority.toLowerCase() === "medium") {
        gridCellsPriorityColor.style.backgroundColor = "#eeb250";
      } else if (_model__WEBPACK_IMPORTED_MODULE_0__.toDoItemsArray[i].priority.toLowerCase === "high") {
        gridCellsPriorityColor.style.backgroundColor = "#bc2702";
      }

      const gridCellsDelete = document.createElement("div");
      gridCellsDelete.className = "grid-cells .complete-view-delete";

      const deleteBtnImg = document.createElement("img");
      deleteBtnImg.src = "../src/assets/imgs/trash.svg";
      deleteBtnImg.setAttribute("data-item-delete", i);

      _querySelectors__WEBPACK_IMPORTED_MODULE_1__.completedTasksDiv.appendChild(completedTasksRowDiv);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsMktBQWtFO0FBQzlHLDRDQUE0QyxtTEFBc0U7QUFDbEgsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUZBQXVGLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxNQUFNLE9BQU8sT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxjQUFjLFdBQVcsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFdBQVcsVUFBVSxVQUFVLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLFlBQVksT0FBTyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLFFBQVEsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sUUFBUSxZQUFZLFdBQVcsT0FBTyxRQUFRLFlBQVksYUFBYSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sYUFBYSxjQUFjLFFBQVEsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsT0FBTyxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsTUFBTSxZQUFZLFFBQVEsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9B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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CLHlFQUFlO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxXQUFXLGlFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FB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QSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdExtQztBQUNnQjtBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ007QUFDVztBQUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBRXhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdk9PO0FBQ0E7QUFDUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ1A7QUFDQTtBQUNPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUDtBQUNBO0FBQ087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDdkNtRDs7QUFFM0M7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsV0FBVztBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBLFVBQVUsbURBQU07QUFDaEIsUUFBUSxtREFBTTtBQUNkLFFBQVEsMkRBQWM7QUFDdEI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEMwRDtBQXNCaEM7QUFDZ0I7O0FBRW5DO0FBQ1AsRUFBRSwyREFBYztBQUNoQixFQUFFLDZEQUFnQjtBQUNsQixNQUFNLDZEQUFnQjtBQUN0QixJQUFJLG9EQUFPO0FBQ1gsSUFBSTtBQUNKLElBQUksb0RBQU87QUFDWDtBQUNBOztBQUVPO0FBQ1AsRUFBRSwyREFBYzs7QUFFaEIsY0FBYywyREFBYztBQUM1Qjs7QUFFTztBQUNQLEVBQUUsNERBQWU7QUFDakIsRUFBRSw2REFBZ0I7QUFDbEI7O0FBRU87QUFDUCxFQUFFLDREQUFlO0FBQ2pCLEVBQUUsNERBQWU7QUFDakI7O0FBRU87QUFDUCxFQUFFLDZEQUFnQjtBQUNsQjs7QUFFTztBQUNQLEVBQUUsNkRBQWdCO0FBQ2xCLEVBQUUsNERBQWU7QUFDakIsRUFBRSx3REFBVzs7QUFFYixNQUFNLDREQUFlO0FBQ3JCLElBQUksb0RBQU87QUFDWDtBQUNBOztBQUVPO0FBQ1AsRUFBRSw0REFBZTtBQUNqQixFQUFFLHlEQUFZO0FBQ2QsRUFBRSwyREFBYztBQUNoQixFQUFFLG9EQUFPO0FBQ1Q7O0FBRU87QUFDUCxFQUFFLDJEQUFjOztBQUVoQixjQUFjLG1EQUFlOztBQUU3QixrQkFBa0IsSUFBSSxtREFBZSxTQUFTO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLG1EQUFlLElBQUk7O0FBRXpEO0FBQ0E7QUFDQSx5Q0FBeUMsbURBQWUsSUFBSTs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxtREFBZSxJQUFJO0FBQ25FOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxtREFBZSxJQUFJO0FBQzVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRCxtREFBZSxJQUFJO0FBQ3ZFO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDREQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxTQUFTLDREQUFlO0FBQ3hCLElBQUksNERBQWUsYUFBYSw0REFBZTtBQUMvQztBQUNBOztBQUVPO0FBQ1A7QUFDQSxFQUFFLHlEQUFZOztBQUVkLEVBQUUsOERBQWlCO0FBQ25CLEVBQUUsOERBQWlCO0FBQ25CLEVBQUUsdURBQVU7QUFDWixFQUFFLHdEQUFXO0FBQ2IsRUFBRSx1REFBZTtBQUNqQjs7QUFFTztBQUNQLGtCQUFrQixJQUFJLGtEQUFjLFNBQVM7QUFDN0MsSUFBSSw4REFBaUI7QUFDckIsSUFBSSw4REFBaUI7QUFDckIsSUFBSSx1REFBVTtBQUNkLElBQUksd0RBQVc7QUFDZixJQUFJLHVEQUFlOztBQUVuQjtBQUNBO0FBQ0EsZUFBZSxrREFBYyxTQUFTLGtEQUFjO0FBQ3BEO0FBQ0EsTUFBTSx5REFBWTtBQUNsQixNQUFNLHNEQUFTLFNBQVMsa0RBQWM7QUFDdEMsTUFBTSx5REFBWSxTQUFTLGtEQUFjO0FBQ3pDLE1BQU0sNERBQWUsU0FBUyxrREFBYztBQUM1QyxNQUFNLHdEQUFXLFNBQVMsa0RBQWM7QUFDeEM7O0FBRUEsdUJBQXVCLGtEQUFjLFNBQVMsa0RBQWM7QUFDNUQ7QUFDQTs7QUFFTztBQUNQLEVBQUUsOERBQWlCO0FBQ25CLEVBQUUscURBQVE7QUFDVjs7QUFFTztBQUNQLGtCQUFrQixJQUFJLGtEQUFjLFNBQVM7QUFDN0MsUUFBUSxrREFBYztBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhCQUE4QixrREFBYzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrREFBYztBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0RBQWM7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLGtEQUFjOztBQUU5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrREFBYztBQUN4QjtBQUNBLFFBQVEsU0FBUyxrREFBYztBQUMvQjtBQUNBLFFBQVEsU0FBUyxrREFBYztBQUMvQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsa0RBQWM7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBLFlBQVksa0RBQWM7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFTztBQUNQLGtCQUFrQixJQUFJLGtEQUFjLFNBQVM7QUFDN0MsUUFBUSxrREFBYztBQUN0QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1DQUFtQyxrREFBYztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQ0FBaUMsa0RBQWM7O0FBRS9DO0FBQ0E7QUFDQSxVQUFVLGtEQUFjO0FBQ3hCLHlDQUF5QyxrREFBYztBQUN2RCxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxrREFBYztBQUN4QjtBQUNBLFFBQVEsU0FBUyxrREFBYztBQUMvQjtBQUNBLFFBQVEsU0FBUyxrREFBYztBQUMvQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0RBQWM7QUFDOUM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTSwyREFBYztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRU87QUFDUCxrQkFBa0IsSUFBSSxrREFBYyxTQUFTO0FBQzdDLFFBQVEsa0RBQWM7QUFDdEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGtEQUFjO0FBQ3hCO0FBQ0EsUUFBUSxTQUFTLGtEQUFjO0FBQy9CO0FBQ0EsUUFBUSxTQUFTLGtEQUFjO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQyxrREFBYzs7QUFFaEQ7QUFDQTtBQUNBLFVBQVUsa0RBQWM7QUFDeEIsMENBQTBDLGtEQUFjO0FBQ3hELFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBd0Msa0RBQWM7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGtEQUFjO0FBQy9DOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLE1BQU0sNERBQWU7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVPO0FBQ1Asa0JBQWtCLElBQUksa0RBQWMsU0FBUztBQUM3QyxRQUFRLGtEQUFjO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtEQUFjO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsa0RBQWM7O0FBRWpEO0FBQ0E7QUFDQSxVQUFVLGtEQUFjO0FBQ3hCLDJDQUEyQyxrREFBYztBQUN6RCxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0RBQWM7QUFDeEI7QUFDQSxRQUFRLFNBQVMsa0RBQWM7QUFDL0I7QUFDQSxRQUFRLFNBQVMsa0RBQWM7QUFDL0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNLDhEQUFpQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ppQmU7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNBZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNWYWxpZC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9jb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL21vZGVsLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvcXVlcnlTZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy90YWJDb250cm9sLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvdmlldy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9hc3NldHMvZm9udHMvbGFuY2Vsb3QtdjIzLWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2Fzc2V0cy9mb250cy9oYXBweS1tb25rZXktdjE0LWxhdGluLXJlZ3VsYXIud29mZjJcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBsYW5jZWxvdC1yZWd1bGFyIC0gbGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJMYW5jZWxvdFwiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcIndvZmYyXCIpO1xufVxuXG4vKiBoYXBweS1tb25rZXktcmVndWxhciAtIGxhdGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiSGFwcHkgTW9ua2V5XCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSlcbiAgICBmb3JtYXQoXCJ3b2ZmMlwiKTtcbn1cblxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIC0tbWFpbi1iZ3JvdW5kLWNvbG9yOiAjZmZlOGQ2O1xuICAtLWhlYWQtZm9vdC1jb2xvcjogI2NjYTU5MDtcbiAgLS1pbmFjdGl2ZS10YWItY29sb3I6ICNiN2I3YTQ7XG4gIC0tZm9ybS1ncmVlbi1jb2xvcjogIzhiOGI3NjtcbiAgLS10by1kby1lbnRyeS1jb2xvcjogI2Y4ZDZiYztcbiAgLS1jaGVja21hcmstY29sb3I6ICM1MzUzNDc7XG4gIC0tbG93LXByaW9yaXR5LWNvbG9yOiAjZTdmMjRmO1xuICAtLW1lZGl1bS1wcmlvcml0eS1jb2xvcjogI2VlYjI1MDtcbiAgLS1oaWdoLXByaW9yaXR5LWNvbG9yOiAjYmMyNzAyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgNy41ZnIgMC44ZnI7XG59XG5cbi8qIEhlYWRlciAqL1xuXG4uaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1mb290LWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwiTGFuY2Vsb3RcIjtcbiAgZm9udC1zaXplOiAyLjhjaDtcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDAuN2ZyO1xuXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oZWFkZXIgaDEge1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxY2g7XG59XG5cbi5oZWFkZXIgYnV0dG9uLnNob3ctZm9ybS1idG4sXG4uaGVhZGVyIGJ1dHRvbi50YWItYnRuIHtcbiAgaGVpZ2h0OiA4Y2g7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiA1Y2g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWQtZm9vdC1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlciBidXR0b24uc2hvdy1mb3JtLWJ0bjpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XG59XG5cbi8qIE1haW4gKi9cblxuLm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xuICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XG59XG5cbi8qIE1haW46IFNpZGUtTmF2ICovXG5cbi5jYXQtZm9ybS12aXNpYmxlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zaWRlLW5hdiB7XG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5hY3RpdmUtdGFiLWNvbG9yKTtcbn1cblxuLmZvcm1zLWJveCB7XG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAgbWFyZ2luOiAwIDJjaDtcbn1cblxuLmNvbnRlbnQtYm94IHtcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICBtYXJnaW46IDAgMmNoO1xufVxuXG4udGFiLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluYWN0aXZlLXRhYi1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIkxhbmNlbG90XCI7XG4gIGZvbnQtc2l6ZTogM2NoO1xuICBib3JkZXI6IG5vbmU7XG5cbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTBjaDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRuLWN0cmw6Zm9jdXMge1xuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XG59XG5cbi5idG4tY3RybC0tYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ3JvdW5kLWNvbG9yKTtcbn1cblxuLnRhYi1idG46bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi8qIE1haW46IFRhYiBvcGVuaW5nIG1lc3NhZ2VzICovXG4uYWRkLWNhdC1tc2cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLyogTWFpbjogVG8tRG8tRm9ybSAqL1xuLmZvcm0tZGl2LFxuLmVkaXQtZm9ybS1kaXYge1xuICBkaXNwbGF5OiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEuNWNoO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiA1Y2g7XG4gIHBhZGRpbmc6IDVjaDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5hY3RpdmUtdGFiLWNvbG9yKTtcbiAgYm9yZGVyLXJhZGl1czogM2NoO1xuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XG4gIG91dGxpbmUtb2Zmc2V0OiAtMmNoO1xufVxuXG4ucmVxLW1zZyB7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xuICBmb250LXNpemU6IDIuOGNoO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEuNWNoO1xufVxuXG4uZm9ybS1saW5lLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mb3JtLWxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jYXRlZ29yeS1uYW1lIHtcbiAgbWFyZ2luLXRvcDogMS41Y2g7XG4gIGZvbnQtc2l6ZTogMi4yY2g7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xufVxuXG4uaW5zdHJ1Y3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgbWFyZ2luLXRvcDogLTEuNGNoO1xufVxuXG4udGl0bGUtbXNnOjpiZWZvcmUge1xuICBjb250ZW50OiBcIkFkZCBhIHRpdGxlLlwiO1xuICBmb250LWZhbWlseTogXCJIYXBweSBNb25rZXlcIjtcbiAgZm9udC1zaXplOiAxLjhjaDtcbn1cblxuLnByaW9yaXR5LW1zZzo6YmVmb3JlIHtcbiAgY29udGVudDogXCJDaG9vc2UgYSBwcmlvcml0eSBsZXZlbC5cIjtcbiAgZm9udC1mYW1pbHk6IFwiSGFwcHkgTW9ua2V5XCI7XG4gIGZvbnQtc2l6ZTogMS44Y2g7XG59XG5cbi5kZXNjcmlwdGlvbi1tc2c6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiQWRkIGRldGFpbHMgKG9wdGlvbmFsKS5cIjtcbiAgZm9udC1mYW1pbHk6IFwiSGFwcHkgTW9ua2V5XCI7XG4gIGZvbnQtc2l6ZTogMS44Y2g7XG59XG5cbi5kdWUtZGF0ZS1tc2c6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiU2VsZWN0IGEgZGF0ZSBhbmQgdGltZS5cIjtcbiAgZm9udC1mYW1pbHk6IFwiSGFwcHkgTW9ua2V5XCI7XG4gIGZvbnQtc2l6ZTogMS44Y2g7XG59XG5cbi5idG4tbGluZSxcbi5zZWxlY3QtYnRuLWxpbmUsXG4uY2F0LWJ0bi1saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzY2g7XG4gIG1hcmdpbi10b3A6IDRjaDtcbn1cblxuLmZvcm0tbGluZSA+IGxhYmVsLFxuLmNhdGVnb3J5LWxpbmUgPiBsYWJlbCxcbi5jb21wbGV0ZS1jb250YWluZXIgPiBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1Y2g7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xuICBmb250LXNpemU6IDIuMTVjaDtcbiAgbWFyZ2luLXRvcDogMS41Y2g7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLFxuaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLFxuLnRhc2stcHJpb3JpdHkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogM2NoO1xuICB3aWR0aDogMTAlO1xuICBwYWRkaW5nLWxlZnQ6IDFjaDtcbiAgZm9udC1mYW1pbHk6IFwiSGFwcHkgTW9ua2V5XCI7XG4gIGZvbnQtc2l6ZTogMS45Y2g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDFjaDtcbiAgYm9yZGVyOiAwLjJjaCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcbiAgbWFyZ2luLXRvcDogMS41Y2g7XG59XG5cbnRleHRhcmVhIHtcbiAgZmxleDogMTtcbiAgcGFkZGluZy1sZWZ0OiAxY2g7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xuICBmb250LXNpemU6IDEuOWNoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxY2g7XG4gIGJvcmRlcjogMC4yY2ggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzLFxudGV4dGFyZWE6Zm9jdXMsXG5pbnB1dFt0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIl06Zm9jdXMsXG4udGFzay1wcmlvcml0eTpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcbn1cblxuaW5wdXRbdHlwZT1cInRleHRcIl06dmFsaWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xufVxuXG5idXR0b24uYWRkLXRvLWRvLFxuYnV0dG9uLmVkaXQtdG8tZG8sXG5idXR0b24uY2FuY2VsLWNhdGVnb3J5LFxuYnV0dG9uLmNhbmNlbC10by1kbyB7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xuICBmb250LXNpemU6IDEuOGNoO1xuICB3aWR0aDogOGNoO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xuICBwYWRkaW5nOiAwLjhjaDtcbiAgYm9yZGVyLXJhZGl1czogM2NoO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkLWZvb3QtY29sb3IpO1xufVxuXG5idXR0b24uYWRkLXRvLWRvOmhvdmVyLFxuYnV0dG9uLmVkaXQtdG8tZG86aG92ZXIsXG5idXR0b24uY2FuY2VsLWNhdGVnb3J5OmhvdmVyLFxuYnV0dG9uLmNhbmNlbC10by1kbzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbi5hZGQtdG8tZG86Zm9jdXMsXG5idXR0b24uZWRpdC10by1kbzpmb2N1cyxcbmJ1dHRvbi5jYW5jZWwtY2F0ZWdvcnk6Zm9jdXMsXG5idXR0b24uY2FuY2VsLXRvLWRvOmZvY3VzIHtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcbn1cblxuLyogTWFpbjogVGFiIENvbnRlbnQgKi9cblxuLnRhYi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xuICBmb250LWZhbWlseTogXCJIYXBweSBNb25rZXlcIjtcbiAgbWFyZ2luLXRvcDogMmNoO1xuICBtYXJnaW4tbGVmdDogMmNoO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGFiLWNvbnRlbnQtLWFjdGl2ZSB7XG4gIGRpc3BsYXk6IGluaXRpYWw7XG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbiAgZm9udC1mYW1pbHk6IFwiSGFwcHkgTW9ua2V5XCI7XG4gIG1hcmdpbi10b3A6IDJjaDtcbiAgbWFyZ2luLWxlZnQ6IDJjaDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLyogTWFpbjogQ2F0ZWdvcnkgVmlldyAqL1xuXG4vKiBDYXRlZ29yeSBWaWV3OiBOZXcgQ2F0ZWdvcnkgRm9ybSAqL1xuXG4uc2VsZWN0LWZvcm0tY29udGFpbmVyLFxuLmNyZWF0ZS1jYXQtd2FybmluZy1kaXYsXG4uY2F0LWZvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLnNlbGVjdC1mb3JtLFxuLmNyZWF0ZS1jYXQtd2FybmluZyxcbi5jYXRlZ29yeS1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWZvb3QtY29sb3IpO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICB3aWR0aDogNTBjaDtcbiAgbWFyZ2luLXRvcDogNWNoO1xuICBwYWRkaW5nOiAxLjVjaDtcbiAgYm9yZGVyLXJhZGl1czogMWNoO1xufVxuXG4uc2VsZWN0LWFzayxcbi5tdXN0LWNyZWF0ZS1jYXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIkxhbmNlbG90XCI7XG59XG5cbmlucHV0W3R5cGU9XCJ0ZXh0XCJdLmNhdGVnb3J5IHtcbiAgbWFyZ2luLWxlZnQ6IC01Y2g7XG4gIHdpZHRoOiA3MCU7XG59XG5cbi5zZWxlY3QtYnRuLWxpbmUsXG4uY2F0LWJ0bi1saW5lIHtcbiAgbWFyZ2luLXRvcDogMmNoO1xufVxuXG5idXR0b24uYWRkLWNhdGVnb3J5LFxuYnV0dG9uLmFncmVlLWJ0bixcbmJ1dHRvbi5zZWxlY3QtdG8tZG8tYnRuIHtcbiAgZm9udC1mYW1pbHk6IFwiSGFwcHkgTW9ua2V5XCI7XG4gIGZvbnQtc2l6ZTogMS44Y2g7XG4gIHdpZHRoOiAyMGNoO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xuICBwYWRkaW5nOiAwLjhjaDtcbiAgYm9yZGVyLXJhZGl1czogM2NoO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkLWZvb3QtY29sb3IpO1xufVxuXG5idXR0b24uYWRkLWNhdGVnb3J5OmhvdmVyLFxuYnV0dG9uLmFncmVlLWJ0bjpob3ZlcixcbmJ1dHRvbi5zZWxlY3QtdG8tZG8tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYnV0dG9uLmFkZC1jYXRlZ29yeTpmb2N1cyxcbmJ1dHRvbi5hZ3JlZS1idG46Zm9jdXMsXG5idXR0b24uc2VsZWN0LXRvLWRvLWJ0bjpmb2N1cyB7XG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcbn1cblxuLyogQ2F0ZWdvcnkgVmlldzogTmV3IENhdGVnb3J5IFNlY3Rpb24gKi9cbi5jYXQtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDRjaDtcbn1cblxuLmNhdC1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFwiTGFuY2Vsb3RcIjtcbiAgZm9udC1zaXplOiAyY2g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluYWN0aXZlLXRhYi1jb2xvcik7XG4gIHdpZHRoOiAzMGNoO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDNjaDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMWNoO1xuICBib3JkZXItcmFkaXVzOiAxY2g7XG4gIG1hcmdpbi1ib3R0b206IDJjaDtcbn1cblxuLmNhdC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmV3LXRvLWRvIHtcbiAgZm9udC1mYW1pbHk6IFwiSGFwcHkgTW9ua2V5XCI7XG4gIGZvbnQtc2l6ZTogMmNoO1xuICB3aWR0aDogMTBjaDtcbiAgaGVpZ2h0OiAzY2g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAyY2g7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWQtZm9vdC1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ldy10by1kbzpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XG59XG5cbi5uZXctdG8tZG86Zm9jdXMge1xuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XG59XG5cbi5jYXQtY2FyZCAuZGVsZXRlLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgbWFyZ2luLXJpZ2h0OiAxY2g7XG4gIG1hcmdpbi1ib3R0b206IDAuNWNoO1xufVxuXG4uY2F0LWNhcmQgLmRlbGV0ZS1pY29uID4gaW1nIHtcbiAgd2lkdGg6IDJjaDtcbn1cblxuLmNhdC1jYXJkIC5kZWxldGUtaWNvbiA+IGltZzpob3ZlciB7XG4gIHdpZHRoOiAyLjJjaDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2F0LWNhcmQgLmRlbGV0ZS1pY29uID4gaW1nOmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMi44Y2g7XG4gIHBhZGRpbmc6IDAuNWNoO1xufVxuXG4vKiBDYXRlZ29yeSBTZWN0aW9uOiBOZXcgVG8gRG8gSXRlbSAqL1xuXG4udG8tZG8tZW50cnkge1xuICBtYXJnaW46IDFjaCAwIDFjaCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10by1kby1lbnRyeS1jb2xvcik7XG4gIGJvcmRlci1yYWRpdXM6IDFjaDtcbiAgcGFkZGluZzogMWNoIDAgMWNoIDA7XG59XG5cbi50by1kby1lbnRyeSAudGl0bGUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgZm9udC1zaXplOiAyLjZjaDtcbiAgcGFkZGluZy1ib3R0b206IDFjaDtcbn1cblxuLmRldGFpbHMtdGl0bGUsXG4uZHVlLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMi41Y2g7XG4gIG1hcmdpbi1sZWZ0OiAxLjVjaDtcbn1cblxuLmRldGFpbHMsXG4uc2hvdy1kdWUtZGF0ZSB7XG4gIHBhZGRpbmctYm90dG9tOiAxY2g7XG4gIGZvbnQtZmFtaWx5OiBcIkhhcHB5IE1vbmtleVwiO1xufVxuXG4udG8tZG8tZW50cnkgPiBsYWJlbCB7XG4gIHdpZHRoOiAxMGNoO1xuICBtYXJnaW4tYm90dG9tOiAxY2g7XG59XG5cbi5jb21wbGV0ZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuN2NoO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0uY29tcGxldGUge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICAtby1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICBoZWlnaHQ6IDIuNWNoO1xuICB3aWR0aDogMi41Y2g7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xuICBib3JkZXItcmFkaXVzOiAxY2g7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0uY29tcGxldGU6Zm9jdXMge1xuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5jb21wbGV0ZTpjaGVja2VkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XG59XG5cbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXS5jb21wbGV0ZTpjaGVja2VkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFwyNzEzXCI7XG4gIGNvbG9yOiB2YXIoLS1jaGVja21hcmstY29sb3IpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTAuNGNoO1xuICBmb250LXNpemU6IDRjaDtcbn1cblxuLnRvLWRvLWVudHJ5IC5kZWxldGUtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDIuNWNoO1xufVxuXG4udG8tZG8tZW50cnkgLmRlbGV0ZS1pY29uID4gaW1nIHtcbiAgd2lkdGg6IDJjaDtcbiAgbWFyZ2luLXRvcDogNGNoO1xufVxuXG4udG8tZG8tZW50cnkgLmRlbGV0ZS1pY29uID4gaW1nOmhvdmVyIHtcbiAgd2lkdGg6IDIuMmNoO1xuICBtYXJnaW4tdG9wOiAyLjFjaDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2F0LWNhcmQgLmRlbGV0ZS1pY29uID4gaW1nOmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMi44Y2g7XG4gIGhlaWdodDogM2NoO1xuICBwYWRkaW5nOiAwLjVjaDtcbn1cblxuLnRvLWRvLWVudHJ5IC5wcmlvcml0eSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNjaDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDJjaDtcbiAgcGFkZGluZy1yaWdodDogMmNoO1xufVxuXG4udG8tZG8tZW50cnkgLnByaW9yaXR5LWNvbG9yLFxuLmdyaWQtY2VsbHMgLnByaW9yaXR5LWNvbG9yIHtcbiAgd2lkdGg6IDIuMmNoO1xuICBoZWlnaHQ6IDIuMmNoO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcbn1cblxuLnRvLWRvLWVudHJ5IC5wcmlvcml0eSA+IGltZyB7XG4gIHdpZHRoOiAyLjJjaDtcbn1cblxuLnRvLWRvLWVudHJ5IC5wcmlvcml0eSA+IGltZzpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDIuOGNoO1xuICBwYWRkaW5nOiAwLjVjaDtcbn1cblxuLyogTWFpbjogRHVlIERhdGUgVmlldyAqL1xuXG4uYnktZHVlLWRhdGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogTWFpbjogRHVlIERhdGUsIFByaW9yaXR5IGFuZCBDb21wbGV0ZWQgVGFza3MgVmlldyAtIEdyaWQgU3R5bGluZyAqL1xuLmR1ZS12aWV3LWRpdixcbi5wcmlvcml0eS12aWV3LWRpdixcbi5jb21wbGV0ZWQtdmlldy1kaXYge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XG4gIG1hcmdpbi1yaWdodDogMmNoO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmR1ZS10YXNrLWhlYWRlcixcbi5wcmlvcml0eS10YXNrLWhlYWRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XG59XG5cbi5jb21wbGV0ZWQtdGFzay1oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xufVxuXG4uZHVlLXRhc2staGVhZGVyLFxuLnByaW9yaXR5LXRhc2staGVhZGVyLFxuLmNvbXBsZXRlZC10YXNrLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDAuM2NoIHNvbGlkIGJsYWNrO1xuICBmb250LWZhbWlseTogXCJsYW5jZWxvdFwiO1xuICBmb250LXNpemU6IDJjaDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1ib3R0b206IDFjaDtcbiAgbWFyZ2luLXJpZ2h0OiAyY2g7XG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XG59XG5cbi5kdWUtdGFza3Mtcm93LXBhcmVudCxcbi5wcmlvcml0eS10YXNrcy1yb3ctcGFyZW50LFxuLmNvbXBsZXRlZC10YXNrcy1yb3ctcGFyZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1yaWdodDogMmNoO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uZHVlLXZpZXctcm93LFxuLnByaW9yaXR5LXZpZXctcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcbn1cblxuLmNvbXBsZXRlZC10YXNrcy1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xufVxuXG4uZHVlLXZpZXctcm93LFxuLnByaW9yaXR5LXZpZXctcm93LFxuLmNvbXBsZXRlZC10YXNrcy1yb3cge1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xuICBwYWRkaW5nLXRvcDogMWNoO1xuICBwYWRkaW5nLWJvdHRvbTogMWNoO1xuICBmb250LWZhbWlseTogXCJIYXBweSBNb25rZXlcIjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG4uaGVhZGVycyxcbi5ncmlkLWNlbGxzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xufVxuXG4uaGVhZGVyczpub3QoOmxhc3Qtb2YtdHlwZSksXG4uZ3JpZC1jZWxsczpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJpZ2h0OiAwLjJjaCBzb2xpZCBibGFjaztcbn1cblxuLmR1ZS12aWV3LWR1ZSxcbi5wcmlvcml0eS12aWV3LXByaW9yaXR5IHtcbiAgZ3JpZC1jb2x1bW46IDE7XG59XG5cbi5kdWUtdmlldy10aXRsZSxcbi5wcmlvcml0eS12aWV3LXRpdGxlIHtcbiAgZ3JpZC1jb2x1bW46IDI7XG59XG5cbi5kdWUtdmlldy1kZXNjcmlwdGlvbixcbi5wcmlvcml0eS12aWV3LWRlc2NyaXB0aW9uIHtcbiAgZ3JpZC1jb2x1bW46IDM7XG59XG5cbi5kdWUtdmlldy1wcmlvcml0eSxcbi5wcmlvcml0eS12aWV3LWR1ZSB7XG4gIGdyaWQtY29sdW1uOiA0O1xufVxuXG4uZHVlLXZpZXctY29tcGxldGUsXG4ucHJpb3JpdHktdmlldy1jb21wbGV0ZSB7XG4gIGdyaWQtY29sdW1uOiA1O1xufVxuXG4uZHVlLXZpZXctZGVsZXRlLFxuLnByaW9yaXR5LXZpZXctZGVsZXRlIHtcbiAgZ3JpZC1jb2x1bW46IDY7XG59XG5cbi5jb21wbGV0ZS12aWV3LWNvbXBsZXRlIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG59XG5cbi5jb21wbGV0ZS12aWV3LXRpdGxlIHtcbiAgZ3JpZC1jb2x1bW46IDI7XG59XG5cbi5jb21wbGV0ZS12aWV3LWRlc2NyaXB0aW9uIHtcbiAgZ3JpZC1jb2x1bW46IDM7XG59XG5cbi5jb21wbGV0ZS12aWV3LXByaW9yaXR5IHtcbiAgZ3JpZC1jb2x1bW46IDQ7XG59XG5cbi5jb21wbGV0ZS12aWV3LWRlbGV0ZSB7XG4gIGdyaWQtY29sdW1uOiA1O1xufVxuXG4uZ3JpZC1jZWxscyAucHJpb3JpdHktY29sb3Ige1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMi4yY2g7XG4gIGhlaWdodDogMi4yY2g7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uZ3JpZC1jZWxscyA+IGltZyB7XG4gIHdpZHRoOiAyY2g7XG59XG5cbi5ncmlkLWNlbGxzID4gaW1nOmhvdmVyIHtcbiAgd2lkdGg6IDIuMmNoO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIEZvb3RlciAqL1xuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWZvb3QtY29sb3IpO1xuICBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDI7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgZm9udC1mYW1pbHk6IFwiSGFwcHkgTW9ua2V5XCI7XG59XG5cbmZvb3RlciBwIHtcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcbiAganVzdGlmeS1zZWxmOiBlbmQ7XG4gIG1hcmdpbi1yaWdodDogMWNoO1xufVxuXG5mb290ZXIgYTpmb2N1cyB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcbn1cblxuZm9vdGVyIGltZyB7XG4gIGhlaWdodDogMy41Y2g7XG4gIG1hcmdpbi1sZWZ0OiAxY2g7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsNkJBQTZCO0FBQzdCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsNERBQTJFO0FBQzdFOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCO21CQUNpQjtBQUNuQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLHNCQUFzQjs7RUFFdEIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUNBQW1DO0FBQ3JDOztBQUVBLFdBQVc7O0FBRVg7RUFDRSx3Q0FBd0M7RUFDeEMsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQix3QkFBd0I7O0VBRXhCLGFBQWE7RUFDYixnQ0FBZ0M7O0VBRWhDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSwyQ0FBMkM7RUFD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bGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGFuY2Vsb3RcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9sYW5jZWxvdC12MjMtbGF0aW4tcmVndWxhci53b2ZmMlxcXCIpIGZvcm1hdChcXFwid29mZjJcXFwiKTtcXG59XFxuXFxuLyogaGFwcHktbW9ua2V5LXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXBweSBNb25rZXlcXFwiO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHNyYzogdXJsKFxcXCIuL2Fzc2V0cy9mb250cy9oYXBweS1tb25rZXktdjE0LWxhdGluLXJlZ3VsYXIud29mZjJcXFwiKVxcbiAgICBmb3JtYXQoXFxcIndvZmYyXFxcIik7XFxufVxcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICAtLW1haW4tYmdyb3VuZC1jb2xvcjogI2ZmZThkNjtcXG4gIC0taGVhZC1mb290LWNvbG9yOiAjY2NhNTkwO1xcbiAgLS1pbmFjdGl2ZS10YWItY29sb3I6ICNiN2I3YTQ7XFxuICAtLWZvcm0tZ3JlZW4tY29sb3I6ICM4YjhiNzY7XFxuICAtLXRvLWRvLWVudHJ5LWNvbG9yOiAjZjhkNmJjO1xcbiAgLS1jaGVja21hcmstY29sb3I6ICM1MzUzNDc7XFxuICAtLWxvdy1wcmlvcml0eS1jb2xvcjogI2U3ZjI0ZjtcXG4gIC0tbWVkaXVtLXByaW9yaXR5LWNvbG9yOiAjZWViMjUwO1xcbiAgLS1oaWdoLXByaW9yaXR5LWNvbG9yOiAjYmMyNzAyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA3LjVmciAwLjhmcjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWZvb3QtY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYW5jZWxvdFxcXCI7XFxuICBmb250LXNpemU6IDIuOGNoO1xcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDAuN2ZyO1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhlYWRlciBoMSB7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDFjaDtcXG59XFxuXFxuLmhlYWRlciBidXR0b24uc2hvdy1mb3JtLWJ0bixcXG4uaGVhZGVyIGJ1dHRvbi50YWItYnRuIHtcXG4gIGhlaWdodDogOGNoO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiA1Y2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWZvb3QtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaGVhZGVyIGJ1dHRvbi5zaG93LWZvcm0tYnRuOmZvY3VzIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XFxufVxcblxcbi8qIE1haW4gKi9cXG5cXG4ubWFpbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xcbiAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDVmcjtcXG59XFxuXFxuLyogTWFpbjogU2lkZS1OYXYgKi9cXG5cXG4uY2F0LWZvcm0tdmlzaWJsZSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNpZGUtbmF2IHtcXG4gIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluYWN0aXZlLXRhYi1jb2xvcik7XFxufVxcblxcbi5mb3Jtcy1ib3gge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBtYXJnaW46IDAgMmNoO1xcbn1cXG5cXG4uY29udGVudC1ib3gge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBtYXJnaW46IDAgMmNoO1xcbn1cXG5cXG4udGFiLWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbmFjdGl2ZS10YWItY29sb3IpO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJMYW5jZWxvdFxcXCI7XFxuICBmb250LXNpemU6IDNjaDtcXG4gIGJvcmRlcjogbm9uZTtcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMGNoO1xcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4IHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XFxuXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5idG4tY3RybDpmb2N1cyB7XFxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxufVxcblxcbi5idG4tY3RybC0tYWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XFxufVxcblxcbi50YWItYnRuOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG59XFxuXFxuLyogTWFpbjogVGFiIG9wZW5pbmcgbWVzc2FnZXMgKi9cXG4uYWRkLWNhdC1tc2cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogTWFpbjogVG8tRG8tRm9ybSAqL1xcbi5mb3JtLWRpdixcXG4uZWRpdC1mb3JtLWRpdiB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTA7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICBtYXJnaW46IGF1dG87XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMS41Y2g7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDVjaDtcXG4gIHBhZGRpbmc6IDVjaDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWluYWN0aXZlLXRhYi1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAzY2g7XFxuICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxuICBvdXRsaW5lLW9mZnNldDogLTJjaDtcXG59XFxuXFxuLnJlcS1tc2cge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXBweSBNb25rZXlcXFwiO1xcbiAgZm9udC1zaXplOiAyLjhjaDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDEuNWNoO1xcbn1cXG5cXG4uZm9ybS1saW5lLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9ybS1saW5lIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5jYXRlZ29yeS1uYW1lIHtcXG4gIG1hcmdpbi10b3A6IDEuNWNoO1xcbiAgZm9udC1zaXplOiAyLjJjaDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFwcHkgTW9ua2V5XFxcIjtcXG59XFxuXFxuLmluc3RydWN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gIG1hcmdpbi10b3A6IC0xLjRjaDtcXG59XFxuXFxuLnRpdGxlLW1zZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJBZGQgYSB0aXRsZS5cXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXBweSBNb25rZXlcXFwiO1xcbiAgZm9udC1zaXplOiAxLjhjaDtcXG59XFxuXFxuLnByaW9yaXR5LW1zZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJDaG9vc2UgYSBwcmlvcml0eSBsZXZlbC5cXFwiO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXBweSBNb25rZXlcXFwiO1xcbiAgZm9udC1zaXplOiAxLjhjaDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uLW1zZzo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJBZGQgZGV0YWlscyAob3B0aW9uYWwpLlxcXCI7XFxuICBmb250LWZhbWlseTogXFxcIkhhcHB5IE1vbmtleVxcXCI7XFxuICBmb250LXNpemU6IDEuOGNoO1xcbn1cXG5cXG4uZHVlLWRhdGUtbXNnOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlNlbGVjdCBhIGRhdGUgYW5kIHRpbWUuXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFwcHkgTW9ua2V5XFxcIjtcXG4gIGZvbnQtc2l6ZTogMS44Y2g7XFxufVxcblxcbi5idG4tbGluZSxcXG4uc2VsZWN0LWJ0bi1saW5lLFxcbi5jYXQtYnRuLWxpbmUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAzY2g7XFxuICBtYXJnaW4tdG9wOiA0Y2g7XFxufVxcblxcbi5mb3JtLWxpbmUgPiBsYWJlbCxcXG4uY2F0ZWdvcnktbGluZSA+IGxhYmVsLFxcbi5jb21wbGV0ZS1jb250YWluZXIgPiBsYWJlbCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTVjaDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFwcHkgTW9ua2V5XFxcIjtcXG4gIGZvbnQtc2l6ZTogMi4xNWNoO1xcbiAgbWFyZ2luLXRvcDogMS41Y2g7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG5pbnB1dFt0eXBlPVxcXCJkYXRldGltZS1sb2NhbFxcXCJdLFxcbi50YXNrLXByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDNjaDtcXG4gIHdpZHRoOiAxMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDFjaDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFwcHkgTW9ua2V5XFxcIjtcXG4gIGZvbnQtc2l6ZTogMS45Y2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogMWNoO1xcbiAgYm9yZGVyOiAwLjJjaCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcXG4gIG1hcmdpbi10b3A6IDEuNWNoO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZy1sZWZ0OiAxY2g7XFxuICBmb250LWZhbWlseTogXFxcIkhhcHB5IE1vbmtleVxcXCI7XFxuICBmb250LXNpemU6IDEuOWNoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ3JvdW5kLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFjaDtcXG4gIGJvcmRlcjogMC4yY2ggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl06Zm9jdXMsXFxudGV4dGFyZWE6Zm9jdXMsXFxuaW5wdXRbdHlwZT1cXFwiZGF0ZXRpbWUtbG9jYWxcXFwiXTpmb2N1cyxcXG4udGFzay1wcmlvcml0eTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXTp2YWxpZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xcbn1cXG5cXG5idXR0b24uYWRkLXRvLWRvLFxcbmJ1dHRvbi5lZGl0LXRvLWRvLFxcbmJ1dHRvbi5jYW5jZWwtY2F0ZWdvcnksXFxuYnV0dG9uLmNhbmNlbC10by1kbyB7XFxuICBmb250LWZhbWlseTogXFxcIkhhcHB5IE1vbmtleVxcXCI7XFxuICBmb250LXNpemU6IDEuOGNoO1xcbiAgd2lkdGg6IDhjaDtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xcbiAgcGFkZGluZzogMC44Y2g7XFxuICBib3JkZXItcmFkaXVzOiAzY2g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1oZWFkLWZvb3QtY29sb3IpO1xcbn1cXG5cXG5idXR0b24uYWRkLXRvLWRvOmhvdmVyLFxcbmJ1dHRvbi5lZGl0LXRvLWRvOmhvdmVyLFxcbmJ1dHRvbi5jYW5jZWwtY2F0ZWdvcnk6aG92ZXIsXFxuYnV0dG9uLmNhbmNlbC10by1kbzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLmFkZC10by1kbzpmb2N1cyxcXG5idXR0b24uZWRpdC10by1kbzpmb2N1cyxcXG5idXR0b24uY2FuY2VsLWNhdGVnb3J5OmZvY3VzLFxcbmJ1dHRvbi5jYW5jZWwtdG8tZG86Zm9jdXMge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxuICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxufVxcblxcbi8qIE1haW46IFRhYiBDb250ZW50ICovXFxuXFxuLnRhYi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICBmb250LWZhbWlseTogXFxcIkhhcHB5IE1vbmtleVxcXCI7XFxuICBtYXJnaW4tdG9wOiAyY2g7XFxuICBtYXJnaW4tbGVmdDogMmNoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YWItY29udGVudC0tYWN0aXZlIHtcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDM7XFxuICBmb250LWZhbWlseTogXFxcIkhhcHB5IE1vbmtleVxcXCI7XFxuICBtYXJnaW4tdG9wOiAyY2g7XFxuICBtYXJnaW4tbGVmdDogMmNoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIE1haW46IENhdGVnb3J5IFZpZXcgKi9cXG5cXG4vKiBDYXRlZ29yeSBWaWV3OiBOZXcgQ2F0ZWdvcnkgRm9ybSAqL1xcblxcbi5zZWxlY3QtZm9ybS1jb250YWluZXIsXFxuLmNyZWF0ZS1jYXQtd2FybmluZy1kaXYsXFxuLmNhdC1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcblxcbi5zZWxlY3QtZm9ybSxcXG4uY3JlYXRlLWNhdC13YXJuaW5nLFxcbi5jYXRlZ29yeS1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZC1mb290LWNvbG9yKTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICB3aWR0aDogNTBjaDtcXG4gIG1hcmdpbi10b3A6IDVjaDtcXG4gIHBhZGRpbmc6IDEuNWNoO1xcbiAgYm9yZGVyLXJhZGl1czogMWNoO1xcbn1cXG5cXG4uc2VsZWN0LWFzayxcXG4ubXVzdC1jcmVhdGUtY2F0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTGFuY2Vsb3RcXFwiO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0uY2F0ZWdvcnkge1xcbiAgbWFyZ2luLWxlZnQ6IC01Y2g7XFxuICB3aWR0aDogNzAlO1xcbn1cXG5cXG4uc2VsZWN0LWJ0bi1saW5lLFxcbi5jYXQtYnRuLWxpbmUge1xcbiAgbWFyZ2luLXRvcDogMmNoO1xcbn1cXG5cXG5idXR0b24uYWRkLWNhdGVnb3J5LFxcbmJ1dHRvbi5hZ3JlZS1idG4sXFxuYnV0dG9uLnNlbGVjdC10by1kby1idG4ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXBweSBNb25rZXlcXFwiO1xcbiAgZm9udC1zaXplOiAxLjhjaDtcXG4gIHdpZHRoOiAyMGNoO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XFxuICBwYWRkaW5nOiAwLjhjaDtcXG4gIGJvcmRlci1yYWRpdXM6IDNjaDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWhlYWQtZm9vdC1jb2xvcik7XFxufVxcblxcbmJ1dHRvbi5hZGQtY2F0ZWdvcnk6aG92ZXIsXFxuYnV0dG9uLmFncmVlLWJ0bjpob3ZlcixcXG5idXR0b24uc2VsZWN0LXRvLWRvLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuYnV0dG9uLmFkZC1jYXRlZ29yeTpmb2N1cyxcXG5idXR0b24uYWdyZWUtYnRuOmZvY3VzLFxcbmJ1dHRvbi5zZWxlY3QtdG8tZG8tYnRuOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcXG59XFxuXFxuLyogQ2F0ZWdvcnkgVmlldzogTmV3IENhdGVnb3J5IFNlY3Rpb24gKi9cXG4uY2F0LXNlY3Rpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiA0Y2g7XFxufVxcblxcbi5jYXQtY2FyZCB7XFxuICBmb250LWZhbWlseTogXFxcIkxhbmNlbG90XFxcIjtcXG4gIGZvbnQtc2l6ZTogMmNoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW5hY3RpdmUtdGFiLWNvbG9yKTtcXG4gIHdpZHRoOiAzMGNoO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAzY2g7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMWNoO1xcbiAgYm9yZGVyLXJhZGl1czogMWNoO1xcbiAgbWFyZ2luLWJvdHRvbTogMmNoO1xcbn1cXG5cXG4uY2F0LWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5uZXctdG8tZG8ge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJIYXBweSBNb25rZXlcXFwiO1xcbiAgZm9udC1zaXplOiAyY2g7XFxuICB3aWR0aDogMTBjaDtcXG4gIGhlaWdodDogM2NoO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiAyY2g7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWZvb3QtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3LXRvLWRvOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmdyb3VuZC1jb2xvcik7XFxufVxcblxcbi5uZXctdG8tZG86Zm9jdXMge1xcbiAgb3V0bGluZTogMnB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xcbn1cXG5cXG4uY2F0LWNhcmQgLmRlbGV0ZS1pY29uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgbWFyZ2luLXJpZ2h0OiAxY2g7XFxuICBtYXJnaW4tYm90dG9tOiAwLjVjaDtcXG59XFxuXFxuLmNhdC1jYXJkIC5kZWxldGUtaWNvbiA+IGltZyB7XFxuICB3aWR0aDogMmNoO1xcbn1cXG5cXG4uY2F0LWNhcmQgLmRlbGV0ZS1pY29uID4gaW1nOmhvdmVyIHtcXG4gIHdpZHRoOiAyLjJjaDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNhdC1jYXJkIC5kZWxldGUtaWNvbiA+IGltZzpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMi44Y2g7XFxuICBwYWRkaW5nOiAwLjVjaDtcXG59XFxuXFxuLyogQ2F0ZWdvcnkgU2VjdGlvbjogTmV3IFRvIERvIEl0ZW0gKi9cXG5cXG4udG8tZG8tZW50cnkge1xcbiAgbWFyZ2luOiAxY2ggMCAxY2ggMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRvLWRvLWVudHJ5LWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFjaDtcXG4gIHBhZGRpbmc6IDFjaCAwIDFjaCAwO1xcbn1cXG5cXG4udG8tZG8tZW50cnkgLnRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1zaXplOiAyLjZjaDtcXG4gIHBhZGRpbmctYm90dG9tOiAxY2g7XFxufVxcblxcbi5kZXRhaWxzLXRpdGxlLFxcbi5kdWUtdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgZm9udC1zaXplOiAyLjVjaDtcXG4gIG1hcmdpbi1sZWZ0OiAxLjVjaDtcXG59XFxuXFxuLmRldGFpbHMsXFxuLnNob3ctZHVlLWRhdGUge1xcbiAgcGFkZGluZy1ib3R0b206IDFjaDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiSGFwcHkgTW9ua2V5XFxcIjtcXG59XFxuXFxuLnRvLWRvLWVudHJ5ID4gbGFiZWwge1xcbiAgd2lkdGg6IDEwY2g7XFxuICBtYXJnaW4tYm90dG9tOiAxY2g7XFxufVxcblxcbi5jb21wbGV0ZS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjdjaDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXS5jb21wbGV0ZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtby1hcHBlYXJhbmNlOiBub25lO1xcbiAgYXBwZWFyYW5jZTogbm9uZTtcXG4gIGhlaWdodDogMi41Y2g7XFxuICB3aWR0aDogMi41Y2g7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFjaDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJncm91bmQtY29sb3IpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdLmNvbXBsZXRlOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXS5jb21wbGV0ZTpjaGVja2VkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZvcm0tZ3JlZW4tY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1iZ3JvdW5kLWNvbG9yKTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXS5jb21wbGV0ZTpjaGVja2VkOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXFwyNzEzXFxcIjtcXG4gIGNvbG9yOiB2YXIoLS1jaGVja21hcmstY29sb3IpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAtMC40Y2g7XFxuICBmb250LXNpemU6IDRjaDtcXG59XFxuXFxuLnRvLWRvLWVudHJ5IC5kZWxldGUtaWNvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyLjVjaDtcXG59XFxuXFxuLnRvLWRvLWVudHJ5IC5kZWxldGUtaWNvbiA+IGltZyB7XFxuICB3aWR0aDogMmNoO1xcbiAgbWFyZ2luLXRvcDogNGNoO1xcbn1cXG5cXG4udG8tZG8tZW50cnkgLmRlbGV0ZS1pY29uID4gaW1nOmhvdmVyIHtcXG4gIHdpZHRoOiAyLjJjaDtcXG4gIG1hcmdpbi10b3A6IDIuMWNoO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2F0LWNhcmQgLmRlbGV0ZS1pY29uID4gaW1nOmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAyLjhjaDtcXG4gIGhlaWdodDogM2NoO1xcbiAgcGFkZGluZzogMC41Y2g7XFxufVxcblxcbi50by1kby1lbnRyeSAucHJpb3JpdHkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDNjaDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyY2g7XFxuICBwYWRkaW5nLXJpZ2h0OiAyY2g7XFxufVxcblxcbi50by1kby1lbnRyeSAucHJpb3JpdHktY29sb3IsXFxuLmdyaWQtY2VsbHMgLnByaW9yaXR5LWNvbG9yIHtcXG4gIHdpZHRoOiAyLjJjaDtcXG4gIGhlaWdodDogMi4yY2g7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1mb3JtLWdyZWVuLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhpZ2gtcHJpb3JpdHktY29sb3IpO1xcbn1cXG5cXG4udG8tZG8tZW50cnkgLnByaW9yaXR5ID4gaW1nIHtcXG4gIHdpZHRoOiAyLjJjaDtcXG59XFxuXFxuLnRvLWRvLWVudHJ5IC5wcmlvcml0eSA+IGltZzpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMi44Y2g7XFxuICBwYWRkaW5nOiAwLjVjaDtcXG59XFxuXFxuLyogTWFpbjogRHVlIERhdGUgVmlldyAqL1xcblxcbi5ieS1kdWUtZGF0ZSB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLyogTWFpbjogRHVlIERhdGUsIFByaW9yaXR5IGFuZCBDb21wbGV0ZWQgVGFza3MgVmlldyAtIEdyaWQgU3R5bGluZyAqL1xcbi5kdWUtdmlldy1kaXYsXFxuLnByaW9yaXR5LXZpZXctZGl2LFxcbi5jb21wbGV0ZWQtdmlldy1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcXG4gIG1hcmdpbi1yaWdodDogMmNoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5kdWUtdGFzay1oZWFkZXIsXFxuLnByaW9yaXR5LXRhc2staGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbn1cXG5cXG4uY29tcGxldGVkLXRhc2staGVhZGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG4uZHVlLXRhc2staGVhZGVyLFxcbi5wcmlvcml0eS10YXNrLWhlYWRlcixcXG4uY29tcGxldGVkLXRhc2staGVhZGVyIHtcXG4gIGJvcmRlci1ib3R0b206IDAuM2NoIHNvbGlkIGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJsYW5jZWxvdFxcXCI7XFxuICBmb250LXNpemU6IDJjaDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZy1ib3R0b206IDFjaDtcXG4gIG1hcmdpbi1yaWdodDogMmNoO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmR1ZS10YXNrcy1yb3ctcGFyZW50LFxcbi5wcmlvcml0eS10YXNrcy1yb3ctcGFyZW50LFxcbi5jb21wbGV0ZWQtdGFza3Mtcm93LXBhcmVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbi1yaWdodDogMmNoO1xcbiAgaGVpZ2h0OiBtaW4tY29udGVudDtcXG59XFxuXFxuLmR1ZS12aWV3LXJvdyxcXG4ucHJpb3JpdHktdmlldy1yb3cge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxufVxcblxcbi5jb21wbGV0ZWQtdGFza3Mtcm93IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbn1cXG5cXG4uZHVlLXZpZXctcm93LFxcbi5wcmlvcml0eS12aWV3LXJvdyxcXG4uY29tcGxldGVkLXRhc2tzLXJvdyB7XFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcbiAgcGFkZGluZy10b3A6IDFjaDtcXG4gIHBhZGRpbmctYm90dG9tOiAxY2g7XFxuICBmb250LWZhbWlseTogXFxcIkhhcHB5IE1vbmtleVxcXCI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oZWFkZXJzLFxcbi5ncmlkLWNlbGxzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxufVxcblxcbi5oZWFkZXJzOm5vdCg6bGFzdC1vZi10eXBlKSxcXG4uZ3JpZC1jZWxsczpub3QoOmxhc3Qtb2YtdHlwZSkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmlnaHQ6IDAuMmNoIHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4uZHVlLXZpZXctZHVlLFxcbi5wcmlvcml0eS12aWV3LXByaW9yaXR5IHtcXG4gIGdyaWQtY29sdW1uOiAxO1xcbn1cXG5cXG4uZHVlLXZpZXctdGl0bGUsXFxuLnByaW9yaXR5LXZpZXctdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDI7XFxufVxcblxcbi5kdWUtdmlldy1kZXNjcmlwdGlvbixcXG4ucHJpb3JpdHktdmlldy1kZXNjcmlwdGlvbiB7XFxuICBncmlkLWNvbHVtbjogMztcXG59XFxuXFxuLmR1ZS12aWV3LXByaW9yaXR5LFxcbi5wcmlvcml0eS12aWV3LWR1ZSB7XFxuICBncmlkLWNvbHVtbjogNDtcXG59XFxuXFxuLmR1ZS12aWV3LWNvbXBsZXRlLFxcbi5wcmlvcml0eS12aWV3LWNvbXBsZXRlIHtcXG4gIGdyaWQtY29sdW1uOiA1O1xcbn1cXG5cXG4uZHVlLXZpZXctZGVsZXRlLFxcbi5wcmlvcml0eS12aWV3LWRlbGV0ZSB7XFxuICBncmlkLWNvbHVtbjogNjtcXG59XFxuXFxuLmNvbXBsZXRlLXZpZXctY29tcGxldGUge1xcbiAgZ3JpZC1jb2x1bW46IDE7XFxufVxcblxcbi5jb21wbGV0ZS12aWV3LXRpdGxlIHtcXG4gIGdyaWQtY29sdW1uOiAyO1xcbn1cXG5cXG4uY29tcGxldGUtdmlldy1kZXNjcmlwdGlvbiB7XFxuICBncmlkLWNvbHVtbjogMztcXG59XFxuXFxuLmNvbXBsZXRlLXZpZXctcHJpb3JpdHkge1xcbiAgZ3JpZC1jb2x1bW46IDQ7XFxufVxcblxcbi5jb21wbGV0ZS12aWV3LWRlbGV0ZSB7XFxuICBncmlkLWNvbHVtbjogNTtcXG59XFxuXFxuLmdyaWQtY2VsbHMgLnByaW9yaXR5LWNvbG9yIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMi4yY2g7XFxuICBoZWlnaHQ6IDIuMmNoO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaWdoLXByaW9yaXR5LWNvbG9yKTtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uZ3JpZC1jZWxscyA+IGltZyB7XFxuICB3aWR0aDogMmNoO1xcbn1cXG5cXG4uZ3JpZC1jZWxscyA+IGltZzpob3ZlciB7XFxuICB3aWR0aDogMi4yY2g7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkLWZvb3QtY29sb3IpO1xcbiAgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyAyO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBmb250LWZhbWlseTogXFxcIkhhcHB5IE1vbmtleVxcXCI7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxuICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gIG1hcmdpbi1yaWdodDogMWNoO1xcbn1cXG5cXG5mb290ZXIgYTpmb2N1cyB7XFxuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tZm9ybS1ncmVlbi1jb2xvcik7XFxufVxcblxcbmZvb3RlciBpbWcge1xcbiAgaGVpZ2h0OiAzLjVjaDtcXG4gIG1hcmdpbi1sZWZ0OiAxY2g7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uLy4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdExvY2FsZTsiLCJ2YXIgZGVmYXVsdE9wdGlvbnMgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRPcHRpb25zKG5ld09wdGlvbnMpIHtcbiAgZGVmYXVsdE9wdGlvbnMgPSBuZXdPcHRpb25zO1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIEcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gWShkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTtcbiAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyO1xuXG4gICAgLy8gVHdvIGRpZ2l0IHllYXJcbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9XG5cbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gUihkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpO1xuXG4gICAgLy8gUGFkZGluZ1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIHUoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gUShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiBxKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiBNKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIEwoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIHcoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gSShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiBkKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gRChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIEUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiBlKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIGMoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiBpKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIGIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIEIoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gSyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIGsoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIFMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiBYKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiB4KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gTyhkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24geihkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gdChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiBUKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIHkoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcblxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiBhKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIGgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiBIKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiBtKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIHMoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJ2YXIgZGF0ZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgdGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn07XG52YXIgZGF0ZVRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTtcblxuICAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgb3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIG9wdGlvbnMpO1xuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDApO1xuXG4gIC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsIi8qKlxuICogRGF5cyBpbiAxIHdlZWsuXG4gKlxuICogQG5hbWUgZGF5c0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5XZWVrID0gNztcblxuLyoqXG4gKiBEYXlzIGluIDEgeWVhclxuICogT25lIHllYXJzIGVxdWFscyAzNjUuMjQyNSBkYXlzIGFjY29yZGluZyB0byB0aGUgZm9ybXVsYTpcbiAqXG4gKiA+IExlYXAgeWVhciBvY2N1cmVzIGV2ZXJ5IDQgeWVhcnMsIGV4Y2VwdCBmb3IgeWVhcnMgdGhhdCBhcmUgZGl2aXNhYmxlIGJ5IDEwMCBhbmQgbm90IGRpdmlzYWJsZSBieSA0MDAuXG4gKiA+IDEgbWVhbiB5ZWFyID0gKDM2NSsxLzQtMS8xMDArMS80MDApIGRheXMgPSAzNjUuMjQyNSBkYXlzXG4gKlxuICogQG5hbWUgZGF5c0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBkYXlzSW5ZZWFyID0gMzY1LjI0MjU7XG5cbi8qKlxuICogTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWF4VGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbk1pbnV0ZSA9IDYwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqXG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogTWluaW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQG5hbWUgbWluVGltZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogTWludXRlcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBNb250aHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogTW9udGhzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBRdWFydGVycyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBxdWFydGVyc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBxdWFydGVyc0luWWVhciA9IDQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGhvdXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkhvdXIgPSAzNjAwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtaW51dGVcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTWludXRlID0gNjA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIGRheVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5EYXkgPSBzZWNvbmRzSW5Ib3VyICogMjQ7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHdlZWtcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbldlZWsgPSBzZWNvbmRzSW5EYXkgKiA3O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luWWVhclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5ZZWFyID0gc2Vjb25kc0luRGF5ICogZGF5c0luWWVhcjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbW9udGhcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMzsiLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xuXG4vLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG5cbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfb3B0aW9ucyRsb2NhbGUsIF9yZWYyLCBfcmVmMywgX3JlZjQsIF9vcHRpb25zJGZpcnN0V2Vla0NvbiwgX29wdGlvbnMkbG9jYWxlMiwgX29wdGlvbnMkbG9jYWxlMiRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIsIF9yZWY1LCBfcmVmNiwgX3JlZjcsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlMywgX29wdGlvbnMkbG9jYWxlMyRvcHRpLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWY1ID0gKF9yZWY2ID0gKF9yZWY3ID0gKF9vcHRpb25zJHdlZWtTdGFydHNPbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9vcHRpb25zJHdlZWtTdGFydHNPbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkd2Vla1N0YXJ0c09uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMyRvcHRpID0gX29wdGlvbnMkbG9jYWxlMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTMkb3B0aS53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWY3ICE9PSB2b2lkIDAgPyBfcmVmNyA6IGRlZmF1bHRPcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjYgIT09IHZvaWQgMCA/IF9yZWY2IDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsMy5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWw0LndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjUgIT09IHZvaWQgMCA/IF9yZWY1IDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcpO1xuICAgIH1cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucykgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHZhciBtYXRjaGVkID0gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cCk7XG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuICByZXR1cm4gbWF0Y2hlZFsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0FmdGVyXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGZpcnN0IGRhdGUgYWZ0ZXIgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRoYXQgc2hvdWxkIGJlIGFmdGVyIHRoZSBvdGhlciBvbmUgdG8gcmV0dXJuIHRydWVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGFmdGVyIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiBjb25zdCByZXN1bHQgPSBpc0FmdGVyKG5ldyBEYXRlKDE5ODksIDYsIDEwKSwgbmV3IERhdGUoMTk4NywgMSwgMTEpKVxuICogLy89PiB0cnVlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzQWZ0ZXIoZGlydHlEYXRlLCBkaXJ0eURhdGVUb0NvbXBhcmUpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXRlVG9Db21wYXJlID0gdG9EYXRlKGRpcnR5RGF0ZVRvQ29tcGFyZSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA+IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgaWYgKCFpc0RhdGUoZGlydHlEYXRlKSAmJiB0eXBlb2YgZGlydHlEYXRlICE9PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcbnZhciBmb3JtYXREaXN0YW5jZSA9IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgaWYgKHR5cGVvZiB0b2tlblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWU7XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50LnRvU3RyaW5nKCkpO1xuICB9XG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdERpc3RhbmNlOyIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTtcblxuLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiBhcmd1bWVudENhbGxiYWNrKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIHZhbHVlQ2FsbGJhY2soaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMCAvKiBTdW5kYXkgKi8sXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTtcbiAgICAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7XG5cbiAgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDtcblxuICAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtcbiAgY29udGVudEJveCxcbiAgYWRkQ2F0ZWdvcnlCdG4sXG4gIHNlbGVjdFRvRG9CdG4sXG4gIGFncmVlQnRuLFxuICBhZGRCdG4sXG4gIGNhdGVnb3J5Rm9ybSxcbiAgY2FuY2VsQ2F0ZWdvcnlCdG4sXG4gIHRvRG9Gb3JtLFxuICBjYW5jZWxUb0RvQnRuLFxuICBhZGRUb0RvQnRuLFxuICBlZGl0VG9Eb0J0bixcbiAgY2F0ZWdvcnlCdG4sXG4gIGR1ZURhdGVCdG4sXG4gIHByaW9yaXR5QnRuLFxuICBzaWRlTmF2LFxufSBmcm9tIFwiLi9xdWVyeVNlbGVjdG9yc1wiO1xuaW1wb3J0IHtcbiAgc2VsZWN0QWRkVHlwZSxcbiAgc2hvd0NhdE1lc3NhZ2UsXG4gIGRpc3BsYXlDYXRlZ29yeVdhcm5pbmcsXG4gIGNsb3NlVG9Eb1dhcm5pbmcsXG4gIGNsb3NlU2VsZWN0aW9uQm94LFxuICBuZXdDYXRlZ29yeUZvcm0sXG4gIGhpZGVDYXRlZ29yeUZvcm0sXG4gIHJlcGxhY2VDYXRlZ29yeVNlY3Rpb25zLFxuICBjcmVhdGVDYXRlZ29yeVNlY3Rpb24sXG4gIHRvRG9Gb3JtRGlzcGxheSxcbiAgaGlkZVRvRG9Gb3JtLFxuICBkaXNwbGF5VG9Eb0VudHJ5LFxuICByZXBsYWNlVG9Eb0l0ZW1zLFxuICBzaG93Rm9ybVdpdGhJbmZvLFxuICBzaG93Q29tcGxldGVkVGFza3MsXG4gIHJlcGxhY2VDb21wbGV0ZWRSb3dzLFxuICBzaG93QnlEdWVEYXRlLFxuICByZXBsYWNlRHVlRGF0ZVJvd3MsXG4gIHNob3dCeVByaW9yaXR5LFxuICByZXBsYWNlUHJpb3JpdHlSb3dzLFxufSBmcm9tIFwiLi92aWV3XCI7XG5pbXBvcnQge1xuICBjYXRlZ29yaWVzQXJyYXksXG4gIG5ld0NhdGVnb3J5QXJyYXksXG4gIG5ld1RvRG9JdGVtLFxuICBlZGl0VG9Eb0luU3RvcmFnZSxcbiAgcmVtb3ZlVG9Eb0Zyb21DYXRlZ29yeSxcbiAgcmVtb3ZlQ2F0ZWdvcnksXG4gIGNoYW5nZUNvbXBsZXRlU3RhdHVzLFxuICBzb3J0QnlDcmVhdGlvbkRhdGUsXG4gIHNvcnRCeUR1ZURhdGUsXG4gIHNvcnRCeVByaW9yaXR5LFxufSBmcm9tIFwiLi9tb2RlbFwiO1xuaW1wb3J0IHtcbiAgZmluZFBhc3REdWUsXG4gIGZvcm1hdERhdGVzQ2F0ZWdvcnksXG4gIGZvcm1hdERhdGVzRHVlVmlldyxcbiAgZm9ybWF0RGF0ZXNQcmlvcml0eSxcbn0gZnJvbSBcIi4vZGF0ZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkRnJvbVN0b3JhZ2UoKSB7XG4gIGlmIChjYXRlZ29yaWVzQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgc2hvd0NhdE1lc3NhZ2UoKTtcbiAgfSBlbHNlIHtcbiAgICByZXBsYWNlQ2F0ZWdvcnlTZWN0aW9ucygpO1xuICAgIGNyZWF0ZUNhdGVnb3J5U2VjdGlvbigpO1xuICAgIHNvcnRCeUNyZWF0aW9uRGF0ZSgpO1xuICAgIHJlcGxhY2VUb0RvSXRlbXMoKTtcbiAgICBkaXNwbGF5VG9Eb0VudHJ5KCk7XG4gICAgZmluZFBhc3REdWUoKTtcbiAgICBmb3JtYXREYXRlc0NhdGVnb3J5KCk7XG4gICAgcmVwbGFjZUNvbXBsZXRlZFJvd3MoKTtcbiAgICBzaG93Q29tcGxldGVkVGFza3MoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0QWN0aW9uRm9ybSgpIHtcbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBzZWxlY3RBZGRUeXBlKTtcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgc2VsZWN0QWRkVHlwZSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q2F0ZWdvcnlGb3JtKCkge1xuICBhZGRDYXRlZ29yeUJ0bi5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgbmV3Q2F0ZWdvcnlGb3JtKTtcblxuICBhZGRDYXRlZ29yeUJ0bi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBuZXdDYXRlZ29yeUZvcm0oKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0NhdGVnb3J5V2FybmluZygpIHtcbiAgc2VsZWN0VG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYXRlZ29yaWVzQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICBkaXNwbGF5Q2F0ZWdvcnlXYXJuaW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNsb3NlU2VsZWN0aW9uQm94KCk7XG4gICAgfVxuICB9KTtcblxuICBzZWxlY3RUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGlmIChjYXRlZ29yaWVzQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGRpc3BsYXlDYXRlZ29yeVdhcm5pbmcoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNsb3NlU2VsZWN0aW9uQm94KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVDYXRlZ29yeVdhcm5pbmcoKSB7XG4gIGFncmVlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY2xvc2VUb0RvV2FybmluZygpO1xuICB9KTtcblxuICBhZ3JlZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBjbG9zZVRvRG9XYXJuaW5nKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbENhdGVnb3J5Rm9ybSgpIHtcbiAgY2FuY2VsQ2F0ZWdvcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIGhpZGVDYXRlZ29yeUZvcm0pO1xuXG4gIGNhbmNlbENhdGVnb3J5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGhpZGVDYXRlZ29yeUZvcm0oKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2FuY2VsVG9EbygpIHtcbiAgY2FuY2VsVG9Eb0J0bi5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgaGlkZVRvRG9Gb3JtKTtcblxuICBjYW5jZWxUb0RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGhpZGVUb0RvRm9ybSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJtaXROZXdDYXRlZ29yeSgpIHtcbiAgY2F0ZWdvcnlGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbmV3Q2F0ZWdvcnlBcnJheSgpO1xuICAgIGhpZGVDYXRlZ29yeUZvcm0oKTtcbiAgICByZXBsYWNlQ2F0ZWdvcnlTZWN0aW9ucygpO1xuICAgIGNyZWF0ZUNhdGVnb3J5U2VjdGlvbigpO1xuICAgIHJlcGxhY2VUb0RvSXRlbXMoKTtcbiAgICBkaXNwbGF5VG9Eb0VudHJ5KCk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3VibWl0VG9EbygpIHtcbiAgdG9Eb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBhZGRUb0RvQnRuKSB7XG4gICAgICBuZXdUb0RvSXRlbSgpO1xuICAgICAgc29ydEJ5Q3JlYXRpb25EYXRlKCk7XG4gICAgICBoaWRlVG9Eb0Zvcm0oKTtcbiAgICAgIHJlcGxhY2VUb0RvSXRlbXMoKTtcbiAgICAgIGRpc3BsYXlUb0RvRW50cnkoKTtcbiAgICAgIGZpbmRQYXN0RHVlKCk7XG4gICAgICBmb3JtYXREYXRlc0NhdGVnb3J5KCk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0ID09PSBlZGl0VG9Eb0J0bikge1xuICAgICAgZWRpdFRvRG9JblN0b3JhZ2UoKTtcbiAgICAgIHNvcnRCeUNyZWF0aW9uRGF0ZSgpO1xuICAgICAgaGlkZVRvRG9Gb3JtKCk7XG4gICAgICByZXBsYWNlVG9Eb0l0ZW1zKCk7XG4gICAgICBkaXNwbGF5VG9Eb0VudHJ5KCk7XG4gICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgZm9ybWF0RGF0ZXNDYXRlZ29yeSgpO1xuICAgIH1cbiAgfSk7XG5cbiAgdG9Eb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBlLnRhcmdldCA9PT0gYWRkVG9Eb0J0bikge1xuICAgICAgbmV3VG9Eb0l0ZW0oKTtcbiAgICAgIHNvcnRCeUNyZWF0aW9uRGF0ZSgpO1xuICAgICAgaGlkZVRvRG9Gb3JtKCk7XG4gICAgICByZXBsYWNlVG9Eb0l0ZW1zKCk7XG4gICAgICBkaXNwbGF5VG9Eb0VudHJ5KCk7XG4gICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgZm9ybWF0RGF0ZXNDYXRlZ29yeSgpO1xuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIGUudGFyZ2V0ID09PSBlZGl0VG9Eb0J0bikge1xuICAgICAgZWRpdFRvRG9JblN0b3JhZ2UoKTtcbiAgICAgIHNvcnRCeUNyZWF0aW9uRGF0ZSgpO1xuICAgICAgaGlkZVRvRG9Gb3JtKCk7XG4gICAgICByZXBsYWNlVG9Eb0l0ZW1zKCk7XG4gICAgICBkaXNwbGF5VG9Eb0VudHJ5KCk7XG4gICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgZm9ybWF0RGF0ZXNDYXRlZ29yeSgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QnlWaWV3KCkge1xuICBzaWRlTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVyZG93blwiLCAoKSA9PiB7XG4gICAgLy8gRGlzcGxheSBieSBDYXRlZ29yeVxuICAgIGlmIChjYXRlZ29yeUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYXQtdGFiXCIpKSB7XG4gICAgICBzb3J0QnlDcmVhdGlvbkRhdGUoKTtcbiAgICAgIHJlcGxhY2VUb0RvSXRlbXMoKTtcbiAgICAgIGRpc3BsYXlUb0RvRW50cnkoKTtcbiAgICAgIGZpbmRQYXN0RHVlKCk7XG4gICAgICBmb3JtYXREYXRlc0NhdGVnb3J5KCk7XG4gICAgfVxuICAgIC8vIERpc3BsYXkgYnkgRHVlIERhdGVcbiAgICBpZiAoZHVlRGF0ZUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXRlLXRhYlwiKSkge1xuICAgICAgc29ydEJ5RHVlRGF0ZSgpO1xuICAgICAgcmVwbGFjZUR1ZURhdGVSb3dzKCk7XG4gICAgICBzaG93QnlEdWVEYXRlKCk7XG4gICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgZm9ybWF0RGF0ZXNEdWVWaWV3KCk7XG4gICAgfVxuICAgIC8vIERpc3BsYXkgYnkgUHJpb3JpdHlcbiAgICBpZiAocHJpb3JpdHlCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJpb3JpdHktdGFiXCIpKSB7XG4gICAgICBzb3J0QnlQcmlvcml0eSgpO1xuICAgICAgcmVwbGFjZVByaW9yaXR5Um93cygpO1xuICAgICAgc2hvd0J5UHJpb3JpdHkoKTtcbiAgICAgIGZpbmRQYXN0RHVlKCk7XG4gICAgICBmb3JtYXREYXRlc1ByaW9yaXR5KCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlCeVZpZXdXaXRoS2V5Ym9hcmQoKSB7XG4gIHNpZGVOYXYuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGV2ZW50KSA9PiB7XG4gICAgLy8gRGlzcGxheSBieSBDYXRlZ29yeVxuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiBjYXRlZ29yeUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJjYXQtdGFiXCIpKSB7XG4gICAgICBzb3J0QnlDcmVhdGlvbkRhdGUoKTtcbiAgICAgIHJlcGxhY2VUb0RvSXRlbXMoKTtcbiAgICAgIGRpc3BsYXlUb0RvRW50cnkoKTtcbiAgICAgIGZpbmRQYXN0RHVlKCk7XG4gICAgICBmb3JtYXREYXRlc0NhdGVnb3J5KCk7XG4gICAgfVxuICAgIC8vIERpc3BsYXkgYnkgRHVlIERhdGVcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgZHVlRGF0ZUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJkYXRlLXRhYlwiKSkge1xuICAgICAgc29ydEJ5RHVlRGF0ZSgpO1xuICAgICAgcmVwbGFjZUR1ZURhdGVSb3dzKCk7XG4gICAgICBzaG93QnlEdWVEYXRlKCk7XG4gICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgZm9ybWF0RGF0ZXNEdWVWaWV3KCk7XG4gICAgfVxuICAgIC8vIERpc3BsYXkgYnkgUHJpb3JpdHlcbiAgICBpZiAoXG4gICAgICBldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJlxuICAgICAgcHJpb3JpdHlCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJpb3JpdHktdGFiXCIpXG4gICAgKSB7XG4gICAgICBzb3J0QnlQcmlvcml0eSgpO1xuICAgICAgcmVwbGFjZVByaW9yaXR5Um93cygpO1xuICAgICAgc2hvd0J5UHJpb3JpdHkoKTtcbiAgICAgIGZpbmRQYXN0RHVlKCk7XG4gICAgICBmb3JtYXREYXRlc1ByaW9yaXR5KCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUV2ZW50RGVsZWdhdGlvbigpIHtcbiAgY29udGVudEJveC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy9EaXNwbGF5IFRvIERvIEVudHJ5IEZvcm1cbiAgICBjb25zdCBhZGRCdG4gPSBldmVudC50YXJnZXQuZGF0YXNldC5jYXRlZ29yeTtcbiAgICBjb25zdCBhZGRCdG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtY2F0ZWdvcnlcIikpO1xuICAgIGFkZEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBidXR0b24pIHtcbiAgICAgICAgdG9Eb0Zvcm1EaXNwbGF5KGFkZEJ0bik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEZWxldGUgVG8gRG8gSXRlbXNcbiAgICBjb25zdCBkZWxldGVUb0RvSXRlbSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0Lml0ZW1EZWxldGU7XG4gICAgY29uc3QgdG9Eb0VudHJpZXMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChbXCJbZGF0YS1pdGVtLWRlbGV0ZV1cIl0pXG4gICAgKTtcbiAgICB0b0RvRW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gZW50cnkpIHtcbiAgICAgICAgcmVtb3ZlVG9Eb0Zyb21DYXRlZ29yeShkZWxldGVUb0RvSXRlbSk7XG4gICAgICAgIHNvcnRCeUNyZWF0aW9uRGF0ZSgpO1xuICAgICAgICByZXBsYWNlVG9Eb0l0ZW1zKCk7XG4gICAgICAgIGRpc3BsYXlUb0RvRW50cnkoKTtcbiAgICAgICAgZmluZFBhc3REdWUoKTtcbiAgICAgICAgZm9ybWF0RGF0ZXNDYXRlZ29yeSgpO1xuICAgICAgICByZXBsYWNlQ29tcGxldGVkUm93cygpO1xuICAgICAgICBzaG93Q29tcGxldGVkVGFza3MoKTtcblxuICAgICAgICBpZiAoZHVlRGF0ZUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tY3RybC0tYWN0aXZlXCIpKSB7XG4gICAgICAgICAgc29ydEJ5RHVlRGF0ZSgpO1xuICAgICAgICAgIHJlcGxhY2VEdWVEYXRlUm93cygpO1xuICAgICAgICAgIHNob3dCeUR1ZURhdGUoKTtcbiAgICAgICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgICAgIGZvcm1hdERhdGVzRHVlVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tY3RybC0tYWN0aXZlXCIpKSB7XG4gICAgICAgICAgc29ydEJ5UHJpb3JpdHkoKTtcbiAgICAgICAgICByZXBsYWNlUHJpb3JpdHlSb3dzKCk7XG4gICAgICAgICAgc2hvd0J5UHJpb3JpdHkoKTtcbiAgICAgICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgICAgIGZvcm1hdERhdGVzUHJpb3JpdHkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGVsZXRlIENhdGVnb3J5IHdpdGggYW55IGFuZCBhbGwgZW50cmllc1xuICAgIGNvbnN0IGRlbGV0ZUNhdGVnb3J5SW5kZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5kZWxldGVDYXRJbmRleDtcbiAgICBjb25zdCBkZWxldGVDYXRlZ29yeU5hbWUgPSBldmVudC50YXJnZXQuZGF0YXNldC5kZWxldGVDYXQ7XG4gICAgY29uc3QgZGVsZXRlQ2F0QnRucyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZGVsZXRlLWNhdFwiKVxuICAgICk7XG4gICAgZGVsZXRlQ2F0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGlmIChldmVudC50YXJnZXQgPT09IGJ0bikge1xuICAgICAgICByZW1vdmVDYXRlZ29yeShkZWxldGVDYXRlZ29yeUluZGV4LCBkZWxldGVDYXRlZ29yeU5hbWUpO1xuICAgICAgICByZXBsYWNlQ2F0ZWdvcnlTZWN0aW9ucygpO1xuICAgICAgICBjcmVhdGVDYXRlZ29yeVNlY3Rpb24oKTtcbiAgICAgICAgcmVwbGFjZVRvRG9JdGVtcygpO1xuICAgICAgICBkaXNwbGF5VG9Eb0VudHJ5KCk7XG4gICAgICAgIGZpbmRQYXN0RHVlKCk7XG4gICAgICAgIGZvcm1hdERhdGVzQ2F0ZWdvcnkoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERpc3BsYXkgRm9ybSB0byBlZGl0IFRvIERvIGVudHJ5XG4gICAgY29uc3QgZWRpdEljb24gPSBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5lZGl0KTtcbiAgICBjb25zdCBlZGl0SWNvbkNhdCA9IGV2ZW50LnRhcmdldC5kYXRhc2V0LmVkaXRDYXQ7XG4gICAgY29uc3QgZWRpdEJ0bnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1lZGl0XCIpKTtcbiAgICBlZGl0QnRucy5mb3JFYWNoKChlZGl0KSA9PiB7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBlZGl0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHR5cGVvZiBlZGl0SWNvbik7XG4gICAgICAgIHNob3dGb3JtV2l0aEluZm8oZWRpdEljb24sIGVkaXRJY29uQ2F0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFdmVudERlbGVnYXRpb25XaXRoS2V5Ym9hcmQoKSB7XG4gIGNvbnRlbnRCb3guYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy9EaXNwbGF5IFRvIERvIEVudHJ5IEZvcm1cbiAgICBjb25zdCBhZGRCdG4gPSBldmVudC50YXJnZXQuZGF0YXNldC5jYXRlZ29yeTtcbiAgICBjb25zdCBhZGRCdG5zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtY2F0ZWdvcnlcIikpO1xuICAgIGFkZEJ0bnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIgJiYgZXZlbnQudGFyZ2V0ID09PSBidXR0b24pIHtcbiAgICAgICAgdG9Eb0Zvcm1EaXNwbGF5KGFkZEJ0bik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBEZWxldGUgVG8gRG8gSXRlbXNcbiAgICBjb25zdCBkZWxldGVUb0RvSXRlbSA9IGV2ZW50LnRhcmdldC5kYXRhc2V0Lml0ZW1EZWxldGU7XG4gICAgY29uc3QgdG9Eb0VudHJpZXMgPSBBcnJheS5mcm9tKFxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChbXCJbZGF0YS1pdGVtLWRlbGV0ZV1cIl0pXG4gICAgKTtcbiAgICB0b0RvRW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiICYmIGV2ZW50LnRhcmdldCA9PT0gZW50cnkpIHtcbiAgICAgICAgcmVtb3ZlVG9Eb0Zyb21DYXRlZ29yeShkZWxldGVUb0RvSXRlbSk7XG4gICAgICAgIHNvcnRCeUNyZWF0aW9uRGF0ZSgpO1xuICAgICAgICByZXBsYWNlVG9Eb0l0ZW1zKCk7XG4gICAgICAgIGRpc3BsYXlUb0RvRW50cnkoKTtcbiAgICAgICAgZmluZFBhc3REdWUoKTtcbiAgICAgICAgZm9ybWF0RGF0ZXNDYXRlZ29yeSgpO1xuICAgICAgICByZXBsYWNlQ29tcGxldGVkUm93cygpO1xuICAgICAgICBzaG93Q29tcGxldGVkVGFza3MoKTtcblxuICAgICAgICBpZiAoZHVlRGF0ZUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tY3RybC0tYWN0aXZlXCIpKSB7XG4gICAgICAgICAgc29ydEJ5RHVlRGF0ZSgpO1xuICAgICAgICAgIHJlcGxhY2VEdWVEYXRlUm93cygpO1xuICAgICAgICAgIHNob3dCeUR1ZURhdGUoKTtcbiAgICAgICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgICAgIGZvcm1hdERhdGVzRHVlVmlldygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tY3RybC0tYWN0aXZlXCIpKSB7XG4gICAgICAgICAgc29ydEJ5UHJpb3JpdHkoKTtcbiAgICAgICAgICByZXBsYWNlUHJpb3JpdHlSb3dzKCk7XG4gICAgICAgICAgc2hvd0J5UHJpb3JpdHkoKTtcbiAgICAgICAgICBmaW5kUGFzdER1ZSgpO1xuICAgICAgICAgIGZvcm1hdERhdGVzUHJpb3JpdHkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRGVsZXRlIENhdGVnb3J5IHdpdGggYW55IGFuZCBhbGwgZW50cmllc1xuICAgIGNvbnN0IGRlbGV0ZUNhdGVnb3J5SW5kZXggPSBldmVudC50YXJnZXQuZGF0YXNldC5kZWxldGVDYXRJbmRleDtcbiAgICBjb25zdCBkZWxldGVDYXRlZ29yeU5hbWUgPSBldmVudC50YXJnZXQuZGF0YXNldC5kZWxldGVDYXQ7XG4gICAgY29uc3QgZGVsZXRlQ2F0QnRucyA9IEFycmF5LmZyb20oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtZGVsZXRlLWNhdFwiKVxuICAgICk7XG4gICAgZGVsZXRlQ2F0QnRucy5mb3JFYWNoKChidG4pID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiBldmVudC50YXJnZXQgPT09IGJ0bikge1xuICAgICAgICByZW1vdmVDYXRlZ29yeShkZWxldGVDYXRlZ29yeUluZGV4LCBkZWxldGVDYXRlZ29yeU5hbWUpO1xuICAgICAgICByZXBsYWNlQ2F0ZWdvcnlTZWN0aW9ucygpO1xuICAgICAgICBjcmVhdGVDYXRlZ29yeVNlY3Rpb24oKTtcbiAgICAgICAgcmVwbGFjZVRvRG9JdGVtcygpO1xuICAgICAgICBkaXNwbGF5VG9Eb0VudHJ5KCk7XG4gICAgICAgIGZpbmRQYXN0RHVlKCk7XG4gICAgICAgIGZvcm1hdERhdGVzQ2F0ZWdvcnkoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIERpc3BsYXkgRm9ybSB0byBlZGl0IFRvIERvIGVudHJ5XG4gICAgY29uc3QgZWRpdEljb24gPSBwYXJzZUludChldmVudC50YXJnZXQuZGF0YXNldC5lZGl0KTtcbiAgICBjb25zdCBlZGl0QnRucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWVkaXRcIikpO1xuICAgIGVkaXRCdG5zLmZvckVhY2goKGVkaXQpID0+IHtcbiAgICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIiAmJiBldmVudC50YXJnZXQgPT09IGVkaXQpIHtcbiAgICAgICAgY29uc29sZS5sb2codHlwZW9mIGVkaXRJY29uKTtcbiAgICAgICAgc2hvd0Zvcm1XaXRoSW5mbyhlZGl0SWNvbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFya0NvbXBsZXRlKCkge1xuICBjb250ZW50Qm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFza0luZGV4ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuY2hlY2s7XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0YXNrSW5kZXgpIGNvbnNvbGUubG9nKHRhc2tJbmRleCk7XG4gICAgY2hhbmdlQ29tcGxldGVTdGF0dXModGFza0luZGV4KTtcbiAgICByZXBsYWNlQ29tcGxldGVkUm93cygpO1xuICAgIHNob3dDb21wbGV0ZWRUYXNrcygpO1xuICAgIHJlcGxhY2VUb0RvSXRlbXMoKTtcbiAgICBkaXNwbGF5VG9Eb0VudHJ5KCk7XG4gICAgZmluZFBhc3REdWUoKTtcbiAgICBmb3JtYXREYXRlc0NhdGVnb3J5KCk7XG5cbiAgICBpZiAoZHVlRGF0ZUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tY3RybC0tYWN0aXZlXCIpKSB7XG4gICAgICBzb3J0QnlEdWVEYXRlKCk7XG4gICAgICByZXBsYWNlRHVlRGF0ZVJvd3MoKTtcbiAgICAgIHNob3dCeUR1ZURhdGUoKTtcbiAgICAgIGZpbmRQYXN0RHVlKCk7XG4gICAgICBmb3JtYXREYXRlc0R1ZVZpZXcoKTtcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImJ0bi1jdHJsLS1hY3RpdmVcIikpIHtcbiAgICAgIHNvcnRCeVByaW9yaXR5KCk7XG4gICAgICByZXBsYWNlUHJpb3JpdHlSb3dzKCk7XG4gICAgICBzaG93QnlQcmlvcml0eSgpO1xuICAgICAgZmluZFBhc3REdWUoKTtcbiAgICAgIGZvcm1hdERhdGVzUHJpb3JpdHkoKTtcbiAgICB9XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTywgaXNBZnRlciB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgZGF0ZVRpbWVQaWNrZXIsIGNyZWF0aW9uVGltZVBpY2tlciB9IGZyb20gXCIuL3F1ZXJ5U2VsZWN0b3JzXCI7XG5pbXBvcnQgeyB0b0RvSXRlbXNBcnJheSB9IGZyb20gXCIuL21vZGVsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlc0NhdGVnb3J5KCkge1xuICBjb25zdCBkdWVEYXRlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvdy1kdWUtZGF0ZVwiKTtcbiAgZHVlRGF0ZURpc3BsYXkuZm9yRWFjaCgoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdChwYXJzZUlTTyhkYXRlLnRleHRDb250ZW50LCAwKSwgXCJQUHBcIik7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdHRlZDtcbiAgICBkYXRlLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZXNEdWVWaWV3KCkge1xuICBjb25zdCBkdWVEYXRlRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvdy1kYXRlLWR1ZVwiKTtcblxuICBkdWVEYXRlRGlzcGxheS5mb3JFYWNoKChkYXRlKSA9PiB7XG4gICAgY29uc3QgZm9ybWF0dGVkID0gZm9ybWF0KHBhcnNlSVNPKGRhdGUudGV4dENvbnRlbnQsIDApLCBcIlBQcFwiKTtcbiAgICBkYXRlLnRleHRDb250ZW50ID0gZm9ybWF0dGVkO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGVzUHJpb3JpdHkoKSB7XG4gIGNvbnN0IGR1ZURhdGVEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaG93LWRhdGUtcHJpb3JpdHlcIik7XG5cbiAgZHVlRGF0ZURpc3BsYXkuZm9yRWFjaCgoZGF0ZSkgPT4ge1xuICAgIGNvbnN0IGZvcm1hdHRlZCA9IGZvcm1hdChwYXJzZUlTTyhkYXRlLnRleHRDb250ZW50LCAwKSwgXCJQUHBcIik7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGZvcm1hdHRlZDtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW1pdERhdGVQaWNrZXIoKSB7XG4gIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gIGxldCBkYXkgPSB0b2RheS5nZXREYXRlKCk7XG4gIGxldCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCkgKyAxO1xuICBsZXQgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gIGxldCBob3VyID0gdG9kYXkuZ2V0SG91cnMoKTtcbiAgbGV0IG1pbnV0ZSA9IHRvZGF5LmdldE1pbnV0ZXMoKTtcblxuICBpZiAoZGF5IDwgMTApIHtcbiAgICBkYXkgPSBcIjBcIiArIGRheTtcbiAgfVxuICBpZiAobW9udGggPCAxMCkge1xuICAgIG1vbnRoID0gXCIwXCIgKyBtb250aDtcbiAgfVxuICBpZiAoaG91ciA8IDEwKSB7XG4gICAgaG91ciA9IFwiMFwiICsgaG91cjtcbiAgfVxuICBpZiAobWludXRlIDwgMTApIHtcbiAgICBtaW51dGUgPSBcIjBcIiArIG1pbnV0ZTtcbiAgfVxuXG4gIGNvbnN0IG1pbkRhdGUgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5ICsgXCJUXCIgKyBob3VyICsgXCI6XCIgKyBtaW51dGU7XG4gIGNvbnNvbGUubG9nKG1pbkRhdGUpO1xuXG4gIGRhdGVUaW1lUGlja2VyLnNldEF0dHJpYnV0ZShcIm1pblwiLCBtaW5EYXRlKTtcbiAgY3JlYXRpb25UaW1lUGlja2VyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIG1pbkRhdGUpO1xuXG4gIHJldHVybiBtaW5EYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZFBhc3REdWUoKSB7XG4gIGNvbnN0IGN1cnJlbnREYXRlVGltZSA9IGxpbWl0RGF0ZVBpY2tlcigpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0l0ZW1zQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0YXNrRHVlID0gdG9Eb0l0ZW1zQXJyYXlbaV0uZHVlRGF0ZTtcblxuICAgIGNvbnN0IGNvbXBhcmlzb24gPSBpc0FmdGVyKFxuICAgICAgcGFyc2VJU08oY3VycmVudERhdGVUaW1lLCAwKSxcbiAgICAgIHBhcnNlSVNPKHRhc2tEdWUsIDApXG4gICAgKTtcbiAgICBjb25zb2xlLmxvZyhjb21wYXJpc29uKTtcblxuICAgIGNvbnN0IGR1ZURhdGVEaXNwbGF5ID0gQXJyYXkuZnJvbShcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hvdy1kdWUtZGF0ZVwiKVxuICAgICk7XG5cbiAgICBkdWVEYXRlRGlzcGxheS5mb3JFYWNoKChkYXRlLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGluZGV4ID09PSB0b0RvSXRlbXNBcnJheS5pbmRleE9mKHRvRG9JdGVtc0FycmF5W2ldKSkge1xuICAgICAgICBpZiAoY29tcGFyaXNvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGRhdGUuc3R5bGUuY29sb3IgPSBcIiNiYzI3MDJcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHRhYkNvbnRyb2xzIGZyb20gXCIuL3RhYkNvbnRyb2xcIjtcbmltcG9ydCB7XG4gIGJ1aWxkRnJvbVN0b3JhZ2UsXG4gIHNlbGVjdEFjdGlvbkZvcm0sXG4gIHNob3dDYXRlZ29yeUZvcm0sXG4gIHNob3dDYXRlZ29yeVdhcm5pbmcsXG4gIGhpZGVDYXRlZ29yeVdhcm5pbmcsXG4gIGNhbmNlbENhdGVnb3J5Rm9ybSxcbiAgc3VibWl0TmV3Q2F0ZWdvcnksXG4gIHN1Ym1pdFRvRG8sXG4gIGNhbmNlbFRvRG8sXG4gIGRpc3BsYXlCeVZpZXcsXG4gIGRpc3BsYXlCeVZpZXdXaXRoS2V5Ym9hcmQsXG4gIGhhbmRsZUV2ZW50RGVsZWdhdGlvbixcbiAgaGFuZGxlRXZlbnREZWxlZ2F0aW9uV2l0aEtleWJvYXJkLFxuICBtYXJrQ29tcGxldGUsXG59IGZyb20gXCIuL2NvbnRyb2xsZXJcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICB0YWJDb250cm9scygpO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGFpbmVyXCIpLmZvckVhY2goKHRhYkJ0bikgPT4ge1xuICAgIHRhYkJ0bi5xdWVyeVNlbGVjdG9yKFwiLmJ0bi1jdHJsXCIpLmNsaWNrKCk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29udGVudC1ib3hcIikuZm9yRWFjaCgodGFiQ29udGVudCkgPT4ge1xuICAgIHRhYkNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi50YWItY29udGVudFwiKS5jbGljaygpO1xuICB9KTtcblxuICBidWlsZEZyb21TdG9yYWdlKCk7XG4gIHNlbGVjdEFjdGlvbkZvcm0oKTtcbiAgc2hvd0NhdGVnb3J5Rm9ybSgpO1xuICBzaG93Q2F0ZWdvcnlXYXJuaW5nKCk7XG4gIGhpZGVDYXRlZ29yeVdhcm5pbmcoKTtcbiAgY2FuY2VsQ2F0ZWdvcnlGb3JtKCk7XG4gIHN1Ym1pdE5ld0NhdGVnb3J5KCk7XG4gIHN1Ym1pdFRvRG8oKTtcbiAgY2FuY2VsVG9EbygpO1xuICBkaXNwbGF5QnlWaWV3KCk7XG4gIGRpc3BsYXlCeVZpZXdXaXRoS2V5Ym9hcmQoKTtcbiAgaGFuZGxlRXZlbnREZWxlZ2F0aW9uKCk7XG4gIGhhbmRsZUV2ZW50RGVsZWdhdGlvbldpdGhLZXlib2FyZCgpO1xuICBtYXJrQ29tcGxldGUoKTtcbn0pO1xuIiwiaW1wb3J0IHtcbiAgY2F0ZWdvcnlJbnB1dCxcbiAgdG9Eb1RpdGxlLFxuICB0b0RvUHJpb3JpdHksXG4gIHRvRG9EZXNjcmlwdGlvbixcbiAgdG9Eb0R1ZURhdGUsXG4gIGNyZWF0aW9uVGltZVBpY2tlcixcbiAgY2F0ZWdvcnlOYW1lLFxufSBmcm9tIFwiLi9xdWVyeVNlbGVjdG9yc1wiO1xuXG5sZXQgY2F0ZWdvcmllcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmNhdGVnb3JpZXMgfHwgXCJbXVwiKTtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2F0ZWdvcmllc1wiLCBKU09OLnN0cmluZ2lmeShjYXRlZ29yaWVzKSk7XG5leHBvcnQgbGV0IGNhdGVnb3JpZXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpKTtcblxubGV0IHRvRG9JdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnRvRG9JdGVtcyB8fCBcIltdXCIpO1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvSXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb0l0ZW1zKSk7XG5leHBvcnQgbGV0IHRvRG9JdGVtc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9JdGVtc1wiKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdDYXRlZ29yeUFycmF5KCkge1xuICBjb25zdCBuZXdDYXRlZ29yeSA9IGNhdGVnb3J5SW5wdXQudmFsdWUudHJpbSgpO1xuXG4gIGlmIChcbiAgICBjYXRlZ29yaWVzLnNvbWUoXG4gICAgICAoY2F0ZWdvcnkpID0+IGNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IG5ld0NhdGVnb3J5LnRvTG93ZXJDYXNlKClcbiAgICApXG4gICkge1xuICAgIGFsZXJ0KFwiRHVwbGljYXRlIGNhdGVnb3J5LiBQbGVhc2UgY2hvb3NlIGEgbmV3IGNhdGVnb3J5IHRpdGxlXCIpO1xuICB9IGVsc2Uge1xuICAgIGxldCBhZGRDYXRlZ29yeSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXRlZ29yaWVzXCIpKTtcbiAgICBhZGRDYXRlZ29yeS5wdXNoKG5ld0NhdGVnb3J5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhdGVnb3JpZXNcIiwgSlNPTi5zdHJpbmdpZnkoYWRkQ2F0ZWdvcnkpKTtcbiAgICBjYXRlZ29yaWVzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKSk7XG4gICAgY29uc29sZS5sb2coY2F0ZWdvcmllc0FycmF5KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbmV3VG9Eb0l0ZW0oKSB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50O1xuICBjb25zdCB0aXRsZSA9IHRvRG9UaXRsZS52YWx1ZS50cmltKCk7XG4gIGNvbnN0IHByaW9yaXR5ID0gdG9Eb1ByaW9yaXR5LnZhbHVlLnRyaW0oKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSB0b0RvRGVzY3JpcHRpb24udmFsdWUudHJpbSgpO1xuICBjb25zdCBkdWVEYXRlID0gdG9Eb0R1ZURhdGUudmFsdWUudHJpbSgpO1xuICBjb25zdCBjcmVhdGlvblRpbWUgPSBjcmVhdGlvblRpbWVQaWNrZXIudmFsdWUudHJpbSgpO1xuICBjb25zdCBjb21wbGV0ZWRUYXNrID0gZmFsc2U7XG5cbiAgY29uc3QgdG9Eb0l0ZW0gPSB7XG4gICAgY2F0ZWdvcnksXG4gICAgdGl0bGUsXG4gICAgcHJpb3JpdHksXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZHVlRGF0ZSxcbiAgICBjcmVhdGlvblRpbWUsXG4gICAgY29tcGxldGVkVGFzayxcbiAgfTtcbiAgbGV0IGFkZFRvRG9JdGVtID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9JdGVtc1wiKSk7XG4gIGFkZFRvRG9JdGVtLnB1c2godG9Eb0l0ZW0pO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9JdGVtc1wiLCBKU09OLnN0cmluZ2lmeShhZGRUb0RvSXRlbSkpO1xuICB0b0RvSXRlbXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvSXRlbXNcIikpO1xuICBjb25zb2xlLmxvZyh0b0RvSXRlbXNBcnJheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb0RvRnJvbUNhdGVnb3J5KHJlbW92ZWRJdGVtKSB7XG4gIGlmIChyZW1vdmVkSXRlbSkge1xuICAgIGxldCBjb25maXJtUmVtb3ZlID0gY29uZmlybShcbiAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGVudHJ5PyBUaGlzIGNhbm5vdCBiZSB1bmRvbmVcIlxuICAgICk7XG5cbiAgICBpZiAoY29uZmlybVJlbW92ZSkge1xuICAgICAgbGV0IGFycmF5Q291bnQgPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICAgICAgaWYgKGFycmF5Q291bnQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUNvdW50OyBpKyspIHtcbiAgICAgICAgICBsZXQga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuXG4gICAgICAgICAgaWYgKGtleSA9PT0gXCJ0b0RvSXRlbXNcIikge1xuICAgICAgICAgICAgbGV0IHVwZGF0ZUFycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9JdGVtc1wiKSk7XG5cbiAgICAgICAgICAgIHVwZGF0ZUFycmF5LnNwbGljZShyZW1vdmVkSXRlbSwgMSk7XG5cbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb0l0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KHVwZGF0ZUFycmF5KSk7XG4gICAgICAgICAgICB0b0RvSXRlbXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvSXRlbXNcIikpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9Eb0l0ZW1zQXJyYXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRvRG9JblN0b3JhZ2UoZW50cnlJbmRleCkge1xuICBsZXQgYXJyYXlDb3VudCA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gIGlmIChhcnJheUNvdW50KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUNvdW50OyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgY29uc29sZS5sb2coa2V5KTtcblxuICAgICAgaWYgKGtleSA9PT0gXCJ0b0RvSXRlbXNcIikge1xuICAgICAgICBsZXQgdXBkYXRlQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0l0ZW1zXCIpKTtcblxuICAgICAgICB1cGRhdGVBcnJheS5hdChlbnRyeUluZGV4KS5jYXRlZ29yeSA9IGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudDtcbiAgICAgICAgdXBkYXRlQXJyYXkuYXQoZW50cnlJbmRleCkudGl0bGUgPSB0b0RvVGl0bGUudmFsdWUudHJpbSgpO1xuICAgICAgICB1cGRhdGVBcnJheS5hdChlbnRyeUluZGV4KS5wcmlvcml0eSA9IHRvRG9Qcmlvcml0eS52YWx1ZS50cmltKCk7XG4gICAgICAgIHVwZGF0ZUFycmF5LmF0KGVudHJ5SW5kZXgpLmRlc2NyaXB0aW9uID0gdG9Eb0Rlc2NyaXB0aW9uLnZhbHVlLnRyaW0oKTtcbiAgICAgICAgdXBkYXRlQXJyYXkuYXQoZW50cnlJbmRleCkuZHVlRGF0ZSA9IHRvRG9EdWVEYXRlLnZhbHVlLnRyaW0oKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9JdGVtc1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVBcnJheSkpO1xuICAgICAgICB0b0RvSXRlbXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvSXRlbXNcIikpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b0RvSXRlbXNBcnJheSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDYXRlZ29yeShyZW1vdmVkSW5kZXgsIHJlbW92ZWRDYXROYW1lKSB7XG4gIGlmIChyZW1vdmVkQ2F0TmFtZSkge1xuICAgIGNvbnNvbGUubG9nKHJlbW92ZWRJbmRleCk7XG4gICAgY29uc29sZS5sb2cocmVtb3ZlZENhdE5hbWUpO1xuICAgIGxldCBjb25maXJtUmVtb3ZlQ2F0ID0gY29uZmlybShcbiAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGNhdGVnb3J5IHdpdGggYWxsIG9mIGl0cyBlbnRyaWVzPyBUaGlzIGNhbm5vdCBiZSB1bmRvbmVcIlxuICAgICk7XG5cbiAgICBpZiAoY29uZmlybVJlbW92ZUNhdCkge1xuICAgICAgbGV0IGVkaXRUb0RvSXRlbXNBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvSXRlbXNcIikpO1xuICAgICAgY29uc3QgZGVsZXRlZEVudHJpZXNCeUNhdE5hbWUgPSBlZGl0VG9Eb0l0ZW1zQXJyYXkuZmlsdGVyKFxuICAgICAgICAoZW50cnkpID0+IGVudHJ5LmNhdGVnb3J5ICE9PSByZW1vdmVkQ2F0TmFtZVxuICAgICAgKTtcblxuICAgICAgZWRpdFRvRG9JdGVtc0FycmF5ID0gZGVsZXRlZEVudHJpZXNCeUNhdE5hbWU7XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb0l0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KGVkaXRUb0RvSXRlbXNBcnJheSkpO1xuICAgICAgdG9Eb0l0ZW1zQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0l0ZW1zXCIpKTtcbiAgICAgIGNvbnNvbGUubG9nKHRvRG9JdGVtc0FycmF5KTtcblxuICAgICAgbGV0IGFycmF5Q291bnQgPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICAgICAgaWYgKGFycmF5Q291bnQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUNvdW50OyBpKyspIHtcbiAgICAgICAgICBsZXQga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuXG4gICAgICAgICAgaWYgKGtleSA9PT0gXCJjYXRlZ29yaWVzXCIpIHtcbiAgICAgICAgICAgIGxldCB1cGRhdGVDYXRlZ29yaWVzQXJyYXkgPSBKU09OLnBhcnNlKFxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhdGVnb3JpZXNcIilcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHVwZGF0ZUNhdGVnb3JpZXNBcnJheS5zcGxpY2UocmVtb3ZlZENhdE5hbWUsIDEpO1xuXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgXCJjYXRlZ29yaWVzXCIsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHVwZGF0ZUNhdGVnb3JpZXNBcnJheSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjYXRlZ29yaWVzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2F0ZWdvcmllc1wiKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzQXJyYXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQ29tcGxldGVTdGF0dXModGFza0luZGV4KSB7XG4gIGxldCBjaGVja0NvbXBsZXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9JdGVtc1wiKSk7XG5cbiAgaWYgKGNoZWNrQ29tcGxldGUuYXQodGFza0luZGV4KSkge1xuICAgIGlmIChjaGVja0NvbXBsZXRlW3Rhc2tJbmRleF0uY29tcGxldGVkVGFzayA9PT0gZmFsc2UpIHtcbiAgICAgIGNoZWNrQ29tcGxldGVbdGFza0luZGV4XS5jb21wbGV0ZWRUYXNrID0gdHJ1ZTtcblxuICAgICAgbGV0IGFycmF5Q291bnQgPSBsb2NhbFN0b3JhZ2UubGVuZ3RoO1xuICAgICAgaWYgKGFycmF5Q291bnQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheUNvdW50OyBpKyspIHtcbiAgICAgICAgICBsZXQga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xuXG4gICAgICAgICAgaWYgKGtleSA9PT0gXCJ0b0RvSXRlbXNcIikge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0RvSXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoY2hlY2tDb21wbGV0ZSkpO1xuICAgICAgICAgICAgdG9Eb0l0ZW1zQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb0l0ZW1zXCIpKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvRG9JdGVtc0FycmF5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHVuY2hlY2tDb21wbGV0ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0RvSXRlbXNcIikpO1xuXG4gICAgICB1bmNoZWNrQ29tcGxldGVbdGFza0luZGV4XS5jb21wbGV0ZWRUYXNrID09PSB0cnVlO1xuICAgICAgdW5jaGVja0NvbXBsZXRlW3Rhc2tJbmRleF0uY29tcGxldGVkVGFzayA9IGZhbHNlO1xuXG4gICAgICBsZXQgYXJyYXlDb3VudCA9IGxvY2FsU3RvcmFnZS5sZW5ndGg7XG4gICAgICBpZiAoYXJyYXlDb3VudCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFycmF5Q291bnQ7IGkrKykge1xuICAgICAgICAgIGxldCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKGtleSk7XG5cbiAgICAgICAgICBpZiAoa2V5ID09PSBcInRvRG9JdGVtc1wiKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9JdGVtc1wiLCBKU09OLnN0cmluZ2lmeSh1bmNoZWNrQ29tcGxldGUpKTtcbiAgICAgICAgICAgIHRvRG9JdGVtc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9JdGVtc1wiKSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b0RvSXRlbXNBcnJheSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0QnlDcmVhdGlvbkRhdGUoKSB7XG4gIHRvRG9JdGVtc0FycmF5LnNvcnQoXG4gICAgKGRhdGUxLCBkYXRlMikgPT5cbiAgICAgIERhdGUucGFyc2UoZGF0ZTEuY3JlYXRpb25UaW1lKSAtIERhdGUucGFyc2UoZGF0ZTIuY3JlYXRpb25UaW1lKVxuICApO1xuXG4gIGNvbnNvbGUubG9nKHRvRG9JdGVtc0FycmF5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNvcnRCeUR1ZURhdGUoKSB7XG4gIHRvRG9JdGVtc0FycmF5LnNvcnQoXG4gICAgKGRhdGUxLCBkYXRlMikgPT4gRGF0ZS5wYXJzZShkYXRlMS5kdWVEYXRlKSAtIERhdGUucGFyc2UoZGF0ZTIuZHVlRGF0ZSlcbiAgKTtcblxuICBjb25zb2xlLmxvZyh0b0RvSXRlbXNBcnJheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzb3J0QnlQcmlvcml0eSgpIHtcbiAgY29uc3QgaW1wb3J0YW5jZSA9IHtcbiAgICBsb3c6IDMsXG4gICAgbWVkaXVtOiAyLFxuICAgIGhpZ2g6IDEsXG4gIH07XG5cbiAgdG9Eb0l0ZW1zQXJyYXkuc29ydChcbiAgICAoYSwgYikgPT4gaW1wb3J0YW5jZVthLnByaW9yaXR5XSAtIGltcG9ydGFuY2VbYi5wcmlvcml0eV1cbiAgKTtcblxuICBjb25zb2xlLmxvZyh0b0RvSXRlbXNBcnJheSk7XG59XG4iLCJleHBvcnQgY29uc3QgY29udGVudEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib3hcIik7XG5leHBvcnQgY29uc3Qgc2VsZWN0QWRkVHlwZURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLnNlbGVjdC1mb3JtLWNvbnRhaW5lclwiXG4pO1xuZXhwb3J0IGNvbnN0IGFkZENhdGVnb3J5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtY2F0ZWdvcnlcIik7XG5leHBvcnQgY29uc3Qgc2VsZWN0VG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2VsZWN0LXRvLWRvLWJ0blwiKTtcbmV4cG9ydCBjb25zdCBjYXRlZ29yeVdhcm5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIi5jcmVhdGUtY2F0LXdhcm5pbmctZGl2XCJcbik7XG5leHBvcnQgY29uc3QgYWdyZWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFncmVlLWJ0blwiKTtcbmV4cG9ydCBjb25zdCBhZGRDYXRlZ29yeU1zZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLWNhdC1tc2dcIik7XG5leHBvcnQgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaG93LWZvcm0tYnRuXCIpO1xuZXhwb3J0IGNvbnN0IHJldHVyblRvQ2F0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXQtdGFiXCIpO1xuZXhwb3J0IGNvbnN0IGNhdGVnb3J5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWZvci10YWI9J2NhdGVnb3J5J11cIik7XG5leHBvcnQgY29uc3QgZHVlRGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1mb3ItdGFiPSdkdWUtZGF0ZSddXCIpO1xuZXhwb3J0IGNvbnN0IHByaW9yaXR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWZvci10YWI9J3ByaW9yaXR5J11cIik7XG5leHBvcnQgY29uc3QgY2F0ZWdvcnlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ5LWNhdGVnb3J5XCIpO1xuZXhwb3J0IGNvbnN0IHNpZGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGUtbmF2XCIpO1xuZXhwb3J0IGNvbnN0IGNhbmNlbENhdGVnb3J5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtY2F0ZWdvcnlcIik7XG5leHBvcnQgY29uc3QgY2F0ZWdvcnlGb3JtQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXQtZm9ybS1jb250YWluZXJcIik7XG5leHBvcnQgY29uc3QgY2F0ZWdvcnlGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXRlZ29yeS1mb3JtXCIpO1xuZXhwb3J0IGNvbnN0IGNhdGVnb3J5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5XCIpO1xuZXhwb3J0IGNvbnN0IGNhdGVnb3J5U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2F0LXNlY3Rpb25cIik7XG5leHBvcnQgY29uc3QgdG9Eb0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZGl2XCIpO1xuZXhwb3J0IGNvbnN0IHRvRG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtXCIpO1xuZXhwb3J0IGNvbnN0IGNhbmNlbFRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC10by1kb1wiKTtcbmV4cG9ydCBjb25zdCBjYXRlZ29yeU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5LW5hbWVcIik7XG5leHBvcnQgY29uc3QgdG9Eb1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aXRsZVwiKTtcbmV4cG9ydCBjb25zdCB0b0RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stcHJpb3JpdHlcIik7XG5leHBvcnQgY29uc3QgdG9Eb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcbmV4cG9ydCBjb25zdCB0b0RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlLWRhdGVcIik7XG5leHBvcnQgY29uc3QgZGF0ZVRpbWVQaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcImlucHV0W3R5cGU9J2RhdGV0aW1lLWxvY2FsJ11cIlxuKTtcbmV4cG9ydCBjb25zdCBjcmVhdGlvblRpbWVQaWNrZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0aW9uLWRhdGVcIik7XG5leHBvcnQgY29uc3QgYWRkVG9Eb0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1mb3JtLWFkZF1cIik7XG5leHBvcnQgY29uc3QgZWRpdFRvRG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZm9ybS1lZGl0XVwiKTtcbmV4cG9ydCBjb25zdCBkdWVEYXRlVGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHVlLXZpZXctZGl2XCIpO1xuZXhwb3J0IGNvbnN0IHByaW9yaXR5VGFza0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJpb3JpdHktdmlldy1kaXZcIik7XG5leHBvcnQgY29uc3QgY29tcGxldGVkVGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXBsZXRlZC12aWV3LWRpdlwiKTtcbiIsImltcG9ydCB7IGFkZEJ0biwgcmV0dXJuVG9DYXRUYWIgfSBmcm9tIFwiLi9xdWVyeVNlbGVjdG9yc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0YWJDb250cm9scygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idG4tY3RybFwiKS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuICAgICAgY29uc3QgY2xpY2tlZEJ0biA9IGJ1dHRvbi5kYXRhc2V0LmZvclRhYjtcbiAgICAgIGNvbnN0IHRhYkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudC1ib3hcIik7XG4gICAgICBjb25zdCBhY3RpdmVUYWIgPSB0YWJDb250YWluZXIucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYC50YWItY29udGVudFtkYXRhLXRhYj1cIiR7Y2xpY2tlZEJ0bn1cIl1gXG4gICAgICApO1xuXG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGJ0bkNvbnRhaW5lcik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhjbGlja2VkVGFiKTtcbiAgICAgIC8vICAgY29uc29sZS5sb2codGFiQ29udGFpbmVyKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVRhYik7XG5cbiAgICAgIGJ0bkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ0bi1jdHJsXCIpLmZvckVhY2goKHRhYkJ0bikgPT4ge1xuICAgICAgICB0YWJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImJ0bi1jdHJsLS1hY3RpdmVcIik7XG4gICAgICB9KTtcblxuICAgICAgdGFiQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFiLWNvbnRlbnRcIikuZm9yRWFjaCgodGFiQ29udGVudCkgPT4ge1xuICAgICAgICB0YWJDb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWItY29udGVudC0tYWN0aXZlXCIpO1xuICAgICAgfSk7XG5cbiAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnRuLWN0cmwtLWFjdGl2ZVwiKTtcbiAgICAgIGFjdGl2ZVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiLWNvbnRlbnQtLWFjdGl2ZVwiKTtcblxuICAgICAgaWYgKGFkZEJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJidG4tY3RybC0tYWN0aXZlXCIpKSB7XG4gICAgICAgIGFkZEJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYnRuLWN0cmwtLWFjdGl2ZVwiKTtcbiAgICAgICAgcmV0dXJuVG9DYXRUYWIuY2xhc3NMaXN0LmFkZChcImJ0bi1jdHJsLS1hY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHsgY2F0ZWdvcmllc0FycmF5LCB0b0RvSXRlbXNBcnJheSB9IGZyb20gXCIuL21vZGVsXCI7XG5pbXBvcnQge1xuICBhZGRDYXRlZ29yeU1zZyxcbiAgc2VsZWN0QWRkVHlwZURpdixcbiAgY2F0ZWdvcnlXYXJuaW5nLFxuICBjYXRlZ29yeUZvcm1Cb3gsXG4gIGNhdGVnb3J5Rm9ybSxcbiAgY2F0ZWdvcnlUYWIsXG4gIGNhdGVnb3J5U2VjdGlvbixcbiAgc2lkZU5hdixcbiAgdG9Eb0Zvcm1Db250YWluZXIsXG4gIHRvRG9Gb3JtLFxuICBjYXRlZ29yeU5hbWUsXG4gIHRvRG9UaXRsZSxcbiAgdG9Eb1ByaW9yaXR5LFxuICB0b0RvRGVzY3JpcHRpb24sXG4gIHRvRG9EdWVEYXRlLFxuICBhZGRUb0RvQnRuLFxuICBlZGl0VG9Eb0J0bixcbiAgZHVlRGF0ZVRhc2tEaXYsXG4gIHByaW9yaXR5VGFza0RpdixcbiAgY29tcGxldGVkVGFza3NEaXYsXG59IGZyb20gXCIuL3F1ZXJ5U2VsZWN0b3JzXCI7XG5pbXBvcnQgeyBsaW1pdERhdGVQaWNrZXIgfSBmcm9tIFwiLi9kYXRlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VsZWN0QWRkVHlwZSgpIHtcbiAgYWRkQ2F0ZWdvcnlNc2cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBzZWxlY3RBZGRUeXBlRGl2LnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcbiAgaWYgKHNlbGVjdEFkZFR5cGVEaXYuc3R5bGUuZGlzcGxheSA9PT0gXCJpbml0aWFsXCIpIHtcbiAgICBzaWRlTmF2LmNsYXNzTGlzdC5hZGQoXCJjYXQtZm9ybS12aXNpYmxlXCIpO1xuICB9IGVsc2Uge1xuICAgIHNpZGVOYXYuY2xhc3NMaXN0LnJlbW92ZShcImNhdC1mb3JtLXZpc2libGVcIik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dDYXRNZXNzYWdlKCkge1xuICBhZGRDYXRlZ29yeU1zZy5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XG5cbiAgY29uc29sZS5sb2coYWRkQ2F0ZWdvcnlNc2cuc3R5bGUuZGlzcGxheSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q2F0ZWdvcnlXYXJuaW5nKCkge1xuICBjYXRlZ29yeVdhcm5pbmcuc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xuICBzZWxlY3RBZGRUeXBlRGl2LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlVG9Eb1dhcm5pbmcoKSB7XG4gIGNhdGVnb3J5V2FybmluZy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNhdGVnb3J5Rm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVNlbGVjdGlvbkJveCgpIHtcbiAgc2VsZWN0QWRkVHlwZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBuZXdDYXRlZ29yeUZvcm0oKSB7XG4gIHNlbGVjdEFkZFR5cGVEaXYuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjYXRlZ29yeUZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xuICBjYXRlZ29yeVRhYi5jbGFzc0xpc3QuYWRkKFwidGFiLWNvbnRlbnQtLWFjdGl2ZVwiKTtcblxuICBpZiAoY2F0ZWdvcnlGb3JtQm94LnN0eWxlLmRpc3BsYXkgPT09IFwiaW5pdGlhbFwiKSB7XG4gICAgc2lkZU5hdi5jbGFzc0xpc3QuYWRkKFwiY2F0LWZvcm0tdmlzaWJsZVwiKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGlkZUNhdGVnb3J5Rm9ybSgpIHtcbiAgY2F0ZWdvcnlGb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY2F0ZWdvcnlGb3JtLnJlc2V0KCk7XG4gIGFkZENhdGVnb3J5TXNnLnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcbiAgc2lkZU5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiY2F0LWZvcm0tdmlzaWJsZVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5U2VjdGlvbigpIHtcbiAgYWRkQ2F0ZWdvcnlNc2cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIGNvbnNvbGUubG9nKGNhdGVnb3JpZXNBcnJheSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXRlZ29yaWVzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjYXRlZ29yeUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhdGVnb3J5Q2FyZC5jbGFzc05hbWUgPSBcImNhdC1jYXJkXCI7XG4gICAgY2F0ZWdvcnlDYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtY2F0LW51bVwiLCBpKTtcblxuICAgIGNvbnN0IGNhcmRDYXRlZ29yeU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY2FyZENhdGVnb3J5TmFtZS5jbGFzc05hbWUgPSBcImNhdC1uYW1lXCI7XG4gICAgY2FyZENhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9IGAke2NhdGVnb3JpZXNBcnJheVtpXX1gO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXRlZ29yeUNvbnRlbnQuY2xhc3NOYW1lID0gXCJjYXQtY29udGVudFwiO1xuICAgIGNhdGVnb3J5Q29udGVudC5kYXRhc2V0LmNvbnRlbnQgPSBgJHtjYXRlZ29yaWVzQXJyYXlbaV19YDtcblxuICAgIGNvbnN0IGFkZEl0ZW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEl0ZW1CdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgYWRkSXRlbUJ0bi5jbGFzc05hbWUgPSBcIm5ldy10by1kb1wiO1xuICAgIGFkZEl0ZW1CdG4uaWQgPSBcImFkZC1pdGVtXCI7XG4gICAgYWRkSXRlbUJ0bi52YWx1ZSA9IFwiYWRkLWl0ZW1cIjtcbiAgICBhZGRJdGVtQnRuLnNldEF0dHJpYnV0ZShcImRhdGEtY2F0ZWdvcnlcIiwgYCR7Y2F0ZWdvcmllc0FycmF5W2ldfWApO1xuICAgIGFkZEl0ZW1CdG4udGV4dENvbnRlbnQgPSBcIkFkZCBJdGVtXCI7XG5cbiAgICBjb25zdCBkZWxldGVJY29uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkZWxldGVJY29uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZGVsZXRlLWljb25cIjtcbiAgICBkZWxldGVJY29uQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICAgIFwiZGF0YS1kZWxldGUtY2F0XCIsXG4gICAgICBgJHtjYXRlZ29yaWVzQXJyYXlbaV19YFxuICAgICk7XG4gICAgZGVsZXRlSWNvbkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWRlbGV0ZS1jYXQtaW5kZXhcIiwgaSk7XG5cbiAgICBjb25zdCBkZWxldGVCdG5JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGRlbGV0ZUJ0bkltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvaW1ncy90cmFzaC5zdmdcIjtcbiAgICBkZWxldGVCdG5JbWcuc2V0QXR0cmlidXRlKFwiZGF0YS1kZWxldGUtY2F0XCIsIGAke2NhdGVnb3JpZXNBcnJheVtpXX1gKTtcbiAgICBkZWxldGVCdG5JbWcuc2V0QXR0cmlidXRlKFwiZGF0YS1kZWxldGUtY2F0LWluZGV4XCIsIGkpO1xuICAgIGRlbGV0ZUJ0bkltZy5zZXRBdHRyaWJ1dGUoXCJmb2N1c2FibGVcIiwgdHJ1ZSk7XG4gICAgZGVsZXRlQnRuSW1nLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuXG4gICAgY2F0ZWdvcnlTZWN0aW9uLmFwcGVuZENoaWxkKGNhdGVnb3J5Q2FyZCk7XG4gICAgY2F0ZWdvcnlDYXJkLmFwcGVuZENoaWxkKGNhcmRDYXRlZ29yeU5hbWUpO1xuICAgIGNhdGVnb3J5Q2FyZC5hcHBlbmRDaGlsZChjYXRlZ29yeUNvbnRlbnQpO1xuICAgIGNhdGVnb3J5Q2FyZC5hcHBlbmRDaGlsZChhZGRJdGVtQnRuKTtcbiAgICBjYXRlZ29yeUNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbkNvbnRhaW5lcik7XG4gICAgZGVsZXRlSWNvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG5JbWcpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlQ2F0ZWdvcnlTZWN0aW9ucygpIHtcbiAgLy8gUmVwbGFjZXMgYWxsIGNhdGVnb3J5IHNlY3Rpb25zIG9uIGVhY2ggbmV3IGNhdGVnb3J5IGNyZWF0aW9uIHRvIHByZXZlbnQgZHVwbGljYXRlc1xuICB3aGlsZSAoY2F0ZWdvcnlTZWN0aW9uLmZpcnN0Q2hpbGQpIHtcbiAgICBjYXRlZ29yeVNlY3Rpb24ucmVtb3ZlQ2hpbGQoY2F0ZWdvcnlTZWN0aW9uLmZpcnN0Q2hpbGQpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0RvRm9ybURpc3BsYXkoYWRkQnRuKSB7XG4gIGNvbnNvbGUubG9nKGFkZEJ0bik7XG4gIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9IGFkZEJ0bjtcblxuICB0b0RvRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XG4gIHRvRG9Gb3JtQ29udGFpbmVyLnNjcm9sbFRvKDAsIDApO1xuICBhZGRUb0RvQnRuLnN0eWxlLmRpc3BsYXkgPSBcImluaXRpYWxcIjtcbiAgZWRpdFRvRG9CdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBsaW1pdERhdGVQaWNrZXIoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dGb3JtV2l0aEluZm8oZWRpdEJ0bkluZGV4LCBlZGl0QnRuQ2F0KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0l0ZW1zQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB0b0RvRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJpbml0aWFsXCI7XG4gICAgdG9Eb0Zvcm1Db250YWluZXIuc2Nyb2xsVG8oMCwgMCk7XG4gICAgYWRkVG9Eb0J0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZWRpdFRvRG9CdG4uc3R5bGUuZGlzcGxheSA9IFwiaW5pdGlhbFwiO1xuICAgIGxpbWl0RGF0ZVBpY2tlcigpO1xuXG4gICAgaWYgKFxuICAgICAgcGFyc2VJbnQoZWRpdEJ0bkluZGV4KSA9PT1cbiAgICAgIHBhcnNlSW50KHRvRG9JdGVtc0FycmF5LmluZGV4T2YodG9Eb0l0ZW1zQXJyYXlbaV0pKVxuICAgICkge1xuICAgICAgY2F0ZWdvcnlOYW1lLnRleHRDb250ZW50ID0gZWRpdEJ0bkNhdDtcbiAgICAgIHRvRG9UaXRsZS52YWx1ZSA9IHRvRG9JdGVtc0FycmF5W2ldLnRpdGxlO1xuICAgICAgdG9Eb1ByaW9yaXR5LnZhbHVlID0gdG9Eb0l0ZW1zQXJyYXlbaV0ucHJpb3JpdHk7XG4gICAgICB0b0RvRGVzY3JpcHRpb24udmFsdWUgPSB0b0RvSXRlbXNBcnJheVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgIHRvRG9EdWVEYXRlLnZhbHVlID0gdG9Eb0l0ZW1zQXJyYXlbaV0uZHVlRGF0ZTtcbiAgICB9XG5cbiAgICBjb25zdCBlbnRyeUluZGV4ID0gdG9Eb0l0ZW1zQXJyYXkuaW5kZXhPZih0b0RvSXRlbXNBcnJheVtpXSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVUb0RvRm9ybSgpIHtcbiAgdG9Eb0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0b0RvRm9ybS5yZXNldCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRvRG9FbnRyeSgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvSXRlbXNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0b0RvSXRlbXNBcnJheVtpXS5jb21wbGV0ZWRUYXNrID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgY2F0Q29udGVudERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNhdC1jb250ZW50XCIpO1xuXG4gICAgICBjb25zdCB0b0RvRW50cnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9Eb0VudHJ5LmNsYXNzTmFtZSA9IFwidG8tZG8tZW50cnlcIjtcbiAgICAgIHRvRG9FbnRyeS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVudHJ5XCIsIGkpO1xuXG4gICAgICBjb25zdCB0b0RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgICB0b0RvVGl0bGUuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuICAgICAgdG9Eb1RpdGxlLnRleHRDb250ZW50ID0gdG9Eb0l0ZW1zQXJyYXlbaV0udGl0bGU7XG5cbiAgICAgIGNvbnN0IHRvRG9EZXRhaWxzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9Eb0RldGFpbHNUaXRsZS5jbGFzc05hbWUgPSBcImRldGFpbHMtdGl0bGVcIjtcbiAgICAgIHRvRG9EZXRhaWxzVGl0bGUudGV4dENvbnRlbnQgPSBcIkRldGFpbHM6XCI7XG4gICAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0uZGVzY3JpcHRpb24gPT09IFwiXCIpIHtcbiAgICAgICAgdG9Eb0RldGFpbHNUaXRsZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRvRG9EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0b0RvRGV0YWlscy5jbGFzc05hbWUgPSBcImRldGFpbHNcIjtcbiAgICAgIHRvRG9EZXRhaWxzLnRleHRDb250ZW50ID0gdG9Eb0l0ZW1zQXJyYXlbaV0uZGVzY3JpcHRpb247XG5cbiAgICAgIGNvbnN0IHRvRG9EdWVEYXRlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgdG9Eb0R1ZURhdGVUaXRsZS5jbGFzc05hbWUgPSBcImR1ZS10aXRsZVwiO1xuICAgICAgdG9Eb0R1ZURhdGVUaXRsZS50ZXh0Q29udGVudCA9IFwiRHVlIERhdGU6XCI7XG5cbiAgICAgIGNvbnN0IHRvRG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICB0b0RvRHVlRGF0ZS5jbGFzc05hbWUgPSBcInNob3ctZHVlLWRhdGVcIjtcbiAgICAgIHRvRG9EdWVEYXRlLnRleHRDb250ZW50ID0gdG9Eb0l0ZW1zQXJyYXlbaV0uZHVlRGF0ZTtcblxuICAgICAgY29uc3QgY29tcGxldGVkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbXBsZXRlZERpdi5jbGFzc05hbWUgPSBcImNvbXBsZXRlLWNvbnRhaW5lclwiO1xuXG4gICAgICBjb25zdCBjb21wbGV0ZWRDaGVja0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgY29tcGxldGVkQ2hlY2tMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb21wbGV0ZVwiKTtcbiAgICAgIGNvbXBsZXRlZENoZWNrTGFiZWwudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlOlwiO1xuXG4gICAgICBjb25zdCBjb21wbGV0ZWRDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJJTlBVVFwiKTtcbiAgICAgIGNvbXBsZXRlZENoZWNrLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIGNvbXBsZXRlZENoZWNrLmNsYXNzTmFtZSA9IFwiY29tcGxldGVcIjtcbiAgICAgIGNvbXBsZXRlZENoZWNrLm5hbWUgPSBcImNvbXBsZXRlXCI7XG4gICAgICBjb21wbGV0ZWRDaGVjay5pZCA9IFwiY29tcGxldGVcIjtcbiAgICAgIGNvbXBsZXRlZENoZWNrLnZhbHVlID0gXCJjb21wbGV0ZVwiO1xuICAgICAgY29tcGxldGVkQ2hlY2suY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgY29tcGxldGVkQ2hlY2suc2V0QXR0cmlidXRlKFwiZGF0YS1jaGVja1wiLCBpKTtcblxuICAgICAgY29uc3QgZGVsZXRlSWNvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkZWxldGVJY29uRGl2LmNsYXNzTmFtZSA9IFwiZGVsZXRlLWljb25cIjtcblxuICAgICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBkZWxldGVJY29uLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9pbWdzL3RyYXNoLnN2Z1wiO1xuICAgICAgZGVsZXRlSWNvbi5hbHQgPSBcIkRlbGV0ZSBFbnRyeVwiO1xuICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWl0ZW0tZGVsZXRlXCIsIGkpO1xuICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJmb2N1c2FibGVcIiwgdHJ1ZSk7XG4gICAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuXG4gICAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eURpdi5jbGFzc05hbWUgPSBcInByaW9yaXR5XCI7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHlDb2xvci5jbGFzc05hbWUgPSBcInByaW9yaXR5LWNvbG9yXCI7XG4gICAgICBwcmlvcml0eUNvbG9yLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM1MzUzNDdcIjtcbiAgICAgIGlmICh0b0RvSXRlbXNBcnJheVtpXS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSBcImxvd1wiKSB7XG4gICAgICAgIHByaW9yaXR5Q29sb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZTdmMjRmXCI7XG4gICAgICB9IGVsc2UgaWYgKHRvRG9JdGVtc0FycmF5W2ldLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgcHJpb3JpdHlDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlZWIyNTBcIjtcbiAgICAgIH0gZWxzZSBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0ucHJpb3JpdHkudG9Mb3dlckNhc2UgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgIHByaW9yaXR5Q29sb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYmMyNzAyXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGVkaXRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGVkaXRJY29uLmNsYXNzTmFtZSA9IFwiZWRpdC1idG5cIjtcbiAgICAgIGVkaXRJY29uLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9pbWdzL2VkaXQtYnV0dG9uLXN2Z3JlcG8tY29tLnN2Z1wiO1xuICAgICAgZWRpdEljb24uYWx0ID0gXCJFZGl0IEVudHJ5XCI7XG4gICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVkaXRcIiwgaSk7XG4gICAgICBlZGl0SWNvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWVkaXQtY2F0XCIsIHRvRG9JdGVtc0FycmF5W2ldLmNhdGVnb3J5KTtcbiAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcImZvY3VzYWJsZVwiLCB0cnVlKTtcbiAgICAgIGVkaXRJY29uLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIDApO1xuXG4gICAgICBjYXRDb250ZW50RGl2cy5mb3JFYWNoKChkaXYpID0+IHtcbiAgICAgICAgaWYgKHRvRG9JdGVtc0FycmF5W2ldLmNhdGVnb3J5ID09PSBkaXYuZGF0YXNldC5jb250ZW50KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZGl2LmRhdGFzZXQuY29udGVudCk7XG5cbiAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodG9Eb0VudHJ5KTtcbiAgICAgICAgICB0b0RvRW50cnkuYXBwZW5kQ2hpbGQodG9Eb1RpdGxlKTtcbiAgICAgICAgICB0b0RvRW50cnkuYXBwZW5kQ2hpbGQodG9Eb0RldGFpbHNUaXRsZSk7XG4gICAgICAgICAgdG9Eb0VudHJ5LmFwcGVuZENoaWxkKHRvRG9EZXRhaWxzKTtcbiAgICAgICAgICB0b0RvRW50cnkuYXBwZW5kQ2hpbGQodG9Eb0R1ZURhdGVUaXRsZSk7XG4gICAgICAgICAgdG9Eb0VudHJ5LmFwcGVuZENoaWxkKHRvRG9EdWVEYXRlKTtcbiAgICAgICAgICB0b0RvRW50cnkuYXBwZW5kQ2hpbGQoY29tcGxldGVkRGl2KTtcbiAgICAgICAgICBjb21wbGV0ZWREaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVkQ2hlY2tMYWJlbCk7XG4gICAgICAgICAgY29tcGxldGVkRGl2LmFwcGVuZENoaWxkKGNvbXBsZXRlZENoZWNrKTtcbiAgICAgICAgICB0b0RvRW50cnkuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbkRpdik7XG4gICAgICAgICAgZGVsZXRlSWNvbkRpdi5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcbiAgICAgICAgICB0b0RvRW50cnkuYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpO1xuICAgICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5Q29sb3IpO1xuICAgICAgICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGVkaXRJY29uKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVG9Eb0l0ZW1zKCkge1xuICAvLyBSZXBsYWNlcyBhbGwgVG8gRG8gSXRlbXMgb24gZWFjaCBuZXcgaXRlbSBjcmVhdGlvbiB0byBwcmV2ZW50IGR1cGxpY2F0ZXNcbiAgbGV0IHRvRG9QYXJlbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXQtY29udGVudFwiKTtcbiAgdG9Eb1BhcmVudHMuZm9yRWFjaCgocGFyZW50KSA9PiB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QnlEdWVEYXRlKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHRvRG9JdGVtc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRvRG9JdGVtc0FycmF5W2ldLmNvbXBsZXRlZFRhc2sgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBkdWVEYXRlVGFza3NSb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZHVlRGF0ZVRhc2tzUm93RGl2LmNsYXNzTmFtZSA9IFwiZHVlLXRhc2tzLXJvdy1wYXJlbnRcIjtcblxuICAgICAgY29uc3QgZHVlRGF0ZVRhc2tzUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGR1ZURhdGVUYXNrc1Jvdy5jbGFzc05hbWUgPSBcImR1ZS12aWV3LXJvd1wiO1xuXG4gICAgICBjb25zdCBkdWVWaWV3RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkdWVWaWV3RHVlRGF0ZS5jbGFzc05hbWUgPSBcImR1ZS12aWV3LWR1ZSBzaG93LWRhdGUtZHVlXCI7XG4gICAgICBkdWVWaWV3RHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvRG9JdGVtc0FycmF5W2ldLmR1ZURhdGU7XG4gICAgICBkdWVWaWV3RHVlRGF0ZS5zdHlsZS5ib3JkZXJSaWdodCA9IFwiMC4yY2ggc29saWQgYmxhY2tcIjtcbiAgICAgIGR1ZVZpZXdEdWVEYXRlLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbiAgICAgIGNvbnN0IGR1ZURhdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkdWVEYXRlVGl0bGUuY2xhc3NOYW1lID0gXCJncmlkLWNlbGxzIC5kdWUtdmlldy10aXRsZVwiO1xuICAgICAgZHVlRGF0ZVRpdGxlLnRleHRDb250ZW50ID0gdG9Eb0l0ZW1zQXJyYXlbaV0udGl0bGU7XG5cbiAgICAgIGNvbnN0IGR1ZURhdGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkdWVEYXRlRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJncmlkLWNlbGxzIC5kdWUtdmlldy1kZXNjcmlwdGlvblwiO1xuICAgICAgaWYgKHRvRG9JdGVtc0FycmF5W2ldLmRlc2NyaXB0aW9uICE9PSBcIlwiKSB7XG4gICAgICAgIGR1ZURhdGVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvRG9JdGVtc0FycmF5W2ldLmRlc2NyaXB0aW9uO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZHVlRGF0ZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCItLS0tXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGR1ZURhdGVQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkdWVEYXRlUHJpb3JpdHkuY2xhc3NOYW1lID0gXCJncmlkLWNlbGxzIC5kdWUtdmlldy1wcmlvcml0eVwiO1xuICAgICAgY29uc3QgZHVlRGF0ZVByaW9yaXR5Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZHVlRGF0ZVByaW9yaXR5Q29sb3IuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1jb2xvclwiO1xuICAgICAgZHVlRGF0ZVByaW9yaXR5Q29sb3Iuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzUzNTM0N1wiO1xuICAgICAgaWYgKHRvRG9JdGVtc0FycmF5W2ldLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09IFwibG93XCIpIHtcbiAgICAgICAgZHVlRGF0ZVByaW9yaXR5Q29sb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZTdmMjRmXCI7XG4gICAgICB9IGVsc2UgaWYgKHRvRG9JdGVtc0FycmF5W2ldLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgZHVlRGF0ZVByaW9yaXR5Q29sb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZWViMjUwXCI7XG4gICAgICB9IGVsc2UgaWYgKHRvRG9JdGVtc0FycmF5W2ldLnByaW9yaXR5LnRvTG93ZXJDYXNlID09PSBcImhpZ2hcIikge1xuICAgICAgICBkdWVEYXRlUHJpb3JpdHlDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNiYzI3MDJcIjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZHVlRGF0ZUNoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGR1ZURhdGVDaGVjay5jbGFzc05hbWUgPSBcImdyaWQtY2VsbHMgLmR1ZS12aWV3LWNvbXBsZXRlXCI7XG5cbiAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJjb21wbGV0ZVwiKTtcblxuICAgICAgY29uc3QgZHVlRGF0ZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xuICAgICAgZHVlRGF0ZUNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIGR1ZURhdGVDaGVja2JveC5jbGFzc05hbWUgPSBcImNvbXBsZXRlXCI7XG4gICAgICBkdWVEYXRlQ2hlY2tib3gubmFtZSA9IFwiY29tcGxldGVcIjtcbiAgICAgIGR1ZURhdGVDaGVja2JveC5pZCA9IFwiY29tcGxldGVcIjtcbiAgICAgIGR1ZURhdGVDaGVja2JveC52YWx1ZSA9IFwiY29tcGxldGVcIjtcbiAgICAgIGR1ZURhdGVDaGVja2JveC5jaGVja2VkID0gdG9Eb0l0ZW1zQXJyYXlbaV0uY29tcGxldGVkVGFzaztcbiAgICAgIGR1ZURhdGVDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNoZWNrXCIsIGkpO1xuXG4gICAgICBjb25zdCBkdWVEYXRlRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGR1ZURhdGVEZWxldGUuY2xhc3NOYW1lID0gXCJncmlkLWNlbGxzIC5kdWUtdmlldy1kZWxldGVcIjtcblxuICAgICAgY29uc3QgZGVsZXRlQnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGRlbGV0ZUJ0bkltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvaW1ncy90cmFzaC5zdmdcIjtcbiAgICAgIGRlbGV0ZUJ0bkltZy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWl0ZW0tZGVsZXRlXCIsIGkpO1xuXG4gICAgICBkdWVEYXRlVGFza0Rpdi5hcHBlbmRDaGlsZChkdWVEYXRlVGFza3NSb3dEaXYpO1xuICAgICAgZHVlRGF0ZVRhc2tzUm93RGl2LmFwcGVuZENoaWxkKGR1ZURhdGVUYXNrc1Jvdyk7XG4gICAgICBkdWVEYXRlVGFza3NSb3cuYXBwZW5kQ2hpbGQoZHVlVmlld0R1ZURhdGUpO1xuICAgICAgZHVlRGF0ZVRhc2tzUm93LmFwcGVuZENoaWxkKGR1ZURhdGVUaXRsZSk7XG4gICAgICBkdWVEYXRlVGFza3NSb3cuYXBwZW5kQ2hpbGQoZHVlRGF0ZURlc2NyaXB0aW9uKTtcbiAgICAgIGR1ZURhdGVUYXNrc1Jvdy5hcHBlbmRDaGlsZChkdWVEYXRlUHJpb3JpdHkpO1xuICAgICAgZHVlRGF0ZVByaW9yaXR5LmFwcGVuZENoaWxkKGR1ZURhdGVQcmlvcml0eUNvbG9yKTtcbiAgICAgIGR1ZURhdGVUYXNrc1Jvdy5hcHBlbmRDaGlsZChkdWVEYXRlQ2hlY2spO1xuICAgICAgZHVlRGF0ZUNoZWNrLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gICAgICBkdWVEYXRlQ2hlY2suYXBwZW5kQ2hpbGQoZHVlRGF0ZUNoZWNrYm94KTtcbiAgICAgIGR1ZURhdGVUYXNrc1Jvdy5hcHBlbmRDaGlsZChkdWVEYXRlRGVsZXRlKTtcbiAgICAgIGR1ZURhdGVEZWxldGUuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuSW1nKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VEdWVEYXRlUm93cygpIHtcbiAgLy8gUmVwbGFjZXMgYWxsIHJvd3Mgb2YgRHVlRGF0ZSB2aWV3IHRvIHByZXZlbnQgZHVwbGljYXRlc1xuXG4gIGNvbnN0IGR1ZVZpZXdSb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kdWUtdmlldy1yb3dcIik7XG5cbiAgZHVlVmlld1Jvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgaWYgKHJvdy5wYXJlbnROb2RlKSB7XG4gICAgICByb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb3cpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QnlQcmlvcml0eSgpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b0RvSXRlbXNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0b0RvSXRlbXNBcnJheVtpXS5jb21wbGV0ZWRUYXNrID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgcHJpb3JpdHlUYXNrc1Jvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eVRhc2tzUm93RGl2LmNsYXNzTmFtZSA9IFwicHJpb3JpdHktdGFza3Mtcm93LXBhcmVudFwiO1xuXG4gICAgICBjb25zdCBwcmlvcml0eVRhc2tzUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHByaW9yaXR5VGFza3NSb3cuY2xhc3NOYW1lID0gXCJwcmlvcml0eS12aWV3LXJvd1wiO1xuXG4gICAgICBjb25zdCBwcmlvcml0eVZpZXdQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eVZpZXdQcmlvcml0eS5jbGFzc05hbWUgPSBcImdyaWQtY2VsbHMgLnByaW9yaXR5LXZpZXctcHJpb3JpdHlcIjtcbiAgICAgIGNvbnN0IHByaW9yaXR5Vmlld1ByaW9yaXR5Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHlWaWV3UHJpb3JpdHlDb2xvci5jbGFzc05hbWUgPSBcInByaW9yaXR5LWNvbG9yXCI7XG4gICAgICBwcmlvcml0eVZpZXdQcmlvcml0eUNvbG9yLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM1MzUzNDdcIjtcbiAgICAgIGlmICh0b0RvSXRlbXNBcnJheVtpXS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSBcImxvd1wiKSB7XG4gICAgICAgIHByaW9yaXR5Vmlld1ByaW9yaXR5Q29sb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZTdmMjRmXCI7XG4gICAgICB9IGVsc2UgaWYgKHRvRG9JdGVtc0FycmF5W2ldLnByaW9yaXR5LnRvTG93ZXJDYXNlKCkgPT09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgcHJpb3JpdHlWaWV3UHJpb3JpdHlDb2xvci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNlZWIyNTBcIjtcbiAgICAgIH0gZWxzZSBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0ucHJpb3JpdHkudG9Mb3dlckNhc2UgPT09IFwiaGlnaFwiKSB7XG4gICAgICAgIHByaW9yaXR5Vmlld1ByaW9yaXR5Q29sb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYmMyNzAyXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHlUaXRsZS5jbGFzc05hbWUgPSBcImdyaWQtY2VsbHMgLnByaW9yaXR5LXZpZXctdGl0bGVcIjtcbiAgICAgIHByaW9yaXR5VGl0bGUudGV4dENvbnRlbnQgPSB0b0RvSXRlbXNBcnJheVtpXS50aXRsZTtcblxuICAgICAgY29uc3QgcHJpb3JpdHlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eURlc2NyaXB0aW9uLmNsYXNzTmFtZSA9IFwiZ3JpZC1jZWxscyAucHJpb3JpdHktdmlldy1kZXNjcmlwdGlvblwiO1xuICAgICAgaWYgKHRvRG9JdGVtc0FycmF5W2ldLmRlc2NyaXB0aW9uICE9PSBcIlwiKSB7XG4gICAgICAgIHByaW9yaXR5RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b0RvSXRlbXNBcnJheVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByaW9yaXR5RGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIi0tLS1cIjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJpb3JpdHlWaWV3RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eVZpZXdEdWVEYXRlLmNsYXNzTmFtZSA9IFwicHJpb3JpdHktdmlldy1kdWUgc2hvdy1kYXRlLXByaW9yaXR5XCI7XG4gICAgICBwcmlvcml0eVZpZXdEdWVEYXRlLnRleHRDb250ZW50ID0gdG9Eb0l0ZW1zQXJyYXlbaV0uZHVlRGF0ZTtcbiAgICAgIHByaW9yaXR5Vmlld0R1ZURhdGUuc3R5bGUuYm9yZGVyUmlnaHQgPSBcIjAuMmNoIHNvbGlkIGJsYWNrXCI7XG4gICAgICBwcmlvcml0eVZpZXdEdWVEYXRlLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5Q2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcHJpb3JpdHlDaGVjay5jbGFzc05hbWUgPSBcImdyaWQtY2VsbHMgLnByaW9yaXR5LXZpZXctY29tcGxldGVcIjtcblxuICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29tcGxldGVcIik7XG5cbiAgICAgIGNvbnN0IHByaW9yaXR5Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiSU5QVVRcIik7XG4gICAgICBwcmlvcml0eUNoZWNrYm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcbiAgICAgIHByaW9yaXR5Q2hlY2tib3guY2xhc3NOYW1lID0gXCJjb21wbGV0ZVwiO1xuICAgICAgcHJpb3JpdHlDaGVja2JveC5uYW1lID0gXCJjb21wbGV0ZVwiO1xuICAgICAgcHJpb3JpdHlDaGVja2JveC5pZCA9IFwiY29tcGxldGVcIjtcbiAgICAgIHByaW9yaXR5Q2hlY2tib3gudmFsdWUgPSBcImNvbXBsZXRlXCI7XG4gICAgICBwcmlvcml0eUNoZWNrYm94LmNoZWNrZWQgPSB0b0RvSXRlbXNBcnJheVtpXS5jb21wbGV0ZWRUYXNrO1xuICAgICAgcHJpb3JpdHlDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNoZWNrXCIsIGkpO1xuXG4gICAgICBjb25zdCBwcmlvcml0eURlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwcmlvcml0eURlbGV0ZS5jbGFzc05hbWUgPSBcImdyaWQtY2VsbHMgLnByaW9yaXR5LXZpZXctZGVsZXRlXCI7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUJ0bkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBkZWxldGVCdG5JbWcuc3JjID0gXCIuLi9zcmMvYXNzZXRzL2ltZ3MvdHJhc2guc3ZnXCI7XG4gICAgICBkZWxldGVCdG5JbWcuc2V0QXR0cmlidXRlKFwiZGF0YS1pdGVtLWRlbGV0ZVwiLCBpKTtcblxuICAgICAgcHJpb3JpdHlUYXNrRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5VGFza3NSb3dEaXYpO1xuICAgICAgcHJpb3JpdHlUYXNrc1Jvd0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eVRhc2tzUm93KTtcbiAgICAgIHByaW9yaXR5VGFza3NSb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlWaWV3UHJpb3JpdHkpO1xuICAgICAgcHJpb3JpdHlWaWV3UHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlWaWV3UHJpb3JpdHlDb2xvcik7XG4gICAgICBwcmlvcml0eVRhc2tzUm93LmFwcGVuZENoaWxkKHByaW9yaXR5VGl0bGUpO1xuICAgICAgcHJpb3JpdHlUYXNrc1Jvdy5hcHBlbmRDaGlsZChwcmlvcml0eURlc2NyaXB0aW9uKTtcbiAgICAgIHByaW9yaXR5VGFza3NSb3cuYXBwZW5kQ2hpbGQocHJpb3JpdHlWaWV3RHVlRGF0ZSk7XG4gICAgICBwcmlvcml0eVRhc2tzUm93LmFwcGVuZENoaWxkKHByaW9yaXR5Q2hlY2spO1xuICAgICAgcHJpb3JpdHlDaGVjay5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKTtcbiAgICAgIHByaW9yaXR5Q2hlY2suYXBwZW5kQ2hpbGQocHJpb3JpdHlDaGVja2JveCk7XG4gICAgICBwcmlvcml0eVRhc2tzUm93LmFwcGVuZENoaWxkKHByaW9yaXR5RGVsZXRlKTtcbiAgICAgIHByaW9yaXR5RGVsZXRlLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bkltZyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlUHJpb3JpdHlSb3dzKCkge1xuICAvLyBSZXBsYWNlcyBhbGwgcm93cyBvZiBwcmlvcml0eSB2aWV3IHRvIHByZXZlbnQgZHVwbGljYXRlc1xuXG4gIGNvbnN0IHByaW9yaXR5Vmlld1Jvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByaW9yaXR5LXZpZXctcm93XCIpO1xuXG4gIHByaW9yaXR5Vmlld1Jvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgaWYgKHJvdy5wYXJlbnROb2RlKSB7XG4gICAgICByb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb3cpO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93Q29tcGxldGVkVGFza3MoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9Eb0l0ZW1zQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0uY29tcGxldGVkVGFzayA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgY29tcGxldGVkVGFza3NSb3dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY29tcGxldGVkVGFza3NSb3dEaXYuY2xhc3NOYW1lID0gXCJjb21wbGV0ZWQtdGFza3Mtcm93LXBhcmVudFwiO1xuXG4gICAgICBjb25zdCBjb21wbGV0ZWRUYXNrc1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb21wbGV0ZWRUYXNrc1Jvdy5jbGFzc05hbWUgPSBcImNvbXBsZXRlZC10YXNrcy1yb3dcIjtcblxuICAgICAgY29uc3QgZ3JpZENlbGxzQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3JpZENlbGxzQ2hlY2suY2xhc3NOYW1lID0gXCJncmlkLWNlbGxzIC5jb21wbGV0ZS12aWV3LWNvbXBsZXRlXCI7XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgY29tcGxldGVkTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29tcGxldGVcIik7XG5cbiAgICAgIGNvbnN0IGNvbXBsZXRlZENoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklOUFVUXCIpO1xuICAgICAgY29tcGxldGVkQ2hlY2tib3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgICAgY29tcGxldGVkQ2hlY2tib3guY2xhc3NOYW1lID0gXCJjb21wbGV0ZVwiO1xuICAgICAgY29tcGxldGVkQ2hlY2tib3gubmFtZSA9IFwiY29tcGxldGVcIjtcbiAgICAgIGNvbXBsZXRlZENoZWNrYm94LmlkID0gXCJjb21wbGV0ZVwiO1xuICAgICAgY29tcGxldGVkQ2hlY2tib3gudmFsdWUgPSBcImNvbXBsZXRlXCI7XG4gICAgICBjb21wbGV0ZWRDaGVja2JveC5jaGVja2VkID0gdG9Eb0l0ZW1zQXJyYXlbaV0uY29tcGxldGVkVGFzaztcbiAgICAgIGNvbXBsZXRlZENoZWNrYm94LnNldEF0dHJpYnV0ZShcImRhdGEtY2hlY2tcIiwgaSk7XG5cbiAgICAgIGNvbnN0IGdyaWRDZWxsc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWRDZWxsc1RpdGxlLmNsYXNzTmFtZSA9IFwiZ3JpZC1jZWxscyAuY29tcGxldGUtdmlldy10aXRsZVwiO1xuICAgICAgZ3JpZENlbGxzVGl0bGUudGV4dENvbnRlbnQgPSB0b0RvSXRlbXNBcnJheVtpXS50aXRsZTtcblxuICAgICAgY29uc3QgZ3JpZENlbGxzRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3JpZENlbGxzRGVzY3JpcHRpb24uY2xhc3NOYW1lID0gXCJncmlkLWNlbGxzIC5jb21wbGV0ZS12aWV3LWRlc2NyaXB0aW9uXCI7XG4gICAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0uZGVzY3JpcHRpb24gIT09IFwiXCIpIHtcbiAgICAgICAgZ3JpZENlbGxzRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b0RvSXRlbXNBcnJheVtpXS5kZXNjcmlwdGlvbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGdyaWRDZWxsc0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCItLS0tXCI7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGdyaWRDZWxsc1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWRDZWxsc1ByaW9yaXR5LmNsYXNzTmFtZSA9IFwiZ3JpZC1jZWxscyAuY29tcGxldGUtdmlldy1wcmlvcml0eVwiO1xuXG4gICAgICBjb25zdCBncmlkQ2VsbHNQcmlvcml0eUNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGdyaWRDZWxsc1ByaW9yaXR5Q29sb3IuY2xhc3NOYW1lID0gXCJwcmlvcml0eS1jb2xvclwiO1xuICAgICAgZ3JpZENlbGxzUHJpb3JpdHlDb2xvci5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjNTM1MzQ3XCI7XG4gICAgICBpZiAodG9Eb0l0ZW1zQXJyYXlbaV0ucHJpb3JpdHkudG9Mb3dlckNhc2UoKSA9PT0gXCJsb3dcIikge1xuICAgICAgICBncmlkQ2VsbHNQcmlvcml0eUNvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2U3ZjI0ZlwiO1xuICAgICAgfSBlbHNlIGlmICh0b0RvSXRlbXNBcnJheVtpXS5wcmlvcml0eS50b0xvd2VyQ2FzZSgpID09PSBcIm1lZGl1bVwiKSB7XG4gICAgICAgIGdyaWRDZWxsc1ByaW9yaXR5Q29sb3Iuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZWViMjUwXCI7XG4gICAgICB9IGVsc2UgaWYgKHRvRG9JdGVtc0FycmF5W2ldLnByaW9yaXR5LnRvTG93ZXJDYXNlID09PSBcImhpZ2hcIikge1xuICAgICAgICBncmlkQ2VsbHNQcmlvcml0eUNvbG9yLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2JjMjcwMlwiO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBncmlkQ2VsbHNEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZ3JpZENlbGxzRGVsZXRlLmNsYXNzTmFtZSA9IFwiZ3JpZC1jZWxscyAuY29tcGxldGUtdmlldy1kZWxldGVcIjtcblxuICAgICAgY29uc3QgZGVsZXRlQnRuSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgIGRlbGV0ZUJ0bkltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvaW1ncy90cmFzaC5zdmdcIjtcbiAgICAgIGRlbGV0ZUJ0bkltZy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWl0ZW0tZGVsZXRlXCIsIGkpO1xuXG4gICAgICBjb21wbGV0ZWRUYXNrc0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc1Jvd0Rpdik7XG4gICAgICBjb21wbGV0ZWRUYXNrc1Jvd0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZWRUYXNrc1Jvdyk7XG4gICAgICBjb21wbGV0ZWRUYXNrc1Jvdy5hcHBlbmRDaGlsZChncmlkQ2VsbHNDaGVjayk7XG4gICAgICBncmlkQ2VsbHNDaGVjay5hcHBlbmRDaGlsZChjb21wbGV0ZWRMYWJlbCk7XG4gICAgICBncmlkQ2VsbHNDaGVjay5hcHBlbmRDaGlsZChjb21wbGV0ZWRDaGVja2JveCk7XG4gICAgICBjb21wbGV0ZWRUYXNrc1Jvdy5hcHBlbmRDaGlsZChncmlkQ2VsbHNUaXRsZSk7XG4gICAgICBjb21wbGV0ZWRUYXNrc1Jvdy5hcHBlbmRDaGlsZChncmlkQ2VsbHNEZXNjcmlwdGlvbik7XG4gICAgICBjb21wbGV0ZWRUYXNrc1Jvdy5hcHBlbmRDaGlsZChncmlkQ2VsbHNQcmlvcml0eSk7XG4gICAgICBncmlkQ2VsbHNQcmlvcml0eS5hcHBlbmRDaGlsZChncmlkQ2VsbHNQcmlvcml0eUNvbG9yKTtcbiAgICAgIGNvbXBsZXRlZFRhc2tzUm93LmFwcGVuZENoaWxkKGdyaWRDZWxsc0RlbGV0ZSk7XG4gICAgICBncmlkQ2VsbHNEZWxldGUuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuSW1nKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VDb21wbGV0ZWRSb3dzKCkge1xuICAvLyBSZXBsYWNlcyBhbGwgcm93cyBvZiBDb21wbGV0ZWQgVGFza3MgdG8gcHJldmVudCBkdXBsaWNhdGVzXG5cbiAgY29uc3QgY29tcGxldGVkVGFza1Jvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXBsZXRlZC10YXNrcy1yb3dcIik7XG5cbiAgY29tcGxldGVkVGFza1Jvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgaWYgKHJvdy5wYXJlbnROb2RlKSB7XG4gICAgICByb3cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyb3cpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gIH0gOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgfSwgX3R5cGVvZihvYmopO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3RhYkNvbnRyb2wuanNcIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvY29udHJvbGxlci5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tb2RlbC5qc1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy92aWV3LmpzXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3F1ZXJ5U2VsZWN0b3JzLmpzXCIpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZGF0ZXMuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=