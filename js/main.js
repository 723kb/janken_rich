//スタートページのボタンを押すとメインページに切り替わる
$("#openBtn").on("click", function () {
  $("#startPage").hide();
  $("#mainPage").fadeIn();
});

// 途中でホームを押すと質問が消えない！
// ホームに戻るボタンがクリックされた時の処理
$("#home").on("click", function () {
  // スタートページを非表示にする
  $("#startPage").hide();
  // 全ての質問を非表示にする
  $(".question").hide();
  // 最初の質問を表示する
  $("#q_01").show();
  // 結果ページを非表示にする
  $(".result").hide();
  // モーダルを非表示にする  時々ならない？
  $("#modal").hide();
  // box配列を空にする これをしないと結果がおかしくなる
  box = [];
});

// ボタンを押すごとに画面が切り替わる関数
$(document).ready(function () {
  // btnクラスをクリック後の関数処理
  $(".btn").on("click", function () {
    // 質問画面に相当する親要素divを非表示にする
    $(this).closest("div").hide();
    // 次の質問hrefをidに格納
    const id = $(this).attr("href");
    // 次の質問にfitをつけて出力。
    $(id).addClass("fit").fadeIn("slow").show();
  });
});

//選択ボタンデータを配列に入れてカウントする関数
// data-value="a"を選択した数を入れる変数
var countA = 0;
// data-value="b"を選択した数を入れる変数
var countB = 0;
// data-value="c"を選択した数を入れる変数
var countC = 0;
// それぞれのデータを配列に入れるための変数box
var box = [];

// btnクラスをクリックした時の処理
$(".btn").on("click", function () {
  // data-value値をboxに入れる。(配列に値を入れるときはpush()を使用)
  var value = $(this).data("value");
  box.push(value);
  // aの数を変数countAへ入れる
  //xはfilter関数の任意の引数名 配列内の要素をフィルタリングし、その要素が文字列"a"と一致するかを確認し一致すればcountAにbox配列内でaと一致する要素の数が入る
  countA = box.filter(function (x) {
    return x === "a";
  }).length;  //filterでフィルタリングされた結果の配列の要素数を返す
  // bの数を変数countBへ入れる
  countB = box.filter(function (y) {
    return y === "b";
  }).length;
  // cの数を変数countCへ入れる
  countC = box.filter(function (z) {
    return z === "c";
  }).length;
});

// 結果を出力してから一定時間後にモーダルを表示する関数
// endクラスをクリックしたときの関数
$(".end").on("click", function () {
  // countAがcountBよりも多いかつ、countAがcountCよりも多い場合は回答1をフェードイン
  if (countA > countB && countA > countC) {
    $("#answer_01").fadeIn("slow");
  } // countBがcountAよりも多いかつ、countBがcountCよりも多い場合は回答2をフェードイン
  else if (countB > countA && countB > countC) {
    $("#answer_02").fadeIn("slow");
  } // それ以外つまりcountCが他の2つより多い場合は回答3をフェードイン
  else {
    $("#answer_03").fadeIn("slow");
  }
  // 5秒後にモーダルを表示
  setTimeout(function () {
    // モーダルを表示する処理
     // 5000ミリ秒 = 6秒後に表示
    $("#modal").fadeIn(); 
  }, 6000);
});

    // モーダルを閉じるボタンのイベントリスナー
    $("#close-modal").on("click", function(){
      $("#modal").fadeOut();
    });

// ？？？ボタンがクリックされた時の処理
$("#linkBtn").on("click", function () {
  window.location.href = 'slot.html'; // slotページへリダイレクト
});

// ページをリロード
$(".return").on("click", function () {
  location.reload();
});

// 以下シェア機能→なぜかjsで制御できずhtmlで対処
// const share_url = location.href;
// const share_hostpath = location.host + location.pathname;
// const share_title = document.title;
// // twitter
// const share_twitter = document.getElementById("js-share-twitter");
// share_twitter.setAttribute(
// 	"href",
// 	"https://twitter.com/share?url=" + share_url + "&text="  + "&hashtags="  + share_title
// );
// // line
// const share_line = document.getElementById("js-share-line");
// share_line.setAttribute(
// 	"href",
// 	"https://social-plugins.line.me/lineit/share?url=" + share_url
// );

