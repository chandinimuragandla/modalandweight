// Create and append the HTML elements dynamically
document.body.innerHTML = '';

// Header
var header = document.createElement('header');
var h1 = document.createElement('h1');
var span = document.createElement('span');
span.textContent = "Let's";
h1.appendChild(span);
h1.appendChild(document.createTextNode('TapMe For More....!!!!!'));
var p = document.createElement('p');
p.textContent = 'Click button Below';
header.appendChild(h1);
header.appendChild(p);
document.body.appendChild(header);

// Section
var section = document.createElement('section');
var container = document.createElement('div');
container.className = 'container';
var form = document.createElement('form');
form.setAttribute('action', '');
var button = document.createElement('button');
button.id = 'btn';
button.textContent = 'Hit-Me';
form.appendChild(button);
container.appendChild(form);
section.appendChild(container);
document.body.appendChild(section);

// Modal
var modal = document.createElement('div');
modal.className = 'modal';
modal.style.display = 'none';
var modalContent = document.createElement('div');
modalContent.className = 'modal-content';
var close = document.createElement('span');
close.className = 'close';
close.innerHTML = '&times;';
var modalH1 = document.createElement('h1');
modalH1.textContent = 'Hello World!!!';
var hr = document.createElement('hr');
var modalP = document.createElement('p');
modalP.textContent = `The year is 2027, and the city of Kyoto has undergone tremendous technological advancement.`;
modalContent.appendChild(close);
modalContent.appendChild(modalH1);
modalContent.appendChild(hr);
modalContent.appendChild(modalP);
modal.appendChild(modalContent);
document.body.appendChild(modal);

// Add CSS styles dynamically
var style = document.createElement('style');
style.textContent = `
    body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 50px;
        margin-top: 14%;
    }
    header h1 span {
        color: #ff6347;
    }
    .container {
        margin-top: 20px;
    }
    button {
        background-color: #4CAF50;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
        border: none;
        border-radius: 4px;
    }
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        display: none;
        justify-content: center;
        align-items: center;
    }
    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        text-align: left;
        width: 80%;
        max-width: 600px;
        margin: auto;
    }
    .close {
        float: right;
        font-size: 28px;
        font-weight: bold;
        cursor: pointer;
    }
    .close:hover {
        color: red;
    }
`;
document.head.appendChild(style);

// Select the necessary elements
var btn = document.getElementById("btn");

// Add event listeners for opening and closing the modal
btn.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
modal.addEventListener("click", closeModal);

// Function to open the modal
function openModal(e) {
    e.preventDefault();
    modal.style.display = "flex";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
}