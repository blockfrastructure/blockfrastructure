import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"


import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Blockfrastructure"

    console.log('props', this.props)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to Blockfrastructure, We provide staking infrastructure and tooling for token holders of stake-based blockchains.</p>
        <p>
          Head over to our blog to learn about blockchain and staking, the risks and rewards of staking in blockchain networks.
        </p>
        <h2>Our Supported Networks</h2>
        <StaticQuery
          query={kusamaImageQuery}
          render={data => {
            return (
              <div>
                <Image
                  fixed={data.file.childImageSharp.fixed}
                  style={{
                    marginBottom: 0,
                    minWidth: 50,
                    borderRadius: `100%`,
                  }}
                  imgStyle={{
                    borderRadius: `50%`,
                  }}
                />
                <div>Kusama</div>
              </div>
            )
          }}
        />
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

const kusamaImageQuery = graphql`
query {
  file(relativePath: { eq: "kusama.png" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fixed(width: 125, height: 125) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`

export default IndexPage
