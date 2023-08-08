let finalizarApp = 1
let vagas = []
let qtdInscritos = 0

function verVaga(indice) {
  let n = parseFloat(indice)
  let infVagas = vagas[n - 1] 
  alert(indice + "\n" + infVagas.nomeVaga + "\n" + infVagas.descricaoVaga + "\n" + infVagas.dataLimite + "\n" + infVagas.quantidade + "\n" + infVagas.nomeInscrito)
}

do {
  let opcaoMenu = prompt(
    "Menu:\n" + 
    "1- Vagas\n" +
    "2- Criar vaga\n" +
    "3- Visualizar vaga\n" +
    "4- Inscrever canditato\n" +
    "5- Excluir vaga\n" +
    "6- Sair"
    )

  switch (opcaoMenu) {
    case "1":
      if(vagas == 0) {
        alert("Sem vagas no momento")
      }else {
      for(let i = 0; i < vagas.length; i++) {
        let inf = vagas[i]
        alert("Vagas:\n" + (i + 1) + " - " + inf.nomeVaga)
      }
      alert("Quantidade de inscritos: " + qtdInscritos)
      }
      break;

    case "2":
      let vaga = {
        nomeVaga: "",
        descricaoVaga: "",
        dataLimite: "",
        nomeInscrito:[],
        quantidade: 0
      }
      let nVaga = prompt("Nome da vaga")
      vaga.nomeVaga = nVaga
      let descricaoVaga = prompt("Breve descrição da vaga")
      vaga.descricaoVaga = descricaoVaga
      let dataVaga = prompt("Data limite da vaga")
      vaga.dataLimite = dataVaga

      alert("Confirme as informações \n" +
            vaga.nomeVaga + "\n" + vaga.descricaoVaga + "\n" + vaga.dataLimite)
      let validacaoVaga = confirm("Deseja salvar?")
      if(validacaoVaga) {
        vagas.push(vaga)
        vaga = {
          nomeVaga: "",
          descricaoVaga: "",
          dataLimite: "",
          quantidade: 0,
          nomeInscrito:[]
        }
      }
      break;

    case "3":
      if(vagas == 0) {
        alert("Sem vagas disponiveis")
        break;
      }else {
      let verV = prompt("Qual indice da vaga:")
      verVaga(verV)
      break;
    }
    case "4":
      let infVaga = parseFloat(prompt("Qual indice da vaga: ")) - 1
      let nomeCandidato = prompt("Qual seu nome completo?")

      alert("Confirme as informações \n" +
            vagas[infVaga].nomeVaga + "\n" + vagas[infVaga].descricaoVaga + "\n" + vagas[infVaga].dataLimite)

      let validacaoCandidato = confirm("Deseja salvar?")
      if(validacaoCandidato) {
        vagas[infVaga].nomeInscrito.push(nomeCandidato)
        vagas[infVaga].quantidade += 1
        qtdInscritos += 1
      }
      break;

    case "5":
      let infVagaExcluir = parseFloat(prompt("Qual indice da vaga: ")) 
      let confExcluir = confirm("Deseja excluir vaga?")
      if(confExcluir) {
        vagas.splice((infVagaExcluir - 1), 1)
        qtdInscritos -= 1
        break;
      }else break;

    case "6":
      finalizarApp = 0
      break;

    default:
      break;
  }

}
while(finalizarApp != 0)