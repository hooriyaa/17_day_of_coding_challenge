"use strict";
// QUESTION : 49
// FUNCTION WITH REST PARAMETER:
function myHobbies(...hobbies) {
    //   creat for loop to excess each hobby
    for (let i = 0; i < hobbies.length; i++) {
        console.log(`I Enjoy ${hobbies} `);
    }
}
// Call the function:
myHobbies("Painting");
myHobbies("reading");
myHobbies("stam collecting");
myHobbies("Gardening");
// QUESTION 50:
let myIdealDay = `My ideal day includes in following:
1. I wakeup naturally with morning light I feel refreshed.
I have a glass of water and then enjoy a morning walk.

2. Then Enjoy picnic with my Friends Having a lots o fun.

3. at the end I read a grat book that give me a productive ideas.`;
console.log(myIdealDay);
// QUESTION 51:
function calculatearea(height, width) {
    return height * width;
}
let refactorArea = (width, height) => height * width;
console.log(refactorArea(4, 9));
