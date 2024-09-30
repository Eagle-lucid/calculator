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
         else if(['+', '-', '*', '/'].includes(value)) {
            if(currentInput) {
                previousInput = currentInput;
                currentInput = '';
            }
            operator = value;
            display.textContent = operator;
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
          //  handle the parentheses ()
          else if(value === 'openBracket' || value === 'closeBracket') {
            currentInput += value  === 'openBracket' ? '(' : ')';
            display.textContent = currentInput;
          }
          //handle the equal button (=)
          else if(value === 'equal') {
            if(currentInput && previousInput && operator) {
                let result = eval(`${previousInput} ${operator} ${currentInput}`);
                display.textContent = result;
                currentInput = result;
                previousInput = '';
                resultDisplayed = true;
            }
          }
    });
});