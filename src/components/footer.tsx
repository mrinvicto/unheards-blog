import * as React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import { Link } from "gatsby"

const Footer = () => {
  const [done, setDone] = React.useState(false)

  const _handleSubmit = async (e: any) => {
    e.preventDefault()
    const emailId = e.target[0].value
    const result = await addToMailchimp(emailId, {
      PATHNAME: window.location,
    })

    setDone(true)
  }

  return (
    <div className="bottom-footer">
      <div className="subscribe-footer">
        <div className="container is-max-widescreen">
          <div className="p-6">
            <div className="column is-half is-offset-one-quarter">
              <p className="subscribe-text">
                {done
                  ? "Thank you for subscribing to our newsletters."
                  : "Subscribe to our weekly newsletters."}
              </p>
              <form id="mail-chimp-form" onSubmit={_handleSubmit}>
                <input
                  id="email_id"
                  placeholder="Enter your email address"
                  type={"email"}
                  required
                />
                <input
                  id="mail-chimp-submit"
                  type={"submit"}
                  value={"Subscribe"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="links-footer">
        <div className="container is-max-widescreen footer-container">
          <div className="footer-links-wrapper">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/what-are-we"}>What Are We?</Link>
            <Link to={"/contact"}>Contact</Link>
          </div>
          <div className="footer-copyright">
            © 2018 - 2022, Built with{" "}
            <a href="https://www.gatsbyjs.com/" target={"_blank"}>
              Gatsby
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
