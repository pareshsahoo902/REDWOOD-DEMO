import type { FindPostses } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Postses from 'src/components/Posts/Postses'

export const QUERY = gql`
  query FindPostses {
    postses {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No postses yet. '}
      <Link
        to={routes.newPosts()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ postses }: CellSuccessProps<FindPostses>) => {
  return <Postses postses={postses} />
}
