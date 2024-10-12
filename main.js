// JavaScript for Theme Toggle
const themeToggler = document.querySelector('.theme-toggler');
const container = document.querySelector('.container');

themeToggler.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
});
// Javascript variables
let currentInput = '';
let previousInput = '';
let operator = '';
let resultDisplayed = false;

// Select element 
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

// function to handle the button when clicked

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.id;

        if(!isNaN(value) || value === '.') {
            if(resultDisplayed) {
                currentInput = value;
                resultDisplayed = false;
            } else {
                currentInput +=  value;
            }

            // shrink the text if too many digits
            if(currentInput.length > 8) {
                display.classList.add('shrink');
            } else {
                display.classList.remove('shrink');
            }
            display.textContent = currentInput;
        }  
         // Handle operators
         else if(['+', '-', '*', '/', 'openBracket', 'closeBracket'].includes(value)) {
            if (resultDisplayed && !isNaN(currentInput)) {
                resultDisplayed = false;
            }
           if(value === 'openBracket') {
            currentInput += '(';
           } else if(value === 'closeBracket') {
            currentInput += ')';
           } else {
             currentInput += value;
           }
           display.textContent =  currentInput
         }

         //handle the 'C' button clear
         else if(value === 'clear') {
            currentInput = '';
            previousInput = '';
            operator = '';
            display.textContent = '0';
         }
         // handle the backspace (←)
         else if(value === 'backSpace') {
            currentInput = currentInput.slice(0, -1);
            display.textContent = currentInput || '0';
         }
          //handle the equal button (=)
          else if(value === 'equal') {
           try {
            let result = eval(currentInput);
            display.textContent = result;
            currentInput = result.toString();
            resultDisplayed = true;
           } catch (error) {
              display.textContent = 'Error';
              currentInput = '';
           }
          }
    });
});