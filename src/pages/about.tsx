// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const AboutUsPage: React.FC<PageProps<DataProps>> = ({
  data,
  path,
  location,
}) => (
  // TODO: Monika
  <Layout location={location}>
    <>
      <Seo
        title="About"
        location={location}
        og={{ type: "website" }}
        meta={{ title: "About", description: "", keywords: "" }}
      />
      <h1>About Us</h1>
      <p>We are still working on the about us page. Please stay tuned.</p>
    </>
  </Layout>
)

export default AboutUsPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
