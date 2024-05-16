// ホームに戻るボタンがクリックされた時の処理
$("#home").on("click", function () {
  // 現在の URL に fromOtherPage クエリパラメータを付加して、index.html に遷移
  window.location.href = 'index.html?fromOtherPage=true';
});

// 音声ファイルを再生する関数
function playSound(soundFile) {
  // 新しいAudioオブジェクトを作成し、音声ファイルを読み込む
  var audio = new Audio(soundFile);
  // 音声を再生する
  audio.play();
}

// もし長い音声だったら以下のように音声を停止する関数が必要
// 音声を停止する関数
// function stopSound() {
// audioPlayerというIDを持つオーディオ要素を取得する
// var audio = document.getElementById('audioPlayer');
// オーディオを一時停止し、再生位置を先頭に戻す
//   audio.pause();
//   audio.currentTime = 0;
// }

// ドキュメントが読み込まれた後に実行されるjQueryコード
$(document).ready(function () {
  // スロットのタイマーIDを格納する変数
  let tID = 0;
  // 各リールの結果を保持する変数
  let x, y, z;
  
  // スロットを開始する関数
  function startSlot() {
    // 各リールに1から3までのランダムな値を設定する
    // +1してるのはimg0*とimgファイル名を取得するから
    x = Math.floor(Math.random() * 3 + 1);
    y = Math.floor(Math.random() * 3 + 1);
    z = Math.floor(Math.random() * 3 + 1);
    // 各リールに対応する画像を設定する
    $('#left').attr('src', 'img/slot0' + x + '.jpg');
    $('#center').attr('src', 'img/slot0' + y + '.jpg');
    $('#right').attr('src', 'img/slot0' + z + '.jpg');
    // 一定時間ごとにstartSlot()関数を再帰的に呼び出す
    tID = setTimeout(startSlot, 70);
  }

  // スロットを停止する関数
  function stopSlot() {
    // タイマーをクリアしてスロットを停止する
    clearTimeout(tID);
    // すべてのリールが同じ値である場合
    if (x === y && y === z) {
      let slotResult;
      if (x === 1) {
        // xが1の場合、以下のメッセージに設定
        slotResult = "せ〜んぱ〜い！";
        // 条件1が満たされた場合、音楽01を再生
        playSound('audio/music01.mp3');
      } else if (x === 2) {
        // xが2の場合、以下のメッセージに設定
        slotResult = "あ〜さ〜く〜ら〜！";
        // 条件2が満たされた場合、音楽02を再生する
        playSound('audio/music02.mp3');
      } else if (x === 3) {
        // xが3の場合、以下のメッセージに設定
        slotResult = "ちょっと朝倉さんっ！";
        // 条件3が満たされた場合、音楽03を再生
        playSound('audio/music03.mp3');
      }
      // 結果を表示する
      $('#slotResult').text(slotResult);
    } else {
      // リールの結果が異なる場合は何も表示しない
      $('#slotResult').text("");
    }
  };
  
  // スタートボタンがクリックされたときの処理
  $('#startButton').on('click', function () {
    // スロットを開始する
    startSlot();
  });

  // ストップボタンがクリックされたときの処理
  $('#stopButton').on('click', function () {
    // スロットを停止する
    stopSlot();
  });
});
