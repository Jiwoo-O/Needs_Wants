const needRange = document.getElementById('needRange');
const wantRange = document.getElementById('wantRange');
const updateButton = document.getElementById('updateButton');
const needValue = document.getElementById('needValue');
const wantValue = document.getElementById('wantValue');
const environment = document.getElementById('environment');
const wealthFactor = document.getElementById('wealthFactor');
const poorFactor = document.getElementById('poorFactor');

wantRange.addEventListener('input', updateNeed);
needRange.addEventListener('input', updateWant);

function updateNeed() {
    let want = parseInt(wantRange.value);
    let need = 100 - want; // 항상 Want 값과 Need 값의 합은 100이 되도록 함
    
    needRange.value = need; // Need 값 갱신
    needValue.textContent = `Need: ${need}`; // Need 값 표시
    updateFactors(need, want);
}

function updateWant() {
    let need = parseInt(needRange.value);
    let want = 100 - need; // 항상 Want 값과 Need 값의 합은 100이 되도록 함
    
    wantRange.value = want; // Want 값 갱신
    wantValue.textContent = `Want: ${want}`; // Want 값 표시
    updateFactors(need, want);
}

function updateValues() {
    const need = parseInt(needRange.value);
    const want = parseInt(wantRange.value);
    
    needValue.textContent = `Needs: ${need}`;
    wantValue.textContent = `Wants: ${want}`;
    updateFactors(need, want);

    // 환경 계산 (간단한 예시)
    let environmentStatus = "-";
    if (need > 70 && want < 30) {
        environmentStatus = "Securing and improving the quality of life for all";
    } else if (need >= 30 && want <= 70) {
        environmentStatus = "Improved circumstances";
    } else if (need < 30 && want > 70) {
        environmentStatus = "Resentment, rebellion and repression";
    }
    environment.textContent = `A Permanent Earth for Everyone: ${environmentStatus}`;
}

function updateFactors(need, want) {
    const wealth = 45 + need * 0.35 + want * 0.5;
    const poor = 10 + need * 0.7 - want * 0.1;
    
    wealthFactor.style.width = `${wealth}%`;
    poorFactor.style.width = `${poor}%`;
}

updateButton.addEventListener('click', updateValues);
