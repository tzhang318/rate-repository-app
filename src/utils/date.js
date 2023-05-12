import moment from 'moment';

export const formatDate = date => {
  const parsed = Date.parse(date);
  const newDate = moment(parsed).format('MM-DD-YYYY');
  return newDate;
};
