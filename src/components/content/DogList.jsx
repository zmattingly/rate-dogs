import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const DogListStyled = styled.div`
  border-top: solid 0.5rem var(--black);
  display: grid;
  gap: 2rem;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  height: 100%;
`

const DogItemStyled = styled.div`
  display: grid;
  grid-template-rows: subgrid;
  grid-row: span 1;

  a {
    text-decoration: none;
  }

  h3,
  h4 {
    text-align: center;
    margin: 1rem 0;
  }
`

const DogItem = (props) => {
  const { dog, position } = props

  return (
    <DogItemStyled>
      <Link to={`/dogs/${dog.slug.current}`}>
        <h3>{dog.name}</h3>
        {position && <h4>{`Number ${position} dog!`}</h4>}
        <Img fluid={dog.image.asset.fluid} alt={dog.name} />
      </Link>
    </DogItemStyled>
  )
}

const DogList = (props) => {
  const { dogs, sortByRating } = props

  return (
    <DogListStyled>
      {dogs
        .sort((a, b) => {
          if (sortByRating && b.rating !== a.rating) {
            return b.rating - a.rating
          }
          return a.name.localeCompare(b.name)
        })
        .map((dog, index) => (
          <DogItem
            key={dog._id}
            dog={dog}
            position={sortByRating ? index + 1 : null}
          />
        ))}
    </DogListStyled>
  )
}

export default DogList
