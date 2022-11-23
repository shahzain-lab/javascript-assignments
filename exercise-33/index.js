
// nums
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(num => {
    if(num === 1 || num === 2) {
        num += 'st';
    }else if(num === 3){
        num += 'rd';
    }else {
        num += 'th'
    }
    console.log(num) // 1st 2st 3rd 4th 5th 6th 7th 8th 9th
})
