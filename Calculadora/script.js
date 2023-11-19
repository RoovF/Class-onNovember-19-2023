function calculate(event){
    event.preventDefault();

    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operator = document.getElementById('operator').value;
    var result;

    switch (operator){
        case 'add':
            result = num1 + num2;
            break;
            
            case 'substract':
            result = num1 - num2;
            break;

        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Não é possível dividir por zero';
            }
            break;
        default:
            result = 'Selecione uma operação';
            break;   

    }
    const resultado = document.getElementById('result').innerText = 'Resultado: ' + result;
    console.log(resultado);
}