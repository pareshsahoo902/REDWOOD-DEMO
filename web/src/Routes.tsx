// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import PostsesLayout from 'src/layouts/PostsesLayout'

import BlogLayout from './layouts/BlogLayout/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/article/{id:Int}" page={ArticlePage} name="article" />
      <Set wrap={PostsesLayout}>
        <Route path="/postses/new" page={PostsNewPostsPage} name="newPosts" />
        <Route path="/postses/{id:Int}/edit" page={PostsEditPostsPage} name="editPosts" />
        <Route path="/postses/{id:Int}" page={PostsPostsPage} name="posts" />
        <Route path="/postses" page={PostsPostsesPage} name="postses" />
      </Set>

      <Set wrap={BlogLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
