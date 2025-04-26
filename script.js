function startWordRotation() {
    const words = ["_luta_", "treino_", "tatame_", "brasileir_", "jiu_jitsu", "_estilo","cha_o"];
    const trocaSpan = document.getElementById("troca-palavras");

    if (!trocaSpan) return; // segurança: se não achar o elemento, para

    let index = 0;

    setInterval(() => {
      index = (index + 1) % words.length;
      trocaSpan.textContent = words[index];
    }, 2000); // troca a cada 1 segundo
  }

  startWordRotation();
