  // DOMから要素を取得
const textElement = document.getElementById("text");
const button = document.getElementById("btn");

// ボタンがクリックされたときのイベント処理を設定
button.addEventListener("click", () => {
  // h2のテキストを書き換える
  textElement.textContent = "ボタンをクリックしました";
});