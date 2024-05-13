// ホームに戻るボタンがクリックされた時の処理
$("#home").on("click", function (event) {
  // デフォルトの動作をキャンセル
  event.preventDefault();
  // index.htmlのstartPageを非表示にする なぜかならない
  $("#startPage").hide();
  // index.htmlのURLに遷移し、#mainPageのセクションにスクロール
  window.location.href = "index.html#mainPage";
});

// ？？？ボタンがクリックされた時の処理
$("#linkBtn").on("click", function () {
  // slotページへリダイレクト
  window.location.href = "slot.html";
});