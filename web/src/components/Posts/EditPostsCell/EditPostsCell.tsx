import type { EditPostsById } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PostsForm from 'src/components/Posts/PostsForm'

export const QUERY = gql`
  query EditPostsById($id: Int!) {
    posts: posts(id: $id) {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`
const UPDATE_POSTS_MUTATION = gql`
  mutation UpdatePostsMutation($id: Int!, $input: UpdatePostsInput!) {
    updatePosts(id: $id, input: $input) {
      id
      title
      body
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<EditPostsById>) => {
  const [updatePosts, { loading, error }] = useMutation(UPDATE_POSTS_MUTATION, {
    onCompleted: () => {
      toast.success('Posts updated')
      navigate(routes.postses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updatePosts({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Posts {posts.id}</h2>
      </header>
      <div className="rw-segment-main">
        <PostsForm posts={posts} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
