import './styles/app.scss';

window.addEventListener("DOMContentLoaded", getUsers);

function getUsers() {
    let url = 'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json';
    return fetch(url)
    .then((resp) => resp.json())
    .then(mainFunc)
}

function mainFunc(arr) {
    let containers = document.querySelectorAll(".container");
        drawList(arr, 0, 20);
        checkActive(arr);
        addPagination(arr, 20);
        fillSelect(arr);
}

function drawList(arr, from, to) {
    let allRows = document.querySelectorAll(".table__row");
    for(let row of allRows) {
        row.innerHTML = "";
        row.classList.remove("table__row_visible");
    }
    for(let user of arr.slice(from,to)) {
        let row = document.createElement("tr");
        row.classList.add("table__row");
        row.classList.add("table__row_visible");
        let tdId = document.createElement("td");
        tdId.classList.add("id");
        tdId.textContent = user.id;
        row.append(tdId);
        let tdFirstName = document.createElement("td");
        tdFirstName.classList.add("name");
        tdFirstName.textContent = user.firstName;
        row.append(tdFirstName);
        let tdLastName = document.createElement("td");
        tdLastName.textContent = user.lastName;
        row.append(tdLastName);
        let tdEmail = document.createElement("td");
        tdEmail.textContent = user.email;
        row.append(tdEmail);
        let tdPhone = document.createElement("td");
        tdPhone.textContent = user.phone;
        row.append(tdPhone);
        let tdState = document.createElement("td");
        tdState.classList.add("state");
        tdState.textContent = user.adress.state;
        row.append(tdState);
    
        document.querySelector(".table__body").append(row);
    }
    addRowsListeners(arr);
    sortFunc();
    clearSearch();
}

function addRowsListeners(arr) {
    let rows = document.querySelectorAll(".table__row");
    rows[0].classList.add("table__row_selected");
    for(let row of rows) {
        row.addEventListener("click", handleRowClick);
    }
    function handleRowClick(event) {
        for(let row of rows) {
            row.classList.remove("table__row_selected");
        }
        event.currentTarget.classList.add("table__row_selected");
        checkActive(arr);
    }
}


function checkActive(arr) {
    let rows = document.querySelectorAll(".table__row");
    let activeRow;
    for(let row of rows) {
        row.classList.contains("table__row_selected") ? activeRow = row : false;
    }
    let id = activeRow.querySelector(".id").textContent;
    let name = activeRow.querySelector(".name").textContent;
    let infoBlock = document.querySelector(".info-block");
    infoBlock.innerHTML = "<div>Profile info:</div>";
    for(let user of arr) {
        if(id == user.id && name == user.firstName) {
            let userName = document.createElement("div");
            userName.textContent = "Selected profile: " + user.firstName + " " + user.lastName;
            let userDesc = document.createElement("div");
            userDesc.textContent = "Description: " + user.desription;
            let userAddress = document.createElement("div");
            userAddress.textContent = "Address: " + user.adress.streetAddress;
            let userCity = document.createElement("div");
            userCity.textContent = "City: " + user.adress.city;
            let userState = document.createElement("div");
            userState.textContent = "State: " + user.adress.state;
            let userZip = document.createElement("div");
            userZip.textContent = "Index: " + user.adress.zip;

            infoBlock.append(userName);
            infoBlock.append(userDesc);
            infoBlock.append(userAddress);
            infoBlock.append(userCity);
            infoBlock.append(userState);
            infoBlock.append(userZip);
        }
    }
}

function addPagination(arr, num) {
    let numberOfPages = arr.length/num;
    let nextButton = document.querySelector(".pagination__nextButton");
    for(let i=0; i<numberOfPages; i++) {
        let number = document.createElement("a");
        number.classList.add("pagination__pageNum");
        if(i == 0) {
            number.classList.add("active");
        }
        number.textContent = i+1;
        nextButton.before(number);
    }
    let pagination = document.querySelector(".pagination");
    pagination.addEventListener("click", handlePagiClick);
    function handlePagiClick(event) {
        if(event.target.classList.contains("pagination__pageNum")) {
            let pageNum = +event.target.textContent;
            drawList(arr, (pageNum-1)*num, ((pageNum-1)*num + num));
            event.currentTarget.querySelector(".active").classList.remove("active");
            event.target.classList.add("active");
        } else if(event.target.classList.contains("pagination__prevButton")) {
            let current = event.currentTarget.querySelector(".active");
            if(current.previousElementSibling == event.target) {
                return
            }
            let pageNum = +current.textContent-1;
            drawList(arr, (pageNum-1)*num, ((pageNum-1)*num + num));
            current.classList.remove("active");
            current.previousElementSibling.classList.add("active");
        } else if(event.target.classList.contains("pagination__nextButton")) {
            let current = event.currentTarget.querySelector(".active");
            if(current.nextElementSibling == event.target) {
                return
            }
            let pageNum = +current.textContent+1;
            drawList(arr, (pageNum-1)*num, ((pageNum-1)*num + num));
            current.classList.remove("active");
            current.nextElementSibling.classList.add("active");
        }
        arrowsToDefault();
        sortFunc();
        clearSelect();
        clearSearch();
    }
    addRowsListeners(arr);
}

