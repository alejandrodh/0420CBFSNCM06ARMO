function dividir(num1, num2) {
    if (num2 === 0) {
        return 'No es posible dividir por 0.';
    } else {
        return num1 / num2;
    }

}

module.exports = dividir;