const content = document.querySelector(".content")

console.log(window.searchParams)

/*function toSubmission(){
	/*content.innerHTML = '<input type="text" class="beatmap-link" placeholder = "Beatmap link"><br>'
	
	const submitButton = document.createElement("input");
	submitButton.type = "button"
	submitButton.className = "button-submit"
	submitButton.value = "Submit"
	
	content.appendChild(submitButton)
}
document.getElementById("oauth").addEventListener("click", toSubmission)*/

document.getElementById("oauth").addEventListener("click", ()=>{
		const url = new URL("https://osu.ppy.sh/oauth/authorize");

		const params = {
			"client_id": "58952",
			"redirect_uri": "https://poochylord.github.io",
			"response_type": "code",
			"scope": "public identify",
			"state": "randomval",
		};
		Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

		const response = window.open(url)
		console.log(response)
				
	})