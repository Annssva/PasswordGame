import { inputPassword } from "./game.js";
import { rulesDiv } from "./game.js";
import { addRule } from "./addAndUpdateRules.js";
import { updateRuleStatus } from "./addAndUpdateRules.js";
import{ specialCharacters } from "./consts.js";

const rules = [
    () => inputPassword.value.length >= 5,
    () => /[0-9]/.test(inputPassword.value) // Проверка на наличие хотя бы одной цифры
];
const ruleDivs = [];
export function checkRules() {
    console.log(inputPassword.value)
    if(inputPassword.value.length >= 5){
        console.log('yes 1')
        updateRuleStatus(1, true);
        addRule(2, 'Your password must include a number.', rulesDiv);

    } else if (!(inputPassword.value.length >= 5)){
        console.log('no 1');
        updateRuleStatus(1, false);
        }
    if(/[0-9]/.test(inputPassword.value) && document.getElementById(`rule-2`) !== null){
        console.log('yes 2')
        updateRuleStatus(2, true);
        addRule(3, 'Your password must include an uppercase letter.', rulesDiv);

    } else if(!(/[0-9]/.test(inputPassword.value)) && document.getElementById(`rule-2`) !== null){
        console.log('no 2')
        updateRuleStatus(2, false);
    }
    if (/[A-Z]/.test(inputPassword.value) && document.getElementById(`rule-3`) !== null){
        console.log('yes 3')
        updateRuleStatus(3, true);
        addRule(4, 'Your password must include a special character.', rulesDiv);

    } else if(!(/[A-Z]/.test(inputPassword.value)) && document.getElementById(`rule-3`) !== null){
        console.log('no 3')
        updateRuleStatus(3, false);
    }
    if(specialCharacters.test(inputPassword.value) && document.getElementById(`rule-4`) !== null){
        console.log('yes 4')
        updateRuleStatus(4, true);
        addRule(5, 'The digits in your password must add up to 19.', rulesDiv);
    } else if(!(specialCharacters.test(inputPassword.value)) && document.getElementById(`rule-4`) !== null){
        console.log('no 4')
        updateRuleStatus(4, false);
    }
    const passwordNumbers = inputPassword.value.split('').filter(char => /\d/.test(char))
    let numbersSum = 0
    for(let number of passwordNumbers){
        number = Number(number)
        numbersSum += number
        console.log(numbersSum)
    }
    if (numbersSum === 19 && document.getElementById(`rule-5`) !== null){
        console.log('yes 5')
        updateRuleStatus(5, true);
        // addRule(5, 'The digits in your password must add up to 25.', rulesDiv);
    } else if(numbersSum !== 19 && document.getElementById(`rule-5`) !== null){
        console.log('no 4')
        updateRuleStatus(5, false);
    }

}