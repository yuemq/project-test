//ES6 常用功能

// let 与 const
/*var i = 100;
i = 200;
var j = 100;
j = 200;*/

/*
let i = 100;
i = 200;
const j = 100;
//j = 200;
*/

//  字符串模板
/*var name = "zhangsan", name = 20, html = "";
html += "<div>";
html += "    <p>" + name + "</p> ";
html += "    <p>" + age + "</p> ";
html += "</div>";*/

/*
const name="zhangan",age=20
const html=`
        <div>
            <p>${name}</p>
            <p>${age}</p>
        </div>
`*/

// 解构赋值
/*var obj={a:100,b:200}
var a=obj.a
var b=obj.b

var arr=["xxx","yyy","zzz"]
var x=arr[0]*/

/*const obj = {a: 100, b: 200};
const {a, b} = obj;

const arr = ["xxx", "yyy", "zzz"];
const [x, y, z] = arr;*/

// 函数默认参数
/*function fn (a, b) {
  if (b == null) {
    b = 0;
  }
}*/
/*
function  fn(a,b=0){

}*/
//块级作用域
/*var obj = {a: 100, b: 200};
for (var item in obj) {
  console.log(item);
}
console.log(item);//b*/

/*
const obj = {a: 100, b: 200};
for (let item in obj) {
  console.log(item);
}
console.log(item);//undefined*/
