/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./src/styles/app.scss");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


window.addEventListener("DOMContentLoaded", getUsers);

function getUsers() {
  var url = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json';
  return fetch(url).then(function (resp) {
    return resp.json();
  }).then(mainFunc);
}

function mainFunc(arr) {
  var containers = document.querySelectorAll(".container");
  drawList(arr, 0, 20);
  checkActive(arr);
  addPagination(arr, 20);
  fillSelect(arr);
}

function drawList(arr, from, to) {
  var allRows = document.querySelectorAll(".table__row");

  var _iterator = _createForOfIteratorHelper(allRows),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var row = _step.value;
      row.innerHTML = "";
      row.classList.remove("table__row_visible");
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var _iterator2 = _createForOfIteratorHelper(arr.slice(from, to)),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var user = _step2.value;

      var _row = document.createElement("tr");

      _row.classList.add("table__row");

      _row.classList.add("table__row_visible");

      var tdId = document.createElement("td");
      tdId.classList.add("id");
      tdId.textContent = user.id;

      _row.append(tdId);

      var tdFirstName = document.createElement("td");
      tdFirstName.classList.add("name");
      tdFirstName.textContent = user.firstName;

      _row.append(tdFirstName);

      var tdLastName = document.createElement("td");
      tdLastName.textContent = user.lastName;

      _row.append(tdLastName);

      var tdEmail = document.createElement("td");
      tdEmail.textContent = user.email;

      _row.append(tdEmail);

      var tdPhone = document.createElement("td");
      tdPhone.textContent = user.phone;

      _row.append(tdPhone);

      var tdState = document.createElement("td");
      tdState.classList.add("state");
      tdState.textContent = user.adress.state;

      _row.append(tdState);

      document.querySelector(".table__body").append(_row);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  addRowsListeners(arr);
  sortFunc();
  clearSearch();
}

function addRowsListeners(arr) {
  var rows = document.querySelectorAll(".table__row");
  rows[0].classList.add("table__row_selected");

  var _iterator3 = _createForOfIteratorHelper(rows),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var row = _step3.value;
      row.addEventListener("click", handleRowClick);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  function handleRowClick(event) {
    var _iterator4 = _createForOfIteratorHelper(rows),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var row = _step4.value;
        row.classList.remove("table__row_selected");
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    event.currentTarget.classList.add("table__row_selected");
    checkActive(arr);
  }
}

function checkActive(arr) {
  var rows = document.querySelectorAll(".table__row");
  var activeRow;

  var _iterator5 = _createForOfIteratorHelper(rows),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var row = _step5.value;
      row.classList.contains("table__row_selected") ? activeRow = row : false;
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  var id = activeRow.querySelector(".id").textContent;
  var name = activeRow.querySelector(".name").textContent;
  var infoBlock = document.querySelector(".info-block");
  infoBlock.innerHTML = "<div>Profile info:</div>";

  var _iterator6 = _createForOfIteratorHelper(arr),
      _step6;

  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
      var user = _step6.value;

      if (id == user.id && name == user.firstName) {
        var userName = document.createElement("div");
        userName.textContent = "Selected profile: " + user.firstName + " " + user.lastName;
        var userDesc = document.createElement("div");
        userDesc.textContent = "Description: " + user.desription;
        var userAddress = document.createElement("div");
        userAddress.textContent = "Address: " + user.adress.streetAddress;
        var userCity = document.createElement("div");
        userCity.textContent = "City: " + user.adress.city;
        var userState = document.createElement("div");
        userState.textContent = "State: " + user.adress.state;
        var userZip = document.createElement("div");
        userZip.textContent = "Index: " + user.adress.zip;
        infoBlock.append(userName);
        infoBlock.append(userDesc);
        infoBlock.append(userAddress);
        infoBlock.append(userCity);
        infoBlock.append(userState);
        infoBlock.append(userZip);
      }
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
}

