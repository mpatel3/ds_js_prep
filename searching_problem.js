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

2. 
Object.values(data.reduce((acc, obj)=>{
  let key1 = obj.name.toString();  
  acc[key1] = acc[key1] || { name: key1, value : []};
  acc[key1].value.push(obj.value);
  return acc;
},{})).each(obj => obj.value = obj.value.join(',') );

Input = [
        {name: "tracker_id", value: "16"},
        {name: "tracker_view_id", value: "9"},
        {name: "data[322][]", value: "Choice1"},
        {name: "data[322][]", value: "Choice2"},
        {name: "data[326]", value: "03/09/2019"},
        {name: "data[335]", value: "Choice2"},
        {name: "data[335]", value: "Choice3"},
        {name: "data[335]", value: "5555553"},
        {name: "data[444]", value: "25540:Ruby"},
        {name: "data[330]", value: "Choice4"},
        {name: "data[331]", value: "2000"},
        {name: "data[327]", value: "48:First last,57:Manthan K Patel1"},
        {name: "data[320]", value: "126:Idea Management Team"},
        {name: "data[441]", value: "18/09/2019"},
        {name: "data[441]", value: ""},
        {name: "data[441]", value: "Testing Title"},
        {name: "data[96]", value: "tetw"},
    ]
Output = [ 
{name: "tracker_id", value: "16"}
{name: "tracker_view_id", value: "9"}
{name: "data[322][]", value: "Choice1,Choice2"}
{name: "data[326]", value: "03/09/2019"}
{name: "data[335]", value: "Choice2,Choice3,5555553"}
{name: "data[444]", value: "25540:Ruby"}
{name: "data[330]", value: "Choice4"}
{name: "data[331]", value: "2000"}
{name: "data[327]", value: "48:First last,57:Manthan K Patel1"}
{name: "data[320]", value: "126:Idea Management Team"}
{name: "data[441]", value: "18/09/2019,,Testing Title"}
{name: "data[96]", value: "tetw"} 
]

/**
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
**/

var twoSum = function(nums, target) {
   let hashMap = {};
   for(let index=0; index < nums; index++) {
   if(hashMap[nums[index]] !== undefined) return (hashMap[nums[index]], index);
    hashMap[target - nums[index]] = index; // store index as value. and target - current number as a key. 
  }
};

