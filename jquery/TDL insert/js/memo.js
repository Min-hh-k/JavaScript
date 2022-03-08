const memoBoard = document.querySelector("#memo-board");
const memoForm = document.querySelector("#memo-form");
const memoInput = document.querySelector("#memo-form input");

function memoFormSubmit (event) {
  event.preventDefault();
  console.log(memoInput.value);

  //새로운 요소(태그)를 만들어서 memoBoard 추가(div요소)
  //createElement 를 통해 요소 생성
  let memo = document.createElement("div");
  
  // memoBoard 에 요소 추가
  memoBoard.appendChild(memo);
  // 추가된 memo 요소에 html값 추가
  memo.innerHTML = memoInput.value; //사용자 입력값
  memoInput.value = ""; //문자열
  //console.dir(memoInput)
  memoInput.autofocus = true;

  const button = document.createElement("button")
  button.textContent = "X";
  //X버튼 이벤트리스너
  button.addEventListener('click',memoDelete)
  //memo 에 X버튼 추가
  memo.appendChild(button)
}

function memoDelete(event) {
  //div 를 찾아 삭제(remove)
  //parentNode == div, 빼면 X버튼만 사라짐
  event.target.parentNode.remove(); 
} 

//memoForm.addEventListener('submit', memoFormSubmit);

$("#memo-form").on('submit', function (event) {
  event.preventDefault()

  const memo = $("#memo-form input:first").prop("value")
  $("#memo-board").append(
    $("<div>").html(memo)
    );
  $("#memo-form input:first").prop("value","")
});