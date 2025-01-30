const inputItem = document.querySelector(".js-inputPurchase")
const quantityItem = document.querySelector(".input-quantity")
const listOfItems = document.querySelector(".js-containerPurchase")
const buttonAddItem = document.querySelector(".js-buttonAddItem")


function addItemInList(){
    const nameItem = inputItem.value.trim()
    const quantityItemValue = quantityItem.value.trim()
    
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
    <span>${quantityItemValue}</span>
    <p>${nameItem}</p>
    <img src="images/Lixeira.png" alt="Excluir" class="delete-btn">`

    // adding item to list
    listOfItems.appendChild(itemList)

    // clear fields 
    inputItem.value = ""
    quantityItem.value = ""

    // directing focus
    quantityItem.focus()

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
    
    // getting item name 
    const itemName = item.querySelector("p").innerText

    // calling function to show message with item name
    showMessageDeleteItem(itemName)
}

function showMessageDeleteItem(itemName){
    // creating tag aside
    let notification = document.createElement("aside");

    // adding class in the tag
    notification.classList.add("notification")

    // creating tag p
    let message = document.createElement("p")

    // adding text in the tag p
    message.innerHTML = `O item '${itemName}' foi removido da lista!`
    
    // putting message in the notification
    notification.appendChild(message);

    // adding notification element to HTML page body
    document.body.appendChild(notification);

    // show message
    notification.style.display = "block"

    // hide notification in 4 seconds
    setTimeout(() => {
        notification.style.display = "none"
    }, 4000)
}