const btn = document.getElementById("submit")
const input = document.getElementById("title")
const text = document.getElementById("hi")

function yes(){
  text.innerHTML = input.value
}

btn.addEventListener("click", yes);
