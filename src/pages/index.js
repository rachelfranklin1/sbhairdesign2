import React from "react"
import Layout from "../components/Layout"
import Banner from "../components/Banner"
import Services from "../components/Home/Services"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"
import SEO from "../components/SEO"
import ProjectWithUs from "../components/Contact/ProjectWithUs"
import Splash from "../Images/hero.jpg"

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" description={data.site.siteMetadata.description} />
      <div
        style={{
          maxWidth: "100%",
          padding: `0 1.0875rem 1.45rem`,
          backgroundImage: `url(${Splash})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          opacity: "0.7",
          height: "700px",
        }}
      >
        <Banner title={"Sarah Bavaro Hair Design"} info="welcome to"></Banner>
      </div>
      <ProjectWithUs />
    </Layout>
  )
}

export const getIndexData = graphql`
  query {
    homeImage: file(relativePath: { eq: "index-hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default Index
