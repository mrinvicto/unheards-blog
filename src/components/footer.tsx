import * as React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <div className="bottom-footer">
      <div className="subscribe-footer">
        <div className="container is-max-widescreen">
          <div className="columns p-6">
            <div className="column is-centered">
              <p className="subscribe-text">
                Subscribe to the SimpleBits newsletter and save 20% off your
                next order.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="links-footer">
        <div className="container is-max-widescreen">
          <div className="columns p-6">
            <div className="column is-two-thirds p-6">
              <div>The Unheards</div>
              <div>The Unheards is a blah blha blah ...</div>
            </div>
            <div className="column p-6">
              <div>Title</div>
              <ol>
                <li>Something</li>
                <li>Something Else</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
