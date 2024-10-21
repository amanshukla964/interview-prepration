/**
 * Let's analyze the time complexity and space complexity of the reverseArray function.

Time Complexity
First for loop:

ts
Copy code
for (let i = 0; i < n; i++)
    temp[i] = arr[n - i - 1];
This loop runs n times, where n is the length of the array arr. In each iteration, we copy one element from the original array arr to the temporary array temp. The loop runs O(n) times.
Second for loop:

ts
Copy code
for (let i = 0; i < n; i++)
    arr[i] = temp[i];
This loop also runs n times, copying elements from the temporary array temp back to the original array arr. This also runs O(n) times.
Thus, both loops together perform O(n) + O(n) operations, which simplifies to O(n).


 */
// JavaScript Program to reverse an array using temporary array

// function to reverse an array
export const reverseArray = (inputArray: any) => {
    const reverseArray = (arr: any) => {
        let n = arr.length;
        
        // Temporary array to store elements in reversed order
        let temp = new Array(n);
      
        // Copy elements from original array to temp in reverse order
        for (let i = 0; i < n; i++)
            temp[i] = arr[n - i - 1];
      
        // Copy elements back to original array
        for (let i = 0; i < n; i++)
            arr[i] = temp[i];

        return arr;
    }
    return reverseArray(inputArray);
}

export const optimizedArray = (inputArray: any) => {
    const optimizedReverseArray = (arr: any) => {
        let n = arr.length;

        for(let i = 0; i< Math.floor(n/2); i++){
            let temp = arr[i];
            arr[i] = arr[n - i - 1];
            arr[n - i - 1] = temp
        }
        return arr;
    }
    return optimizedReverseArray(inputArray);
}


