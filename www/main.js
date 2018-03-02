// 現在時刻を表示する関数を定義します。

 function showClock1() {

// 現在時刻を取得する
 var nowTime = new Date();
 var nowHour = nowTime.getHours();
 var nowMin  = nowTime.getMinutes();
 var nowSec  = nowTime.getSeconds();
 var nowMsec  = nowTime.getMilliseconds();


// 時分秒を配列に格納
//
//var nowHMSM[0] = nowTime.getHours();
// var nowHMSM[1]  = nowTime.getMinutes();
 // var nowHMSM[2]  = nowTime.getSeconds();
 // var nowHMSM[3]  = nowTime.getMilliseconds();

 var msg1 = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + ":" + nowMsec + " です。";

 // javascriptからhtml要素を書き換えるには
 // document.getElementById("ID名").innerHTML = "";
 // を使います。

 document.getElementById("watch").innerHTML = msg1;

}
setInterval('showClock1()',1);

