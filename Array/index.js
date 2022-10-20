// Exerccios do HACKERRANK
function simpleArraySum(ar) {
    let sum = 0;
    for(let i = 0; i < ar.length; i++) {
        sum += ar[i];
    }
    return sum;
}

console.log(simpleArraySum([1, 2, 3, 4, 5]));

function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;
    for(let i = 0; i < a.length; i++) {
        if(a[i] > b[i]) {
            alice++;
        } else if(a[i] < b[i]) {
            bob++;
        }
    }
    return [alice, bob];
}