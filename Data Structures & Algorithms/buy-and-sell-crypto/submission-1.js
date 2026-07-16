class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = Infinity;
        let profit = 0;

        for(let i = 0; i < prices.length; i++){
            if(buy > prices[i]){
                buy = prices[i];
            }else{
                let currentProfit = prices[i] - buy;
                if(profit < currentProfit){
                    profit = currentProfit;
                }
            }
            console.log(buy)
        }
        return profit;
    }
}
