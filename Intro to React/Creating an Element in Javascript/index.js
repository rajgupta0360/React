
const heading = document.createElement('h2');
heading.className = 'header';
heading.textContent = 'Hello';

// Accessing the element of html
const root = document.getElementById('root');
root.append(heading);