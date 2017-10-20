import { gql } from 'react-apollo';

export default gql`
  query getConversationMessages($_id: ID!){
    getConversationMessages(_id: $_id){
      _id
      text
      user {
        _id
        firstName
        lastName
        username
        avatar
      }
      createdAt
    }
  }
`;
