import { inputPassword } from "./game.js";
import {rulesDiv} from "./game.js";

// const rules = [
//     () => inputPassword.value.length >= 5,
//     () => [1, 2, 3, 4, 5, 6, 7].some(number => inputPassword.value.includes(number))
// ];

const rules = [
    () => inputPassword.value.length >= 5,
    () => /[0-9]/.test(inputPassword.value) // Проверка на наличие хотя бы одной цифры
];
const ruleDivs = [];
export function checkRules() {
    console.log(inputPassword.value)
    if(inputPassword.value.length >= 5){
        console.log('yes 1')
        const ruleDiv = document.getElementById('rule-1')
        ruleDiv.classList.add('rule-done')
        const ruleDivTitle = document.getElementById('rule-title-1')
        ruleDivTitle.classList.add('rule-done-title')

        if (document.getElementById('rule-2') === null) {
            rulesDiv.insertAdjacentHTML('afterbegin', `<div class="rule" id="rule-${2}">
                    <h1 class="rule-title" id="rule-title-${2}">
                        Rule ${2}
                    </h1>
                    <h1 class="rule-text">
                        Your password must include a number.
                    </h1>
                </div>`)
        }
    } else if (!(inputPassword.value.length >= 5)){
            console.log('no 1')
            const ruleDiv = document.getElementById('rule-1')
            ruleDiv.classList.remove('rule-done')
            const ruleDivTitle = document.getElementById('rule-title-1')
            ruleDivTitle.classList.remove('rule-done-title')
        }
    if(/[0-9]/.test(inputPassword.value)){
        console.log('yes 2')
        const ruleDiv = document.getElementById('rule-2')
        ruleDiv.classList.add('rule-done')
        const ruleDivTitle = document.getElementById('rule-title-2')
        ruleDivTitle.classList.add('rule-done-title')
        if (document.getElementById('rule-3') === null) {
            rulesDiv.insertAdjacentHTML('afterbegin', `<div class="rule" id="rule-${3}">
                    <h1 class="rule-title" id="rule-title-${3}">
                        Rule ${3}
                    </h1>
                    <h1 class="rule-text">
                        Your password must include an uppercase letter.
                    </h1>
                </div>`)
        }

    } else if(!(/[0-9]/.test(inputPassword.value))){
        console.log('no 2')
        const ruleDiv = document.getElementById('rule-1')
        ruleDiv.classList.remove('rule-done')
        const ruleDivTitle = document.getElementById('rule-title-1')
        ruleDivTitle.classList.remove('rule-done-title')
    }

    // rules.some((rule, index) => {
    //     // if (rule(0)) {
    //     //
    //     //     }
    //     //
    //     // }
    //
    //     if(rule(1)){
    //         console.log(`1, ${index}`)
    //         const ruleDiv = document.getElementById('rule-2')
    //         ruleDiv.classList.add('rule-done')
    //         const ruleDivTitle = document.getElementById('rule-title-2')
    //         ruleDivTitle.classList.add('rule-done-title')
    //     } else if(!rule(1)) {
    //         console.log('no 2')
    //     }
    // });
}