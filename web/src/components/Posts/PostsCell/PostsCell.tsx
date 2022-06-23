import type { FindPostsById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Posts from 'src/components/Posts/Posts'

export const QUERY = gql`
  query FindPostsById($id: Int!) {
    posts: posts(id: $id) {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Posts not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<FindPostsById>) => {
  return <Posts posts={posts} />
}
