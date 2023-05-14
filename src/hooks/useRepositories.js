import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

export const useRepositories =
  ({orderBy, orderDirection, searchKeyword}) =>
  useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    // fetchPolicy: 'network-only',
    variables: {
      orderBy,
      orderDirection,
      searchKeyword
    }
  });
