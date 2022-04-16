import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import {
  BLOG_DESCRIPTION,
  BLOG_KEYWORDS,
  HOMEPAGE_TITLE,
} from "../utils/constants"
import { PageProps } from "../models/PageProps"
import { HomePageBlogPostsQuery } from "../../graphql-types"

const BlogIndex = ({ data, location }: PageProps<HomePageBlogPostsQuery>) => {
  const posts = data?.allMarkdownRemark?.nodes || []

  const getNoPostsSection = () => {
    return <p>No blog posts found.</p>
  }

  const getPostsListSection = () => {
    return (
      <div className="homePostsSection">
        <ol style={{ listStyle: `none` }}>
          {posts.map((post, idx) => {
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
    )
  }

  const getPostsSection = () => {
    if (posts.length === 0) {
      return getNoPostsSection()
    } else {
      return getPostsListSection()
    }
  }

  return (
    <Layout location={location}>
      <Seo
        location={location}
        title={HOMEPAGE_TITLE}
        meta={{
          description: BLOG_DESCRIPTION,
          title: HOMEPAGE_TITLE,
          type: "website",
          keywords: BLOG_KEYWORDS,
        }}
      />
      {getPostsSection()}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query HomePageBlogPosts {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
