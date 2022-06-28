const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Add red paragraph to container
//const redParagraph = document.createElement('p');
//redParagraph.textContent = "Hey I'm red!"
//redParagraph.style.color = 'red'
//container.append(redParagraph)

// Add blue h3 to container
const heading3 = document.createElement('h3')
heading3.textContent = "I'm a blue h3!"
heading3.style.color = "blue"
container.append(heading3)

// Add styled div with multiple elements inside
const containContainer = document.createElement('div')
containContainer.style.border = '1px solid black'
containContainer.style.backgroundColor = 'pink'


// h1 inside div
const heading1 = document.createElement('h1')
heading1.textContent = "I'm in a div"
containContainer.append(heading1)

const divP = document.createElement('p')
divP.textContent = "ME TOO!"
containContainer.append(divP)

container.append(containContainer)

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
  alert("Hello World");

});