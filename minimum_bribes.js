/**
*It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears a sticker indicating their initial position in the queue from  to . Any person can bribe the person directly in front of them to swap positions, but they still wear their original sticker. One person can bribe at most two others.Determine the minimum number of bribes that took place to get to a given queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

Example

q = [1, 2, 3, 5, 4,6, 7]

If person 5 bribes person 4, the queue will look like this.. Only  bribe is required. Print 1.

q = [4,1,2,3]
Person 4 had to bribe 3 people to get to the current position. Print Too chaotic.

**/

function minimumBribes(q) {
    let total = 0;
    for(let currentPosition = 0; currentPosition < q.length; currentPosition++){
        const originalPosition = q[currentPosition] - 1;
        const diff = originalPosition - currentPosition;
        if(diff > 2) return console.log("Too chaotic");
        if(diff <= 0){
            for(let i = Math.max(0, originalPosition - 1); i < currentPosition; i++){
                const startingPosOfforwaredPerson = q[i] - 1;
                if(startingPosOfforwaredPerson > originalPosition){
                    total++;
                }
            }
        }
    }
    console.log(total);
}
