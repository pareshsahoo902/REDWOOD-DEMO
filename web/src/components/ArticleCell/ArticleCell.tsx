import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: posts(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <h1>Loading...</h1>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  article,
}: CellSuccessProps<FindArticleQuery, FindArticleQueryVariables>) => {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.body}</p>
      <p>{article.createdAt}</p>
    </div>
  )
}
