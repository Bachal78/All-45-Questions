#! /usr/bin/env node 
//Task1
//installed Node.js, TypeScript and VS Code in my computer.
// Done my 45 questions through different sources.
//Task2
let person_name = "ERIC";
console.log(`Hellow ${person_name}, would you like to learn some Python today?`);
//Task3
// Lower case
let person_Name = "Babal";
console.log("lowercase:", person_Name.toLowerCase());
// Uppercase
console.log("uppercase:", person_Name.toUpperCase());
// Title case
console.log("titlecase:", person_Name.replace(/\bw/g, c => c.toUpperCase()));
//Task4
let qoute1 = "A persion who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, ${qoute1}`);
//Task5
let qoute = '"A persion who never made a mistake never tried anything new."';
let famous_person = "Albert Einstein";
let message1 = `${famous_person} once said; \n${qoute}`;
console.log(message1);
//Task6
let personName = `\n\t Babar \t\n`;
console.log(personName);
let stripped = personName.trim();
console.log(stripped);
//Task7
console.log(5 + 3);
console.log(11 - 3);
console.log(4 * 2);
console.log(16 / 2);
//Task8
//8 task has been completed in Task7
//Task9
let favourateNum = 4;
console.log(`My favourate number is ${favourateNum}`);
//Task10
// exercise 10
// my name is Bachal.Khokhar
// Dated: 21/02/2024
// this program wii show output
console.log(`Hello Raja`); // 1st
// this program will devide the number
console.log(50 / 5);
//Task11
let members1 = ['Alli', 'Azam', 'Shoaib', 'Zain'];
for (let i = 0; i < members1.length; i++) {
    console.log(members1[i]);
}
//Task12
let members = ['Alli', 'Azam', 'Shoaib', 'Zain'];
let messages = 'Bring your Laptop; ';
for (let i = 0; i < members.length; i++) {
    console.log(messages + members[i]);
}
//Task13
let transport = ['BMW', 'Civic', 'Honda', 'Yaris', 'Alto'];
for (let i = 0; i < transport.length; i++) {
    console.log('I would like to own a ' + transport[i]);
}
//Task14
let guestlist = ['Raja', 'Nasem', 'Nado'];
let message = 'Inviting them to dinner ';
for (let i = 0; i < guestlist.length; i++) {
    console.log(message + guestlist[i]);
}
export { guestlist };
//Task15
let guest_list1 = ['Raja', 'Nasem', 'Nado'];
for (let i = 0; i < guest_list1.length; i++) {
    console.log('Respected Sir/ Madam ' + guest_list1[i] + ',\n we invited you on dinner.\n Thanks\n');
}
let not_present1 = 'Nado';
let new_guest1 = 'Babar';
guest_list1[2] = new_guest1;
for (let i = 0; i < guest_list1.length; i++) {
    console.log('Respected Sir/ Madam ' + guest_list1[i] + ',\n we invited you on dinner.\n Thanks\n');
}
console.log(`Mr. ${not_present1} will not attend dinner tomorrow.`);
//Task16
let guest_list2 = ['Raja', 'Nasem', 'Nado'];
let not_present2 = 'Nado';
let new_guest4 = 'Babar';
guest_list2[2] = new_guest4;
for (let i = 0; i < guest_list2.length; i++) {
    console.log('Respected Sir/ Madam ' + guest_list2[i] + ',\n we invited you on dinner.\n Thanks\n');
}
guest_list2.unshift('Ali', 'Faraz', 'Asfand');
for (let i = 0; i < guest_list2.length; i++) {
    console.log('Respected Sir/ Madam ' + guest_list2[i] + ',\n we invited you on dinner. We found big table to invite more 3 guests.\n Thanks\n');
}
//Task17
let guest_list = ['Raja', 'Nasem', 'Nado'];
let not_present = 'Nado';
let new_guest = 'Babar';
guest_list[2] = new_guest;
guest_list.unshift('Ali', 'Faraz', 'Asfand');
console.log('\n unfortunitaly we can not arrange big table, only two people allow.');
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`sorry sir/madam.${remove_guest} you are not invited for dinner`);
}
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/ Madam ' + guest_list[i] + ',\n yes you are stil invited on tomorrow dinner .\n Thanks\n');
}
guest_list.splice(0.2);
console.log(guest_list);
//Task18
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
let places = ['Karachi', 'Hyderabad', 'Larkana', 'Islamabad', 'New york'];
console.log('original ' + places);
// Print your array in alphabetical order without modifying the actual list.
console.log('copy ' + [...places].sort());
// • Show that your array is still in its original order by printing it.
console.log('original ' + places);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log('copy ' + [...places].sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log('copy ' + [...places].sort().reverse());
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log('original ' + places.sort());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('original ' + places.sort().reverse());
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
//Task19
//import { guestlist } from "../allTaskes/T14"
console.log(`n\PRINTING NUMBER OF GUESTS INVITED`);
console.log(`we had finally invited ${guestlist.length} from exercise 14`);
//Task20
let countries = ['Pakistan', 'UK', 'Malysia', 'Qutar', 'Russia'];
console.log("list of countries:");
for (let top of countries) {
    console.log(top);
}
// create two objects
const book = {
    name: 'ESSENTIAL TYPESCRIPT',
    price: 450
};
const apple = {
    name: 'apple',
    price: 200
};
console.log(`book name: ${book.name}, price: RS.${book.price}`);
console.log(`apple name: ${apple.name}, price: $${apple.price}`);
//Task22
let arry = ['babar', 'tala', "4", "5"];
console.log(arry[5]);
// above will show undefined error
let arry1 = ['babar', 'ali', 'tala', "4", "5"];
console.log(arry1[0]);
console.log(arry1[1]);
console.log(arry1[2]);
console.log(arry1[3]);
console.log(arry1[4]);
console.log(arry1[5]);
// will show correct 0utput
//Task23
let car = 'subara';
// test1. equality comparsion (True)
console.log("is car == 'subara'? I predict true.");
console.log(car == 'subara'); // True
// test2. equality comparsion (True)
console.log("is car === 'subara'? I predict true.");
console.log(car === 'subara'); // True
// test3. inequality comparsion (False)
console.log("is car != 'subara'? I predict true.");
console.log(car != 'subara'); // False
// test4. strict inequality comparsion (False)
console.log("is car !== 'subara'? I predict true.");
console.log(car !== 'subara'); // False
// test5. less than comparsion (False)
console.log("is car < 'subara'? I predict true.");
console.log(car < 'subara'); // fasle (lexicographic compression)
// test6. greater than comparsion (False)
console.log("is car > 'subara'? I predict true.");
console.log(car > 'subara'); // Falsle (lexicographic compression)
// test7. less than or equal comparsion (True)
console.log("is car <= 'subara'? I predict true.");
console.log(car <= 'subara'); // True
// test8. greater than or equal comparsion (True)
console.log("is car >= 'subara'? I predict true.");
console.log(car >= 'subara'); // True
// test9. Checking truthness (True)
console.log("is car 'subara'? I predict true.");
console.log(car); // True(non-empty string is truthy)
// test10. Checking falseness (False)
console.log("is car 'subara'? I predict true.");
console.log(!car); // false(negation of true value)
//Task24
let car1 = "subara";
let age1 = 25;
let number1 = [1, 2, 3, 4];
// string test
// Test1. Equality (True)
console.log("is car == 'subara'? I predict true.");
console.log(car1 == 'subara'); // True(case-sensetive)
// Test2. Strict Equality (False)
console.log("is car === 'subara'? I predict true.");
console.log(car1 === 'subara'); // False(case-sensetive)
// Test3. inequality (True)
console.log("is car != 'subara'? I predict true.");
console.log(car1 != 'subara'); // True
// Test4. inequality (False)
console.log("is car !== 'subara'? I predict true.");
console.log(car1 !== 'subara'); // False
// lower function Tests:
// Test5. Lowercase conversion (True)
console.log("is car.toLowerCase() == 'subara'? I predict true.");
console.log(car1.toLocaleLowerCase() == 'subara'); // True
// Test6. LowerCase conversion (False)
console.log("is car === car.toLowerCase() 'subara'? I predict true.");
console.log(car1 === car1.toLowerCase()); // False (original values remains uppercase)
// **Numerical Tests**
// Test7. Equality (True)
console.log("Is age == 25? I predict True.");
console.log(age1 == 25); // True
// Test8. inequality (False)
console.log("Is age != 30? I predict True.");
console.log(age1 != 30); // True
// Test9. Greater than (False)
console.log("Is age > 30? I predict True.");
console.log(age1 > 30); // False
// Test10. Less than or equal (True)
console.log("Is age <= 25? I predict True.");
console.log(age1 <= 25); // True
// Logical operators
// Test11. And (True)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(age1 > 20 && age1 < 30); // True(both conditions met)
// Test12. Or (False)
console.log("Is age > 30 ||  age < 18? I predict True.");
console.log(age1 > 20 || age1 < 18); // False (neither condition met)
// Array Tests
// Test13. IN array (True)
console.log("Is 3 in number? I predict True.");
console.log(3 in number1); // True (checks for index existance)
// Test14. not in array (False)
console.log("Is 5 not in number? I predict True.");
console.log(5 in number1); // True (negation of "in" operator)
//Task25
// create a variable called alien_color
let alien_color = "yellow";
if (alien_color == "yellow") {
    console.log("the player just earned 5 points.");
}
alien_color = "red";
if (alien_color == "yellow") {
    console.log("the player just earned 5 points.");
}
//Task26
// create a variable called alien_color2
let alien_color2 = "red";
if (alien_color2 == "red") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}
alien_color2 = "red";
if (alien_color2 == "yellow") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
//Task27
//Version-1
let alienColor = "green";
if (alienColor == "green") {
    console.log("the player just earned 5 points.");
}
else if (alienColor == "yellow") {
    console.log("the player just earned 10 points.");
}
else if (alienColor == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("Please Select Right Color");
}
// Version-2
alienColor = "yellow";
if (alienColor == "green") {
    console.log("the player just earned 5 points.");
}
else if (alienColor == "yellow") {
    console.log("the player just earned 10 points.");
}
else if (alienColor == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("Please Select Right Color");
}
//Version-3
alienColor = "red";
if (alienColor == "green") {
    console.log("the player just earned 5 points.");
}
else if (alienColor == "yellow") {
    console.log("the player just earned 10 points.");
}
else if (alienColor == "red") {
    console.log("the player just earned 15 points.");
}
else {
    console.log("Please Select Right Color");
}
//Task28
let age = 26; // tey different age, will get different result
if (age < 2) {
    console.log("the person is baby.");
}
else if (age >= 2 && age < 4) {
    console.log("person is toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("person is kid.");
}
else if (age >= 13 && age < 20) {
    console.log("person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("person is a adult.");
}
else {
    console.log("person is an elder .");
}
//Task29
let favorite_fruits = ['apples', 'banana', 'grapes', 'melon', 'straberry'];
if (favorite_fruits.includes('apples')) {
    console.log('We really like apples');
}
if (favorite_fruits.includes('banana')) { //include tells us bout item is in it or not
    console.log('We really like banana');
}
if (favorite_fruits.includes('grapes')) {
    console.log('We really like grapes');
}
if (favorite_fruits.includes('melon')) {
    console.log('We really like melon');
}
if (favorite_fruits.includes('straberry')) {
    console.log('We really like straberry');
}
//Task30
let users = ["Ali", 'Azam', 'Zain', 'Zuhaib', 'admin'];
for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in agian.`);
    }
}
//Task31
let user = ["Ali", 'Azam', 'Zain', 'Zuhaib', 'admin'];
if (user.length === 0) {
    console.log("We need to find some users! ");
}
else {
    user = [];
    console.log("All user have been removed: " + user.length);
}
//Task32
let current_users = ['admin', 'Naseem', 'maaz', 'Kareem', 'Naveed'];
let new_users = ['Javeed', 'Raja', 'Zahid', 'admin', 'maaz'];
let current_users_lower = current_users.map(user => user.toLowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.toLowerCase())) {
        console.log(`Sorry ${new_user}, that name is taken`);
    }
    else {
        console.log(`Yes ${new_user}, is still in avilable list`);
    }
}
//Task33
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
}
//Task34
let fav_pizza = ["cheez pizza", "chiken pizza", "veg pizza"];
for (let pizza of fav_pizza) {
    console.log(pizza);
}
//console.log("\n");
for (let pizza of fav_pizza) {
    console.log(`I really like ${pizza}!`);
}
console.log(`I really love pizza.`);
//Task35
let animals = ["cat", "monkey", "lion"];
for (let animal of animals) {
    console.log(animal);
}
for (let animal of animals) {
    console.log(`A ${animal} has a tail.`);
}
console.log("\nAll of there are good animals but i love cat more.");
function make_shirt5(size, text) {
    console.log(`\nyou order a ${size}, shirt that says ${text}`);
}
make_shirt5('large', '"I love TypeScript"');
make_shirt5('medium', '"I love Pakistan"');
//Task37
function make_shirt(size = 'large', text = "I love TypeScript") {
    console.log(`you have ordered a ${size}, shirt that says ${text}`);
}
make_shirt();
make_shirt('medium');
//different messages
make_shirt('small', 'I need a big shirt');
//Task38
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city('Karachi'); //default sentence
describe_city('france', 'Europe');
describe_city('Lahore', 'Punjab');
//Task39
function city_country(city, country) {
    return `${city}, ${country}`;
}
let city1 = city_country('Karachi', 'Pakistan');
let city2 = city_country('Tokyo', 'Japan');
let city3 = city_country('Paris', 'France');
console.log(city1);
console.log(city2);
console.log(city3);
//Task40
function make_album(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album1 = make_album("Ali", " Light");
console.log(album1);
let album2 = make_album("Mushi", " Disco");
console.log(album2);
let album3 = make_album("Mohsan", " Green");
console.log(album3);
//Task41
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
    }
}
const magician = ['Sheraz', 'Hamza', 'Bilwal'];
show_magicians(magician);
//Task42
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
const magicians2 = ['Sheraz', 'Hamza', 'Bilwal'];
make_great(magicians2);
show_magicians(magicians2);
//Task43
function make_great3(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + 'the great');
    }
    return greatMagicians;
}
const magicians4 = ["usama", "haseeb", "wajahat"];
const greatMagicians3 = make_great3(magicians4);
show_magicians(magicians4);
show_magicians(greatMagicians3);
//Task44
function sandwich(...items) {
    console.log("Sandwich order:");
    for (let i = 0; i < items.length; i++) {
        console.log(`- ${items[i]}`);
    }
}
console.log("enjoy your sandwich!");
sandwich('capscim', 'tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce');
function createCar(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const mycar = createCar("totyat", 'corolla', { color: 'silver', year: "2024" });
console.log(mycar);
