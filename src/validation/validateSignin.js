import * as yup from 'yup';

export const validateSignin = yup.object().shape({
  username: yup.string()
    .min(3, 'minimal 3 letters for username')
    .required('username is required'),
  password: yup.string()
    // .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, 'password has to be at least 8 characters, and include uppercase, lowercase letters, number and special charater')
    .required('password is required')
});
