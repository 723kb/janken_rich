// ホームに戻るボタンがクリックされた時の処理
$("#home").on("click", function () {
  // 現在の URL に fromOtherPage クエリパラメータを付加して、index.html に遷移
  window.location.href = 'index.html?fromOtherPage=true';
});

// ？？？ボタンがクリックされた時の処理
$("#linkBtn").on("click", function () {
  // slotページへリダイレクト
  window.location.href = "slot.html";
});