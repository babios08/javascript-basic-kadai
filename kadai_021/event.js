// HTML要素を取得して定数に代入
const btn = document.getElementById('btn');
const text = document.getElementById('text');

// ボタンがクリックされたときの処理を設定
btn.addEventListener('click', () => {
  // 2秒（2000ミリ秒）後にテキストを書き換える
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});