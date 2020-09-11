console.log("Corriendo el MD5");


let md5 = require("md5");
let reverse_md5 = require("reverse-md5");

const SALUDO = "hola";

console.log("El saludo es : ", SALUDO);

const SALUDO_TO_MD5 = md5(SALUDO);


console.log("El saludo pasado a MD5 es: ", SALUDO_TO_MD5);

var parserMD5 = reverse_md5({
	lettersUpper: false,
	lettersLower: true,
	numbers: true,
	special: false,
	whitespace: true,
	maxLen: 50
})


const SALUDO_FROM_MD5_TO_STRING = parserMD5(SALUDO_TO_MD5.toString());

console.log("El saludo pasado de MD5 a String es: ", SALUDO_FROM_MD5_TO_STRING);