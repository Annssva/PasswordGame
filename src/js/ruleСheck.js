import { inputPassword } from "./game.js";
import { rulesDiv } from "./game.js";
import { addRule } from "./addAndUpdateRules.js";
import { updateRuleStatus } from "./addAndUpdateRules.js";
import{ specialCharacters } from "./consts.js";
import { months } from "./consts.js";
import { romanNumerals } from "./consts.js";

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
        addRule(6, 'Your password must include a month of the year.', rulesDiv);
    } else if(numbersSum !== 19 && document.getElementById(`rule-5`) !== null){
        console.log('no 5')
        updateRuleStatus(5, false);
    }

    const wordsOnly = inputPassword.value.match(/[A-Za-z]+/g);

    if (wordsOnly) {
        const lowercaseWords = wordsOnly.map(word => word.toLowerCase());

        const foundMonth = lowercaseWords.find(word => months.some(month => word.includes(month)));

        if (foundMonth && document.getElementById('rule-6') !== null) {
            updateRuleStatus(6, true);
            addRule(7, 'Your password must include a roman numeral.', rulesDiv);
        } else if (!foundMonth && document.getElementById('rule-6') !== null) {
            updateRuleStatus(6, false);
        }
    } else {
        console.log('No words found.');
    }

    if(romanNumerals.test(inputPassword.value) && document.getElementById(`rule-7`) !== null){
        updateRuleStatus(7, true);
        // addRule(5, 'The digits in your password must add up to 19.', rulesDiv);
    } else if(!(romanNumerals.test(inputPassword.value)) && document.getElementById(`rule-7`) !== null){
        updateRuleStatus(7, false);
    }
}

// Your password must include a month of the year.
// Your password must include a roman numeral.
// Your password must include one of our sponsors: