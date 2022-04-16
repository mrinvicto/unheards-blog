import * as React from "react"
import { PageProps } from "../models/PageProps"
import { BLOG_HOME_TITLE } from "../utils/constants"
import "../theme/theme.scss"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, children }: PageProps<any>) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  const title = BLOG_HOME_TITLE

  return (
    <div>
      <div
        className="container is-max-widescreen"
        data-is-root-path={isRootPath}
      >
        <Header isRootPath={isRootPath} title={title} />
        {/* <header className="global-header">{header}</header> */}
        <div className="columns p-2">
          <main className="column main-content-area">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
