class Instructor {
	name;
	designation = `Web Course Instructor`;
	team = `Web Team`;
	location;
	constructor(name, location) {
		this.name = name;
		this.location = location;
	}
	startSupportSession(time) {
		console.log(`Start the support session at ${time}`);
	}
	createQuiz(module) {
		console.log(`Create Quiz for module ${module}`);
	}
}

const aamir = new Instructor(`Aamir`, `Mumbai`);
const solaiman = new Instructor(`Solaiman`, `Karachi`);
console.log(aamir);
console.log(solaiman);
aamir.startSupportSession(`9:00pm`);
aamir.createQuiz(31);
