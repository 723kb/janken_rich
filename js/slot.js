function playSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}

function stopSound() {
  var audio = document.getElementById('audioPlayer');
  audio.pause();
  audio.currentTime = 0;
}
$(document).ready(function () {
  let tID = 0;
  let x, y, z;

  function startSlot() {
    x = Math.floor(Math.random() * 3 + 1);
    y = Math.floor(Math.random() * 3 + 1);
    z = Math.floor(Math.random() * 3 + 1);

    $('#left').attr('src', 'img/slot0' + x + '.jpg');
    $('#center').attr('src', 'img/slot0' + y + '.jpg');
    $('#right').attr('src', 'img/slot0' + z + '.jpg');

    tID = setTimeout(startSlot, 70);
  }

  function stopSlot() {
    clearTimeout(tID);
    if (x === y && y === z) {
      let slotResult;
      if (x === 1) {
        slotResult = "せんぱ〜い";
        playSound('audio/music01.mp3'); // 条件1が満たされた場合に音楽01を再生
      } else if (x === 2) {
        slotResult = "あ〜さ〜く〜ら〜";
        playSound('audio/music02.mp3'); // 条件2が満たされた場合に音楽02を再生
      } else if (x === 3) {
        slotResult = "ちょっと朝倉さんっ！"; playSound('audio/music03.mp3'); // 条件3が満たされた場合に音楽03を再生
      }
      $('#slotResult').text(slotResult);
    } else {
      $('#slotResult').text("");
    }
  }

  $('#startButton').on('click', function() {
    startSlot();
  });

  $('#stopButton').on('click', function() {
    stopSlot();
  });
});