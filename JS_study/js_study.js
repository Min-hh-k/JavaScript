//기본 DOM API

//hTML 요소 1개 찾기 검색
const boxEL = document.querySelector('.box');

//HTML 요소에 적용할 수 있는 메소드
boxEL.addEventListener() ;

//인수(Arguments)를 추가 가능
boxEL.addEventListener(1,2);

// 1 - 이벤트(Event, 상황)
boxEL.addEventListener('click', 2);

//2 - 핸들러(Handler, 실행할 함수)
boxEL.addEventListener('click', function() {
  console.log('click~!');
})

// HTML 요소 모두 검색/찾기
const boxEls = document.querySelectorAll('.box')
console.log(boxELs)

//찾은 요소들 반복해서 함수 실행
// 익명 함수를 인수로 추가
boxEls.forEach(function () {})

//첫째 매개변수(boxEl) : 반복 중인 요소
//둘째 매개변수(index) : 반복 중인 번호
boxEls.forEach(function (boxEl, index) {});
//출력
boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index +1}`)
  console.log(index, boxEl)
});

//값을 얻는 용도 getter
console.log(boxEl.textContent);

//값을 지정하는 용도 setter
boxEl.textContent = 'hero';
console.log(boxEl.textContent);



const boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function() {
  console.log('click!')
});

boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active')
console.log(isContains); //true

boxEl.classList.remove('active');
let isContains = boxEl.classList.contains('active')
console.log(isContains); //false


const a = "hello~"
//split : 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse : 배열을 뒤지빅.
// join : 배열을 인수 기준으로 문자로 병합해 반환.
const b = a.split('').reverse().join(''); // 메소드 체이닝(체인처럼 연결)

console.log(a); // hello~
console.log(b); // ~olleh


function user(first, last) {
  this.firstName = first
  this.lastName = last
}
user.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const heropy = new user('heropy','park')
const amy = new user('amy','clarke')
const neo = new user('neo','boost')

console.log(heropy.getFullName())
console.log(amy.getFullName())
console.log(neo.getFullName())