var combinationSum2 = function(candidates, target) {
    let results = [];

    candidates.sort((a, b) => a - b);

    function findCombinations(startIndex, currentCombination, currentSum){
        if(currentSum === target){
            results.push([...currentCombination]);
            return;
        }

        if(currentSum > target){
            return;
        }

        for(let i = startIndex; i < candidates.length; i++){
            if(i > startIndex && candidates[i] === candidates[i - 1]){
                continue;
            }

            currentCombination.push(candidates[i]);

            findCombinations(i + 1, currentCombination, currentSum + candidates[i]);

            currentCombination.pop();
        }
    }
    findCombinations(0, [], 0);
    return results;
};

//Example usage:
const candidates1 = [10,1,2,7,6,1,5];
const target1 = 8;
console.log(combinationSum2(candidates1, target1));

const candidates2 = [2,5,2,1,2];
const target2 = 5;
console.log(combinationSum2(candidates2, target2));