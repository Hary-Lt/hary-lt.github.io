let words = JSON.parse(localStorage.getItem("words")) || [];

function saveWords() {
  localStorage.setItem("words", JSON.stringify(words));
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  if (id === "manage") renderWords();
}

function addWord() {
  const word = document.getElementById("word").value;
  const meaning = document.getElementById("meaning").value;
  if (!word || !meaning) return;
  words.push({ word, meaning });
  saveWords();
  renderWords();
}

function deleteWord(index) {
  words.splice(index, 1);
  saveWords();
  renderWords();
}

function renderWords() {
  const list = document.getElementById("word-list");
  list.innerHTML = "";
  words.forEach((w, i) => {
    const li = document.createElement("li");
    li.innerHTML = `${w.word} - ${w.meaning}
      <button onclick="deleteWord(${i})">X</button>`;
    list.appendChild(li);
  });
}

function startGame(type) {
  showScreen("game");
  if (words.length < 2) {
    document.getElementById("game").innerHTML = "Add more words!";
    return;
  }
  if (type === "image") startImageGame();
  if (type === "pair") startPairGame();
  if (type === "quiz") startQuizGame();
}
