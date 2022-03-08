/*
const todoInput = document.querySelector('#memo-form input')
const todoBtn = document.querySelector('#todo-button')

const todoBoard = document.querySelector('#todo-board')

//todoBtn.addEventListener('click',todoFormButton)

function todoFormButton() {
  // 버튼을 눌렀을때 li 요소 생성
  const li = document.createElement("li")
  //체크 박스
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  //체크박스 이벤트리스너 추가
  checkbox.addEventListener('click',todoCheck)
  //내용 : createTextNode로 작성
  const text = document.createTextNode(todoInput.value)
  //X버튼
  const button = document.createElement("button")
  button.textContent = "X";
  //X버튼 이벤트리스너
  button.addEventListener('click',todoDelete)
  //li 에 체크박스와 내용의 X버튼 추가
  li.appendChild(checkbox)
  li.appendChild(text)
  li.appendChild(button)
 //ul에 li 추가
  todoBoard.appendChild(li)
  todoInput.value = "" // 다음 값 초기화
}

function todoCheck(event) {
  const checkbox = event.target
  if (checkbox.checked) {  
    // 체크박스가 checked 되면 li의 색이 gray + ㅡ 줄긋기
    checkbox.parentNode.style.color = "lightgray"
    checkbox.parentNode.style.textDecoration = "line-through";

  }
  else if (checkbox.checked == false) {
     //체크박스가 checked == fasle 되면 li색이 black
    checkbox.parentNode.style.color = "aliceblue"
    checkbox.parentNode.style.textDecoration = "none";
  }
}

function todoDelete(event) {
  //checkbox 를 통해 li를 찾아 삭제(remove)
  event.target.parentNode.remove();
} 
*/

$("#todo-button").on('click', function () {
  const checkbox = $("<input>").prop("type","checkbox")
  checkbox.on('click', function (event) {
    if(event.target.checked) {
      checkbox.parent().css("color", "lightgray")
    } else {
      checkbox.parent().css("color", "black")
    }
  })
  const button = $("<button>").text("X")
  button.on('click', function (event) {
    event.target.parentNode.remove();
  })
  const todo = $("#memo-form input:first").prop("value")

  $("#todo-board").append(
    $("<li>").append(checkbox).append(todo).append(button))

})