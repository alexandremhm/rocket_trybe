const axios = require('axios').default;

export default async function getAllCurriencies(token) {
  const { data } = await axios({
    method: 'get',
    url: 'http://localhost:4000/api/crypto/btc',
    headers: {
      Authorization: token,
    },
  });
  return data;
}
