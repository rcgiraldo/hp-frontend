const URL = process.env.BASE_URL

export const getCommits = async () => {
	let url = URL + "commits";

	const response = await fetch(url);
	const res = await response.json();

	return res;
}

export const getCommit = async (id) => {
	let url = URL + "commits/" + id;

	const response = await fetch(url);
	const res = await response.json();

	return res;
}