const fs = require('fs');

const atualizarArquivoLocal = () => {
  const lojasOriginais = JSON.parse(fs.readFileSync('filiais.json', 'utf-8'));
  const atualizacoes = JSON.parse(fs.readFileSync('filiais_para_atualizar.json', 'utf-8'));

  console.log(`Total de lojas originais: ${lojasOriginais.length}`);
  console.log(`Total de lojas com alterações: ${atualizacoes.length}`);

  const lojasAtualizadas = [];

  for (const loja of lojasOriginais) {

    // Achar a atualização correspondente
    const updateItem = atualizacoes.find(x => x.codigofilial === loja.codigofilial);

    // Clona loja original
    const novaLoja = { ...loja };

    // Se há atualização, aplica só gerente/supervisor
    if (updateItem) {
      console.log(`Atualizando filial ${loja.codigofilial}`);

      if (updateItem.novo.gerente)
        novaLoja.gerente = updateItem.novo.gerente;

      if (updateItem.novo.supervisor)
        novaLoja.supervisor = updateItem.novo.supervisor;
    }

    // Campos proibidos → remover
    delete novaLoja.id;
    delete novaLoja.documentId;
    delete novaLoja.createdAt;
    delete novaLoja.updatedAt;
    delete novaLoja.publishedAt;
    delete novaLoja.locale;

    lojasAtualizadas.push(novaLoja);
  }

  // Salvar JSON final
  fs.writeFileSync(
    'filiais_atualizado.json',
    JSON.stringify(lojasAtualizadas, null, 2),
    'utf-8'
  );

  console.log('\n✔ Arquivo filiais_atualizado.json gerado com sucesso (campos removidos)!');
};

atualizarArquivoLocal();
