function solution(numbers) {
    let string = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

    string.forEach((str, idx) => {
        numbers = numbers.replaceAll(str, idx);
    });
    return Number(numbers);
}