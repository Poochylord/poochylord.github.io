const content = document.querySelector(".content")

function disableButtons(){
	document.querySelector(".group1").disabled = true
	document.querySelector(".group2").disabled = true
	document.querySelector(".group3").disabled = true
}	

document.querySelector(".group1").addEventListener("click", ()=>{
	disableButtons()
	document.querySelector(".text1").style = "display:block";
	document.querySelector(".continue").style = "display:block";
})
document.querySelector(".group2").addEventListener("click", ()=>{
	disableButtons()
	document.querySelector(".text2").style = "display:block";
		document.querySelector(".continue").style = "display:block";
})

document.querySelector(".group3").addEventListener("click", ()=>{
	disableButtons()
	document.querySelector(".text3").style = "display:block";
		document.querySelector(".continue").style = "display:block";
})

