//原型与原型链
function Elem (id) {
  this.elem = document.getElementById(id);
}

Elem.prototype.html = function (val) {
  var elem = this.elem;
  if (val) {
    elem.innerHTML = val;
    return this;// 链式操作
  } else {
    return elem.innerHTML;
  }
};

Elem.prototype.on = function (type, fn) {
  var elem = this.elem;
  elem.addEventListener(type, fn);
  return this;
};

var div1 = new Elem("note-show");
//console.log(div1.html());
div1.html("<p>hello</p>").on('click', function () {
  alert("clicked");
});
