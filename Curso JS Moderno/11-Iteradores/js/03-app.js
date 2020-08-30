//fizz buzz

// 36912 fizz
// 5 10 15 20 buss
// 15 30 45

for (let i = 1 ; i < 100 ; i ++){
    if(i % 15 === 0){
        console.log(`${i} fizz buss `)
    }else if( i % 5 === 0 ) {
        console.log(`${i} buss`)
    }else if( i % 3 === 0){
        console.log(`${i} fizz`)
    }
}