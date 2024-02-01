// 1. Declare a variable name and assign it as your name. Print the variable to the console.
let name = "Ayoub"
console.log(name);

// 2. Add a new fruit to the fruits array using the push method.
let fruits = ["banana","apple","orange"]
fruits.push("melon")
console.log(fruits)

// 3. Write a function getDaysUntilAdeshBirthday that calculates and returns the number of days remaining until his birthday. Print the result to the console. Adesh's birthday is on March 25. 
function getDaysUntilAdeshBirthday() {
    var today = new Date();
    var Birthday = new Date(today.getFullYear(), 2, 25);

    var timeDiff = Birthday.getTime() - today.getTime();

    var daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return daysRemaining;
}


console.log("Days until Adesh's birthday: " + getDaysUntilAdeshBirthday());
