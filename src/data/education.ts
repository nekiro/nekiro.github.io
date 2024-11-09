interface Education {
	title: string;
	startDate: string;
	endDate?: string;
	school: string;
	location: string;
	description: string;
	currentUni: boolean;
}

const education: Education[] = [
	{
		title: "Bachelor of Science in Computer Science",
		startDate: "2017",
		endDate: "2021",
		school: "WSB",
		location: "Poland",
		description: "",
		currentUni: false,
	},
];

export default education;
