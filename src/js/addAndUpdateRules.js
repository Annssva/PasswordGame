
export function updateRuleStatus(ruleId, hasPassed) {
    const ruleDiv = document.getElementById(`rule-${ruleId}`);
    const ruleDivTitle = document.getElementById(`rule-title-${ruleId}`);

    if (hasPassed) {
        ruleDiv.classList.add('rule-done');
        ruleDivTitle.classList.add('rule-done-title');
    } else {
        ruleDiv.classList.remove('rule-done');
        ruleDivTitle.classList.remove('rule-done-title');
    }
}

export function addRule(ruleId, ruleText, rulesDiv) {
    if (document.getElementById(`rule-${ruleId}`) === null) {
        rulesDiv.insertAdjacentHTML('afterbegin',
            `<div class="rule" id="rule-${ruleId}">
                <h1 class="rule-title" id="rule-title-${ruleId}">
                    Rule ${ruleId}
                </h1>
                <h1 class="rule-text">
                    ${ruleText}
                </h1>
            </div>`);
    }
}
