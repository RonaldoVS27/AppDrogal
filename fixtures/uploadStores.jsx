const axios = require('axios');

//Dados das lojas
const stores =
[
  {
    "codigofilial": 418,
    "nomefilial": "FILIAL 418 - DROGAL SOROCABA V",
    "endereco": "AV ITAVUVU",
    "numero": "210",
    "cep": "18.075-042",
    "bairro": "VILA OLIMPIA",
    "nomecidade": "SOROCABA",
    "numeroibge": 3552205,
    "uf": "SP",
    "telefone": "Fone1: 19 34291200 / Fone2:  ",
    "gerente": null,
    "supervisor": null,
    "cnpj": "54.375.647/0452-28",
    "horariofuncionamento": null,
    "latitude": "-23.482168348465095",
    "longitude": "-47.4722259523929"
  },
  {
    "codigofilial": 419,
    "nomefilial": "FILIAL 419 - DROGAL SÃO JOSÉ D",
    "endereco": "R CAPITAO JOAO TEODORO NOGUEIRA",
    "numero": "100",
    "cep": "13.725-000",
    "bairro": "SANTO ANTONIO",
    "nomecidade": "SAO JOSE DO RIO PARDO",
    "numeroibge": 3549706,
    "uf": "SP",
    "telefone": "Fone1: 19 34291200 / Fone2:  ",
    "gerente": null,
    "supervisor": null,
    "cnpj": "54.375.647/0453-09",
    "horariofuncionamento": null,
    "latitude": "-21.59434315224486", 
    "longitude": "-46.89610525159053"
  },
  {
    "codigofilial": 420,
    "nomefilial": "FILIAL 420 - DROGAL BAURU VIII",
    "endereco": "AV GETULIO VARGAS",
    "numero": "433",
    "cep": "17.017-000",
    "bairro": "VILA GUEDES DE AZEVEDO",
    "nomecidade": "BAURU",
    "numeroibge": 3506003,
    "uf": "SP",
    "telefone": "Fone1: 19 34291200 / Fone2:  ",
    "gerente": null,
    "supervisor": null,
    "cnpj": "54.375.647/0454-90",
    "horariofuncionamento": null,
    "latitude": "-22.338504578923477", 
    "longitude": "-49.06454417809922"
  },
  {
    "codigofilial": 421,
    "nomefilial": "FILIAL 421 - DROGAL SANTA BARB",
    "endereco": "R LIMEIRA",
    "numero": "944",
    "cep": "13.454-214",
    "bairro": "LAGOA SECA",
    "nomecidade": "SANTA BARBARA DOESTE",
    "numeroibge": 3545803,
    "uf": "SP",
    "telefone": "Fone1: 19 34291200 / Fone2:  ",
    "gerente": null,
    "supervisor": null,
    "cnpj": "54.375.647/0455-70",
    "horariofuncionamento": null,
    "latitude": "-22.738935852508167",
    "longitude":  "-47.36467119417354"
  },
  {
    "codigofilial": 422,
    "nomefilial": "FILIAL 422 - DROGAL SANTA BARB",
    "endereco": "AV DA INDUSTRIA",
    "numero": "584",
    "cep": "13.454-200",
    "bairro": "JARDIM PEROLA",
    "nomecidade": "SANTA BARBARA DOESTE",
    "numeroibge": 3545803,
    "uf": "SP",
    "telefone": "Fone1: 19 34291200 / Fone2:  ",
    "gerente": null,
    "supervisor": null,
    "cnpj": "54.375.647/0456-51",
    "horariofuncionamento": null,
    "latitude": "-22.742261967390778", 
    "longitude": "-47.370799172465595"
  },
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
