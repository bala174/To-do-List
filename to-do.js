let maintainList = 1;

let getForm = document.querySelector('form');
getForm.addEventListener('submit',(event) => {
    event.preventDefault();
    let val = document.getElementById("listValue").value;
    let add = document.getElementById('childAppend');
    let appendValue = `<div class = "mb-3" id="item-${maintainList}">
                            <i>${val}</i>
                            <button type="submit" class="btn btn-success mx-2" onclick="finish(${maintainList})">Done <i class="fa-regular fa-circle-check"></i></button>
                            <button type="submit" class="btn btn-danger" onclick="deleteValue(${maintainList})">Delete <i class="fa-solid fa-trash"></i></button>
                        </div>`;
    add.innerHTML += appendValue;
    document.getElementById('listValue').value='';
    maintainList++;
},true);

function finish(itemNo){
    let edit = document.getElementById(`item-${itemNo}`);
    let icon = '<i class="fa-solid fa-circle-check"></i>';
    edit.innerHTML+=icon;
};

function deleteValue(itemNo){
    let del = document.getElementById(`item-${itemNo}`);
    if(del) del.remove();
};