function sortFunc() {
    let table = document.querySelector('.table');
    let headers = table.querySelectorAll('th');
    let tableBody = table.querySelector('tbody');
    let rows = tableBody.querySelectorAll('.table__row_visible');

    // Направление сортировки
    let directions = Array.from(headers).map(function(header) {
        return '';
    });

    // Преобразовать содержимое данной ячейки в заданном столбце
    let transform = function(index, content) {
        // Получить тип данных столбца
        let type = headers[index].getAttribute('data-type');
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
        let direction = directions[index] || 'asc';
        
        // Фактор по направлению
        let multiplier = (direction === 'asc') ? 1 : -1;
        let rows = tableBody.querySelectorAll('.table__row_visible');
        let newRows = Array.from(rows);
        newRows.sort(function(rowA, rowB) {
            
            let cellA = rowA.querySelectorAll('td')[index].innerHTML;
            let cellB = rowB.querySelectorAll('td')[index].innerHTML;

            let a = transform(index, cellA);
            let b = transform(index, cellB);    

            switch (true) {
                case a > b: return 1 * multiplier;
                case a < b: return -1 * multiplier;
                case a === b: return 0;
            }
        });
        
        // Удалить старые строки
        [].forEach.call(rows, function(row) {
            tableBody.removeChild(row);
        });

        // Поменять направление
        directions[index] = direction === 'asc' ? 'desc' : 'asc';

        // Добавить новую строку
        newRows.forEach(function(newRow) {
            tableBody.appendChild(newRow);
        });
        
        let allArrows = document.querySelectorAll(".table__arrow");
        let currArrow = event.currentTarget.querySelector(".table__arrow");
        for(let arrow of allArrows) {
            if(arrow !== currArrow) {
            arrow.classList = "";
            arrow.classList.add("table__arrow");
            arrow.classList.add("table__arrow_default");
            }
        }
        if(currArrow.classList.contains("table__arrow_default")) {
            currArrow.classList.remove("table__arrow_default");
            currArrow.classList.add("table__arrow_asc");
        } else if(currArrow.classList.contains("table__arrow_asc")) {
            currArrow.classList.remove("table__arrow_asc");
            currArrow.classList.add("table__arrow_desc");
        } else if(currArrow.classList.contains("table__arrow_desc")) {
            currArrow.classList.remove("table__arrow_desc");
            currArrow.classList.add("table__arrow_asc");
        }
    };

    [].forEach.call(headers, function(header, index) {
        header.addEventListener('click', function() {
            sortColumn(index);
        });
    });
};

function arrowsToDefault() {
    let allArrows = document.querySelectorAll(".table__arrow");
    for(let arrow of allArrows) {
        arrow.classList = "";
        arrow.classList.add("table__arrow");
        arrow.classList.add("table__arrow_default");
    }
}

function fillSelect(arr) {
    let states = [];
    for(let user of arr) {
        let userState = user.adress.state;
        if(!states.includes(userState)) {
            states.push(userState);
        }
    }
    let select = document.querySelector(".filter__select");
    for(let state of states) {
        let newOption = document.createElement("option");
        newOption.innerHTML = state;
        select.append(newOption);
    }
    select.addEventListener("change", handleSelect);
}

function handleSelect(event) {
    let currState = event.target.value;
    let rows = document.querySelectorAll('.table__row_visible');
    for(let row of rows) {
        row.style.display = "table-row";
        if(row.querySelector(".state").textContent !== currState) {
            row.style.display = "none";
        };
    }
}

function clearSelect() {
    let select = document.querySelector(".filter__select");
    select[0].selected = true;
}

function clearSearch() {
    let search = document.querySelector(".filter__search");
    search.value = "";
    search.addEventListener("keyup", tableSearch);
    
}

function tableSearch() {
    var phrase = document.querySelector('.filter__search');
    var regPhrase = new RegExp(phrase.value, 'i');
    var flag = false;
    let rows = document.querySelectorAll('.table__row_visible');
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
