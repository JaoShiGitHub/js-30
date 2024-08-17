// 2704. To Be Or Not To Be
// https://leetcode.com/problems/to-be-or-not-to-be/description/?envType=study-plan-v2&envId=30-days-of-javascript

const expect = val => {
    return {
        toBe: tbVal => val === tbVal ? `{"value": true}` : `{"error": "Not Equal"}`,
        notToBe: ntbVal => val !== ntbVal ? `{"value": true}` : `{"error": "Equal"}`
    }
};
