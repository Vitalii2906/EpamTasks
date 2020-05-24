const descHidden = {
	enumerable: false,
	configurable: true,
	writable: true
};

class Student {
	constructor(name, email) {
		Object.defineProperties(this, {
			'__studentName': { value: name, ...descHidden },
			'__studentEmail': { value: email, ...descHidden },
			'homeworkResults': {
				value: {
					length: 0,
					passed: 0,
					topics: Object.create(null)
				},
				...descHidden
			}
		});
	}

	getName() {
		return this.__studentName;
	}

	getEmail() {
		return this.__studentEmail;
	}

	addHomeworkResult(topic, success) {
		if (typeof topic !== 'string')
			throw TypeError(
				`The "topic" argument must be of type string. Got '${
				typeof topic}'.`);

		if (typeof success !== 'boolean')
			throw TypeError(
				`The "success" argument must be of type boolean. Got '${
				typeof topic}'.`);

		const res = this.homeworkResults.topics[topic];
		if (res === undefined) {
			this.homeworkResults.length++;
			this.homeworkResults.passed += +success;
		} else if (res !== undefined && res !== success) {
			this.homeworkResults.passed += res ? -1 : 1;
		}

		this.homeworkResults.topics[topic] = success;
	}

	getHomeworkResult(topic) {
		return this.homeworkResults.topics[topic];
	}

	*results() {
		for (const k in this.homeworkResults.topics)
			yield {
				topic: k,
				success: this.homeworkResults.topics[k]
			};
	}

	getNumPassed() {
		return this.homeworkResults.passed;
	}

	getNumFailed() {
		return this.homeworkResults.length - this.homeworkResults.passed;
	}
}

class FrontendLab {
	constructor(students, failedLimit) {
		Object.defineProperties(this, {
			'failedHomeworksLimit':
				{ value: failedLimit, ...descHidden },
			'studentsList': { value: new Map(), ...descHidden }
		});

		for (const student of students)
			this.studentsList.set(student.email,
				new Student(student.name,
					student.email));
	}

	printStudentsList() {
		for (const student of this.studentsList.values()) {
			console.log(student.getName());
			console.log([...student.results()]);
		}
	}

	addHomeworkResults(homeworkResults) {
		for (const res of homeworkResults.results)
			this.studentsList.get(res.email)?.addHomeworkResult(
				homeworkResults.topic, res.success);
	}

	printStudentsEligibleForTest() {
		for (const stdnt of this.studentsList.values()) {
			if (stdnt.getNumFailed() <= this.failedHomeworksLimit)
				console.log(`Name: ${stdnt.getName()}, E-mail: ${stdnt.getEmail()}`);
		}
	}
}