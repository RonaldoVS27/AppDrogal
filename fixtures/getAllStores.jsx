const axios = require('axios');
const fs = require('fs');
const path = require('path');

const getAllStoresPaginated = async () => {
  const url = 'http://suporteappdrogal.ddns.com.br:18083/api/informacoeslojas';
  const token = '9daa01c9a2a011d52e3be0dadafe720ee349c7d77707081c0d9db457662f0a71db6b9c929ba3a813afe67fd0d49216ddbccfd773e5bfd1f0ca9fb9cfeb5ae0f1e7fee4712f24049e0be73433593f42a11ac9701394cd44d787ccd42ca324ed0b2a31b530c3b119b6db4905a41b05b339ba5ca21d0da42417e1224b69184e1055';

  const allStores = [];
  let currentPage = 1;
  let totalPages = 1;

  try {
    do {
      const response = await axios.get(`${url}?pagination[page]=${currentPage}&pagination[pageSize]=100`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      });

      const data = response.data;
      const stores = data.data;
      const pagination = data.meta?.pagination;

      allStores.push(...stores);

      totalPages = pagination?.pageCount || 1;
      currentPage++;
    } while (currentPage <= totalPages);

    console.log(`Total de filiais carregadas: ${allStores.length}`);

    fs.writeFileSync('filiais.json', JSON.stringify(allStores, null, 2), 'utf-8');
    console.log('Arquivo filiais.json salvo com sucesso.');

    // console.log(allStores);
    return allStores;

  } catch (error) {
    console.error('Erro ao buscar as filiais:', error.response?.data || error.message);
  }
};

// Executar
getAllStoresPaginated();
