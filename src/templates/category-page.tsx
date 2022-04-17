import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { CATEGORY_DETAILS } from "../utils/constants"
import { PageProps } from "../models/PageProps"
import { CategoryPageByTypeQuery } from "../../graphql-types"

const CategoryPageTemplate = ({
  data,
  location,
  pageContext,
}: PageProps<CategoryPageByTypeQuery>) => {
  const posts = data?.allMarkdownRemark.nodes || []
  const categoryDetails = CATEGORY_DETAILS[pageContext?.category?.toLowerCase()]
  return (
    <Layout location={location}>
      <Seo
        shouldAppendTitle={true}
        location={location}
        title={categoryDetails.title}
        meta={{
          keywords: categoryDetails.keywords,
          description: categoryDetails.description,
          type: "website",
        }}
      />
      <div className="homePostsSection">
        <div className="category-meta">
          <h2 className="category-title">{categoryDetails.title}</h2>
          <p className="category-description">{categoryDetails.description}</p>
        </div>

        <ol style={{ listStyle: `none` }}>
          {posts?.map((post, idx) => {
            const title = post?.frontmatter?.title
            const isLastPost = idx === posts.length - 1

            return (
              <li key={post?.frontmatter?.permalink}>
                <article
                  className={`${
                    isLastPost ? "post-list-item-last" : ""
                  } post-list-item`}
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2 className={"post-title"}>
                      <Link
                        to={post?.frontmatter?.permalink || ""}
                        itemProp="url"
                      >
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <div className="post-meta">
                      <span className="post-meta-title">Written by:</span>
                      <span className="post-meta-value">
                        Monika Singh Chahal
                      </span>
                      <span className="post-meta-title">on</span>
                      <span className="post-meta-value">
                        {post?.frontmatter?.date}
                      </span>
                    </div>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post?.frontmatter?.excerpt || "",
                      }}
                      itemProp="description"
                    />
                  </section>
                  <div className={`read-more-link`}>
                    <Link
                      to={post?.frontmatter?.permalink || ""}
                      itemProp="url"
                    >
                      <span itemProp="headline">Read More</span>
                    </Link>
                  </div>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default CategoryPageTemplate

export const pageQuery = graphql`
  query CategoryPageByType($category: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          excerpt
          permalink
        }
      }
    }
  }
`
