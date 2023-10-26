import * as yup from 'yup';

export const supplierValidationSchema = yup.object().shape({
  name: yup.string().required(),
  address: yup.string().required(),
  phone: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
