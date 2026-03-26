function startImageGame() {
  const container = document.getElementById("game");
  container.innerHTML = "<h2>Match Image</h2>";

  let shuffled = [...words].sort(() => 0.5 - Math.random()).slice(0, 6);

  shuffled.forEach(w => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<div style="font-size:40px">📦</div><div>${w.word}</div>`;
    card.onclick = () => {
      card.classList.add("correct");
    };
    container.appendChild(card);
  });
}
