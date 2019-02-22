let changeLinkColors = () => {
    let elements = document.querySelectorAll('a');

    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("blue");

    }
};


let button = document.querySelector('#show-something');

button.addEventListener('click', changeLinkColors);





