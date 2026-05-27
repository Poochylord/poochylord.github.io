const btn = document.getElementById("submit")
const inputthing = document.getElementById("title")
const tx = document.getElementById("hi")

function yes(){
  tx.innerHTML = inputthing.value
}

await btn.addEventListener("click", yes);
