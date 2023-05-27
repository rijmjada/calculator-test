class Display {

    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorAnterior = displayValorAnterior;
        this.displayValorActual = displayValorActual;
        this.calculadora = new Calculadora();
        this.operacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
    }

    borrarNumero() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.operacion = undefined;
        this.imprimirValores();

    }

    agregarNumero(numero) {
        if (numero === '.' && this.valorActual.includes('.')) return;
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = this.valorAnterior;
    }


    calcularOperacion() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorAnterior)) return;
        this.valorActual = this.calculadora[this.operacion](valorAnterior,valorActual);
    }

    computar(tipo) {
        this.operacion !== 'igual' && this.calcularOperacion();
        this.operacion = tipo;
        this.valorAnterior = this.valorActual || this.displayValorAnterior;
        this.valorActual = '';
        this.imprimirValores();

    }
}