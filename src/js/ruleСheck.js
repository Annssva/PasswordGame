import { inputPassword } from "./game.js";
import { rulesDiv } from "./game.js";
import { addRule } from "./addAndUpdateRules.js";
import { updateRuleStatus } from "./addAndUpdateRules.js";

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

    } else if(!(/[0-9]/.test(inputPassword.value))&& document.getElementById(`rule-2`) !== null){
        console.log('no 2')
        updateRuleStatus(2, false);
    }


}