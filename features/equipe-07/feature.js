/* =====================================================================
   EQUIPE 07
   ---------------------------------------------------------------------
   Este arquivo é SÓ DA SUA EQUIPE. Ninguém mais vai mexer nele,
   então você pode trabalhar sem medo de atrapalhar os colegas.

   REGRA IMPORTANTE: todo id que você criar deve terminar com -07
   (exemplo: id="botao-07"). Isso evita que o seu card brigue com o
   card de outra equipe, porque todos vivem na mesma página.

   O código abaixo JÁ FUNCIONA. Rode o site, veja ele na tela e vá
   trocando as partes aos poucos até virar a sua feature.
   ===================================================================== */


registrarCard({

  equipe: "07",
  titulo: "Lista de Recados",
  integrantes: ["Luana", "Camile"],
  icone: "fa-solid fa-list",

 montar(area) {

    area.innerHTML = `
      <p>Escreva um recado:</p>

      <input 
        class="campo" 
        id="entrada-07" 
        placeholder="Digite seu recado"
      >

      <button class="btn" id="adicionar-07">
        Adicionar recado
      </button>

      <ul class="lista" id="recados-07"></ul>
    `;

    const entrada = document.getElementById("entrada-07");
    const adicionar = document.getElementById("adicionar-07");
    const recados = document.getElementById("recados-07");

    adicionar.onclick = function () {

      if (entrada.value !== "") {

        recados.innerHTML += `
          <li>${entrada.value}</li>
        `;

        entrada.value = "";
      }

    };
  }

});
