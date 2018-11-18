var div1=document.getElementById("div1");
var p1=document.getElementsByTagName("p"); //集合
console.log(p1.length);
console.log(p1[0]);

var class1=document.getElementsByClassName(".class1")
var p2=document.querySelectorAll('p');//集合
console.log(p2.length);
console.log(p2[0]);

var p3=document.querySelectorAll('p');//集合
console.log(p3[0].style.width);
p3[0].style.width=100;

var p4=document.querySelectorAll('p');//集合
p4[0].getAttribute("style");
p4[0].setAttribute("style","font-size:30px");

//新增节点
var div1=document.getElementById("list-container");
var p1=document.createElement("p");
p1.innerHTML='hello world'
div1.appendChild(p1);
//移动节点
var div2=document.getElementById("list-container2");
div1.appendChild(div2);

//获取父节点
var div3=document.getElementById("note-35436823");
var par=div3.parentElement;

var div3=document.getElementById("note-35436823");
var child=div3.childNodes;
console.log(child[0].nodeType);  //#text 3
console.log(child[1].nodeType);  //p    1

console.log(child[0].nodeName); //#text
console.log(child[1].nodeName);  //P
