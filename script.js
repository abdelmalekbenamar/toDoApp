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

    const searchInput = document.getElementById("searchInput");
    const fermerSearch = document.getElementById("fermerSearch");
    const searchButton = document.getElementById("searchButton");
    
    fermerSearch.addEventListener("click", () =>{
        const searchForm = document.getElementById('searchForm');
        searchForm.classList.add("hidden")
    });
    searchButton.addEventListener("click", () =>{
        const valeurAChercher = searchInput.value;
        const backLog = document.getElementById("taskUn");
        const inProgress = document.getElementById("taskDeux");
        const done = document.getElementById("taskTrois");

        //recherche dans le div backlog
        const backLogList = backLog.querySelectorAll(".tache");
        const titleElem = Array.from(backLogList).filter(el =>{
            const titreElement = el.querySelector("#taskAddedTitle");
            return valeurAChercher == titreElement.innerText
        })
        if(titleElem.length == 1){
            const leTitreCherche = titleElem[0].querySelector("#taskAddedTitle").innerText;
            const lElelemntDesc = titleElem[0].querySelector("#descriptionAddedTask");
            const searchFormTitre = document.getElementById("leTitre");
            const searchFormDesc = document.getElementById("laDescription");
            const searchForm = document.getElementById('searchForm');
            searchForm.classList.remove("hidden");
            searchFormTitre.innerText = leTitreCherche;
            searchFormDesc.innerText = lElelemntDesc.innerText;
            
        }
        //recherche dans le div in progress
        const inProgressList = inProgress.querySelectorAll(".tache");
        const titleInProgress = Array.from(inProgressList).filter(el =>{
            const titreElementProgress = el.querySelector("#taskAddedTitle");
            return valeurAChercher == titreElementProgress.innerText;
        });
        if(titleInProgress.length == 1){
            const SearchTitleProgress = titleInProgress[0].querySelector("#taskAddedTitle").innerText;
            const searchDescProgress = titleInProgress[0].querySelector("#descriptionAddedTask").innerText;

            const searchFormTitre = document.getElementById("leTitre");
            const searchFormDesc = document.getElementById("laDescription");
            const searchForm = document.getElementById('searchForm');
            searchForm.classList.remove("hidden");
            searchFormTitre.innerText = SearchTitleProgress;
            searchFormDesc.innerText = searchDescProgress;   
        }

       //recherche dans le div done
       const doneList = done.querySelectorAll(".tache");
       const titleDone = Array.from(doneList).filter(el => {
            const titreElementDone = el.querySelector("#taskAddedTitle");
            return valeurAChercher == titreElementDone.innerText;
       });
       if(titleDone.length == 1){
            const searchTitleDone = titleDone[0].querySelector("#taskAddedTitle").innerText;
            const searchDescDone = titleDone[0].querySelector("#descriptionAddedTask").innerText;

            const searchFormTitre = document.getElementById("leTitre");
            const searchFormDesc = document.getElementById("laDescription");
            const searchForm = document.getElementById('searchForm');
            searchForm.classList.remove("hidden");
            searchFormTitre.innerText = searchTitleDone;
            searchFormDesc.innerText = searchDescDone; 

       }
        

    })

    //sort Elements button
    const sortByTitle = document.getElementById("sortByTitre");
    sortByTitle.addEventListener("click", () =>{
        const backLogSort = document.getElementById("taskUn");
        const inProgressSort = document.getElementById("taskDeux");
        const doneSort = document.getElementById("taskTrois");

        //le tri pour le backlog
        const backLogSortList = backLogSort.querySelectorAll(".tache");
        const backLogSortTitleList = Array.from(backLogSortList).map(el =>{
            const backlogTitle = el.querySelector("#taskAddedTitle");
            return backlogTitle.innerText;
        });
        backLogSortTitleList.sort();
        
        let elm = "";
        let elmARechercher = "";
        for(let i = 0; i < backLogSortTitleList.length; i++){
            // elm = backLogSortList[i].querySelector("#taskAddedTitle").innerText;
            elm = backLogSortTitleList[i]
            for(let j = 0; j < backLogSortTitleList.length; j++){
                elmARechercher = backLogSortList[j].querySelector("#taskAddedTitle").innerText;
                if(elm == elmARechercher){
                    backLogSort.appendChild(backLogSortList[j]);
                }
            }
        }

        //le tri pour le In Progress
        const inProgressSortList = inProgressSort.querySelectorAll(".tache");
        const inProgressSortTitleList = Array.from(inProgressSortList).map(el =>{
            const inProgressTitle = el.querySelector("#taskAddedTitle");
            return inProgressTitle.textContent;
        });
        inProgressSortTitleList.sort();
        let elmInProgress = "";
        let elmARechercherInProgress = "";
        for(let i = 0; i < inProgressSortTitleList.length; i++){
            elmInProgress = inProgressSortTitleList[i];
            for(let j = 0; j < inProgressSortTitleList.length; j++){
                elmARechercherInProgress = inProgressSortList[j].querySelector("#taskAddedTitle").innerText;
                if(elmARechercherInProgress == elmInProgress){
                    inProgressSort.appendChild(inProgressSortList[j])
                }
            }
        }

        //le tri pour le Done
        const doneSortList = doneSort.querySelectorAll(".tache");
        const doneSortTitleList = Array.from(doneSortList).map(el =>{
            const doneTitle = el.querySelector("#taskAddedTitle");
            return doneTitle.innerText;
        });
        doneSortTitleList.sort();
        let elmDone = "";
        let elmARechercherDone = "";
        for(let i = 0; i < doneSortTitleList.length; i++ ){
            elmDone = doneSortTitleList[i];
            for(let j = 0; j < doneSortTitleList.length; j++){
                elmARechercherDone = doneSortList[j].querySelector("#taskAddedTitle").innerText;
                if(elmARechercherDone == elmDone){
                    doneSort.appendChild(doneSortList[j]); 
                }
            }
        }

        
        
    });

   











