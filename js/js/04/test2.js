Date.now();
var dt = new Date();
dt.getTime();//毫秒
dt.getFullYear();//年
dt.getMonth(); //月 0-11
dt.getDate();//日
dt.getHours();//时
dt.getMinutes(); //分
dt.getSeconds();//秒
dt.getDay();//星期

var arr = [7, 2, 4, 3, 5];
var arr2=arr.splice(0,2);
console.log(arr);
console.log(arr2);

var arr = [7, 2, 4, 3, 5];
var arr2=arr.slice(0,2);
console.log(arr);
console.log(arr2);

var obj = {
  x: 100,
  y: 200,
  z: 300
};
var item;
for (item in obj) {
  if (obj.hasOwnProperty(item)) {
    console.log(item, obj[item]);
  }
}