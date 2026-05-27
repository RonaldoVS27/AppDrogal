const axios = require('axios');

//Dados das lojas
const stores = [
  {
		"codigofilial": 471,
		"nomefilial": "FILIAL 471 - DROGAL JUNDIAI II",
		"endereco": "R LUIS BENACHIO",
		"numero": "122",
		"cep": "13.219-643",
		"bairro": "NUCLEO COLONIAL BARAO DEJUNDIA",
		"nomecidade": "JUNDIAI",
		"numeroibge": 3525904,
		"uf": "SP",
		"telefone": "Fone1: 19 34291200 / Fone2:  ",
		"gerente": null,
		"supervisor": null,
		"cnpj": "54.375.647/0505-74",
		"horariofuncionamento": null,
		"latitude": "-23.183225149225724", 
		"longitude": "-46.8554207811148"
	},
	{
		"codigofilial": 472,
		"nomefilial": "FILIAL 472 - DROGAL INDAIATUBA",
		"endereco": "AV CONCEICAO",
		"numero": "906",
		"cep": "13.335-410",
		"bairro": "VILA MARIA HELENA",
		"nomecidade": "INDAIATUBA",
		"numeroibge": 3520509,
		"uf": "SP",
		"telefone": "Fone1: 19 34291200 / Fone2:  ",
		"gerente": null,
		"supervisor": null,
		"cnpj": "54.375.647/0506-55",
		"horariofuncionamento": null,
		"latitude": "-23.084005819719497", 
		"longitude": "-47.194369570953555"
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
