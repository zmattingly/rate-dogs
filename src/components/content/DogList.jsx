import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const DogListStyled = styled.div`
  display: grid;
  gap: 4rem;
  grid-auto-rows: auto 365px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

const DogItemStyled = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: subgrid;
  grid-row: span 1;
  margin-top: 3rem;

  a {
    text-decoration: none;
  }

  h3 {
    margin: 0 0 1rem;
    text-align: center;
  }
`

const DogItem = (props) => {
  const { dog } = props

  return (
    <DogItemStyled>
      <Link to={`/dogs/${dog.slug.current}`}>
        <h3>{dog.name}</h3>
        <Img fluid={dog.image.asset.fluid} alt={dog.name} />
      </Link>
    </DogItemStyled>
  )
}

const DogList = (props) => {
  const { dogs } = props

  return (
    <DogListStyled>
      {dogs
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((dog) => (
          <DogItem key={dog._id} dog={dog} />
        ))}
    </DogListStyled>
  )
}

export default DogList
