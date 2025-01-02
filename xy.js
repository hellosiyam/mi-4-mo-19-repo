const sentence='capitalize every first letter of each word in a string'
let capitalizeString=s  nce[0].toUpperCase() + sentence.slice(1).toLowerCase();

let capitalizeWords=sentence.split(' ').map(capitalizeString).join(' ')

console.log(capitalizeWords(sentence));