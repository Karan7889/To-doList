function addItem(event) {
  event.preventDefault();
  let text = document.getElementById("todo-input");

  db.collection("todo-items").add({
    text: text.value,
    status: "active",
  });
  text.value = "";
}

// function getItems() {
//   db.collection("todo-items").onSnapshot((snapshot) => {
//     console.log(snapshot);
//     let items = [];
//     snapshot.docs.forEach((doc) => {
//       items.push({
//         id: doc.id,
//         ...doc.data(),
//       });
//     });
//     generateItems(items);
//   });
// }

// function generateItems(items) {
//   let itemsHTML = "";
//   items.forEach((item) => {
//     itemsHTML += `
//         <div class="todo-item">
//                 <div class="check">
//                 <div data-id="${item.id}" class="check-mark ${item.status=="completed" ? "checked" : ""}">
//                     <img src="./assets/icon-check.svg" alt="" />
//                 </div>
//                 </div>
//                 <div class="todo-text ${item.status=="completed" ? "checked" : ""} ">${item.text}</div>
//             </div>
 
//     `
//   });

//   document.querySelector(".todo-items").innerHTML=itemsHTML;
//   createEventListners();
// }
// function createEventListners(){
//     let todoCheckmarks=document.querySelectorAll(".todo-item .check-mark");
//     todoCheckmarks.forEach((checkMark)=>{
// checkMark.addEventListener("click",function(){
// markCompleted(checkMark.dataset.id);
// })
//     })
// }

// function markCompleted(){
//    let item= db.collection("todo-items").doc(id);
//    item.get().then(function(doc){
//        if(doc.exists){
//            let status=doc.data().status;
//            if(status=="active"){
//                item.update({
//                    status:"completed"
//                })
//            } else if(status=="completed"){
//                item.update({
//                    status:"active"
//                })
//            }
//        }
//    })
// }
// getItems();
function getItems(){
    db.collection("todo-items").onSnapshot((snapshot) => {
        let items = [];
        snapshot.docs.forEach((doc) => {
            items.push({
                id: doc.id, 
                ...doc.data()
            })
        })
        generateItems(items);
    })
}

function generateItems(items){
    let todoItems = []
    items.forEach((item) => {
        let todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        let checkContainer = document.createElement("div");
        checkContainer.classList.add("check");
        let checkMark = document.createElement("div");
        checkMark.classList.add("check-mark");
        checkMark.innerHTML = '<img src="assets/icon-check.svg">';
        checkMark.addEventListener("click", function(){
            markCompleted(item.id);
        })
        checkContainer.appendChild(checkMark);

        let todoText = document.createElement("div");
        todoText.classList.add("todo-text");
        todoText.innerText = item.text;

        if(item.status == "completed"){
            checkMark.classList.add("checked");
            todoText.classList.add("checked");
        }
        todoItem.appendChild(checkContainer);
        todoItem.appendChild(todoText);
        todoItems.push(todoItem)
    })
    document.querySelector(".todo-items").replaceChildren(...todoItems);
}



function addItem(event){
    event.preventDefault();
    let text = document.getElementById("todo-input");
    let newItem = db.collection("todo-items").add({
        text: text.value,
        status: "active"
    })
    text.value = "";
}

function markCompleted(id){
    let item = db.collection("todo-items").doc(id);
    item.get().then(function(doc) {
        if (doc.exists) {
            if(doc.data().status == "active"){
                item.update({
                    status: "completed"
                })
            } else {
                item.update({
                    status: "active"
                })
            }
        }
    })
}

getItems();