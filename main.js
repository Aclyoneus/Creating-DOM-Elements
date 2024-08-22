const people = [
    {
        firstName: 'Jan',
        lastName: 'Kowalski',
        profession: 'Web developer'
    },
    {
        firstName: 'John',
        lastName: 'Smith',
        profession: 'Designer'
    }
]

const wrapper = document.querySelector('#wrapper');

people.forEach(function(person) {
    const newPersonContainer = document.createElement('div');
    const nameHeader = document.createElement('h2');
    const professionParagraph = document.createElement('p');
    const deleteButton = document.createElement('button');
    const cloneButton = document.createElement('button');

    nameHeader.innerText = `${person.firstName} ${person.lastName}`;
    professionParagraph.innerText = person.profession;
    deleteButton.innerText = 'Delete';
    cloneButton.innerText = 'Clone';
    deleteButton.classList.add('delete-button');
    cloneButton.classList.add('clone-button');

    deleteButton.addEventListener('click', function() {
        newPersonContainer.remove();
    })

    cloneButton.addEventListener('click', function() {
        const clonedPersonContainer = newPersonContainer.cloneNode(true);
        wrapper.append(clonedPersonContainer);
        const clonedDeleteButton = clonedPersonContainer.querySelector('.delete-button');
        const clonedCloneButton = clonedPersonContainer.querySelector('.clone-button');

        if (clonedDeleteButton) {
            clonedDeleteButton.addEventListener('click', function() {
                clonedPersonContainer.remove();
            })
        }
        if (clonedCloneButton) {
            clonedCloneButton.addEventListener('click', function() {
                clonedClonedPersonContainer = clonedPersonContainer.cloneNode(true);
                wrapper.append(clonedClonedPersonContainer);
            })
        }
    })

    newPersonContainer.append(nameHeader, professionParagraph, deleteButton, cloneButton);

    if (wrapper) {
        wrapper.prepend(newPersonContainer);
    }
})
