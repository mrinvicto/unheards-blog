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
      <Header isRootPath={isRootPath} title={title} />
      <div
        className="container is-max-widescreen"
        data-is-root-path={isRootPath}
      >
        {/* <header className="global-header">{header}</header> */}
        <div className="p-2">
          <main className="column main-content-area is-10">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
