import EditPostsCell from 'src/components/Posts/EditPostsCell'

type PostsPageProps = {
  id: number
}

const EditPostsPage = ({ id }: PostsPageProps) => {
  return <EditPostsCell id={id} />
}

export default EditPostsPage