function addPagination(arr, num) {
  var numberOfPages = arr.length / num;
  var nextButton = document.querySelector(".pagination__nextButton");

  for (var i = 0; i < numberOfPages; i++) {
    var number = document.createElement("a");
    number.classList.add("pagination__pageNum");

    if (i == 0) {
      number.classList.add("active");
    }

    number.textContent = i + 1;
    nextButton.before(number);
  }

  var pagination = document.querySelector(".pagination");
  pagination.addEventListener("click", handlePagiClick);

  function handlePagiClick(event) {
    if (event.target.classList.contains("pagination__pageNum")) {
      var pageNum = +event.target.textContent;
      drawList(arr, (pageNum - 1) * num, (pageNum - 1) * num + num);
      event.currentTarget.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
    } else if (event.target.classList.contains("pagination__prevButton")) {
      var current = event.currentTarget.querySelector(".active");

      if (current.previousElementSibling == event.target) {
        return;
      }

      var _pageNum = +current.textContent - 1;

      drawList(arr, (_pageNum - 1) * num, (_pageNum - 1) * num + num);
      current.classList.remove("active");
      current.previousElementSibling.classList.add("active");
    } else if (event.target.classList.contains("pagination__nextButton")) {
      var _current = event.currentTarget.querySelector(".active");

      if (_current.nextElementSibling == event.target) {
        return;
      }

      var _pageNum2 = +_current.textContent + 1;

      drawList(arr, (_pageNum2 - 1) * num, (_pageNum2 - 1) * num + num);

      _current.classList.remove("active");

      _current.nextElementSibling.classList.add("active");
    }

    arrowsToDefault();
    sortFunc();
    clearSelect();
    clearSearch();
  }

  addRowsListeners(arr);
}

function sortFunc() {
  var table = document.querySelector('.table');
  var headers = table.querySelectorAll('th');
  var tableBody = table.querySelector('tbody');
  var rows = tableBody.querySelectorAll('.table__row_visible'); // Направление сортировки

  var directions = Array.from(headers).map(function (header) {
    return '';
  }); // Преобразовать содержимое данной ячейки в заданном столбце

  var transform = function transform(index, content) {
    // Получить тип данных столбца
    var type = headers[index].getAttribute('data-type');

    switch (type) {
      case 'number':
        return parseFloat(content);

      case 'string':
      default:
        return content;
    }
  };

  function sortColumn(index) {
    // Получить текущее направление
    var direction = directions[index] || 'asc'; // Фактор по направлению

    var multiplier = direction === 'asc' ? 1 : -1;
    var rows = tableBody.querySelectorAll('.table__row_visible');
    var newRows = Array.from(rows);
    newRows.sort(function (rowA, rowB) {
      var cellA = rowA.querySelectorAll('td')[index].innerHTML;
      var cellB = rowB.querySelectorAll('td')[index].innerHTML;
      var a = transform(index, cellA);
      var b = transform(index, cellB);

      switch (true) {
        case a > b:
          return 1 * multiplier;

        case a < b:
          return -1 * multiplier;

        case a === b:
          return 0;
      }
    }); // Удалить старые строки

    [].forEach.call(rows, function (row) {
      tableBody.removeChild(row);
    }); // Поменять направление

    directions[index] = direction === 'asc' ? 'desc' : 'asc'; // Добавить новую строку

    newRows.forEach(function (newRow) {
      tableBody.appendChild(newRow);
    });
    var allArrows = document.querySelectorAll(".table__arrow");
    var currArrow = event.currentTarget.querySelector(".table__arrow");

    var _iterator7 = _createForOfIteratorHelper(allArrows),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var arrow = _step7.value;

        if (arrow !== currArrow) {
          arrow.classList = "";
          arrow.classList.add("table__arrow");
          arrow.classList.add("table__arrow_default");
        }
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    if (currArrow.classList.contains("table__arrow_default")) {
      currArrow.classList.remove("table__arrow_default");
      currArrow.classList.add("table__arrow_asc");
    } else if (currArrow.classList.contains("table__arrow_asc")) {
      currArrow.classList.remove("table__arrow_asc");
      currArrow.classList.add("table__arrow_desc");
    } else if (currArrow.classList.contains("table__arrow_desc")) {
      currArrow.classList.remove("table__arrow_desc");
      currArrow.classList.add("table__arrow_asc");
    }
  }

  ;
  [].forEach.call(headers, function (header, index) {
    header.addEventListener('click', function () {
      sortColumn(index);
    });
  });
}

;

function arrowsToDefault() {
  var allArrows = document.querySelectorAll(".table__arrow");

  var _iterator8 = _createForOfIteratorHelper(allArrows),
      _step8;

  try {
    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
      var arrow = _step8.value;
      arrow.classList = "";
      arrow.classList.add("table__arrow");
      arrow.classList.add("table__arrow_default");
    }
  } catch (err) {
    _iterator8.e(err);
  } finally {
    _iterator8.f();
  }
}

function fillSelect(arr) {
  var states = [];

  var _iterator9 = _createForOfIteratorHelper(arr),
      _step9;

  try {
    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
      var user = _step9.value;
      var userState = user.adress.state;

      if (!states.includes(userState)) {
        states.push(userState);
      }
    }
  } catch (err) {
    _iterator9.e(err);
  } finally {
    _iterator9.f();
  }

  var select = document.querySelector(".filter__select");

  for (var _i = 0, _states = states; _i < _states.length; _i++) {
    var state = _states[_i];
    var newOption = document.createElement("option");
    newOption.innerHTML = state;
    select.append(newOption);
  }

  select.addEventListener("change", handleSelect);
}

