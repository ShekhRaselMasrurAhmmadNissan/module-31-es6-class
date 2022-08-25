const student = {
	name: `Fredie`,
	age: 26,
};

// console.log(student.age);

const data = {
	location: [
		{
			latitude: `34.5, 37.8`,
			longitude: `99.77, 58.7`,
			city: `Hyderabad`,
			country: `India`,
		},
	],
};

console.log(data.location[0].city);

const apiData = {
	id: 1,
	name: 'Leanne Graham',
	username: 'Bret',
	email: 'Sincere@april.biz',
	address: {
		street: 'Kulas Light',
		suite: 'Apt. 556',
		city: 'Gwenborough',
		zipcode: '92998-3874',
		geo: {
			lat: '-37.3159',
			lng: '81.1496',
		},
	},
	phone: '1-770-736-8031 x56442',
	website: 'hildegard.org',
	company: {
		name: 'Romaguera-Crona',
		catchPhrase: 'Multi-layered client-server neural-net',
		bs: 'harness real-time e-markets',
	},
};

const email = apiData.email;
const address = apiData.address;
const city = apiData.address.city;
const lat = apiData.address.geo.lat;
const companyName = apiData.company.name;

console.log(email);
console.log(address);
console.log(city);
console.log(lat);
console.log(companyName);
