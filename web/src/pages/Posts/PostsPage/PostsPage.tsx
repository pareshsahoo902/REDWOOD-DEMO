import PostsCell from 'src/components/Posts/PostsCell'

type PostsPageProps = {
  id: number
}

const PostsPage = ({ id }: PostsPageProps) => {
  return <PostsCell id={id} />
}

export default PostsPage
