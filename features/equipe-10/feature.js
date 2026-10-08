/* =====================================================================
   EQUIPE 10
   ---------------------------------------------------------------------
   Este arquivo é SÓ DA SUA EQUIPE. Ninguém mais vai mexer nele,
   então você pode trabalhar sem medo de atrapalhar os colegas.

   REGRA IMPORTANTE: todo id que você criar deve terminar com -10
   (exemplo: id="botao-10"). Isso evita que o seu card brigue com o
   card de outra equipe, porque todos vivem na mesma página.

   O código abaixo JÁ FUNCIONA. Rode o site, veja ele na tela e vá
   trocando as partes aos poucos até virar a sua feature.
   ===================================================================== */

registrarCard({

  // ---- 1. Identificação (troque pelos dados da sua equipe) ----
  equipe: "10",
  titulo: "Buscador de pokemon",
  integrantes: ["Murilo", "Matheus"],
  icone: "fa-solid fa-star",   // procure outro em fontawesome.com/icons

  // ---- 2. O que aparece dentro do card ----
  montar(area) {

    // 2.1 — O HTML do seu card.
    area.innerHTML = `
      <p>Escreva um nome de um pokemon</p>
      <input class="input" id="input-10" type="text"/>
      <button class="btn" id="botao-10" type="text">Pesquisar</button>
      <div class="container1">
        <img class="visor" id="visor-10"></img>
        <ul class="lista-10" id="lista-10">
        </ul>
      </div>
    `;

    // 2.2 — Pegando os elementos que acabamos de criar.
    const visor = document.getElementById("visor-10");
    const botao = document.getElementById("botao-10");
    const input = document.getElementById("input-10");
    const lista = document.getElementById("lista-10")
    

    botao.addEventListener("click", () => {
      lista.textContent = ""
      fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
        .then(res => res.json())
        .then(data => {
          data.types.forEach(item => {
            const li = document.createElement("li")
            li.textContent = item.type.name
            lista.appendChild(li)
          })
          visor.src = data.sprites.front_default

          console.log(data)
        })
    })

  }
});
