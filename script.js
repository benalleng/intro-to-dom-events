// IPO pattern = Input -> Process -> Output

// cached element references = varaiables that store references to DOM elements
const btn = document.querySelector('button');
const input = document.querySelector('input');
const list = document.querySelector('ul');
const body = document.querySelector('body');

// Event listeners
btn.addEventListener('click', handleButtonPress);
input.addEventListener('keydown', handleEnterPress);
list.addEventListener('click', handleLiClick);

// body.addEventListener('click', handleButtonPress);


// Functions
function handleButtonPress(event) {
    while (input.value != '') {
    const li = document.createElement('li');
    li.textContent = input.value;
    input.value = '';
    // how can i set to an empty string
    list.appendChild(li);
    }
    input.focus();
}

function handleEnterPress(event) {    
        if (event.keyCode === 13) {
            handleButtonPress(event);
    }
}

function handleLiClick() {
    // only allow for li tags to trigger events
    if (event.target.tagName === 'LI') {
        event.target.style.color = 'red'; 
        if (event.target.style.textDecoration == 'none') {
            event.target.style.textDecoration = 'line-through';
        } else {
            event.target.style.textDecoration = 'none';
        }
        // console.log('ul tag lorem');
    } 
}