const axios = require('axios');

//Dados das lojas
const stores =
[
  {
    "codigofilial": 416,
    "nomefilial": "FILIAL 416 - DROGAL MAIRIPORA ",
    "endereco": "AV PIETRO PETRI",
    "numero": "787",
    "cep": "07.661-435",
    "bairro": "TERRA PRETA",
    "nomecidade": "MAIRIPORA",
    "numeroibge": 3528502,
    "uf": "SP",
    "telefone": "Fone1: 19 34291200 / Fone2:  ",
    "gerente": null,
    "supervisor": null,
    "cnpj": "54.375.647/0450-66",
    "horariofuncionamento": null,
    "latitude": "-23.25977496795697",
    "longitude": "-46.590135668837405"

  },
  {
    "codigofilial": 417,
    "nomefilial": "FILIAL 417 - DROGAL SALTINHO",
    "endereco": "AV SETE DE SETEMBRO",
    "numero": "1618",
    "cep": "13.440-013",
    "bairro": "CENTRO",
    "nomecidade": "SALTINHO",
    "numeroibge": 3545159,
    "uf": "SP",
    "telefone": "Fone1: 19 34291200 / Fone2:  ",
    "gerente": null,
    "supervisor": null,
    "cnpj": "54.375.647/0451-47",
    "horariofuncionamento": null,
    "latitude": "-22.845151842619696" ,
    "longitude": "-47.67599796630575"
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
