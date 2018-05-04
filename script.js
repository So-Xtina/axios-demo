const BASE_URL = "http://api.reactprototypes.com";
const API_KEY = "?key=c118demouser";

const response = axios.get(`${BASE_URL}/todos${API_KEY}`).then(response => {
	console.log("Reponse: ", response);

	const listElements = response.data.todos.map((item, index) => {
		const tr = document.createElement("tr");
		const number = document.createElement("td");
		const title = document.createElement("td");
		const completed = document.createElement("td");

		number.innerText = index + 1;
		title.innerText = item.title;
		completed.innerText = item.complete;

		tr.appendChild(number);
		tr.appendChild(title);
		tr.appendChild(completed);

		document.querySelector(".table tbody").appendChild(tr);
	});
});

const todoItem = {
	title: "Christna's todo item",
	details: "Go Running!"
};

axios
	.post(`${BASE_URL}/todos${API_KEY}`, todoItem)
	.then(response => {
		console.log("Add Item Response: ", response);
	})
	.catch(err => {
		try {
			console.log("ERROR: ", err.response.data.error);

			console.log(err.message);

			const newError = new Error("This is the error message");

			console.log("New Error: ", newError.message);

			throw newError;

			alert(err.response.data.error);
		} catch (error) {
			alert(error.message);
		}
	});
