const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");
button.addEventListener("click", () => {
	if (input.value == "") {
		alert("Please enter a chapter");
	} else {
		const li = document.createElement("li");
		const deleteButton = document.createElement("button");
		li.textContent = input.value;
		deleteButton.textContent = "❌";
		li.appendChild(deleteButton);
		list.appendChild(li);
		deleteButton.addEventListener("click", () => {
			li.remove();
		});
		input.value = "";
		input.focus();
	}
});
