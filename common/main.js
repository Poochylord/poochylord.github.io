const content = document.querySelector(".content")

function throwError(img, message, sub){
	content.innerHTML = '<img src=' + img + '/><h1>' + message + '<br/> </h1><p>' + sub + '</p>'
}

var json = null

function createNotice(noticeText){
	const notice = document.createElement('div')
	notice.innerHTML = '<h1>NOTICE</h1>' + noticeText
	content.appendChild(notice)
}

async function getJSON(){
	const jsonPage = fetch("https://poochylord.github.io/settings.json");
	
	const json = await jsonPage.then(response => response.json());
	
	if (json.open == false){
		throwError('/common/JELLEONASTICK.png', 'Closed, sorry!', json.notice)
	}

	if (json.notice != ""){
		createNotice(json.notice)
	}
}
getJSON()

async function attemptSubmission(){
	var beatmapLink = document.getElementById("beatmap-link").value
	var beatmapInfo = document.getElementById("info").value
	
	if (beatmapLink.split("osu.ppy.sh/beatmapsets/")[1] != null){
		const id = beatmapLink.split("/")[4].split("#")[0]
		if (id != null){
			const url = new URL("https://osu.ppy.sh/api/v2/beatmaps");
			const params = {"ids[]": id,}; Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

			const headers = {
				"Content-Type": "application/json",
				"Accept": "application/json",};
				
			const req = await fetch(url, {method: "GET", headers,})
			const result = await req.then(response => response.json());
			console.log(result)
		}
	}
	console.log(beatmapLink)
}

function toSubmission(){
	document.querySelector(".rules-container").remove()
	
	if (json != null){
		createNotice(json.notice)
	}
	
	const submission = document.createElement('div')
	submission.innerHTML = '<input type="text" id="beatmap-link" class="beatmap-link" placeholder = "Beatmap link"><br><textarea id="info" placeholder="Additional info (optional)"></textarea>'
	content.appendChild(submission)
	
	const submitButton = document.createElement("input");
	submitButton.type = "button"
	submitButton.className = "button-submit"
	submitButton.value = "Submit"
	submitButton.addEventListener("click", ()=>{
		attemptSubmission()
	})
	
	content.appendChild(submitButton)
}
document.getElementById("oauth").addEventListener("click", toSubmission)

const code = window.location.href.split("?code=")[1]
if (code != null){
	toSubmission()
}

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
})