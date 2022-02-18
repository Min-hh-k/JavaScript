   //명시적 함수
    //함수를 호출하기전에 선언문은 head 의 script 안에 작성 
    //미리준비

    function hi (num) { //num : 매개변수로 사용
      document.write(`<p>${num}hi</p>`)
    }
    function squr (num) { //num : 매개변수로 사용
      return num * num // 함수의 결괏값을 되돌려준다
    }
    
    //인수를 몇개 사용하는지 모를떄
    //여러개의 인수가 들어올 떄
    function add() { //여러개의 인수는 arguments에 배열로 저장
      let count = arguments.length
      let sum = 0
      for (num of arguments) { //배열이기 때문에 for ... of 사용가능
        sum += num
      }
      document.write(`총갯수: ${count}, 합: ${sum}`)
    }