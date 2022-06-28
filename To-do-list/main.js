window.addEventListener('load', ()=>{
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list = document.querySelector("#tasks");

 form.addEventListener('submit',(e)=>{
     e.preventDefault();

    const task= input.value;

    if (!task){
        alert("Please fill out the task");
        return;
    }
    const taskdet= document.createElement("div");
    taskdet.classList.add("task");

    const task_content_det=document.createElement("div");
    task_content_det.classList.add("content");
    task_content_det.innerText=task;
  

    taskdet.appendChild(task_content_det);

    const task_input=document.createElement("input");
    task_input.classList.add("text");
    task_input.type="text";
    // task_input.value="text";
    task_input.setAttribute("readonly","readonly");

    task_content_det.appendChild(task_input);

    const task_action = document.createElement("div");
    task_action.classList.add("actions")

    const task_edit=document.createElement("button");
    task_edit.classList.add("edit");
    task_edit.innerHTML="Edit";

    const task_delete=document.createElement("button");
    task_delete.classList.add("delete");
    task_delete.innerHTML="Delete";

    task_action.appendChild(task_edit);
    task_action.appendChild(task_delete);
    taskdet.appendChild(task_action);



    list.appendChild(taskdet);

    input.value= "";


    task_edit.addEventListener("click",(e)=>{

        if (task_edit.innerText.toLowerCase()=="edit"){
            task_edit.innerText="Save";
            task_input.removeAttribute("readonly");
            task_input.focus();
           
        }
        else{
            task_edit.innerText="Edit";
          task_input.setAttribute("readonly","readonly");
          

        }
    })
    
    task_delete.addEventListener("click",(e)=>{


        list.removeChild(taskdet);
    })

})

})