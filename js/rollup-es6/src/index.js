/*
import { fn1, fn2 } from "./util.js";
import util from "./util2.js";

console.log(util);

fn1();
fn2();

var arr = [1, 2, 3];
var arr2 = arr.map(item => item + 1);
console.log(arr2);
*/

/*class MathHandel {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  add () {
    return this.x + this.y;
  }
}

const m = new MathHandel(1, 2);
console.log(m.add());*/

/*
class Animal {
  constructor (name) {
    this.name = name;
  }

  eat () {
    console.log(this.name + " eat");
  }
}

class Dog extends Animal {
  constructor (name) {
    super(name);
    this.name = name;
  }

  bark () {
    console.log(this.name + " bark");
  }
}

const hashiqi = new Dog("哈士奇");
hashiqi.bark();
hashiqi.eat();*/

/*function LoadImg (src) {
  const promise = new Promise(function (resolve, reject) {
    var img = document.createElement("img");
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject();
    };
    img.src = src;
  });
  return promise;
}

var src = "https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super";
var result = LoadImg(src);
result.then(function (img) {
  console.log(img.width);
  return img;
}, function () {
  console.log("fail");
}).then(function (img) {
  console.log(img.height);
});*/

/*
result.then(function (img) {
  console.log(img.height);
});*/

/*function LoadImg (src) {
  const promise = new Promise(function (resolve, reject) {
    var img = document.createElement("img");
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject();
    };
    throw new Error("自定义错误");
    img.src = src;
  });
  return promise;
}

var src = "https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super";
var result = LoadImg(src);
result.then(function (img) {
  console.log(img.width);
  return img;
}).then(function (img) {
  console.log(img.height);
}).catch(function (ex) {
  console.log(ex);
});*/

/*
function LoadImg (src) {
  const promise = new Promise(function (resolve, reject) {
    var img = document.createElement("img");
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject("图片加载失败");
    };
    img.src = src;
  });
  return promise;
}

var src = "https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super";
var result = LoadImg(src);

var src2 = "https://www.imooc.com/static/img/index/logo.gif";
var result2 = LoadImg(src2);
result.then(function (img) {
  console.log(img.width);
  return result2;
}).then(function (img) {
  console.log(img.height);
}).catch(function (ex) {
  console.log(ex);
});*/

/*function LoadImg (src) {
  const promise = new Promise(function (resolve, reject) {
    var img = document.createElement("img");
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject("图片加载失败");
    };
    img.src = src;
  });
  return promise;
}

var src = "https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super";
var result = LoadImg(src);

var src2 = "https://www.imooc.com/static/img/index/logo.gif";
var result2 = LoadImg(src2);


Promise.all([result, result2]).then(function (datas) {
  console.log("all", datas[0]);
  console.log("all", datas[1]);
});

Promise.race([result, result2]).then(function (data) {
  console.log("race", data);
});*/


function LoadImg (src) {
  const promise = new Promise(function (resolve, reject) {
    var img = document.createElement("img");
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function () {
      reject("图片加载失败");
    };
    img.src = src;
  });
  return promise;
}

const src = "https://www.baidu.com/img/superlogo_c4d7df0a003d3db9b65e9ef0fe6da1ec.png?where=super";
const src2 = "https://www.imooc.com/static/img/index/logo.gif";
const load = async function () {
  const result = await LoadImg(src);
  console.log(result);
  const result2 = await LoadImg(src2);
  console.log(result2);
};
load();

