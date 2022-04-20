import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  BLOG_DESCRIPTION,
  BLOG_KEYWORDS,
  BLOG_LIST_PAGE_TITLE_PREFIX,
} from "../utils/constants"
import { PageProps } from "../models/PageProps"
import { BlogPostsByPageNumberQuery } from "../../graphql-types"

const RecentArticleListTemplate = ({
  data,
  location,
  pageContext,
}: PageProps<BlogPostsByPageNumberQuery>) => {
  const posts = data?.allMarkdownRemark.edges || []
  const { currentPage, numberOfPages } = pageContext || {}
  const isFirst = currentPage === 1
  const isLast = currentPage === numberOfPages
  const prevPage =
    currentPage - 1 === 1 ? "/" : `/${(currentPage - 1).toString()}`
  const nextPage = `/${(currentPage + 1).toString()}`
  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={`${BLOG_LIST_PAGE_TITLE_PREFIX} - Page ${currentPage}`}
        meta={{
          keywords: BLOG_KEYWORDS,
          description: BLOG_DESCRIPTION,
          type: "website",
        }}
        shouldAppendTitle={true}
      />
      <div className="homePostsSection">
        <ol style={{ listStyle: `none` }}>
          {posts?.map((postEdge, idx) => {
            const post = postEdge.node
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
                  <img
                    className="featured-image"
                    src={post?.frontmatter?.featuredImage || ""}
                  />
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

        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </div>
    </Layout>
  )
}

export default RecentArticleListTemplate

export const pageQuery = graphql`
  query BlogPostsByPageNumber($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            permalink
            excerpt
            featuredImage
          }
        }
      }
    }
  }
`
