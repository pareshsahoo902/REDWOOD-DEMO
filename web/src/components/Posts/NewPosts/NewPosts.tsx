import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import PostsForm from 'src/components/Posts/PostsForm'

const CREATE_POSTS_MUTATION = gql`
  mutation CreatePostsMutation($input: CreatePostsInput!) {
    createPosts(input: $input) {
      id
    }
  }
`

const NewPosts = () => {
  const [createPosts, { loading, error }] = useMutation(CREATE_POSTS_MUTATION, {
    onCompleted: () => {
      toast.success('Posts created')
      navigate(routes.postses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createPosts({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Posts</h2>
      </header>
      <div className="rw-segment-main">
        <PostsForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPosts
