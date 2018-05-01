document.getElementById('calculate-button').onclick = function() {
    // Get numbers we'll use for calculations.
    let elem1 = parseInt(document.getElementById('elem-1').value);
    let elem2 = parseInt(document.getElementById('elem-2').value);
    let choice = document.querySelector('input[name="operation"]:checked');
    let operation = choice.value;

    //alert when any box is blank and replaces NaN
    if(isNaN(elem1)) {
        alert('Ops! É necessário dois valores para de fazer a operação matemática!');
    } else if(isNaN(elem2)) {
        alert('Ops! É necessário dois valores para de fazer a operação matemática!');
    } else {

    	//based on the operation that was chosen
        let choice = document.querySelector('input[name="operation"]:checked');
        let operation = choice.value;

        // Will calculate and display result for us
        let result = getResult(elem1, elem2, operation);
        document.getElementById('result').innerHTML = result;
    }
}

function getResult(elem1, elem2, symbol) {
    if(symbol === '+') {
        return elem1 + elem2;
    } else if (symbol === '-') {
        return elem1 - elem2;
    } else if (symbol === '*') {
        return elem1 * elem2;
    } else if (symbol === '/') {
        return elem1 / elem2;
    }
}
