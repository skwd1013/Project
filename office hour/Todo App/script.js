const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");

let todos = [];

createBtn.addEventListener('click', createNewTodo);


//추가 버튼을 눌렀을때 생성되는 창
function createNewTodo() {
    const item = {
        id: new Date().getTime(),
        text: "",
        complete: false
    }

    todos.unshift(item);

    const { itemEl, textEl } = createTodoElement(item);//todo element 생성

    list.prepend(itemEl);

    textEl.removeAttribute("disabled");

    textEl.focus();

    saveToLocalStorage();
}







//추가 버튼을 누르면 안에 들어갈 내용들
function createTodoElement(item) {
    const itemEl = document.createElement('div');
    itemEl.classList.add('item');

    const checkboxel = document.createElement('input');
    checkboxel.type = "checkbox";
    checkboxel.checked = item.complete;

    if (item.complete) {
        itemEl.classList.add("complete");
    }

    const textEl = document.createElement('input');
    textEl.type = "text";
    textEl.value = item.text;
    textEl.setAttribute("disabled", "")

    const actionsEl = document.createElement('div');
    actionsEl.classList.add("actions");

    const editBtnEl = document.createElement('button');
    editBtnEl.classList.add("material-icons");
    editBtnEl.innerText = "edit";

    const removeBtnEl = document.createElement('button');
    removeBtnEl.classList.add("material-icons", "remove-btn");
    removeBtnEl.innerText = "remove"

    actionsEl.append(editBtnEl);
    actionsEl.append(removeBtnEl);

    itemEl.append(checkboxel);
    itemEl.append(textEl);
    itemEl.append(actionsEl);

    checkboxel.addEventListener("change", () => {
        item.complete = checkboxel.checked;

        if (item.complete) {
            itemEl.classList.add("complete");
        }
        else {
            itemEl.classList.remove("complete")
        }
        saveToLocalStorage();
    });

    textEl.addEventListener("input", () => {
        item.text = textEl.value;
    });
    textEl.addEventListener("blur", () => {
        textEl.setAttribute("disabled", "")
        saveToLocalStorage();
    });

    editBtnEl.addEventListener("click", () => {
        textEl.removeAttribute("disabled");
        textEl.focus();
    });

    removeBtnEl.addEventListener("click", () => {
        todos = todos.filter(t => t.id != item.id)
        itemEl.remove();
        saveToLocalStorage();
    });

    return { itemEl, textEl, editBtnEl, removeBtnEl }
}



//todo 보여주기
function displayTodos() {
    loadFromlocalStorage();

    for (let i = 0; i < todos.length; i++) {
        const item = todos[i];

        const { itemEl } = createTodoElement(item);
        list.append(itemEl);
    }
}

displayTodos();

function saveToLocalStorage() {
    const data = JSON.stringify(todos);
    localStorage.setItem("my_todos", data);
}

function loadFromlocalStorage() {
    const data = localStorage.getItem("my_todos");
    if (data) {
        todos = JSON.parse(data);
    }
    
}