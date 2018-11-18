

function fn1(){
  var a=200;
  return function () {
    console.log(a);
  }
}
var f=fn1();

function fn2(fn){
  var a=300;
  fn();
}
fn2(f);

