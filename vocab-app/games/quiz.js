function startQuizGame() {
  const container = document.getElementById("game");

  let score = 0;
  let index = 0;
  let questions = [...words].sort(() => 0.5 - Math.random());

  function next() {
    if (index >= questions.length) {
      container.innerHTML = `<h2>Score: ${score}</h2>
      <button onclick="startQuizGame()">Replay</button>`;
      return;
    }

    let q = questions[index];
    let options = [q.meaning];

    while (options.length < 4) {
      let rand = words[Math.floor(Math.random() * words.length)].meaning;
      if (!options.includes(rand)) options.push(rand);
    }

    options.sort(() => Math.random() - 0.5);

    container.innerHTML = `<h3>${q.word}</h3>`;

    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.innerText = opt;
      btn.onclick = () => {
        if (opt === q.meaning) {
          score++;
          btn.classList.add("correct");
        } else {
          btn.classList.add("wrong");
        }
        setTimeout(() => { index++; next(); }, 800);
      };
      container.appendChild(btn);
    });
  }

  next();
}
