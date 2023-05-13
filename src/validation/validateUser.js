import * as yup from 'yup';

export const validateUser = yup.object().shape({
  username: yup.string()
    .min(1, 'minimal 1 letters for username')
    .max(30, 'maximul 30 letters for username')
    .required('Username is required'),
  password: yup.string()
    .min(5, 'minimal 5 letters for password')
    .max(50, 'maximul 50 letters for password')
    .required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Password confirmation is required')
});
