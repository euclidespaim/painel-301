/* =====================================================================
   EQUIPE 03
   ---------------------------------------------------------------------
   Este arquivo é SÓ DA SUA EQUIPE. Ninguém mais vai mexer nele,
   então você pode trabalhar sem medo de atrapalhar os colegas.

   REGRA IMPORTANTE: todo id que você criar deve terminar com -03
   (exemplo: id="botao-03"). Isso evita que o seu card brigue com o
   card de outra equipe, porque todos vivem na mesma página.

   O código abaixo JÁ FUNCIONA. Rode o site, veja ele na tela e vá
   trocando as partes aos poucos até virar a sua feature.
   ===================================================================== */

registrarCard({

  // ---- 1. Identificação (troque pelos dados da sua equipe) ----
  equipe: "03",
  titulo: "Gerador de Nomes",
  integrantes: ["Rebeca", "Júlia", "Beatriz"],
  icone: "fa-solid fa-star",   // procure outro em fontawesome.com/icons

  // ---- 2. O que aparece dentro do card ----
  montar(area) {

    // 2.1 — O HTML do seu card.
    area.innerHTML = `
      <p>Clique no botão e ache um nome😝</p>
      <p class="visor" id="visor-03">...</p>
      <button class="btn" id="botao-03">Clicar</button>
    `;

    // 2.2 — Pegando os elementos que acabamos de criar.
    const nome = [
      "Maria",
      "João",
      "Ester",
      "Alberto",
      "Patrick",
      "Janaina",
      "Eduarda",
      "Jonathan",
      "Júlia"
    ]
    const visor = document.getElementById("visor-03");
    const botao = document.getElementById("botao-03");

    // 2.3 — Uma variável para guardar o estado.
    let pessoa = "...";

    // 2.4 — O que acontece quando o usuário clica.
    botao.addEventListener("click", function () {
      pessoa = nome[Math.floor(Math.random() * 8)];
      visor.innerText = pessoa;
    });

  }
});
