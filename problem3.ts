{

    function countWordOccurrences(sentence: string, word: string): number {
        const words = sentence.toLowerCase().split(" ")
        const target = word.toLowerCase();
        return words.filter(r => r === target).length;


    }

    const result = countWordOccurrences("I love typescript", "typescript");
    console.log(result)



}