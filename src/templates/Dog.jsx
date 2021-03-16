import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const SingleDogStyled = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
`

const SingleDogPage = ({ data }) => {
  const { dog } = data
  const { name, description, image } = dog

  return (
    <SingleDogStyled>
      <Img fluid={image.asset.fluid} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </SingleDogStyled>
  )
}

export default SingleDogPage

export const query = graphql`
  query($slug: String!) {
    dog: sanityDog(slug: { current: { eq: $slug } }) {
      name
      description
      image {
        asset {
          fluid(maxWidth: 630, maxHeight: 630) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`
