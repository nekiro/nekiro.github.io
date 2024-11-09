interface Language {
	name: string;
	level: string;
	description: string;
	show: boolean;
}

const languages: Language[] = [
	{
		name: "Polish",
		level: "Native",
		description: "",
		show: true,
	},
	{
		name: "English",
		level: "B2",
		description: "",
		show: true,
	},
];

export default languages;
