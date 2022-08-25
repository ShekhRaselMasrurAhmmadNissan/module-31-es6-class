const users = [
	{
		id: 1,
		name: `abul`,
		job: `doctor`,
	},
];

const { name } = users[0];

// console.log(name);

const data = {
	count: 5000,
	data: [
		{
			id: 1,
			name: `babul`,
			job: `leader`,
		},
		{
			id: 2,
			name: `dabul`,
			job: `leader`,
		},
	],
};
const firstJob = data.data[0].job;
// console.log(firstJob);

const user = {
	id: 5001,
	name: `Thomas Alba Edison`,
	address: {
		street: {
			first: `35/A Kochukhet Lane`,
			second: `Third Floor`,
			side: `Right Side`,
		},
		postOffice: `Cantonment`,
		city: `Dhaka`,
	},
};
const floor = user?.address?.street?.second;
console.log(floor);
