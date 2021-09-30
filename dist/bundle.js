/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/app.css":
/*!****************************!*\
  !*** ./src/styles/app.css ***!
  \****************************/
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
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.css */ "./src/styles/app.css");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

 // Making all functional independent. Just a "container" wrapper is needed for each table to work separately.

var containers = document.querySelectorAll(".container");

var _iterator = _createForOfIteratorHelper(containers),
    _step;

try {
  var _loop = function _loop() {
    var container = _step.value;
    window.addEventListener("DOMContentLoaded", getUsers); // Getting data from the API.

    function getUsers() {
      var url = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json';
      return fetch(url).then(function (resp) {
        return resp.json();
      }).then(mainFunc)["catch"](function (err) {
        return alert('Failed to load data.');
      });
    } // Main function that processes the api-data and delegates it to other functions.


    function mainFunc(arr) {
      drawList(arr, 0, 20);
      checkActive(arr);
      addPagination(arr, 20);
      fillSelect(arr);
    } // Table creation.


    function drawList(arr, from, to) {
      var allRows = container.querySelectorAll(".table__row");

      var _iterator2 = _createForOfIteratorHelper(allRows),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var row = _step2.value;
          row.innerHTML = "";
          row.classList.remove("table__row_visible");
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper(arr.slice(from, to)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var user = _step3.value;

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

          container.querySelector(".table__body").append(_row);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      addRowsListeners(arr);
      sortFunc();
      clearSearch();
    } // Adding event listeners to rows here.


    function addRowsListeners(arr) {
      var rows = container.querySelectorAll(".table__row");
      rows[0].classList.add("table__row_selected");

      var _iterator4 = _createForOfIteratorHelper(rows),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var row = _step4.value;
          row.addEventListener("click", handleRowClick);
        } // Row-click handler.

      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      function handleRowClick(event) {
        var _iterator5 = _createForOfIteratorHelper(rows),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var row = _step5.value;
            row.classList.remove("table__row_selected");
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }

        event.currentTarget.classList.add("table__row_selected");
        checkActive(arr);
      }
    } // Processing rows selection: drawing info-block for a selected user.


    function checkActive(arr) {
      var rows = container.querySelectorAll(".table__row");
      var activeRow;

      var _iterator6 = _createForOfIteratorHelper(rows),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var row = _step6.value;
          row.classList.contains("table__row_selected") ? activeRow = row : false;
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var id = activeRow.querySelector(".id").textContent;
      var name = activeRow.querySelector(".name").textContent;
      var infoBlock = container.querySelector(".info-block");
      infoBlock.innerHTML = "<div><b>Profile info:</b></div>";

      var _iterator7 = _createForOfIteratorHelper(arr),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var user = _step7.value;

          if (id == user.id && name == user.firstName) {
            var userName = document.createElement("div");
            userName.textContent = "Selected profile: " + user.firstName + " " + user.lastName;
            var userDesc = document.createElement("div");
            userDesc.textContent = "Description: " + user.description;
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
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    } // Filling the pagination block in accordance with the received from the API data.


    function addPagination(arr, num) {
      var numberOfPages = arr.length / num;
      var nextButton = container.querySelector(".pagination__nextButton");

      for (var i = 0; i < numberOfPages; i++) {
        var number = document.createElement("a");
        number.classList.add("pagination__pageNum");

        if (i == 0) {
          number.classList.add("pagination__pageNum_active");
        }

        number.textContent = i + 1;
        nextButton.before(number);
      }

      var pagination = container.querySelector(".pagination");
      pagination.addEventListener("click", handlePagiClick);

      function handlePagiClick(event) {
        if (event.target.classList.contains("pagination__pageNum")) {
          var pageNum = +event.target.textContent;
          drawList(arr, (pageNum - 1) * num, (pageNum - 1) * num + num);
          event.currentTarget.querySelector(".pagination__pageNum_active").classList.remove("pagination__pageNum_active");
          event.target.classList.add("pagination__pageNum_active");
        } else if (event.target.classList.contains("pagination__prevButton")) {
          var current = event.currentTarget.querySelector(".pagination__pageNum_active");

          if (current.previousElementSibling == event.target) {
            return;
          }

          var _pageNum = +current.textContent - 1;

          drawList(arr, (_pageNum - 1) * num, (_pageNum - 1) * num + num);
          current.classList.remove("pagination__pageNum_active");
          current.previousElementSibling.classList.add("pagination__pageNum_active");
        } else if (event.target.classList.contains("pagination__nextButton")) {
          var _current = event.currentTarget.querySelector(".pagination__pageNum_active");

          if (_current.nextElementSibling == event.target) {
            return;
          }

          var _pageNum2 = +_current.textContent + 1;

          drawList(arr, (_pageNum2 - 1) * num, (_pageNum2 - 1) * num + num);

          _current.classList.remove("pagination__pageNum_active");

          _current.nextElementSibling.classList.add("pagination__pageNum_active");
        }

        arrowsToDefault();
        sortFunc();
        clearSelect();
        clearSearch();
      }

      addRowsListeners(arr);
    } // Sorting columns functional implementation.


    function sortFunc() {
      var table = container.querySelector('.table');
      var headers = table.querySelectorAll('th');
      var tableBody = table.querySelector('tbody');
      var rows = tableBody.querySelectorAll('.table__row_visible'); // Sort direction.

      var directions = Array.from(headers).map(function (header) {
        return '';
      }); // Changing td contents in the approptiate column.

      var transform = function transform(index, content) {
        // Getting the data-type of the column.
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
        // Get the current diretion.
        var direction = directions[index] || 'asc'; // Direction.

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
        }); // Delete old rows.

        [].forEach.call(rows, function (row) {
          tableBody.removeChild(row);
        }); // Change the direction.

        directions[index] = direction === 'asc' ? 'desc' : 'asc'; // Add new rows.

        newRows.forEach(function (newRow) {
          tableBody.appendChild(newRow);
        });
        var allArrows = container.querySelectorAll(".table__arrow");
        var currArrow = event.currentTarget.querySelector(".table__arrow");

        var _iterator8 = _createForOfIteratorHelper(allArrows),
            _step8;

        try {
          for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
            var arrow = _step8.value;

            if (arrow !== currArrow) {
              arrow.classList = "";
              arrow.classList.add("table__arrow");
              arrow.classList.add("table__arrow_default");
            }
          }
        } catch (err) {
          _iterator8.e(err);
        } finally {
          _iterator8.f();
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

    ; // Setting all the direction indiators to the default position.

    function arrowsToDefault() {
      var allArrows = container.querySelectorAll(".table__arrow");

      var _iterator9 = _createForOfIteratorHelper(allArrows),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var arrow = _step9.value;
          arrow.classList = "";
          arrow.classList.add("table__arrow");
          arrow.classList.add("table__arrow_default");
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }
    } // Filling the select filter in accordance with the received from the API data.


    function fillSelect(arr) {
      var states = [];

      var _iterator10 = _createForOfIteratorHelper(arr),
          _step10;

      try {
        for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
          var user = _step10.value;
          var userState = user.adress.state;

          if (!states.includes(userState)) {
            states.push(userState);
          }
        }
      } catch (err) {
        _iterator10.e(err);
      } finally {
        _iterator10.f();
      }

      var select = container.querySelector(".filter__select");

      for (var _i = 0, _states = states; _i < _states.length; _i++) {
        var state = _states[_i];
        var newOption = document.createElement("option");
        newOption.innerHTML = state;
        select.append(newOption);
      }

      select.addEventListener("change", handleSelect);
    } // Processing select change here.


    function handleSelect(event) {
      var currState = event.target.value;
      var rows = container.querySelectorAll('.table__row_visible');

      var _iterator11 = _createForOfIteratorHelper(rows),
          _step11;

      try {
        for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
          var row = _step11.value;
          row.style.display = "table-row";

          if (row.querySelector(".state").textContent !== currState) {
            row.style.display = "none";
          }

          ;
        }
      } catch (err) {
        _iterator11.e(err);
      } finally {
        _iterator11.f();
      }
    } // Refreshing select filter.


    function clearSelect() {
      var select = container.querySelector(".filter__select");
      select[0].selected = true;
    } // Refreshing search filter.


    function clearSearch() {
      var search = container.querySelector(".filter__search");
      search.value = "";
      search.addEventListener("keyup", tableSearch);
    } // Search function implementation.


    function tableSearch() {
      var phrase = container.querySelector('.filter__search');
      var regPhrase = new RegExp(phrase.value, 'i');
      var flag = false;
      var rows = container.querySelectorAll('.table__row_visible');

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
  };

  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    _loop();
  }
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQ0pBOztBQUNBLElBQUlBLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixDQUFqQjs7MkNBQ3NCRjs7Ozs7UUFBYkc7QUFFTEMsSUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNENDLFFBQTVDLEdBRUE7O0FBQ0EsYUFBU0EsUUFBVCxHQUFvQjtBQUNoQixVQUFJQyxHQUFHLEdBQUcsaUZBQVY7QUFDQSxhQUFPQyxLQUFLLENBQUNELEdBQUQsQ0FBTCxDQUNGRSxJQURFLENBQ0csVUFBQ0MsSUFBRDtBQUFBLGVBQVVBLElBQUksQ0FBQ0MsSUFBTCxFQUFWO0FBQUEsT0FESCxFQUVGRixJQUZFLENBRUdHLFFBRkgsV0FHSSxVQUFBQyxHQUFHO0FBQUEsZUFBSUMsS0FBSyxDQUFDLHNCQUFELENBQVQ7QUFBQSxPQUhQLENBQVA7QUFJSCxNQUVEOzs7QUFDQSxhQUFTRixRQUFULENBQWtCRyxHQUFsQixFQUF1QjtBQUNuQkMsTUFBQUEsUUFBUSxDQUFDRCxHQUFELEVBQU0sQ0FBTixFQUFTLEVBQVQsQ0FBUjtBQUNBRSxNQUFBQSxXQUFXLENBQUNGLEdBQUQsQ0FBWDtBQUNBRyxNQUFBQSxhQUFhLENBQUNILEdBQUQsRUFBTSxFQUFOLENBQWI7QUFDQUksTUFBQUEsVUFBVSxDQUFDSixHQUFELENBQVY7QUFDSCxNQUVEOzs7QUFDQSxhQUFTQyxRQUFULENBQWtCRCxHQUFsQixFQUF1QkssSUFBdkIsRUFBNkJDLEVBQTdCLEVBQWlDO0FBQzdCLFVBQUlDLE9BQU8sR0FBR25CLFNBQVMsQ0FBQ0QsZ0JBQVYsQ0FBMkIsYUFBM0IsQ0FBZDs7QUFENkIsa0RBRWJvQixPQUZhO0FBQUE7O0FBQUE7QUFFN0IsK0RBQXlCO0FBQUEsY0FBaEJDLEdBQWdCO0FBQ3JCQSxVQUFBQSxHQUFHLENBQUNDLFNBQUosR0FBZ0IsRUFBaEI7QUFDQUQsVUFBQUEsR0FBRyxDQUFDRSxTQUFKLENBQWNDLE1BQWQsQ0FBcUIsb0JBQXJCO0FBQ0g7QUFMNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQSxrREFNWlgsR0FBRyxDQUFDWSxLQUFKLENBQVVQLElBQVYsRUFBZ0JDLEVBQWhCLENBTlk7QUFBQTs7QUFBQTtBQU03QiwrREFBc0M7QUFBQSxjQUE3Qk8sSUFBNkI7O0FBQ2xDLGNBQUlMLElBQUcsR0FBR3RCLFFBQVEsQ0FBQzRCLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVjs7QUFDQU4sVUFBQUEsSUFBRyxDQUFDRSxTQUFKLENBQWNLLEdBQWQsQ0FBa0IsWUFBbEI7O0FBQ0FQLFVBQUFBLElBQUcsQ0FBQ0UsU0FBSixDQUFjSyxHQUFkLENBQWtCLG9CQUFsQjs7QUFDQSxjQUFJQyxJQUFJLEdBQUc5QixRQUFRLENBQUM0QixhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQUUsVUFBQUEsSUFBSSxDQUFDTixTQUFMLENBQWVLLEdBQWYsQ0FBbUIsSUFBbkI7QUFDQUMsVUFBQUEsSUFBSSxDQUFDQyxXQUFMLEdBQW1CSixJQUFJLENBQUNLLEVBQXhCOztBQUNBVixVQUFBQSxJQUFHLENBQUNXLE1BQUosQ0FBV0gsSUFBWDs7QUFDQSxjQUFJSSxXQUFXLEdBQUdsQyxRQUFRLENBQUM0QixhQUFULENBQXVCLElBQXZCLENBQWxCO0FBQ0FNLFVBQUFBLFdBQVcsQ0FBQ1YsU0FBWixDQUFzQkssR0FBdEIsQ0FBMEIsTUFBMUI7QUFDQUssVUFBQUEsV0FBVyxDQUFDSCxXQUFaLEdBQTBCSixJQUFJLENBQUNRLFNBQS9COztBQUNBYixVQUFBQSxJQUFHLENBQUNXLE1BQUosQ0FBV0MsV0FBWDs7QUFDQSxjQUFJRSxVQUFVLEdBQUdwQyxRQUFRLENBQUM0QixhQUFULENBQXVCLElBQXZCLENBQWpCO0FBQ0FRLFVBQUFBLFVBQVUsQ0FBQ0wsV0FBWCxHQUF5QkosSUFBSSxDQUFDVSxRQUE5Qjs7QUFDQWYsVUFBQUEsSUFBRyxDQUFDVyxNQUFKLENBQVdHLFVBQVg7O0FBQ0EsY0FBSUUsT0FBTyxHQUFHdEMsUUFBUSxDQUFDNEIsYUFBVCxDQUF1QixJQUF2QixDQUFkO0FBQ0FVLFVBQUFBLE9BQU8sQ0FBQ1AsV0FBUixHQUFzQkosSUFBSSxDQUFDWSxLQUEzQjs7QUFDQWpCLFVBQUFBLElBQUcsQ0FBQ1csTUFBSixDQUFXSyxPQUFYOztBQUNBLGNBQUlFLE9BQU8sR0FBR3hDLFFBQVEsQ0FBQzRCLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBZDtBQUNBWSxVQUFBQSxPQUFPLENBQUNULFdBQVIsR0FBc0JKLElBQUksQ0FBQ2MsS0FBM0I7O0FBQ0FuQixVQUFBQSxJQUFHLENBQUNXLE1BQUosQ0FBV08sT0FBWDs7QUFDQSxjQUFJRSxPQUFPLEdBQUcxQyxRQUFRLENBQUM0QixhQUFULENBQXVCLElBQXZCLENBQWQ7QUFDQWMsVUFBQUEsT0FBTyxDQUFDbEIsU0FBUixDQUFrQkssR0FBbEIsQ0FBc0IsT0FBdEI7QUFDQWEsVUFBQUEsT0FBTyxDQUFDWCxXQUFSLEdBQXNCSixJQUFJLENBQUNnQixNQUFMLENBQVlDLEtBQWxDOztBQUNBdEIsVUFBQUEsSUFBRyxDQUFDVyxNQUFKLENBQVdTLE9BQVg7O0FBRUF4QyxVQUFBQSxTQUFTLENBQUMyQyxhQUFWLENBQXdCLGNBQXhCLEVBQXdDWixNQUF4QyxDQUErQ1gsSUFBL0M7QUFDSDtBQWpDNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFrQzdCd0IsTUFBQUEsZ0JBQWdCLENBQUNoQyxHQUFELENBQWhCO0FBQ0FpQyxNQUFBQSxRQUFRO0FBQ1JDLE1BQUFBLFdBQVc7QUFDZCxNQUVEOzs7QUFDQSxhQUFTRixnQkFBVCxDQUEwQmhDLEdBQTFCLEVBQStCO0FBQzNCLFVBQUltQyxJQUFJLEdBQUcvQyxTQUFTLENBQUNELGdCQUFWLENBQTJCLGFBQTNCLENBQVg7QUFDQWdELE1BQUFBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUXpCLFNBQVIsQ0FBa0JLLEdBQWxCLENBQXNCLHFCQUF0Qjs7QUFGMkIsa0RBR1hvQixJQUhXO0FBQUE7O0FBQUE7QUFHM0IsK0RBQXNCO0FBQUEsY0FBYjNCLEdBQWE7QUFDbEJBLFVBQUFBLEdBQUcsQ0FBQ2xCLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCOEMsY0FBOUI7QUFDSCxTQUwwQixDQU0zQjs7QUFOMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFPM0IsZUFBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQSxvREFDWEYsSUFEVztBQUFBOztBQUFBO0FBQzNCLGlFQUFzQjtBQUFBLGdCQUFiM0IsR0FBYTtBQUNsQkEsWUFBQUEsR0FBRyxDQUFDRSxTQUFKLENBQWNDLE1BQWQsQ0FBcUIscUJBQXJCO0FBQ0g7QUFIMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJM0IwQixRQUFBQSxLQUFLLENBQUNDLGFBQU4sQ0FBb0I1QixTQUFwQixDQUE4QkssR0FBOUIsQ0FBa0MscUJBQWxDO0FBQ0FiLFFBQUFBLFdBQVcsQ0FBQ0YsR0FBRCxDQUFYO0FBQ0g7QUFDSixNQUVEOzs7QUFDQSxhQUFTRSxXQUFULENBQXFCRixHQUFyQixFQUEwQjtBQUN0QixVQUFJbUMsSUFBSSxHQUFHL0MsU0FBUyxDQUFDRCxnQkFBVixDQUEyQixhQUEzQixDQUFYO0FBQ0EsVUFBSW9ELFNBQUo7O0FBRnNCLGtEQUdOSixJQUhNO0FBQUE7O0FBQUE7QUFHdEIsK0RBQXNCO0FBQUEsY0FBYjNCLEdBQWE7QUFDbEJBLFVBQUFBLEdBQUcsQ0FBQ0UsU0FBSixDQUFjOEIsUUFBZCxDQUF1QixxQkFBdkIsSUFBZ0RELFNBQVMsR0FBRy9CLEdBQTVELEdBQWtFLEtBQWxFO0FBQ0g7QUFMcUI7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNdEIsVUFBSVUsRUFBRSxHQUFHcUIsU0FBUyxDQUFDUixhQUFWLENBQXdCLEtBQXhCLEVBQStCZCxXQUF4QztBQUNBLFVBQUl3QixJQUFJLEdBQUdGLFNBQVMsQ0FBQ1IsYUFBVixDQUF3QixPQUF4QixFQUFpQ2QsV0FBNUM7QUFDQSxVQUFJeUIsU0FBUyxHQUFHdEQsU0FBUyxDQUFDMkMsYUFBVixDQUF3QixhQUF4QixDQUFoQjtBQUNBVyxNQUFBQSxTQUFTLENBQUNqQyxTQUFWLEdBQXNCLGlDQUF0Qjs7QUFUc0Isa0RBVUxULEdBVks7QUFBQTs7QUFBQTtBQVV0QiwrREFBc0I7QUFBQSxjQUFiYSxJQUFhOztBQUNsQixjQUFJSyxFQUFFLElBQUlMLElBQUksQ0FBQ0ssRUFBWCxJQUFpQnVCLElBQUksSUFBSTVCLElBQUksQ0FBQ1EsU0FBbEMsRUFBNkM7QUFDekMsZ0JBQUlzQixRQUFRLEdBQUd6RCxRQUFRLENBQUM0QixhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQTZCLFlBQUFBLFFBQVEsQ0FBQzFCLFdBQVQsR0FBdUIsdUJBQXVCSixJQUFJLENBQUNRLFNBQTVCLEdBQXdDLEdBQXhDLEdBQThDUixJQUFJLENBQUNVLFFBQTFFO0FBQ0EsZ0JBQUlxQixRQUFRLEdBQUcxRCxRQUFRLENBQUM0QixhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQThCLFlBQUFBLFFBQVEsQ0FBQzNCLFdBQVQsR0FBdUIsa0JBQWtCSixJQUFJLENBQUNnQyxXQUE5QztBQUNBLGdCQUFJQyxXQUFXLEdBQUc1RCxRQUFRLENBQUM0QixhQUFULENBQXVCLEtBQXZCLENBQWxCO0FBQ0FnQyxZQUFBQSxXQUFXLENBQUM3QixXQUFaLEdBQTBCLGNBQWNKLElBQUksQ0FBQ2dCLE1BQUwsQ0FBWWtCLGFBQXBEO0FBQ0EsZ0JBQUlDLFFBQVEsR0FBRzlELFFBQVEsQ0FBQzRCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtBQUNBa0MsWUFBQUEsUUFBUSxDQUFDL0IsV0FBVCxHQUF1QixXQUFXSixJQUFJLENBQUNnQixNQUFMLENBQVlvQixJQUE5QztBQUNBLGdCQUFJQyxTQUFTLEdBQUdoRSxRQUFRLENBQUM0QixhQUFULENBQXVCLEtBQXZCLENBQWhCO0FBQ0FvQyxZQUFBQSxTQUFTLENBQUNqQyxXQUFWLEdBQXdCLFlBQVlKLElBQUksQ0FBQ2dCLE1BQUwsQ0FBWUMsS0FBaEQ7QUFDQSxnQkFBSXFCLE9BQU8sR0FBR2pFLFFBQVEsQ0FBQzRCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZDtBQUNBcUMsWUFBQUEsT0FBTyxDQUFDbEMsV0FBUixHQUFzQixZQUFZSixJQUFJLENBQUNnQixNQUFMLENBQVl1QixHQUE5QztBQUVBVixZQUFBQSxTQUFTLENBQUN2QixNQUFWLENBQWlCd0IsUUFBakI7QUFDQUQsWUFBQUEsU0FBUyxDQUFDdkIsTUFBVixDQUFpQnlCLFFBQWpCO0FBQ0FGLFlBQUFBLFNBQVMsQ0FBQ3ZCLE1BQVYsQ0FBaUIyQixXQUFqQjtBQUNBSixZQUFBQSxTQUFTLENBQUN2QixNQUFWLENBQWlCNkIsUUFBakI7QUFDQU4sWUFBQUEsU0FBUyxDQUFDdkIsTUFBVixDQUFpQitCLFNBQWpCO0FBQ0FSLFlBQUFBLFNBQVMsQ0FBQ3ZCLE1BQVYsQ0FBaUJnQyxPQUFqQjtBQUNIO0FBQ0o7QUFoQ3FCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFpQ3pCLE1BRUQ7OztBQUNBLGFBQVNoRCxhQUFULENBQXVCSCxHQUF2QixFQUE0QnFELEdBQTVCLEVBQWlDO0FBQzdCLFVBQUlDLGFBQWEsR0FBR3RELEdBQUcsQ0FBQ3VELE1BQUosR0FBYUYsR0FBakM7QUFDQSxVQUFJRyxVQUFVLEdBQUdwRSxTQUFTLENBQUMyQyxhQUFWLENBQXdCLHlCQUF4QixDQUFqQjs7QUFDQSxXQUFLLElBQUkwQixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxhQUFwQixFQUFtQ0csQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxZQUFJQyxNQUFNLEdBQUd4RSxRQUFRLENBQUM0QixhQUFULENBQXVCLEdBQXZCLENBQWI7QUFDQTRDLFFBQUFBLE1BQU0sQ0FBQ2hELFNBQVAsQ0FBaUJLLEdBQWpCLENBQXFCLHFCQUFyQjs7QUFDQSxZQUFJMEMsQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNSQyxVQUFBQSxNQUFNLENBQUNoRCxTQUFQLENBQWlCSyxHQUFqQixDQUFxQiw0QkFBckI7QUFDSDs7QUFDRDJDLFFBQUFBLE1BQU0sQ0FBQ3pDLFdBQVAsR0FBcUJ3QyxDQUFDLEdBQUcsQ0FBekI7QUFDQUQsUUFBQUEsVUFBVSxDQUFDRyxNQUFYLENBQWtCRCxNQUFsQjtBQUNIOztBQUNELFVBQUlFLFVBQVUsR0FBR3hFLFNBQVMsQ0FBQzJDLGFBQVYsQ0FBd0IsYUFBeEIsQ0FBakI7QUFDQTZCLE1BQUFBLFVBQVUsQ0FBQ3RFLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDdUUsZUFBckM7O0FBQ0EsZUFBU0EsZUFBVCxDQUF5QnhCLEtBQXpCLEVBQWdDO0FBQzVCLFlBQUlBLEtBQUssQ0FBQ3lCLE1BQU4sQ0FBYXBELFNBQWIsQ0FBdUI4QixRQUF2QixDQUFnQyxxQkFBaEMsQ0FBSixFQUE0RDtBQUN4RCxjQUFJdUIsT0FBTyxHQUFHLENBQUMxQixLQUFLLENBQUN5QixNQUFOLENBQWE3QyxXQUE1QjtBQUNBaEIsVUFBQUEsUUFBUSxDQUFDRCxHQUFELEVBQU0sQ0FBQytELE9BQU8sR0FBRyxDQUFYLElBQWdCVixHQUF0QixFQUE0QixDQUFDVSxPQUFPLEdBQUcsQ0FBWCxJQUFnQlYsR0FBaEIsR0FBc0JBLEdBQWxELENBQVI7QUFDQWhCLFVBQUFBLEtBQUssQ0FBQ0MsYUFBTixDQUFvQlAsYUFBcEIsQ0FBa0MsNkJBQWxDLEVBQWlFckIsU0FBakUsQ0FBMkVDLE1BQTNFLENBQWtGLDRCQUFsRjtBQUNBMEIsVUFBQUEsS0FBSyxDQUFDeUIsTUFBTixDQUFhcEQsU0FBYixDQUF1QkssR0FBdkIsQ0FBMkIsNEJBQTNCO0FBQ0gsU0FMRCxNQUtPLElBQUlzQixLQUFLLENBQUN5QixNQUFOLENBQWFwRCxTQUFiLENBQXVCOEIsUUFBdkIsQ0FBZ0Msd0JBQWhDLENBQUosRUFBK0Q7QUFDbEUsY0FBSXdCLE9BQU8sR0FBRzNCLEtBQUssQ0FBQ0MsYUFBTixDQUFvQlAsYUFBcEIsQ0FBa0MsNkJBQWxDLENBQWQ7O0FBQ0EsY0FBSWlDLE9BQU8sQ0FBQ0Msc0JBQVIsSUFBa0M1QixLQUFLLENBQUN5QixNQUE1QyxFQUFvRDtBQUNoRDtBQUNIOztBQUNELGNBQUlDLFFBQU8sR0FBRyxDQUFDQyxPQUFPLENBQUMvQyxXQUFULEdBQXVCLENBQXJDOztBQUNBaEIsVUFBQUEsUUFBUSxDQUFDRCxHQUFELEVBQU0sQ0FBQytELFFBQU8sR0FBRyxDQUFYLElBQWdCVixHQUF0QixFQUE0QixDQUFDVSxRQUFPLEdBQUcsQ0FBWCxJQUFnQlYsR0FBaEIsR0FBc0JBLEdBQWxELENBQVI7QUFDQVcsVUFBQUEsT0FBTyxDQUFDdEQsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsNEJBQXpCO0FBQ0FxRCxVQUFBQSxPQUFPLENBQUNDLHNCQUFSLENBQStCdkQsU0FBL0IsQ0FBeUNLLEdBQXpDLENBQTZDLDRCQUE3QztBQUNILFNBVE0sTUFTQSxJQUFJc0IsS0FBSyxDQUFDeUIsTUFBTixDQUFhcEQsU0FBYixDQUF1QjhCLFFBQXZCLENBQWdDLHdCQUFoQyxDQUFKLEVBQStEO0FBQ2xFLGNBQUl3QixRQUFPLEdBQUczQixLQUFLLENBQUNDLGFBQU4sQ0FBb0JQLGFBQXBCLENBQWtDLDZCQUFsQyxDQUFkOztBQUNBLGNBQUlpQyxRQUFPLENBQUNFLGtCQUFSLElBQThCN0IsS0FBSyxDQUFDeUIsTUFBeEMsRUFBZ0Q7QUFDNUM7QUFDSDs7QUFDRCxjQUFJQyxTQUFPLEdBQUcsQ0FBQ0MsUUFBTyxDQUFDL0MsV0FBVCxHQUF1QixDQUFyQzs7QUFDQWhCLFVBQUFBLFFBQVEsQ0FBQ0QsR0FBRCxFQUFNLENBQUMrRCxTQUFPLEdBQUcsQ0FBWCxJQUFnQlYsR0FBdEIsRUFBNEIsQ0FBQ1UsU0FBTyxHQUFHLENBQVgsSUFBZ0JWLEdBQWhCLEdBQXNCQSxHQUFsRCxDQUFSOztBQUNBVyxVQUFBQSxRQUFPLENBQUN0RCxTQUFSLENBQWtCQyxNQUFsQixDQUF5Qiw0QkFBekI7O0FBQ0FxRCxVQUFBQSxRQUFPLENBQUNFLGtCQUFSLENBQTJCeEQsU0FBM0IsQ0FBcUNLLEdBQXJDLENBQXlDLDRCQUF6QztBQUNIOztBQUNEb0QsUUFBQUEsZUFBZTtBQUNmbEMsUUFBQUEsUUFBUTtBQUNSbUMsUUFBQUEsV0FBVztBQUNYbEMsUUFBQUEsV0FBVztBQUNkOztBQUNERixNQUFBQSxnQkFBZ0IsQ0FBQ2hDLEdBQUQsQ0FBaEI7QUFDSCxNQUVEOzs7QUFDQSxhQUFTaUMsUUFBVCxHQUFvQjtBQUNoQixVQUFJb0MsS0FBSyxHQUFHakYsU0FBUyxDQUFDMkMsYUFBVixDQUF3QixRQUF4QixDQUFaO0FBQ0EsVUFBSXVDLE9BQU8sR0FBR0QsS0FBSyxDQUFDbEYsZ0JBQU4sQ0FBdUIsSUFBdkIsQ0FBZDtBQUNBLFVBQUlvRixTQUFTLEdBQUdGLEtBQUssQ0FBQ3RDLGFBQU4sQ0FBb0IsT0FBcEIsQ0FBaEI7QUFDQSxVQUFJSSxJQUFJLEdBQUdvQyxTQUFTLENBQUNwRixnQkFBVixDQUEyQixxQkFBM0IsQ0FBWCxDQUpnQixDQU1oQjs7QUFDQSxVQUFJcUYsVUFBVSxHQUFHQyxLQUFLLENBQUNwRSxJQUFOLENBQVdpRSxPQUFYLEVBQW9CSSxHQUFwQixDQUF3QixVQUFVQyxNQUFWLEVBQWtCO0FBQ3ZELGVBQU8sRUFBUDtBQUNILE9BRmdCLENBQWpCLENBUGdCLENBV2hCOztBQUNBLFVBQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVVDLEtBQVYsRUFBaUJDLE9BQWpCLEVBQTBCO0FBQ3RDO0FBQ0EsWUFBSUMsSUFBSSxHQUFHVCxPQUFPLENBQUNPLEtBQUQsQ0FBUCxDQUFlRyxZQUFmLENBQTRCLFdBQTVCLENBQVg7O0FBQ0EsZ0JBQVFELElBQVI7QUFDSSxlQUFLLFFBQUw7QUFDSSxtQkFBT0UsVUFBVSxDQUFDSCxPQUFELENBQWpCOztBQUNKLGVBQUssUUFBTDtBQUNBO0FBQ0ksbUJBQU9BLE9BQVA7QUFMUjtBQU9ILE9BVkQ7O0FBWUEsZUFBU0ksVUFBVCxDQUFvQkwsS0FBcEIsRUFBMkI7QUFFdkI7QUFDQSxZQUFJTSxTQUFTLEdBQUdYLFVBQVUsQ0FBQ0ssS0FBRCxDQUFWLElBQXFCLEtBQXJDLENBSHVCLENBS3ZCOztBQUNBLFlBQUlPLFVBQVUsR0FBSUQsU0FBUyxLQUFLLEtBQWYsR0FBd0IsQ0FBeEIsR0FBNEIsQ0FBQyxDQUE5QztBQUNBLFlBQUloRCxJQUFJLEdBQUdvQyxTQUFTLENBQUNwRixnQkFBVixDQUEyQixxQkFBM0IsQ0FBWDtBQUNBLFlBQUlrRyxPQUFPLEdBQUdaLEtBQUssQ0FBQ3BFLElBQU4sQ0FBVzhCLElBQVgsQ0FBZDtBQUNBa0QsUUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsVUFBVUMsSUFBVixFQUFnQkMsSUFBaEIsRUFBc0I7QUFFL0IsY0FBSUMsS0FBSyxHQUFHRixJQUFJLENBQUNwRyxnQkFBTCxDQUFzQixJQUF0QixFQUE0QjBGLEtBQTVCLEVBQW1DcEUsU0FBL0M7QUFDQSxjQUFJaUYsS0FBSyxHQUFHRixJQUFJLENBQUNyRyxnQkFBTCxDQUFzQixJQUF0QixFQUE0QjBGLEtBQTVCLEVBQW1DcEUsU0FBL0M7QUFFQSxjQUFJa0YsQ0FBQyxHQUFHZixTQUFTLENBQUNDLEtBQUQsRUFBUVksS0FBUixDQUFqQjtBQUNBLGNBQUlHLENBQUMsR0FBR2hCLFNBQVMsQ0FBQ0MsS0FBRCxFQUFRYSxLQUFSLENBQWpCOztBQUVBLGtCQUFRLElBQVI7QUFDSSxpQkFBS0MsQ0FBQyxHQUFHQyxDQUFUO0FBQVkscUJBQU8sSUFBSVIsVUFBWDs7QUFDWixpQkFBS08sQ0FBQyxHQUFHQyxDQUFUO0FBQVkscUJBQU8sQ0FBQyxDQUFELEdBQUtSLFVBQVo7O0FBQ1osaUJBQUtPLENBQUMsS0FBS0MsQ0FBWDtBQUFjLHFCQUFPLENBQVA7QUFIbEI7QUFLSCxTQWJELEVBVHVCLENBd0J2Qjs7QUFDQSxXQUFHQyxPQUFILENBQVdDLElBQVgsQ0FBZ0IzRCxJQUFoQixFQUFzQixVQUFVM0IsR0FBVixFQUFlO0FBQ2pDK0QsVUFBQUEsU0FBUyxDQUFDd0IsV0FBVixDQUFzQnZGLEdBQXRCO0FBQ0gsU0FGRCxFQXpCdUIsQ0E2QnZCOztBQUNBZ0UsUUFBQUEsVUFBVSxDQUFDSyxLQUFELENBQVYsR0FBb0JNLFNBQVMsS0FBSyxLQUFkLEdBQXNCLE1BQXRCLEdBQStCLEtBQW5ELENBOUJ1QixDQWdDdkI7O0FBQ0FFLFFBQUFBLE9BQU8sQ0FBQ1EsT0FBUixDQUFnQixVQUFVRyxNQUFWLEVBQWtCO0FBQzlCekIsVUFBQUEsU0FBUyxDQUFDMEIsV0FBVixDQUFzQkQsTUFBdEI7QUFDSCxTQUZEO0FBSUEsWUFBSUUsU0FBUyxHQUFHOUcsU0FBUyxDQUFDRCxnQkFBVixDQUEyQixlQUEzQixDQUFoQjtBQUNBLFlBQUlnSCxTQUFTLEdBQUc5RCxLQUFLLENBQUNDLGFBQU4sQ0FBb0JQLGFBQXBCLENBQWtDLGVBQWxDLENBQWhCOztBQXRDdUIsb0RBdUNMbUUsU0F2Q0s7QUFBQTs7QUFBQTtBQXVDdkIsaUVBQTZCO0FBQUEsZ0JBQXBCRSxLQUFvQjs7QUFDekIsZ0JBQUlBLEtBQUssS0FBS0QsU0FBZCxFQUF5QjtBQUNyQkMsY0FBQUEsS0FBSyxDQUFDMUYsU0FBTixHQUFrQixFQUFsQjtBQUNBMEYsY0FBQUEsS0FBSyxDQUFDMUYsU0FBTixDQUFnQkssR0FBaEIsQ0FBb0IsY0FBcEI7QUFDQXFGLGNBQUFBLEtBQUssQ0FBQzFGLFNBQU4sQ0FBZ0JLLEdBQWhCLENBQW9CLHNCQUFwQjtBQUNIO0FBQ0o7QUE3Q3NCO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBOEN2QixZQUFJb0YsU0FBUyxDQUFDekYsU0FBVixDQUFvQjhCLFFBQXBCLENBQTZCLHNCQUE3QixDQUFKLEVBQTBEO0FBQ3REMkQsVUFBQUEsU0FBUyxDQUFDekYsU0FBVixDQUFvQkMsTUFBcEIsQ0FBMkIsc0JBQTNCO0FBQ0F3RixVQUFBQSxTQUFTLENBQUN6RixTQUFWLENBQW9CSyxHQUFwQixDQUF3QixrQkFBeEI7QUFDSCxTQUhELE1BR08sSUFBSW9GLFNBQVMsQ0FBQ3pGLFNBQVYsQ0FBb0I4QixRQUFwQixDQUE2QixrQkFBN0IsQ0FBSixFQUFzRDtBQUN6RDJELFVBQUFBLFNBQVMsQ0FBQ3pGLFNBQVYsQ0FBb0JDLE1BQXBCLENBQTJCLGtCQUEzQjtBQUNBd0YsVUFBQUEsU0FBUyxDQUFDekYsU0FBVixDQUFvQkssR0FBcEIsQ0FBd0IsbUJBQXhCO0FBQ0gsU0FITSxNQUdBLElBQUlvRixTQUFTLENBQUN6RixTQUFWLENBQW9COEIsUUFBcEIsQ0FBNkIsbUJBQTdCLENBQUosRUFBdUQ7QUFDMUQyRCxVQUFBQSxTQUFTLENBQUN6RixTQUFWLENBQW9CQyxNQUFwQixDQUEyQixtQkFBM0I7QUFDQXdGLFVBQUFBLFNBQVMsQ0FBQ3pGLFNBQVYsQ0FBb0JLLEdBQXBCLENBQXdCLGtCQUF4QjtBQUNIO0FBQ0o7O0FBQUE7QUFFRCxTQUFHOEUsT0FBSCxDQUFXQyxJQUFYLENBQWdCeEIsT0FBaEIsRUFBeUIsVUFBVUssTUFBVixFQUFrQkUsS0FBbEIsRUFBeUI7QUFDOUNGLFFBQUFBLE1BQU0sQ0FBQ3JGLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQVk7QUFDekM0RixVQUFBQSxVQUFVLENBQUNMLEtBQUQsQ0FBVjtBQUNILFNBRkQ7QUFHSCxPQUpEO0FBS0g7O0FBQUEsTUFFRDs7QUFDQSxhQUFTVixlQUFULEdBQTJCO0FBQ3ZCLFVBQUkrQixTQUFTLEdBQUc5RyxTQUFTLENBQUNELGdCQUFWLENBQTJCLGVBQTNCLENBQWhCOztBQUR1QixrREFFTCtHLFNBRks7QUFBQTs7QUFBQTtBQUV2QiwrREFBNkI7QUFBQSxjQUFwQkUsS0FBb0I7QUFDekJBLFVBQUFBLEtBQUssQ0FBQzFGLFNBQU4sR0FBa0IsRUFBbEI7QUFDQTBGLFVBQUFBLEtBQUssQ0FBQzFGLFNBQU4sQ0FBZ0JLLEdBQWhCLENBQW9CLGNBQXBCO0FBQ0FxRixVQUFBQSxLQUFLLENBQUMxRixTQUFOLENBQWdCSyxHQUFoQixDQUFvQixzQkFBcEI7QUFDSDtBQU5zQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTzFCLE1BRUQ7OztBQUNBLGFBQVNYLFVBQVQsQ0FBb0JKLEdBQXBCLEVBQXlCO0FBQ3JCLFVBQUlxRyxNQUFNLEdBQUcsRUFBYjs7QUFEcUIsbURBRUpyRyxHQUZJO0FBQUE7O0FBQUE7QUFFckIsa0VBQXNCO0FBQUEsY0FBYmEsSUFBYTtBQUNsQixjQUFJcUMsU0FBUyxHQUFHckMsSUFBSSxDQUFDZ0IsTUFBTCxDQUFZQyxLQUE1Qjs7QUFDQSxjQUFJLENBQUN1RSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JwRCxTQUFoQixDQUFMLEVBQWlDO0FBQzdCbUQsWUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlyRCxTQUFaO0FBQ0g7QUFDSjtBQVBvQjtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVFyQixVQUFJc0QsTUFBTSxHQUFHcEgsU0FBUyxDQUFDMkMsYUFBVixDQUF3QixpQkFBeEIsQ0FBYjs7QUFDQSxpQ0FBa0JzRSxNQUFsQiw2QkFBMEI7QUFBckIsWUFBSXZFLEtBQUssY0FBVDtBQUNELFlBQUkyRSxTQUFTLEdBQUd2SCxRQUFRLENBQUM0QixhQUFULENBQXVCLFFBQXZCLENBQWhCO0FBQ0EyRixRQUFBQSxTQUFTLENBQUNoRyxTQUFWLEdBQXNCcUIsS0FBdEI7QUFDQTBFLFFBQUFBLE1BQU0sQ0FBQ3JGLE1BQVAsQ0FBY3NGLFNBQWQ7QUFDSDs7QUFDREQsTUFBQUEsTUFBTSxDQUFDbEgsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NvSCxZQUFsQztBQUNILE1BRUQ7OztBQUNBLGFBQVNBLFlBQVQsQ0FBc0JyRSxLQUF0QixFQUE2QjtBQUN6QixVQUFJc0UsU0FBUyxHQUFHdEUsS0FBSyxDQUFDeUIsTUFBTixDQUFhOEMsS0FBN0I7QUFDQSxVQUFJekUsSUFBSSxHQUFHL0MsU0FBUyxDQUFDRCxnQkFBVixDQUEyQixxQkFBM0IsQ0FBWDs7QUFGeUIsbURBR1RnRCxJQUhTO0FBQUE7O0FBQUE7QUFHekIsa0VBQXNCO0FBQUEsY0FBYjNCLEdBQWE7QUFDbEJBLFVBQUFBLEdBQUcsQ0FBQ3FHLEtBQUosQ0FBVUMsT0FBVixHQUFvQixXQUFwQjs7QUFDQSxjQUFJdEcsR0FBRyxDQUFDdUIsYUFBSixDQUFrQixRQUFsQixFQUE0QmQsV0FBNUIsS0FBNEMwRixTQUFoRCxFQUEyRDtBQUN2RG5HLFlBQUFBLEdBQUcsQ0FBQ3FHLEtBQUosQ0FBVUMsT0FBVixHQUFvQixNQUFwQjtBQUNIOztBQUFBO0FBQ0o7QUFSd0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVM1QixNQUVEOzs7QUFDQSxhQUFTMUMsV0FBVCxHQUF1QjtBQUNuQixVQUFJb0MsTUFBTSxHQUFHcEgsU0FBUyxDQUFDMkMsYUFBVixDQUF3QixpQkFBeEIsQ0FBYjtBQUNBeUUsTUFBQUEsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVTyxRQUFWLEdBQXFCLElBQXJCO0FBQ0gsTUFFRDs7O0FBQ0EsYUFBUzdFLFdBQVQsR0FBdUI7QUFDbkIsVUFBSThFLE1BQU0sR0FBRzVILFNBQVMsQ0FBQzJDLGFBQVYsQ0FBd0IsaUJBQXhCLENBQWI7QUFDQWlGLE1BQUFBLE1BQU0sQ0FBQ0osS0FBUCxHQUFlLEVBQWY7QUFDQUksTUFBQUEsTUFBTSxDQUFDMUgsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMySCxXQUFqQztBQUVILE1BRUQ7OztBQUNBLGFBQVNBLFdBQVQsR0FBdUI7QUFDbkIsVUFBSUMsTUFBTSxHQUFHOUgsU0FBUyxDQUFDMkMsYUFBVixDQUF3QixpQkFBeEIsQ0FBYjtBQUNBLFVBQUlvRixTQUFTLEdBQUcsSUFBSUMsTUFBSixDQUFXRixNQUFNLENBQUNOLEtBQWxCLEVBQXlCLEdBQXpCLENBQWhCO0FBQ0EsVUFBSVMsSUFBSSxHQUFHLEtBQVg7QUFDQSxVQUFJbEYsSUFBSSxHQUFHL0MsU0FBUyxDQUFDRCxnQkFBVixDQUEyQixxQkFBM0IsQ0FBWDs7QUFDQSxXQUFLLElBQUlzRSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdEIsSUFBSSxDQUFDb0IsTUFBekIsRUFBaUNFLENBQUMsRUFBbEMsRUFBc0M7QUFDbEM0RCxRQUFBQSxJQUFJLEdBQUcsS0FBUDs7QUFDQSxhQUFLLElBQUlDLENBQUMsR0FBR25GLElBQUksQ0FBQ3NCLENBQUQsQ0FBSixDQUFROEQsS0FBUixDQUFjaEUsTUFBZCxHQUF1QixDQUFwQyxFQUF1QytELENBQUMsSUFBSSxDQUE1QyxFQUErQ0EsQ0FBQyxFQUFoRCxFQUFvRDtBQUNoREQsVUFBQUEsSUFBSSxHQUFHRixTQUFTLENBQUNLLElBQVYsQ0FBZXJGLElBQUksQ0FBQ3NCLENBQUQsQ0FBSixDQUFROEQsS0FBUixDQUFjRCxDQUFkLEVBQWlCN0csU0FBaEMsQ0FBUDtBQUNBLGNBQUk0RyxJQUFKLEVBQVU7QUFDYjs7QUFDRCxZQUFJQSxJQUFKLEVBQVU7QUFDTmxGLFVBQUFBLElBQUksQ0FBQ3NCLENBQUQsQ0FBSixDQUFRb0QsS0FBUixDQUFjQyxPQUFkLEdBQXdCLFdBQXhCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gzRSxVQUFBQSxJQUFJLENBQUNzQixDQUFELENBQUosQ0FBUW9ELEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixNQUF4QjtBQUNIO0FBQ0o7QUFDSjs7O0FBcFVMLHNEQUFrQztBQUFBO0FBcVVqQyIsInNvdXJjZXMiOlsid2VicGFjazovL2l0cmV4LXRhc2stdGFibGUvLi9zcmMvc3R5bGVzL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vaXRyZXgtdGFzay10YWJsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pdHJleC10YXNrLXRhYmxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaXRyZXgtdGFzay10YWJsZS8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvYXBwLmNzcyc7XG5cbi8vIE1ha2luZyBhbGwgZnVuY3Rpb25hbCBpbmRlcGVuZGVudC4gSnVzdCBhIFwiY29udGFpbmVyXCIgd3JhcHBlciBpcyBuZWVkZWQgZm9yIGVhY2ggdGFibGUgdG8gd29yayBzZXBhcmF0ZWx5LlxubGV0IGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbnRhaW5lclwiKTtcbmZvciAobGV0IGNvbnRhaW5lciBvZiBjb250YWluZXJzKSB7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZ2V0VXNlcnMpO1xuXG4gICAgLy8gR2V0dGluZyBkYXRhIGZyb20gdGhlIEFQSS5cbiAgICBmdW5jdGlvbiBnZXRVc2VycygpIHtcbiAgICAgICAgbGV0IHVybCA9ICdodHRwczovL2l0cmV4LXJlYWN0LWxhYi1maWxlcy5zMy5ldS1jZW50cmFsLTEuYW1hem9uYXdzLmNvbS9yZWFjdC10ZXN0LWFwaS5qc29uJztcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKG1haW5GdW5jKVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBhbGVydCgnRmFpbGVkIHRvIGxvYWQgZGF0YS4nKSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiBmdW5jdGlvbiB0aGF0IHByb2Nlc3NlcyB0aGUgYXBpLWRhdGEgYW5kIGRlbGVnYXRlcyBpdCB0byBvdGhlciBmdW5jdGlvbnMuXG4gICAgZnVuY3Rpb24gbWFpbkZ1bmMoYXJyKSB7XG4gICAgICAgIGRyYXdMaXN0KGFyciwgMCwgMjApO1xuICAgICAgICBjaGVja0FjdGl2ZShhcnIpO1xuICAgICAgICBhZGRQYWdpbmF0aW9uKGFyciwgMjApO1xuICAgICAgICBmaWxsU2VsZWN0KGFycik7XG4gICAgfVxuXG4gICAgLy8gVGFibGUgY3JlYXRpb24uXG4gICAgZnVuY3Rpb24gZHJhd0xpc3QoYXJyLCBmcm9tLCB0bykge1xuICAgICAgICBsZXQgYWxsUm93cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX19yb3dcIik7XG4gICAgICAgIGZvciAobGV0IHJvdyBvZiBhbGxSb3dzKSB7XG4gICAgICAgICAgICByb3cuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QucmVtb3ZlKFwidGFibGVfX3Jvd192aXNpYmxlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IHVzZXIgb2YgYXJyLnNsaWNlKGZyb20sIHRvKSkge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3Jvd1wiKTtcbiAgICAgICAgICAgIHJvdy5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3Jvd192aXNpYmxlXCIpO1xuICAgICAgICAgICAgbGV0IHRkSWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICB0ZElkLmNsYXNzTGlzdC5hZGQoXCJpZFwiKTtcbiAgICAgICAgICAgIHRkSWQudGV4dENvbnRlbnQgPSB1c2VyLmlkO1xuICAgICAgICAgICAgcm93LmFwcGVuZCh0ZElkKTtcbiAgICAgICAgICAgIGxldCB0ZEZpcnN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIHRkRmlyc3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuICAgICAgICAgICAgdGRGaXJzdE5hbWUudGV4dENvbnRlbnQgPSB1c2VyLmZpcnN0TmFtZTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmQodGRGaXJzdE5hbWUpO1xuICAgICAgICAgICAgbGV0IHRkTGFzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICB0ZExhc3ROYW1lLnRleHRDb250ZW50ID0gdXNlci5sYXN0TmFtZTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmQodGRMYXN0TmFtZSk7XG4gICAgICAgICAgICBsZXQgdGRFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgICAgICAgICAgIHRkRW1haWwudGV4dENvbnRlbnQgPSB1c2VyLmVtYWlsO1xuICAgICAgICAgICAgcm93LmFwcGVuZCh0ZEVtYWlsKTtcbiAgICAgICAgICAgIGxldCB0ZFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICAgICAgICAgICAgdGRQaG9uZS50ZXh0Q29udGVudCA9IHVzZXIucGhvbmU7XG4gICAgICAgICAgICByb3cuYXBwZW5kKHRkUGhvbmUpO1xuICAgICAgICAgICAgbGV0IHRkU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gICAgICAgICAgICB0ZFN0YXRlLmNsYXNzTGlzdC5hZGQoXCJzdGF0ZVwiKTtcbiAgICAgICAgICAgIHRkU3RhdGUudGV4dENvbnRlbnQgPSB1c2VyLmFkcmVzcy5zdGF0ZTtcbiAgICAgICAgICAgIHJvdy5hcHBlbmQodGRTdGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRhYmxlX19ib2R5XCIpLmFwcGVuZChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIGFkZFJvd3NMaXN0ZW5lcnMoYXJyKTtcbiAgICAgICAgc29ydEZ1bmMoKTtcbiAgICAgICAgY2xlYXJTZWFyY2goKTtcbiAgICB9XG5cbiAgICAvLyBBZGRpbmcgZXZlbnQgbGlzdGVuZXJzIHRvIHJvd3MgaGVyZS5cbiAgICBmdW5jdGlvbiBhZGRSb3dzTGlzdGVuZXJzKGFycikge1xuICAgICAgICBsZXQgcm93cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX19yb3dcIik7XG4gICAgICAgIHJvd3NbMF0uY2xhc3NMaXN0LmFkZChcInRhYmxlX19yb3dfc2VsZWN0ZWRcIik7XG4gICAgICAgIGZvciAobGV0IHJvdyBvZiByb3dzKSB7XG4gICAgICAgICAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVJvd0NsaWNrKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBSb3ctY2xpY2sgaGFuZGxlci5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUm93Q2xpY2soZXZlbnQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyBvZiByb3dzKSB7XG4gICAgICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJsZV9fcm93X3NlbGVjdGVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuYWRkKFwidGFibGVfX3Jvd19zZWxlY3RlZFwiKTtcbiAgICAgICAgICAgIGNoZWNrQWN0aXZlKGFycik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcm9jZXNzaW5nIHJvd3Mgc2VsZWN0aW9uOiBkcmF3aW5nIGluZm8tYmxvY2sgZm9yIGEgc2VsZWN0ZWQgdXNlci5cbiAgICBmdW5jdGlvbiBjaGVja0FjdGl2ZShhcnIpIHtcbiAgICAgICAgbGV0IHJvd3MgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZV9fcm93XCIpO1xuICAgICAgICBsZXQgYWN0aXZlUm93O1xuICAgICAgICBmb3IgKGxldCByb3cgb2Ygcm93cykge1xuICAgICAgICAgICAgcm93LmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlX19yb3dfc2VsZWN0ZWRcIikgPyBhY3RpdmVSb3cgPSByb3cgOiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaWQgPSBhY3RpdmVSb3cucXVlcnlTZWxlY3RvcihcIi5pZFwiKS50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IG5hbWUgPSBhY3RpdmVSb3cucXVlcnlTZWxlY3RvcihcIi5uYW1lXCIpLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgaW5mb0Jsb2NrID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaW5mby1ibG9ja1wiKTtcbiAgICAgICAgaW5mb0Jsb2NrLmlubmVySFRNTCA9IFwiPGRpdj48Yj5Qcm9maWxlIGluZm86PC9iPjwvZGl2PlwiO1xuICAgICAgICBmb3IgKGxldCB1c2VyIG9mIGFycikge1xuICAgICAgICAgICAgaWYgKGlkID09IHVzZXIuaWQgJiYgbmFtZSA9PSB1c2VyLmZpcnN0TmFtZSkge1xuICAgICAgICAgICAgICAgIGxldCB1c2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSBcIlNlbGVjdGVkIHByb2ZpbGU6IFwiICsgdXNlci5maXJzdE5hbWUgKyBcIiBcIiArIHVzZXIubGFzdE5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICB1c2VyRGVzYy50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiICsgdXNlci5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgICAgICBsZXQgdXNlckFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHVzZXJBZGRyZXNzLnRleHRDb250ZW50ID0gXCJBZGRyZXNzOiBcIiArIHVzZXIuYWRyZXNzLnN0cmVldEFkZHJlc3M7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJDaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICB1c2VyQ2l0eS50ZXh0Q29udGVudCA9IFwiQ2l0eTogXCIgKyB1c2VyLmFkcmVzcy5jaXR5O1xuICAgICAgICAgICAgICAgIGxldCB1c2VyU3RhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHVzZXJTdGF0ZS50ZXh0Q29udGVudCA9IFwiU3RhdGU6IFwiICsgdXNlci5hZHJlc3Muc3RhdGU7XG4gICAgICAgICAgICAgICAgbGV0IHVzZXJaaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHVzZXJaaXAudGV4dENvbnRlbnQgPSBcIkluZGV4OiBcIiArIHVzZXIuYWRyZXNzLnppcDtcblxuICAgICAgICAgICAgICAgIGluZm9CbG9jay5hcHBlbmQodXNlck5hbWUpO1xuICAgICAgICAgICAgICAgIGluZm9CbG9jay5hcHBlbmQodXNlckRlc2MpO1xuICAgICAgICAgICAgICAgIGluZm9CbG9jay5hcHBlbmQodXNlckFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIGluZm9CbG9jay5hcHBlbmQodXNlckNpdHkpO1xuICAgICAgICAgICAgICAgIGluZm9CbG9jay5hcHBlbmQodXNlclN0YXRlKTtcbiAgICAgICAgICAgICAgICBpbmZvQmxvY2suYXBwZW5kKHVzZXJaaXApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gRmlsbGluZyB0aGUgcGFnaW5hdGlvbiBibG9jayBpbiBhY2NvcmRhbmNlIHdpdGggdGhlIHJlY2VpdmVkIGZyb20gdGhlIEFQSSBkYXRhLlxuICAgIGZ1bmN0aW9uIGFkZFBhZ2luYXRpb24oYXJyLCBudW0pIHtcbiAgICAgICAgbGV0IG51bWJlck9mUGFnZXMgPSBhcnIubGVuZ3RoIC8gbnVtO1xuICAgICAgICBsZXQgbmV4dEJ1dHRvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBhZ2luYXRpb25fX25leHRCdXR0b25cIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZQYWdlczsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgICAgICBudW1iZXIuY2xhc3NMaXN0LmFkZChcInBhZ2luYXRpb25fX3BhZ2VOdW1cIik7XG4gICAgICAgICAgICBpZiAoaSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyLmNsYXNzTGlzdC5hZGQoXCJwYWdpbmF0aW9uX19wYWdlTnVtX2FjdGl2ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG51bWJlci50ZXh0Q29udGVudCA9IGkgKyAxO1xuICAgICAgICAgICAgbmV4dEJ1dHRvbi5iZWZvcmUobnVtYmVyKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGFnaW5hdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnBhZ2luYXRpb25cIik7XG4gICAgICAgIHBhZ2luYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVBhZ2lDbGljayk7XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVBhZ2lDbGljayhldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWdpbmF0aW9uX19wYWdlTnVtXCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBhZ2VOdW0gPSArZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgIGRyYXdMaXN0KGFyciwgKHBhZ2VOdW0gLSAxKSAqIG51bSwgKChwYWdlTnVtIC0gMSkgKiBudW0gKyBudW0pKTtcbiAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIucGFnaW5hdGlvbl9fcGFnZU51bV9hY3RpdmVcIikuY2xhc3NMaXN0LnJlbW92ZShcInBhZ2luYXRpb25fX3BhZ2VOdW1fYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKFwicGFnaW5hdGlvbl9fcGFnZU51bV9hY3RpdmVcIik7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwYWdpbmF0aW9uX19wcmV2QnV0dG9uXCIpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIucGFnaW5hdGlvbl9fcGFnZU51bV9hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnQucHJldmlvdXNFbGVtZW50U2libGluZyA9PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBwYWdlTnVtID0gK2N1cnJlbnQudGV4dENvbnRlbnQgLSAxO1xuICAgICAgICAgICAgICAgIGRyYXdMaXN0KGFyciwgKHBhZ2VOdW0gLSAxKSAqIG51bSwgKChwYWdlTnVtIC0gMSkgKiBudW0gKyBudW0pKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwYWdpbmF0aW9uX19wYWdlTnVtX2FjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcInBhZ2luYXRpb25fX3BhZ2VOdW1fYWN0aXZlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGFnaW5hdGlvbl9fbmV4dEJ1dHRvblwiKSkge1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gZXZlbnQuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2luYXRpb25fX3BhZ2VOdW1fYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50Lm5leHRFbGVtZW50U2libGluZyA9PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBwYWdlTnVtID0gK2N1cnJlbnQudGV4dENvbnRlbnQgKyAxO1xuICAgICAgICAgICAgICAgIGRyYXdMaXN0KGFyciwgKHBhZ2VOdW0gLSAxKSAqIG51bSwgKChwYWdlTnVtIC0gMSkgKiBudW0gKyBudW0pKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwYWdpbmF0aW9uX19wYWdlTnVtX2FjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwicGFnaW5hdGlvbl9fcGFnZU51bV9hY3RpdmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcnJvd3NUb0RlZmF1bHQoKTtcbiAgICAgICAgICAgIHNvcnRGdW5jKCk7XG4gICAgICAgICAgICBjbGVhclNlbGVjdCgpO1xuICAgICAgICAgICAgY2xlYXJTZWFyY2goKTtcbiAgICAgICAgfVxuICAgICAgICBhZGRSb3dzTGlzdGVuZXJzKGFycik7XG4gICAgfVxuXG4gICAgLy8gU29ydGluZyBjb2x1bW5zIGZ1bmN0aW9uYWwgaW1wbGVtZW50YXRpb24uXG4gICAgZnVuY3Rpb24gc29ydEZ1bmMoKSB7XG4gICAgICAgIGxldCB0YWJsZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGFibGUnKTtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0aCcpO1xuICAgICAgICBsZXQgdGFibGVCb2R5ID0gdGFibGUucXVlcnlTZWxlY3RvcigndGJvZHknKTtcbiAgICAgICAgbGV0IHJvd3MgPSB0YWJsZUJvZHkucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX19yb3dfdmlzaWJsZScpO1xuXG4gICAgICAgIC8vIFNvcnQgZGlyZWN0aW9uLlxuICAgICAgICBsZXQgZGlyZWN0aW9ucyA9IEFycmF5LmZyb20oaGVhZGVycykubWFwKGZ1bmN0aW9uIChoZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ2hhbmdpbmcgdGQgY29udGVudHMgaW4gdGhlIGFwcHJvcHRpYXRlIGNvbHVtbi5cbiAgICAgICAgbGV0IHRyYW5zZm9ybSA9IGZ1bmN0aW9uIChpbmRleCwgY29udGVudCkge1xuICAgICAgICAgICAgLy8gR2V0dGluZyB0aGUgZGF0YS10eXBlIG9mIHRoZSBjb2x1bW4uXG4gICAgICAgICAgICBsZXQgdHlwZSA9IGhlYWRlcnNbaW5kZXhdLmdldEF0dHJpYnV0ZSgnZGF0YS10eXBlJyk7XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChjb250ZW50KTtcbiAgICAgICAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHNvcnRDb2x1bW4oaW5kZXgpIHtcblxuICAgICAgICAgICAgLy8gR2V0IHRoZSBjdXJyZW50IGRpcmV0aW9uLlxuICAgICAgICAgICAgbGV0IGRpcmVjdGlvbiA9IGRpcmVjdGlvbnNbaW5kZXhdIHx8ICdhc2MnO1xuXG4gICAgICAgICAgICAvLyBEaXJlY3Rpb24uXG4gICAgICAgICAgICBsZXQgbXVsdGlwbGllciA9IChkaXJlY3Rpb24gPT09ICdhc2MnKSA/IDEgOiAtMTtcbiAgICAgICAgICAgIGxldCByb3dzID0gdGFibGVCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWJsZV9fcm93X3Zpc2libGUnKTtcbiAgICAgICAgICAgIGxldCBuZXdSb3dzID0gQXJyYXkuZnJvbShyb3dzKTtcbiAgICAgICAgICAgIG5ld1Jvd3Muc29ydChmdW5jdGlvbiAocm93QSwgcm93Qikge1xuXG4gICAgICAgICAgICAgICAgbGV0IGNlbGxBID0gcm93QS5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpW2luZGV4XS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGxCID0gcm93Qi5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpW2luZGV4XS5pbm5lckhUTUw7XG5cbiAgICAgICAgICAgICAgICBsZXQgYSA9IHRyYW5zZm9ybShpbmRleCwgY2VsbEEpO1xuICAgICAgICAgICAgICAgIGxldCBiID0gdHJhbnNmb3JtKGluZGV4LCBjZWxsQik7XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBhID4gYjogcmV0dXJuIDEgKiBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGEgPCBiOiByZXR1cm4gLTEgKiBtdWx0aXBsaWVyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIGEgPT09IGI6IHJldHVybiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBEZWxldGUgb2xkIHJvd3MuXG4gICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwocm93cywgZnVuY3Rpb24gKHJvdykge1xuICAgICAgICAgICAgICAgIHRhYmxlQm9keS5yZW1vdmVDaGlsZChyb3cpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIENoYW5nZSB0aGUgZGlyZWN0aW9uLlxuICAgICAgICAgICAgZGlyZWN0aW9uc1tpbmRleF0gPSBkaXJlY3Rpb24gPT09ICdhc2MnID8gJ2Rlc2MnIDogJ2FzYyc7XG5cbiAgICAgICAgICAgIC8vIEFkZCBuZXcgcm93cy5cbiAgICAgICAgICAgIG5ld1Jvd3MuZm9yRWFjaChmdW5jdGlvbiAobmV3Um93KSB7XG4gICAgICAgICAgICAgICAgdGFibGVCb2R5LmFwcGVuZENoaWxkKG5ld1Jvdyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IGFsbEFycm93cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX19hcnJvd1wiKTtcbiAgICAgICAgICAgIGxldCBjdXJyQXJyb3cgPSBldmVudC5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCIudGFibGVfX2Fycm93XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgYXJyb3cgb2YgYWxsQXJyb3dzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycm93ICE9PSBjdXJyQXJyb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuY2xhc3NMaXN0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlX19hcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlX19hcnJvd19kZWZhdWx0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjdXJyQXJyb3cuY2xhc3NMaXN0LmNvbnRhaW5zKFwidGFibGVfX2Fycm93X2RlZmF1bHRcIikpIHtcbiAgICAgICAgICAgICAgICBjdXJyQXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcInRhYmxlX19hcnJvd19kZWZhdWx0XCIpO1xuICAgICAgICAgICAgICAgIGN1cnJBcnJvdy5jbGFzc0xpc3QuYWRkKFwidGFibGVfX2Fycm93X2FzY1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckFycm93LmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlX19hcnJvd19hc2NcIikpIHtcbiAgICAgICAgICAgICAgICBjdXJyQXJyb3cuY2xhc3NMaXN0LnJlbW92ZShcInRhYmxlX19hcnJvd19hc2NcIik7XG4gICAgICAgICAgICAgICAgY3VyckFycm93LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fYXJyb3dfZGVzY1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY3VyckFycm93LmNsYXNzTGlzdC5jb250YWlucyhcInRhYmxlX19hcnJvd19kZXNjXCIpKSB7XG4gICAgICAgICAgICAgICAgY3VyckFycm93LmNsYXNzTGlzdC5yZW1vdmUoXCJ0YWJsZV9fYXJyb3dfZGVzY1wiKTtcbiAgICAgICAgICAgICAgICBjdXJyQXJyb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlX19hcnJvd19hc2NcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGhlYWRlcnMsIGZ1bmN0aW9uIChoZWFkZXIsIGluZGV4KSB7XG4gICAgICAgICAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc29ydENvbHVtbihpbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIFNldHRpbmcgYWxsIHRoZSBkaXJlY3Rpb24gaW5kaWF0b3JzIHRvIHRoZSBkZWZhdWx0IHBvc2l0aW9uLlxuICAgIGZ1bmN0aW9uIGFycm93c1RvRGVmYXVsdCgpIHtcbiAgICAgICAgbGV0IGFsbEFycm93cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlX19hcnJvd1wiKTtcbiAgICAgICAgZm9yIChsZXQgYXJyb3cgb2YgYWxsQXJyb3dzKSB7XG4gICAgICAgICAgICBhcnJvdy5jbGFzc0xpc3QgPSBcIlwiO1xuICAgICAgICAgICAgYXJyb3cuY2xhc3NMaXN0LmFkZChcInRhYmxlX19hcnJvd1wiKTtcbiAgICAgICAgICAgIGFycm93LmNsYXNzTGlzdC5hZGQoXCJ0YWJsZV9fYXJyb3dfZGVmYXVsdFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZpbGxpbmcgdGhlIHNlbGVjdCBmaWx0ZXIgaW4gYWNjb3JkYW5jZSB3aXRoIHRoZSByZWNlaXZlZCBmcm9tIHRoZSBBUEkgZGF0YS5cbiAgICBmdW5jdGlvbiBmaWxsU2VsZWN0KGFycikge1xuICAgICAgICBsZXQgc3RhdGVzID0gW107XG4gICAgICAgIGZvciAobGV0IHVzZXIgb2YgYXJyKSB7XG4gICAgICAgICAgICBsZXQgdXNlclN0YXRlID0gdXNlci5hZHJlc3Muc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlcy5pbmNsdWRlcyh1c2VyU3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVzLnB1c2godXNlclN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgc2VsZWN0ID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19zZWxlY3RcIik7XG4gICAgICAgIGZvciAobGV0IHN0YXRlIG9mIHN0YXRlcykge1xuICAgICAgICAgICAgbGV0IG5ld09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBuZXdPcHRpb24uaW5uZXJIVE1MID0gc3RhdGU7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kKG5ld09wdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgaGFuZGxlU2VsZWN0KTtcbiAgICB9XG5cbiAgICAvLyBQcm9jZXNzaW5nIHNlbGVjdCBjaGFuZ2UgaGVyZS5cbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3QoZXZlbnQpIHtcbiAgICAgICAgbGV0IGN1cnJTdGF0ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgbGV0IHJvd3MgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnRhYmxlX19yb3dfdmlzaWJsZScpO1xuICAgICAgICBmb3IgKGxldCByb3cgb2Ygcm93cykge1xuICAgICAgICAgICAgcm93LnN0eWxlLmRpc3BsYXkgPSBcInRhYmxlLXJvd1wiO1xuICAgICAgICAgICAgaWYgKHJvdy5xdWVyeVNlbGVjdG9yKFwiLnN0YXRlXCIpLnRleHRDb250ZW50ICE9PSBjdXJyU3RhdGUpIHtcbiAgICAgICAgICAgICAgICByb3cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlZnJlc2hpbmcgc2VsZWN0IGZpbHRlci5cbiAgICBmdW5jdGlvbiBjbGVhclNlbGVjdCgpIHtcbiAgICAgICAgbGV0IHNlbGVjdCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fc2VsZWN0XCIpO1xuICAgICAgICBzZWxlY3RbMF0uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIFJlZnJlc2hpbmcgc2VhcmNoIGZpbHRlci5cbiAgICBmdW5jdGlvbiBjbGVhclNlYXJjaCgpIHtcbiAgICAgICAgbGV0IHNlYXJjaCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fc2VhcmNoXCIpO1xuICAgICAgICBzZWFyY2gudmFsdWUgPSBcIlwiO1xuICAgICAgICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRhYmxlU2VhcmNoKTtcblxuICAgIH1cblxuICAgIC8vIFNlYXJjaCBmdW5jdGlvbiBpbXBsZW1lbnRhdGlvbi5cbiAgICBmdW5jdGlvbiB0YWJsZVNlYXJjaCgpIHtcbiAgICAgICAgdmFyIHBocmFzZSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyX19zZWFyY2gnKTtcbiAgICAgICAgdmFyIHJlZ1BocmFzZSA9IG5ldyBSZWdFeHAocGhyYXNlLnZhbHVlLCAnaScpO1xuICAgICAgICB2YXIgZmxhZyA9IGZhbHNlO1xuICAgICAgICBsZXQgcm93cyA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcudGFibGVfX3Jvd192aXNpYmxlJyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcm93cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IHJvd3NbaV0uY2VsbHMubGVuZ3RoIC0gMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgICAgICBmbGFnID0gcmVnUGhyYXNlLnRlc3Qocm93c1tpXS5jZWxsc1tqXS5pbm5lckhUTUwpO1xuICAgICAgICAgICAgICAgIGlmIChmbGFnKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmbGFnKSB7XG4gICAgICAgICAgICAgICAgcm93c1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJ0YWJsZS1yb3dcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm93c1tpXS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsiY29udGFpbmVycyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImNvbnRhaW5lciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRVc2VycyIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3AiLCJqc29uIiwibWFpbkZ1bmMiLCJlcnIiLCJhbGVydCIsImFyciIsImRyYXdMaXN0IiwiY2hlY2tBY3RpdmUiLCJhZGRQYWdpbmF0aW9uIiwiZmlsbFNlbGVjdCIsImZyb20iLCJ0byIsImFsbFJvd3MiLCJyb3ciLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzbGljZSIsInVzZXIiLCJjcmVhdGVFbGVtZW50IiwiYWRkIiwidGRJZCIsInRleHRDb250ZW50IiwiaWQiLCJhcHBlbmQiLCJ0ZEZpcnN0TmFtZSIsImZpcnN0TmFtZSIsInRkTGFzdE5hbWUiLCJsYXN0TmFtZSIsInRkRW1haWwiLCJlbWFpbCIsInRkUGhvbmUiLCJwaG9uZSIsInRkU3RhdGUiLCJhZHJlc3MiLCJzdGF0ZSIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRSb3dzTGlzdGVuZXJzIiwic29ydEZ1bmMiLCJjbGVhclNlYXJjaCIsInJvd3MiLCJoYW5kbGVSb3dDbGljayIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImFjdGl2ZVJvdyIsImNvbnRhaW5zIiwibmFtZSIsImluZm9CbG9jayIsInVzZXJOYW1lIiwidXNlckRlc2MiLCJkZXNjcmlwdGlvbiIsInVzZXJBZGRyZXNzIiwic3RyZWV0QWRkcmVzcyIsInVzZXJDaXR5IiwiY2l0eSIsInVzZXJTdGF0ZSIsInVzZXJaaXAiLCJ6aXAiLCJudW0iLCJudW1iZXJPZlBhZ2VzIiwibGVuZ3RoIiwibmV4dEJ1dHRvbiIsImkiLCJudW1iZXIiLCJiZWZvcmUiLCJwYWdpbmF0aW9uIiwiaGFuZGxlUGFnaUNsaWNrIiwidGFyZ2V0IiwicGFnZU51bSIsImN1cnJlbnQiLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYXJyb3dzVG9EZWZhdWx0IiwiY2xlYXJTZWxlY3QiLCJ0YWJsZSIsImhlYWRlcnMiLCJ0YWJsZUJvZHkiLCJkaXJlY3Rpb25zIiwiQXJyYXkiLCJtYXAiLCJoZWFkZXIiLCJ0cmFuc2Zvcm0iLCJpbmRleCIsImNvbnRlbnQiLCJ0eXBlIiwiZ2V0QXR0cmlidXRlIiwicGFyc2VGbG9hdCIsInNvcnRDb2x1bW4iLCJkaXJlY3Rpb24iLCJtdWx0aXBsaWVyIiwibmV3Um93cyIsInNvcnQiLCJyb3dBIiwicm93QiIsImNlbGxBIiwiY2VsbEIiLCJhIiwiYiIsImZvckVhY2giLCJjYWxsIiwicmVtb3ZlQ2hpbGQiLCJuZXdSb3ciLCJhcHBlbmRDaGlsZCIsImFsbEFycm93cyIsImN1cnJBcnJvdyIsImFycm93Iiwic3RhdGVzIiwiaW5jbHVkZXMiLCJwdXNoIiwic2VsZWN0IiwibmV3T3B0aW9uIiwiaGFuZGxlU2VsZWN0IiwiY3VyclN0YXRlIiwidmFsdWUiLCJzdHlsZSIsImRpc3BsYXkiLCJzZWxlY3RlZCIsInNlYXJjaCIsInRhYmxlU2VhcmNoIiwicGhyYXNlIiwicmVnUGhyYXNlIiwiUmVnRXhwIiwiZmxhZyIsImoiLCJjZWxscyIsInRlc3QiXSwic291cmNlUm9vdCI6IiJ9