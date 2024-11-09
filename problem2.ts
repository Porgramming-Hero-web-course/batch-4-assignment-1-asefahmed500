{
    function removeDuplicates(numbers: number[]): number[] {
        return numbers.filter((item, index) => numbers.indexOf(item) === index);
    }

    const result = removeDuplicates([1, 2, 3, 4, 5, 5]);
    console.log(result)
}