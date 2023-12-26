const parent = document.getElementById("parent");
const bookList = document.getElementById("bookList");

function createBookEntry(title, author) {
	const entry = document.createElement("div");
	entry.classList.add("book-entry");

	const titlePara = document.createElement("p");
	titlePara.textContent = "Title: " + title;

	const authorPara = document.createElement("p");
	authorPara.textContent = "Author: " + author;

	const removeBtn = document.createElement("button");
	removeBtn.textContent = "Remove";
	removeBtn.addEventListener("click", () => {
		entry.remove();
	});

	entry.appendChild(titlePara);
	entry.appendChild(authorPara);
	entry.appendChild(removeBtn);

	return entry;
}

function addBook() {
	const titleValue = document.getElementById("title").value.trim();
	const authorValue = document.getElementById("author").value.trim();

	if (titleValue && authorValue) {
		const newEntry = createBookEntry(titleValue, authorValue);
		bookList.appendChild(newEntry);

		document.getElementById("title").value = "";
		document.getElementById("author").value = "";
	} else {
		alert("Please provide both title and author.");
	}
}
