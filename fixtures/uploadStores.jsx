const axios = require('axios');

//Dados das lojas
const stores = [
  {
		"codigofilial": 457,
		"nomefilial": "FILIAL 457 - DROGAL LINS III",
		"endereco": "AV SAO PAULO",
		"numero": "501",
		"cep": "16.403-020",
		"bairro": "VILA GUARARAPES",
		"nomecidade": "LINS",
		"numeroibge": 3527108,
		"uf": "SP",
		"telefone": "Fone1: 19 34291200 / Fone2:  ",
		"gerente": null,
		"supervisor": null,
		"cnpj": "54.375.647/0491-34",
		"horariofuncionamento": null,
		"latitude": "-21.682102437816393",
		"longitude": "-49.746875641735365"
	},
	{
		"codigofilial": 458,
		"nomefilial": "FILIAL 458 - DROGAL TATUI V",
		"endereco": "R PROF FRANCISCO P DE ALMEIDA",
		"numero": "154",
		"cep": "18.270-780",
		"bairro": "CENTRO",
		"nomecidade": "TATUI",
		"numeroibge": 3554003,
		"uf": "SP",
		"telefone": "Fone1: 19 34291200 / Fone2:  ",
		"gerente": null,
		"supervisor": null,
		"cnpj": "54.375.647/0492-15",
		"horariofuncionamento": null,
		"latitude": "-23.34835277800657",
		"longitude": "-47.84236406209868"
	},
	{
		"codigofilial": 459,
		"nomefilial": "FILIAL 459 - DROGAL RIO CLARO ",
		"endereco": "R JOSE FELICIO CASTELLANO (ANT-R.6A)",
		"numero": "1942",
		"cep": "13.506-040",
		"bairro": "VILA CRISTINA",
		"nomecidade": "RIO CLARO",
		"numeroibge": 3543907,
		"uf": "SP",
		"telefone": "Fone1: 19 34291200 / Fone2:  ",
		"gerente": null,
		"supervisor": null,
		"cnpj": "54.375.647/0493-04",
		"horariofuncionamento": null,
		"latitude": "-22.38262135140384", 
		"longitude": "-47.54926094406561"
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
