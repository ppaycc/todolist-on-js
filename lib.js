const button = document.querySelector("#button");
let todo = document.querySelector("#todo");
let delButton = document.querySelector("#delButton");
//проверяю если есть в локалке что-то то заливаю в разметку, если нет то массив пустой, иначе будет жаловаться метод пуш
let curent = 0;
let arr = [];
let temp = JSON.parse(localStorage.getItem('item'));
if(temp!=null){
    arr = JSON.parse(localStorage.getItem('item'));
    for (i in arr){
        let tmp = `<li id="todolist${i}"> ${arr[i]}</li>`;
        todo.innerHTML += tmp;
        curent++;
    }
} else{
    arr = [];
}

button.addEventListener("click", addTodo);
document.addEventListener("keydown", event => {
    if(event.keyCode === 13){
        addTodo()
    }
})

function addTodo() {
    let text = document.querySelector("#textArea");
    if(text.value.trim()){
        let tmp = `<li id="todolist${curent}"> ${text.value}</li>`;
        curent++;
        todo.innerHTML += tmp;
        arr.push(text.value);
        localStorage.setItem('item', JSON.stringify(arr));
        text.value = "";
    }
};

delButton.addEventListener("click", function() {
    arr = [];
    localStorage.clear();
    todo.innerHTML = "";
});

todo.addEventListener('click', event =>{
    let id = event.target.id.slice(8);
    arr.splice(id, 1);
    event.target.remove();
    localStorage.setItem('item', JSON.stringify(arr));
});