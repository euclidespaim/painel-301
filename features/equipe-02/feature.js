/* =====================================================================
   EQUIPE 02
   ---------------------------------------------------------------------
   Este arquivo é SÓ DA SUA EQUIPE. Ninguém mais vai mexer nele,
   então você pode trabalhar sem medo de atrapalhar os colegas.

   REGRA IMPORTANTE: todo id que você criar deve terminar com -02
   (exemplo: id="botao-02"). Isso evita que o seu card brigue com o
   card de outra equipe, porque todos vivem na mesma página.

   O código abaixo JÁ FUNCIONA. Rode o site, veja ele na tela e vá
   trocando as partes aos poucos até virar a sua feature.
   ===================================================================== */

registrarCard({
  // ---- 1. Identificação ----
  equipe: "02",
  titulo: "Saudação por Horário",
  integrantes: ["Yasmica", "Bell"],
  icone: "fa-solid fa-clock", // Ícone de relógio

  // ---- 2. O que aparece dentro do card ----
  montar(area) {
    // 2.1 — O HTML do card adaptado para a saudação
    area.innerHTML = `
      <p class="visor" id="greeting-text">Carregando...</p>
      <p class="time-subtitle" id="current-time"></p>
    `;

    // 2.2 — Pegando os elementos do DOM
    const greetingElement = area.querySelector("#greeting-text");
    const timeElement = area.querySelector("#current-time");

    // 2.3 — Função que calcula a hora e exibe a mensagem correta
    function updateGreeting() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");

      let greetingMessage = "";

      if (hours >= 5 && hours < 12) {
        greetingMessage = "Bom dia! ☀️";
      } else if (hours >= 12 && hours < 18) {
        greetingMessage = "Boa tarde! 🌤️";
      } else {
        greetingMessage = "Boa noite! 🌙";
      }

      if (greetingElement) {
        greetingElement.textContent = greetingMessage;
      }

      if (timeElement) {
        timeElement.textContent = `Agora são ${hours}:${minutes}`;
      }
    }

    // 2.4 — Executa imediatamente e agenda a atualização a cada minuto
    updateGreeting();
    setInterval(updateGreeting, 60000);
  }
});