import React from "react"
import CategoryCard from "./CategoryCard"
import styled from "styled-components"
import Title from "../Title"

const PortfolioCategoryItems = () => {
  return (
    <>
      <Title title="PROJECT" subtitle="CATEGORIES" />
      <PortfolioItemsWrapper data-cy="project-categories">
        return <CategoryCard key={"node.id"} category={"node"} />
      </PortfolioItemsWrapper>
    </>
  )
}

const PortfolioItemsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  grid-auto-rows: 400px;
  grid-gap: 2rem;

  padding: 1rem;

  @media (min-width: 780px) {
    padding: 2rem;
  }
`
export default PortfolioCategoryItems
