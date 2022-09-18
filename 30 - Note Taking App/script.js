const addButton = document.querySelector('#add');


const upadateSLData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];

    textAreaData.forEach((note) => {
        return notes.push(note.value);
    })

    // storing data in local storage
    localStorage.setItem('notes', JSON.stringify(notes));
}

const addNewNote = (text = "") => {

    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    <div class="operations">
        <button class="edit"><i class="far fa-edit"></i> </button>
        <button class="delete"><i class="far fa-trash-alt"> </i></button>
    </div>

    <div class="main ${text ? "" : "hidden"} " ></div>
       <textarea class="${text ? "hidden" : ""}"></textarea> `;

    note.insertAdjacentHTML('afterbegin', htmlData);
    // console.log(note);

    // getting the refrences
    const editButton = note.querySelector('.edit');
    const deleteButton = note.querySelector('.delete');
    const mainDiv = note.querySelector('.main');
    const textarea = note.querySelector('textarea');


    // deleting the note
    deleteButton.addEventListener('click', () => {
        note.remove();
    })

    // toggle using edit button
    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
    })

    textarea.value = text;
    mainDiv.innerHTML = text;

    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainDiv.innerHTML = value;

        upadateSLData();
    })

    document.body.appendChild(note);
}


// getting a data from local Storage
const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
    notes.forEach((note) => addNewNote(note));
}

addButton.addEventListener('click', () => addNewNote());























































// Simple Note Taking App making advance javascript 