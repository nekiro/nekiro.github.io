/**
 * Interface representing work experience details.
 *
 * @property {string} title - The job title of the position.
 * @property {string} startDate - The start date of the position in the format YYYY-MM-DD.
 * @property {string} [endDate] - The end date of the position in the format YYYY-MM-DD.
 *                                Optional, can be omitted if the position is current.
 * @property {string} company - The name of the company where the position was held.
 * @property {string} location - The geographic location of the company (e.g., city, state, country).
 * @property {string} description - A brief description of the roles and responsibilities
 *                                   associated with the position.
 * @property {string[]} goals - A list of professional goals achieved or targeted during the position.
 * @property {boolean} currentJob - Indicates whether the position is the current job.
 */
interface WorkExperience {
	title: string;
	startDate: string;
	endDate?: string;
	company: string;
	location: string;
	description: string;
	goals: string[];
	currentJob: boolean;
}

/**
 * Represents an array of work experiences.
 *
 * Each work experience object contains details about
 * a job position including the title, start and end dates,
 * company name, job location, description of the role,
 * a list of goals or achievements, and a flag indicating
 * if it is the current job.
 *
 * @type {Array<Object>}
 * @property {string} title - The job title.
 * @property {string} startDate - The start date of the job in YYYY-MM-DD format.
 * @property {string} [endDate] - The end date of the job in YYYY-MM-DD format. Optional for current jobs.
 * @property {string} company - The name of the company.
 * @property {string} location - The location of the job.
 * @property {string} description - A brief description of the job responsibilities.
 * @property {Array<string>} goals - A list of goals or achievements within the job.
 * @property {boolean} currentJob - A flag indicating if the job is the current one.
 */
const workExperience: WorkExperience[] = [
	{
		title: "Software Engineer",
		startDate: "2022-11-01",
		company: "Trans.eu",
		location: "Poland",
		description:
			"Maintained authentication microservices for the logistics platform, focusing on OAuth implementation and legacy code modernization.",
		goals: [
			"At Trans.eu, I was responsible for maintaining the logistics platform's authentication microservices, effectively addressing OAuth authentication challenges.",
			"I refactored and enhanced legacy Node.js code, overseeing the entire process from design to implementation.",
			"Utilizing Docker and deploying on AWS ECS via Terraform, I ensured efficient service management.",
			"I facilitated internal communication with other feature teams, collaborated closely with team members, and participated in code reviews and sprint planning to maintain high-quality deliverable.",
		],
		currentJob: true,
	},
	{
		title: "Software Engineer",
		startDate: "2021-01-01",
		endDate: "2024-07-01",
		company: "V&X Limited",
		location: "Gibraltar",
		description:
			"During my time at V&X Limited, I developed and maintained 2D game engine inspired by the Dragon Ball anime (https://saiyansreturn.com).",
		goals: [
			"I've added new functionalities and maintained existing features using C++ and Lua.",
			"I've created essential services from scratch, such as a status service built with TypeScript and Node.js using the NestJS framework, which monitored engine status and collected metrics and logs, later showing them in Grafana dashboard and Kibana",
			"I've managed the infrastructure, implemented CI pipelines for automatic deployments, and extensively used Docker to containerize services for streamlined deployment on target machine.",
		],
		currentJob: false,
	},
];
export default workExperience;
