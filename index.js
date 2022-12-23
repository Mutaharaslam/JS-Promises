let s  =  new Promise((resolve, reject) => {
        let a = 1 + 2;
        if (a == 3){
            resolve('Promise Resolved')
        } else{
            reject('Promise Broken')
        }
    })
    s.then((message) =>{
        console.log('Success' + message)
    }).catch((message) =>{
        console.log('Failed' + message)
    })



// Lets take another example that makes sense

function watchTutorialCallback(callback, errorCallback) {
  let userLeft = true
  let userWatchingCatMeme = true

  if (userLeft) {
    errorCallback({
      name: 'User Left', 
      message: ':('
    })
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: 'User Watching Cat Meme',
      message: 'WebDevSimplified < Cat' 
    })
  } else {
    callback('Thumbs up and Subscribe')
  }
}

watchTutorialCallback(message => {
  console.log(message)
}, error => {
  console.log(error.name + ' ' + error.message)
})


// Above Code with Promise Now
function watchTutorialPromise() {
  let userLeft = false
  let userWatchingCatMeme = false
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User Left', 
        message: ':('
      })
    } else if (userWatchingCatMeme) {
      reject({
        name: 'User Watching Cat Meme',
        message: 'WebDevSimplified < Cat' 
      })
    } else {
      resolve('Thumbs up and Subscribe')
    }
  })
}

watchTutorialPromise().then(message => {
  console.log(message)
}).catch(error => {
  console.log(error.name + ' ' + error.message)
})


// const recordVideoOne = new Promise((resolve, reject) => {
//   resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve('Video 3 Recorded')
// })

// Promise.all([
//   recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree
// ]).then(messages => {
//   console.log(messages)
// })

// Promise.race([
//   recordVideoOne,
//   recordVideoTwo,
//   recordVideoThree
// ]).then(message => {
//   console.log(message)
// })
