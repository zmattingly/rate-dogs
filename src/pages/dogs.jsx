import { graphql } from 'gatsby'
import React from 'react'

import DogList from '../components/content/DogList'

const DogsPage = (props) => {
  const { data } = props
  const dogs = data.dogs.nodes

  return (
    <>
      <h1>Dogs</h1>
      <p>We currently have {dogs.length} dogs available for rating!</p>
      <DogList dogs={dogs} />
    </>
  )
}

export default DogsPage

export const query = graphql`
  query DogsQuery {
    dogs: allSanityDog {
      nodes {
        _id
        name
        slug {
          current
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
              # base64
              # asseturl
              # width
              # height
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400, maxHeight: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`
