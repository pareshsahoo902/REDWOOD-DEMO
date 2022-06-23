import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const postss: QueryResolvers['postss'] = () => {
  return db.posts.findMany()
}

export const posts: QueryResolvers['posts'] = ({ id }) => {
  return db.posts.findUnique({
    where: { id },
  })
}

export const createPosts: MutationResolvers['createPosts'] = ({ input }) => {
  return db.posts.create({
    data: input,
  })
}

export const updatePosts: MutationResolvers['updatePosts'] = ({
  id,
  input,
}) => {
  return db.posts.update({
    data: input,
    where: { id },
  })
}

export const deletePosts: MutationResolvers['deletePosts'] = ({ id }) => {
  return db.posts.delete({
    where: { id },
  })
}
