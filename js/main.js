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
var countA = 0; // data-value="a"を選択した数を入れる変数
var countB = 0; // data-value="b"を選択した数を入れる変数
var countC = 0; // data-value="c"を選択した数を入れる変数
var box = []; // それぞれのデータを配列に入れるための変数box

$(".btn").on('click', function() {
  var value = $(this).data("value");
  box.push(value);
  // data-value値をboxに入れる。(配列に値を入れるときはpush()を使用)
  
  countA = box.filter(function(x) {
    return x === "a";
  }).length;
  // aの数を変数countAへ入れる
  
  countB = box.filter(function(y) {
    return y === "b";
  }).length;
  // bの数を変数countBへ入れる
  
  countC = box.filter(function(z) {
    return z === "c";
  }).length;
  // cの数を変数countCへ入れる
});

// 結果を出力してから一定時間後にモーダルを表示する関数
$('.end').on('click', function() {
  // endクラスをクリックしたときの関数
  if (countA > countB && countA > countC) {
    $('#answer_01').fadeIn("slow"); // 回答1をフェードイン
  } else if (countB > countA && countB > countC) {
    $('#answer_02').fadeIn("slow"); // 回答2をフェードイン
  } else {
    $('#answer_03').fadeIn("slow"); // 回答3をフェードイン
  }

  // 5秒後にモーダルを表示
  setTimeout(function() {
    // モーダルを表示する処理
    $('#modal').fadeIn(); // モーダルをフェードインさせる場合
  }, 5000); // 5000ミリ秒 = 5秒後に表示
});

  // ？？？ボタンがクリックされた時の処理
  $('#linkBtn').on('click', function() {
    window.location.href = 'slot.html'; // slotページへリダイレクト
  });

// ページをリロード
$(".return").on('click', function() {
  location.reload(); 
});



