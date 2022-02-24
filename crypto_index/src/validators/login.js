/* eslint-disable import/prefer-default-export */
import * as yup from 'yup';

export const schema = yup.object().shape({
  password: yup.number().test('len', 'Max 6 numbers', (val) => val.toString().length === 6).required(),
  email: yup.string().email().required(),
});
