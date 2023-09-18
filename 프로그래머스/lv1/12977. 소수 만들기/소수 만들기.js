function solution(nums) {
  let count = 0;
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      for (z = j + 1; z < nums.length; z++) {
        if (isPrime(nums[i] + nums[j] + nums[z]) !== false) {
          count++;
        }
      }
    }
  }
  function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  }
  return count;
}