import { useParams } from 'react-router-native';
import { Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../../graphql/queries';
import { RepositoryItem } from './RepositoryItem';

export const RepositoryItemContainer = () => {
  const params = useParams();

  // eslint-disable-next-line no-unused-vars
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { repositoryId: params.id }
  });

  if (loading) {
    return <Text>loading</Text>
  }

  return (
    <RepositoryItem repo={data.repository} />
  );
};
