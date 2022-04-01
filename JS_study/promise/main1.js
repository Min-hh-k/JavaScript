// function a(callback) {
//   setTimeout(() => {
//     console.log('A')
//     callback()
//   } , 1000)
// }

function a() {
  //promise : 약속의 객체 
  return new Promise(function (resolve) { //call back ; resolve
    setTimeout(function () {
      console.log('A')
      resolve('hello A')
    }, 1000)
  })
}

function b() {
  //promise : 약속의 객체 
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('B')
      resolve('hello B')
    }, 1000)
  })
}

function c() {
  //promise : 약속의 객체 
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('C')
      resolve('hello C')
    }, 1000)
  })
}

function d() {
  //promise : 약속의 객체 
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('D')
      resolve('hello D')
    }, 1000)
  })
}

async function test() {
  const h1 = await a()
  const h2 = await b()
  const h3 = await c()
  const h4 = await d()
  console.log('done!')
  console.log(h1, h2, h3, h4)
}
test()

// function b() {
//   console.log('B')
// }


// async function test() {
//   const res = await a()
//   console.log('res', res)
//   b()
// }

// test()