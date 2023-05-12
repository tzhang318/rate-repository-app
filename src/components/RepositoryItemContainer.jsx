import { useParams } from 'react-router-native';
import { Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORY } from '../graphql/queries';
import { RepositoryItem } from './RepositoryItem';

export const RepositoryItemContainer = () => {
  const params = useParams();

  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: { repositoryId: params.id }
  });

  if (loading) {
    return <Text>loading</Text>
  }


  console.log('** *** ** repo data: ', data, ' ** error: ', error);

  return (
    <RepositoryItem repo={data.repository} />
  );
};
