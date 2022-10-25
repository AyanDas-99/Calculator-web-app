const controls = document.querySelector('#controls');
const operationsDisplay = document.querySelector('.current');

controls.addEventListener('click', doit);

function doit(item) {
    const element = item.target;
    const character = element.textContent;
    if (element.classList.contains('btn')) {
        if (element.classList.contains('func')) {
            switch (element.textContent) {
                case 'C':
                    operationsDisplay.textContent = ''
                    break;
                case '=':
                    operationsDisplay.textContent = (eval(operationsDisplay.textContent))
                    break;
                default:
                    display(character)
            }
        } else {
            display(character)
        }
    }
}

function display(text) {
    operationsDisplay.textContent += text;
}
