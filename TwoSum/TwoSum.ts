function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 1; j < nums.length; ++j) {
      if (i === j) continue;
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

// console.log(twoSum([2, 5, 5, 11], 10));
