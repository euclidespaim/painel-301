/* =====================================================================
   EQUIPE 04
   ---------------------------------------------------------------------
   Este arquivo é SÓ DA SUA EQUIPE. Ninguém mais vai mexer nele,
   então você pode trabalhar sem medo de atrapalhar os colegas.

   REGRA IMPORTANTE: todo id que você criar deve terminar com -04
   (exemplo: id="botao-04"). Isso evita que o seu card brigue com o
   card de outra equipe, porque todos vivem na mesma página.

   O código abaixo JÁ FUNCIONA. Rode o site, veja ele na tela e vá
   trocando as partes aos poucos até virar a sua feature.
   ===================================================================== */

registrarCard({

  // ---- 1. Identificação (troque pelos dados da sua equipe) ----
  equipe: "04",
  titulo: "Dado 3D",
  integrantes: ["Lucas e Kauã"],
  icone: "fa-solid fa-dice-d6",

  // ---- 2. O que aparece dentro do card ----
  montar(area) {

    // 2.1 — O HTML do seu card.
    area.innerHTML = `
      <div class="dado-wrap">
        <div class="dado-3d" id="dado-04" data-face="1" aria-live="polite">
          <span class="face face-1">
            <span class="dot dot-center"></span>
          </span>
          <span class="face face-2">
            <span class="dot dot-top-left"></span>
            <span class="dot dot-bottom-right"></span>
          </span>
          <span class="face face-3">
            <span class="dot dot-top-left"></span>
            <span class="dot dot-center"></span>
            <span class="dot dot-bottom-right"></span>
          </span>
          <span class="face face-4">
            <span class="dot dot-top-left"></span>
            <span class="dot dot-top-right"></span>
            <span class="dot dot-bottom-left"></span>
            <span class="dot dot-bottom-right"></span>
          </span>
          <span class="face face-5">
            <span class="dot dot-top-left"></span>
            <span class="dot dot-top-right"></span>
            <span class="dot dot-center"></span>
            <span class="dot dot-bottom-left"></span>
            <span class="dot dot-bottom-right"></span>
          </span>
          <span class="face face-6">
            <span class="dot dot-top-left"></span>
            <span class="dot dot-top-center"></span>
            <span class="dot dot-top-right"></span>
            <span class="dot dot-bottom-left"></span>
            <span class="dot dot-bottom-center"></span>
            <span class="dot dot-bottom-right"></span>
          </span>
        </div>
      </div>
      <button class="btn btn-dado" id="botao-04">Rolar dado</button>
    `;

    const dado = document.getElementById("dado-04");
    const botao = document.getElementById("botao-04");

    const mostrarFace = (face) => {
      dado.dataset.face = String(face);
    };

    botao.addEventListener("click", () => {
      const face = Math.floor(Math.random() * 6) + 1;
      dado.classList.remove("rodando");
      void dado.offsetWidth;
      dado.classList.add("rodando");

      setTimeout(() => {
        mostrarFace(face);
      }, 120);
    });

  }
});