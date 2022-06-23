import type { ArticlesQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query ArticlesQuery {
    articles: postses {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  return (
    <ul>
      {articles.map((item, index) => {
        return (
          <>
            <h3>{`${index + 1}.` + item.title}</h3>
            <p>{item.body}</p>
            <p>{item.createdAt}</p>
            <span>
              <Link to={routes.article({ id: item.id })}>{'Show'}</Link>
            </span>
          </>
        )
      })}
    </ul>
  )
}
