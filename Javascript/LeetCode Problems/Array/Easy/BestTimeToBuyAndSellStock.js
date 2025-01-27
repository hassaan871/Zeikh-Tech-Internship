// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function(prices) {
//     let smallest = prices[0];
//     let indexOfSmallest = 0;
//     let largest;
//     for (let index = 0; index < prices.length; index++) {
//         if(prices[index] < smallest){
//             smallest = prices[index];
//             indexOfSmallest = index;
//             largest = smallest;
//         }
//     }
//     for (let index = indexOfSmallest; index<prices.length; index++){
//         if(largest< prices[index]){
//             largest = prices[index];
//         }
//     }

//     return largest - smallest;

// };

// const prices = [7,1,5,3,6,4];
// const result = maxProfit(prices);

// console.log(result);


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let largest = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            if (prices[j] - prices[i] > largest)
                largest = prices[j] - prices[i]
        }
    }

    return largest;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7,6,4,3,1]));
console.log(maxProfit([2,4,1]));
