// 1. Write a JavaScript function that reverse a number. 
function reverseNumber(x) {
    return parseInt(x.toString().split("").reverse().join(""));
}
// console.log(reverseNumber(32243));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
function isPalindrome(str) {
    let a = str.toLowerCase().split("").filter(c => c.match(/[a-z]/))
    // change it to lowercase array and remove non-alphabetic characters
    for (let i = 0; i < a.length / 2; i++) {
        // only need to check half of the array
        if (a[i] !== a[a.length - i - 1]) {
            return false;
        }
    }
    return true;
}
// console.log(isPalindrome("nurses run"));
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

// 3. Write a JavaScript function that generates all combinations of a string. 
function allSubstrings(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            result.push(str.substring(i, j));
        }
    }
    return result;
}
// console.log(allSubstrings("dog"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
function sortString(str) {
    return str.split("").sort().join("");
}

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
function capitalizeFirstLetter(str) {
    let a = str.split(' ');
    a.forEach((element, idx) => {
        a[idx] = element[0].toUpperCase() + element.slice(1)
    });
    return a.join(" ")
}
// console.log(capitalizeFirstLetter('the quick brown fox'))

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
function findLongestWord(str) {
    let resultIndex = 0;
    let longestLength = 0;
    let array = str.split(" ");
    for (let i = 0; i < array.length; i++) {
        if (longestLength < array[i].length) {
            resultIndex = i;
            longestLength = array[i].length
        }
    }
    return array[resultIndex]
}
// console.log(findLongestWord('Web Development Tutorial'))

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 
function numberOfVowels(str) {
    const array = str.toLowerCase().split("")
    const vowel = new Set(['a', 'e', 'i', 'o', 'u'])
    let result = 0
    array.forEach(element => {
        if (vowel.has(element)) {
            result++;
        }
    })
    return result
}
// console.log(numberOfVowels('The quick brown fox'))

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. 
function isPrime(num) {
    if (num % 2 === 0) {
        return false;
    }
    for (let i = 3; i * i <= num; i = i + 2) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
// console.log(isPrime(7))
// console.log(isPrime(27))
// console.log(isPrime(17))
// console.log(isPrime(563167303))

// 9. Write a JavaScript function which accepts an argument and returns the type. 
function returnType(arg) {
    if (arg === null) {
        return 'null'
    }
    return typeof (arg)
}
// console.log(returnType(null))
// console.log(returnType())
// console.log(returnType(12))
//console.log(returnType([1, 2, 3]))

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix. 
function identityMatrix(n) {
    result = []
    for (let i = 0; i < n; i++) {
        result.push(new Array(n).fill(0));
        result[i][i] = 1;
    }
    return result
}
// console.log(identityMatrix(5))

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. 

function secondMaxMin(array) {
    arrayMin = Infinity
    arrayMax = -Infinity
    array2Min = Infinity
    array2Max = -Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] > arrayMax) {
            array2Max = arrayMax
            arrayMax = array[i]
        } else if (array[i] > array2Max) {
            array2Max = array[i]
        }
        if (array[i] < arrayMin) {
            array2Min = arrayMin
            arrayMin = array[i]
        } else if (array[i] < array2Min) {
            array2Min = array[i]
        }
    }
    return [array2Min, array2Max]
}

//console.log(secondMaxMin([1,2,3,4,5]))

// 12. Write a JavaScript function which says whether a number is perfect. 
function perfectNumber(n) {
    let sum = 0
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            sum += i
        }
    }
    return sum == n
}
// console.log(perfectNumber(6))
// console.log(perfectNumber(8128))
// console.log(perfectNumber(10))

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function factors(n) {
    let res = []
    for (let i = 1; i * i <= n; i++) {
        if (n % i == 0) {
            res.push(i)
            res.push(n / i)
        }
    }
    return res.sort((a, b) => { return a - b })
}
// console.log(factors(288))

// 14. Write a JavaScript function to convert an amount to coins. 
function amountTocoins(n, coin) {
    const res = []
    let i = 0
    while (n > 0) {
        if (n < coin[i]) {
            i++;
        } else {
            res.push(coin[i])
            n -= coin[i]
        }
    }
    return res
}
// console.log(amountTocoins(46, [25, 10, 5, 2, 1]))
// function nonGreedyAmountToCoins(n, coin){

// }

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 
function exponent(b, n) {
    return b ** n
}

// 16. Write a JavaScript function to extract unique characters from a string. 
function uniqueChar(str) {
    const strSet = new Set(str.split(''))
    let res = [...strSet]
    return res.join('')
}
// console.log(uniqueChar('thequickbrownfoxjumpsoverthelazydog'))

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. 
function charOccurrence(str) {
    const dic = new Map()
    for (c of str) {
        if (dic.has(c)) {
            dic.set(c, dic.get(c) + 1)
        } else {
            dic.set(c, 1)
        }
    }
    return dic
}
//console.log(charOccurrence('strrr'))
// 18. Write a function for searching JavaScript arrays with a binary search. 
function binarySearch(number, array) {
    let l = 0, r = array.length - 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2)
        if (array[mid] === number) {
            return true
        } else if (array[mid] > number) {
            l = mid
        } else if (array[mid] < number) {
            r = mid
        }
    }
    return false
}

// 19. Write a JavaScript function that returns array elements larger than a number. 
function largerThanNum(array, num){
    return array.filter((element) => element > num)
}
//console.log(largerThanNum([3,5,1,4,77,9], 3))
// 20. Write a JavaScript function that generates a string id (specified length) of random characters. 
function stringId(len) {
    let result = ''
    const sampleCharList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    while (len > 0) {
        len--;
        result = result + sampleCharList[Math.floor(Math.random() * sampleCharList.length)];
    }
    return result
}
// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. 

function getSubset(len, array) {
    if (len == array.length) {
        return [array]
    }
    if (len == 1) {
        return array.map(element => [element])
    }
    return [...getSubset(len, array.slice(1)), ...getSubset(len - 1, array.slice(1)).map(element => [...element, array[0]])]
}
// console.log(getSubset(3, [1, 2, 3, 4, 5]))
// console.log('This is the most elegant code I wrote ever')

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. 

function countChar(str, char){
    return str.split('').reduce((prev, curr) => curr == char ? prev + 1 : prev , 0)
}
//console.log(countChar('microsoft.com', 'o'))

// 23. Write a JavaScript function to find the first not repeated character. 
// Sample arguments: 'abacddbec' 
// Expected output: 'e' 
function nonRepeatedChar(str){
    charDic = new Map()
    for (c of str){
        if(charDic.has(c)){
            charDic.set(c, charDic.get(c) + 1)
        } else {
            charDic.set(c, 1)
        }
    }
    return str.split('').filter((element) => charDic.get(element) < 2)[0]
}
//console.log(nonRepeatedChar('abacddbec'))

// 24. Write a JavaScript function to apply Bubble Sort algorithm. 
function bubblesort(array) {
    let swaped = true
    let holder = 0
    while(swaped){
        swaped = false
        for(let i = 0; i < array.length; i++){
            if(i === array.length - 1){
                break
            }
            if (array[i] > array[i + 1]){
                holder = array[i]
                array[i] = array[i + 1]
                array[i + 1] = holder
                swaped = true
            }
        }
    }
    return array
}
console.log(bubblesort([3,5,1,67,1,3,66, 4]))