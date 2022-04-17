import * as React from "react"
import { graphql } from "gatsby"
import { AboutMePageQuery } from "../../graphql-types"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { PageProps } from "../models/PageProps"

const AboutUsPage = ({ location }: PageProps<AboutMePageQuery>) => (
  <Layout location={location}>
    <>
      <Seo
        title="TheUnheards - A bit about Us"
        location={location}
        shouldAppendTitle={false}
        meta={{
          type: "website",
          title: "TheUnheards - A bit about Us",
          description: "Will be updating this soon.",
          keywords: "TheUnheards, TheUnheards by Monika Singh Chahal",
        }}
      />
      <div className="blog-page">
        <header>
          <h1 className="post-title">About</h1>
        </header>
        <p>Coming Soon.</p>
      </div>
    </>
  </Layout>
)

export default AboutUsPage

export const query = graphql`
  query AboutMePage {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
