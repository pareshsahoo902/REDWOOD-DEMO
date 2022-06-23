import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_POSTS_MUTATION = gql`
  mutation DeletePostsMutation($id: Int!) {
    deletePosts(id: $id) {
      id
    }
  }
`

const formatEnum = (values: string | string[] | null | undefined) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values as string)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const Posts = ({ posts }) => {
  const [deletePosts] = useMutation(DELETE_POSTS_MUTATION, {
    onCompleted: () => {
      toast.success('Posts deleted')
      navigate(routes.postses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete posts ' + id + '?')) {
      deletePosts({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">Posts {posts.id} Detail</h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{posts.id}</td>
            </tr><tr>
              <th>Title</th>
              <td>{posts.title}</td>
            </tr><tr>
              <th>Body</th>
              <td>{posts.body}</td>
            </tr><tr>
              <th>Created at</th>
              <td>{timeTag(posts.createdAt)}</td>
            </tr><tr>
              <th>Updated at</th>
              <td>{timeTag(posts.updatedAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editPosts({ id: posts.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(posts.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Posts
