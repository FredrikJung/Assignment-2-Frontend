
function createActivity()
{
    const btnText = "Ta bort";

    //Hämtar värdena
    let inputName = document.querySelector("#inputName").value;
    let inputDate = document.querySelector("#inputDate").value;
    let categories = document.querySelector("#categories").value;

    
    let todoListEl = document.querySelector(".todo-list-container");

    //Skapar grundelementet
    let todoListItem = document.createElement("div");
    todoListItem.classList.add("todo-list-item");
    todoListEl.appendChild(todoListItem);

    //Skapar Subelementen
    let todoListItemName = document.createElement("span");
    todoListItemName.classList.add("activity-item");
    todoListItemName.innerText = inputName;
    let todoListItemDate = document.createElement("span");
    todoListItemDate.classList.add("date-item");
    todoListItemDate.innerText = inputDate;
    let todoListItemCategory = document.createElement("span");
    todoListItemCategory.classList.add("category-item");
    todoListItemCategory.innerText = categories;
    let todoListItemRemoveBtn = document.createElement("button");
    todoListItemRemoveBtn.classList.add("remove-button");
    todoListItemRemoveBtn.innerText = btnText;

    //Lägger till Subelementen till grundelementen
    todoListItem.appendChild(todoListItemName);
    todoListItem.appendChild(todoListItemDate);
    todoListItem.appendChild(todoListItemCategory);
    todoListItem.appendChild(todoListItemRemoveBtn);

}

function removeActivity()
{
    //let item = document.querySelector(".todo-list-item");
    //item.addEventListener('click', function handleClick(event){
        //console.log(event.target);
        //item.remove();
   //})

    //let removeTodoListItem = document.querySelector(".todo-list-item");
    //console.log(removeTodoListItem);
    //removeTodoListItem.remove();


    let parent = document.getElementsByClassName("todo-list-container")[0];
    console.log(parent);

    let child = parent.getElementsByTagName("div")[1];
    console.log(child);

    //let arr = [...child];
   
    //console.log(arr);

    parent.removeChild(child);

}

