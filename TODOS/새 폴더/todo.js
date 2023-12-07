//새로운 todo 추가하기 버튼 누르면 todo Create

const todoList = document.getElementById("list");//list 요소 가져오기
const createbtn = document.getElementById("create-btn");//create-btb 요소 가져오기
let todos = [];//todo들의 배열


createbtn.addEventListener('click', createTodo);


function createTodo() {

    const item = {                  //toto 속성
        id: new Date().getTime(),//todo id
        text: "",               //todo
        complete: false         //todo complete 체크박스 상태
    };

    todos.unshift(item);
    //itemEl = todo-list 아래 생길 div todo 창
    //textEl = todo 안의 todo 텍스트
    const { itemEl, textEl } = createElement(item);
    // itemel은 createElement에서 생성한 itemEl 
    // texdtel은 createElement에서 생성한 textEl 
    todoList.prepend(itemEl);   //itemel은 리스트 앞쪽에 생성됨
    textEl.removeAttribute("disabled"); //textel의 disabled 속성 제거 
    textEl.focus(); 
    //todo 생성후 텍스트 바로 입력하게 focus 함수 적용

    saveToLocalStorage();   //localstorage에 저장

}

function createElement(item) {
    //todo div 생성
    const itemEl = document.createElement("div");
    itemEl.classList.add("item");
    //todo div 안의 checkbox 생성
    const checkboxEl = document.createElement("input");
    checkboxEl.type = "checkbox";
    checkboxEl.checked = item.complete;//complete 값이 1이면 체크된 상태
    
    if (item.complete) {
        itemEl.classList.add("complete");
    }
    //체크되었다면 complete 클래스로 변경

    const textEl = document.createElement("input");
    textEl.type = "text";
    textEl.value = item.text;
    textEl.setAttribute("disabled", "");

    textEl.addEventListener("input", () => {
        item.text = textEl.value;
    });
    textEl.addEventListener("blur", () => {
        textEl.setAttribute("disabled", "")
        saveToLocalStorage();
    });
    const actions = document.createElement("div"); //actions div생성 (edit,delete)
    actions.classList.add("actions");

    const editBtn = document.createElement("button");
    editBtn.classList.add("icons");
    editBtn.innerText = "edit";
    editBtn.innerHTML="<img src=image/edit.jpg>";
    editBtn.addEventListener("click", () => {   //edit 버튼 클릭 시 text입력할 수 있게 
        textEl.removeAttribute("disabled"); //textel의 disabled 속성 제거 
        textEl.focus();
    })

    checkboxEl.addEventListener("change", () => {
        item.complete = checkboxEl.checked;
        if (item.complete) {
            itemEl.classList.add("complete");
        }
        else {
            itemEl.classList.remove("complete");
        }
        saveToLocalStorage();//체크한거 기록해야함
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("icons", "delete-btn");
    deleteBtn.innerText = "delete";
    deleteBtn.innerHTML="<img src=image/delete.jpg>";

    deleteBtn.addEventListener("click", () => {   //edit 버튼 클릭 시 text입력할 수 있게 
        todos = todos.filter(t => t.id != item.id)
        itemEl.remove();
        saveToLocalStorage();//지워진걸 기록해야함 
    })

    itemEl.appendChild(checkboxEl);
    itemEl.appendChild(textEl);
    itemEl.appendChild(actions);

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);


    return { itemEl, textEl, editBtn, deleteBtn };
}
//todos 배열에 있는 내용 출력
function displayTodos() {
    loadFromlocalStorage();

    for (let i = 0; i < todos.length; i++) {
        const item = todos[i];

        const { itemEl } = createElement(item);
        todoList.append(itemEl);
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