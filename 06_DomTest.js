
function handleSingleClick(e){
    const singleItem = document.getElementById(e.id)
    singleItem.classList.toggle("mystyle")
}

// 수정함수
function handleUpdate(e){
    const singleItem = document.getElementById(e.id).previousSibling
    singleItem.style.visibility = "hidden"

    const updateInput = document.createElement("input")
    updateInput.setAttribute("id","update-input")
    updateInput.value = singleItem.innerHTML

    singleItem.parentNode.insertBefore(updateInput, singleItem)

    const updateButton = document.getElementById(e.id)
    updateButton.setAttribute("onclick", "handleUpdateConfirm(this)") //수정버튼을 두번누르면
}

function handleUpdateConfirm(e){
    console.log("수정")
    const updateInput = document.getElementById('update-input')

    const singleItem = document.getElementById(e.id).previousSibling
    singleItem.innerHTML = updateInput.value
    singleItem.style.visibility = "visible"

    const updateButton = document.getElementById(e.id)
    updateButton.setAttribute("onclick", "handleUpdate(this)")
    updateInput.remove();

}

// 삭제함수
function handleDelete(e){
    const singleItem = document.getElementById(e.id).parentElement
    singleItem.remove()
}


function addItem(){
    console.log("addItem 실행")
    const itemInput = document.getElementById("list_data")
    const content = itemInput.value
    if (content) {
        console.log("컨텐츠가 있는 경우")
        //새로 생성되는 리스트에 고유 ID부여
        const myList = document.getElementById("list")
        console.log(myList.getElementsByTagName("li").length)
        let list_number = myList.getElementsByTagName("li").length +1;

        //새로 생성되는 리스트에도 기존 리스트 속성 추가
        const newList = document.createElement('li')

        const newText = document.createElement('span')
        newText.innerText = content
        newText.setAttribute("onclick", "handleSingleClick(this)")
        newText.setAttribute("id", `${list_number}th-item`)
        newList.appendChild(newText)
        
        //수정영역
        const updateButton = document.createElement('button')
        updateButton.innerText = "수정"
        updateButton.setAttribute("onclick", "handleUpdate(this)")
        updateButton.setAttribute("id", `${list_number}th-item-update-button`)
        newList.appendChild(updateButton);

        // 삭제영역
        const deleteButton = document.createElement('button')
        deleteButton.innerText = "삭제"
        deleteButton.setAttribute("onclick", "handleDelete(this)")
        deleteButton.setAttribute("id", `${list_number}th-item-delete-button`)
        newList.appendChild(deleteButton);

        myList.append(newList)

        itemInput.value =""
    } else {
        console.log("컨텐츠가 있는 경우")
        alert("값을 입력해주세요")
    } 
}
