function startPairGame() {
  const container = document.getElementById("game");
  container.innerHTML = "<h2>Match Words</h2>";

  let selected = null;
  let pairs = [...words].slice(0, 5);

  let left = pairs.map(p => p.word).sort(() => Math.random() - 0.5);
  let right = pairs.map(p => p.meaning).sort(() => Math.random() - 0.5);

  left.forEach(word => {
    const btn = document.createElement("button");
    btn.innerText = word;
    btn.onclick = () => { selected = word; };
    container.appendChild(btn);
  });

  right.forEach(mean => {
    const btn = document.createElement("button");
    btn.innerText = mean;
    btn.onclick = () => {
      let match = pairs.find(p => p.word === selected && p.meaning === mean);
      btn.classList.add(match ? "correct" : "wrong");
    };
    container.appendChild(btn);
  });
}
