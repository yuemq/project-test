//第1种情况
function Foo (name) {
  this.name = name;
}

var f = new Foo("zhangsan");

//第2种情况
var a = {
  name: "A",
  printName: function () {
    console.log(this);
  }
};
a.printName(); // this === a

//第3种情况
function fn1 () {
  console.log(this);
}

fn1(); //this === window

//第4种情况
function fn2 (name, age) {
  console.log(this);
}

//call 函数第一个参数是this，第二个参数是函数的参数，并且立即执行
fn2.call({y: 200}, "zhangsan", 20); //this === {y:200}
//apply 函数第一个参数是this，函数的参数用[]包起来，并且立即执行
fn2.apply({z: 300}, ["zhangsan", 20]); // this==={z:300}
//bind 函数参数是this,不会立即执行，必须手动用()来执行
fn2.bind({d: 400})("zhangsan", 20);

//直接bind的话，这个函数必须是函数表达式，不能是函数声明
var fn3 = function (name, age) {
  console.log(this);
}.bind({e:600});
fn3('zhangsan',20);



