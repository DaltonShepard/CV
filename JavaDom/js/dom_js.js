document.addEventListener('DOMContentLoaded', (event) => {
    const greetingElement = document.getElementById('greeting');
    const amButton = document.getElementById('am');
    const pmButton = document.getElementById('pm');

    amButton.addEventListener('click', () => {
        greetingElement.textContent = 'Good Morning!';
    });

    pmButton.addEventListener('click', () => {
        greetingElement.textContent = 'Good Night!';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const redButton = document.getElementById('red');
    const greenButton = document.getElementById('green');
    const blueButton = document.getElementById('blue');
    const yellowButton = document.getElementById('yellow');
    const backgroundDiv = document.getElementById('div_color');

    redButton.addEventListener('click', () => {
        backgroundDiv.setAttribute('class', 'bg_red');

    });
    blueButton.addEventListener('click', () => {
        backgroundDiv.setAttribute('class', 'bg_blue');

    });
    greenButton.addEventListener('click', () => {
        backgroundDiv.setAttribute('class', 'bg_green');

    });
    yellowButton.addEventListener('click', () => {
        backgroundDiv.setAttribute('class', 'bg_yellow');

    });
    const userInput = document.querySelector('#usrInput');
    const addButton = document.querySelector('#addBtn');
    const list = document.querySelector('#myUL');

    addButton.addEventListener('click', () => {
        const newLi = document.createElement('li');
        const deleteButton = document.createElement('button');
        newLi.textContent = userInput.value;
        list.appendChild(newLi);
        deleteButton.textContent = 'Delete';
        newLi.appendChild(deleteButton);
        userInput.value = '';
        deleteButton.addEventListener('click', () => {
            list.removeChild(newLi);
        });
    });
});