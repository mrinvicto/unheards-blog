import * as React from "react"
import { Link } from "gatsby"

interface HeaderProps {
  title: string
  isRootPath: boolean
}

const getHeaderSection = (title: string, isRootPath: boolean) => {
  if (isRootPath) return <h1 className="header-blog-title">{title}</h1>
  else
    return (
      <Link to="/">
        <h2 className="header-blog-title">{title}</h2>
      </Link>
    )
}

const Header = ({ title, isRootPath }: HeaderProps) => {
  React.useEffect(() => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    )

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target
          const $target = document.getElementById(target)

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active")
          $target && $target.classList.toggle("is-active")
        })
      })
    }
  }, [])

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className={"navbar-item"}>
          {getHeaderSection(title, isRootPath)}
        </div>
        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end main-links">
          <div className="navbar-item">
            <Link className="navbar-item" to={"/about"} itemProp="url">
              About
            </Link>
            <Link className="navbar-item" to={"/what-are-we"} itemProp="url">
              What Are We?
            </Link>
            <Link className="navbar-item" to={"/contact"} itemProp="url">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header
