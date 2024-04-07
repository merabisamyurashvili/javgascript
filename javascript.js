const h1 = document.querySelector("h1");
console.dir(h1);

function func1(x) {
  h1.innerText = h1.innerText + x;
}

function func2() {
  h1.innerText = "";
}
function tolia() {
  h1.innerText = eval(h1.innerText);
}
