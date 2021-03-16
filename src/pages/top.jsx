import { graphql } from 'gatsby'
import React from 'react'

import DogList from '../components/content/DogList'

const TopPage = (props) => {
  const { data } = props
  const dogs = data.dogs.nodes

  return (
    <>
      <h1>Top Dogs</h1>
      <DogList dogs={dogs} sortByRating />
    </>
  )
}

export default TopPage

export const query = graphql`
  query TopQuery {
    dogs: allSanityDog {
      nodes {
        _id
        name
        rating
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
