
const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
function checkColor(colorName) {
    if (colors.includes(colorName)) {
        console.log(`${colorName} өнгө жагсаалтанд БАЙНА.`);
    } else {
        console.log(`${colorName} өнгө жагсаалтанд БАЙХГҮЙ.`);
    };}
checkColor("Orange");

function compareArrayLength(arr1, arr2) {
    return arr1.length === arr2.length;
}
const array1 = ["a", "b", "c","d"];
const array2 = ["a", "b", "c"];
console.log(compareArrayLength(array1, array2));
