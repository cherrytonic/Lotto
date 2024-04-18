// 버튼 클릭 이벤트에 연결
const btn = document.getElementById("buttonId");
const result1 = document.getElementById("result1");
const gameNumbers = document.querySelectorAll(".game-winnumbers .pick-number");

// 로또 번호 추출 메서드
function getLottonumbers() {
    let lottoNumbers = [];
    while (lottoNumbers.length < 6) {
        let random = Math.floor(Math.random() * 45) + 1;
        if (!lottoNumbers.includes(random)) {
            lottoNumbers.push(random);
        }
    }
    lottoNumbers.sort((a, b) => a - b); // sort 숫자 오름차순으로 변경
    return lottoNumbers;
}
// 로또 번호를 클래스에 반영할 메서드
function updateGameNumbers(lottoNumbers) {
    const gameNumbers = document.querySelectorAll(".game-winnumbers .pick-number");

    gameNumbers.forEach((span, index) => {
        span.textContent = lottoNumbers[index]; // 기본 숫자를 새로운 로또 번호로 변경
        const numberClass = `number-${Math.floor((lottoNumbers[index] - 1) / 10) + 1}`; // 번호대에 맞게 색깔 변경
        span.className = "pick-number " + numberClass; // 클래스를 동적으로 설정
    });
    const marked = document.querySelectorAll(".game .number-wrap")
    marked.forEach((div, index) => {
        const number = index + 1; 
        if (lottoNumbers.includes(number)) { // 로또 번호에 마킹 클래스를 설정
            div.classList.add("on"); 
        } else {
            div.classList.remove("on"); 
        }
    });
}
btn.addEventListener("click", function () {
    const lottoNumbers = getLottonumbers();
    result1.innerText = lottoNumbers.join(', '); // 테스트용 결과 출력
    updateGameNumbers(lottoNumbers);
});