function handleSelect(event) {
  var currState = event.target.value;
  var rows = document.querySelectorAll('.table__row_visible');

  var _iterator10 = _createForOfIteratorHelper(rows),
      _step10;

  try {
    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
      var row = _step10.value;
      row.style.display = "table-row";

      if (row.querySelector(".state").textContent !== currState) {
        row.style.display = "none";
      }

      ;
    }
  } catch (err) {
    _iterator10.e(err);
  } finally {
    _iterator10.f();
  }
}

function clearSelect() {
  var select = document.querySelector(".filter__select");
  select[0].selected = true;
}

function clearSearch() {
  var search = document.querySelector(".filter__search");
  search.value = "";
  search.addEventListener("keyup", tableSearch);
}

function tableSearch() {
  var phrase = document.querySelector('.filter__search');
  var regPhrase = new RegExp(phrase.value, 'i');
  var flag = false;
  var rows = document.querySelectorAll('.table__row_visible');

  for (var i = 0; i < rows.length; i++) {
    flag = false;

    for (var j = rows[i].cells.length - 1; j >= 0; j--) {
      flag = regPhrase.test(rows[i].cells[j].innerHTML);
      if (flag) break;
    }

    if (flag) {
      rows[i].style.display = "table-row";
    } else {
      rows[i].style.display = "none";
    }
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UThELEtBQVIsQ0FBY0QsQ0FBZCxFQUFpQjdHLFNBQWhDLENBQVA7QUFDQSxVQUFJNEcsSUFBSixFQUFVO0FBQ2I7O0FBQ0QsUUFBSUEsSUFBSixFQUFVO0FBQ05sRixNQUFBQSxJQUFJLENBQUNzQixDQUFELENBQUosQ0FBUW9ELEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixXQUF4QjtBQUNILEtBRkQsTUFFTztBQUNIM0UsTUFBQUEsSUFBSSxDQUFDc0IsQ0FBRCxDQUFKLENBQVFvRCxLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDSDtBQUNKO0FBQ0osQyIsInNvdXJjZXMiOlsid2VicGFjazovL2l0cmV4LXRhc2stdGFibGUvLi9zcmMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovL2l0cmV4LXRhc2stdGFibGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaXRyZXgtdGFzay10YWJsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2l0cmV4LXRhc2stdGFibGUvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGdldFVzZXJzKTtcblxuZnVuY3Rpb24gZ2V0VXNlcnMoKSB7XG4gICAgbGV0IHVybCA9ICdodHRwczovL2l0cmV4LXJlYWN0LWxhYi1maWxlcy5zMy5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9yZWFjdC10ZXN0LWFwaS5qc29uJztcbiAgICByZXR1cm4gZmV0Y2godXJsKVxuICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAudGhlbihtYWluRnVuYylcbn1cblxuZnVuY3Rpb24gbWFpbkZ1bmMoYXJyKSB7XG4gICAgbGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhaW5lclwiKTtcbiAgICAgICAgZHJhd0xpc3QoYXJyLCAwLCAyMCk7XG4gICAgICAgIGNoZWNrQWN0aXZlKGFycik7XG4gICAgICAgIGFkZFBhZ2luYXRpb24oYXJyLCAyMCk7XG4gICAgICAgIGZpbGxTZWxlY3QoYXJyKTtcbn1cblxuZnVuY3Rpb24gZHJhd0xpc3QoYXJyLCBmcm9tLCB0bykge1xuICAgIGxldCBhbGxSb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fcm93XCIpO1xuICAgIGZvcihsZXQgcm93IG9mIGFsbFJvd3MpIHtcbiAgICAgICAgcm93LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QucmVtb3ZlKFwidGFibGVfX3Jvd192aXNpYmxlXCIpO1xuICAgIH1cbiAgICBmb3IobGV0IHVzZXIgb2YgYXJyLnNsaWNlKGZyb20sdG8pKSB7XG4gICAgICAgIGxldCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3Jvd1wiKTtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fcm93X3Zpc2libGVcIik7XG4gICAgICAgIGxldCB0ZElkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0ZElkLmNsYXNzTGlzdC5hZGQoXCJpZFwiKTtcbiAgICAgICAgdGRJZC50ZXh0Q29udGVudCA9IHVzZXIuaWQ7XG4gICAgICAgIHJvdy5hcHBlbmQodGRJZCk7XG4gICAgICAgIGxldCB0ZEZpcnN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGRGaXJzdE5hbWUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gICAgICAgIHRkRmlyc3ROYW1lLnRleHRDb250ZW50ID0gdXNlci5maXJzdE5hbWU7XG4gICAgICAgIHJvdy5hcHBlbmQodGRGaXJzdE5hbWUpO1xuICAgICAgICBsZXQgdGRMYXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGRMYXN0TmFtZS50ZXh0Q29udGVudCA9IHVzZXIubGFzdE5hbWU7XG4gICAgICAgIHJvdy5hcHBlbmQodGRMYXN0TmFtZSk7XG4gICAgICAgIGxldCB0ZEVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICB0ZEVtYWlsLnRleHRDb250ZW50ID0gdXNlci5lbWFpbDtcbiAgICAgICAgcm93LmFwcGVuZCh0ZEVtYWlsKTtcbiAgICAgICAgbGV0IHRkUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgIHRkUGhvbmUudGV4dENvbnRlbnQgPSB1c2VyLnBob25lO1xuICAgICAgICByb3cuYXBwZW5kKHRkUGhvbmUpO1xuICAgICAgICBsZXQgdGRTdGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgdGRTdGF0ZS5jbGFzc0xpc3QuYWRkKFwic3RhdGVcIik7XG4gICAgICAgIHRkU3RhdGUudGV4dENvbnRlbnQgPSB1c2VyLmFkcmVzcy5zdGF0ZTtcbiAgICAgICAgcm93LmFwcGVuZCh0ZFN0YXRlKTtcbiAgICBcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fYm9keVwiKS5hcHBlbmQocm93KTtcbiAgICB9XG4gICAgYWRkUm93c0xpc3RlbmVycyhhcnIpO1xuICAgIHNvcnRGdW5jKCk7XG4gICAgY2xlYXJTZWFyY2goKTtcbn1cblxuZnVuY3Rpb24gYWRkUm93c0xpc3RlbmVycyhhcnIpIHtcbiAgICBsZXQgcm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVfX3Jvd1wiKTtcbiAgICByb3dzWzBdLmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fcm93X3NlbGVjdGVkXCIpO1xuICAgIGZvcihsZXQgcm93IG9mIHJvd3MpIHtcbiAgICAgICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVSb3dDbGljayk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZVJvd0NsaWNrKGV2ZW50KSB7XG4gICAgICAgIGZvcihsZXQgcm93IG9mIHJvd3MpIHtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QucmVtb3ZlKFwidGFibGVfX3Jvd19zZWxlY3RlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fcm93X3NlbGVjdGVkXCIpO1xuICAgICAgICBjaGVja0FjdGl2ZShhcnIpO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBjaGVja0FjdGl2ZShhcnIpIHtcbiAgICBsZXQgcm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGVfX3Jvd1wiKTtcbiAgICBsZXQgYWN0aXZlUm93O1xuICAgIGZvcihsZXQgcm93IG9mIHJvd3MpIHtcbiAgICAgICAgcm93LmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlX19yb3dfc2VsZWN0ZWRcIikgPyBhY3RpdmVSb3cgPSByb3cgOiBmYWxzZTtcbiAgICB9XG4gICAgbGV0IGlkID0gYWN0aXZlUm93LnF1ZXJ5U2VsZWN0b3IoXCIuaWRcIikudGV4dENvbnRlbnQ7XG4gICAgbGV0IG5hbWUgPSBhY3RpdmVSb3cucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpLnRleHRDb250ZW50O1xuICAgIGxldCBpbmZvQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluZm8tYmxvY2tcIik7XG4gICAgaW5mb0Jsb2NrLmlubmVySFRNTCA9IFwiPGRpdj5Qcm9maWxlIGluZm86PC9kaXY+XCI7XG4gICAgZm9yKGxldCB1c2VyIG9mIGFycikge1xuICAgICAgICBpZihpZCA9PSB1c2VyLmlkICYmIG5hbWUgPT0gdXNlci5maXJzdE5hbWUpIHtcbiAgICAgICAgICAgIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IFwiU2VsZWN0ZWQgcHJvZmlsZTogXCIgKyB1c2VyLmZpcnN0TmFtZSArIFwiIFwiICsgdXNlci5sYXN0TmFtZTtcbiAgICAgICAgICAgIGxldCB1c2VyRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB1c2VyRGVzYy50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiICsgdXNlci5kZXNyaXB0aW9uO1xuICAgICAgICAgICAgbGV0IHVzZXJBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHVzZXJBZGRyZXNzLnRleHRDb250ZW50ID0gXCJBZGRyZXNzOiBcIiArIHVzZXIuYWRyZXNzLnN0cmVldEFkZHJlc3M7XG4gICAgICAgICAgICBsZXQgdXNlckNpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdXNlckNpdHkudGV4dENvbnRlbnQgPSBcIkNpdHk6IFwiICsgdXNlci5hZHJlc3MuY2l0eTtcbiAgICAgICAgICAgIGxldCB1c2VyU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdXNlclN0YXRlLnRleHRDb250ZW50ID0gXCJTdGF0ZTogXCIgKyB1c2VyLmFkcmVzcy5zdGF0ZTtcbiAgICAgICAgICAgIGxldCB1c2VyWmlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHVzZXJaaXAudGV4dENvbnRlbnQgPSBcIkluZGV4OiBcIiArIHVzZXIuYWRyZXNzLnppcDtcblxuICAgICAgICAgICAgaW5mb0Jsb2NrLmFwcGVuZCh1c2VyTmFtZSk7XG4gICAgICAgICAgICBpbmZvQmxvY2suYXBwZW5kKHVzZXJEZXNjKTtcbiAgICAgICAgICAgIGluZm9CbG9jay5hcHBlbmQodXNlckFkZHJlc3MpO1xuICAgICAgICAgICAgaW5mb0Jsb2NrLmFwcGVuZCh1c2VyQ2l0eSk7XG4gICAgICAgICAgICBpbmZvQmxvY2suYXBwZW5kKHVzZXJTdGF0ZSk7XG4gICAgICAgICAgICBpbmZvQmxvY2suYXBwZW5kKHVzZXJaaXApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRQYWdpbmF0aW9uKGFyciwgbnVtKSB7XG4gICAgbGV0IG51bWJlck9mUGFnZXMgPSBhcnIubGVuZ3RoL251bTtcbiAgICBsZXQgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnaW5hdGlvbl9fbmV4dEJ1dHRvblwiKTtcbiAgICBmb3IobGV0IGk9MDsgaTxudW1iZXJPZlBhZ2VzOyBpKyspIHtcbiAgICAgICAgbGV0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgICBudW1iZXIuY2xhc3NMaXN0LmFkZChcInBhZ2luYXRpb25fX3BhZ2VOdW1cIik7XG4gICAgICAgIGlmKGkgPT0gMCkge1xuICAgICAgICAgICAgbnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgbnVtYmVyLnRleHRDb250ZW50ID0gaSsxO1xuICAgICAgICBuZXh0QnV0dG9uLmJlZm9yZShudW1iZXIpO1xuICAgIH1cbiAgICBsZXQgcGFnaW5hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFnaW5hdGlvblwiKTtcbiAgICBwYWdpbmF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVQYWdpQ2xpY2spO1xuICAgIGZ1bmN0aW9uIGhhbmRsZVBhZ2lDbGljayhldmVudCkge1xuICAgICAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFnaW5hdGlvbl9fcGFnZU51bVwiKSkge1xuICAgICAgICAgICAgbGV0IHBhZ2VOdW0gPSArZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgZHJhd0xpc3QoYXJyLCAocGFnZU51bS0xKSpudW0sICgocGFnZU51bS0xKSpudW0gKyBudW0pKTtcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9IGVsc2UgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInBhZ2luYXRpb25fX3ByZXZCdXR0b25cIikpIHtcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZVwiKTtcbiAgICAgICAgICAgIGlmKGN1cnJlbnQucHJldmlvdXNFbGVtZW50U2libGluZyA9PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwYWdlTnVtID0gK2N1cnJlbnQudGV4dENvbnRlbnQtMTtcbiAgICAgICAgICAgIGRyYXdMaXN0KGFyciwgKHBhZ2VOdW0tMSkqbnVtLCAoKHBhZ2VOdW0tMSkqbnVtICsgbnVtKSk7XG4gICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBjdXJyZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWdpbmF0aW9uX19uZXh0QnV0dG9uXCIpKSB7XG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcihcIi5hY3RpdmVcIik7XG4gICAgICAgICAgICBpZihjdXJyZW50Lm5leHRFbGVtZW50U2libGluZyA9PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwYWdlTnVtID0gK2N1cnJlbnQudGV4dENvbnRlbnQrMTtcbiAgICAgICAgICAgIGRyYXdMaXN0KGFyciwgKHBhZ2VOdW0tMSkqbnVtLCAoKHBhZ2VOdW0tMSkqbnVtICsgbnVtKSk7XG4gICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBjdXJyZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGFycm93c1RvRGVmYXVsdCgpO1xuICAgICAgICBzb3J0RnVuYygpO1xuICAgICAgICBjbGVhclNlbGVjdCgpO1xuICAgICAgICBjbGVhclNlYXJjaCgpO1xuICAgIH1cbiAgICBhZGRSb3dzTGlzdGVuZXJzKGFycik7XG59XG5cbmZ1bmN0aW9uIHNvcnRGdW5jKCkge1xuICAgIGxldCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJsZScpO1xuICAgIGxldCBoZWFkZXJzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGgnKTtcbiAgICBsZXQgdGFibGVCb2R5ID0gdGFibGUucXVlcnlTZWxlY3RvcigndGJvZHknKTtcbiAgICBsZXQgcm93cyA9IHRhYmxlQm9keS5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3Jvd192aXNpYmxlJyk7XG5cbiAgICAvLyDQndCw0L/RgNCw0LLQu9C10L3QuNC1INGB0L7RgNGC0LjRgNC+0LLQutC4XG4gICAgbGV0IGRpcmVjdGlvbnMgPSBBcnJheS5mcm9tKGhlYWRlcnMpLm1hcChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH0pO1xuXG4gICAgLy8g0J/RgNC10L7QsdGA0LDQt9C+0LLQsNGC0Ywg0YHQvtC00LXRgNC20LjQvNC+0LUg0LTQsNC90L3QvtC5INGP0YfQtdC50LrQuCDQsiDQt9Cw0LTQsNC90L3QvtC8INGB0YLQvtC70LHRhtC1XG4gICAgbGV0IHRyYW5zZm9ybSA9IGZ1bmN0aW9uKGluZGV4LCBjb250ZW50KSB7XG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNGC0Ywg0YLQuNC/INC00LDQvdC90YvRhSDRgdGC0L7Qu9Cx0YbQsFxuICAgICAgICBsZXQgdHlwZSA9IGhlYWRlcnNbaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChjb250ZW50KTtcbiAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNvcnRDb2x1bW4oaW5kZXgpIHtcbiAgICAgICAgXG4gICAgICAgIC8vINCf0L7Qu9GD0YfQuNGC0Ywg0YLQtdC60YPRidC10LUg0L3QsNC/0YDQsNCy0LvQtdC90LjQtVxuICAgICAgICBsZXQgZGlyZWN0aW9uID0gZGlyZWN0aW9uc1tpbmRleF0gfHwgJ2FzYyc7XG4gICAgICAgIFxuICAgICAgICAvLyDQpNCw0LrRgtC+0YAg0L/QviDQvdCw0L/RgNCw0LLQu9C10L3QuNGOXG4gICAgICAgIGxldCBtdWx0aXBsaWVyID0gKGRpcmVjdGlvbiA9PT0gJ2FzYycpID8gMSA6IC0xO1xuICAgICAgICBsZXQgcm93cyA9IHRhYmxlQm9keS5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3Jvd192aXNpYmxlJyk7XG4gICAgICAgIGxldCBuZXdSb3dzID0gQXJyYXkuZnJvbShyb3dzKTtcbiAgICAgICAgbmV3Um93cy5zb3J0KGZ1bmN0aW9uKHJvd0EsIHJvd0IpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGNlbGxBID0gcm93QS5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpW2luZGV4XS5pbm5lckhUTUw7XG4gICAgICAgICAgICBsZXQgY2VsbEIgPSByb3dCLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJylbaW5kZXhdLmlubmVySFRNTDtcblxuICAgICAgICAgICAgbGV0IGEgPSB0cmFuc2Zvcm0oaW5kZXgsIGNlbGxBKTtcbiAgICAgICAgICAgIGxldCBiID0gdHJhbnNmb3JtKGluZGV4LCBjZWxsQik7ICAgIFxuXG4gICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIGEgPiBiOiByZXR1cm4gMSAqIG11bHRpcGxpZXI7XG4gICAgICAgICAgICAgICAgY2FzZSBhIDwgYjogcmV0dXJuIC0xICogbXVsdGlwbGllcjtcbiAgICAgICAgICAgICAgICBjYXNlIGEgPT09IGI6IHJldHVybiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vINCj0LTQsNC70LjRgtGMINGB0YLQsNGA0YvQtSDRgdGC0YDQvtC60LhcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKHJvd3MsIGZ1bmN0aW9uKHJvdykge1xuICAgICAgICAgICAgdGFibGVCb2R5LnJlbW92ZUNoaWxkKHJvdyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vINCf0L7QvNC10L3Rj9GC0Ywg0L3QsNC/0YDQsNCy0LvQtdC90LjQtVxuICAgICAgICBkaXJlY3Rpb25zW2luZGV4XSA9IGRpcmVjdGlvbiA9PT0gJ2FzYycgPyAnZGVzYycgOiAnYXNjJztcblxuICAgICAgICAvLyDQlNC+0LHQsNCy0LjRgtGMINC90L7QstGD0Y4g0YHRgtGA0L7QutGDXG4gICAgICAgIG5ld1Jvd3MuZm9yRWFjaChmdW5jdGlvbihuZXdSb3cpIHtcbiAgICAgICAgICAgIHRhYmxlQm9keS5hcHBlbmRDaGlsZChuZXdSb3cpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIGxldCBhbGxBcnJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX19hcnJvd1wiKTtcbiAgICAgICAgbGV0IGN1cnJBcnJvdyA9IGV2ZW50LmN1cnJlbnRUYXJnZXQucXVlcnlTZWxlY3RvcihcIi50YWJsZV9fYXJyb3dcIik7XG4gICAgICAgIGZvcihsZXQgYXJyb3cgb2YgYWxsQXJyb3dzKSB7XG4gICAgICAgICAgICBpZihhcnJvdyAhPT0gY3VyckFycm93KSB7XG4gICAgICAgICAgICBhcnJvdy5jbGFzc0xpc3QgPSBcIlwiO1xuICAgICAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlX19hcnJvd1wiKTtcbiAgICAgICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fYXJyb3dfZGVmYXVsdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZihjdXJyQXJyb3cuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX2Fycm93X2RlZmF1bHRcIikpIHtcbiAgICAgICAgICAgIGN1cnJBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKFwidGFibGVfX2Fycm93X2RlZmF1bHRcIik7XG4gICAgICAgICAgICBjdXJyQXJyb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlX19hcnJvd19hc2NcIik7XG4gICAgICAgIH0gZWxzZSBpZihjdXJyQXJyb3cuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX2Fycm93X2FzY1wiKSkge1xuICAgICAgICAgICAgY3VyckFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJsZV9fYXJyb3dfYXNjXCIpO1xuICAgICAgICAgICAgY3VyckFycm93LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fYXJyb3dfZGVzY1wiKTtcbiAgICAgICAgfSBlbHNlIGlmKGN1cnJBcnJvdy5jbGFzc0xpc3QuY29udGFpbnMoXCJ0YWJsZV9fYXJyb3dfZGVzY1wiKSkge1xuICAgICAgICAgICAgY3VyckFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJsZV9fYXJyb3dfZGVzY1wiKTtcbiAgICAgICAgICAgIGN1cnJBcnJvdy5jbGFzc0xpc3QuYWRkKFwidGFibGVfX2Fycm93X2FzY1wiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBbXS5mb3JFYWNoLmNhbGwoaGVhZGVycywgZnVuY3Rpb24oaGVhZGVyLCBpbmRleCkge1xuICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNvcnRDb2x1bW4oaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGFycm93c1RvRGVmYXVsdCgpIHtcbiAgICBsZXQgYWxsQXJyb3dzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fYXJyb3dcIik7XG4gICAgZm9yKGxldCBhcnJvdyBvZiBhbGxBcnJvd3MpIHtcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlX19hcnJvd1wiKTtcbiAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlX19hcnJvd19kZWZhdWx0XCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZmlsbFNlbGVjdChhcnIpIHtcbiAgICBsZXQgc3RhdGVzID0gW107XG4gICAgZm9yKGxldCB1c2VyIG9mIGFycikge1xuICAgICAgICBsZXQgdXNlclN0YXRlID0gdXNlci5hZHJlc3Muc3RhdGU7XG4gICAgICAgIGlmKCFzdGF0ZXMuaW5jbHVkZXModXNlclN0YXRlKSkge1xuICAgICAgICAgICAgc3RhdGVzLnB1c2godXNlclN0YXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX3NlbGVjdFwiKTtcbiAgICBmb3IobGV0IHN0YXRlIG9mIHN0YXRlcykge1xuICAgICAgICBsZXQgbmV3T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgbmV3T3B0aW9uLmlubmVySFRNTCA9IHN0YXRlO1xuICAgICAgICBzZWxlY3QuYXBwZW5kKG5ld09wdGlvbik7XG4gICAgfVxuICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGhhbmRsZVNlbGVjdCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVNlbGVjdChldmVudCkge1xuICAgIGxldCBjdXJyU3RhdGUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgbGV0IHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3Jvd192aXNpYmxlJyk7XG4gICAgZm9yKGxldCByb3cgb2Ygcm93cykge1xuICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IFwidGFibGUtcm93XCI7XG4gICAgICAgIGlmKHJvdy5xdWVyeVNlbGVjdG9yKFwiLnN0YXRlXCIpLnRleHRDb250ZW50ICE9PSBjdXJyU3RhdGUpIHtcbiAgICAgICAgICAgIHJvdy5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhclNlbGVjdCgpIHtcbiAgICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX3NlbGVjdFwiKTtcbiAgICBzZWxlY3RbMF0uc2VsZWN0ZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBjbGVhclNlYXJjaCgpIHtcbiAgICBsZXQgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX3NlYXJjaFwiKTtcbiAgICBzZWFyY2gudmFsdWUgPSBcIlwiO1xuICAgIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGFibGVTZWFyY2gpO1xuICAgIFxufVxuXG5mdW5jdGlvbiB0YWJsZVNlYXJjaCgpIHtcbiAgICB2YXIgcGhyYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZpbHRlcl9fc2VhcmNoJyk7XG4gICAgdmFyIHJlZ1BocmFzZSA9IG5ldyBSZWdFeHAocGhyYXNlLnZhbHVlLCAnaScpO1xuICAgIHZhciBmbGFnID0gZmFsc2U7XG4gICAgbGV0IHJvd3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3Jvd192aXNpYmxlJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCByb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZsYWcgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaiA9IHJvd3NbaV0uY2VsbHMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgIGZsYWcgPSByZWdQaHJhc2UudGVzdChyb3dzW2ldLmNlbGxzW2pdLmlubmVySFRNTCk7XG4gICAgICAgICAgICBpZiAoZmxhZykgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgIHJvd3NbaV0uc3R5bGUuZGlzcGxheSA9IFwidGFibGUtcm93XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByb3dzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0VXNlcnMiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwIiwianNvbiIsIm1haW5GdW5jIiwiYXJyIiwiY29udGFpbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImRyYXdMaXN0IiwiY2hlY2tBY3RpdmUiLCJhZGRQYWdpbmF0aW9uIiwiZmlsbFNlbGVjdCIsImZyb20iLCJ0byIsImFsbFJvd3MiLCJyb3ciLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzbGljZSIsInVzZXIiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwidGRJZCIsInRleHRDb250ZW50IiwiaWQiLCJhcHBlbmQiLCJ0ZEZpcnN0TmFtZSIsImZpcnN0TmFtZSIsInRkTGFzdE5hbWUiLCJsYXN0TmFtZSIsInRkRW1haWwiLCJlbWFpbCIsInRkUGhvbmUiLCJwaG9uZSIsInRkU3RhdGUiLCJhZHJlc3MiLCJzdGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRSb3dzTGlzdGVuZXJzIiwic29ydEZ1bmMiLCJjbGVhclNlYXJjaCIsInJvd3MiLCJoYW5kbGVSb3dDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImFjdGl2ZVJvdyIsImNvbnRhaW5zIiwibmFtZSIsImluZm9CbG9jayIsInVzZXJOYW1lIiwidXNlckRlc2MiLCJkZXNyaXB0aW9uIiwidXNlckFkZHJlc3MiLCJzdHJlZXRBZGRyZXNzIiwidXNlckNpdHkiLCJjaXR5IiwidXNlclN0YXRlIiwidXNlclppcCIsInppcCIsIm51bSIsIm51bWJlck9mUGFnZXMiLCJsZW5ndGgiLCJuZXh0QnV0dG9uIiwiaSIsIm51bWJlciIsImJlZm9yZSIsInBhZ2luYXRpb24iLCJoYW5kbGVQYWdpQ2xpY2siLCJ0YXJnZXQiLCJwYWdlTnVtIiwiY3VycmVudCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJuZXh0RWxlbWVudFNpYmxpbmciLCJhcnJvd3NUb0RlZmF1bHQiLCJjbGVhclNlbGVjdCIsInRhYmxlIiwiaGVhZGVycyIsInRhYmxlQm9keSIsImRpcmVjdGlvbnMiLCJBcnJheSIsIm1hcCIsImhlYWRlciIsInRyYW5zZm9ybSIsImluZGV4IiwiY29udGVudCIsInR5cGUiLCJnZXRBdHRyaWJ1dGUiLCJwYXJzZUZsb2F0Iiwic29ydENvbHVtbiIsImRpcmVjdGlvbiIsIm11bHRpcGxpZXIiLCJuZXdSb3dzIiwic29ydCIsInJvd0EiLCJyb3dCIiwiY2VsbEEiLCJjZWxsQiIsImEiLCJiIiwiZm9yRWFjaCIsImNhbGwiLCJyZW1vdmVDaGlsZCIsIm5ld1JvdyIsImFwcGVuZENoaWxkIiwiYWxsQXJyb3dzIiwiY3VyckFycm93IiwiYXJyb3ciLCJzdGF0ZXMiLCJpbmNsdWRlcyIsInB1c2giLCJzZWxlY3QiLCJuZXdPcHRpb24iLCJoYW5kbGVTZWxlY3QiLCJjdXJyU3RhdGUiLCJ2YWx1ZSIsInN0eWxlIiwiZGlzcGxheSIsInNlbGVjdGVkIiwic2VhcmNoIiwidGFibGVTZWFyY2giLCJwaHJhc2UiLCJyZWdQaHJhc2UiLCJSZWdFeHAiLCJmbGFnIiwiaiIsImNlbGxzIiwidGVzdCJdLCJzb3VyY2VSb290IjoiIn0=