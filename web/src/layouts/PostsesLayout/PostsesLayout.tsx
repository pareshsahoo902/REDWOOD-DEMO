import { Link, routes } from '@redwoodjs/router'
import { Toaster } from '@redwoodjs/web/toast'

type PostsLayoutProps = {
  children: React.ReactNode
}

const PostsesLayout = ({ children }: PostsLayoutProps) => {
  return (
    <div className="rw-scaffold">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link
            to={routes.postses()}
            className="rw-link"
          >
            Postses
          </Link>
        </h1>
        <Link
          to={routes.newPosts()}
          className="rw-button rw-button-green"
        >
          <div className="rw-button-icon">+</div> New Posts
        </Link>
      </header>
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default PostsesLayout
