const axios = require('axios');

//Dados das lojas
const stores =
[
  {
    "codigofilial": 432,
    "nomefilial": "FILIAL 432 - DROGAL PEDREIRA",
    "endereco": "R. XV DE NOVEMBRO",
    "numero": "696",
    "cep": "13.920-009",
    "bairro": "CENTRO",
    "nomecidade": "PEDREIRA",
    "numeroibge": null,
    "uf": "SP",
    "telefone": "Fone1:  / Fone2:  ",
    "gerente": null,
    "supervisor": null,
    "cnpj": "54.375.647/0466-23",
    "horariofuncionamento": null,
    "latitude": "-22.742718750241814", 
    "longitude": "-46.90335548403728"
  },
  {
    "codigofilial": 433,
    "nomefilial": "FILIAL 433 - DROGAL SOROCABA VIII",
    "endereco": "AV. ITAVUVU",
    "numero": "4222",
    "cep": "18.078-005",
    "bairro": "JARDIM SANTA CECILIA",
    "nomecidade": "SOROCABA",
    "numeroibge": null,
    "uf": "SP",
    "telefone": "Fone1:  / Fone2:  ",
    "gerente": null,
    "supervisor": null,
    "cnpj": "54.375.647/0467-04",
    "horariofuncionamento": null,
    "latitude": "-23.450675225257672",  
    "longitude": "-47.481002303109136"
  },
  {
    "codigofilial": 434,
    "nomefilial": "FILIAL 434 - DROGAL VOTORANTIM",
    "endereco": "AV. 31 DE MARÇO",
    "numero": "536",
    "cep": "18.110-005",
    "bairro": "CENTRO",
    "nomecidade": "VOTORANTIM",
    "numeroibge": null,
    "uf": "SP",
    "telefone": "Fone1:  / Fone2:  ",
    "gerente": null,
    "supervisor": null,
    "cnpj": "54.375.647/0468-95",
    "horariofuncionamento": null,
    "latitude": "-23.543278938457007",
    "longitude": "-47.447715491854076"
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
