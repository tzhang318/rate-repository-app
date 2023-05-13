import moment from 'moment';
import { format } from 'date-fns'

export const formatDate = date => {
  const parsed = Date.parse(date);
  const newDate = moment(parsed).format('MM-DD-YYYY');
  return newDate;
};

export const formatDate_dateFns = date => {
  const parsed = Date.parse(date);
  return format(parsed, 'MM-dd-yyyy');
}