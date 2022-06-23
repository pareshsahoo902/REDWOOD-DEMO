import { postss, posts, createPosts, updatePosts, deletePosts } from './postss'
import type { StandardScenario } from './postss.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('postss', () => {
  scenario('returns all postss', async (scenario: StandardScenario) => {
    const result = await postss()

    expect(result.length).toEqual(Object.keys(scenario.posts).length)
  })

  scenario('returns a single posts', async (scenario: StandardScenario) => {
    const result = await posts({ id: scenario.posts.one.id })

    expect(result).toEqual(scenario.posts.one)
  })

  scenario('creates a posts', async () => {
    const result = await createPosts({
      input: { title: 'String', body: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a posts', async (scenario: StandardScenario) => {
    const original = await posts({ id: scenario.posts.one.id })
    const result = await updatePosts({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a posts', async (scenario: StandardScenario) => {
    const original = await deletePosts({ id: scenario.posts.one.id })
    const result = await posts({ id: original.id })

    expect(result).toEqual(null)
  })
})
