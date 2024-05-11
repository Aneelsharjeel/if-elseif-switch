"use strict";
//simple condition with if , else
const myEidiMoney = 12000;
if (myEidiMoney >= 10000) {
    console.log("you can update your laptop");
}
else {
    console.log("you can't update your laptop right now");
}
//simple condition with if , elseif , else
console.log("---------------------------");
const myGiftItems = "book";
if (myGiftItems === "laptop") {
    console.log("I can buy a new mobile using my eidi money");
}
else if (myGiftItems === "mobile") {
    console.log("I can buy a laptop using my eidi money");
}
else if (myGiftItems === "xbox") {
    console.log("I can buy a new laptop and mobile using my eidi money");
}
else {
    console.log("I need to by laptop first");
}
console.log("---------------------------");
//simple condition with switch
const myGiftItems2 = "xbox";
switch (myGiftItems2) {
    case "laptop":
        console.log("I can buy a new mobile using my eidi money");
        break;
    case "mobile":
        console.log("I can buy a laptop using my eidi money");
        break;
    case "xbox":
        console.log("I can buy a new laptop and mobile using my eidi money");
        break;
    default:
        console.log("I need to by laptop first");
}
