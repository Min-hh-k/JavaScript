//사용할 변수
let ran = 0;
let count = 1;

//윈도우가 로드된 후 실행하기위함.
window.onload = function () {
    // 원하는 객체 불러오기
    const userNum = document.querySelector("#user_num"); //입력받는 곳
    const startButton = document.querySelector("#start_button");// 시작버튼
    const gameForm = document.querySelector("#game_form");// 입력받는 form(submit)
    gameForm.firstElementChild.disabled = true;
    gameForm.lastElementChild.disabled = true;

    // 원하는 객체에 이벤트 리스너 호출
    startButton.addEventListener('click', gameStart);
    gameForm.addEventListener('submit', gameCheck);
}

// 게임 시작
// 랜덤 숫자를 할당하고 count값 및 창의 내용 초기화
function gameStart () {
    ran = Math.floor(Math.random()*100 + 1) // 랜덤한 수 생성
    count = 1
    const gameForm = document.querySelector("#game_form");// 입력받는 form(submit)
    gameForm.firstElementChild.disabled = false;
    gameForm.lastElementChild.disabled = false;
    console.log(ran) //맞출 숫자
    //explan 내용 수정
    const explan = document.querySelector('#explan');
    explan.textContent = "게임 스타트! 1~100 사이의 수를 입력하세요"
}

//랜덤 숫자와 입력된 값 확인
function gameCheck(e) {

    // 객체 가져와서 > 객체 값으로 ran 값 비교 > if 문 으로 DOM 수정
    e.preventDefault();     // submit 으로 들고오면 창 새로고침 발생 방지
    const explan = document.querySelector('#explan');
    const userNum = document.querySelector('#user_num');
    const result = document.querySelector('#result');
    
    //DOM 값으로 ran 값 비교
    userNum.value
    //if문 
        if ( userNum.value == String) {
            explan.textContent = `숫자를 입력해주세요^^`
        }
        else if (ran > userNum.value) {
            explan.textContent = `${userNum.value}보다 값이 더 큽니다`
        }
        else if (ran < userNum.value) {
            explan.textContent = `${userNum.value}보다 값이 더 작습니다`
        }
        else if (ran == userNum.value) {
            explan.textContent = `${userNum.value}^^ 정답입니다!`
            userNum.disabled = true
            userNum.nextElementSibling.disabled = true

            //prompt 열어 이름 입력
            //새로운 노드 생성하여 ul 안에 li로 이름과 횟수 기록
            let nameLog = prompt('이름을 입력하세요!')
            let scoresTag = document.createElement('li')
            document.querySelector('#results').appendChild(scoresTag)
            scoresTag.textContent = `${nameLog}님 ${count}회 성공!`
        }
        result.textContent = `${count++}번째 시도중!`
        //count++;
    userNum.value = "";
    
}
