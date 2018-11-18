console.log(1, new Date().getTime());
setTimeout(function () {
  console.log(2, new Date().getTime());
}, 10);
console.log(3, new Date().getTime());
var a;
for (var i = 0; i < 100; i++) {
  a = document.createElement("p");
  a.innerHTML = i + "<br/>";
  document.body.appendChild(a);
}
console.log(4, new Date().getTime());