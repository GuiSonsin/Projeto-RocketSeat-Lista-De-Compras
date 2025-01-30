const inputItem = document.querySelector(".js-inputPurchase")
const listItem = document.querySelector(".js-containerPurchase")
const buttonAddItem = document.querySelector(".js-buttonAddItem")

function addItemInList(){
    let nameItem = inputItem.value.trim()

    // check if the item name is null
    if(nameItem === ""){
        return alert("Insira o nome do item!")
    }

    // add new element to html
    const itemList = document.createElement("div")
    // add class to new element
    itemList.classList.add("container__purchase")

    itemList.innerHTML = `
    <input type="checkbox" class="select-item">
    <p>${nameItem}</p>
    <img src="images/Lixeira.png" alt="Excluir" class="delete-btn">`

    // add item to list
    listItem.appendChild(itemList)
    inputItem.value = ""
}

// add event in the button to show item in list
buttonAddItem.addEventListener("click", addItemInList)

// add event in the input to show item in list
inputItem.addEventListener("keypress", (k) => {
    if(k.key === "Enter")
        addItemInList()
})
