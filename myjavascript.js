const addBtn = document.querySelector(".add-button");
const btnText = "Ta bort";

let todayDate = new Date().toLocaleDateString();
document.querySelector("#inputDate").value = todayDate;

let activityDates = document.getElementsByClassName("date-item");
let a = 0;
for (item of activityDates){
    if(activityDates[a].innerText < todayDate){
        activityDates[a].style.color = "red";
    }
    a++;
}

document.querySelector("#all-button").checked = true;

let todoListItemRemoveBtns = document.getElementsByClassName("remove-button");
let i = 0;
for (item of todoListItemRemoveBtns) {
    todoListItemRemoveBtns[i].addEventListener("click", function(){
        this.parentNode.remove();
    });
    i++;
}

function createActivity()
{
    let inputName = document.querySelector("#inputName").value;
    let inputDate = document.querySelector("#inputDate").value;
    let categories = document.querySelector("#categories").value;
  
    let todoListEl = document.querySelector(".todo-list-container");

    if (inputName != "")
    {
    let todoListItem = document.createElement("div");
    todoListItem.classList.add("todo-list-item");
    todoListEl.appendChild(todoListItem);

    let todoListItemName = document.createElement("span");
    todoListItemName.classList.add("activity-item");
    todoListItemName.innerText = inputName;

    let todoListItemDate = document.createElement("span");
    todoListItemDate.classList.add("date-item");
    todoListItemDate.innerText = inputDate;
    if(inputDate < todayDate){
        todoListItemDate.style.color = "red";
    }

    let todoListItemCategory = document.createElement("span");
    todoListItemCategory.classList.add("category-item");
    todoListItemCategory.innerText = categories;

    let todoListItemRemoveBtn = document.createElement("button");
    todoListItemRemoveBtn.classList.add("remove-button");
    todoListItemRemoveBtn.innerText = btnText;
    todoListItemRemoveBtn.addEventListener("click", function(){
        this.parentNode.remove();
    })

    todoListItem.appendChild(todoListItemName);
    todoListItem.appendChild(todoListItemDate);
    todoListItem.appendChild(todoListItemCategory);
    todoListItem.appendChild(todoListItemRemoveBtn);

    document.querySelector("#inputName").value = "";
    }
}

addEventListener("keypress", function(event)
{
    if(event.key === "Enter")
    {
        addBtn.click();
    }
});

function filterActivities(filterValue) 
{ 
    let todoListItems = document.querySelectorAll(".todo-list-item");

    todoListItems.forEach((listItem) => {
        const itemName = listItem.querySelector(".activity-item").innerText;
        
        if(itemName.indexOf(filterValue) < 0)
        {
            listItem.classList.add("hide");
        }
        else
        {
            listItem.classList.remove("hide");
        } 
    }); 
}

function filterActivitiesRadioButtons(radioValue) 
{
    let todoListItems = document.querySelectorAll(".todo-list-item");

    todoListItems.forEach((listItem) => 
    {
        let itemName = listItem.querySelector(".category-item").innerText;
        if (itemName == radioValue.value)
        {
            listItem.classList.remove("hide-radio");
        }
        else
        {
            listItem.classList.add("hide-radio");
        }
        if (radioValue.value == "Alla")
        {
            listItem.classList.remove("hide-radio");
        }
    });
}