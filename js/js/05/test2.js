console.log(navigator.userAgent);

//默认写法
var btn1 = document.getElemetnById("btn1");
btn1.addEventListener("click", function () {
  alert("clicked");
});

//写一个通用函数，这样代码简洁，容易记忆
function bindEvent (elem, type, fn) {
  elem.addEventListener(type, fn);
}

var btn2 = document.getElemetnById("btn2");
bindEvent(btn2, "click", function () {
  alert("clicked");
});
