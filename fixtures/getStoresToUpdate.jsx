const fs = require('fs');

// Função para comparar e retornar apenas os que precisam ser atualizados
const getStoresToUpdate = () => {

  const listaParaAtualizar = [];

  for (const antigo of storesAntigos) {

    const novo = storesNovos.find(x => x.codigofilial === antigo.codigofilial);

    if (!novo) {
      console.log(`Nenhum dado novo encontrado para a filial ${antigo.codigofilial}`);
      continue;
    }

    let precisaAtualizar = false;

    // Verifica gerente
    if (novo.gerente && novo.gerente !== antigo.gerente) {
      precisaAtualizar = true;
    }

    // Verifica supervisor
    if (novo.supervisor && novo.supervisor !== antigo.supervisor) {
      precisaAtualizar = true;
    }

    if (precisaAtualizar) {

      listaParaAtualizar.push({
        codigofilial: antigo.codigofilial,
        antigo: {
          gerente: antigo.gerente,
          supervisor: antigo.supervisor
        },
        novo: {
          gerente: novo.gerente,
          supervisor: novo.supervisor
        }
      });

      console.log(`→ Filial ${antigo.codigofilial} possui diferenças e foi adicionada ao JSON.`);
    }
  }

  // grava em JSON
  fs.writeFileSync(
    'filiais_para_atualizar.json',
    JSON.stringify(listaParaAtualizar, null, 2),
    'utf-8'
  );

  console.log("Arquivo filiais_para_atualizar.json salvo com sucesso.");

  return listaParaAtualizar;
};

const resultado = getStoresToUpdate();
