export const schema = gql`
  type Posts {
    id: Int!
    title: String!
    body: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    postss: [Posts!]! @requireAuth
    posts(id: Int!): Posts @requireAuth
  }

  input CreatePostsInput {
    title: String!
    body: String!
  }

  input UpdatePostsInput {
    title: String
    body: String
  }

  type Mutation {
    createPosts(input: CreatePostsInput!): Posts! @requireAuth
    updatePosts(id: Int!, input: UpdatePostsInput!): Posts! @requireAuth
    deletePosts(id: Int!): Posts! @requireAuth
  }
`
