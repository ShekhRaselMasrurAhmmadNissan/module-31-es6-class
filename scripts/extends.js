class TeamMember {
	name;
	location;
	constructor(name, location) {
		this.name = name;
		this.location = location;
	}
	provideFeedBack = () => {
		console.log(`Feedback Given by ${this.name}`);
	};
}

class Instructor extends TeamMember {
	designation = `Web Course Instructor`;
	team = `Web Team`;
	constructor(name, location) {
		super(name, location);
	}
	startSupportSession(time) {
		console.log(`Start the support session at ${time}`);
	}
	createQuiz(module) {
		console.log(`Create Quiz for module ${module}`);
	}
}

class Developer extends TeamMember {
	designation = `Web Course Instructor`;
	team = `Web Team`;
	tech;
	constructor(name, location, tech) {
		super(name, location);
		this.tech = tech;
	}
	developFeature(feature) {
		console.log(`Please develop the ${feature}`);
	}
	release(version) {
		console.log(`Please release version ${version}`);
	}
}

class JobPlacement extends TeamMember {
	designation = `Job Placement Commandos`;
	team = `Job Placement`;
	region;
	constructor(name, location, region) {
		super(name, location);
		this.region = region;
	}
	provideResume(resume) {
		console.log(`Please develop the ${resume}`);
	}
	prepareStudent(preparation) {
		console.log(`Please release version ${preparation}`);
	}
}

const alia = new Developer(`Alia Bhatt`, `Dhaka`, `React`);
const bipasha = new JobPlacement(`Bipasha`, `India`, `India`);
console.log(alia);
console.log(bipasha);
