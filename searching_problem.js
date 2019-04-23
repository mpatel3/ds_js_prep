function search(arr,low,high) { 
    if (low > high) 
       return; 
    if (low==high) 
    { 
        console.log("The required element is %d ", arr[low]); 
        return; 
    } 
    // Find the middle point
    let mid = (low + high) / 2;
    if (mid%2 == 0) { 
        if (arr[mid] == arr[mid+1]) 
            search(arr, mid+2, high); 
        else
            search(arr, low, mid); 
    } else { 
        if (arr[mid] == arr[mid-1]) 
            search(arr, mid+1, high); 
        else
            search(arr, low, mid-1); 
    }
}

Input: search([1,1,2,2,6,8,8,99,99,100,100],0,10)
Output: 6
