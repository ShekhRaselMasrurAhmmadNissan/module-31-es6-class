const person = {
	name: `Shekh Rasel`,
	address: {
		village: `Magrua`,
		postOffice: `Magura Hat`,
		location: [{ lat: `98.05 56.40` }, { long: `28.05 78.40` }],
	},
};
console.log(person.address['location']);
