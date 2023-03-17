let pets = ['멍멍이', '야옹이', '쩝쩝이'];

console.log(pets);

// 비권장
pets[pets.length] = '징징이';
console.log(pets);

// 권장
// Linked List 방식으로 추가됨.
pets.push('징징이');
pets.push('어흥이');
pets.push('냥냥이', '질질이', '찡찡이');
let newLength = pets.push(100);
console.log(pets);
console.log(newLength);

pets.pop();
console.log(pets);
console.log(pets.pop());
console.log(pets);