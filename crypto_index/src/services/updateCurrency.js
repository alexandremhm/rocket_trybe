/* eslint-disable consistent-return */
const axios = require('axios').default;

export default async function updateCurrency(token, payload) {
  const body = {
    code: payload.code,
    value: payload.value,
  };
  try {
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:4000/api/crypto/btc',
      headers: {
        Authorization: token,
      },
      data: body,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
