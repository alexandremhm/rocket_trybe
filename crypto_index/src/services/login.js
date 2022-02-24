/* eslint-disable consistent-return */
const axios = require('axios').default;

export default async function handleLogin(payload) {
  const body = {
    email: payload.email,
    password: payload.password,
  };
  try {
    const { data } = await axios({
      method: 'post',
      url: 'http://localhost:4000/api/login',
      data: body,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
