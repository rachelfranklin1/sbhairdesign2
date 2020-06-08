import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Leaf from "../Images/leaf.png"

const Prices = () => {
  return (
    <Layout>
      <SEO title="Prices" />
      <div
        style={{
          maxWidth: "100%",
          minHeight: 960,
          padding: `0 1.0875rem 1.45rem`,
          backgroundImage: `url(${Leaf})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </Layout>
  )
}

export default Prices
