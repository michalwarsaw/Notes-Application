const notesListEl = document.querySelector('#notes-list');

const notesList = [
    {
        title: 'Note 1',
        lastModified: '01/01/2018 12:00'
    },
    {
        title: 'Note 2',
        lastModified: '01/01/2018 12:00'
    },
    {
        title: 'Note 3',
        lastModified: '01/01/2018 12:00'
    },
    {
        title: 'Note 4',
        lastModified: '01/01/2018 12:00'
    },
];

const generateNoteList = () => {

    const generateNoteHTML = note => {
        return `<li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
           <h6 class="my-0">${note.title}</h6>
           <small class="text-muted">${note.lastModified}</small>
        </div>
        </li>`;
    };
    
    const html = notesList.map(note => generateNoteHTML(note)).join(''); // join('') is deleting the "," between <li>;
    notesListEl.innerHTML = html;
};
generateNoteList();