import * as yup from 'yup';

export const validateReview = yup.object().shape({
  ownerName: yup.string()
    .min(3, 'minimal 3 letters for username')
    .required('review owner name is required'),
  repositoryName: yup.string()
    .required('repository name is required'),
  rating: yup.number()
    .min(0).max(100)
    .required('rating is a number between 0 and 100, and is required')
});
