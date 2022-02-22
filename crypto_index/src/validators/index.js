/* eslint-disable import/prefer-default-export */
import * as yup from 'yup';

export const schema = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
});
