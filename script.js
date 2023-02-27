let a = ''; //firstNumber
let b = ''; //secondNumber
let sign = '';
let finish = false;
const answer = document.querySelector("#suma"); //Take answer <p>

//massives of btn_txtContent
const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."]
const signs = ["AC", '+/-', "%", "/", "x", "-", "+", "="]

//checker
document.querySelector('.buttons').onclick = (event) => {
    if (!event.target.classList.contains('button')) return;

    const key = event.target.textContent;

    //if 0-9 or . pressed
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;

            if (Number(a) > 9999999) {
                answer.textContent = Number(a).toExponential(1);
            } else answer.textContent = Number(a); 

        } else if (finish) {
            b = key;
            finish = false;
            answer.textContent = b;
        } else {
            b += key;

            if (Number(b) > 9999999) {
                answer.textContent = Number(b).toExponential(1);
            } else answer.textContent = Number(b); 
        }
        return;
    }

    //if sign pressed
    if (signs.includes(key) && key !== '=') {
        answer.textContent = key;
        console.log(a, sign, b)
        sign = key;
        
        switch (sign) {
            //AC
            case "AC":
                a = '0';
                b = '';
                sign = '';
                finish = false;
                answer.textContent = 0;
                break;
            //+0 -> -0
            case "+/-":
                a -= a*2;
                answer.textContent = a;
                break;            
            //1% of a 
            case "%":
                a /= 100;
                answer.textContent = a;
                break;
        }

    //calculate answer
    } else if (key === '=') {
        if (a === '' || b === '' || sign === '') return;

        switch (sign) {
            //a / b 
            case "/":
                a /= b;
                break;                  
            //a x b 
            case "x":
                a *= b;
                break;
            //a - b 
            case "-":
                a -= b;
                break;
            //a + b
            case "+":
                a += (+a) + (+b);
                break;
                }
            finish = true;

            if (a == 'Infinity') {
                a = 0;
                answer.textContent = 'Помилка';
            } else answer.textContent = a;  

        if (Number(a) > 9999999) {
            answer.textContent = Number(a).toExponential(1);
        } else answer.textContent = Number(a);     
    }
}