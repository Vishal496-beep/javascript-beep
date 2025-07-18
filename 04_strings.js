const name = "vishal-hc-og"
const repoCount = 85

//  console.log(name + repoCount + " value") currently outdated

 console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);/*use this method*/

 const gameName = new String(`vishal-Hc-Og`);
 console.log(gameName[7]);
// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toLowerCase());
 console.log(gameName.toUpperCase());
 console.log(gameName.charAt(`7`))
console.log(gameName.indexOf(`a`));

const newString = gameName.substring(0, 4);/* we cannot use negative values(-6)*/
console.log(newString);

const anotherString = gameName.slice(-7, 4)/*we can use negative values */
console.log(anotherString);

const newString2 = "   vishal   ";
console.log(newString2);
console.log(newString2.trim())/*we can trim space in name or username section*/
/* more trim = trimStart and TrimEnd*/

const url = "https://vishal.com/vishal%20kumar"
console.log(url.replace(`%20`,`_`));/*to replace a section we use replace */

console.log(url.includes(`vishal`));/* to find charactor value returns in true*/
console.log(url.includes(`sharma`));/* to find charactor value returns in false*/

console.log(gameName.split(`-`));

const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`,
);