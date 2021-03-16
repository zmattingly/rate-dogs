import path from 'path'

const turnDogsIntoPages = async (params) => {
  const { graphql, actions } = params

  // 1. Get a template for this page
  const dogTemplate = path.resolve('./src/templates/Dog.jsx')
  // 2. Query all dogs
  const { data } = await graphql(`
    query {
      dogs: allSanityDog {
        nodes {
          name
          description
          slug {
            current
          }
        }
      }
    }
  `)
  // 3. Loop over each dog and create a page for that dog
  data.dogs.nodes.forEach((dog) => {
    actions.createPage({
      // URL for the new page
      path: `dogs/${dog.slug.current}`,
      component: dogTemplate,
      context: {
        slug: dog.slug.current,
      },
    })
  })
}

export async function createPages(params) {
  await turnDogsIntoPages(params)
}
