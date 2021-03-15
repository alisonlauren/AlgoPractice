// TWO NUMBER SUM
//1. Write a function that takes in a non-empty array of distinct integers and an integer 
//representing a target sum. If any two numbers in the input array sum up to the target sum,
//the function should return them in an array, in any order. If no two numbers sum up to the
//target sum, the function should return an empty array.
//Note: that the target sum has to be obtained by summing two different integers in the array;
//you can't add a single integer to itself in order to obtain the target sum.

function twoNumberSum(array, targetSum) {
    //init hash table, creating object in which i will store data in
    const nums = {}
    //if the given number in my array
    for (const num of array) {
        //can be the perfect match to equal my target sum
        const potentialMatch = targetSum - num;
        //oh is the potential match actually there?
        if (potentialMatch in nums) {
            //great, return to me an array of the two winning numbers
            return [potentialMatch, num];
            //oh it didnt 😲, ok 
        } else {
            nums[num] = true;
        }
    }
    //just return that array then.
    return [];
}

// VALIDATE SUBSEQUENCE
//2. Given two non-empty arrays of integers, write a function that determines whether the second
//array is a subsequence of the first one. A subsequence of an array is a set of numbers that aren't
//necessarily adjacent in the array but are the same order as they appear in the array. For instance,
//the numbers [1,3,4] from a subsequence of the array [1,2,3,4], and so do the numbers [2,4].

function isValidSubsequence(array, sequence) {
    //acting as the pointer, looking through the array
    let seqIdx = 0;
    for (const value of array) {
        // if the index it is currently at matches the length,
        //then there's nothing else to look for, so just break
        if (seqIdx === sequence.length) break;
        // if our sequence at the seqidx is so far equal to our value, continue
        //looping through the array
        if (sequence[seqIdx] === value) seqIdx++;
    }
    // return
    return seqIdx === sequence.length;
}

// FIND CLOSEST VALUE IN BINARY SEARCH TREE
//3. Write a function that takes in a Binary Search Tree and a target integer value and
//returns the closest value to that target balue contained in the Binary Search Tree.

function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value)
}

function findClosestValueInBstHelper(tree, target, closest) {
    if (tree === null) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value
    }
    if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest) 
    } else if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest) 
    } else {
        return closest
    }
}


class BST {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

//4. Product Sum
// Write a function that takes in a "special" array and returns its product sum.
//A "special" array is a non-empty array that contains either integers or other "special"
//arrays. The product sum of a "special" array is the sum of its elements, where "special" 
//arrays inside it are summed themselves and then multiplied by their level of depth. 

function productSum(array, multiplier = 1) {
    let sum = 0;
	for (const element of array) {
        //if you find an array...
		if (Array.isArray(element)) {
            //then the sum is now equal to the element found and +1 for every depth found will be multiplied
			sum += productSum(element, multiplier + 1)
		} else {
            //otherwise each regular element will be counted as is
			sum += element
			}
        }
        //sum x the multiplier is returned.
		return sum * multiplier;
}

//5. Binary Search
// Write a function that takes in a sorted array of integers as well as a target integer.
//The function should use the Binary Search algorithm to determine if the target integer is
// contained in the array and should return its indec if it is, otherwise -1.


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}




























//helper method
function findClosestValueInBst(tree, target) {
    //keep track of closest variable, help implement recursively
    return findClosestValueInBstHelper(tree, target, tree.value)
}

function findClosestValueInBstHelper(tree, target, closest) {
    //nothing on the tree? just return closest you got!
    if (tree === null) return closest;
    //absolute value of diff of target and closest node
    // if our target value if further than closest than the current value
    //then set new value
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value
    }
    if (target < tree.value) {
        return findClosestValueInBstHelper(tree.left, target, closest)
    } else if (target > tree.value) {
        return findClosestValueInBstHelper(tree.right, target, closest)
    } else {
        return closest;
    }
}
// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}




