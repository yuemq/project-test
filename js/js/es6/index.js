/*
function MathHandel (x, y) {
  this.x = x;
  this.y = y;
}

MathHandel.prototype.add = function () {
  return this.x + this.y;
};

var m = new MathHandel(1, 2);
console.log(m.add());*/

/*function Animal () {
  this.eat = function () {
    console.log("Animal eat");
  };
}

function Dog () {
  this.bark = function () {
    console.log("Dog bark");
  };
}*/

//通过原型，实现继承
/*Dog.prototype = new Animal();

var hashiqi = new Dog();
hashiqi.bark();
hashiqi.eat();
console.log(hashiqi.__proto__ === Dog.prototype);*/

/*function LoadImg (src, callback, fail) {
  var img = document.createElement("img");
  img.onload = function () {
    callback(img);
  };
  img.onerror = function () {
    fail();
  };
  img.src = src;
}

var src = "https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super";
LoadImg(src, function (img) {
  console.log(img.width);
}, function () {
  console.log("fail");
});*/

function fn () {
  console.log("real", this); // this {x:100}

  var arr = [1, 2, 3];
  arr.map(function (item) {
    console.log("js", this); //this window
  });
}

fn.call({x: 100});