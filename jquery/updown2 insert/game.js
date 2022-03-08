//사용할 변수
let ran = 0;
let count = 1;

//윈도우가 로드된 후 실행하기위함.
$( function () {

    $("#start_button").on('click', function() {
        //rgb(r,g,b)
        const r = Math.floor(Math.random()*256); //0~255
        const g = Math.floor(Math.random()*256); //0~255
        const b = Math.floor(Math.random()*256); //0~255
        
        //start_button 의 css의 backgroundColor 값 랜덤하게 바꾸기
        $("#start_button").css("backgroundColor",`rgb(${r},${g},${b})`) //백틱으로 숫자값 지정

        // 메소드나 함수로 전달해 주는 것은 항상 값(문자열, 숫자, boolean)
        // 변수를 넣으면 변수의 값, 함수를 넣으면 함수의 결과 값이 전달

        ran = Math.floor(Math.random()*100 + 1) // 랜덤한 수 생성
        count = 1

    //게임 시작
    //입력받는 form(submit)
    $('#game_form').children().prop('disabled',false)
    //explan 내용 수정
    $("#explan").text("게임 스타트! 1~100 사이의 수를 입력하세요")
    })
    

    $('#game_form').on('submit', function(e) {
        e.preventDefault();
        const userNum = $("#user_num").prop("value");
        //attr() 문서 이미 작성된 고정값
        //prop() 바뀌는 값
        console.log(userNum)

        //if문    //DOM 값으로 ran 값 비교
        if (ran > userNum) {
            $("#explan").text(`${userNum}보다 값이 더 큽니다`)
        }
        else if (ran < userNum) {
            $("#explan").text(`${userNum}보다 값이 더 작습니다`)
        }
        else if (ran == userNum) {
            $("#explan").text(`${userNum}^^ 정답입니다`)
            $('#game_form').children().prop("disabled",true);

            //prompt 열어 이름 입력
            //새로운 노드 생성하여 ul 안에 li로 이름과 횟수 기록
            const nameLog = prompt('이름을 입력하세요!')
            $('#results').append($("<li>").text(`${nameLog}님 ${count}회 성공!`))
            }
        $('#result').text(`${count++}번째 시도중!`);
        $("#user_num").prop("value","");
        })
    $("#game_form").children().prop("disabled",true);
})
