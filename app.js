const inquirer = require("inquirer");
const fs = require("fs");

async function Start() {
	try {
		var manager = await createManager();
		var team = await createTeam();
		var engineer = await createEngineer();
		var intern = await createIntern();
	} catch (err) {
		console.log(err);
	}
}

Start();

// let { manager } = await createManager();
function createManager() {
	return inquirer.prompt([
		{
			type: "input",
			name: "managerName",
			message: "Please provide the name of the manager:"
		},
		{
			type: "input",
			name: "managerId",
			message: "Please enter the ID of the manager:"
		},
		{
			type: "input",
			name: "managerEmail",
			message: "Please enter the email of the manager:"
		},
		{
			type: "input",
			name: "managerPhone",
			message: "Please enter the office number of the manager:"
		}
	]);
}

function createTeam() {
	return inquirer.prompt([
		{
			type: "list",
			name: "teamMember",
			message: "Would you like to add an engineer or intern?",
			choices: ["Engineer", "Intern", "Don't add any more team members"]
		}
	]);
}

function createEngineer() {
	return inquirer.prompt([
		{
			type: "input",
			name: "engineerName",
			message: "Please provide the name of the engineer:"
		},
		{
			type: "input",
			name: "engineerID",
			message: "Please enter the ID of the engineer:"
		},
		{
			type: "input",
			name: "engineerEmail",
			message: "Please enter the email of the engineer:"
		},
		{
			type: "input",
			name: "engineerGithub",
			message: "Please enter the Github username of the engineer:"
		}
	]);
}

function createIntern() {
	return inquirer.prompt([
		{
			type: "input",
			name: "internName",
			message: "Please provide the name of the intern:"
		},
		{
			type: "input",
			name: "internID",
			message: "Please enter the ID of the intern:"
		},
		{
			type: "input",
			name: "internEmail",
			message: "Please enter the email of the intern:"
		},
		{
			type: "input",
			name: "internSchool",
			message: "Please enter the school the intern is attending:"
		}
	]);
}
