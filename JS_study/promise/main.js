// function a(callback) {
//   setTimeout(() => {
//     console.log('A')
//     callback()
//   } , 1000)

// }

// function b(callback) {
//   setTimeout(() => {
//     console.log('B')
//     callback()
//   } , 1000)

// }
// a(function() {
//   b(function () {
//     console.log('done!')
//   })
// })

// // function b() {
// //   console.log('B')
// // }

// // a(function() {
// //   b()
// // })


// // 동기방식 : 작성순서대로 실행
// // 비동기방식 : 순서는 A B인데 console에는 B A 실행
// // a()
// // b()