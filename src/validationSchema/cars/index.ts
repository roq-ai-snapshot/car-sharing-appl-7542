import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  model: yup.string().required(),
  manufacturer: yup.string().required(),
  year: yup.number().integer().required(),
  color: yup.string().nullable(),
  registration_number: yup.string().required(),
  mileage: yup.number().integer().nullable(),
  company_id: yup.string().nullable().required(),
});
