/*
Steps:
    1. create new node and append to list
    2. show alert on adding / editing / delete
    3. Edit Item
    4. Delete Item 
    5. Clear Items 
    6. Set to local Storage
    7. Edit in local Storage -> In progress
    8. Delete in local Storage
    9. Display all items after loading page
*/

// ****** SELECT ITEMS **********
let groceryContainer = document.querySelector(".grocery-container")
let groceryList = document.querySelector(".grocery-list")
let submitBtn = document.querySelector(".submit-btn")
let inputField = document.querySelector("#grocery")
let alert = document.querySelector(".alert")
let clearAll = document.querySelector(".clear-btn")

// edit option
let editElement
let editFlag = false
let editId

// ****** EVENT LISTENERS **********
function init() {

    submitBtn.addEventListener("click", e => {
        e.preventDefault()
        value = inputField.value

        // add item
        if (value !== "" && !editFlag) {
            addGroceryItem(value)
            displayAlert("Grocery Item added Successfully!", "success")
        }
        // edit item
        else if (value !== "" && editFlag) {
            editElement.innerHTML = value
            editLocalStorage(editId, value)
            displayAlert("Grocery Item updated Successfully!", "success")
        }
        // Invalid value
        else
            displayAlert("Invalid Grocery Item", "danger")

        setDefaults()
    })

    // remove all items
    clearAll.addEventListener("click", () => {
        let childNodes = document.querySelectorAll(".grocery-item")

        localStorage.removeItem("grocery-item")
        childNodes.forEach(child => groceryList.removeChild(child))

        displayAlert("All grocery Items removed", "danger")
        groceryContainer.classList.remove("show-container");
        setDefaults()
    })

    window.addEventListener("DOMContentLoaded", () => displayAllItems());
}

// ****** FUNCTIONS **********
const addGroceryItem = item => {
    const dateValue = new Date().getTime().toString()
    displayList(dateValue, item)

    addToLocalStorage(dateValue, item)
}

// display list items
const displayList = (dateValue, item) => {
    const element = document.createElement("article")
    element.classList.add("grocery-item")
    element.setAttribute("data-id", dateValue);

    element.innerHTML = generateArticle(item)

    const editBtn = element.querySelector(".edit-btn")
    editBtn.addEventListener("click", editGroceryItems)
    const deleteBtn = element.querySelector(".delete-btn")
    deleteBtn.addEventListener("click", deleteGroceryItems)

    groceryList.appendChild(element)
    groceryContainer.classList.add("show-container")
}

const generateArticle = item => {
    return `<p class="title">${item}</p>
    <div class="btn-container">
      <button class="edit-btn"><i class="fas fa-edit"></i></button>
      <button class="delete-btn"><i class="fas fa-trash"></i></button>
    </div>`
}

const editGroceryItems = e => {
    const element = e.currentTarget.parentElement.parentElement
    editElement = e.currentTarget.parentElement.previousElementSibling
    editFlag = true;
    editId = element.dataset.id
    inputField.value = editElement.innerHTML
    submitBtn.textContent = "Submit Change"
}

const deleteGroceryItems = e => {
    const child = e.currentTarget.parentElement.parentElement
    groceryList.removeChild(child)

    if (groceryList.children.length === 0) groceryContainer.classList.remove("show-container");

    const itemName = e.currentTarget.parentElement.previousElementSibling.textContent
    const id = e.currentTarget.parentElement.parentElement.dataset.id

    displayAlert(`item named ${itemName} removed`, "danger");
    removeFromLocalStorage(id)

    setDefaults();
}

const displayAlert = (message, action) => {

    alert.classList.add(`alert-${action}`)
    alert.innerText = message

    setTimeout(function () {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

// ****** LOCAL STORAGE **********
const addToLocalStorage = (id, value) => {
    const grocery = { id, value }
    let items = getLocalStorage()
    items.push(grocery)
    localStorage.setItem("grocery-item", JSON.stringify(items));
}

const getLocalStorage = () => localStorage.getItem("grocery-item") ? JSON.parse(localStorage.getItem("grocery-item")) : [];

const editLocalStorage = (id, value) => {

    let items = getLocalStorage()

    items = items.map(item => {
        if (item.id === id) item.value = value;

        return item
    })

    localStorage.setItem("grocery-item", JSON.stringify(items));
}

const removeFromLocalStorage = id => {
    let items = getLocalStorage()
    items = items.filter(item => (item.id !== id))

    localStorage.setItem("grocery-item", JSON.stringify(items));
}

// ****** SETUP ITEMS **********
const setDefaults = () => {
    inputField.value = ""
    submitBtn.textContent = "Add Item"
    editFlag = false
    editId = ""
    inputField.focus()
}

const displayAllItems = () => {

    let items = getLocalStorage()
    items.forEach(item => {
        displayList(item.id, item.value)
    })
}

// ****** INITIALIZE ITEMS **********
init()
