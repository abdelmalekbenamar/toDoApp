const ajouterTache = document.querySelector(".ajouterTache");
const sortTime = document.querySelector(".sortByDate");
const sortTitle = document.querySelector(".sortByTitle");
const deleteButt = document.querySelector(".deleteButton");
const editButt = document.querySelector(".editButton");
const cancelAdd = document.getElementById("cancelAdd");
const saveAdd = document.getElementById("saveAdd");

const prio1Task = document.getElementById("taskUn");
const prio2Task = document.getElementById("taskDeux");
const prio3Task = document.getElementById("taskTrois");




ajouterTache.addEventListener("click", () =>{
    const addForm = document.querySelector("#addItem"); 
    addForm.classList.remove("hidden");
});
cancelAdd.addEventListener("click", () =>{
    document.getElementById("addItem").classList.add("hidden");
});
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

    const cardCode = `
        <div id="${now}" class="tache ${bg} p-2 m-1 rounded-lg">
                    <div class="titleTime flex justify-between">
                        <h2 class="taskTitle font-bold">${titreTache.value}</h2>
                        <p class="taskTime font-bold">${date.value}</p>
                    </div>
                    <p>${description.value}</p>
                    <div class="editDel w-fit ml-auto mr-auto">
                        <button class="editButton bg-green-900 rounded-lg p-2 text-white">Edit</button>
                        <button class="deleteButton bg-red-900 rounded-lg p-2 text-white">Delete</button>
                    </div>
                </div>
    `;
    
    switch(status.value){
        case "backlog":
            prio1Task.innerHTML += cardCode;
            break;
        case "inProgress":
            prio2Task.innerHTML += cardCode;
            break;
        case "done":
            prio3Task.innerHTML += cardCode;
            break;
    }
    titreTache.value = "";
    date.value = "";
    description.value = "";
    document.querySelector("#addItem").classList.add("hidden")
    

})








