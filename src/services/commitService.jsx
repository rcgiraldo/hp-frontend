const URL = process.env.BASE_URL || "http://localhost:3000/"

export const getCommits = async () => {
	let url = BASE_URL + "commits";

	const response = await fetch(url);
	const res = await response.json();

	return res;
}

export const getCommit = async (id) => {
	let url = BASE_URL + "commits/" + id;

	const response = await fetch(url);
	const res = await response.json();

	return res;
}