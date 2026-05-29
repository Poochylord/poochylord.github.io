const btn = document.getElementsByClassName("button-submit")
const inputthing = document.getElementById("info")
const tx = document.getElementById("hi")

function yes(){
  tx.innerHTML = inputthing.value
}

btn.addEventListener("click", yes);
