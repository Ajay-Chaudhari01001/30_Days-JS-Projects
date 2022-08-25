const inputBox = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const clearAll = document.querySelector(".footer button");
const showData = document.querySelector(".footer .show-data");



inputBox.onkeyup = () =>{
    //getting user enter value
    let userData = inputBox.value;
    // if user values aren't only spaces
    if(userData.trim() != null){
        // active the add button
        addBtn.classList.add("active");
    } else {
        // unactive the add btn
        addBtn.classList.remove("active");
    }
}

    // if user click on the add button
    addBtn.onclick = () =>{
        let userData = inputBox.value// getting user entered value
        //getting localstorage data
        let getLocalStorage = localStorage.getItem("New Task");
        // if localStorage is null
        if(getLocalStorage == null){
            //creating blank array
            listArr = [];
        } else{
            // transforming json string  into a js object
            listArr = JSON.parse(getLocalStorage);
        }
        // 
         addBtn.classList.remove("active");
        // pushing or adding user data in an array
        listArr.push(userData);
        //transforming js object into json string
        localStorage.setItem("New Task", JSON.stringify(listArr));

        // onclick time call the show function
        showtask();
    }

    function showtask() {
        //getting localstorage data
        let newTask = localStorage.getItem("New Task");
        if(newTask == null){
            listArr = [];
        } else{
            listArr = JSON.parse(newTask);
        }

        const pendingNumb = document.querySelector(".pendingTask");
        pendingNumb.textContent = listArr.length;

        if(listArr.length > 0){
            clearAll.classList.add("active");
        }else{
            clearAll.classList.remove("active");
        }

        let htmlTag = '';
        listArr.forEach((value, index) =>{
            htmlTag += `<li>${value}<span onclick="todoDelete(${index})";><i class="bx bx-trash"></i></span></li>`
        })
        // adding new task in the todolist 
        todoList.innerHTML = htmlTag;
        inputBox.value = "";
    }
    
    // delete todo  function
    function todoDelete(index){
        let getLocalStorage = localStorage.getItem("New Task");
        listArr = JSON.parse(getLocalStorage);
        // delete or remove the particular list
        listArr.splice(index, 1);
        // after remove the list again updated
        localStorage.setItem("New Task", JSON.stringify(listArr));
        showtask();
    }

    // clear all task function button
    clearAll.onclick = () => {
        // empty array created
        listArr = [];
        // after remove the list again updated
        localStorage.setItem("New Task", JSON.stringify(listArr));
        showtask();
    }


 window.onload = () =>{
    showtask();
 }