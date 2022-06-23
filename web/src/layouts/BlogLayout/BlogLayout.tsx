import { Link, routes } from '@redwoodjs/router'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <header style={{ backgroundColor: 'cyan', padding: '1px' }}>
        <h2 style={{ justifyContent: 'center' }}>
          <Link to="/">My Own Blog</Link>
        </h2>
        <nav
          style={{
            flexDirection: 'row',
            display: 'flex',

            marginBottom: '3rem',
          }}
        >
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
