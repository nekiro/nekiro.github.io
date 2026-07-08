import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merges multiple class values into a single string and eliminates duplicates. */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/** Formats the given datetime value into a localized 'MMM YYYY' date string. */
export const formatDatetime = (datetime: string | number | Date) => {
	const d = new Date(datetime);
	return d.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
	});
};
