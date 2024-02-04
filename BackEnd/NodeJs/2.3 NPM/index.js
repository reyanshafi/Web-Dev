//  npm install <package> // (npmjs.com) -> installing npm packages //
// eg = npm i sillyname  // (sillyname is an npm package)

// var generateName = require("sillyname");

// ECMA_Script Modules //
import generateName from "sillyname"; //(import <what we want to import> from <packageName>;)
import superheroes from "superheroes";
var myName= generateName();
console.log(`My name is ${myName}`);

// Importing "superheroes package" //
import superHeroes from "superheroes";
// superHeroes.all;
var sHero= superHeroes.random();
console.log(`I am ${sHero}`);
