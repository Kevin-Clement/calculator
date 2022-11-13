const result = document.querySelector('#result');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator'); 

function handleClickNumber() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            return result.value = result.value + number.innerHTML;
        });
    });
}

handleClickNumber();

function handleClickOperator() {
    operators.forEach((number) => {
        number.addEventListener('click', () => {
            switch (number.innerHTML) {
                case '.':
                    if(result.value.includes('.'))
                        return;
                    return result.value = result.value + number.innerHTML;
                case '+':
                    return result.value = result.value + number.innerHTML;
                case '-':
                    return result.value = result.value + number.innerHTML;
                case '*':
                    return result.value = result.value + number.innerHTML;
                case '/':
                    return result.value = result.value + number.innerHTML;
                case '=':
                    try {
                        if(result.value === '' || result.value === 'Error')
                            return;
                        if(isNaN(eval(result.value)))
                            return result.value = 'Error';
                        return result.value = eval(result.value);
                    } catch (error) {
                        return result.value = 'Error';
                    }
                case 'CE':
                    return result.value = '';
                case 'C':
                    return result.value = result.value.slice(0, -1);
            }  
        });
    });
}

handleClickOperator();

