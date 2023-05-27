
const displayValorAnterior = document.querySelector('#valor-anterior');
const displayValorActual = document.querySelector('#valor-actual');
const btnNumbers = document.querySelectorAll('.number');
const btnOperators = document.querySelectorAll('.operator');


const display = new Display(displayValorAnterior, displayValorActual);



btnNumbers.forEach(btn => {
    btn.addEventListener('click', () => {
        display.agregarNumero(btn.innerHTML);
    });
});


btnOperators.forEach(btn => {
    btn.addEventListener('click', () => {
        display.computar(btn.value);
    });
});