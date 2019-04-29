let name1 = prompt("name");
let name2 = prompt("name");
let name3 = prompt("name");

let namend =  " and "; 
let nameln = " has the longest name.";
let namelnt = " tie for the longest name.";


if (name1.length > name2.length && name1.length > name3.length) {
    console.log(name1 + nameln);
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(name2 + nameln);
} else if (name3.length > name1.length && name3.length > name2.length) {
    console.log(name3 + nameln);
} else if (name1.length === name2.length && name1.length > name3.length) {
    console.log(name1  + namend + name2 + namelnt);
} else if (name1.length === name3.length && name1.length > name2.length) {
    console.log( name1 + namend + name3 + namelnt);
} else if (name2.length === name3.length && name2.length > name1.length) {
    console.log(name2 + namend + name3 + namelnt);
} else if (name1.length === name2.length && name2.length === name3.length) {
    console.log(`All three names, ${name1}, ${name2}, and ${name3}, are the same length.`);
}