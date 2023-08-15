import autosize from 'autosize';
import { checkRules } from "./ruleСheck.js";
export const rulesDiv = document.getElementById('rulesDiv')
export const inputPassword = document.getElementById("textAreaForPassword");

export const startGame = () => {
    autosize(inputPassword);

    if (document.getElementById('rule-1') === null){
        rulesDiv.innerHTML += `<div class="rule" id="rule-1">
                    <h1 class="rule-title" id="rule-title-1">
                        Rule 1
                    </h1>
                    <h1 class="rule-text">
                        Your password must be at least 5 characters.
                    </h1>
                </div>`
    }

    checkRules()
}


