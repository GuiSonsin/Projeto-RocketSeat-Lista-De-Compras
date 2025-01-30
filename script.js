const inputItem = document.querySelector(".js-inputPurchase")
const listItem = document.querySelector(".js-containerPurchase")
const buttonAddItem = document.querySelector(".js-buttonAddItem")

function addItemInList(){
    let nameItem = inputItem.value.trim()

    if(nameItem === ""){
        return alert("Insira o nome do item!")
    }

    const itemList = document.createElement("div")
    itemList.classList.add("container__purchase")

    itemList.innerHTML = `
    <input type="checkbox" class="select-item">
    <p>${nameItem}</p>
    <img src="images/Lixeira.png" alt="Excluir" class="delete-btn">`

    listItem.appendChild(itemList)
    inputItem.value = ""


}

// add event in the button to show item
buttonAddItem.addEventListener("click", addItemInList)
