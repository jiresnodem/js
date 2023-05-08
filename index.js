/** @format */

// let a = parseInt(prompt("entrez votre age"));

// if (a >= 18) {
// 	document.write("vous etez majeur");
// } else {
// 	document.write("vous etez mineur");
// }

// a >= 18
// 	? document.write("vous etez majeur")
// 	: document.write("vous etez mineur");

let array = [
	{
		nom: "jires",
		plan: "classique",
	},
	{
		nom: "paulin",
		plan: "premium",
	},
	{
		nom: "aicha",
		plan: "",
	},
];

// console.log(array.length);
// for (let i in array) {
// 	switch (array[i].plan) {
// 		case "premium":
// 			document.write(
// 				`<p>${array[i].nom} est abonnee au plan ${array[i].plan}</p>`
// 			);
// 			break;
// 		case "classique":
// 			document.write(
// 				`<p>${array[i].nom} est abonnee au plan ${array[i].plan}</p>`
// 			);
// 			break;
// 		default:
// 			document.write(
// 				`<p>${array[i].nom} n'a aucun plan d'abonnement chez nous.</p>`
// 			);
// 	}
// }

// difference entre for in et for of

// for (let i in array) {
// 	console.log(i);
// }

// for (let item of array) {
// 		console.log(item);
// }

// for (let item of array) {
// 	switch (item.plan) {
// 		case "premium":
// 			document.write(`<p>${item.nom} est abonnee au plan ${item.plan}</p>`);
// 			break;
// 		case "classique":
// 			document.write(`<p>${item.nom} est abonnee au plan ${item.plan}</p>`);
// 			break;
// 		default:
// 			document.write(
// 				`<p>${item.nom} n'a aucun plan d'abonnement chez nous.</p>`
// 			);
// 	}
// }

// array.map(function (item) {
// 	switch (item.plan) {
// 		case "premium":
// 			document.write(`<p>${item.nom} est abonnee au plan ${item.plan}</p>`);
// 			break;
// 		case "classique":
// 			document.write(`<p>${item.nom} est abonnee au plan ${item.plan}</p>`);
// 			break;
// 		default:
// 			document.write(
// 				`<p>${item.nom} n'a aucun plan d'abonnement chez nous.</p>`
// 			);
// 	}
// });

// array.forEach((item) => {
// 	switch (item.plan) {
// 		case "premium":
// 			document.write(`<p>${item.nom} est abonnee au plan ${item.plan}</p>`);
// 			break;
// 		case "classique":
// 			document.write(`<p>${item.nom} est abonnee au plan ${item.plan}</p>`);
// 			break;
// 		default:
// 			document.write(
// 				`<p>${item.nom} n'a aucun plan d'abonnement chez nous.</p>`
// 			);
// 	}
// });

// age(22);

// function age(age) {
// 	if (age >= 18) {
// 		document.write("vous etez majeur");
// 	} else {
// 		document.write("vous etez mineur");
// 	}
// }

// age(26);

const arrowAge = (age) => {
	if (age >= 18) {
		document.write("vous etez majeur");
	} else {
		document.write("vous etez mineur");
	}
};

arrowAge(25);

const words = [
	"spray",
	"limit",
	"elite",
	"exuberant",
	"destruction",
	"present",
];

const result = words.filter((word) => word.length > 6);

console.log(result);
