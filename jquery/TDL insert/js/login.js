const loginForm  = document.getElementById("login-form"); //getElementById 를 이용하면 HTML 의 아이디 값을 가져올 수 있다
const loginInput = document.querySelector("#login-form input"); //querySelector 을 이용하면 css 선택자를 이용해서 요소의 첫번째 태그를 선택 할 수 있다.
const greeting = document.querySelector("#greeting");
const memoFormShow = document.querySelector("#memo-form");

// input 의 값 가져오기
function onLoginSubmit (event) {  //console.dir(loginInput) 안에 있는 속성 값 확인
  event.preventDefault(); // 창을 새로 띄우지 않음

  //loginInput 에서 value 값 가져오기
  const username = loginInput.value;

  greeting.innerHTML = `반갑습니다. ${username}님`;   //greeting.innerHTML = "반갑습니다" + username + "님"
  loginForm.classList.add("hidden"); //class="hidden" ,, classList 는 태그에 class 를 추가하거나 제거하는 메서드
  memoFormShow.classList.remove("hidden")
}


// 이벤트 리스너: 이벤트가 발생하는지 듣고 있는 메소드
// 이벤트가 발생할 때 그 함수를 실행시켜 줌
// 어디에 이벤트가 발생하면, 어떤 함수 실행시켜야 하는지
// loginForm.addEventListener('submit', onLoginSubmit);


//제이쿼리 수정
$("#login-form").on('submit', function (event) {
  event.preventDefault();
  const username = $("#login-form input").prop("value");
  $("#greeting").text(`반갑습니다. ${username}님`)

  $("#login-form").addClass("hidden")
  $("#memo-form").removeClass("hidden")
})