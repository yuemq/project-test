import { fn1, fn2 } from "./util.js";
import util from "./util2.js";
/*
console.log(util);

fn1();
fn2();*/

/*var arr = [1, 2, 3];
var arr2 = arr.map(item => item + 1);
console.log(arr2);*/

/*function fn () {
  console.log("real", this); // this {x:100}

  var arr = [1, 2, 3];
  arr.map(item => {
    console.log("js", this); //this window
  });
}

fn.call({x: 100});*/

import "babel-polyfill";

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