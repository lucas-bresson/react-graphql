import gql from 'graphql-tag';

export default gql`
  query SongsQuery {
    songs {
      id
      title
    }
  }
`;
