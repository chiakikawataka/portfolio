// script.js

// 単語のリスト
const words = ["apple","javascript", "html", "css", "browser", "frontend", "backend", "react", "node", "async", "function"];

let currentWord = "";
let wordIndex = 0;

const wordDisplay = document.getElementById("word");

const input = document.getElementById("input");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");

// ランダムな単語をセット
function setNewWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  wordDisplay.textContent = currentWord;
  message.textContent = "";
}

// 入力をチェック
input.addEventListener("input", () => {
  if (input.value === currentWord) {
    message.textContent = "正解！次の単語へ";
    setTimeout(setNewWord, 1000); // 1秒後に次の単語
  }
});

// リスタートボタンで最初から
restartBtn.addEventListener("click", () => {
  setNewWord();
});

// 最初の単語を表示
setNewWord();
