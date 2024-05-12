// ボタンを押すごとに画面が切り替わる関数
$(document).ready(function() {
  $(".btn").on("click", function() {
      // btnクラスをクリック後の関数処理
      $(this).closest("div").hide();
      // 質問画面に相当する親要素divを非表示にする
      const id = $(this).attr("href");
      // 次の質問hrefをidに格納
      $(id).addClass("fit").fadeIn("slow").show();
      // 次の質問にfitをつけて出力。
  });
});

//選択ボタンデータを配列に入れてカウントする関数
var countA;
//data-value="a"を選択した数を入れる変数
var countB;
//data-value="b"を選択した数を入れる変数
var countC;
var box =[];
//それぞれのデータを配列に入れるための変数box
$(".btn").each(function(){
$(this).on('click',function(){
  var value = $(this).data("value");
   box.push(value);
   //data-value値をboxに入れる。(配列に値を入れるときはpush()を使用)

  countA = box.filter(function(x){
                return x === "a"
              }).length;
  //aの数を変数countAへ入れる
  countB = box.filter(function(y){
                  return y === "b"
              }).length;
  //bの数を変数countBへ入れる
  countC = box.filter(function(z){
    return z === "c"
}).length;
});
});

// 結果を出力する関数
$('.end').on('click', function () {
  // endクラスをクリックしたときの関数
  if (countA > countB && countA > countC) {
      $('#answer_01').css("display", ""); //回答1
      //answer_01のdisplayを""へ
  } else if (countB > countA && countB > countC) {
      $('#answer_02').css("display", "");//回答2
      //answer_02のdisplayを""へ
  } else {
      $('#answer_03').css("display", "");//回答3
      //answer_03のdisplayを""へ
  }
});

$(".return").on('click', function(){
  location.reload(); // ページをリロード
})