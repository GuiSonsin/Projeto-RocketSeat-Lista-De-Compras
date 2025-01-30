const inputItem = document.querySelector(".js-inputPurchase")
const listItem = document.querySelector(".js-containerPurchase")
const buttonAddItem = document.querySelector(".js-buttonAddItem")

function addItemInList(){
    let nameItem = inputItem.value.trim()

    // checking if the item name is null
    if(nameItem === ""){
        return alert("Insira o nome do item!")
    }

    // adding new element to html
    const itemList = document.createElement("div")
    // adding class to new element
    itemList.classList.add("container__purchase")

    itemList.innerHTML = `
    <input type="checkbox" class="select-item">
    <p>${nameItem}</p>
    <img src="images/Lixeira.png" alt="Excluir" class="delete-btn">`

    // adding item to list
    listItem.appendChild(itemList)
    inputItem.value = ""

    // creating delete button to remove item of list
    const deleteButton = itemList.querySelector(".delete-btn")

    // adding event in the delete button created
    deleteButton.addEventListener("click", () => deleteItem(itemList))
}

// adding event in the button to show item in list
buttonAddItem.addEventListener("click", addItemInList)

// adding event in the input to show item in list
inputItem.addEventListener("keypress", (k) => {
    if(k.key === "Enter")
        addItemInList()
})

function deleteItem(item){
    // removing item of list
    item.remove()
}
