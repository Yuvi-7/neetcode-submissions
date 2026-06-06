class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0]; // 10
        let profit = 0;

        for(let i = 0; i < prices.length; i++){
                if(buy > prices[i]){
                    buy = prices[i];
                }

                if(buy < prices[i] && profit <  prices[i] - buy){
                    profit = prices[i] - buy;
                }
        }
        return profit;
    }
}
