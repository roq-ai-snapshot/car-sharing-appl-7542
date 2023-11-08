import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  name: yup.string().required(),
  position: yup.string().required(),
  start_date: yup.date().nullable(),
  end_date: yup.date().nullable(),
  company_id: yup.string().nullable().required(),
});
