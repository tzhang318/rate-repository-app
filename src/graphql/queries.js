import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query {
  repositories {
    edges {
      node {
        description
        fullName
        language
        ownerAvatarUrl
        ratingAverage
        reviewCount
        forksCount
        stargazersCount
      }
    }
  }
}`;

export const GET_USERS = gql`
query {
  users {
    edges {
      node {
        username
      }
    }
  }
}`;

export const CREATE_USER = gql`
mutation ($user: CreateUserInput) {
  createUser(user: $user) {
    username
  }
}`;

// user:
// {
//   "user": {
//     "password": "password",
//     "username": "tzhang"
//   }
// }

export const AUTHENTICATE_USER = gql`
mutation ($credentials: AuthenticateInput) {
  authenticate(credentials: $credentials) {
    accessToken
    expiresAt
    user {
      username
    }
  }
}`;

// credentials:
// {
//   "credentials": {
//     "password": "password",
//     "username": "kalle"
//   }
// }

export const GET_USER = gql`
query {
  me {
    id
    username
  }
}`;