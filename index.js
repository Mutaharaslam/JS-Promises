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
