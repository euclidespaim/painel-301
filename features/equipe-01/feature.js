/* =====================================================================
   EQUIPE 01
   ---------------------------------------------------------------------
   Este arquivo é SÓ DA SUA EQUIPE. Ninguém mais vai mexer nele,
   então você pode trabalhar sem medo de atrapalhar os colegas.

   REGRA IMPORTANTE: todo id que você criar deve terminar com -01
   (exemplo: id="botao-01"). Isso evita que o seu card brigue com o
   card de outra equipe, porque todos vivem na mesma página.

   O código abaixo JÁ FUNCIONA. Rode o site, veja ele na tela e vá
   trocando as partes aos poucos até virar a sua feature.
   ===================================================================== */

/* =====================================================================
   EQUIPE 01
   ---------------------------------------------------------------------
   Este arquivo é SÓ DA SUA EQUIPE. Ninguém mais vai mexer nele,
   então você pode trabalhar sem medo de atrapalhar os colegas.

   REGRA IMPORTANTE: todo id que você criar deve terminar com -01
   (exemplo: id="botao-01"). Isso evita que o seu card brigue com o
   card de outra equipe, porque todos vivem na mesma página.

   O código abaixo JÁ FUNCIONA. Rode o site, veja ele na tela e vá
   trocando as partes aos poucos até virar a sua feature.
   ===================================================================== */

registrarCard({

  // ---- 1. Identificação (troque pelos dados da sua equipe) ----
  equipe: "01",
  titulo: "Contagem Regressiva",
  integrantes: ["Nome do aluno 1", "Nome do aluno 2"],
  icone: "fa-solid fa-hourglass-half",   // Ícone de ampulheta (FontAwesome)

  // ---- 2. O que aparece dentro do card ----
  montar(area) {

    // 2.1 — O HTML do seu card com campo de tempo e botões
    area.innerHTML = `
      <p>Defina os segundos e inicie a contagem:</p>
      <input type="number" id="input-tempo-01" value="10" min="1" style="width: 60px; text-align: center;" />
      <p class="visor" id="visor-01">10</p>
      <button class="btn" id="btn-iniciar-01">Iniciar</button>
      <button class="btn" id="btn-resetar-01">Resetar</button>
    `;

    // 2.2 — Pegando os elementos do DOM
    const visor = document.getElementById("visor-01");
    const btnIniciar = document.getElementById("btn-iniciar-01");
    const btnResetar = document.getElementById("btn-resetar-01");
    const inputTempo = document.getElementById("input-tempo-01");

    // 2.3 — Variáveis para guardar o tempo e o intervalo do timer
    let tempoRestante = 10;
    let timer = null;

    // Atualiza o visor ao mudar o input de tempo
    inputTempo.addEventListener("input", function () {
      if (!timer) {
        tempoRestante = parseInt(inputTempo.value) || 0;
        visor.innerText = tempoRestante;
      }
    });

    // 2.4 — Ação do botão Iniciar / Pausar
    btnIniciar.addEventListener("click", function () {
      // Se a contagem já estiver rodando, pausa
      if (timer) {
        clearInterval(timer);
        timer = null;
        btnIniciar.innerText = "Continuar";
        return;
      }

      // Se o tempo acabou ou está zerado, reinicia com o valor do input
      if (tempoRestante <= 0) {
        tempoRestante = parseInt(inputTempo.value) || 10;
      }

      btnIniciar.innerText = "Pausar";

      // Cria o intervalo de 1 segundo (1000 ms)
      timer = setInterval(function () {
        tempoRestante--;
        visor.innerText = tempoRestante;

        // Quando o tempo acabar
        if (tempoRestante <= 0) {
          clearInterval(timer);
          timer = null;
          visor.innerText = "Tempo Esgotado! ⏰";
          btnIniciar.innerText = "Iniciar";
        }
      }, 1000);
    });

    // 2.5 — Ação do botão Resetar
    btnResetar.addEventListener("click", function () {
      clearInterval(timer);
      timer = null;
      tempoRestante = parseInt(inputTempo.value) || 10;
      visor.innerText = tempoRestante;
      btnIniciar.innerText = "Iniciar";
    });

  }
});