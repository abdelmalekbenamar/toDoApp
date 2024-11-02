const ajouterTache = document.querySelector(".ajouterTache");
const sortTime = document.querySelector(".sortByDate");
const sortTitle = document.querySelector(".sortByTitle");

const cancelAdd = document.getElementById("cancelAdd");
const saveAdd = document.getElementById("saveAdd");

const cancelEdit = document.getElementById("cancelEdit");

const prio1Task = document.getElementById("taskUn");
const prio2Task = document.getElementById("taskDeux");
const prio3Task = document.getElementById("taskTrois");




ajouterTache.addEventListener("click", () =>{
    const addForm = document.getElementById("addItem");
    addForm.classList.remove("hidden");
});
cancelAdd.addEventListener("click", () =>{
    document.getElementById("addItem").classList.add("hidden");
});
cancelEdit.addEventListener("click", () =>{
    const editForm = document.getElementById("editTask");
    editForm.classList.add("hidden")
})



saveAdd.addEventListener("click", (e) =>{
    e.preventDefault();
    const titreTache = document.getElementById("titreTache");
    const description = document.getElementById("description");
    const date = document.getElementById("date");
    const status = document.getElementById("statut");
    const priority = document.getElementById("prio");
    let bg = "";


    // To get a unique identifiant
    
        let now = new Date();
        console.log(now.getTime())
        let time = now.getTime();
        now = now.toDateString();
        now = now.split(" ");
        now = now.join("");
        now +=time;

    // create a div element
    
    switch(priority.value){
        case "p1":
            bg = "bg-red-800";
            break;
        case "p2":
            bg = "bg-orange-600";
            break;
        case "p3":
            bg = "bg-lime-600";
            break;
    }
                
    let codeCard = document.createElement("div");
    codeCard.className = `${bg} tache p-2 m-1 rounded-lg`
    codeCard.id = now;
    codeCard.innerHTML = `
                    <div class="titleTime flex justify-between">
                        <h2 id="taskAddedTitle" class="taskTitle font-bold">${titreTache.value}</h2>
                        <p id="taskAddedTimeId" class="taskAddedTime font-bold">${date.value}</p>
                    </div>
                    <p id="descriptionAddedTask">${description.value}</p>
                    <div class="editDel w-fit ml-auto mr-auto">
                        <button class="editButton bg-green-900 rounded-lg p-2 text-white">Edit</button>
                        <button class="deleteButton bg-red-900 rounded-lg p-2 text-white">Delete</button>
                    </div>`;
    
    switch(status.value){
        case "backlog":
            prio1Task.appendChild(codeCard);
            break;
        case "inProgress":
            prio2Task.appendChild(codeCard);
            break;
        case "done":
            prio3Task.appendChild(codeCard);
            break;
    }
    document.querySelector("#addItem").classList.add("hidden");
    
    const deleteButt = codeCard.querySelector(`#${now} .deleteButton`);
    deleteButt.addEventListener("click", () =>{
        deleteButt.parentNode.parentNode.remove();
    })
    
    // create edit button event
  
 
    const editButt = codeCard.querySelector(`#${now} .editButton`);
    editButt.addEventListener("click", () =>{
        const editTask = document.getElementById("editTask");
        editTask.classList.remove("hidden");
        const titleTaskEdit = document.getElementById("titreTacheEdit")
        const titleTaskEditDataNode = document.querySelector(`#${now} #taskAddedTitle`);
        const descTaskEdit = document.getElementById("descriptionEdit");
        const descTaskEditDataNode = document.querySelector(`#${now} #descriptionAddedTask`);
        const dateTaskEdit = document.getElementById("dateEdit");
        const dateTaskEditDataNode = document.querySelector(`#${now} #taskAddedTimeId`);
        const prioTaskEdit = document.getElementById("priorityEdit1");
        const prioTaskEditDataNode = document.querySelector(`#${now}`);
        const prioBg = [];
        

        dateTaskEdit.value = dateTaskEditDataNode.innerText
        descTaskEdit.value = descTaskEditDataNode.innerText;
        titleTaskEdit.value = titleTaskEditDataNode.innerText;
        prioBg.push(prioTaskEditDataNode.className.toString());
        // prioBg.shift();
        let classList = prioBg[0]
        let classListArray = classList.split(" ");
        let shiftedBg = classListArray.shift();
        //la classe sans le background
        // classListArray = classListArray.join(" ");
        switch(shiftedBg){
            case "bg-red-800":
                prioTaskEdit.value = "priority1";
            break;
        case "bg-orange-600":
            prioTaskEdit.value = "priority2";
            break;
        case "bg-lime-600":
            prioTaskEdit.value = "priority3";
            break;
        }


        const saveEdit = document.getElementById("saveEdit");
        saveEdit.addEventListener("click", (e) =>{
            e.preventDefault();
            const editNewTitle = document.getElementById("titreTacheEdit");
            const editNewDesc = document.getElementById("descriptionEdit");
            const editNewDate = document.getElementById("dateEdit");
            const editNewPrio = document.getElementById("priorityEdit1");

            const taskToEdit = document.getElementById(`${now}`);
            const titleToEdit = taskToEdit.querySelector("#taskAddedTitle");
            const descToEdit = taskToEdit.querySelector("#descriptionAddedTask");
            const dateToEdit = taskToEdit.querySelector("#taskAddedTimeId");

            titleToEdit.innerText = editNewTitle.value;
            descToEdit.innerText = editNewDesc.value;
            dateToEdit.innerText = editNewDate.value;
            switch(editNewPrio.value){
                case "priority1":
                    classListArray.unshift("bg-red-800");
                    break;
                case "priority2":
                    classListArray.unshift("bg-orange-600");
                    break;
                case "priority3":
                    classListArray.unshift("bg-lime-600");
                    break;

            }
            let laClassChangeBg = classListArray.join(" ");
            taskToEdit.className = laClassChangeBg;
            document.getElementById("editTask").classList.add("hidden");
            console.log(editNewPrio.value);
        })
        
        
    })



    titreTache.value = "";
    date.value = "";
    description.value = "";
    })

   











