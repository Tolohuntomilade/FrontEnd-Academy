const add_todo_btn= document.getElementById("add-btn");
const todo_input=document.getElementById("todo-input");
const list= document.getElementById("list");

add_todo_btn.addEventListener('click', function () {
    const todo=todo_input.value;
    if (!todo){
        alert("Please fill out the task");
        return;
    }

    const item= document.createElement('div');
    item.classList.add('item');

    const item_text=document.createElement('div');

    const edit_input= document.createElement('input');
    edit_input.classList.add('edit-input')
    edit_input.classList.add('hide');
    edit_input.name='edit-input';
    edit_input.type='text'
    edit_input.value=todo;
    const action_btns= document.createElement('div');
    action_btns.classList.add('action-btns');
    const edit_btn=document.createElement('button');
    edit_btn.classList.add('action-btn');
    edit_btn.classList.add('edit-btn');
    edit_btn.textContent='EDIT';


    //Edit Todos

    edit_btn.addEventListener('click', function(){
        edit_input.classList.remove('hide');

    });


    const remove_btn=document.createElement('button');
    remove_btn.classList.add('action_btn');
    remove_btn.classList.add('remove-btn');
    remove_btn.textContent='REMOVE';

    //Remove Todos

    remove_btn.addEventListener('click', function () {
        item.parentNode.removeChild(item);

        
    });
    action_btns.append(edit_btn);
    action_btns.append(remove_btn);
    item.append(item_text);
    item.append(edit_input);
    item.append(action_btns);
    list.append(item);

})