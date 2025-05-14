const axios = require('axios');

//Dados das lojas
const stores =
[
  {
    "codigofilial": 423,
    "nomefilial": "FILIAL 423 - DROGAL MOCOCA VI",
    "endereco": "AV AMERICO PEREIRA LIMA",
    "numero": "208",
    "cep": "13.736-260",
    "bairro": "JARDIM LAVINIA",
    "nomecidade": "MOCOCA",
    "numeroibge": 3530508,
    "uf": "SP",
    "telefone": "Fone1: 19 34291200 / Fone2:  ",
    "gerente": null,
    "supervisor": "TIAGO FERIAN DOS SANTOS",
    "cnpj": "54.375.647/0457-32",
    "horariofuncionamento": null,
    "latitude": "-21.473499962681263",
    "longitude": "-47.008162234188234"
  },
  {
    "codigofilial": 424,
    "nomefilial": "FILIAL 424 - DROGAL BATATAIS I",
    "endereco": "R ANA LUIZA",
    "numero": "311",
    "cep": "14.330-228",
    "bairro": "CASTELO",
    "nomecidade": "BATATAIS",
    "numeroibge": 3505906,
    "uf": "SP",
    "telefone": "Fone1: 19 34291200 / Fone2:  ",
    "gerente": null,
    "supervisor": "GUSTAVO FREITAS DA SILVA",
    "cnpj": "54.375.647/0458-13",
    "horariofuncionamento": null,
    "latitude": "-20.88860534936858",
    "longitude": "-47.599864839826196"
  },
  {
    "codigofilial": 425,
    "nomefilial": "FILIAL 425 - DROGAL COSMOPOLIS",
    "endereco": "AV DA SAUDADE",
    "numero": "263",
    "cep": "13.150-670",
    "bairro": "VILA JOSE KALIL AUN",
    "nomecidade": "COSMOPOLIS",
    "numeroibge": 3512803,
    "uf": "SP",
    "telefone": "Fone1: 19 34291200 / Fone2:  ",
    "gerente": null,
    "supervisor": "THIAGO FANTI PROVAZI",
    "cnpj": "54.375.647/0459-02",
    "horariofuncionamento": null,
    "latitude": "-22.646756986329436", 
    "longitude": "-47.187235600179015"
  },
  {
    "codigofilial": 426,
    "nomefilial": "FILIAL 426 - DROGAL HORTOLANDI",
    "endereco": "AV SAO FRANCISCO DE ASSIS",
    "numero": "1846",
    "cep": "13.183-090",
    "bairro": "VILA REAL",
    "nomecidade": "HORTOLANDIA",
    "numeroibge": 3519071,
    "uf": "SP",
    "telefone": "Fone1: 19 34291200 / Fone2:  ",
    "gerente": null,
    "supervisor": "MARCIO DE LIMA SANTOS",
    "cnpj": "54.375.647/0460-38",
    "horariofuncionamento": null,
    "latitude": "-22.848266347208348",
    "longitude":  "-47.21142967172608"
  },
  {
    "codigofilial": 427,
    "nomefilial": "FILIAL 427 - DROGAL SÃO SIMÃO ",
    "endereco": "AV SIMAO DA SILVA TEIXEIRA",
    "numero": "1721",
    "cep": "14.200-000",
    "bairro": "CENTRO",
    "nomecidade": "SAO SIMAO",
    "numeroibge": 3550902,
    "uf": "SP",
    "telefone": "Fone1: 19 34291200 / Fone2:  ",
    "gerente": null,
    "supervisor": "TIAGO FERIAN DOS SANTOS",
    "cnpj": "54.375.647/0461-19",
    "horariofuncionamento": null,
    "latitude": "-21.481461394366416", 
    "longitude": "-47.55569312492557"
  }
]

//Função para enviar os dados
const uploadStores = async () => {
   const url = 'http://suporteappdrogal.ddns.com.br:18083/api/informacoeslojas';
   const token = '9daa01c9a2a011d52e3be0dadafe720ee349c7d77707081c0d9db457662f0a71db6b9c929ba3a813afe67fd0d49216ddbccfd773e5bfd1f0ca9fb9cfeb5ae0f1e7fee4712f24049e0be73433593f42a11ac9701394cd44d787ccd42ca324ed0b2a31b530c3b119b6db4905a41b05b339ba5ca21d0da42417e1224b69184e1055';
 
   for (const store of stores) {
    //  console.log('Iniciando envio :', store.descricaosituacao);
     console.log('Dados:', store);
 
     try {
       const response = await axios.post(url, { data: store }, {
         headers: {
           Authorization: `Bearer ${token}`,
           'Content-Type': 'application/json',
         }
       });
 
       console.log(`Dados adicionada com sucesso:`, response.data);
     } catch (error) {
       // Log de erro detalhado
       console.error(`Erro ao adicionar ${store.descricaosituacao}:`, error.response ? error.response.data : error.message);
       if (error.response) {
         console.error('Detalhes do erro:', error.response.status, error.response.headers);
       }
     }
   }
 };
 

// Executar a função
uploadStores();
