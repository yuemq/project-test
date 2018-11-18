//没有块级作用域
if(true){
  var name='zhangdan';
}
console.log(name);

//全局作用域
var a=100;
function fn1(){
  //函数作用域
  var a=200;
  console.log('fn1',a);
}
fn1();
console.log('script',a);


var a=100;
function fn1(){
  var b=100;
  // 当前作用域没有定义的变量，叫做“自由变量”
  console.log(a);
  console.log(b);
}
fn1();

var a=100;
function fn1(){
  var b=200;
  function fn2 () {
    var c=300;
    console.log(a);
    console.log(b);
    console.log(c);
  }
  fn2();
}
fn1();