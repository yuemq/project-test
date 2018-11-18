var i, a;
for (i = 0; i < 10; i++) {
  (function (i) {
      a = document.createElement("p");
      a.innerHTML = i + "<br/>";
      a.addEventListener("click", function () {
        alert(i);
      });
      document.body.appendChild(a);
    }
  )(i);
}

function isFirstLoad(){
  var _list=[];
  return function(num){
    if(_list.indexOf(num)){
      return false;
    }else{
      _list.push(num);
      return true;
    }
  }
}
var f=isFirstLoad();
console.log(f(10));//true
console.log(f(10));//false
console.log(f(20));//true





