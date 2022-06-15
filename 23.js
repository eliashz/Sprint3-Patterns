let coins = [2,3,5,7]
let amount = 17

const coinCombo = (coins, amount) => {
    let sum = sumTotal = 0;
    let totalArray = [];
    //do {    
        for (const coin of coins) {
            if (sum+coin <= amount) {
                console.log(coin)
                sum += coin
                totalArray.push(coin)
            }
        }
        console.log(amount)
        console.log(sum)
    //} while (sum !== amount)

 /*    for (const total of totalArray) {
       
    } */
    
}

//coinCombo(coins, amount)
coinCombo([2,3,5], 11)