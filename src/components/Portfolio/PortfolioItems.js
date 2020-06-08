import React from "react"
import Title from "../Title"
import PortfolioList from "./PortfolioList"

const PortfolioItems = () => {
  return (
    <section>
      <Title title="OUR" subtitle="PROJECTS" />
      <PortfolioList items={"itemNodes"} />
    </section>
  )
}

export default PortfolioItems
