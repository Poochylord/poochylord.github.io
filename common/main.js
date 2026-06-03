const content = document.querySelector(".content")

function toSubmission(){
	content.innerHTML = '<input type="text" class="beatmap-link" placeholder = "Beatmap link"><br>'
	
	const submitButton = document.createElement("input");
	submitButton.type = "button"
	submitButton.className = "button-submit"
	submitButton.value = "Submit"
	
	content.appendChild(submitButton)
}
document.getElementById("oauth").addEventListener("click", toSubmission)