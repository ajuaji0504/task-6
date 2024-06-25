let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let printOddNumbers = function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers(array);




let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})(array);


let stringArray = ["hello", "world", "javascript"];

let convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

console.log(convertToTitleCaps(stringArray));




let stringArray = ["hello", "world", "javascript"];

let titleCapsArray = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(stringArray);

console.log(titleCapsArray);



let array = [1, 2, 3, 4, 5];

let sumOfNumbers = function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
};

console.log(sumOfNumbers(array));



let array = [1, 2, 3, 4, 5];

let totalSum = (function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
})(array);

console.log(totalSum);



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let findPrimes = function(arr) {
    return arr.filter(function(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};

console.log(findPrimes(array));



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let primeNumbers = (function(arr) {
    return arr.filter(function(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})(array);

console.log(primeNumbers);



let array = ["madam", "hello", "racecar", "world"];

let findPalindromes = function(arr) {
    return arr.filter(function(str) {
        let reversed = str.split("").reverse().join("");
        return str === reversed;
    });
};

console.log(findPalindromes(array));



let array = ["madam", "hello", "racecar", "world"];

let palindromes = (function(arr) {
    return arr.filter(function(str) {
        let reversed = str.split("").reverse().join("");
        return str === reversed;
    });
})(array);

console.log(palindromes);



let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
};

console.log(findMedianSortedArrays(arr1, arr2));



let arr1 = [1, 3, 5];
let arr2 = [2, 4, 6];

let median = (function(nums1, nums2) {
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
})(arr1, arr2);

console.log(median);



let array = [1, 2, 3, 4, 2, 3, 5, 6, 1];

let removeDuplicates = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
};

console.log(removeDuplicates(array));



let array = [1, 2, 3, 4, 2, 3, 5, 6, 1];

let uniqueArray = (function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
})(array);

console.log(uniqueArray);




let array = [1, 2, 3, 4, 5];
let k = 2;

let rotateArray = function(arr, k) {
    let n = arr.length;
    k = k % n; // to handle cases where k > n
    let rotated = arr.slice(k).concat(arr.slice(0, k));
    return rotated;
};

console.log(rotateArray(array, k));



let array = [1, 2, 3, 4, 5];
let k = 2;

let rotatedArray = (function(arr, k) {
    let n = arr.length;
    k = k % n; // to handle cases where k > n
    let rotated = arr.slice(k).concat(arr.slice(0, k));
    return rotated;
})(array, k);

console.log(rotatedArray);


