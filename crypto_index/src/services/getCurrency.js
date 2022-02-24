/* eslint-disable consistent-return */
const axios = require('axios').default;

export default async function getCurrency(token, params) {
  try {
    const { data } = await axios({
      method: 'get',
      url: `http://localhost:4000/api/crypto/btc/${params.code}`,
      headers: {
        Authorization: token,
      },
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
