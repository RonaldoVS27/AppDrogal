const axios = require('axios');

//Dados das lojas
const stores =
[
  {
		"codigofilial": 435,
		"nomefilial": "FILIAL 435 - DROGAL AVENIDA SA",
		"endereco": "AV SAO PAULO",
		"numero": "2127",
		"cep": "13.401-541",
		"bairro": "PAULICEIA",
		"nomecidade": "PIRACICABA",
		"numeroibge": 3538709,
		"uf": "SP",
		"telefone": "Fone1: 19 34291229 / Fone2:  ",
		"gerente": null,
		"supervisor": "CESAR LUIS GONCALVES DO PRADO",
		"cnpj": "54.375.647/0469-76",
		"horariofuncionamento": null,
		"latitude": "-22.75722681550209", 
		"longitude": "-47.64594035652358"
	},
	{
		"codigofilial": 436,
		"nomefilial": "FILIAL 436 - DROGAL CAMPINAS X",
		"endereco": "AV ALBINO JOSE BARBOSA DE OLIVEIRA",
		"numero": "400",
		"cep": "13.084-008",
		"bairro": "BARAO GERALDO",
		"nomecidade": "CAMPINAS",
		"numeroibge": 3509502,
		"uf": "SP",
		"telefone": "Fone1: 19 34261229 / Fone2:  ",
		"gerente": null,
		"supervisor": "JEFERSON ROCHA SANCHES",
		"cnpj": "54.375.647/0470-00",
		"horariofuncionamento": null,
		"latitude": "-22.83503651659267",
		"longitude": "-47.0789670672328"
	},
	{
		"codigofilial": 437,
		"nomefilial": "FILIAL 437 - DROGAL LINS II",
		"endereco": "AV DA SAUDADE",
		"numero": "537",
		"cep": "16.401-030",
		"bairro": "RIBEIRO",
		"nomecidade": "LINS",
		"numeroibge": 3527108,
		"uf": "SP",
		"telefone": "Fone1: 19 34291200 / Fone2:  ",
		"gerente": null,
		"supervisor": null,
		"cnpj": "54.375.647/0471-90",
		"horariofuncionamento": null,
		"latitude": "-21.681681649066334", 
		"longitude": "-49.74702529013355"
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
